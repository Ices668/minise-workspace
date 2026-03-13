import { useState } from 'react';
import { observer } from 'mobx-react-lite';
import { LockClosedIcon } from '@heroicons/react/24/outline';
import Warning from './Warning';

function ResetPasswordModal({ authStore }) {
    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [localError, setLocalError] = useState('');

    const handleSubmit = async () => {
        setLocalError('');
        if (!oldPassword || !newPassword || !confirmPassword) {
            setLocalError('请填写所有字段');
            return;
        }
        if (newPassword !== confirmPassword) {
            setLocalError('两次输入的新密码不一致');
            return;
        }
        if (newPassword.length < 6) {
            setLocalError('新密码至少需要 6 位');
            return;
        }
        await authStore.resetPassword(authStore.user?.email, oldPassword, newPassword);
    };

    const error = localError || authStore.error;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
            <div className="bg-[var(--bg-secondary)] border border-[var(--border-color)] rounded-2xl shadow-2xl w-full max-w-md p-8">
                <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center">
                        <LockClosedIcon className="w-5 h-5 text-amber-500" />
                    </div>
                    <div>
                        <h2 className="text-lg font-black text-[var(--text-primary)]">首次登录，请修改密码</h2>
                        <p className="text-xs text-[var(--text-tertiary)]">为保障账户安全，请立即重置您的初始密码</p>
                    </div>
                </div>

                <div className="flex flex-col gap-4">
                    <input
                        type="password"
                        className="form-input w-full"
                        placeholder="当前密码（初始密码）"
                        value={oldPassword}
                        onChange={e => setOldPassword(e.target.value)}
                    />
                    <input
                        type="password"
                        className="form-input w-full"
                        placeholder="新密码（至少 6 位）"
                        value={newPassword}
                        onChange={e => setNewPassword(e.target.value)}
                    />
                    <input
                        type="password"
                        className="form-input w-full"
                        placeholder="确认新密码"
                        value={confirmPassword}
                        onChange={e => setConfirmPassword(e.target.value)}
                    />

                    {error && <Warning text={error} />}

                    <button
                        type="button"
                        className="button button-primary w-full mt-2"
                        disabled={authStore.loading}
                        onClick={handleSubmit}
                    >
                        {authStore.loading ? '提交中...' : '确认修改密码'}
                    </button>
                </div>
            </div>
        </div>
    );
}

const ResetPasswordModalView = observer(ResetPasswordModal);

export default ResetPasswordModalView;
