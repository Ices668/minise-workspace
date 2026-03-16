import React, { useState } from 'react';
import { observer } from 'mobx-react-lite';
import { useStore } from '../context';
import { 
    CheckIcon, 
    XMarkIcon, 
    ClipboardDocumentCheckIcon, 
    ArrowPathIcon,
    UserIcon,
    FolderIcon,
    ChatBubbleBottomCenterTextIcon,
    ClockIcon,
    ShieldCheckIcon,
    ExclamationTriangleIcon
} from '@heroicons/react/24/outline';

const DataRequestAudit = observer(() => {
    const store = useStore();
    const [showRejectModal, setShowRejectModal] = useState(false);
    const [currentRequestId, setCurrentRequestId] = useState(null);
    const [rejectReason, setRejectReason] = useState('');

    const handleApproveRequest = async (requestId) => {
        if (window.confirm('确定要批准这个数据申请吗？')) {
            await store.approveDataRequest(requestId);
        }
    };

    const handleRejectRequest = (requestId) => {
        setCurrentRequestId(requestId);
        setShowRejectModal(true);
        document.body.style.overflow = 'hidden';
    };

    const handleConfirmReject = async () => {
        if (rejectReason.trim()) {
            await store.rejectDataRequest(currentRequestId, rejectReason);
            handleCancelReject();
        }
    };

    const handleCancelReject = () => {
        setShowRejectModal(false);
        setRejectReason('');
        setCurrentRequestId(null);
        document.body.style.overflow = '';
    };

    return (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            {/* 拒绝原因弹窗 */}
            {showRejectModal && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
                    <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm transition-opacity" onClick={handleCancelReject}></div>
                    
                    <div className="relative w-full max-w-lg bg-[var(--glass-bg)] border border-[var(--glass-border)] rounded-3xl backdrop-blur-xl shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200">
                        <div className="p-8">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-12 h-12 rounded-2xl bg-rose-500/10 flex items-center justify-center text-rose-500">
                                    <ExclamationTriangleIcon className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-black text-[var(--text-primary)]">拒绝数据申请</h3>
                                    <p className="text-sm text-[var(--text-secondary)]">请说明拒绝该申请的具体原因，系统将通过邮件通知用户。</p>
                                </div>
                            </div>

                            <div className="space-y-4">
                                <div className="relative group">
                                    <textarea
                                        value={rejectReason}
                                        onChange={(e) => setRejectReason(e.target.value)}
                                        className="w-full p-4 bg-[var(--bg-secondary)]/50 border border-[var(--glass-border)] rounded-2xl focus:outline-none focus:ring-2 focus:ring-rose-500/20 focus:border-rose-500/50 text-[var(--text-primary)] min-h-[160px] transition-all resize-none placeholder:text-[var(--text-tertiary)]"
                                        placeholder="例如：申请理由不充分，或该数据暂不对外开放..."
                                    />
                                </div>
                            </div>

                            <div className="flex gap-3 mt-8">
                                <button
                                    onClick={handleCancelReject}
                                    className="flex-1 px-6 py-4 bg-[var(--bg-tertiary)] hover:bg-[var(--bg-secondary)] text-[var(--text-primary)] font-bold rounded-2xl transition-all active:scale-95"
                                >
                                    取消
                                </button>
                                <button
                                    onClick={handleConfirmReject}
                                    disabled={!rejectReason.trim()}
                                    className="flex-[2] px-6 py-4 bg-gradient-to-r from-rose-500 to-red-600 hover:from-rose-600 hover:to-red-700 text-white font-bold rounded-2xl transition-all shadow-lg shadow-rose-500/25 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed disabled:scale-100"
                                >
                                    确认拒绝申请
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* 数据申请列表 */}
            <div className="bg-[var(--glass-bg)] border border-[var(--glass-border)] rounded-[2.5rem] backdrop-blur-md overflow-hidden shadow-2xl shadow-slate-200/50 dark:shadow-none">
                <div className="px-8 py-6 border-b border-[var(--glass-border)] flex items-center justify-between bg-[var(--bg-tertiary)]/10">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-[var(--primary-color)]/10 flex items-center justify-center text-[var(--primary-color)]">
                            <ClipboardDocumentCheckIcon className="w-5 h-5" />
                        </div>
                        <div>
                            <h2 className="text-lg font-black text-[var(--text-primary)]">数据访问申请审计</h2>
                            <p className="text-[10px] font-bold text-[var(--text-tertiary)] uppercase tracking-widest">Data Access Audit</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[var(--bg-tertiary)]/30 border border-[var(--glass-border)]">
                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                        <span className="text-[10px] font-black text-[var(--text-secondary)] uppercase tracking-widest">Real-time monitoring</span>
                    </div>
                </div>

                {store.loadingDataRequests ? (
                    <div className="p-32 text-center">
                        <div className="relative inline-block mb-6">
                            <div className="w-16 h-16 rounded-3xl border-4 border-[var(--primary-color)]/20 border-t-[var(--primary-color)] animate-spin"></div>
                            <div className="absolute inset-0 flex items-center justify-center">
                                <ArrowPathIcon className="w-6 h-6 text-[var(--primary-color)] animate-pulse" />
                            </div>
                        </div>
                        <p className="text-sm font-black text-[var(--text-tertiary)] uppercase tracking-[0.2em]">正在同步申请数据...</p>
                    </div>
                ) : store.dataRequests.length === 0 ? (
                    <div className="p-32 text-center">
                        <div className="w-20 h-20 rounded-[2rem] bg-[var(--bg-tertiary)]/50 flex items-center justify-center text-[var(--text-tertiary)] mx-auto mb-8 transform -rotate-6">
                            <ClipboardDocumentCheckIcon className="w-10 h-10" />
                        </div>
                        <h3 className="text-2xl font-black text-[var(--text-primary)] mb-3 tracking-tight">暂无待审计申请</h3>
                        <p className="text-[var(--text-secondary)] max-w-md mx-auto text-sm leading-relaxed">目前没有任何数据访问申请需要处理。您可以稍后再来查看新提交的申请。</p>
                    </div>
                ) : (
                    <div className="overflow-x-auto custom-scrollbar">
                        <table className="w-full">
                            <thead>
                                <tr className="text-left border-b border-[var(--glass-border)]">
                                    <th className="px-8 py-5 text-[10px] font-black text-[var(--text-tertiary)] uppercase tracking-[0.2em]">申请人</th>
                                    <th className="px-8 py-5 text-[10px] font-black text-[var(--text-tertiary)] uppercase tracking-[0.2em]">申请数据</th>
                                    <th className="px-8 py-5 text-[10px] font-black text-[var(--text-tertiary)] uppercase tracking-[0.2em]">申请理由</th>
                                    <th className="px-8 py-5 text-[10px] font-black text-[var(--text-tertiary)] uppercase tracking-[0.2em]">申请时间</th>
                                    <th className="px-8 py-5 text-[10px] font-black text-[var(--text-tertiary)] uppercase tracking-[0.2em] text-center">当前状态</th>
                                    <th className="px-8 py-5 text-[10px] font-black text-[var(--text-tertiary)] uppercase tracking-[0.2em] text-right">管理动作</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-[var(--glass-border)]/50">
                                {store.dataRequests.map(request => (
                                    <tr key={request.id} className="group hover:bg-[var(--primary-color)]/[0.03] transition-all duration-300">
                                        <td className="px-8 py-7">
                                            <div className="flex items-center gap-4">
                                                <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 flex items-center justify-center text-indigo-500 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                                                    <UserIcon className="w-6 h-6" />
                                                </div>
                                                <div>
                                                    <p className="font-black text-[var(--text-primary)] text-base tracking-tight mb-0.5">{request.username}</p>
                                                    <p className="text-[10px] font-bold text-[var(--text-tertiary)] uppercase tracking-wider">ID: {request.id}</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-8 py-7">
                                            <div className="flex items-center gap-3">
                                                <div className="w-9 h-9 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-500 group-hover:scale-110 transition-transform">
                                                    <FolderIcon className="w-5 h-5" />
                                                </div>
                                                <p className="font-bold text-[var(--text-primary)] text-sm">{request.directoryName}</p>
                                            </div>
                                        </td>
                                        <td className="px-8 py-7">
                                            <div className="flex items-start gap-2 max-w-xs group/purpose">
                                                <ChatBubbleBottomCenterTextIcon className="w-4 h-4 text-[var(--text-tertiary)] mt-1 shrink-0 group-hover/purpose:text-[var(--primary-color)] transition-colors" />
                                                <p className="text-sm text-[var(--text-secondary)] line-clamp-2 font-medium leading-relaxed" title={request.purpose}>
                                                    {request.purpose || '未填写理由'}
                                                </p>
                                            </div>
                                        </td>
                                        <td className="px-8 py-7">
                                            <p className="text-sm font-bold text-[var(--text-secondary)] tracking-tight">{request.createdAt || 'N/A'}</p>
                                        </td>
                                        <td className="px-8 py-7 text-center">
                                            <div className="flex justify-center">
                                                {request.status === 'pending' ? (
                                                    <span className="px-4 py-1.5 bg-amber-500/10 text-amber-600 text-[10px] font-black uppercase tracking-[0.2em] rounded-full border border-amber-500/20 shadow-sm shadow-amber-500/10 animate-pulse">
                                                        待审核
                                                    </span>
                                                ) : request.status === 'approved' ? (
                                                    <span className="px-4 py-1.5 bg-emerald-500/10 text-emerald-600 text-[10px] font-black uppercase tracking-[0.2em] rounded-full border border-emerald-500/20">
                                                        已批准
                                                    </span>
                                                ) : (
                                                    <span className="px-4 py-1.5 bg-rose-500/10 text-rose-600 text-[10px] font-black uppercase tracking-[0.2em] rounded-full border border-rose-500/20">
                                                        已拒绝
                                                    </span>
                                                )}
                                            </div>
                                        </td>
                                        <td className="px-8 py-7 text-right">
                                            {request.status === 'pending' ? (
                                                <div className="flex justify-end gap-3 opacity-0 group-hover:opacity-100 transition-all transform translate-x-4 group-hover:translate-x-0 duration-500">
                                                    <button
                                                        onClick={() => handleApproveRequest(request.id)}
                                                        className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-500 text-white hover:bg-emerald-600 transition-all active:scale-95 shadow-lg shadow-emerald-500/20 font-black text-[10px] uppercase tracking-widest"
                                                        title="批准申请"
                                                    >
                                                        <CheckIcon className="w-4 h-4" />
                                                        批准
                                                    </button>
                                                    <button
                                                        onClick={() => handleRejectRequest(request.id)}
                                                        className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-rose-500 text-white hover:bg-rose-600 transition-all active:scale-95 shadow-lg shadow-rose-500/20 font-black text-[10px] uppercase tracking-widest"
                                                        title="拒绝申请"
                                                    >
                                                        <XMarkIcon className="w-4 h-4" />
                                                        拒绝
                                                    </button>
                                                </div>
                                            ) : (
                                                <div className="flex flex-col items-end gap-1 opacity-40">
                                                    <span className="text-[10px] text-[var(--text-tertiary)] font-black uppercase tracking-widest italic">AUDIT COMPLETED</span>
                                                    <p className="text-[9px] font-bold text-[var(--text-tertiary)]">{request.status === 'approved' ? 'Access Granted' : 'Request Denied'}</p>
                                                </div>
                                            )}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
        </div>
    );
});

export default DataRequestAudit;

