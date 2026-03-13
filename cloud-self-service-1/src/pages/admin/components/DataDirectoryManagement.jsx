import React, { useEffect, useMemo, useState } from 'react';
import { observer } from 'mobx-react-lite';
import { useStore } from '../context';
import { 
    PlusIcon, 
    PencilIcon, 
    TrashIcon, 
    ChevronDownIcon, 
    ChevronRightIcon,
    FolderIcon,
    FolderOpenIcon,
    ShieldCheckIcon,
    TagIcon,
    ArrowPathIcon,
    MapIcon,
    MagnifyingGlassIcon
} from '@heroicons/react/24/outline';

const filterDirectories = (directories, query, autoExpandedIds) => {
    if (!query) return directories;

    const normalizedQuery = query.toLowerCase();

    return directories
        .map((dir) => {
            const matchesQuery = dir.name.toLowerCase().includes(normalizedQuery) ||
                dir.path.toLowerCase().includes(normalizedQuery);
            const filteredChildren = dir.children?.length > 0
                ? filterDirectories(dir.children, query, autoExpandedIds)
                : [];

            if (matchesQuery || filteredChildren.length > 0) {
                if (filteredChildren.length > 0) {
                    autoExpandedIds.add(dir.id);
                }

                return {
                    ...dir,
                    children: filteredChildren,
                };
            }

            return null;
        })
        .filter(Boolean);
};

