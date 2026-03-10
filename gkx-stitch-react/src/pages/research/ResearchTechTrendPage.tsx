export default function ResearchTechTrendPage() {
  return (
    <div className="p-8 space-y-6">
<div className="min-h-screen w-full flex flex-col items-center">
<div className="w-full max-w-[1280px] px-6 py-8 flex flex-col gap-6">
{/* Breadcrumbs & Header Section */}
<div className="flex flex-col gap-4">
<nav className="flex items-center gap-2 text-sm font-medium text-primary/80">
<a className="hover:text-primary" href="#">新型高端智库系统</a>
<span className="material-symbols-outlined text-sm">chevron_right</span>
<a className="hover:text-primary" href="#">战略咨询智能支持</a>
<span className="material-symbols-outlined text-sm">chevron_right</span>
<a className="hover:text-primary" href="#">技术趋势分析</a>
<span className="material-symbols-outlined text-sm">chevron_right</span>
<span className="text-slate-900 dark:text-slate-100">技术趋势分析</span>
</nav>
<div className="flex flex-wrap items-center justify-between gap-4">
<h1 className="text-3xl font-black tracking-tight text-slate-900 dark:text-slate-100">技术趋势分析</h1>
<div className="flex items-center gap-3">
<button className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-sm font-bold text-slate-700 dark:text-slate-200 hover:bg-slate-50 transition-colors">
<span className="material-symbols-outlined text-[20px]">refresh</span>
              刷新
            </button>
<button className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-sm font-bold text-slate-700 dark:text-slate-200 hover:bg-slate-50 transition-colors">
<span className="material-symbols-outlined text-[20px]">file_download</span>
              导出报告
            </button>
<button className="flex items-center gap-2 px-5 py-2 bg-primary text-white rounded-lg text-sm font-bold hover:bg-primary/90 transition-colors shadow-sm shadow-primary/20">
<span className="material-symbols-outlined text-[20px]">analytics</span>
              生成分析
            </button>
</div>
</div>
</div>
{/* Filter Section */}
<div className="bg-white dark:bg-slate-900 p-6 rounded-xl shadow-sm border border-slate-100 dark:border-slate-800">
<div className="flex flex-wrap items-end gap-6">
<div className="flex-1 min-w-[280px]">
<label className="block text-xs font-bold text-slate-500 mb-2 uppercase tracking-wider">技术搜索</label>
<div className="relative group">
<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary transition-colors">search</span>
<input className="w-full pl-10 pr-4 py-2.5 bg-slate-50 dark:bg-slate-800 border-none rounded-full text-sm focus:ring-2 focus:ring-primary/20 placeholder:text-slate-400" placeholder="输入技术关键词搜索..." type="text" />
</div>
</div>
<div className="w-48">
<label className="block text-xs font-bold text-slate-500 mb-2 uppercase tracking-wider">技术领域</label>
<div className="relative">
<select className="w-full pl-4 pr-10 py-2.5 bg-slate-50 dark:bg-slate-800 border-none rounded-lg text-sm focus:ring-2 focus:ring-primary/20 appearance-none">
<option>全部领域</option>
<option>人工智能</option>
<option>量子计算</option>
<option>生物医药</option>
<option>新能源</option>
</select>
<span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none">expand_more</span>
</div>
</div>
<div className="w-64">
<label className="block text-xs font-bold text-slate-500 mb-2 uppercase tracking-wider">趋势周期</label>
<div className="flex items-center gap-2 px-4 py-2.5 bg-slate-50 dark:bg-slate-800 rounded-lg">
<span className="material-symbols-outlined text-slate-400 text-[20px]">calendar_today</span>
<span className="text-sm text-slate-600 dark:text-slate-300">2023-01-01 至 2024-12-31</span>
</div>
</div>
<div className="flex gap-2">
<button className="px-6 py-2.5 bg-primary text-white rounded-lg text-sm font-bold hover:bg-primary/90 transition-colors">查询</button>
<button className="px-6 py-2.5 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 rounded-lg text-sm font-bold hover:bg-slate-200 transition-colors">重置</button>
</div>
</div>
</div>
{/* Stats Row */}
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-100 dark:border-slate-800 flex items-center gap-5">
<div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center text-primary">
<span className="material-symbols-outlined text-[32px]">monitoring</span>
</div>
<div>
<p className="text-sm font-medium text-slate-500">监测技术总数</p>
<p className="text-2xl font-black text-slate-900 dark:text-slate-100">2,845 <span className="text-xs font-bold text-emerald-500 ml-1">+12%</span></p>
</div>
</div>
<div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-100 dark:border-slate-800 flex items-center gap-5">
<div className="w-14 h-14 rounded-full bg-orange-100 flex items-center justify-center text-orange-500">
<span className="material-symbols-outlined text-[32px]">trending_up</span>
</div>
<div>
<p className="text-sm font-medium text-slate-500">平均增长率</p>
<p className="text-2xl font-black text-slate-900 dark:text-slate-100">18.4% <span className="text-xs font-bold text-emerald-500 ml-1">+2.4%</span></p>
</div>
</div>
<div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-100 dark:border-slate-800 flex items-center gap-5">
<div className="w-14 h-14 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600">
<span className="material-symbols-outlined text-[32px]">hub</span>
</div>
<div>
<p className="text-sm font-medium text-slate-500">热门领域分布</p>
<p className="text-2xl font-black text-slate-900 dark:text-slate-100">AI / 量子 / 储能</p>
</div>
</div>
</div>
{/* Main Content Area */}
<div className="flex flex-col gap-4">
{/* Tabs */}
<div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800">
<div className="flex gap-8">
<button className="px-4 py-3 border-b-2 border-primary text-primary text-sm font-bold">趋势趋势列表</button>
<button className="px-4 py-3 border-b-2 border-transparent text-slate-500 text-sm font-medium hover:text-slate-700 transition-colors">增长分析看板</button>
</div>
<div className="flex items-center gap-4 pb-2">
<div className="flex bg-slate-100 dark:bg-slate-800 rounded-lg p-1">
<button className="p-1.5 bg-white dark:bg-slate-700 rounded-md shadow-sm text-primary">
<span className="material-symbols-outlined text-[20px]">list</span>
</button>
<button className="p-1.5 text-slate-400 hover:text-slate-600">
<span className="material-symbols-outlined text-[20px]">grid_view</span>
</button>
</div>
<div className="h-6 w-px bg-slate-200 dark:bg-slate-700"></div>
<button className="flex items-center gap-1.5 text-xs font-bold text-slate-600 dark:text-slate-400 hover:text-primary transition-colors">
<span className="material-symbols-outlined text-[18px]">upload_file</span>
              批量导入
            </button>
<button className="flex items-center gap-1.5 text-xs font-bold text-slate-600 dark:text-slate-400 hover:text-primary transition-colors">
<span className="material-symbols-outlined text-[18px]">download</span>
              一键导出
            </button>
</div>
</div>
{/* Table Card */}
<div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-100 dark:border-slate-800 overflow-hidden shadow-sm">
<table className="w-full text-left border-collapse">
<thead>
<tr className="bg-slate-50 dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-800">
<th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase">技术名称</th>
<th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase">所属标签</th>
<th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase text-center">增长率</th>
<th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase">热度指数</th>
<th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase">成熟度</th>
<th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase">投资额 (M$)</th>
<th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase text-right">操作</th>
</tr>
</thead>
<tbody className="divide-y divide-slate-100 dark:divide-slate-800">
{/* Row 1 */}
<tr className="hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors">
<td className="px-6 py-4">
<a className="text-sm font-bold text-primary hover:underline" href="#">生成式AI大模型</a>
</td>
<td className="px-6 py-4">
<div className="flex gap-2">
<span className="px-2 py-0.5 bg-primary/10 text-primary text-[10px] font-bold rounded cursor-pointer hover:bg-primary/20">人工智能</span>
<span className="px-2 py-0.5 bg-slate-100 dark:bg-slate-800 text-slate-500 text-[10px] font-bold rounded cursor-pointer hover:bg-slate-200">自然语言</span>
</div>
</td>
<td className="px-6 py-4 text-center">
<div className="inline-flex items-center gap-1 group relative">
<span className="text-sm font-bold text-emerald-500">+145%</span>
<span className="material-symbols-outlined text-emerald-500 text-[16px]">trending_up</span>
<div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block bg-slate-900 text-white text-[10px] px-2 py-1 rounded whitespace-nowrap">
                      近三月环比增长
                    </div>
</div>
</td>
<td className="px-6 py-4">
<div className="w-24 h-8 bg-gradient-to-r from-primary/20 via-primary/40 to-primary/10 rounded overflow-hidden relative">
<div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_50%_50%,transparent_0%,white_100%)]"></div>
<svg className="absolute bottom-0 left-0 w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 30">
<path d="M0 25 Q 10 5, 20 20 T 40 10 T 60 25 T 80 5 T 100 20" fill="none" stroke="#0ba6da" stroke-width="2"></path>
</svg>
</div>
</td>
<td className="px-6 py-4">
<div className="w-full max-w-[100px] bg-slate-100 dark:bg-slate-800 rounded-full h-1.5 overflow-hidden">
<div className="bg-primary h-full rounded-full" style={{width: '65%'}}></div>
</div>
<span className="text-[10px] font-medium text-slate-400 mt-1 block">TRL 6 - 样机阶段</span>
</td>
<td className="px-6 py-4">
<span className="text-sm font-bold text-slate-700 dark:text-slate-300">1,240.50</span>
</td>
<td className="px-6 py-4 text-right">
<div className="flex justify-end gap-3">
<button className="text-primary hover:text-primary/70 text-xs font-bold">产业链分析</button>
<button className="text-primary hover:text-primary/70 text-xs font-bold">最新成果</button>
</div>
</td>
</tr>
{/* Row 2 */}
<tr className="hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors">
<td className="px-6 py-4">
<a className="text-sm font-bold text-primary hover:underline" href="#">量子纠错芯片</a>
</td>
<td className="px-6 py-4">
<div className="flex gap-2">
<span className="px-2 py-0.5 bg-primary/10 text-primary text-[10px] font-bold rounded cursor-pointer">量子计算</span>
<span className="px-2 py-0.5 bg-slate-100 dark:bg-slate-800 text-slate-500 text-[10px] font-bold rounded cursor-pointer">硬件</span>
</div>
</td>
<td className="px-6 py-4 text-center">
<div className="inline-flex items-center gap-1">
<span className="text-sm font-bold text-emerald-500">+42%</span>
<span className="material-symbols-outlined text-emerald-500 text-[16px]">trending_up</span>
</div>
</td>
<td className="px-6 py-4">
<div className="w-24 h-8 bg-gradient-to-r from-primary/10 via-primary/20 to-primary/5 rounded overflow-hidden relative">
<svg className="absolute bottom-0 left-0 w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 30">
<path d="M0 28 Q 20 25, 40 20 T 70 15 T 100 5" fill="none" stroke="#0ba6da" stroke-width="2"></path>
</svg>
</div>
</td>
<td className="px-6 py-4">
<div className="w-full max-w-[100px] bg-slate-100 dark:bg-slate-800 rounded-full h-1.5 overflow-hidden">
<div className="bg-primary h-full rounded-full" style={{width: '30%'}}></div>
</div>
<span className="text-[10px] font-medium text-slate-400 mt-1 block">TRL 3 - 原理验证</span>
</td>
<td className="px-6 py-4">
<span className="text-sm font-bold text-slate-700 dark:text-slate-300">458.20</span>
</td>
<td className="px-6 py-4 text-right">
<div className="flex justify-end gap-3">
<button className="text-primary hover:text-primary/70 text-xs font-bold">产业链分析</button>
<button className="text-primary hover:text-primary/70 text-xs font-bold">最新成果</button>
</div>
</td>
</tr>
{/* Row 3 */}
<tr className="hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors">
<td className="px-6 py-4">
<a className="text-sm font-bold text-primary hover:underline" href="#">固态钠电池</a>
</td>
<td className="px-6 py-4">
<div className="flex gap-2">
<span className="px-2 py-0.5 bg-primary/10 text-primary text-[10px] font-bold rounded cursor-pointer">新能源</span>
<span className="px-2 py-0.5 bg-slate-100 dark:bg-slate-800 text-slate-500 text-[10px] font-bold rounded cursor-pointer">储能技术</span>
</div>
</td>
<td className="px-6 py-4 text-center">
<div className="inline-flex items-center gap-1">
<span className="text-sm font-bold text-amber-500">+12%</span>
<span className="material-symbols-outlined text-amber-500 text-[16px]">trending_flat</span>
</div>
</td>
<td className="px-6 py-4">
<div className="w-24 h-8 bg-gradient-to-r from-primary/10 via-primary/20 to-primary/5 rounded overflow-hidden relative">
<svg className="absolute bottom-0 left-0 w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 30">
<path d="M0 15 Q 25 10, 50 15 T 75 10 T 100 15" fill="none" stroke="#0ba6da" stroke-width="2"></path>
</svg>
</div>
</td>
<td className="px-6 py-4">
<div className="w-full max-w-[100px] bg-slate-100 dark:bg-slate-800 rounded-full h-1.5 overflow-hidden">
<div className="bg-primary h-full rounded-full" style={{width: '85%'}}></div>
</div>
<span className="text-[10px] font-medium text-slate-400 mt-1 block">TRL 8 - 商业成熟</span>
</td>
<td className="px-6 py-4">
<span className="text-sm font-bold text-slate-700 dark:text-slate-300">890.00</span>
</td>
<td className="px-6 py-4 text-right">
<div className="flex justify-end gap-3">
<button className="text-primary hover:text-primary/70 text-xs font-bold">产业链分析</button>
<button className="text-primary hover:text-primary/70 text-xs font-bold">最新成果</button>
</div>
</td>
</tr>
{/* Row 4 */}
<tr className="hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors">
<td className="px-6 py-4">
<a className="text-sm font-bold text-primary hover:underline" href="#">mRNA 靶向疫苗</a>
</td>
<td className="px-6 py-4">
<div className="flex gap-2">
<span className="px-2 py-0.5 bg-primary/10 text-primary text-[10px] font-bold rounded cursor-pointer">生物医药</span>
<span className="px-2 py-0.5 bg-slate-100 dark:bg-slate-800 text-slate-500 text-[10px] font-bold rounded cursor-pointer">精准医疗</span>
</div>
</td>
<td className="px-6 py-4 text-center">
<div className="inline-flex items-center gap-1">
<span className="text-sm font-bold text-emerald-500">+88%</span>
<span className="material-symbols-outlined text-emerald-500 text-[16px]">trending_up</span>
</div>
</td>
<td className="px-6 py-4">
<div className="w-24 h-8 bg-gradient-to-r from-primary/10 via-primary/20 to-primary/5 rounded overflow-hidden relative">
<svg className="absolute bottom-0 left-0 w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 30">
<path d="M0 28 L 20 15 L 40 22 L 60 8 L 80 12 L 100 2" fill="none" stroke="#0ba6da" stroke-width="2"></path>
</svg>
</div>
</td>
<td className="px-6 py-4">
<div className="w-full max-w-[100px] bg-slate-100 dark:bg-slate-800 rounded-full h-1.5 overflow-hidden">
<div className="bg-primary h-full rounded-full" style={{width: '92%'}}></div>
</div>
<span className="text-[10px] font-medium text-slate-400 mt-1 block">TRL 9 - 市场应用</span>
</td>
<td className="px-6 py-4">
<span className="text-sm font-bold text-slate-700 dark:text-slate-300">2,315.60</span>
</td>
<td className="px-6 py-4 text-right">
<div className="flex justify-end gap-3">
<button className="text-primary hover:text-primary/70 text-xs font-bold">产业链分析</button>
<button className="text-primary hover:text-primary/70 text-xs font-bold">最新成果</button>
</div>
</td>
</tr>
</tbody>
</table>
{/* Pagination */}
<div className="px-6 py-4 bg-slate-50/50 dark:bg-slate-800/30 flex items-center justify-between">
<p className="text-xs text-slate-500">共计 2,845 条数据，显示 1 - 10 条</p>
<div className="flex items-center gap-2">
<button className="w-8 h-8 rounded border border-slate-200 dark:border-slate-700 flex items-center justify-center text-slate-400 hover:bg-white transition-colors">
<span className="material-symbols-outlined text-[18px]">chevron_left</span>
</button>
<button className="w-8 h-8 rounded bg-primary text-white text-xs font-bold">1</button>
<button className="w-8 h-8 rounded border border-slate-200 dark:border-slate-700 flex items-center justify-center text-xs font-medium text-slate-600 dark:text-slate-400 hover:bg-white transition-colors">2</button>
<button className="w-8 h-8 rounded border border-slate-200 dark:border-slate-700 flex items-center justify-center text-xs font-medium text-slate-600 dark:text-slate-400 hover:bg-white transition-colors">3</button>
<span className="text-slate-400 mx-1">...</span>
<button className="w-8 h-8 rounded border border-slate-200 dark:border-slate-700 flex items-center justify-center text-xs font-medium text-slate-600 dark:text-slate-400 hover:bg-white transition-colors">285</button>
<button className="w-8 h-8 rounded border border-slate-200 dark:border-slate-700 flex items-center justify-center text-slate-400 hover:bg-white transition-colors">
<span className="material-symbols-outlined text-[18px]">chevron_right</span>
</button>
</div>
</div>
</div>
</div>
</div>
</div>

```
    </div>
  )
}
