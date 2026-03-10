export default function ResearchPaperTaskPage() {
  return (
    <div className="p-8 space-y-6">
<div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">
<div className="layout-container flex h-full grow flex-col">
{/* Content Container */}
<main className="mx-auto flex w-full max-w-[1200px] flex-1 flex-col px-4 py-6 md:px-8">
{/* Breadcrumbs */}
<nav className="flex flex-wrap items-center gap-2 pb-6 text-sm font-medium">
<a className="text-primary hover:opacity-80 transition-opacity" href="#">新型高端智库系统</a>
<span className="text-slate-400 dark:text-slate-500">/</span>
<a className="text-primary hover:opacity-80 transition-opacity" href="#">战略咨询智能支持</a>
<span className="text-slate-400 dark:text-slate-500">/</span>
<a className="text-primary hover:opacity-80 transition-opacity" href="#">技术体系分析</a>
<span className="text-slate-400 dark:text-slate-500">/</span>
<span className="text-slate-600 dark:text-slate-300">论文分析</span>
</nav>
{/* Navigation Tabs */}
<div className="mb-6">
<div className="flex border-b border-primary/20 gap-8">
<a className="group relative flex items-center justify-center pb-4 pt-2 text-primary" href="#cross-analysis">
<span className="material-symbols-outlined mr-2 text-[20px]">grid_view</span>
<p className="text-sm font-bold tracking-wide">二维交叉分析</p>
<div className="absolute bottom-0 left-0 h-[3px] w-full bg-primary rounded-t-full"></div>
</a>
<a className="group relative flex items-center justify-center pb-4 pt-2 text-slate-500 hover:text-primary transition-colors" href="#task-list">
<span className="material-symbols-outlined mr-2 text-[20px]">list_alt</span>
<p className="text-sm font-bold tracking-wide">任务列表</p>
</a>
</div>
</div>
{/* Section 1: 二维交叉分析 (Active View) */}
<section className="flex flex-col gap-6" id="cross-analysis">
<div className="flex flex-col md:flex-row md:items-end justify-between gap-4 bg-white dark:bg-slate-800/50 p-6 rounded-xl border border-primary/10 shadow-sm">
<div className="flex flex-wrap gap-4 flex-1">
<div className="flex flex-col min-w-[200px] flex-1">
<label className="text-sm font-semibold text-slate-700 dark:text-slate-200 mb-2">X轴维度</label>
<div className="relative">
<select className="form-select w-full rounded-lg border-primary/20 bg-background-light dark:bg-slate-900/50 text-slate-900 dark:text-slate-100 focus:border-primary focus:ring-primary h-11 px-4">
<option>年份 (Year)</option>
<option>国家 (Country)</option>
<option>研究领域 (Field)</option>
</select>
</div>
</div>
<div className="flex flex-col min-w-[200px] flex-1">
<label className="text-sm font-semibold text-slate-700 dark:text-slate-200 mb-2">Y轴维度</label>
<div className="relative">
<select className="form-select w-full rounded-lg border-primary/20 bg-background-light dark:bg-slate-900/50 text-slate-900 dark:text-slate-100 focus:border-primary focus:ring-primary h-11 px-4">
<option>研究领域 (Research Field)</option>
<option>年份 (Year)</option>
<option>机构 (Organization)</option>
</select>
</div>
</div>
</div>
<button className="flex items-center justify-center gap-2 h-11 px-6 bg-primary text-white font-bold rounded-lg hover:brightness-110 transition-all shadow-md">
<span className="material-symbols-outlined text-[20px]">sync</span>
                        生成分析
                    </button>
</div>
{/* Heatmap Table */}
<div className="bg-white dark:bg-slate-800/50 rounded-xl border border-primary/10 shadow-sm overflow-hidden">
<div className="overflow-x-auto">
<table className="w-full text-left border-collapse">
<thead>
<tr className="bg-primary/5 border-b border-primary/10">
<th className="p-4 text-sm font-bold text-slate-800 dark:text-slate-100 w-48">研究领域 / 年份</th>
<th className="p-4 text-xs font-bold text-slate-500 uppercase">2020</th>
<th className="p-4 text-xs font-bold text-slate-500 uppercase">2021</th>
<th className="p-4 text-xs font-bold text-slate-500 uppercase">2022</th>
<th className="p-4 text-xs font-bold text-slate-500 uppercase text-primary">2023 (当前)</th>
<th className="p-4 text-xs font-bold text-slate-500 uppercase">2024 (预测)</th>
</tr>
</thead>
<tbody className="divide-y divide-primary/5">
<tr>
<td className="p-4 font-medium text-slate-700 dark:text-slate-200">人工智能 (AI)</td>
<td className="p-2"><div className="rounded-lg h-12 flex items-center justify-center bg-primary/20 text-primary font-bold cursor-pointer hover:ring-2 ring-primary/40 transition-all">142</div></td>
<td className="p-2"><div className="rounded-lg h-12 flex items-center justify-center bg-primary/40 text-primary-dark font-bold cursor-pointer hover:ring-2 ring-primary/40 transition-all">284</div></td>
<td className="p-2"><div className="rounded-lg h-12 flex items-center justify-center bg-primary/60 text-white font-bold cursor-pointer hover:ring-2 ring-primary/40 transition-all">412</div></td>
<td className="p-2"><div className="rounded-lg h-12 flex items-center justify-center bg-primary/80 text-white font-bold cursor-pointer hover:ring-2 ring-primary/40 transition-all">589</div></td>
<td className="p-2"><div className="rounded-lg h-12 flex items-center justify-center bg-primary text-white font-bold cursor-pointer hover:ring-2 ring-primary/40 transition-all border-2 border-white/20">720</div></td>
</tr>
<tr>
<td className="p-4 font-medium text-slate-700 dark:text-slate-200">量子计算 (Quantum)</td>
<td className="p-2"><div className="rounded-lg h-12 flex items-center justify-center bg-primary/5 text-slate-400 font-bold cursor-pointer hover:ring-2 ring-primary/40 transition-all">34</div></td>
<td className="p-2"><div className="rounded-lg h-12 flex items-center justify-center bg-primary/10 text-primary/60 font-bold cursor-pointer hover:ring-2 ring-primary/40 transition-all">88</div></td>
<td className="p-2"><div className="rounded-lg h-12 flex items-center justify-center bg-primary/30 text-primary font-bold cursor-pointer hover:ring-2 ring-primary/40 transition-all">156</div></td>
<td className="p-2"><div className="rounded-lg h-12 flex items-center justify-center bg-primary/40 text-primary-dark font-bold cursor-pointer hover:ring-2 ring-primary/40 transition-all">210</div></td>
<td className="p-2"><div className="rounded-lg h-12 flex items-center justify-center bg-primary/50 text-white font-bold cursor-pointer hover:ring-2 ring-primary/40 transition-all">345</div></td>
</tr>
<tr>
<td className="p-4 font-medium text-slate-700 dark:text-slate-200">生物工程 (Bio)</td>
<td className="p-2"><div className="rounded-lg h-12 flex items-center justify-center bg-primary/30 text-primary font-bold cursor-pointer hover:ring-2 ring-primary/40 transition-all">198</div></td>
<td className="p-2"><div className="rounded-lg h-12 flex items-center justify-center bg-primary/20 text-primary font-bold cursor-pointer hover:ring-2 ring-primary/40 transition-all">142</div></td>
<td className="p-2"><div className="rounded-lg h-12 flex items-center justify-center bg-primary/40 text-primary-dark font-bold cursor-pointer hover:ring-2 ring-primary/40 transition-all">267</div></td>
<td className="p-2"><div className="rounded-lg h-12 flex items-center justify-center bg-primary/50 text-white font-bold cursor-pointer hover:ring-2 ring-primary/40 transition-all">312</div></td>
<td className="p-2"><div className="rounded-lg h-12 flex items-center justify-center bg-primary/60 text-white font-bold cursor-pointer hover:ring-2 ring-primary/40 transition-all">456</div></td>
</tr>
</tbody>
</table>
</div>
{/* Cell Expansion Detail Area (Simulated) */}
<div className="bg-primary/5 p-4 border-t border-primary/10">
<div className="flex items-center justify-between mb-3">
<h4 className="text-sm font-bold text-slate-800 dark:text-slate-100 flex items-center">
<span className="material-symbols-outlined text-[18px] mr-2 text-primary">list</span>
                                详细论文列表 (人工智能 / 2023)
                            </h4>
<button className="text-xs text-primary font-bold hover:underline">查看全部 589 篇</button>
</div>
<div className="space-y-2">
<div className="bg-white dark:bg-slate-900 p-3 rounded shadow-sm flex justify-between items-center border-l-4 border-primary">
<div className="text-sm text-slate-700 dark:text-slate-300 truncate pr-4">Large Language Models in Strategic Intelligence: A Systematic Review</div>
<span className="text-xs text-slate-400 shrink-0">IEEE Trans. AI</span>
</div>
<div className="bg-white dark:bg-slate-900 p-3 rounded shadow-sm flex justify-between items-center border-l-4 border-primary/40">
<div className="text-sm text-slate-700 dark:text-slate-300 truncate pr-4">Neural Architectures for Complex Decision Support Systems</div>
<span className="text-xs text-slate-400 shrink-0">Nature Intelligence</span>
</div>
</div>
</div>
</div>
</section>
{/* Section 2: 任务列表 */}
<section className="mt-12 flex flex-col gap-6" id="task-list">
<div className="flex items-center justify-between">
<h3 className="text-xl font-bold text-slate-800 dark:text-slate-100">分析任务管理</h3>
<button className="bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-lg text-sm font-bold flex items-center gap-2 transition-all">
<span className="material-symbols-outlined text-[18px]">add</span>
                        新建任务
                    </button>
</div>
{/* Filters */}
<div className="flex flex-wrap items-center gap-4">
<div className="relative flex-1 max-w-md">
<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">search</span>
<input className="w-full pl-10 pr-4 h-10 rounded-full border-primary/20 bg-white dark:bg-slate-800 focus:border-primary focus:ring-primary text-sm" placeholder="搜索任务名称或关键词..." type="text" />
</div>
<div className="flex gap-2">
<button className="px-4 h-10 rounded-full bg-primary text-white text-sm font-medium">全部</button>
<button className="px-4 h-10 rounded-full bg-white dark:bg-slate-800 border border-primary/20 text-slate-600 dark:text-slate-300 text-sm font-medium hover:bg-primary/5">运行中</button>
<button className="px-4 h-10 rounded-full bg-white dark:bg-slate-800 border border-primary/20 text-slate-600 dark:text-slate-300 text-sm font-medium hover:bg-primary/5">已完成</button>
</div>
</div>
{/* Task Table Card */}
<div className="bg-white dark:bg-slate-800 rounded-xl border border-primary/10 shadow-lg overflow-hidden">
<div className="overflow-x-auto">
<table className="w-full text-left">
<thead>
<tr className="border-b border-primary/10 bg-primary/5">
<th className="p-4 text-sm font-bold text-slate-600 dark:text-slate-300">任务名称</th>
<th className="p-4 text-sm font-bold text-slate-600 dark:text-slate-300">分析类型</th>
<th className="p-4 text-sm font-bold text-slate-600 dark:text-slate-300">创建时间</th>
<th className="p-4 text-sm font-bold text-slate-600 dark:text-slate-300">任务进度</th>
<th className="p-4 text-sm font-bold text-slate-600 dark:text-slate-300">状态</th>
<th className="p-4 text-sm font-bold text-slate-600 dark:text-slate-300 text-right">操作</th>
</tr>
</thead>
<tbody className="divide-y divide-primary/5">
{/* Task 1 */}
<tr className="hover:bg-primary/5 transition-colors">
<td className="p-4">
<div className="font-bold text-slate-800 dark:text-slate-100">全球半导体技术演进趋势分析</div>
<div className="text-xs text-slate-400 mt-1">数据源: Web of Science (2018-2023)</div>
</td>
<td className="p-4"><span className="text-sm">趋势预测分析</span></td>
<td className="p-4 text-sm text-slate-500">2023-11-20 14:30</td>
<td className="p-4 w-48">
<div className="flex items-center gap-2">
<div className="flex-1 h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
<div className="h-full bg-primary" style={{width: '75%'}}></div>
</div>
<span className="text-xs font-bold text-primary">75%</span>
</div>
</td>
<td className="p-4">
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-primary/20 text-primary">
<span className="w-1.5 h-1.5 rounded-full bg-primary mr-1.5 animate-pulse"></span>
                                            运行中
                                        </span>
</td>
<td className="p-4">
<div className="flex items-center justify-end gap-3 text-primary">
<button className="hover:opacity-70" title="重新运行"><span className="material-symbols-outlined text-[20px]">refresh</span></button>
<button className="hover:opacity-70" title="合并"><span className="material-symbols-outlined text-[20px]">merge</span></button>
<button className="hover:opacity-70" title="下载"><span className="material-symbols-outlined text-[20px]">download</span></button>
<button className="hover:opacity-70" title="重新解析"><span className="material-symbols-outlined text-[20px]">settings_backup_restore</span></button>
</div>
</td>
</tr>
{/* Task 2 */}
<tr className="hover:bg-primary/5 transition-colors">
<td className="p-4">
<div className="font-bold text-slate-800 dark:text-slate-100">量子加密通信领域专家画像</div>
<div className="text-xs text-slate-400 mt-1">数据源: IEEE Xplore, CNKI</div>
</td>
<td className="p-4"><span className="text-sm">人物关系挖掘</span></td>
<td className="p-4 text-sm text-slate-500">2023-11-18 09:12</td>
<td className="p-4">
<div className="flex items-center gap-2">
<div className="flex-1 h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
<div className="h-full bg-primary" style={{width: '100%'}}></div>
</div>
<span className="text-xs font-bold text-primary">100%</span>
</div>
</td>
<td className="p-4">
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-green-500/10 text-green-600">
                                            已完成
                                        </span>
</td>
<td className="p-4">
<div className="flex items-center justify-end gap-3 text-primary">
<button className="hover:opacity-70" title="重新运行"><span className="material-symbols-outlined text-[20px]">refresh</span></button>
<button className="hover:opacity-70" title="合并"><span className="material-symbols-outlined text-[20px]">merge</span></button>
<button className="hover:opacity-70" title="下载"><span className="material-symbols-outlined text-[20px]">download</span></button>
<button className="hover:opacity-70" title="重新解析"><span className="material-symbols-outlined text-[20px]">settings_backup_restore</span></button>
</div>
</td>
</tr>
{/* Task 3 */}
<tr className="hover:bg-primary/5 transition-colors">
<td className="p-4">
<div className="font-bold text-slate-800 dark:text-slate-100">新型电力系统核心技术体系交叉分析</div>
<div className="text-xs text-slate-400 mt-1">数据源: 多源融合数据</div>
</td>
<td className="p-4"><span className="text-sm">技术交叉分析</span></td>
<td className="p-4 text-sm text-slate-500">2023-11-15 16:45</td>
<td className="p-4">
<div className="flex items-center gap-2">
<div className="flex-1 h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
<div className="h-full bg-primary" style={{width: '100%'}}></div>
</div>
<span className="text-xs font-bold text-primary">100%</span>
</div>
</td>
<td className="p-4">
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-green-500/10 text-green-600">
                                            已完成
                                        </span>
</td>
<td className="p-4">
<div className="flex items-center justify-end gap-3 text-primary">
<button className="hover:opacity-70" title="重新运行"><span className="material-symbols-outlined text-[20px]">refresh</span></button>
<button className="hover:opacity-70" title="合并"><span className="material-symbols-outlined text-[20px]">merge</span></button>
<button className="hover:opacity-70" title="下载"><span className="material-symbols-outlined text-[20px]">download</span></button>
<button className="hover:opacity-70" title="重新解析"><span className="material-symbols-outlined text-[20px]">settings_backup_restore</span></button>
</div>
</td>
</tr>
</tbody>
</table>
</div>
<div className="bg-primary/5 px-6 py-4 border-t border-primary/10 flex items-center justify-between">
<span className="text-xs text-slate-500">共 24 个任务</span>
<div className="flex items-center gap-2">
<button className="w-8 h-8 flex items-center justify-center rounded border border-primary/20 bg-white dark:bg-slate-800 text-slate-400">
<span className="material-symbols-outlined text-[18px]">chevron_left</span>
</button>
<button className="w-8 h-8 flex items-center justify-center rounded bg-primary text-white text-xs font-bold">1</button>
<button className="w-8 h-8 flex items-center justify-center rounded border border-primary/20 bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-xs font-bold">2</button>
<button className="w-8 h-8 flex items-center justify-center rounded border border-primary/20 bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-xs font-bold">3</button>
<button className="w-8 h-8 flex items-center justify-center rounded border border-primary/20 bg-white dark:bg-slate-800 text-slate-400">
<span className="material-symbols-outlined text-[18px]">chevron_right</span>
</button>
</div>
</div>
</div>
</section>
</main>
</div>
</div>
    </div>
  )
}
