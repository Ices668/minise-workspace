export default function ResearchCommonNetworkTaskPage() {
  return (
    <div className="p-8 space-y-6">
<div className="max-w-[1280px] mx-auto px-6 py-8">
{/* Breadcrumbs */}
<nav className="flex items-center gap-2 mb-6">
<a className="text-primary/80 hover:text-primary text-sm font-medium" href="#">新型高端智库系统</a>
<span className="text-slate-400 text-sm">/</span>
<a className="text-primary/80 hover:text-primary text-sm font-medium" href="#">战略咨询智能支持</a>
<span className="text-slate-400 text-sm">/</span>
<a className="text-primary/80 hover:text-primary text-sm font-medium" href="#">技术趋势分析</a>
<span className="text-slate-400 text-sm">/</span>
<span className="text-slate-900 dark:text-slate-100 text-sm font-semibold">共性网络分析</span>
</nav>
{/* Page Header */}
<div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
<h1 className="text-3xl font-black tracking-tight text-slate-900 dark:text-slate-100">共性网络分析</h1>
<div className="flex flex-wrap items-center gap-3">
<button className="flex items-center gap-2 px-5 py-2.5 bg-primary text-white rounded-lg font-bold text-sm hover:bg-primary/90 transition-colors shadow-sm">
<span className="material-symbols-outlined text-lg">add_circle</span>
<span>创建网络分析</span>
</button>
<button className="flex items-center gap-2 px-5 py-2.5 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 rounded-lg font-bold text-sm hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors shadow-sm">
<span className="material-symbols-outlined text-lg">grid_on</span>
<span>导出矩阵</span>
</button>
<button className="flex items-center justify-center w-10 h-10 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors shadow-sm">
<span className="material-symbols-outlined text-lg">refresh</span>
</button>
</div>
</div>
{/* Tab Navigation */}
<div className="border-b border-slate-200 dark:border-slate-700 mb-8">
<div className="flex gap-10">
<a className="relative pb-4 text-sm font-bold text-primary border-b-2 border-primary" href="#">
                    分析任务
                </a>
<a className="relative pb-4 text-sm font-medium text-slate-500 dark:text-slate-400 hover:text-primary transition-colors" href="#">
                    语义图谱
                </a>
<a className="relative pb-4 text-sm font-medium text-slate-500 dark:text-slate-400 hover:text-primary transition-colors" href="#">
                    关系矩阵
                </a>
<a className="relative pb-4 text-sm font-medium text-slate-500 dark:text-slate-400 hover:text-primary transition-colors" href="#">
                    核心研究者
                </a>
</div>
</div>
{/* Content Area: 分析任务 View */}
<div className="space-y-8">
{/* Row 1: Summary Cards */}
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
<div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm flex flex-col gap-2">
<p className="text-slate-500 dark:text-slate-400 text-sm font-medium">运行中任务</p>
<div className="flex items-end gap-2">
<span className="text-3xl font-bold text-slate-900 dark:text-slate-100">12</span>
<span className="text-emerald-500 text-sm font-bold mb-1">+2%</span>
</div>
</div>
<div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm flex flex-col gap-2">
<p className="text-slate-500 dark:text-slate-400 text-sm font-medium">累计生成图谱</p>
<div className="flex items-end gap-2">
<span className="text-3xl font-bold text-slate-900 dark:text-slate-100">1,280</span>
<span className="text-emerald-500 text-sm font-bold mb-1">+14</span>
</div>
</div>
<div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm flex flex-col gap-2">
<p className="text-slate-500 dark:text-slate-400 text-sm font-medium">语义关系对</p>
<div className="flex items-end gap-2">
<span className="text-3xl font-bold text-slate-900 dark:text-slate-100">45.2k</span>
<span className="text-slate-400 text-sm font-medium mb-1">活跃</span>
</div>
</div>
<div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm flex flex-col gap-2">
<p className="text-slate-500 dark:text-slate-400 text-sm font-medium">核心聚类数</p>
<div className="flex items-end gap-2">
<span className="text-3xl font-bold text-slate-900 dark:text-slate-100">86</span>
<span className="text-amber-500 text-sm font-bold mb-1">需关注</span>
</div>
</div>
</div>
{/* Row 2: Grid of Analysis Task Cards */}
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
{/* Task Card 1 */}
<div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm flex flex-col overflow-hidden hover:border-primary/50 transition-colors">
<div className="p-6 flex-1">
<div className="flex justify-between items-start mb-4">
<h3 className="font-bold text-lg text-slate-900 dark:text-slate-100">量子计算全球专利共性分析</h3>
<span className="px-2 py-1 bg-primary/10 text-primary text-xs font-bold rounded">分析中</span>
</div>
<div className="space-y-3 mb-6">
<div className="flex items-center gap-2 text-sm">
<span className="material-symbols-outlined text-slate-400 text-base">database</span>
<span className="text-slate-500 dark:text-slate-400">数据源:</span>
<span className="text-slate-700 dark:text-slate-200 font-medium">WIPO 全球专利库</span>
</div>
<div className="flex items-center gap-2 text-sm">
<span className="material-symbols-outlined text-slate-400 text-base">settings_input_component</span>
<span className="text-slate-500 dark:text-slate-400">算法类型:</span>
<span className="text-slate-700 dark:text-slate-200 font-medium">BERT Semantic Analysis</span>
</div>
</div>
<div className="space-y-2">
<div className="flex justify-between text-xs font-bold">
<span className="text-slate-500">计算进度</span>
<span className="text-primary">78%</span>
</div>
<div className="w-full bg-slate-100 dark:bg-slate-700 h-2 rounded-full overflow-hidden">
<div className="bg-primary h-full rounded-full" style={{width: '78%'}}></div>
</div>
</div>
</div>
<div className="px-6 py-4 bg-slate-50 dark:bg-slate-800/50 border-t border-slate-200 dark:border-slate-700 flex gap-3">
<button className="flex-1 py-2 bg-primary/10 text-primary text-sm font-bold rounded-lg hover:bg-primary/20 transition-colors">查看图谱</button>
<button className="flex-1 py-2 bg-transparent text-slate-500 dark:text-slate-400 text-sm font-bold rounded-lg hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">详情</button>
</div>
</div>
{/* Task Card 2 */}
<div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm flex flex-col overflow-hidden hover:border-primary/50 transition-colors">
<div className="p-6 flex-1">
<div className="flex justify-between items-start mb-4">
<h3 className="font-bold text-lg text-slate-900 dark:text-slate-100">半导体材料前沿论文学术网络</h3>
<span className="px-2 py-1 bg-slate-100 dark:bg-slate-700 text-slate-500 dark:text-slate-400 text-xs font-bold rounded">已完成</span>
</div>
<div className="space-y-3 mb-6">
<div className="flex items-center gap-2 text-sm">
<span className="material-symbols-outlined text-slate-400 text-base">database</span>
<span className="text-slate-500 dark:text-slate-400">数据源:</span>
<span className="text-slate-700 dark:text-slate-200 font-medium">IEEE & Elsevier Papers</span>
</div>
<div className="flex items-center gap-2 text-sm">
<span className="material-symbols-outlined text-slate-400 text-base">settings_input_component</span>
<span className="text-slate-500 dark:text-slate-400">算法类型:</span>
<span className="text-slate-700 dark:text-slate-200 font-medium">Louvain Clustering</span>
</div>
</div>
<div className="space-y-2">
<div className="flex justify-between text-xs font-bold">
<span className="text-slate-500">计算进度</span>
<span className="text-emerald-500">100%</span>
</div>
<div className="w-full bg-slate-100 dark:bg-slate-700 h-2 rounded-full overflow-hidden">
<div className="bg-emerald-500 h-full rounded-full" style={{width: '100%'}}></div>
</div>
</div>
</div>
<div className="px-6 py-4 bg-slate-50 dark:bg-slate-800/50 border-t border-slate-200 dark:border-slate-700 flex gap-3">
<button className="flex-1 py-2 bg-primary text-white text-sm font-bold rounded-lg hover:bg-primary/90 transition-colors shadow-sm">查看图谱</button>
<button className="flex-1 py-2 bg-transparent text-slate-500 dark:text-slate-400 text-sm font-bold rounded-lg hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">详情</button>
</div>
</div>
{/* Task Card 3 */}
<div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm flex flex-col overflow-hidden hover:border-primary/50 transition-colors">
<div className="p-6 flex-1">
<div className="flex justify-between items-start mb-4">
<h3 className="font-bold text-lg text-slate-900 dark:text-slate-100">新型储能技术演进路径识别</h3>
<span className="px-2 py-1 bg-amber-100 text-amber-700 text-xs font-bold rounded">排队中</span>
</div>
<div className="space-y-3 mb-6">
<div className="flex items-center gap-2 text-sm">
<span className="material-symbols-outlined text-slate-400 text-base">database</span>
<span className="text-slate-500 dark:text-slate-400">数据源:</span>
<span className="text-slate-700 dark:text-slate-200 font-medium">Multi-source Journals</span>
</div>
<div className="flex items-center gap-2 text-sm">
<span className="material-symbols-outlined text-slate-400 text-base">settings_input_component</span>
<span className="text-slate-500 dark:text-slate-400">算法类型:</span>
<span className="text-slate-700 dark:text-slate-200 font-medium">TextRank & Co-occurrence</span>
</div>
</div>
<div className="space-y-2">
<div className="flex justify-between text-xs font-bold">
<span className="text-slate-500">等待任务数</span>
<span className="text-amber-600">3个任务前置</span>
</div>
<div className="w-full bg-slate-100 dark:bg-slate-700 h-2 rounded-full overflow-hidden">
<div className="bg-amber-400 h-full rounded-full" style={{width: '15%'}}></div>
</div>
</div>
</div>
<div className="px-6 py-4 bg-slate-50 dark:bg-slate-800/50 border-t border-slate-200 dark:border-slate-700 flex gap-3">
<button className="flex-1 py-2 bg-slate-100 dark:bg-slate-700 text-slate-400 text-sm font-bold rounded-lg cursor-not-allowed">查看图谱</button>
<button className="flex-1 py-2 bg-transparent text-slate-500 dark:text-slate-400 text-sm font-bold rounded-lg hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">详情</button>
</div>
</div>
</div>
{/* Conceptual Visualization Section (Preview) */}
<div className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm overflow-hidden h-[500px] flex">
{/* Left Control Panel */}
<div className="w-72 border-r border-slate-200 dark:border-slate-700 p-6 flex flex-col gap-6">
<div>
<h4 className="text-sm font-bold mb-4 flex items-center gap-2">
<span className="material-symbols-outlined text-primary text-lg">filter_alt</span>
                            图谱控制参数
                        </h4>
<div className="space-y-6">
<div className="space-y-3">
<label className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">节点密度</label>
<input className="w-full h-1.5 bg-slate-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-primary" type="range" />
<div className="flex justify-between text-[10px] text-slate-400">
<span>稀疏</span>
<span>密集</span>
</div>
</div>
<div className="space-y-3">
<label className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">关联强度阈值</label>
<input className="w-full h-1.5 bg-slate-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-primary" type="range" value="65" />
<div className="flex justify-between text-[10px] text-slate-400">
<span>0.1</span>
<span>1.0</span>
</div>
</div>
<div className="pt-4 border-t border-slate-100 dark:border-slate-700">
<label className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-3 block">节点类型显示</label>
<div className="space-y-2">
<label className="flex items-center gap-2 cursor-pointer">
<input checked className="rounded text-primary focus:ring-primary w-4 h-4" type="checkbox" />
<span className="text-sm text-slate-700 dark:text-slate-200">核心技术术语</span>
</label>
<label className="flex items-center gap-2 cursor-pointer">
<input checked className="rounded text-primary focus:ring-primary w-4 h-4" type="checkbox" />
<span className="text-sm text-slate-700 dark:text-slate-200">机构/组织</span>
</label>
<label className="flex items-center gap-2 cursor-pointer">
<input className="rounded text-primary focus:ring-primary w-4 h-4" type="checkbox" />
<span className="text-sm text-slate-700 dark:text-slate-200">应用场景</span>
</label>
</div>
</div>
</div>
</div>
<div className="mt-auto">
<button className="w-full py-2.5 bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 text-sm font-bold rounded-lg hover:opacity-90 transition-opacity">
                            重置布局
                        </button>
</div>
</div>
{/* Visualization Area (Placeholder) */}
<div className="flex-1 relative bg-slate-50 dark:bg-slate-900/50 flex items-center justify-center overflow-hidden">
{/* Abstract Background Pattern for Network Graph */}
<div className="absolute inset-0 opacity-20" data-alt="Abstract network pattern background" style={{backgroundImage: 'radial-gradient(#0ba6da 1px, transparent 1px)', backgroundSize: '32px 32px'}}>
</div>
<div className="relative text-center z-10 flex flex-col items-center">
<div className="w-24 h-24 rounded-full border-4 border-primary/20 flex items-center justify-center mb-4">
<span className="material-symbols-outlined text-4xl text-primary animate-pulse">hub</span>
</div>
<h4 className="text-slate-900 dark:text-slate-100 font-bold text-lg">语义网络可视化加载中...</h4>
<p className="text-slate-500 text-sm mt-1 max-w-xs px-4">正在基于 45,200 个语义关系对构建实时动态拓扑图</p>
</div>
{/* Floating Tools */}
<div className="absolute bottom-6 right-6 flex flex-col gap-2">
<button className="w-10 h-10 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg flex items-center justify-center text-slate-600 dark:text-slate-300 shadow-lg hover:text-primary transition-colors">
<span className="material-symbols-outlined">zoom_in</span>
</button>
<button className="w-10 h-10 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg flex items-center justify-center text-slate-600 dark:text-slate-300 shadow-lg hover:text-primary transition-colors">
<span className="material-symbols-outlined">zoom_out</span>
</button>
<button className="w-10 h-10 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg flex items-center justify-center text-slate-600 dark:text-slate-300 shadow-lg hover:text-primary transition-colors">
<span className="material-symbols-outlined">fullscreen</span>
</button>
</div>
</div>
</div>
</div>
</div>
    </div>
  )
}