const DataDirectoryManagement = observer(() => {
    const store = useStore();
    const [isAdding, setIsAdding] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const [currentDirectory, setCurrentDirectory] = useState({
        name: '',
        path: '',
        classification: 'public',
        parentId: null
    });
    const [expandedDirs, setExpandedDirs] = useState(new Set());
    const [searchQuery, setSearchQuery] = useState('');

    const classificationLevels = [
        { value: 'public', label: '公开', color: 'bg-emerald-500/10 text-emerald-600 border-emerald-500/20' },
        { value: 'internal', label: '内部', color: 'bg-blue-500/10 text-blue-600 border-blue-500/20' },
        { value: 'confidential', label: '机密', color: 'bg-amber-500/10 text-amber-600 border-amber-500/20' },
        { value: 'secret', label: '绝密', color: 'bg-rose-500/10 text-rose-600 border-rose-500/20' }
    ];

    const getClassificationStyles = (classification) => {
        const level = classificationLevels.find(l => l.value === classification);
        return level ? level.color : 'bg-slate-500/10 text-slate-600 border-slate-500/20';
    };

    const resetState = () => {
        setIsAdding(false);
        setIsEditing(false);
        setCurrentDirectory({
            name: '',
            path: '',
            classification: 'public',
            parentId: null
        });
    };

    const { filteredDirectories, autoExpandedIds } = useMemo(() => {
        const nextAutoExpandedIds = new Set();
        const filtered = filterDirectories(store.dataDirectories, searchQuery.trim(), nextAutoExpandedIds);

        return {
            filteredDirectories: filtered,
            autoExpandedIds: nextAutoExpandedIds
        };
    }, [searchQuery, store.dataDirectories]);

    useEffect(() => {
        if (autoExpandedIds.size === 0) {
            return;
        }

        setExpandedDirs((current) => {
            const next = new Set(current);
            autoExpandedIds.forEach((id) => next.add(id));
            return next;
        });
    }, [autoExpandedIds]);

    // 递归渲染目录树节点
    const renderDirectoryTree = (directories, level = 0) => {
        return directories.map(directory => {
            const isExpanded = expandedDirs.has(directory.id);
            const hasChildren = directory.children && directory.children.length > 0;
            const subDirCount = directory.children ? directory.children.length : 0;

            return (
                <div key={directory.id} className="animate-in fade-in slide-in-from-left-2 duration-300">
                    <div className="group relative flex items-center gap-4 py-5 px-6 rounded-[2.5rem] hover:bg-[var(--primary-color)]/[0.03] transition-all border border-transparent hover:border-[var(--glass-border)] hover:shadow-2xl hover:shadow-indigo-500/5">
                        {/* 层级引导线 */}
                        {level > 0 && (
                            <div className="absolute left-[-2rem] top-1/2 -translate-y-1/2 w-8 h-[2px] bg-gradient-to-r from-[var(--glass-border)] to-transparent opacity-40"></div>
                        )}

                        {/* 展开/折叠按钮 */}
                        <div className="w-8 shrink-0 flex items-center justify-center relative z-10">
                            {hasChildren ? (
                                <button
                                    onClick={() => toggleDirectory(directory.id)}
                                    className={`w-8 h-8 rounded-xl flex items-center justify-center transition-all duration-300 ${
                                        isExpanded 
                                        ? 'bg-[var(--primary-color)] text-white shadow-lg shadow-[var(--primary-color)]/20 rotate-0' 
                                        : 'bg-[var(--bg-tertiary)] text-[var(--text-tertiary)] hover:text-[var(--primary-color)] hover:bg-white dark:hover:bg-slate-800 -rotate-90'
                                    }`}
                                >
                                    <ChevronDownIcon className="w-4 h-4" />
                                </button>
                            ) : (
                                <div className="w-2 h-2 rounded-full bg-[var(--text-tertiary)] opacity-20"></div>
                            )}
                        </div>

                        {/* 目录图标 */}
                        <div className={`w-14 h-14 rounded-[1.25rem] shrink-0 flex items-center justify-center transition-all duration-500 ${
                            isExpanded ? 'bg-gradient-to-br from-indigo-500 to-blue-600 text-white shadow-lg shadow-indigo-500/20' : 'bg-[var(--bg-tertiary)] text-[var(--text-tertiary)] group-hover:bg-white dark:group-hover:bg-slate-800 shadow-sm border border-[var(--glass-border)]'
                        }`}>
                            {isExpanded ? <FolderOpenIcon className="w-7 h-7" /> : <FolderIcon className="w-7 h-7" />}
                        </div>

                        {/* 目录信息 */}
                        <div className="flex-1 min-w-0 ml-2">
                            <div className="flex items-center gap-3 mb-2">
                                <span className="font-black text-[var(--text-primary)] text-xl tracking-tight group-hover:text-[var(--primary-color)] transition-colors">{directory.name}</span>
                                <span className={`px-3 py-1 text-[9px] font-black uppercase tracking-widest rounded-full border shadow-sm ${getClassificationStyles(directory.classification)}`}>
                                    {classificationLevels.find(l => l.value === directory.classification)?.label || directory.classification}
                                </span>
                                {hasChildren && (
                                    <span className="px-2 py-0.5 rounded-lg bg-[var(--bg-tertiary)]/50 border border-[var(--glass-border)] text-[9px] font-black text-[var(--text-tertiary)] uppercase tracking-tighter">
                                        {subDirCount} 子目录
                                    </span>
                                )}
                            </div>
                            <div className="flex items-center gap-5">
                                <span className="text-xs text-[var(--text-secondary)] flex items-center gap-2 font-bold bg-[var(--bg-tertiary)]/30 px-3 py-1 rounded-lg border border-[var(--glass-border)]">
                                    <MapIcon className="w-3.5 h-3.5 text-[var(--primary-color)]" />
                                    <span className="truncate max-w-[150px] sm:max-w-xs">{directory.path}</span>
                                </span>
                                <span className="text-[10px] text-[var(--text-tertiary)] uppercase font-black tracking-tighter hidden sm:flex items-center gap-2 bg-[var(--bg-tertiary)]/20 px-2 py-1 rounded-md">
                                    <ShieldCheckIcon className="w-3.5 h-3.5 opacity-60" />
                                    ID: {directory.id.toString().padStart(4, '0')}
                                </span>
                            </div>
                        </div>

                        {/* 操作按钮 */}
                        <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-all transform translate-x-4 group-hover:translate-x-0 duration-300">
                            <button
                                onClick={() => handleAddSubDirectory(directory)}
                                className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-600 hover:bg-emerald-500 hover:text-white transition-all active:scale-95 flex items-center justify-center border border-emerald-500/20"
                                title="添加子目录"
                            >
                                <PlusIcon className="w-5 h-5" />
                            </button>
                            <button
                                onClick={() => handleEditDirectory(directory)}
                                className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-600 hover:bg-blue-500 hover:text-white transition-all active:scale-95 flex items-center justify-center border border-blue-500/20"
                                title="编辑"
                            >
                                <PencilIcon className="w-5 h-5" />
                            </button>
                            <button
                                onClick={() => handleDeleteDirectory(directory.id)}
                                className="w-10 h-10 rounded-xl bg-rose-500/10 text-rose-600 hover:bg-rose-500 hover:text-white transition-all active:scale-95 flex items-center justify-center border border-rose-500/20"
                                title="删除"
                            >
                                <TrashIcon className="w-5 h-5" />
                            </button>
                        </div>
                    </div>

                    {/* 递归渲染子目录 */}
                    {hasChildren && isExpanded && (
                        <div className="ml-10 pl-8 border-l-2 border-[var(--glass-border)]/50 mt-2 space-y-3 relative">
                            {/* 垂直连接引导线装饰 */}
                            <div className="absolute left-[-2px] top-0 bottom-6 w-0.5 bg-gradient-to-b from-[var(--primary-color)]/30 to-transparent"></div>
                            {renderDirectoryTree(directory.children, level + 1)}
                        </div>
                    )}
                </div>
            );
        });
    };

    // 切换目录展开/折叠状态
    const toggleDirectory = (directoryId) => {
        setExpandedDirs((current) => {
            const next = new Set(current);
            if (next.has(directoryId)) {
                next.delete(directoryId);
            } else {
                next.add(directoryId);
            }
            return next;
        });
    };

    // 添加子目录
    const handleAddSubDirectory = (parentDirectory) => {
        setCurrentDirectory({
            name: '',
            path: `${parentDirectory.path}/`,
            classification: parentDirectory.classification,
            parentId: parentDirectory.id
        });
        setIsAdding(true);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleAddDirectory = async () => {
        const success = await store.addDataDirectory(currentDirectory);
        if (success) {
            resetState();
        }
    };

    const handleUpdateDirectory = async () => {
        const success = await store.updateDataDirectory(currentDirectory.id, currentDirectory);
        if (success) {
            resetState();
        }
    };

    const handleDeleteDirectory = async (directoryId) => {
        if (window.confirm('确定要删除这个数据目录吗？若存在子目录或已被申请使用，后端会拒绝删除。')) {
            await store.deleteDataDirectory(directoryId);
        }
    };

    const handleEditDirectory = (directory) => {
        setCurrentDirectory(directory);
        setIsEditing(true);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            {/* 添加/编辑卡片 */}
            {(isAdding || isEditing) && (
                <div className="relative bg-[var(--glass-bg)] border border-[var(--glass-border)] rounded-[2.5rem] p-10 backdrop-blur-md shadow-2xl shadow-indigo-500/5 animate-in slide-in-from-top-4 duration-500 overflow-hidden">
                    {/* 背景装饰 */}
                    <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-[var(--primary-color)]/5 rounded-full blur-3xl pointer-events-none"></div>
                    <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-48 h-48 bg-indigo-500/5 rounded-full blur-2xl pointer-events-none"></div>
                    
                    <div className="relative flex items-center gap-6 mb-10">
                        <div className={`w-16 h-16 rounded-[1.5rem] flex items-center justify-center shadow-xl ${isAdding ? 'bg-indigo-500/10 text-indigo-600 shadow-indigo-500/10' : 'bg-blue-500/10 text-blue-600 shadow-blue-500/10'}`}>
                            {isAdding ? <PlusIcon className="w-8 h-8" /> : <PencilIcon className="w-8 h-8" />}
                        </div>
                        <div>
                            <h3 className="text-2xl font-black text-[var(--text-primary)] tracking-tight">
                                {isAdding ? '创建新数据目录' : '编辑目录信息'}
                            </h3>
                            <p className="text-[var(--text-secondary)] font-medium mt-1">
                                {isAdding ? '在系统中定义新的数据分类及路径' : '修改现有目录的层级、路径或安全等级'}
                            </p>
                        </div>
                    </div>

                    <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="space-y-3">
                            <label className="flex items-center gap-2 text-[11px] font-black text-[var(--text-tertiary)] uppercase tracking-[0.2em] ml-2">
                                <TagIcon className="w-4 h-4 opacity-70" />
                                目录名称
                            </label>
                            <input
                                type="text"
                                value={currentDirectory.name}
                                onChange={(e) => setCurrentDirectory(prev => ({ ...prev, name: e.target.value }))}
                                className="w-full px-6 py-4 bg-[var(--bg-secondary)]/50 border border-[var(--glass-border)] rounded-2xl focus:outline-none focus:ring-4 focus:ring-[var(--primary-color)]/10 focus:border-[var(--primary-color)] text-[var(--text-primary)] transition-all font-bold placeholder:text-[var(--text-tertiary)]/50"
                                placeholder="输入目录名称..."
                            />
                        </div>
                        <div className="space-y-3">
                            <label className="flex items-center gap-2 text-[11px] font-black text-[var(--text-tertiary)] uppercase tracking-[0.2em] ml-2">
                                <MapIcon className="w-4 h-4 opacity-70" />
                                目录路径
                            </label>
                            <input
                                type="text"
                                value={currentDirectory.path}
                                onChange={(e) => setCurrentDirectory(prev => ({ ...prev, path: e.target.value }))}
                                className="w-full px-6 py-4 bg-[var(--bg-secondary)]/50 border border-[var(--glass-border)] rounded-2xl focus:outline-none focus:ring-4 focus:ring-[var(--primary-color)]/10 focus:border-[var(--primary-color)] text-[var(--text-primary)] transition-all font-bold placeholder:text-[var(--text-tertiary)]/50"
                                placeholder="/path/to/data..."
                            />
                        </div>
                        <div className="space-y-3">
                            <label className="flex items-center gap-2 text-[11px] font-black text-[var(--text-tertiary)] uppercase tracking-[0.2em] ml-2">
                                <ShieldCheckIcon className="w-4 h-4 opacity-70" />
                                安全密级
                            </label>
                            <div className="relative group">
                                <select
                                    value={currentDirectory.classification}
                                    onChange={(e) => setCurrentDirectory(prev => ({ ...prev, classification: e.target.value }))}
                                    className="w-full px-6 py-4 bg-[var(--bg-secondary)]/50 border border-[var(--glass-border)] rounded-2xl focus:outline-none focus:ring-4 focus:ring-[var(--primary-color)]/10 focus:border-[var(--primary-color)] text-[var(--text-primary)] transition-all appearance-none cursor-pointer font-bold pr-12"
                                >
                                    {classificationLevels.map(level => (
                                        <option key={level.value} value={level.value}>
                                            {level.label}
                                        </option>
                                    ))}
                                </select>
                                <ChevronDownIcon className="absolute right-5 top-1/2 -translate-y-1/2 w-5 h-5 text-[var(--text-tertiary)] pointer-events-none group-hover:text-[var(--primary-color)] transition-colors" />
                            </div>
                        </div>
                    </div>

                    <div className="relative flex justify-end gap-4 mt-10 pt-10 border-t border-[var(--glass-border)]">
                        <button
                            onClick={resetState}
                            className="px-8 py-4 rounded-2xl text-sm font-black text-[var(--text-secondary)] hover:bg-[var(--bg-tertiary)] transition-all border border-transparent hover:border-[var(--glass-border)]"
                        >
                            取消操作
                        </button>
                        <button
                            onClick={isEditing ? handleUpdateDirectory : handleAddDirectory}
                            className={`px-12 py-4 text-white font-black rounded-2xl transition-all shadow-xl active:scale-95 hover:-translate-y-0.5 ${isEditing ? 'bg-blue-600 hover:bg-blue-700 shadow-blue-500/25 hover:shadow-blue-500/40' : 'bg-indigo-600 hover:bg-indigo-700 shadow-indigo-500/25 hover:shadow-indigo-500/40'}`}
                        >
                            {isEditing ? '保存修改' : '立即创建目录'}
                        </button>
                    </div>
                </div>
            )}

            {/* 目录列表卡片 */}
            <div className="relative bg-[var(--glass-bg)] border border-[var(--glass-border)] rounded-[2.5rem] backdrop-blur-md overflow-hidden shadow-2xl shadow-slate-200/50 dark:shadow-none min-h-[600px] flex flex-col">
                {/* 统一设计的标题栏 */}
                <div className="px-8 py-6 border-b border-[var(--glass-border)] flex flex-col lg:flex-row lg:items-center justify-between gap-6 bg-[var(--bg-tertiary)]/10">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-[var(--primary-color)]/10 flex items-center justify-center text-[var(--primary-color)]">
                            <FolderIcon className="w-5 h-5" />
                        </div>
                        <div>
                            <h2 className="text-lg font-black text-[var(--text-primary)]">数据分类管理</h2>
                            <p className="text-[10px] font-bold text-[var(--text-tertiary)] uppercase tracking-widest">Data Category Management</p>
                        </div>
                    </div>

                    <div className="flex flex-col sm:flex-row items-center gap-4">
                        <div className="relative w-full sm:w-64 group">
                            <MagnifyingGlassIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[var(--text-tertiary)] group-focus-within:text-[var(--primary-color)] transition-colors" />
                            <input 
                                type="text" 
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                placeholder="搜索目录名称、路径..."
                                className="w-full pl-10 pr-4 py-2.5 bg-[var(--glass-bg)] border border-[var(--glass-border)] rounded-xl text-xs font-bold focus:outline-none focus:ring-4 focus:ring-[var(--primary-color)]/10 focus:border-[var(--primary-color)] transition-all"
                            />
                        </div>
                        <button
                            onClick={() => {
                                resetState();
                                setIsAdding(true);
                            }}
                            className="w-full sm:w-auto flex items-center justify-center gap-2 px-5 py-2.5 bg-[var(--primary-color)] hover:bg-indigo-600 text-white text-xs font-black rounded-xl transition-all shadow-lg shadow-indigo-500/20 active:scale-95 group"
                        >
                            <PlusIcon className="w-4 h-4 group-hover:rotate-90 transition-transform duration-300" />
                            新建根目录
                        </button>
                    </div>
                </div>

                <div className="p-8 flex-1">
                    {store.loadingDataDirectories ? (
                        <div className="py-24 text-center">
                            <div className="relative inline-block">
                                <ArrowPathIcon className="w-16 h-16 text-[var(--primary-color)] animate-spin opacity-20" />
                                <ArrowPathIcon className="w-16 h-16 text-[var(--primary-color)] animate-spin absolute inset-0 [animation-delay:-0.5s]" />
                            </div>
                            <p className="text-sm font-black text-[var(--text-tertiary)] uppercase tracking-[0.2em] mt-8">正在解析目录架构...</p>
                        </div>
                    ) : store.dataDirectories.length === 0 ? (
                        <div className="py-20 px-4">
                            <div className="w-20 h-20 rounded-[2rem] bg-[var(--bg-tertiary)]/50 flex items-center justify-center text-[var(--text-tertiary)] mb-8 transform -rotate-12 group hover:rotate-0 transition-transform duration-500">
                                <FolderIcon className="w-10 h-10 opacity-30" />
                            </div>
                            <h3 className="text-2xl font-black text-[var(--text-primary)] mb-4 tracking-tight">架构暂未构建</h3>
                            <p className="text-[var(--text-secondary)] max-w-sm text-sm font-medium leading-relaxed mb-10">
                                系统中尚未定义任何数据分类目录。构建良好的数据架构是高效管理资源的第一步。
                            </p>
                            {!isAdding && (
                                <button 
                                    onClick={() => setIsAdding(true)} 
                                    className="px-10 py-4 bg-[var(--primary-color)] text-white font-black text-xs uppercase tracking-widest rounded-2xl transition-all shadow-xl shadow-indigo-500/20 hover:scale-105 active:scale-95 flex items-center gap-3"
                                >
                                    <PlusIcon className="w-4 h-4" />
                                    创建第一个根目录
                                </button>
                            )}
                        </div>
                    ) : filteredDirectories.length === 0 ? (
                        <div className="py-20 px-4">
                            <div className="w-20 h-20 rounded-[2rem] bg-[var(--bg-tertiary)]/50 flex items-center justify-center text-[var(--text-tertiary)] mb-8 transform -rotate-12 group hover:rotate-0 transition-transform duration-500">
                                <MagnifyingGlassIcon className="w-10 h-10 opacity-30" />
                            </div>
                            <h3 className="text-2xl font-black text-[var(--text-primary)] mb-4 tracking-tight">未找到匹配目录</h3>
                            <p className="text-[var(--text-secondary)] max-w-sm text-sm font-medium leading-relaxed">
                                找不到包含 "{searchQuery}" 的目录或路径。请尝试其他搜索词或清除搜索框。
                            </p>
                            <button 
                                onClick={() => setSearchQuery('')}
                                className="mt-8 text-[var(--primary-color)] font-black text-xs uppercase tracking-widest hover:underline"
                            >
                                清除搜索词
                            </button>
                        </div>
                    ) : (
                        <div className="space-y-4">
                            {renderDirectoryTree(filteredDirectories)}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
});

export default DataDirectoryManagement;
