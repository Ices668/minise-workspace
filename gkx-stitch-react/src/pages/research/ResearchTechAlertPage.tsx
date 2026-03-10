export default function ResearchTechAlertPage() {
  return (
    <div className="p-8 space-y-6">
<div className="max-w-[1200px] mx-auto px-6 py-8">
{/* Breadcrumbs */}
<nav className="flex items-center gap-2 mb-6">
<a className="text-primary hover:opacity-80 text-sm font-medium" href="#">新型高端智库系统</a>
<span className="text-slate-400 dark:text-slate-500 text-sm">/</span>
<a className="text-primary hover:opacity-80 text-sm font-medium" href="#">战略咨询智能支持</a>
<span className="text-slate-400 dark:text-slate-500 text-sm">/</span>
<a className="text-primary hover:opacity-80 text-sm font-medium" href="#">技术趋势分析</a>
<span className="text-slate-400 dark:text-slate-500 text-sm">/</span>
<span className="text-slate-600 dark:text-slate-400 text-sm font-medium">技术动态预警</span>
</nav>
{/* Header */}
<div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
<h1 className="text-3xl font-black tracking-tight text-slate-900 dark:text-slate-50">技术动态预警</h1>
<div className="flex items-center gap-3">
<button className="flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary hover:bg-primary/20 rounded-lg font-bold text-sm transition-colors">
<span className="material-symbols-outlined text-lg">settings</span>
                    规则配置
                </button>
<button className="flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary hover:bg-primary/20 rounded-lg font-bold text-sm transition-colors">
<span className="material-symbols-outlined text-lg">ios_share</span>
                    一键导出
                </button>
<button className="flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary hover:bg-primary/20 rounded-lg font-bold text-sm transition-colors">
<span className="material-symbols-outlined text-lg">refresh</span>
                    刷新
                </button>
</div>
</div>
{/* Top Stats */}
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
<div className="bg-white dark:bg-slate-800 p-6 rounded-lg border border-slate-200 dark:border-slate-700 shadow-sm">
<p className="text-slate-500 dark:text-slate-400 text-sm font-medium mb-2">今日新增预警</p>
<div className="flex items-end gap-2">
<span className="text-3xl font-bold text-slate-900 dark:text-white">12</span>
<span className="text-emerald-500 text-sm font-medium mb-1">↑ 20%</span>
</div>
</div>
<div className="bg-white dark:bg-slate-800 p-6 rounded-lg border border-slate-200 dark:border-slate-700 shadow-sm">
<p className="text-slate-500 dark:text-slate-400 text-sm font-medium mb-2">待处理预警</p>
<div className="flex items-end gap-2">
<span className="text-3xl font-bold text-slate-900 dark:text-white">28</span>
<span className="text-amber-500 text-sm font-medium mb-1">需关注</span>
</div>
</div>
<div className="bg-white dark:bg-slate-800 p-6 rounded-lg border border-slate-200 dark:border-slate-700 shadow-sm">
<p className="text-slate-500 dark:text-slate-400 text-sm font-medium mb-2">本月高危预警数</p>
<div className="flex items-end gap-2">
<span className="text-3xl font-bold text-slate-900 dark:text-white">156</span>
<span className="text-rose-500 text-sm font-medium mb-1">↑ 8.4%</span>
</div>
</div>
</div>
{/* Filter Section */}
<div className="bg-white dark:bg-slate-800 p-6 rounded-lg border border-slate-200 dark:border-slate-700 shadow-sm mb-8">
<div className="grid grid-cols-1 md:grid-cols-4 gap-4">
<div className="relative">
<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">search</span>
<input className="w-full pl-10 pr-4 py-2 bg-background-light dark:bg-slate-900 border-none rounded-full text-sm focus:ring-2 focus:ring-primary/50" placeholder="搜索技术名称..." type="text" />
</div>
<select className="w-full px-4 py-2 bg-background-light dark:bg-slate-900 border-none rounded-full text-sm focus:ring-2 focus:ring-primary/50">
<option value="">预警级别 (高/中/低)</option>
<option>高</option>
<option>中</option>
<option>低</option>
</select>
<select className="w-full px-4 py-2 bg-background-light dark:bg-slate-900 border-none rounded-full text-sm focus:ring-2 focus:ring-primary/50">
<option value="">预警类型</option>
<option>增速异常</option>
<option>突破性成果</option>
<option>风险预警</option>
</select>
<div className="flex gap-2">
<select className="flex-1 px-4 py-2 bg-background-light dark:bg-slate-900 border-none rounded-full text-sm focus:ring-2 focus:ring-primary/50">
<option value="">处理状态</option>
<option>待处理</option>
<option>处理中</option>
<option>已完成</option>
</select>
<button className="px-6 py-2 bg-primary text-white font-bold rounded-full text-sm hover:opacity-90">查询</button>
<button className="px-6 py-2 bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-200 font-bold rounded-full text-sm hover:opacity-90">重置</button>
</div>
</div>
</div>
{/* Main Content Area */}
<div className="space-y-8">
{/* Upper Section: Chart Placeholder */}
<div className="bg-white dark:bg-slate-800 p-6 rounded-lg border border-slate-200 dark:border-slate-700 shadow-sm">
<div className="flex items-center justify-between mb-6">
<h3 className="text-lg font-bold text-slate-900 dark:text-white">预警趋势分布图</h3>
<div className="flex items-center gap-4">
<span className="flex items-center gap-1 text-xs text-slate-500"><span className="w-3 h-3 rounded-full bg-rose-500"></span> 高危</span>
<span className="flex items-center gap-1 text-xs text-slate-500"><span className="w-3 h-3 rounded-full bg-amber-500"></span> 中等</span>
<span className="flex items-center gap-1 text-xs text-slate-500"><span className="w-3 h-3 rounded-full bg-blue-500"></span> 一般</span>
</div>
</div>
<div className="h-64 w-full bg-gradient-to-b from-primary/5 to-transparent rounded-lg relative overflow-hidden flex flex-col justify-end">
{/* Fake Chart Visualization */}
<div className="absolute inset-0 flex items-end px-4 gap-2">
<div className="flex-1 bg-primary/20 rounded-t-sm h-[40%]"></div>
<div className="flex-1 bg-primary/20 rounded-t-sm h-[55%]"></div>
<div className="flex-1 bg-primary/40 rounded-t-sm h-[45%]"></div>
<div className="flex-1 bg-primary/30 rounded-t-sm h-[70%]"></div>
<div className="flex-1 bg-primary/50 rounded-t-sm h-[60%] border-t-2 border-primary"></div>
<div className="flex-1 bg-primary/60 rounded-t-sm h-[85%] border-t-2 border-primary"></div>
<div className="flex-1 bg-primary/40 rounded-t-sm h-[65%]"></div>
<div className="flex-1 bg-primary/30 rounded-t-sm h-[50%]"></div>
<div className="flex-1 bg-primary/20 rounded-t-sm h-[40%]"></div>
<div className="flex-1 bg-primary/10 rounded-t-sm h-[30%]"></div>
</div>
{/* Legend X-axis */}
<div className="flex justify-between px-2 py-2 border-t border-slate-100 dark:border-slate-700 text-[10px] text-slate-400">
<span>06-01</span><span>06-05</span><span>06-10</span><span>06-15</span><span>06-20</span><span>06-25</span><span>06-30</span>
</div>
</div>
</div>
{/* Lower Section: Table */}
<div className="bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 shadow-sm overflow-hidden">
<div className="p-6 border-b border-slate-100 dark:border-slate-700">
<h3 className="text-lg font-bold text-slate-900 dark:text-white">预警事件列表</h3>
</div>
<div className="overflow-x-auto">
<table className="w-full text-left border-collapse">
<thead>
<tr className="bg-slate-50 dark:bg-slate-900/50">
<th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase">预警等级</th>
<th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase">时间</th>
<th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase">技术领域</th>
<th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase">预警内容摘要</th>
<th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase">预警类型</th>
<th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase">状态</th>
<th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase">操作</th>
</tr>
</thead>
<tbody className="divide-y divide-slate-100 dark:divide-slate-700">
{/* Row 1 */}
<tr className="hover:bg-slate-50 dark:hover:bg-slate-900/30 transition-colors">
<td className="px-6 py-4">
<span className="px-2 py-1 rounded bg-rose-100 dark:bg-rose-900/30 text-rose-600 dark:text-rose-400 text-xs font-bold">高</span>
</td>
<td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-400">2023-10-24 14:20</td>
<td className="px-6 py-4 text-sm font-medium text-slate-900 dark:text-slate-200">量子计算</td>
<td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-400 max-w-xs truncate">某实验室宣布实现1000位逻辑量子比特纠缠...</td>
<td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-400">突破性成果</td>
<td className="px-6 py-4">
<span className="flex items-center gap-1.5 text-xs font-medium text-amber-600">
<span className="w-1.5 h-1.5 rounded-full bg-amber-600"></span> 待处理
                                    </span>
</td>
<td className="px-6 py-4 text-sm">
<div className="flex gap-3 text-primary font-bold">
<button className="hover:underline">详情</button>
<button className="hover:underline">处理</button>
<button className="text-slate-400 hover:text-slate-600">忽略</button>
</div>
</td>
</tr>
{/* Row 2 */}
<tr className="hover:bg-slate-50 dark:hover:bg-slate-900/30 transition-colors">
<td className="px-6 py-4">
<span className="px-2 py-1 rounded bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400 text-xs font-bold">中</span>
</td>
<td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-400">2023-10-24 10:05</td>
<td className="px-6 py-4 text-sm font-medium text-slate-900 dark:text-slate-200">固态电池</td>
<td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-400 max-w-xs truncate">专利申请量环比增长300%，行业热度极速上升...</td>
<td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-400">增速异常</td>
<td className="px-6 py-4">
<span className="flex items-center gap-1.5 text-xs font-medium text-blue-600">
<span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span> 处理中
                                    </span>
</td>
<td className="px-6 py-4 text-sm">
<div className="flex gap-3 text-primary font-bold">
<button className="hover:underline">详情</button>
<button className="hover:underline">处理</button>
<button className="text-slate-400 hover:text-slate-600">忽略</button>
</div>
</td>
</tr>
{/* Row 3 */}
<tr className="hover:bg-slate-50 dark:hover:bg-slate-900/30 transition-colors">
<td className="px-6 py-4">
<span className="px-2 py-1 rounded bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-xs font-bold">低</span>
</td>
<td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-400">2023-10-23 16:45</td>
<td className="px-6 py-4 text-sm font-medium text-slate-900 dark:text-slate-200">生成式AI</td>
<td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-400 max-w-xs truncate">开源模型社区活跃度异常，可能存在合规性风险...</td>
<td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-400">风险预警</td>
<td className="px-6 py-4">
<span className="flex items-center gap-1.5 text-xs font-medium text-slate-400">
<span className="w-1.5 h-1.5 rounded-full bg-slate-400"></span> 已完成
                                    </span>
</td>
<td className="px-6 py-4 text-sm">
<div className="flex gap-3 text-primary font-bold">
<button className="hover:underline">详情</button>
<span className="text-slate-300">|</span>
<button className="text-slate-400">已存档</button>
</div>
</td>
</tr>
</tbody>
</table>
</div>
{/* Pagination */}
<div className="p-6 border-t border-slate-100 dark:border-slate-700 flex items-center justify-between">
<p className="text-xs text-slate-500">共 156 条记录，显示第 1-3 条</p>
<div className="flex gap-2">
<button className="p-1 rounded hover:bg-slate-100 dark:hover:bg-slate-700"><span className="material-symbols-outlined text-sm">chevron_left</span></button>
<button className="px-3 py-1 bg-primary text-white text-xs font-bold rounded">1</button>
<button className="px-3 py-1 hover:bg-slate-100 dark:hover:bg-slate-700 text-xs rounded">2</button>
<button className="px-3 py-1 hover:bg-slate-100 dark:hover:bg-slate-700 text-xs rounded">3</button>
<button className="p-1 rounded hover:bg-slate-100 dark:hover:bg-slate-700"><span className="material-symbols-outlined text-sm">chevron_right</span></button>
</div>
</div>
</div>
</div>
</div>
    </div>
  )
}
