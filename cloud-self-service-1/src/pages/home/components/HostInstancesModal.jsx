import { useEffect, useState } from 'react';
import { UserIcon, XMarkIcon } from '@heroicons/react/24/outline';
import sdk from '../../../api/sdk';

const formatDate = (value) =>
    value ? new Date(value).toLocaleDateString('zh-CN') : '未设置';

const normalizeMemory = (value) => (value >= 256 ? Math.round(value / 1024) : value);

function HostInstancesModal({ isOpen, onClose, host, currentServerId, currentUserId }) {
    const [instances, setInstances] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        let cancelled = false;

        const loadInstances = async () => {
            if (!isOpen || !host) {
                return;
            }

            await Promise.resolve();
            if (cancelled) {
                return;
            }

            setLoading(true);

            try {
                const data = await sdk.getUserHostInstances(host);
                if (cancelled) {
                    return;
                }

                setInstances(data.map((server) => ({
                    id: server.id,
                    name: server.pveName || `服务器 #${server.id}`,
                    user: server.user?.nickname || server.user?.email || '未知用户',
                    userEmail: server.user?.email || '',
                    userId: server.user?.id,
                    cpu: server.application?.cpu ?? 0,
                    memory: normalizeMemory(server.application?.memory ?? 0),
                    gpu: !!server.application?.gpu,
                    storage: server.application?.storage ?? 0,
                    status: server.status.toLowerCase(),
                    createdAt: server.createdAt,
                    expiresAt: server.expireAt,
                    ip: server.pveIp || '未分配',
                    type: server.pveType === 'lxc' ? 'container' : 'vm',
                })));
            } catch {
                if (!cancelled) {
                    setInstances([]);
                }
            } finally {
                if (!cancelled) {
                    setLoading(false);
                }
            }
        };

        loadInstances();

        return () => {
            cancelled = true;
        };
    }, [host, isOpen]);

    if (!isOpen) {
        return null;
    }

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
            <div className="max-h-[90vh] w-full max-w-4xl overflow-hidden rounded-xl border bg-[var(--bg-secondary)] shadow-lg dark:border-gray-500">
                <div className="flex items-start justify-between border-b p-6 pb-4 dark:border-gray-500">
                    <div>
                        <h2 className="text-xl font-semibold text-primary-text">主机 {host} 上的实例列表</h2>
                        <p className="mt-1 text-sm text-secondary-text">当前主机上共有 {instances.length} 个活动实例</p>
                    </div>
                    <button
                        type="button"
                        onClick={onClose}
                        className="text-secondary-text transition-colors hover:text-primary-text"
                    >
                        <XMarkIcon className="h-6 w-6" />
                    </button>
                </div>

                <div className="max-h-[calc(90vh-120px)] overflow-y-auto p-6">
                    {loading ? (
                        <div className="py-8 text-center">
                            <div className="loader mx-auto" />
                            <p className="mt-4 text-secondary-text">加载中...</p>
                        </div>
                    ) : instances.length === 0 ? (
                        <div className="py-8 text-center">
                            <p className="text-secondary-text">该主机上暂无其他活动实例</p>
                        </div>
                    ) : (
                        <div className="space-y-4">
                            {instances.map((instance) => (
                                <article
                                    key={instance.id}
                                    className={`rounded-lg border bg-[var(--bg-tertiary)] p-4 transition-all ${
                                        instance.id === currentServerId ? 'border-primary-color' : 'dark:border-gray-500'
                                    }`}
                                >
                                    <div className="mb-4 flex items-start justify-between gap-4">
                                        <div>
                                            <div className="flex items-center gap-3">
                                                <h3 className="font-medium text-primary-text">{instance.name}</h3>
                                                <span className="rounded-full bg-[var(--bg-secondary)] px-2 py-1 text-[10px] uppercase tracking-widest text-secondary-text">
                                                    {instance.type === 'vm' ? 'VM' : 'LXC'}
                                                </span>
                                            </div>
                                            <p className="mt-1 text-xs text-secondary-text">IP: {instance.ip}</p>
                                        </div>
                                        <span className={`rounded-full px-3 py-1 text-xs font-bold ${
                                            instance.status === 'running'
                                                ? 'bg-emerald-500/10 text-emerald-500'
                                                : 'bg-amber-500/10 text-amber-500'
                                        }`}>
                                            {instance.status === 'running' ? '运行中' : '已关机'}
                                        </span>
                                    </div>

                                    <div className="grid gap-4 md:grid-cols-3">
                                        <div className="rounded bg-[var(--bg-secondary)] p-3">
                                            <div className="mb-2 flex items-center gap-2 text-sm font-medium text-primary-text">
                                                <UserIcon className="h-4 w-4 text-secondary-text" />
                                                用户信息
                                            </div>
                                            <p className="text-sm text-secondary-text">
                                                {instance.user}
                                                {instance.userId === currentUserId && (
                                                    <span className="ml-1 text-primary-color">(您)</span>
                                                )}
                                            </p>
                                            <p className="text-sm text-secondary-text">{instance.userEmail}</p>
                                        </div>

                                        <div className="rounded bg-[var(--bg-secondary)] p-3">
                                            <p className="mb-2 text-sm font-medium text-primary-text">配置</p>
                                            <div className="grid grid-cols-2 gap-2 text-sm">
                                                <span className="text-secondary-text">CPU: {instance.cpu} 核</span>
                                                <span className="text-secondary-text">内存: {instance.memory}</span>
                                                <span className="text-secondary-text">存储: {instance.storage} GB</span>
                                                <span className="text-secondary-text">GPU: {instance.gpu ? '支持' : '无'}</span>
                                            </div>
                                        </div>

                                        <div className="rounded bg-[var(--bg-secondary)] p-3">
                                            <p className="mb-2 text-sm font-medium text-primary-text">时间</p>
                                            <p className="text-sm text-secondary-text">创建: {formatDate(instance.createdAt)}</p>
                                            <p className="text-sm text-secondary-text">到期: {formatDate(instance.expiresAt)}</p>
                                        </div>
                                    </div>
                                </article>
                            ))}
                        </div>
                    )}
                </div>

                <div className="flex justify-end border-t p-6 dark:border-gray-500">
                    <button type="button" onClick={onClose} className="btn btn-primary">
                        关闭
                    </button>
                </div>
            </div>
        </div>
    );
}

export default HostInstancesModal;
