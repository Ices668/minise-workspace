export default function ResearchDataDashboardPage() {
  return (
    <div className="p-8 space-y-6">
<div className="max-w-[1440px] mx-auto px-6 py-8">
<nav className="flex items-center gap-2 mb-6 text-sm font-medium text-primary/80">
<a className="hover:text-primary transition-colors" href="#">新型高端智库系统</a>
<span className="material-symbols-outlined text-xs">chevron_right</span>
<a className="hover:text-primary transition-colors" href="#">战略咨询智能支持</a>
<span className="material-symbols-outlined text-xs">chevron_right</span>
<a className="hover:text-primary transition-colors" href="#">智能问数</a>
<span className="material-symbols-outlined text-xs">chevron_right</span>
<span className="text-slate-900 dark:text-slate-100">数据看板显示</span>
</nav>
<header className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
<h1 className="text-3xl font-black tracking-tight text-slate-900 dark:text-slate-100">数据看板显示</h1>
<div className="flex flex-wrap gap-3">
<button className="flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary font-bold rounded-xl hover:bg-primary/20 transition-all">
<span className="material-symbols-outlined text-lg">add_circle</span>
<span>添加组件</span>
</button>
<button className="flex items-center gap-2 px-4 py-2 bg-primary text-white font-bold rounded-xl hover:opacity-90 transition-all">
<span className="material-symbols-outlined text-lg">save</span>
<span>保存模板</span>
</button>
<button className="flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary font-bold rounded-xl hover:bg-primary/20 transition-all">
<span className="material-symbols-outlined text-lg">image</span>
<span>导出图片</span>
</button>
<button className="flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary font-bold rounded-xl hover:bg-primary/20 transition-all">
<span className="material-symbols-outlined text-lg">fullscreen</span>
<span>全屏预览</span>
</button>
</div>
</header>
<section className="bg-white dark:bg-slate-800 p-4 rounded-xl shadow-sm mb-8 flex flex-wrap items-center gap-4 border border-slate-100 dark:border-slate-700">
<div className="flex-1 min-w-[300px]">
<div className="relative">
<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-primary">search</span>
<input className="w-full pl-10 pr-4 py-2 bg-background-light dark:bg-slate-900 border-none rounded-full focus:ring-2 focus:ring-primary/50 text-sm" placeholder="搜索组件或数据源..." type="text" />
</div>
</div>
<div className="flex items-center gap-3">
<div className="flex items-center gap-2 px-4 py-2 bg-background-light dark:bg-slate-900 rounded-full cursor-pointer hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">
<span className="text-sm font-medium">看板模板</span>
<span className="material-symbols-outlined text-sm">expand_more</span>
</div>
<div className="flex items-center gap-2 px-4 py-2 bg-background-light dark:bg-slate-900 rounded-full cursor-pointer hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">
<span className="material-symbols-outlined text-sm text-primary">calendar_today</span>
<span className="text-sm font-medium">统计周期</span>
<span className="material-symbols-outlined text-sm">expand_more</span>
</div>
<div className="h-6 w-px bg-slate-200 dark:bg-slate-700 mx-1"></div>
<button className="p-2 text-primary hover:bg-primary/10 rounded-full transition-colors">
<span className="material-symbols-outlined">refresh</span>
</button>
<button className="p-2 text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-full transition-colors">
<span className="material-symbols-outlined text-[20px]">restart_alt</span>
</button>
</div>
</section>
<section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
<div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700">
<p className="text-slate-500 dark:text-slate-400 text-sm mb-2">数据更新频率</p>
<div className="flex items-baseline gap-2">
<span className="text-2xl font-black text-primary">5min</span>
<span className="text-xs text-green-500 font-bold">实时</span>
</div>
</div>
<div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700">
<p className="text-slate-500 dark:text-slate-400 text-sm mb-2">关联指标总数</p>
<div className="flex items-baseline gap-2">
<span className="text-2xl font-black text-slate-900 dark:text-slate-100">1,284</span>
<span className="text-xs text-primary font-bold">+12</span>
</div>
</div>
<div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700">
<p className="text-slate-500 dark:text-slate-400 text-sm mb-2">今日查询人次</p>
<div className="flex items-baseline gap-2">
<span className="text-2xl font-black text-slate-900 dark:text-slate-100">4,392</span>
<span className="text-xs text-green-500 font-bold">↑ 8.2%</span>
</div>
</div>
<div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700">
<p className="text-slate-500 dark:text-slate-400 text-sm mb-2">数据质量评分</p>
<div className="flex items-baseline gap-2">
<span className="text-2xl font-black text-slate-900 dark:text-slate-100">98.5</span>
<span className="text-xs text-primary font-bold">优秀</span>
</div>
</div>
</section>
<main className="grid grid-cols-12 gap-6">
<article className="col-span-12 lg:col-span-8 bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700">
<div className="flex items-center justify-between mb-6">
<h3 className="text-lg font-bold">关键技术增长趋势</h3>
<div className="flex items-center gap-2">
<button className="p-1 hover:bg-slate-100 dark:hover:bg-slate-700 rounded transition-colors"><span className="material-symbols-outlined text-slate-400 text-sm">refresh</span></button>
<button className="p-1 hover:bg-slate-100 dark:hover:bg-slate-700 rounded transition-colors"><span className="material-symbols-outlined text-slate-400 text-sm">open_in_full</span></button>
<button className="p-1 cursor-move"><span className="material-symbols-outlined text-slate-300">drag_indicator</span></button>
</div>
</div>
<div className="h-64 w-full relative overflow-hidden chart-gradient-1 rounded-lg border border-primary/5">
<svg className="w-full h-full" viewBox="0 0 800 200">
<path d="M0,150 Q100,140 200,100 T400,80 T600,120 T800,40" fill="none" stroke="#17b0cf" stroke-width="3"></path>
<path d="M0,160 Q150,150 300,130 T600,90 T800,70" fill="none" opacity="0.5" stroke="#17b0cf" stroke-dasharray="5,5" stroke-width="2"></path>
<circle cx="200" cy="100" fill="#17b0cf" r="4"></circle>
<circle cx="400" cy="80" fill="#17b0cf" r="4"></circle>
<circle cx="800" cy="40" fill="#17b0cf" r="4"></circle>
</svg>
<div className="absolute bottom-4 left-4 flex gap-4 text-xs font-medium text-slate-400">
<span>2023 Q1</span>
<span>2023 Q2</span>
<span>2023 Q3</span>
<span>2023 Q4</span>
<span>2024 Q1</span>
</div>
</div>
</article>
<article className="col-span-12 lg:col-span-4 bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700">
<div className="flex items-center justify-between mb-6">
<h3 className="text-lg font-bold">技术领域占比</h3>
<div className="flex items-center gap-2">
<button className="p-1 cursor-move"><span className="material-symbols-outlined text-slate-300">drag_indicator</span></button>
</div>
</div>
<div className="flex flex-col items-center justify-center">
<div className="relative w-48 h-48 mb-6">
<svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
<circle cx="18" cy="18" fill="none" r="16" stroke="#e7f1f3" stroke-width="4"></circle>
<circle cx="18" cy="18" fill="none" r="16" stroke="#17b0cf" stroke-dasharray="75, 100" stroke-width="4"></circle>
<circle className="opacity-20" cx="18" cy="18" fill="none" r="16" stroke="#0e191b" stroke-dasharray="15, 100" stroke-dashoffset="-75" stroke-width="4"></circle>
</svg>
<div className="absolute inset-0 flex flex-col items-center justify-center">
<span className="text-2xl font-black">75%</span>
<span className="text-[10px] text-slate-400 uppercase tracking-wider">AI/ML</span>
</div>
</div>
<div className="grid grid-cols-2 gap-x-8 gap-y-2 w-full">
<div className="flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-primary"></div>
<span className="text-xs text-slate-600 dark:text-slate-400">人工智能 (75%)</span>
</div>
<div className="flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-primary/40"></div>
<span className="text-xs text-slate-600 dark:text-slate-400">量子计算 (15%)</span>
</div>
<div className="flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-slate-300"></div>
<span className="text-xs text-slate-600 dark:text-slate-400">区块链 (10%)</span>
</div>
</div>
</div>
</article>
<article className="col-span-12 lg:col-span-4 bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700 min-h-[400px]">
<div className="flex items-center justify-between mb-6">
<h3 className="text-lg font-bold">热门搜索词云</h3>
<div className="flex items-center gap-2">
<button className="p-1 cursor-move"><span className="material-symbols-outlined text-slate-300">drag_indicator</span></button>
</div>
</div>
<div className="flex flex-wrap gap-3 justify-center content-center h-64">
<span className="text-3xl font-black text-primary hover:scale-110 transition-transform cursor-pointer">大语言模型</span>
<span className="text-xl font-bold text-primary/70 hover:scale-110 transition-transform cursor-pointer">半导体</span>
<span className="text-2xl font-bold text-slate-700 dark:text-slate-300 hover:scale-110 transition-transform cursor-pointer">低空经济</span>
<span className="text-base font-medium text-slate-400 hover:scale-110 transition-transform cursor-pointer">新质生产力</span>
<span className="text-lg font-bold text-primary hover:scale-110 transition-transform cursor-pointer">算力中心</span>
<span className="text-sm font-medium text-slate-400 hover:scale-110 transition-transform cursor-pointer">脑机接口</span>
<span className="text-2xl font-black text-primary/80 hover:scale-110 transition-transform cursor-pointer">数字孪生</span>
<span className="text-base font-medium text-slate-500 hover:scale-110 transition-transform cursor-pointer">卫星互联网</span>
</div>
</article>
<article className="col-span-12 lg:col-span-8 bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700">
<div className="flex items-center justify-between mb-6">
<h3 className="text-lg font-bold">异常预警明细</h3>
<div className="flex items-center gap-2">
<button className="p-1 hover:bg-slate-100 dark:hover:bg-slate-700 rounded transition-colors"><span className="material-symbols-outlined text-slate-400 text-sm">filter_list</span></button>
<button className="p-1 cursor-move"><span className="material-symbols-outlined text-slate-300">drag_indicator</span></button>
</div>
</div>
<div className="overflow-x-auto">
<table className="w-full text-left text-sm">
<thead>
<tr className="border-b border-slate-100 dark:border-slate-700">
<th className="pb-3 font-bold text-slate-500">指标名称</th>
<th className="pb-3 font-bold text-slate-500">当前值</th>
<th className="pb-3 font-bold text-slate-500">阈值</th>
<th className="pb-3 font-bold text-slate-500">更新时间</th>
<th className="pb-3 font-bold text-slate-500">状态</th>
</tr>
</thead>
<tbody className="divide-y divide-slate-50 dark:divide-slate-700/50">
<tr className="group hover:bg-slate-50 dark:hover:bg-slate-900/50 transition-colors">
<td className="py-4 font-medium">响应延迟 L1</td>
<td className="py-4">1240ms</td>
<td className="py-4">500ms</td>
<td className="py-4 text-slate-400">10:45:22</td>
<td className="py-4">
<span className="px-2 py-1 rounded bg-red-100 text-red-600 text-xs font-bold">严重</span>
</td>
</tr>
<tr className="group hover:bg-slate-50 dark:hover:bg-slate-900/50 transition-colors">
<td className="py-4 font-medium">数据包丢弃率</td>
<td className="py-4">2.4%</td>
<td className="py-4">1.0%</td>
<td className="py-4 text-slate-400">10:42:15</td>
<td className="py-4">
<span className="px-2 py-1 rounded bg-orange-100 text-orange-600 text-xs font-bold">警告</span>
</td>
</tr>
<tr className="group hover:bg-slate-50 dark:hover:bg-slate-900/50 transition-colors">
<td className="py-4 font-medium">并发查询负载</td>
<td className="py-4">88%</td>
<td className="py-4">80%</td>
<td className="py-4 text-slate-400">10:38:09</td>
<td className="py-4">
<span className="px-2 py-1 rounded bg-primary/10 text-primary text-xs font-bold">提示</span>
</td>
</tr>
</tbody>
</table>
</div>
</article>
</main>
<footer className="mt-12 flex justify-center pb-8">
<div className="bg-white dark:bg-slate-800 px-6 py-3 rounded-full shadow-lg border border-slate-100 dark:border-slate-700 flex items-center gap-8">
<button className="flex items-center gap-2 text-primary hover:opacity-80 transition-opacity">
<span className="material-symbols-outlined">undo</span>
<span className="text-xs font-bold">撤销</span>
</button>
<div className="w-px h-4 bg-slate-200 dark:bg-slate-700"></div>
<button className="flex items-center gap-2 text-primary hover:opacity-80 transition-opacity">
<span className="material-symbols-outlined">redo</span>
<span className="text-xs font-bold">重做</span>
</button>
<div className="w-px h-4 bg-slate-200 dark:bg-slate-700"></div>
<div className="flex items-center gap-2">
<span className="text-xs text-slate-400">布局已自动保存</span>
<span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
</div>
</div>
</footer>
</div>
    </div>
  )
}
