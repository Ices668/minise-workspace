import { makeAutoObservable } from 'mobx';
import sdk from '../api/sdk';

const AUTH_USER_KEY = 'auth_user';

const readStoredUser = () => {
    try {
        const raw = localStorage.getItem(AUTH_USER_KEY);
        return raw ? JSON.parse(raw) : null;
    } catch {
        localStorage.removeItem(AUTH_USER_KEY);
        return null;
    }
};

export default class AuthStore {
    token = localStorage.getItem('auth_token') || null;
    user = readStoredUser();
    needResetPassword = !!readStoredUser()?.needResetPassword;
    unreadCount = 0;
    loading = false;
    error = null;

    constructor() {
        makeAutoObservable(this, null, { autoBind: true });

        if (!this.token || !this.user) {
            this.logout();
        }
    }

    get isLoggedIn() {
        return !!this.token;
    }

    persistSession() {
        if (this.token && this.user) {
            localStorage.setItem('auth_token', this.token);
            localStorage.setItem(AUTH_USER_KEY, JSON.stringify(this.user));
        }
    }

    applySession(token, user) {
        this.token = token;
        this.user = user;
        this.needResetPassword = !!user?.needResetPassword;
        this.persistSession();
    }

    *loadUnreadCount() {
        if (!this.token) {
            this.unreadCount = 0;
            return;
        }

        try {
            const notifications = yield sdk.getNotifications();
            this.unreadCount = notifications.filter((item) => !item.isRead).length;
        } catch {
            this.unreadCount = 0;
        }
    }

    *login(email, password) {
        this.loading = true;
        this.error = null;
        try {
            const result = yield sdk.login(email, password);
            if (!result?.token || !result?.user) {
                throw new Error('用户名或密码错误');
            }

            this.applySession(result.token, result.user);
            yield this.loadUnreadCount();
        } catch (error) {
            this.error = error.message || '登录失败，请稍后重试';
        } finally {
            this.loading = false;
        }
    }

    *resetPassword(email, oldPassword, newPassword) {
        this.loading = true;
        this.error = null;
        try {
            const result = yield sdk.resetPassword(email, oldPassword, newPassword);

            if (result.message !== 'Password reset successfully') {
                throw new Error(result.message || '密码重置失败');
            }

            this.needResetPassword = false;
            this.user = this.user ? { ...this.user, needResetPassword: false } : this.user;
            this.persistSession();
        } catch (error) {
            this.error = error.message || '密码重置失败，请稍后重试';
        } finally {
            this.loading = false;
        }
    }

    logout() {
        this.token = null;
        this.user = null;
        this.needResetPassword = false;
        this.unreadCount = 0;
        this.error = null;
        localStorage.removeItem('auth_token');
        localStorage.removeItem(AUTH_USER_KEY);
    }

    setUnreadCount(count) {
        this.unreadCount = count;
    }

    decrementUnreadCount() {
        if (this.unreadCount > 0) this.unreadCount--;
    }

    clearUnreadCount() {
        this.unreadCount = 0;
    }
}
