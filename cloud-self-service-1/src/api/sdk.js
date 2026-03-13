import callApi from './api-client.js';

const baseUrl = '/web-api';

export default {
    // ── 认证 ──────────────────────────────────────────────
    login: (email, password) => callApi(`${baseUrl}/auth/login`, 'POST', { email, password }),
    resetPassword: (email, oldPassword, newPassword) =>
        callApi(`${baseUrl}/auth/reset-password`, 'POST', { email, oldPassword, newPassword }),

    // ── 用户端：申请 ──────────────────────────────────────
    getApplications: () => callApi(`${baseUrl}/user/applications`, 'GET'),
    submitApplication: (data) => callApi(`${baseUrl}/user/applications`, 'POST', data),

    // ── 用户端：服务器 ────────────────────────────────────
    getServers: () => callApi(`${baseUrl}/user/servers`, 'GET'),
    serverAction: (id, action) => callApi(`${baseUrl}/user/servers/${id}/${action}`, 'POST'),
    extendServer: (id, extensionDays) =>
        callApi(`${baseUrl}/user/servers/${id}/extend`, 'POST', { extensionDays }),

    // ── 用户端：通知 ──────────────────────────────────────
    getNotifications: () => callApi(`${baseUrl}/user/notifications`, 'GET'),
    markNotificationRead: (id) => callApi(`${baseUrl}/user/notifications/${id}/read`, 'PUT'),
    markAllNotificationsRead: () => callApi(`${baseUrl}/user/notifications/read-all`, 'PUT'),

    // ── 公共：数据分类（用户申请时选择）──────────────────
    getDataCategories: () => callApi(`${baseUrl}/user/data-categories`, 'GET'),

    // ── 管理员：申请审批 ──────────────────────────────────
    getAdminApplications: () => callApi(`${baseUrl}/admin/applications`, 'GET'),
    approveApplication: (id, approved, reason = '') =>
        callApi(`${baseUrl}/admin/applications/${id}/approve`, 'POST', { approved, reason }),

    // ── 管理员：用户管理 ──────────────────────────────────
    getAdminUsers: () => callApi(`${baseUrl}/admin/users`, 'GET'),
    addUser: (data) => callApi(`${baseUrl}/admin/users`, 'POST', data),
    updateUserRole: (id, role) => callApi(`${baseUrl}/admin/users/${id}`, 'PUT', { role }),

    // ── 管理员：数据分类管理 ──────────────────────────────
    getAdminDataCategories: () => callApi(`${baseUrl}/admin/data-categories`, 'GET'),
    addDataCategory: (data) => callApi(`${baseUrl}/admin/data-categories`, 'POST', data),
    updateDataCategory: (id, data) =>
        callApi(`${baseUrl}/admin/data-categories/${id}`, 'PUT', data),
    deleteDataCategory: (id) => callApi(`${baseUrl}/admin/data-categories/${id}`, 'DELETE'),

    // ── 用户端：主机实例 ──────────────────────────────────
    getUserHostInstances: (hostName) =>
        callApi(`${baseUrl}/user/servers/host/${hostName}`, 'GET'),

    // ── 管理员：主机实例 ──────────────────────────────────
    getHostInstances: (hostName) =>
        callApi(`${baseUrl}/admin/servers/host/${hostName}`, 'GET'),
}
