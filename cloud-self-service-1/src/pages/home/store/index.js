import { makeAutoObservable } from 'mobx';
import sdk from '../../../api/sdk';

const SENSITIVE_LEVELS = ['CONFIDENTIAL', 'TOP_SECRET'];

const normalizeMemory = (value) => {
    if (!value) {
        return 0;
    }

    return value >= 256 ? Math.round(value / 1024) : value;
};

export default class Store {
    applications = [];
    servers = [];
    dataCategories = [];
    loading = false;
    submitting = false;
    actionServerId = null;
    error = null;

    constructor() {
        makeAutoObservable(this, null, { autoBind: true });
    }

    clearError() {
        this.error = null;
    }

    get categoriesById() {
        return new Map(this.dataCategories.map((item) => [item.id, item]));
    }

    buildCategoryPath(categoryId) {
        const segments = [];
        let current = this.categoriesById.get(categoryId);

        while (current) {
            segments.unshift(current.name);
            current = current.parentId ? this.categoriesById.get(current.parentId) : null;
        }

        return segments.join(' / ');
    }

    *init() {
        this.loading = true;
        this.error = null;

        try {
            const [applications, servers, dataCategories] = yield Promise.all([
                sdk.getApplications(),
                sdk.getServers(),
                sdk.getDataCategories(),
            ]);

            this.applications = applications;
            this.servers = servers;
            this.dataCategories = dataCategories;
        } catch (error) {
            this.error = error.message || '加载失败';
        } finally {
            this.loading = false;
        }
    }

    *submitApplication(data) {
        this.submitting = true;
        this.error = null;

        try {
            yield sdk.submitApplication(data);
            yield this.init();
            return true;
        } catch (error) {
            this.error = error.message || '申请提交失败';
            return false;
        } finally {
            this.submitting = false;
        }
    }

    *serverAction(id, action) {
        this.actionServerId = id;
        this.error = null;

        try {
            yield sdk.serverAction(id, action);
            yield this.init();
            return true;
        } catch (error) {
            this.error = error.message || '操作失败';
            return false;
        } finally {
            this.actionServerId = null;
        }
    }

    *extendServer(id, days) {
        this.actionServerId = id;
        this.error = null;

        try {
            yield sdk.extendServer(id, days);
            yield this.init();
            return true;
        } catch (error) {
            this.error = error.message || '续期失败';
            return false;
        } finally {
            this.actionServerId = null;
        }
    }

    get normalizedServers() {
        return this.servers.map((server) => ({
            id: server.id,
            name: server.pveName || `服务器 #${server.id}`,
            status: server.status.toLowerCase(),
            type: server.pveType === 'lxc' ? 'container' : 'vm',
            cpu: server.application?.cpu ?? 0,
            memory: normalizeMemory(server.application?.memory ?? 0),
            gpu: !!server.application?.gpu,
            storage: server.application?.storage ?? 0,
            createdAt: server.createdAt,
            expiresAt: server.expireAt,
            host: server.pveNode || server.pveHost || '未分配',
            ip: server.pveIp || '未分配',
        }));
    }

    get normalizedApplications() {
        return this.applications.map((application) => {
            const categories = application.dataCategoryConnections.map(({ dataCategory }) => ({
                id: dataCategory.id,
                name: dataCategory.name,
                secrecyLevel: dataCategory.secrecyLevel,
                path: this.buildCategoryPath(dataCategory.id) || dataCategory.name,
            }));

            return {
                id: application.id,
                status: application.status.toLowerCase(),
                cpu: application.cpu,
                memory: normalizeMemory(application.memory),
                gpu: !!application.gpu,
                storage: application.storage,
                duration: application.duration,
                reason: application.reason || '',
                createdAt: application.createdAt,
                server: application.server || null,
                categories,
                requiresApproval: categories.some((category) =>
                    SENSITIVE_LEVELS.includes(category.secrecyLevel)
                ),
            };
        });
    }
}
