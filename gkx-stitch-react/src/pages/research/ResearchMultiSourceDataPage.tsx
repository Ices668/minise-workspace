export default function ResearchMultiSourceDataPage() {
  return (
    <div className="p-8 space-y-6">
<div className="max-w-[1440px] mx-auto px-6 py-8">
{/* Breadcrumb */}
<nav className="flex items-center gap-2 mb-6 text-sm">
<a className="text-slate-500 hover:text-primary transition-colors" href="#">新型高端智库系统</a>
<span className="text-slate-400">/</span>
<a className="text-slate-500 hover:text-primary transition-colors" href="#">战略咨询智能支持</a>
<span className="text-slate-400">/</span>
<a className="text-slate-500 hover:text-primary transition-colors" href="#">智能问数</a>
<span className="text-slate-400">/</span>
<span className="text-slate-900 font-semibold">多源数据接入</span>
</nav>
{/* Page Header */}
<div className="flex flex-wrap items-center justify-between gap-4 mb-8">
<h1 className="text-3xl font-bold tracking-tight">多源数据接入</h1>
<div className="flex items-center gap-3">
<button className="flex items-center gap-2 px-5 py-2.5 bg-primary/10 text-primary font-semibold rounded-lg hover:bg-primary/20 transition-all border border-primary/20">
<span className="material-symbols-outlined text-[20px]">history</span>
<span>同步日志</span>
</button>
<button className="flex items-center gap-2 px-5 py-2.5 bg-primary/10 text-primary font-semibold rounded-lg hover:bg-primary/20 transition-all border border-primary/20">
<span className="material-symbols-outlined text-[20px]">cleaning_services</span>
<span>数据清洗配置</span>
</button>
<button className="flex items-center gap-2 px-5 py-2.5 bg-primary text-white font-semibold rounded-lg hover:opacity-90 shadow-lg shadow-primary/20 transition-all">
<span className="material-symbols-outlined text-[20px]">add_circle</span>
<span>新建数据源</span>
</button>
</div>
</div>
{/* Stats Summary */}
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
<div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-sm border border-slate-100 dark:border-slate-700 flex items-center justify-between">
<div>
<p className="text-slate-500 text-sm mb-1">接入总数</p>
<h3 className="text-2xl font-bold">128 <span className="text-xs font-normal text-slate-400 ml-1">个数据源</span></h3>
</div>
<div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
<span className="material-symbols-outlined">database</span>
</div>
</div>
<div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-sm border border-slate-100 dark:border-slate-700 flex items-center justify-between">
<div>
<p className="text-slate-500 text-sm mb-1">今日实时同步</p>
<h3 className="text-2xl font-bold">45,210 <span className="text-xs font-normal text-slate-400 ml-1">条记录</span></h3>
</div>
<div className="w-12 h-12 bg-emerald-50 rounded-full flex items-center justify-center text-emerald-500">
<span className="material-symbols-outlined text-emerald-500">sync</span>
</div>
</div>
<div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-sm border border-slate-100 dark:border-slate-700 flex items-center justify-between">
<div>
<p className="text-slate-500 text-sm mb-1">数据清洗异常</p>
<h3 className="text-2xl font-bold text-rose-500">12 <span className="text-xs font-normal text-slate-400 ml-1">项待处理</span></h3>
</div>
<div className="w-12 h-12 bg-rose-50 rounded-full flex items-center justify-center text-rose-500">
<span className="material-symbols-outlined">warning</span>
</div>
</div>
<div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-sm border border-slate-100 dark:border-slate-700 flex items-center justify-between">
<div>
<p className="text-slate-500 text-sm mb-1">接入健康度</p>
<h3 className="text-2xl font-bold">98.5<span className="text-sm font-normal ml-1">%</span></h3>
</div>
<div className="relative w-12 h-12 flex items-center justify-center">
<svg className="w-full h-full transform -rotate-90">
<circle className="text-slate-100 dark:text-slate-700" cx="24" cy="24" fill="transparent" r="20" stroke="currentColor" stroke-width="4"></circle>
<circle className="text-primary" cx="24" cy="24" fill="transparent" r="20" stroke="currentColor" stroke-dasharray="125.6" stroke-dashoffset="1.8" stroke-width="4"></circle>
</svg>
<span className="absolute inset-0 flex items-center justify-center text-[10px] font-bold">OK</span>
</div>
</div>
</div>
{/* Filter Card */}
<div className="bg-white dark:bg-slate-800 p-5 rounded-lg shadow-sm border border-slate-100 dark:border-slate-700 mb-8">
<div className="flex flex-wrap items-center gap-4">
<div className="flex-1 min-w-[280px]">
<div className="relative">
<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-[20px]">search</span>
<input className="w-full pl-10 pr-4 py-2 bg-slate-50 dark:bg-slate-900 border-none rounded-full text-sm focus:ring-2 focus:ring-primary/30" placeholder="搜索数据源名称、ID或关键词..." type="text" />
</div>
</div>
<div className="flex flex-wrap items-center gap-3">
<div className="relative group">
<button className="flex items-center gap-2 px-4 py-2 bg-slate-50 dark:bg-slate-900 rounded-full text-sm font-medium hover:bg-slate-100 transition-colors">
<span>接入类型</span>
<span className="material-symbols-outlined text-[18px] text-slate-400">expand_more</span>
</button>
</div>
<div className="relative group">
<button className="flex items-center gap-2 px-4 py-2 bg-slate-50 dark:bg-slate-900 rounded-full text-sm font-medium hover:bg-slate-100 transition-colors">
<span>同步状态</span>
<span className="material-symbols-outlined text-[18px] text-slate-400">expand_more</span>
</button>
</div>
<div className="relative group">
<button className="flex items-center gap-2 px-4 py-2 bg-slate-50 dark:bg-slate-900 rounded-full text-sm font-medium hover:bg-slate-100 transition-colors">
<span className="material-symbols-outlined text-[18px] text-slate-400">calendar_today</span>
<span>更新时间</span>
<span className="material-symbols-outlined text-[18px] text-slate-400">expand_more</span>
</button>
</div>
<button className="px-4 py-2 text-primary font-medium text-sm hover:underline">重置条件</button>
</div>
</div>
</div>
{/* Main Content - List & Monitoring View */}
<div className="bg-white dark:bg-slate-800 rounded-lg shadow-sm border border-slate-100 dark:border-slate-700 overflow-hidden">
{/* Toolbar */}
<div className="p-4 border-b border-slate-100 dark:border-slate-700 flex items-center justify-between bg-slate-50/50 dark:bg-slate-900/50">
<div className="flex items-center p-1 bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700">
<button className="p-1.5 rounded-md bg-primary text-white shadow-sm flex items-center justify-center">
<span className="material-symbols-outlined text-[20px]">list</span>
</button>
<button className="p-1.5 rounded-md text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 flex items-center justify-center">
<span className="material-symbols-outlined text-[20px]">grid_view</span>
</button>
</div>
<div className="flex items-center gap-3">
<button className="px-4 py-2 text-sm font-medium text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-lg transition-colors flex items-center gap-2">
<span className="material-symbols-outlined text-[18px]">play_circle</span>
<span>批量启用</span>
</button>
<button className="px-4 py-2 text-sm font-medium text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-lg transition-colors flex items-center gap-2">
<span className="material-symbols-outlined text-[18px]">pause_circle</span>
<span>批量停用</span>
</button>
<div className="w-px h-4 bg-slate-200 dark:bg-slate-700 mx-1"></div>
<button className="px-4 py-2 text-sm font-medium text-primary hover:bg-primary/5 rounded-lg transition-colors flex items-center gap-2">
<span className="material-symbols-outlined text-[18px]">download</span>
<span>一键导出</span>
</button>
</div>
</div>
{/* Table Card */}
<div className="overflow-x-auto custom-scrollbar">
<table className="w-full text-left border-collapse min-w-[1000px]">
<thead>
<tr className="text-slate-500 text-sm uppercase tracking-wider font-semibold border-b border-slate-100 dark:border-slate-700">
<th className="px-6 py-4 w-12">
<input className="rounded border-slate-300 text-primary focus:ring-primary" type="checkbox" />
</th>
<th className="px-6 py-4">数据源名称</th>
<th className="px-6 py-4">接入方式</th>
<th className="px-6 py-4">实时状态</th>
<th className="px-6 py-4 text-center">同步频率</th>
<th className="px-6 py-4 text-right">数据量</th>
<th className="px-6 py-4 text-center">质量评分</th>
<th className="px-6 py-4">更新时间</th>
<th className="px-6 py-4 text-right">操作</th>
</tr>
</thead>
<tbody className="divide-y divide-slate-50 dark:divide-slate-700">
{/* Table Row 1 */}
<tr className="hover:bg-slate-50/80 dark:hover:bg-slate-700/30 transition-colors group">
<td className="px-6 py-5">
<input className="rounded border-slate-300 text-primary focus:ring-primary" type="checkbox" />
</td>
<td className="px-6 py-5">
<div className="flex flex-col">
<span className="font-bold text-slate-900 dark:text-white group-hover:text-primary transition-colors cursor-pointer">全球宏观经济指标库</span>
<span className="text-xs text-slate-400">ID: SRC-882190</span>
</div>
</td>
<td className="px-6 py-5">
<div className="flex items-center gap-2 text-sm">
<span className="material-symbols-outlined text-[20px] text-indigo-500">api</span>
<span>REST API</span>
</div>
</td>
<td className="px-6 py-5">
<div className="flex items-center gap-2 text-sm">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
</span>
<span className="text-emerald-600 font-medium">同步成功</span>
</div>
</td>
<td className="px-6 py-5 text-center text-sm">每10分钟</td>
<td className="px-6 py-5 text-right font-mono text-sm">1.2 TB</td>
<td className="px-6 py-5 text-center">
<span className="px-2 py-0.5 bg-emerald-50 text-emerald-600 text-xs font-bold rounded">98.2</span>
</td>
<td className="px-6 py-5 text-sm text-slate-500">2023-11-24 14:21:05</td>
<td className="px-6 py-5 text-right">
<div className="flex items-center justify-end gap-3 text-primary text-sm font-medium">
<button className="hover:underline">详情</button>
<button className="hover:underline">配置</button>
<button className="hover:underline text-rose-500">删除</button>
</div>
</td>
</tr>
{/* Table Row 2 */}
<tr className="hover:bg-slate-50/80 dark:hover:bg-slate-700/30 transition-colors group">
<td className="px-6 py-5">
<input className="rounded border-slate-300 text-primary focus:ring-primary" type="checkbox" />
</td>
<td className="px-6 py-5">
<div className="flex flex-col">
<span className="font-bold text-slate-900 dark:text-white group-hover:text-primary transition-colors cursor-pointer">区域能源安全监测数据</span>
<span className="text-xs text-slate-400">ID: SRC-441021</span>
</div>
</td>
<td className="px-6 py-5">
<div className="flex items-center gap-2 text-sm">
<span className="material-symbols-outlined text-[20px] text-amber-500">storage</span>
<span>PostgreSQL</span>
</div>
</td>
<td className="px-6 py-5">
<div className="flex items-center gap-2 text-sm">
<span className="relative flex h-2 w-2">
<span className="animate-pulse absolute inline-flex h-full w-full rounded-full bg-primary/40 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
</span>
<span className="text-primary font-medium">同步中...</span>
</div>
</td>
<td className="px-6 py-5 text-center text-sm">每1小时</td>
<td className="px-6 py-5 text-right font-mono text-sm">450.5 GB</td>
<td className="px-6 py-5 text-center">
<span className="px-2 py-0.5 bg-amber-50 text-amber-600 text-xs font-bold rounded">85.0</span>
</td>
<td className="px-6 py-5 text-sm text-slate-500">2023-11-24 14:15:33</td>
<td className="px-6 py-5 text-right">
<div className="flex items-center justify-end gap-3 text-primary text-sm font-medium">
<button className="hover:underline">详情</button>
<button className="hover:underline">配置</button>
<button className="hover:underline text-rose-500">删除</button>
</div>
</td>
</tr>
{/* Table Row 3 */}
<tr className="hover:bg-slate-50/80 dark:hover:bg-slate-700/30 transition-colors group">
<td className="px-6 py-5">
<input className="rounded border-slate-300 text-primary focus:ring-primary" type="checkbox" />
</td>
<td className="px-6 py-5">
<div className="flex flex-col">
<span className="font-bold text-slate-900 dark:text-white group-hover:text-primary transition-colors cursor-pointer">行业政策研报(PDF)</span>
<span className="text-xs text-slate-400">ID: SRC-301294</span>
</div>
</td>
<td className="px-6 py-5">
<div className="flex items-center gap-2 text-sm">
<span className="material-symbols-outlined text-[20px] text-rose-400">description</span>
<span>Cloud Drive</span>
</div>
</td>
<td className="px-6 py-5">
<div className="flex items-center gap-2 text-sm">
<span className="relative flex h-2 w-2">
<span className="relative inline-flex rounded-full h-2 w-2 bg-rose-500"></span>
</span>
<span className="text-rose-600 font-medium">同步异常</span>
</div>
</td>
<td className="px-6 py-5 text-center text-sm">每日</td>
<td className="px-6 py-5 text-right font-mono text-sm">82.1 GB</td>
<td className="px-6 py-5 text-center">
<span className="px-2 py-0.5 bg-slate-100 text-slate-500 text-xs font-bold rounded">--</span>
</td>
<td className="px-6 py-5 text-sm text-slate-500">2023-11-23 09:00:01</td>
<td className="px-6 py-5 text-right">
<div className="flex items-center justify-end gap-3 text-primary text-sm font-medium">
<button className="hover:underline">详情</button>
<button className="hover:underline">配置</button>
<button className="hover:underline text-rose-500">删除</button>
</div>
</td>
</tr>
{/* Table Row 4 */}
<tr className="hover:bg-slate-50/80 dark:hover:bg-slate-700/30 transition-colors group">
<td className="px-6 py-5">
<input className="rounded border-slate-300 text-primary focus:ring-primary" type="checkbox" />
</td>
<td className="px-6 py-5">
<div className="flex flex-col">
<span className="font-bold text-slate-900 dark:text-white group-hover:text-primary transition-colors cursor-pointer">重点智库合作专家库</span>
<span className="text-xs text-slate-400">ID: SRC-102298</span>
</div>
</td>
<td className="px-6 py-5">
<div className="flex items-center gap-2 text-sm">
<span className="material-symbols-outlined text-[20px] text-cyan-500">cloud</span>
<span>Aliyun OSS</span>
</div>
</td>
<td className="px-6 py-5">
<div className="flex items-center gap-2 text-sm">
<span className="relative flex h-2 w-2">
<span className="relative inline-flex rounded-full h-2 w-2 bg-slate-300"></span>
</span>
<span className="text-slate-500 font-medium">已暂停</span>
</div>
</td>
<td className="px-6 py-5 text-center text-sm">手动触发</td>
<td className="px-6 py-5 text-right font-mono text-sm">4.5 GB</td>
<td className="px-6 py-5 text-center">
<span className="px-2 py-0.5 bg-emerald-50 text-emerald-600 text-xs font-bold rounded">95.1</span>
</td>
<td className="px-6 py-5 text-sm text-slate-500">2023-11-20 18:33:41</td>
<td className="px-6 py-5 text-right">
<div className="flex items-center justify-end gap-3 text-primary text-sm font-medium">
<button className="hover:underline">详情</button>
<button className="hover:underline">配置</button>
<button className="hover:underline text-rose-500">删除</button>
</div>
</td>
</tr>
</tbody>
</table>
</div>
{/* Pagination */}
<div className="px-6 py-4 flex items-center justify-between bg-slate-50/50 dark:bg-slate-900/50 border-t border-slate-100 dark:border-slate-700">
<span className="text-sm text-slate-500">显示 1 到 4 共 128 条记录</span>
<div className="flex items-center gap-2">
<button className="p-2 border border-slate-200 dark:border-slate-700 rounded-lg hover:bg-white dark:hover:bg-slate-800 transition-colors">
<span className="material-symbols-outlined text-[18px]">chevron_left</span>
</button>
<button className="w-8 h-8 rounded-lg bg-primary text-white font-bold text-sm">1</button>
<button className="w-8 h-8 rounded-lg hover:bg-white dark:hover:bg-slate-800 transition-colors text-sm">2</button>
<button className="w-8 h-8 rounded-lg hover:bg-white dark:hover:bg-slate-800 transition-colors text-sm">3</button>
<span className="text-slate-400">...</span>
<button className="w-8 h-8 rounded-lg hover:bg-white dark:hover:bg-slate-800 transition-colors text-sm">32</button>
<button className="p-2 border border-slate-200 dark:border-slate-700 rounded-lg hover:bg-white dark:hover:bg-slate-800 transition-colors">
<span className="material-symbols-outlined text-[18px]">chevron_right</span>
</button>
</div>
</div>
</div>
</div>
    </div>
  )
}
