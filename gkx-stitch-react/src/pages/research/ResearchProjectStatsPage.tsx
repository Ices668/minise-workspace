export default function ResearchProjectStatsPage() {
  return (
    <div className="p-8 space-y-6">
<div className="layout-container flex h-full grow flex-col">
<div className="max-w-[1280px] mx-auto w-full px-6 py-8">
{/* Breadcrumbs */}
<nav className="flex items-center gap-2 mb-6 text-sm font-medium">
<a className="text-primary hover:opacity-80" href="#">新型高端智库系统</a>
<span className="text-slate-400">/</span>
<a className="text-primary hover:opacity-80" href="#">战略咨询智能支持</a>
<span className="text-slate-400">/</span>
<a className="text-primary hover:opacity-80" href="#">技术体系分析</a>
<span className="text-slate-400">/</span>
<span className="text-slate-600 dark:text-slate-400">科研项目分析</span>
</nav>
{/* Page Header */}
<div className="flex flex-wrap items-center justify-between gap-4 mb-8">
<h1 className="text-3xl font-black tracking-tight text-slate-900 dark:text-white">科研项目分析</h1>
<div className="flex items-center gap-3">
<button className="flex items-center gap-2 px-5 py-2.5 bg-primary text-white rounded-xl font-bold hover:opacity-90 transition-all shadow-sm">
<span className="material-symbols-outlined text-[20px]">add</span>
<span>新增分析任务</span>
</button>
<button className="flex items-center gap-2 px-5 py-2.5 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 rounded-xl font-bold hover:bg-slate-50 transition-all shadow-sm">
<span className="material-symbols-outlined text-[20px]">download</span>
<span>导出数据</span>
</button>
<button className="flex items-center justify-center w-11 h-11 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 rounded-xl hover:bg-slate-50 transition-all shadow-sm">
<span className="material-symbols-outlined">refresh</span>
</button>
</div>
</div>
{/* Tab Navigation */}
<div className="border-b border-slate-200 dark:border-slate-700 mb-8">
<div className="flex gap-8">
<a className="pb-4 text-slate-500 font-bold border-b-2 border-transparent hover:text-primary transition-colors" href="#">项目检索清单</a>
<a className="pb-4 text-primary font-bold border-b-2 border-primary relative" href="#">
                        统计分析看板
                    </a>
<a className="pb-4 text-slate-500 font-bold border-b-2 border-transparent hover:text-primary transition-colors" href="#">分析任务管理</a>
</div>
</div>
{/* Filter Section */}
<div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm mb-8 flex flex-wrap items-end gap-4">
<div className="flex-1 min-w-[240px]">
<label className="block text-xs font-bold text-slate-500 mb-2 uppercase tracking-wider">关键词检索</label>
<div className="relative">
<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">search</span>
<input className="w-full pl-10 pr-4 py-2.5 bg-slate-50 dark:bg-slate-900 border-none rounded-lg focus:ring-2 focus:ring-primary/20 text-sm" placeholder="搜索项目、机构或负责人..." type="text" />
</div>
</div>
<div className="w-48">
<label className="block text-xs font-bold text-slate-500 mb-2 uppercase tracking-wider">技术领域</label>
<select className="w-full py-2.5 bg-slate-50 dark:bg-slate-900 border-none rounded-lg focus:ring-2 focus:ring-primary/20 text-sm">
<option>全部领域</option>
<option>人工智能</option>
<option>量子计算</option>
<option>生物制药</option>
</select>
</div>
<div className="w-48">
<label className="block text-xs font-bold text-slate-500 mb-2 uppercase tracking-wider">资助来源</label>
<select className="w-full py-2.5 bg-slate-50 dark:bg-slate-900 border-none rounded-lg focus:ring-2 focus:ring-primary/20 text-sm">
<option>全部来源</option>
<option>国家自然科学基金</option>
<option>企业委托</option>
<option>国际合作</option>
</select>
</div>
<div className="flex gap-2">
<button className="px-6 py-2.5 bg-primary text-white rounded-lg font-bold hover:opacity-90 transition-all">查询</button>
<button className="px-6 py-2.5 bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 rounded-lg font-bold hover:bg-slate-200 transition-all">重置</button>
</div>
</div>
{/* Row 1: Stat Cards */}
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
<div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700">
<div className="flex items-center justify-between mb-4">
<div className="w-12 h-12 bg-primary/10 text-primary rounded-lg flex items-center justify-center">
<span className="material-symbols-outlined">folder_open</span>
</div>
<span className="text-xs font-bold text-emerald-500 bg-emerald-50 px-2 py-1 rounded">+12%</span>
</div>
<p className="text-slate-500 text-sm font-medium">项目总数</p>
<h3 className="text-2xl font-black mt-1">1,248</h3>
</div>
<div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700">
<div className="flex items-center justify-between mb-4">
<div className="w-12 h-12 bg-primary/10 text-primary rounded-lg flex items-center justify-center">
<span className="material-symbols-outlined">payments</span>
</div>
<span className="text-xs font-bold text-emerald-500 bg-emerald-50 px-2 py-1 rounded">+5.4%</span>
</div>
<p className="text-slate-500 text-sm font-medium">资助总经费</p>
<h3 className="text-2xl font-black mt-1">1.28 <span className="text-sm font-bold text-slate-400">亿</span></h3>
</div>
<div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700">
<div className="flex items-center justify-between mb-4">
<div className="w-12 h-12 bg-primary/10 text-primary rounded-lg flex items-center justify-center">
<span className="material-symbols-outlined">pending_actions</span>
</div>
<span className="text-xs font-bold text-slate-400 bg-slate-50 px-2 py-1 rounded">稳定</span>
</div>
<p className="text-slate-500 text-sm font-medium">进行中项目</p>
<h3 className="text-2xl font-black mt-1">452</h3>
</div>
<div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700">
<div className="flex items-center justify-between mb-4">
<div className="w-12 h-12 bg-primary/10 text-primary rounded-lg flex items-center justify-center">
<span className="material-symbols-outlined">account_balance</span>
</div>
<span className="text-xs font-bold text-emerald-500 bg-emerald-50 px-2 py-1 rounded">+3</span>
</div>
<p className="text-slate-500 text-sm font-medium">参与研究机构</p>
<h3 className="text-2xl font-black mt-1">86</h3>
</div>
</div>
{/* Row 2: Charts */}
<div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
{/* Donut Chart Card */}
<div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700">
<div className="flex items-center justify-between mb-6">
<h4 className="font-black text-slate-800 dark:text-white">研究领域分布</h4>
<button className="text-slate-400 hover:text-primary"><span className="material-symbols-outlined">more_horiz</span></button>
</div>
<div className="flex items-center h-64">
<div className="relative w-48 h-48 flex-shrink-0">
{/* SVG Donut Chart Placeholder */}
<svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
<circle cx="18" cy="18" fill="transparent" r="15.9" stroke="#e2e8f0" stroke-width="3.5"></circle>
<circle cx="18" cy="18" fill="transparent" r="15.9" stroke="#0ba6da" stroke-dasharray="40 100" stroke-linecap="round" stroke-width="3.5"></circle>
<circle cx="18" cy="18" fill="transparent" r="15.9" stroke="#38bdf8" stroke-dasharray="25 100" stroke-dashoffset="-40" stroke-linecap="round" stroke-width="3.5"></circle>
<circle cx="18" cy="18" fill="transparent" r="15.9" stroke="#0ea5e9" stroke-dasharray="20 100" stroke-dashoffset="-65" stroke-linecap="round" stroke-width="3.5"></circle>
</svg>
<div className="absolute inset-0 flex flex-col items-center justify-center">
<span className="text-2xl font-black">100%</span>
<span className="text-[10px] text-slate-400 font-bold uppercase">Total Share</span>
</div>
</div>
<div className="ml-8 space-y-3 flex-1">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-3 h-3 rounded-full bg-primary"></div>
<span className="text-sm font-medium text-slate-600 dark:text-slate-300">人工智能</span>
</div>
<span className="text-sm font-bold">40%</span>
</div>
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-3 h-3 rounded-full bg-sky-400"></div>
<span className="text-sm font-medium text-slate-600 dark:text-slate-300">生物工程</span>
</div>
<span className="text-sm font-bold">25%</span>
</div>
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-3 h-3 rounded-full bg-sky-600"></div>
<span className="text-sm font-medium text-slate-600 dark:text-slate-300">材料科学</span>
</div>
<span className="text-sm font-bold">20%</span>
</div>
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-3 h-3 rounded-full bg-slate-300"></div>
<span className="text-sm font-medium text-slate-600 dark:text-slate-300">其他</span>
</div>
<span className="text-sm font-bold">15%</span>
</div>
</div>
</div>
</div>
{/* World Map/Dist Card */}
<div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700">
<div className="flex items-center justify-between mb-6">
<h4 className="font-black text-slate-800 dark:text-white">国家/地区分布</h4>
<div className="flex gap-2">
<button className="text-xs font-bold px-3 py-1 bg-primary/10 text-primary rounded-full">地图</button>
<button className="text-xs font-bold px-3 py-1 text-slate-400 hover:text-slate-600">列表</button>
</div>
</div>
<div className="h-64 rounded-lg overflow-hidden relative bg-slate-50 dark:bg-slate-900 flex items-center justify-center">
<img className="w-full h-full object-cover opacity-20 grayscale" data-alt="Abstract world map distribution visualization" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDe2GJpUHuGTOW_13yRaDgv4xDdPzmBPxQpI9MScBLtr0d8ypdnaaAXxk6o1tuEntgrs9OPtUIAxs9rcepHTwhxBkWX__Ja7ptuwSeoVfPU21bJvXpeRY2Na9xmCB3gVh2h1aDwFhy0zw4Ccp3s5gu8w_fkKk6jkK-n_bGsuo9_XgJwcsY9t0RVM0-UxIhVjHjcIM-NUb9QbnDy-4dSimQY9UUJ8iW0UbF2TAWCbtdeuXuW_9wkPTf9YKxqpq-h6i3DUMGlZ1iRhD1z"/>
<div className="absolute inset-0 p-4">
<div className="space-y-4">
<div>
<div className="flex justify-between text-xs font-bold mb-1"><span>中国</span><span>45%</span></div>
<div className="w-full bg-slate-200 dark:bg-slate-700 h-2 rounded-full overflow-hidden">
<div className="bg-primary h-full w-[45%]"></div>
</div>
</div>
<div>
<div className="flex justify-between text-xs font-bold mb-1"><span>北美</span><span>30%</span></div>
<div className="w-full bg-slate-200 dark:bg-slate-700 h-2 rounded-full overflow-hidden">
<div className="bg-primary h-full w-[30%] opacity-80"></div>
</div>
</div>
<div>
<div className="flex justify-between text-xs font-bold mb-1"><span>欧洲</span><span>15%</span></div>
<div className="w-full bg-slate-200 dark:bg-slate-700 h-2 rounded-full overflow-hidden">
<div className="bg-primary h-full w-[15%] opacity-60"></div>
</div>
</div>
<div>
<div className="flex justify-between text-xs font-bold mb-1"><span>其他</span><span>10%</span></div>
<div className="w-full bg-slate-200 dark:bg-slate-700 h-2 rounded-full overflow-hidden">
<div className="bg-primary h-full w-[10%] opacity-40"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
{/* Row 3: Detail Table */}
<div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700 overflow-hidden">
<div className="p-6 border-b border-slate-100 dark:border-slate-700 flex justify-between items-center">
<h4 className="font-black text-slate-800 dark:text-white">重点项目明细</h4>
<button className="text-primary text-sm font-bold hover:underline">查看全部</button>
</div>
<div className="overflow-x-auto">
<table className="w-full text-left">
<thead>
<tr className="bg-slate-50 dark:bg-slate-900/50">
<th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">项目名称</th>
<th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">所属领域</th>
<th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">负责人</th>
<th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">经费 (万)</th>
<th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">状态</th>
<th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">操作</th>
</tr>
</thead>
<tbody className="divide-y divide-slate-100 dark:divide-slate-700">
<tr className="hover:bg-slate-50/50 dark:hover:bg-slate-700/30 transition-colors">
<td className="px-6 py-4 font-bold text-slate-800 dark:text-slate-200">生成式AI在药物发现中的应用</td>
<td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-400">人工智能 / 生物医药</td>
<td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-400">张文宏 教授</td>
<td className="px-6 py-4 text-sm font-bold text-slate-800 dark:text-slate-200">1,250</td>
<td className="px-6 py-4">
<span className="px-2.5 py-1 text-[10px] font-black bg-emerald-100 text-emerald-700 rounded-full">进行中</span>
</td>
<td className="px-6 py-4 text-sm">
<div className="flex gap-4">
<a className="text-primary font-bold hover:opacity-80" href="#">查看详情</a>
<a className="text-primary font-bold hover:opacity-80" href="#">关联分析</a>
</div>
</td>
</tr>
<tr className="hover:bg-slate-50/50 dark:hover:bg-slate-700/30 transition-colors">
<td className="px-6 py-4 font-bold text-slate-800 dark:text-slate-200">2nm制程关键设备研发专项</td>
<td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-400">半导体制造</td>
<td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-400">林本坚 院士</td>
<td className="px-6 py-4 text-sm font-bold text-slate-800 dark:text-slate-200">4,800</td>
<td className="px-6 py-4">
<span className="px-2.5 py-1 text-[10px] font-black bg-sky-100 text-sky-700 rounded-full">启动中</span>
</td>
<td className="px-6 py-4 text-sm">
<div className="flex gap-4">
<a className="text-primary font-bold hover:opacity-80" href="#">查看详情</a>
<a className="text-primary font-bold hover:opacity-80" href="#">关联分析</a>
</div>
</td>
</tr>
<tr className="hover:bg-slate-50/50 dark:hover:bg-slate-700/30 transition-colors">
<td className="px-6 py-4 font-bold text-slate-800 dark:text-slate-200">深海自主无人探测系统研究</td>
<td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-400">海洋装备 / 自动化</td>
<td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-400">王海峰 研究员</td>
<td className="px-6 py-4 text-sm font-bold text-slate-800 dark:text-slate-200">850</td>
<td className="px-6 py-4">
<span className="px-2.5 py-1 text-[10px] font-black bg-amber-100 text-amber-700 rounded-full">结项评审</span>
</td>
<td className="px-6 py-4 text-sm">
<div className="flex gap-4">
<a className="text-primary font-bold hover:opacity-80" href="#">查看详情</a>
<a className="text-primary font-bold hover:opacity-80" href="#">关联分析</a>
</div>
</td>
</tr>
</tbody>
</table>
</div>
</div>
</div>
</div>
    </div>
  )
}
