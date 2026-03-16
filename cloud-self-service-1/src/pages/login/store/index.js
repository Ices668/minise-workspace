import { makeAutoObservable } from "mobx";

export default class Store {
    email = '';
    password = '';
    loading = false;
    errorMessage = null;

    // authStore 通过 createWidget 外部传入，或通过 context 获取
    authStore = null;

    constructor() {
        makeAutoObservable(this, null, { autoBind: true });
    }

    setAuthStore(authStore) {
        this.authStore = authStore;
    }

    validate() {
        if (this.email && this.password) {
            return true;
        }
        this.errorMessage = '请填写邮箱和密码';
        return false;
    }

    *login() {
        this.errorMessage = null;
        if (!this.validate()) return;
        if (!this.authStore) return;

        yield this.authStore.login(this.email, this.password);
        if (this.authStore.error) {
            this.errorMessage = this.authStore.error;
        }
    }

    setEmail(value) {
        this.email = value.trim();
    }

    setPassword(value) {
        this.password = value;
    }

    // 兼容现有 component 中使用 store.username 的情况
    get username() { return this.email; }
    setUsername(value) { this.setEmail(value); }
}
