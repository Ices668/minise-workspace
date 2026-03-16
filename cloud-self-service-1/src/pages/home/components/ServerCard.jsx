import {
    ArrowPathIcon,
    CircleStackIcon,
    ClockIcon,
    ComputerDesktopIcon,
    CpuChipIcon,
    PowerIcon,
    TrashIcon,
} from '@heroicons/react/24/outline';

const STATUS_STYLES = {
    running: { bg: 'bg-emerald-500/10', dot: 'bg-emerald-500', text: 'text-emerald-500', label: '运行中' },
    stopped: { bg: 'bg-amber-500/10', dot: 'bg-amber-500', text: 'text-amber-500', label: '已关机' },
    deleted: { bg: 'bg-rose-500/10', dot: 'bg-rose-500', text: 'text-rose-500', label: '已释放' },
};

const formatDate = (value) =>
    value ? new Date(value).toLocaleDateString('zh-CN') : '未设置';

function ServerCard({ server, busy = false, onAction, onExtend, onViewSameHost }) {
    const statusConfig = STATUS_STYLES[server.status] || STATUS_STYLES.stopped;

    return (
        <article className="card card-hover group p-5">
            <div className="mb-6 flex items-start justify-between gap-4">
                <div className="min-w-0 flex-1">
                    <div className="mb-1.5 flex items-center gap-2">
                        <span className={`h-2 w-2 flex-shrink-0 rounded-full ${statusConfig.dot} animate-pulse`} />
                        <h3 className="truncate text-base font-bold text-[var(--text-primary)] transition-colors group-hover:text-[var(--primary-color)]">
                            {server.name}
                        </h3>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className={`status-badge ${statusConfig.bg} ${statusConfig.text}`}>
                            {statusConfig.label}
                        </span>
                        <span className="text-[10px] font-mono text-[var(--text-tertiary)]">
                            #{String(server.id).padStart(6, '0')}
                        </span>
                    </div>
                </div>
                <div className="text-right">
                    <span className={`rounded border px-1.5 py-0.5 text-[10px] font-medium ${
                        server.type === 'vm'
                            ? 'border-blue-500/30 bg-blue-500/5 text-blue-500'
                            : 'border-purple-500/30 bg-purple-500/5 text-purple-500'
                    }`}>
                        {server.type === 'vm' ? 'VM' : 'LXC'}
                    </span>
                    <p className="mt-1.5 text-[10px] text-[var(--text-tertiary)]">
                        {formatDate(server.expiresAt)} 到期
                    </p>
                </div>
            </div>

            <div className="mb-6 grid grid-cols-2 gap-x-2 gap-y-4">
                <div className="flex items-center gap-2.5">
                    <div className="rounded-lg bg-[var(--bg-tertiary)] p-1.5 text-[var(--text-secondary)]">
                        <CpuChipIcon className="h-4 w-4" />
                    </div>
                    <div>
                        <p className="mb-1 text-[10px] leading-none text-[var(--text-tertiary)]">CPU</p>
                        <p className="text-xs font-semibold">{server.cpu} vCPU</p>
                    </div>
                </div>
                <div className="flex items-center gap-2.5">
                    <div className="rounded-lg bg-[var(--bg-tertiary)] p-1.5 text-[var(--text-secondary)]">
                        <ComputerDesktopIcon className="h-4 w-4" />
                    </div>
                    <div>
                        <p className="mb-1 text-[10px] leading-none text-[var(--text-tertiary)]">IP 地址</p>
                        <p className="text-xs font-semibold font-mono">{server.ip}</p>
                    </div>
                </div>
                <div className="flex items-center gap-2.5">
                    <div className="rounded-lg bg-[var(--bg-tertiary)] p-1.5 text-[var(--text-secondary)]">
                        <CircleStackIcon className="h-4 w-4" />
                    </div>
                    <div>
                        <p className="mb-1 text-[10px] leading-none text-[var(--text-tertiary)]">存储</p>
                        <p className="text-xs font-semibold">{server.storage} GB</p>
                    </div>
                </div>
                <div className="flex items-center gap-2.5">
                    <div className="rounded-lg bg-[var(--bg-tertiary)] p-1.5 text-[var(--text-secondary)]">
                        <ClockIcon className="h-4 w-4" />
                    </div>
                    <div>
                        <p className="mb-1 text-[10px] leading-none text-[var(--text-tertiary)]">内存</p>
                        <p className="text-xs font-semibold">{server.memory} GB</p>
                    </div>
                </div>
            </div>

            <div className="mb-6 flex flex-col gap-2">
                {server.gpu && (
                    <div className="flex items-center justify-between rounded-lg border border-amber-500/10 bg-gradient-to-r from-amber-500/5 to-orange-500/5 p-2">
                        <span className="text-[10px] font-medium text-amber-600 dark:text-amber-400">GPU 加速</span>
                        <span className="text-[10px] font-bold text-amber-700 dark:text-amber-500">已启用</span>
                    </div>
                )}
                <button
                    type="button"
                    onClick={() => onViewSameHost(server.host, server.id)}
                    className="flex items-center justify-between rounded-lg border border-transparent bg-[var(--bg-tertiary)] p-2 transition-all hover:border-[var(--primary-color)]/20 hover:bg-[var(--primary-color)]/10"
                    disabled={!server.host || server.host === '未分配'}
                >
                    <span className="text-[10px] text-[var(--text-tertiary)]">物理节点</span>
                    <span className="text-[10px] font-bold">{server.host}</span>
                </button>
            </div>

            <div className="flex flex-wrap gap-2 border-t border-[var(--border-color)] pt-4">
                {server.status === 'running' && (
                    <button
                        type="button"
                        onClick={() => onAction(server.id, 'shutdown')}
                        className="button button-ghost flex-1 text-xs py-1.5"
                        disabled={busy}
                    >
                        <PowerIcon className="mr-1.5 h-3.5 w-3.5" />
                        关机
                    </button>
                )}

                {server.status === 'stopped' && (
                    <button
                        type="button"
                        onClick={() => onAction(server.id, 'restart')}
                        className="button button-primary flex-1 text-xs py-1.5"
                        disabled={busy}
                    >
                        <PowerIcon className="mr-1.5 h-3.5 w-3.5" />
                        启动
                    </button>
                )}

                {server.status !== 'deleted' && (
                    <button
                        type="button"
                        onClick={() => onExtend(server.id, 7)}
                        className="button button-ghost px-3 py-1.5 text-xs"
                        disabled={busy}
                    >
                        <ArrowPathIcon className="mr-1.5 h-3.5 w-3.5" />
                        +7天
                    </button>
                )}

                <button
                    type="button"
                    onClick={() => onAction(server.id, 'release')}
                    className="button border-rose-500/20 px-3 py-1.5 text-xs text-rose-500 transition-all hover:bg-rose-500 hover:text-white"
                    disabled={busy || server.status === 'deleted'}
                >
                    <TrashIcon className="mr-1.5 h-3.5 w-3.5" />
                    释放
                </button>
            </div>
        </article>
    );
}

export default ServerCard;
