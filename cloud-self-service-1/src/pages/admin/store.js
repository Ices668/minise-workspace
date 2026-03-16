import { makeAutoObservable } from 'mobx';
import sdk from '../../api/sdk';

const secrecyToClassification = {
    PUBLIC: 'public',
    INTERNAL: 'internal',
    CONFIDENTIAL: 'confidential',
    TOP_SECRET: 'secret',
};

const classificationToSecrecy = {
    public: 'PUBLIC',
    internal: 'INTERNAL',
    confidential: 'CONFIDENTIAL',
    secret: 'TOP_SECRET',
};

const formatDateTime = (value) =>
    value ? new Date(value).toLocaleString('zh-CN') : '';

const normalizeMemory = (value) => (value >= 256 ? Math.round(value / 1024) : value);

const buildCategoryTree = (categories) => {
    const nodes = new Map();

    categories.forEach((category) => {
        nodes.set(category.id, {
            id: category.id,
            name: category.name,
            path: category.description || `/${category.name}`,
            classification: secrecyToClassification[category.secrecyLevel] || 'public',
            parentId: category.parentId || null,
            createdAt: formatDateTime(category.createdAt),
            children: [],
        });
    });

    const roots = [];

    nodes.forEach((node) => {
        if (node.parentId && nodes.has(node.parentId)) {
            nodes.get(node.parentId).children.push(node);
        } else {
            roots.push(node);
        }
    });

    const sortNodes = (items) => {
        items.sort((left, right) => left.name.localeCompare(right.name, 'zh-CN'));
        items.forEach((item) => sortNodes(item.children));
        return items;
    };

    return sortNodes(roots);
};

export default class Store {
    users = [];
    loadingUsers = false;
    vmRequests = [];
    loadingVmRequests = false;
    dataDirectories = [];
    loadingDataDirectories = false;
    error = null;
    accountProvisionResult = null;

    constructor() {
        makeAutoObservable(this, null, { autoBind: true });
    }

    clearError() {
        this.error = null;
    }

    *fetchUsers() {
        this.loadingUsers = true;

        try {
            const users = yield sdk.getAdminUsers();
            this.users = users.map((user) => ({
                id: user.id,
                username: user.nickname || user.email.split('@')[0],
                email: user.email,
                role: user.role.toLowerCase(),
                createdAt: formatDateTime(user.createdAt),
            }));
        } catch (error) {
            this.error = error.message || '用户列表加载失败';
        } finally {
            this.loadingUsers = false;
        }
    }

    *addUser(userData) {
        this.error = null;
        this.accountProvisionResult = null;

        try {
            const result = yield sdk.addUser({
                email: userData.email,
                nickname: userData.username,
                role: userData.role.toUpperCase(),
            });
            this.accountProvisionResult = {
                email: result.email,
                nickname: result.nickname || userData.username,
                emailSent: !!result.emailSent,
                fallbackInitialPassword: result.fallbackInitialPassword || null,
            };
            yield this.fetchUsers();
            return true;
        } catch (error) {
            this.error = error.message || '添加用户失败';
            return false;
        }
    }

    *updateUserRole(userId, role) {
        this.error = null;

        try {
            yield sdk.updateUserRole(userId, role.toUpperCase());
            yield this.fetchUsers();
            return true;
        } catch (error) {
            this.error = error.message || '更新用户角色失败';
            return false;
        }
    }

    *fetchVmRequests() {
        this.loadingVmRequests = true;

        try {
            const applications = yield sdk.getAdminApplications();
            this.vmRequests = applications.map((application) => ({
                id: application.id,
                userId: application.userId,
                username: application.user?.nickname || application.user?.email || `用户${application.userId}`,
                name: `申请 #${application.id}`,
                type: application.gpu ? 'gpu' : 'standard',
                cpu: application.cpu,
                memory: normalizeMemory(application.memory),
                disk: application.storage,
                duration: application.duration,
                reason: application.reason || '',
                status: (application.status || 'PENDING').toLowerCase(),
                createdAt: formatDateTime(application.createdAt),
                categories: application.dataCategoryConnections.map(({ dataCategory }) => dataCategory.name),
            }));
        } catch (error) {
            this.error = error.message || '申请列表加载失败';
        } finally {
            this.loadingVmRequests = false;
        }
    }

    *approveVmRequest(requestId) {
        this.error = null;

        try {
            yield sdk.approveApplication(requestId, true);
            yield this.fetchVmRequests();
            return true;
        } catch (error) {
            this.error = error.message || '批准申请失败';
            return false;
        }
    }

    *rejectVmRequest(requestId, rejectReason) {
        this.error = null;

        try {
            yield sdk.approveApplication(requestId, false, rejectReason);
            yield this.fetchVmRequests();
            return true;
        } catch (error) {
            this.error = error.message || '拒绝申请失败';
            return false;
        }
    }

    *fetchDataDirectories() {
        this.loadingDataDirectories = true;

        try {
            const categories = yield sdk.getAdminDataCategories();
            this.dataDirectories = buildCategoryTree(categories);
        } catch (error) {
            this.error = error.message || '数据分类加载失败';
        } finally {
            this.loadingDataDirectories = false;
        }
    }

    *addDataDirectory(directoryData) {
        this.error = null;

        try {
            yield sdk.addDataCategory({
                name: directoryData.name,
                description: directoryData.path || null,
                parentId: directoryData.parentId || null,
                secrecyLevel: classificationToSecrecy[directoryData.classification] || 'PUBLIC',
            });
            yield this.fetchDataDirectories();
            return true;
        } catch (error) {
            this.error = error.message || '添加数据分类失败';
            return false;
        }
    }

    *updateDataDirectory(directoryId, directoryData) {
        this.error = null;

        try {
            yield sdk.updateDataCategory(directoryId, {
                name: directoryData.name,
                description: directoryData.path || null,
                parentId: directoryData.parentId || null,
                secrecyLevel: classificationToSecrecy[directoryData.classification] || 'PUBLIC',
            });
            yield this.fetchDataDirectories();
            return true;
        } catch (error) {
            this.error = error.message || '更新数据分类失败';
            return false;
        }
    }

    *deleteDataDirectory(directoryId) {
        this.error = null;

        try {
            yield sdk.deleteDataCategory(directoryId);
            yield this.fetchDataDirectories();
            return true;
        } catch (error) {
            this.error = error.message || '删除数据分类失败';
            return false;
        }
    }
}
