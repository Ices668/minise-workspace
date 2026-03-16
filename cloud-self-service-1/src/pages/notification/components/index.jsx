import { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import {
    BellIcon,
    CheckCircleIcon,
    ExclamationTriangleIcon,
    InformationCircleIcon,
    XCircleIcon,
} from '@heroicons/react/24/outline';
import Warning from '../../../common/components/Warning';
import { useStore } from '../context';

const TYPE_STYLES = {
    success: {
        icon: CheckCircleIcon,
        color: 'text-emerald-500',
        bg: 'bg-emerald-500/10',
    },
    warning: {
        icon: ExclamationTriangleIcon,
        color: 'text-amber-500',
        bg: 'bg-amber-500/10',
    },
    error: {
        icon: XCircleIcon,
        color: 'text-rose-500',
        bg: 'bg-rose-500/10',
    },
    info: {
        icon: InformationCircleIcon,
        color: 'text-blue-500',
        bg: 'bg-blue-500/10',
    },
};

const formatDate = (value) =>
    value
        ? new Date(value).toLocaleString('zh-CN', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
        })
        : '未记录';

const NotificationView = observer(function NotificationView() {
    const store = useStore();

    useEffect(() => {
        store.fetchNotifications();
    }, [store]);

    return (
        <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)]">
            <main className="container mx-auto px-6 py-12">
                <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
                    <div>
                        <h1 className="mb-2 text-3xl font-black tracking-tight text-[var(--text-primary)]">
                            通知中心 <span className="text-[var(--primary-color)]">Notifications</span>
                        </h1>
                        <p className="text-[var(--text-secondary)]">审批结果、资源变更和系统提醒都会在这里集中展示。</p>
                    </div>

                    {store.unreadCount > 0 && (
                        <button
                            type="button"
                            className="button button-primary px-5 py-3"
                            onClick={() => store.markAllAsRead()}
                        >
                            <CheckCircleIcon className="mr-2 h-4 w-4" />
                            全部标记已读
                        </button>
                    )}
                </div>

                {store.error && (
                    <div className="mb-6">
                        <Warning text={store.error} />
                    </div>
                )}

                <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    <div className="stat-card stat-card-primary p-5">
                        <div className="mb-1 text-sm opacity-90">全部通知</div>
                        <div className="text-3xl font-bold">{store.notifications.length}</div>
                    </div>
                    <div className="stat-card stat-card-success p-5">
                        <div className="mb-1 text-sm opacity-90">未读通知</div>
                        <div className="text-3xl font-bold">{store.unreadCount}</div>
                    </div>
                    <div className="stat-card stat-card-warning p-5">
                        <div className="mb-1 text-sm opacity-90">已读通知</div>
                        <div className="text-3xl font-bold">{store.notifications.length - store.unreadCount}</div>
                    </div>
                    <div className="stat-card stat-card-secondary p-5">
                        <div className="mb-1 text-sm opacity-90">今日通知</div>
                        <div className="text-3xl font-bold">
                            {store.notifications.filter((item) => new Date(item.createdAt).toDateString() === new Date().toDateString()).length}
                        </div>
                    </div>
                </div>

                {store.loadingNotifications ? (
                    <div className="card p-12 text-center">
                        <p className="text-secondary-text">加载通知中...</p>
                    </div>
                ) : store.notifications.length === 0 ? (
                    <div className="card p-12 text-center">
                        <BellIcon className="mx-auto mb-4 h-12 w-12 text-[var(--text-tertiary)]" />
                        <h3 className="mb-2 text-lg font-medium text-primary-text">暂无通知</h3>
                        <p className="text-secondary-text">您还没有收到任何系统消息。</p>
                    </div>
                ) : (
                    <div className="space-y-4">
                        {store.notifications.map((notification) => {
                            const style = TYPE_STYLES[notification.type] || TYPE_STYLES.info;
                            const Icon = style.icon;

                            return (
                                <article key={notification.id} className="card p-5">
                                    <div className="flex items-start gap-4">
                                        <div className={`flex-shrink-0 rounded-full p-3 ${style.bg}`}>
                                            <Icon className={`h-5 w-5 ${style.color}`} />
                                        </div>
                                        <div className="min-w-0 flex-1">
                                            <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                                                <div>
                                                    <div className="mb-2 flex flex-wrap items-center gap-2">
                                                        <h3 className={`font-semibold ${notification.isRead ? 'text-primary-text' : 'text-primary-color'}`}>
                                                            {notification.title}
                                                        </h3>
                                                        {!notification.isRead && (
                                                            <span className="rounded-full bg-[var(--bg-tertiary)] px-2 py-1 text-xs text-primary-color">
                                                                未读
                                                            </span>
                                                        )}
                                                    </div>
                                                    <p className="text-secondary-text">{notification.content}</p>
                                                </div>
                                                <div className="text-xs whitespace-nowrap text-secondary-text">
                                                    {formatDate(notification.createdAt)}
                                                </div>
                                            </div>

                                            {!notification.isRead && (
                                                <div className="mt-4 flex justify-end border-t border-[var(--bg-tertiary)] pt-4">
                                                    <button
                                                        type="button"
                                                        className="flex items-center gap-1 text-sm text-primary-color transition-colors hover:text-primary-color/80"
                                                        onClick={() => store.markAsRead(notification.id)}
                                                    >
                                                        <CheckCircleIcon className="h-4 w-4" />
                                                        标记已读
                                                    </button>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </article>
                            );
                        })}
                    </div>
                )}
            </main>
        </div>
    );
});

export default NotificationView;
