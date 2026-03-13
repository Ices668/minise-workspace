import { useMemo, useState } from 'react';
import { observer } from 'mobx-react-lite';
import {
    CircleStackIcon,
    ClockIcon,
    CpuChipIcon,
    ServerIcon,
    TagIcon,
    XMarkIcon,
} from '@heroicons/react/24/outline';
import Warning from '../../../common/components/Warning';

const SENSITIVE_LEVELS = ['CONFIDENTIAL', 'TOP_SECRET'];

function buildCategoryDepths(categories) {
    const categoriesById = new Map(categories.map((item) => [item.id, item]));
    const depths = new Map();

    const visit = (categoryId) => {
        if (depths.has(categoryId)) {
            return depths.get(categoryId);
        }

        const current = categoriesById.get(categoryId);
        if (!current || !current.parentId) {
            depths.set(categoryId, 0);
            return 0;
        }

        const depth = visit(current.parentId) + 1;
        depths.set(categoryId, depth);
        return depth;
    };

    categories.forEach((category) => visit(category.id));
    return depths;
}

function CreateServerModal({ isOpen, onClose, store }) {
    const [selectedCategoryIds, setSelectedCategoryIds] = useState([]);
    const [localError, setLocalError] = useState('');
    const [formData, setFormData] = useState({
        cpu: 2,
        memory: 4,
        gpu: false,
        storage: 50,
        duration: 30,
        reason: '',
    });

    const dataCategories = store?.dataCategories;
    const categoryDepths = useMemo(() => buildCategoryDepths(dataCategories || []), [dataCategories]);

    const selectedCategories = (dataCategories || []).filter((category) => selectedCategoryIds.includes(category.id));
    const requiresReason = selectedCategories.some((category) =>
        SENSITIVE_LEVELS.includes(category.secrecyLevel)
    );

    if (!isOpen) {
        return null;
    }

    const handleInputChange = (field, value) => {
        setFormData((current) => ({ ...current, [field]: value }));
    };

    const toggleCategory = (categoryId) => {
        setSelectedCategoryIds((current) =>
            current.includes(categoryId)
                ? current.filter((id) => id !== categoryId)
                : [...current, categoryId]
        );
    };

    const resetForm = () => {
        setSelectedCategoryIds([]);
        setLocalError('');
        setFormData({
            cpu: 2,
            memory: 4,
            gpu: false,
            storage: 50,
            duration: 30,
            reason: '',
        });
    };

    const handleClose = () => {
        if (store?.submitting) {
            return;
        }
        store?.clearError();
        setLocalError('');
        onClose();
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        setLocalError('');
        store?.clearError();

        if (formData.cpu < 1 || formData.memory < 1 || formData.storage < 10 || formData.duration < 1) {
            setLocalError('请填写有效的服务器规格');
            return;
        }

        if (requiresReason && !formData.reason.trim()) {
            setLocalError('选择机密或绝密数据时必须填写申请理由');
            return;
        }

        const success = await store.submitApplication({
            ...formData,
            memory: formData.memory * 1024,
            reason: formData.reason.trim(),
            dataCategoryIds: selectedCategoryIds,
        });

        if (success) {
            resetForm();
            onClose();
        }
    };

    const error = localError || store?.error;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <div
                className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
                onClick={handleClose}
            />

            <div className="relative w-full max-w-2xl overflow-hidden rounded-[var(--radius-xl)] border border-[var(--border-color)] bg-[var(--bg-card)] shadow-2xl">
                <div className="flex items-center justify-between border-b border-[var(--border-color)] bg-gradient-to-r from-[var(--bg-tertiary)] to-transparent p-6">
                    <div>
                        <h3 className="text-xl font-black text-[var(--text-primary)]">申请新服务器</h3>
                        <p className="mt-1 text-xs text-[var(--text-secondary)]">填写申请规格并选择需要访问的数据分类</p>
                    </div>
                    <button
                        type="button"
                        onClick={handleClose}
                        className="rounded-full p-2 text-[var(--text-tertiary)] transition-all hover:bg-[var(--bg-tertiary)] hover:text-[var(--text-primary)]"
                    >
                        <XMarkIcon className="h-6 w-6" />
                    </button>
                </div>

                <form onSubmit={handleSubmit} className="max-h-[70vh] overflow-y-auto p-8">
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                        <div className="space-y-6">
                            <div>
                                <label className="mb-3 block text-xs font-bold uppercase tracking-widest text-[var(--text-tertiary)]">
                                    <span className="flex items-center gap-1.5">
                                        <TagIcon className="h-3.5 w-3.5" />
                                        数据分类
                                    </span>
                                </label>
                                <div className="max-h-56 space-y-2 overflow-y-auto rounded-2xl border border-[var(--border-color)] bg-[var(--bg-tertiary)]/30 p-3">
                                    {(dataCategories || []).length === 0 && (
                                        <p className="text-sm text-[var(--text-tertiary)]">暂无可选数据分类</p>
                                    )}
                                    {(dataCategories || []).map((category) => {
                                        const active = selectedCategoryIds.includes(category.id);
                                        const depth = categoryDepths.get(category.id) || 0;
                                        const secrecyLabel =
                                            category.secrecyLevel === 'CONFIDENTIAL'
                                                ? '机密'
                                                : category.secrecyLevel === 'TOP_SECRET'
                                                    ? '绝密'
                                                    : category.secrecyLevel === 'INTERNAL'
                                                        ? '内部'
                                                        : '公开';

                                        return (
                                            <button
                                                key={category.id}
                                                type="button"
                                                onClick={() => toggleCategory(category.id)}
                                                className={`flex w-full items-center justify-between rounded-xl border px-3 py-2 text-left text-sm transition-all ${
                                                    active
                                                        ? 'border-[var(--primary-color)] bg-[var(--primary-color)]/10 text-[var(--primary-color)]'
                                                        : 'border-transparent bg-[var(--bg-secondary)] text-[var(--text-primary)] hover:border-[var(--border-color)]'
                                                }`}
                                                style={{ paddingLeft: `${12 + depth * 16}px` }}
                                            >
                                                <span>{category.name}</span>
                                                <span className="text-[10px] font-bold uppercase tracking-widest text-[var(--text-tertiary)]">
                                                    {secrecyLabel}
                                                </span>
                                            </button>
                                        );
                                    })}
                                </div>
                            </div>

                            <div>
                                <label className="mb-3 block text-xs font-bold uppercase tracking-widest text-[var(--text-tertiary)]">申请理由</label>
                                <textarea
                                    value={formData.reason}
                                    onChange={(event) => handleInputChange('reason', event.target.value)}
                                    className="min-h-[120px] w-full resize-none rounded-xl border border-transparent bg-[var(--bg-tertiary)] px-4 py-3 text-sm transition-all focus:border-[var(--primary-color)] focus:ring-0"
                                    placeholder={requiresReason ? '请说明涉密数据使用原因...' : '可选，描述您的使用场景'}
                                />
                                {requiresReason && (
                                    <p className="mt-2 text-xs text-amber-600">当前选择包含机密/绝密数据，申请理由为必填项。</p>
                                )}
                            </div>
                        </div>

                        <div className="space-y-4">
                            <div className="flex items-center gap-4 rounded-xl border border-transparent bg-[var(--bg-tertiary)]/50 p-4 transition-all hover:border-[var(--primary-color)]/20">
                                <div className="rounded-lg bg-[var(--bg-tertiary)] p-2 text-[var(--primary-color)]">
                                    <CpuChipIcon className="h-5 w-5" />
                                </div>
                                <div className="flex-1">
                                    <p className="text-[10px] font-bold uppercase text-[var(--text-tertiary)]">CPU 核心数</p>
                                    <select
                                        value={formData.cpu}
                                        onChange={(event) => handleInputChange('cpu', Number.parseInt(event.target.value, 10))}
                                        className="w-full cursor-pointer border-none bg-transparent p-0 text-sm font-bold focus:ring-0"
                                    >
                                        {[2, 4, 8, 16, 32].map((value) => (
                                            <option key={value} value={value}>{value} vCPU</option>
                                        ))}
                                    </select>
                                </div>
                            </div>

                            <div className="flex items-center gap-4 rounded-xl border border-transparent bg-[var(--bg-tertiary)]/50 p-4 transition-all hover:border-[var(--primary-color)]/20">
                                <div className="rounded-lg bg-[var(--bg-tertiary)] p-2 text-[var(--primary-color)]">
                                    <ServerIcon className="h-5 w-5" />
                                </div>
                                <div className="flex-1">
                                    <p className="text-[10px] font-bold uppercase text-[var(--text-tertiary)]">内存大小</p>
                                    <select
                                        value={formData.memory}
                                        onChange={(event) => handleInputChange('memory', Number.parseInt(event.target.value, 10))}
                                        className="w-full cursor-pointer border-none bg-transparent p-0 text-sm font-bold focus:ring-0"
                                    >
                                        {[4, 8, 16, 32, 64].map((value) => (
                                            <option key={value} value={value}>{value} GB</option>
                                        ))}
                                    </select>
                                </div>
                            </div>

                            <div className="flex items-center gap-4 rounded-xl border border-transparent bg-[var(--bg-tertiary)]/50 p-4 transition-all hover:border-[var(--primary-color)]/20">
                                <div className="rounded-lg bg-[var(--bg-tertiary)] p-2 text-[var(--primary-color)]">
                                    <CircleStackIcon className="h-5 w-5" />
                                </div>
                                <div className="flex-1">
                                    <p className="text-[10px] font-bold uppercase text-[var(--text-tertiary)]">磁盘空间</p>
                                    <select
                                        value={formData.storage}
                                        onChange={(event) => handleInputChange('storage', Number.parseInt(event.target.value, 10))}
                                        className="w-full cursor-pointer border-none bg-transparent p-0 text-sm font-bold focus:ring-0"
                                    >
                                        {[50, 100, 200, 500, 1000].map((value) => (
                                            <option key={value} value={value}>{value} GB</option>
                                        ))}
                                    </select>
                                </div>
                            </div>

                            <div className="flex items-center gap-4 rounded-xl border border-transparent bg-[var(--bg-tertiary)]/50 p-4 transition-all hover:border-[var(--primary-color)]/20">
                                <div className="rounded-lg bg-[var(--bg-tertiary)] p-2 text-[var(--primary-color)]">
                                    <ClockIcon className="h-5 w-5" />
                                </div>
                                <div className="flex-1">
                                    <p className="text-[10px] font-bold uppercase text-[var(--text-tertiary)]">申请时长（天）</p>
                                    <input
                                        type="number"
                                        value={formData.duration}
                                        onChange={(event) => handleInputChange('duration', Number.parseInt(event.target.value, 10) || 0)}
                                        className="w-full border-none bg-transparent p-0 text-sm font-bold focus:ring-0"
                                        min="1"
                                        max="365"
                                    />
                                </div>
                            </div>

                            <div className={`rounded-xl p-4 transition-all ${
                                formData.gpu
                                    ? 'border border-amber-500/20 bg-amber-500/10'
                                    : 'border border-transparent bg-[var(--bg-tertiary)]/30'
                            }`}>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-2">
                                        <div className={`h-2 w-2 rounded-full ${formData.gpu ? 'bg-amber-500' : 'bg-slate-400'}`} />
                                        <span className="text-xs font-bold uppercase tracking-wider">GPU 加速</span>
                                    </div>
                                    <button
                                        type="button"
                                        onClick={() => handleInputChange('gpu', !formData.gpu)}
                                        className={`relative h-5 w-10 rounded-full transition-all ${formData.gpu ? 'bg-amber-500' : 'bg-slate-300'}`}
                                    >
                                        <div className={`absolute top-1 h-3 w-3 rounded-full bg-white transition-all ${formData.gpu ? 'left-6' : 'left-1'}`} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {error && <Warning text={error} />}

                    <div className="mt-8 flex items-center justify-end gap-4">
                        <button
                            type="button"
                            onClick={handleClose}
                            className="button button-ghost px-8"
                        >
                            取消
                        </button>
                        <button
                            type="submit"
                            className="button button-primary px-12 py-3 shadow-lg shadow-blue-500/20"
                            disabled={store?.submitting}
                        >
                            {store?.submitting ? '提交中...' : '提交申请'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

const CreateServerModalView = observer(CreateServerModal);

export default CreateServerModalView;
