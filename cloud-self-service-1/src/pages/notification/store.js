import { makeAutoObservable } from 'mobx';
import sdk from '../../api/sdk';

const inferType = (content) => {
    if (content.includes('拒绝') || content.includes('失败')) {
        return 'error';
    }
    if (content.includes('通过') || content.includes('成功')) {
        return 'success';
    }
    if (content.includes('到期') || content.includes('提醒')) {
        return 'warning';
    }
    return 'info';
};

export default class Store {
    notifications = [];
    loadingNotifications = false;
    error = null;
    authStore = null;

    constructor() {
        makeAutoObservable(this, null, { autoBind: true });
    }

    setAuthStore(authStore) {
        this.authStore = authStore;
    }

    syncUnreadCount() {
        if (this.authStore) {
            this.authStore.setUnreadCount(this.unreadCount);
        }
    }

    *fetchNotifications() {
        this.loadingNotifications = true;
        this.error = null;

        try {
            const data = yield sdk.getNotifications();
            this.notifications = data.map((notification) => ({
                id: notification.id,
                title: notification.content.length > 36
                    ? `${notification.content.slice(0, 36)}...`
                    : notification.content,
                content: notification.content,
                type: inferType(notification.content),
                isRead: notification.isRead,
                createdAt: notification.createdAt,
            }));
            this.syncUnreadCount();
        } catch (error) {
            this.error = error.message || '加载通知失败';
        } finally {
            this.loadingNotifications = false;
        }
    }

    *markAsRead(notificationId) {
        const notification = this.notifications.find((item) => item.id === notificationId);
        if (!notification || notification.isRead) {
            return true;
        }

        try {
            yield sdk.markNotificationRead(notificationId);
            notification.isRead = true;
            this.syncUnreadCount();
            return true;
        } catch (error) {
            this.error = error.message || '标记已读失败';
            return false;
        }
    }

    *markAllAsRead() {
        try {
            yield sdk.markAllNotificationsRead();
            this.notifications.forEach((notification) => {
                notification.isRead = true;
            });
            this.syncUnreadCount();
            return true;
        } catch (error) {
            this.error = error.message || '批量标记已读失败';
            return false;
        }
    }

    get unreadCount() {
        return this.notifications.filter((notification) => !notification.isRead).length;
    }
}
