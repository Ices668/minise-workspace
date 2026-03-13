import { useState } from 'react';
import { observer } from 'mobx-react-lite';
import {
    EnvelopeIcon,
    ShieldCheckIcon,
    UserGroupIcon,
    UserIcon,
} from '@heroicons/react/24/outline';
import Info from '../../../common/components/Info';
import Tip from '../../../common/components/Tip';
import Warning from '../../../common/components/Warning';
import { useStore } from '../context';

const UserManagementView = observer(function UserManagementView() {
    const store = useStore();
    const [draftRoles, setDraftRoles] = useState({});
    const [form, setForm] = useState({
        username: '',
        email: '',
        role: 'user',
    });
    const [submitting, setSubmitting] = useState(false);

    const handleAddUser = async () => {
        if (!form.username || !form.email) {
            store.error = '请填写用户名和邮箱';
            return;
        }

        setSubmitting(true);
        const success = await store.addUser(form);
        setSubmitting(false);

        if (success) {
            setForm({
                username: '',
                email: '',
                role: 'user',
            });
        }
    };

    const handleSaveRole = async (userId) => {
        const nextRole = draftRoles[userId];
        const currentUser = store.users.find((user) => user.id === userId);

        if (!currentUser || !nextRole || nextRole === currentUser.role) {
            return;
        }

        await store.updateUserRole(userId, nextRole);
        setDraftRoles((current) => {
            const updated = { ...current };
            delete updated[userId];
            return updated;
        });
    };

    return (
        <div className="space-y-8">
            {store.error && (
                <div>
                    <Warning text={store.error} />
                </div>
            )}

            {store.accountProvisionResult?.emailSent && (
                <div>
                    <Tip text={`初始密码已发送到 ${store.accountProvisionResult.email}，用户首次登录后需修改密码。`} />
                </div>
            )}

            {store.accountProvisionResult?.fallbackInitialPassword && (
                <div className="space-y-2">
                    <Info text={`邮件发送失败，请手动转交一次性初始密码：${store.accountProvisionResult.fallbackInitialPassword}`} />
                    <Tip text={`该密码仅在本次创建后返回一次，用户邮箱：${store.accountProvisionResult.email}`} />
                </div>
            )}

            <div className="rounded-[2.5rem] border border-[var(--glass-border)] bg-[var(--glass-bg)] p-10 shadow-2xl shadow-indigo-500/5 backdrop-blur-md">
                <div className="mb-10 flex items-center gap-6">
                    <div className="flex h-16 w-16 items-center justify-center rounded-[1.5rem] bg-indigo-500/10 text-indigo-600 shadow-xl shadow-indigo-500/10">
                        <UserGroupIcon className="h-8 w-8" />
                    </div>
                    <div>
                        <h3 className="text-2xl font-black tracking-tight text-[var(--text-primary)]">注册新账号</h3>
                        <p className="mt-1 text-[11px] font-medium uppercase tracking-[0.2em] text-[var(--text-secondary)] opacity-70">
                            New User Registration
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                    <div className="space-y-3">
                        <label className="ml-2 flex items-center gap-2 text-[11px] font-black uppercase tracking-[0.2em] text-[var(--text-tertiary)]">
                            <UserIcon className="h-4 w-4 opacity-70" />
                            用户名
                        </label>
                        <input
                            type="text"
                            value={form.username}
                            onChange={(event) => setForm((current) => ({ ...current, username: event.target.value }))}
                            className="w-full rounded-2xl border border-[var(--glass-border)] bg-[var(--bg-secondary)]/50 px-6 py-4 font-bold text-[var(--text-primary)] transition-all placeholder:text-[var(--text-tertiary)]/50 focus:border-[var(--primary-color)] focus:outline-none focus:ring-4 focus:ring-[var(--primary-color)]/10"
                            placeholder="输入用户名"
                        />
                    </div>
                    <div className="space-y-3">
                        <label className="ml-2 flex items-center gap-2 text-[11px] font-black uppercase tracking-[0.2em] text-[var(--text-tertiary)]">
                            <EnvelopeIcon className="h-4 w-4 opacity-70" />
                            电子邮箱
                        </label>
                        <input
                            type="email"
                            value={form.email}
                            onChange={(event) => setForm((current) => ({ ...current, email: event.target.value }))}
                            className="w-full rounded-2xl border border-[var(--glass-border)] bg-[var(--bg-secondary)]/50 px-6 py-4 font-bold text-[var(--text-primary)] transition-all placeholder:text-[var(--text-tertiary)]/50 focus:border-[var(--primary-color)] focus:outline-none focus:ring-4 focus:ring-[var(--primary-color)]/10"
                            placeholder="example@mail.com"
                        />
                    </div>
                    <div className="space-y-3">
                        <label className="ml-2 flex items-center gap-2 text-[11px] font-black uppercase tracking-[0.2em] text-[var(--text-tertiary)]">
                            <ShieldCheckIcon className="h-4 w-4 opacity-70" />
                            权限角色
                        </label>
                        <select
                            value={form.role}
                            onChange={(event) => setForm((current) => ({ ...current, role: event.target.value }))}
                            className="w-full rounded-2xl border border-[var(--glass-border)] bg-[var(--bg-secondary)]/50 px-6 py-4 font-bold text-[var(--text-primary)] transition-all focus:border-[var(--primary-color)] focus:outline-none focus:ring-4 focus:ring-[var(--primary-color)]/10"
                        >
                            <option value="user">普通用户</option>
                            <option value="admin">管理员</option>
                        </select>
                        <p className="text-xs text-[var(--text-tertiary)]">系统会自动生成初始密码并优先通过邮件发送。</p>
                    </div>
                </div>

                <div className="mt-10 flex justify-end">
                    <button
                        type="button"
                        onClick={handleAddUser}
                        className="button button-primary px-8 py-3"
                        disabled={submitting}
                    >
                        {submitting ? '创建中...' : '创建账号'}
                    </button>
                </div>
            </div>

            <div className="overflow-hidden rounded-[2.5rem] border border-[var(--glass-border)] bg-[var(--glass-bg)] shadow-2xl shadow-slate-200/50 backdrop-blur-md dark:shadow-none">
                <div className="border-b border-[var(--glass-border)] bg-[var(--bg-tertiary)]/10 px-8 py-6">
                    <h2 className="text-lg font-black text-[var(--text-primary)]">用户列表</h2>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-[var(--text-tertiary)]">User Directory</p>
                </div>

                {store.loadingUsers ? (
                    <div className="p-10 text-center text-[var(--text-tertiary)]">正在加载用户列表...</div>
                ) : store.users.length === 0 ? (
                    <div className="p-10 text-center text-[var(--text-tertiary)]">当前还没有任何用户</div>
                ) : (
                    <div className="overflow-x-auto">
                        <table className="w-full border-collapse text-left">
                            <thead>
                                <tr className="border-b border-[var(--glass-border)] bg-[var(--bg-tertiary)]/30">
                                    <th className="px-8 py-5 text-[11px] font-black uppercase tracking-[0.2em] text-[var(--text-tertiary)]">用户</th>
                                    <th className="px-8 py-5 text-[11px] font-black uppercase tracking-[0.2em] text-[var(--text-tertiary)]">邮箱</th>
                                    <th className="px-8 py-5 text-[11px] font-black uppercase tracking-[0.2em] text-[var(--text-tertiary)]">角色</th>
                                    <th className="px-8 py-5 text-[11px] font-black uppercase tracking-[0.2em] text-[var(--text-tertiary)]">注册时间</th>
                                    <th className="px-8 py-5 text-right text-[11px] font-black uppercase tracking-[0.2em] text-[var(--text-tertiary)]">操作</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-[var(--glass-border)]/30">
                                {store.users.map((user) => {
                                    const draftRole = draftRoles[user.id] || user.role;

                                    return (
                                        <tr key={user.id} className="group transition-all hover:bg-[var(--primary-color)]/[0.02]">
                                            <td className="px-8 py-5">
                                                <div className="flex items-center gap-4">
                                                    <div className="flex h-12 w-12 items-center justify-center rounded-[1rem] border border-indigo-500/10 bg-gradient-to-br from-indigo-500/10 to-blue-500/10 text-lg font-black text-indigo-600 shadow-sm transition-transform duration-500 group-hover:scale-110">
                                                        {user.username.charAt(0).toUpperCase()}
                                                    </div>
                                                    <div>
                                                        <p className="text-base font-black text-[var(--text-primary)] transition-colors group-hover:text-[var(--primary-color)]">{user.username}</p>
                                                        <p className="mt-0.5 text-[10px] font-bold uppercase tracking-tighter text-[var(--text-tertiary)] opacity-60">ID: {String(user.id).padStart(4, '0')}</p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-8 py-5 text-sm font-medium text-[var(--text-secondary)]">{user.email}</td>
                                            <td className="px-8 py-5">
                                                <select
                                                    value={draftRole}
                                                    onChange={(event) => setDraftRoles((current) => ({ ...current, [user.id]: event.target.value }))}
                                                    className="rounded-xl border border-[var(--glass-border)] bg-[var(--bg-secondary)] px-4 py-2 text-sm font-bold text-[var(--text-primary)]"
                                                >
                                                    <option value="user">普通用户</option>
                                                    <option value="admin">管理员</option>
                                                </select>
                                            </td>
                                            <td className="px-8 py-5 text-sm font-bold text-[var(--text-secondary)]">{user.createdAt || '未记录'}</td>
                                            <td className="px-8 py-5 text-right">
                                                <button
                                                    type="button"
                                                    onClick={() => handleSaveRole(user.id)}
                                                    className="button button-ghost px-4 py-2 text-xs"
                                                    disabled={draftRole === user.role}
                                                >
                                                    保存角色
                                                </button>
                                            </td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
        </div>
    );
});

export default UserManagementView;
