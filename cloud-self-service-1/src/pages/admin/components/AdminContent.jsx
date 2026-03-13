import { useEffect, useState } from 'react';
import { observer } from 'mobx-react-lite';
import {
    ComputerDesktopIcon,
    FolderIcon,
    ShieldCheckIcon,
    UsersIcon,
} from '@heroicons/react/24/outline';
import Warning from '../../../common/components/Warning';
import { useStore } from '../context';
import DataDirectoryManagement from './DataDirectoryManagement';
import UserManagement from './UserManagement';
import VmAudit from './VmAudit';

const tabs = [
    { label: '用户管理', icon: UsersIcon, index: 0 },
    { label: '数据分类管理', icon: FolderIcon, index: 1 },
    { label: '虚拟机审批', icon: ComputerDesktopIcon, index: 2 },
];

const AdminContentView = observer(function AdminContentView() {
    const store = useStore();
    const [activeTab, setActiveTab] = useState(0);

    useEffect(() => {
        store.fetchUsers();
        store.fetchVmRequests();
        store.fetchDataDirectories();
    }, [store]);

    const pendingVmRequests = store.vmRequests.filter((request) => request.status === 'pending').length;

    return (
        <div className="relative min-h-screen overflow-x-hidden">
            <div className="absolute right-0 top-0 -z-10 h-1/2 w-1/2 rounded-full bg-gradient-to-b from-[var(--primary-color)]/5 to-transparent blur-3xl" />
            <div className="absolute bottom-0 left-0 -z-10 h-1/3 w-1/3 rounded-full bg-gradient-to-t from-emerald-500/5 to-transparent blur-3xl" />

            <main className="container mx-auto px-6 py-12">
                <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
                    <div>
                        <h1 className="mb-2 text-3xl font-black tracking-tight text-[var(--text-primary)]">
                            系统管理 <span className="text-[var(--primary-color)]">Administration</span>
                        </h1>
                        <p className="text-[var(--text-secondary)]">审批用户申请、维护账号权限，并管理数据安全等级。</p>
                    </div>
                </div>

                {store.error && (
                    <div className="mb-6">
                        <Warning text={store.error} />
                    </div>
                )}

                <div className="mb-10 flex flex-wrap gap-4">
                    {pendingVmRequests > 0 ? (
                        <button
                            type="button"
                            onClick={() => setActiveTab(2)}
                            className="group flex items-center gap-3 rounded-2xl border border-amber-500/20 bg-amber-500/10 px-5 py-3 text-amber-600 transition-all hover:bg-amber-500/20 active:scale-95"
                        >
                            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-amber-500/20">
                                <ComputerDesktopIcon className="h-4 w-4" />
                            </div>
                            <div className="text-left">
                                <p className="mb-1 text-[10px] font-black uppercase leading-none tracking-widest opacity-70">待处理申请</p>
                                <p className="text-sm font-black">{pendingVmRequests} 个虚拟机申请待审批</p>
                            </div>
                            <div className="ml-2 flex h-5 w-5 items-center justify-center rounded-full bg-amber-500 text-[10px] font-black text-white transition-transform group-hover:scale-110">
                                !
                            </div>
                        </button>
                    ) : (
                        <div className="flex items-center gap-3 rounded-2xl border border-emerald-500/10 bg-emerald-500/5 px-5 py-3 text-emerald-600/70">
                            <ShieldCheckIcon className="h-5 w-5" />
                            <p className="text-xs font-bold tracking-wide">当前没有待审批虚拟机申请</p>
                        </div>
                    )}
                </div>

                <div className="mb-8 flex w-fit items-center gap-2 rounded-2xl border border-[var(--glass-border)] bg-[var(--bg-tertiary)]/30 p-1.5">
                    {tabs.map((tab) => (
                        <button
                            key={tab.index}
                            type="button"
                            onClick={() => setActiveTab(tab.index)}
                            className={`flex items-center gap-3 rounded-2xl border px-6 py-3 text-sm font-black transition-all duration-300 active:scale-95 ${
                                activeTab === tab.index
                                    ? 'border-indigo-600 bg-indigo-600 text-white shadow-lg shadow-indigo-600/20'
                                    : 'border-[var(--glass-border)] bg-[var(--glass-bg)] text-[var(--text-secondary)] hover:bg-[var(--glass-hover)] hover:text-[var(--primary-color)]'
                            }`}
                        >
                            <tab.icon className={`h-5 w-5 ${activeTab === tab.index ? 'text-white' : 'text-[var(--text-tertiary)]'}`} />
                            {tab.label}
                        </button>
                    ))}
                </div>

                <div className="animate-in slide-in-from-bottom-4 fade-in duration-700">
                    {activeTab === 0 && <UserManagement />}
                    {activeTab === 1 && <DataDirectoryManagement />}
                    {activeTab === 2 && <VmAudit />}
                </div>
            </main>
        </div>
    );
});

export default AdminContentView;
