import { useEffect, useState } from 'react';
import { observer } from 'mobx-react-lite';
import {
    BellIcon,
    CircleStackIcon,
    ClockIcon,
    PlusIcon,
    RocketLaunchIcon,
} from '@heroicons/react/24/outline';
import Warning from '../../../common/components/Warning';
import { useAuth } from '../../../store/auth-context';
import { useStore } from '../context';
import CreateServerModal from './CreateServerModal';
import HostInstancesModal from './HostInstancesModal';
import ServerCard from './ServerCard';

const APPLICATION_STATUS = {
    approved: 'bg-emerald-500/10 text-emerald-500',
    pending: 'bg-amber-500/10 text-amber-500',
    rejected: 'bg-rose-500/10 text-rose-500',
};

const formatDateTime = (value) =>
    value ? new Date(value).toLocaleString('zh-CN') : '未记录';

const HomeView = observer(function HomeView() {
    const store = useStore();
    const authStore = useAuth();
    const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
    const [hostInstancesModal, setHostInstancesModal] = useState({
        isOpen: false,
        host: '',
        currentServerId: null,
    });

    useEffect(() => {
        store.init();
    }, [store]);

    const servers = store.normalizedServers;
    const applications = store.normalizedApplications;
    const pendingApplications = applications.filter((item) => item.status === 'pending').length;

    const openCreateModal = () => {
        store.clearError();
        setIsCreateModalOpen(true);
    };

    const closeCreateModal = () => {
        setIsCreateModalOpen(false);
    };

    const handleServerAction = async (serverId, action) => {
        if (action === 'release' && !window.confirm('释放服务器不可恢复，确认继续吗？')) {
            return;
        }

        await store.serverAction(serverId, action);
    };

    const handleExtendServer = async (serverId, days) => {
        await store.extendServer(serverId, days);
    };

    const handleViewSameHost = (host, currentServerId) => {
        setHostInstancesModal({
            isOpen: true,
            host,
            currentServerId,
        });
    };

    return (
        <div className="relative min-h-screen">
            <div className="absolute right-0 top-0 -z-10 h-1/2 w-1/2 rounded-full bg-gradient-to-b from-blue-500/5 to-transparent blur-3xl" />
            <div className="absolute bottom-0 left-0 -z-10 h-1/3 w-1/3 rounded-full bg-gradient-to-t from-sky-500/5 to-transparent blur-3xl" />

            <main className="container mx-auto px-6 py-12">
                <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
                    <div>
                        <h1 className="mb-2 text-3xl font-black tracking-tight text-[var(--text-primary)]">
                            控制面板 <span className="text-[var(--primary-color)]">Dashboard</span>
                        </h1>
                        <p className="text-[var(--text-secondary)]">
                            欢迎回来，{authStore.user?.nickname || authStore.user?.email}。这里展示您的实例状态和申请进度。
                        </p>
                    </div>
                    <button
                        type="button"
                        onClick={openCreateModal}
                        className="button button-primary group px-6 py-3 shadow-xl shadow-blue-500/20"
                    >
                        <PlusIcon className="mr-2 h-5 w-5 transition-transform duration-300 group-hover:rotate-90" />
                        申请新服务器
                    </button>
                </div>

                {store.error && (
                    <div className="mb-6">
                        <Warning text={store.error} />
                    </div>
                )}

                <div className="mb-12 flex flex-wrap items-center gap-4">
                    <div className="flex items-center gap-3 rounded-2xl border border-[var(--glass-border)] bg-[var(--glass-bg)] px-4 py-2 shadow-sm backdrop-blur-sm">
                        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-500/10 text-blue-500 dark:bg-blue-500/20">
                            <CircleStackIcon className="h-5 w-5" />
                        </div>
                        <div>
                            <p className="mb-1 text-[10px] font-bold uppercase leading-none text-[var(--text-tertiary)]">实例总数</p>
                            <p className="text-sm font-black leading-none text-[var(--text-primary)]">{servers.length}</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-3 rounded-2xl border border-[var(--glass-border)] bg-[var(--glass-bg)] px-4 py-2 shadow-sm backdrop-blur-sm">
                        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-amber-500/10 text-amber-500 dark:bg-amber-500/20">
                            <ClockIcon className="h-5 w-5" />
                        </div>
                        <div>
                            <p className="mb-1 text-[10px] font-bold uppercase leading-none text-[var(--text-tertiary)]">待审批申请</p>
                            <p className="text-sm font-black leading-none text-[var(--text-primary)]">{pendingApplications}</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-3 rounded-2xl border border-[var(--glass-border)] bg-[var(--glass-bg)] px-4 py-2 shadow-sm backdrop-blur-sm">
                        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-500 dark:bg-emerald-500/20">
                            <RocketLaunchIcon className="h-5 w-5" />
                        </div>
                        <div>
                            <p className="mb-1 text-[10px] font-bold uppercase leading-none text-[var(--text-tertiary)]">运行中</p>
                            <p className="text-sm font-black leading-none text-[var(--text-primary)]">
                                {servers.filter((server) => server.status === 'running').length}
                            </p>
                        </div>
                    </div>

                    <div className="flex items-center gap-3 rounded-2xl border border-[var(--glass-border)] bg-[var(--glass-bg)] px-4 py-2 shadow-sm backdrop-blur-sm">
                        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-violet-500/10 text-violet-500 dark:bg-violet-500/20">
                            <BellIcon className="h-5 w-5" />
                        </div>
                        <div>
                            <p className="mb-1 text-[10px] font-bold uppercase leading-none text-[var(--text-tertiary)]">未读通知</p>
                            <p className="text-sm font-black leading-none text-[var(--text-primary)]">{authStore.unreadCount}</p>
                        </div>
                    </div>
                </div>

                <section className="mb-16">
                    <div className="mb-8 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <h2 className="text-xl font-black text-[var(--text-primary)]">我的实例</h2>
                            <div className="h-px w-12 bg-[var(--border-color)]" />
                            <span className="text-xs font-bold uppercase tracking-widest text-[var(--text-tertiary)]">Active Instances</span>
                        </div>
                    </div>

                    {store.loading && servers.length === 0 ? (
                        <div className="card p-8 text-center text-[var(--text-tertiary)]">正在加载实例信息...</div>
                    ) : servers.length === 0 ? (
                        <div className="card p-8 text-center text-[var(--text-tertiary)]">当前还没有可用实例，先提交一个申请。</div>
                    ) : (
                        <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
                            {servers.map((server) => (
                                <ServerCard
                                    key={server.id}
                                    server={server}
                                    busy={store.actionServerId === server.id}
                                    onAction={handleServerAction}
                                    onExtend={handleExtendServer}
                                    onViewSameHost={handleViewSameHost}
                                />
                            ))}
                        </div>
                    )}
                </section>

                <section>
                    <div className="mb-8 flex items-center gap-3">
                        <h2 className="text-xl font-black text-[var(--text-primary)]">申请记录</h2>
                        <div className="h-px w-12 bg-[var(--border-color)]" />
                        <span className="text-xs font-bold uppercase tracking-widest text-[var(--text-tertiary)]">Applications</span>
                    </div>

                    <div className="card overflow-hidden border border-[var(--glass-border)] bg-[var(--glass-bg)] shadow-xl backdrop-blur-md">
                        {applications.length === 0 ? (
                            <div className="p-8 text-center text-sm text-[var(--text-tertiary)]">暂无申请记录</div>
                        ) : (
                            <div className="divide-y divide-[var(--glass-border)]/40">
                                {applications.map((application) => (
                                    <article key={application.id} className="p-5">
                                        <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                                            <div className="space-y-2">
                                                <div className="flex flex-wrap items-center gap-2">
                                                    <h3 className="text-sm font-bold text-[var(--text-primary)]">
                                                        申请 #{application.id}
                                                    </h3>
                                                    <span className={`rounded-full px-2 py-1 text-[10px] font-black uppercase tracking-widest ${APPLICATION_STATUS[application.status] || APPLICATION_STATUS.pending}`}>
                                                        {application.status}
                                                    </span>
                                                    {application.server && (
                                                        <span className="rounded-full bg-blue-500/10 px-2 py-1 text-[10px] font-bold text-blue-500">
                                                            已生成实例 #{application.server.id}
                                                        </span>
                                                    )}
                                                </div>
                                                <p className="text-sm text-[var(--text-secondary)]">
                                                    {application.cpu} vCPU / {application.memory} GB / {application.storage} GB / {application.duration} 天
                                                    {application.gpu && ' / GPU'}
                                                </p>
                                                <p className="text-xs text-[var(--text-tertiary)]">
                                                    提交时间：{formatDateTime(application.createdAt)}
                                                </p>
                                                {application.categories.length > 0 && (
                                                    <div className="flex flex-wrap gap-2">
                                                        {application.categories.map((category) => (
                                                            <span
                                                                key={`${application.id}-${category.id}`}
                                                                className="rounded-full border border-[var(--glass-border)] bg-[var(--bg-tertiary)] px-2 py-1 text-[10px] text-[var(--text-secondary)]"
                                                                title={category.path}
                                                            >
                                                                {category.path}
                                                            </span>
                                                        ))}
                                                    </div>
                                                )}
                                            </div>

                                            <div className="max-w-md space-y-2 text-sm text-[var(--text-secondary)]">
                                                {application.reason ? (
                                                    <p>
                                                        <span className="font-bold text-[var(--text-primary)]">申请理由：</span>
                                                        {application.reason}
                                                    </p>
                                                ) : application.requiresApproval ? (
                                                    <p className="text-amber-600">该申请包含涉密数据，但未写入额外说明。</p>
                                                ) : (
                                                    <p className="text-[var(--text-tertiary)]">未填写申请理由</p>
                                                )}
                                            </div>
                                        </div>
                                    </article>
                                ))}
                            </div>
                        )}
                    </div>
                </section>
            </main>

            <CreateServerModal
                isOpen={isCreateModalOpen}
                onClose={closeCreateModal}
                store={store}
            />

            <HostInstancesModal
                isOpen={hostInstancesModal.isOpen}
                host={hostInstancesModal.host}
                currentServerId={hostInstancesModal.currentServerId}
                currentUserId={authStore?.user?.id}
                onClose={() => setHostInstancesModal({ isOpen: false, host: '', currentServerId: null })}
            />
        </div>
    );
});

export default HomeView;
