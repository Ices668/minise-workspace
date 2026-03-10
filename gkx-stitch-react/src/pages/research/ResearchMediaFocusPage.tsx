export default function ResearchMediaFocusPage() {
  return (
    <div className="p-8 space-y-6">
<div className="relative flex min-h-screen flex-col overflow-x-hidden">
<div className="flex h-full grow flex-col">
{/* Main Content Area */}
<div className="mx-auto flex w-full max-w-[1440px] flex-1 flex-col px-6 py-8 md:px-10 lg:px-16">
{/* Breadcrumbs */}
<nav className="flex flex-wrap items-center gap-2 mb-6">
<a className="text-primary/80 hover:text-primary text-sm font-medium transition-colors" href="#">新型高端智库系统</a>
<span className="text-slate-400 text-sm">/</span>
<a className="text-primary/80 hover:text-primary text-sm font-medium transition-colors" href="#">战略咨询智能支持</a>
<span className="text-slate-400 text-sm">/</span>
<a className="text-primary/80 hover:text-primary text-sm font-medium transition-colors" href="#">研究需求分析</a>
<span className="text-slate-400 text-sm">/</span>
<span className="text-slate-900 dark:text-slate-100 text-sm font-semibold">媒体聚焦</span>
</nav>
{/* Header Section */}
<div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-8">
<h1 className="text-4xl font-black tracking-tight text-slate-900 dark:text-slate-100">媒体聚焦</h1>
<div className="flex flex-wrap gap-3">
<button className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-primary/10 text-primary border border-primary/20 rounded-lg text-sm font-bold hover:bg-primary/20 transition-all">
<span className="material-symbols-outlined text-lg">settings_input_antenna</span>
<span>突发监测配置</span>
</button>
<button className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-primary/10 text-primary border border-primary/20 rounded-lg text-sm font-bold hover:bg-primary/20 transition-all">
<span className="material-symbols-outlined text-lg">description</span>
<span>生成决策简报</span>
</button>
<button className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-primary text-white rounded-lg text-sm font-bold hover:bg-primary/90 shadow-lg shadow-primary/20 transition-all">
<span className="material-symbols-outlined text-lg">download</span>
<span>导出</span>
</button>
</div>
</div>
{/* Top Stats Section */}
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
<div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm">
<p className="text-slate-500 dark:text-slate-400 text-sm font-medium mb-1">监测资讯总数</p>
<div className="flex items-end gap-2">
<span className="text-3xl font-bold text-slate-900 dark:text-white">128,429</span>
<span className="text-xs text-primary font-bold mb-1">+5.2%</span>
</div>
</div>
<div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm">
<p className="text-slate-500 dark:text-slate-400 text-sm font-medium mb-1">今日热点事件</p>
<div className="flex items-end gap-2">
<span className="text-3xl font-bold text-slate-900 dark:text-white">15</span>
<span className="px-2 py-0.5 rounded-full bg-red-100 text-red-600 text-[10px] font-bold mb-1">紧急</span>
</div>
</div>
<div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm">
<p className="text-slate-500 dark:text-slate-400 text-sm font-medium mb-1">平均情感正向率</p>
<div className="flex items-end gap-2">
<span className="text-3xl font-bold text-slate-900 dark:text-white">82.4%</span>
<div className="h-2 w-20 bg-slate-100 dark:bg-slate-700 rounded-full mb-2 overflow-hidden">
<div className="h-full bg-green-500 rounded-full" style={{width: '82%'}}></div>
</div>
</div>
</div>
<div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm">
<p className="text-slate-500 dark:text-slate-400 text-sm font-medium mb-1">媒体-技术耦合度均值</p>
<div className="flex items-end gap-2">
<span className="text-3xl font-bold text-slate-900 dark:text-white">0.76</span>
<span className="text-xs text-slate-400 mb-1">高相关性</span>
</div>
</div>
</div>
{/* Upper Section (Analysis) */}
<div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
{/* Line Chart: Left (2/3) */}
<div className="lg:col-span-2 bg-white dark:bg-slate-800 p-6 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm">
<div className="flex justify-between items-center mb-6">
<h3 className="text-lg font-bold">媒体提及与技术趋势耦合时序图</h3>
<div className="flex gap-2">
<span className="flex items-center gap-1 text-xs text-slate-500"><span className="w-3 h-3 rounded-full bg-primary"></span> 资讯量</span>
<span className="flex items-center gap-1 text-xs text-slate-500"><span className="w-3 h-3 rounded-full bg-green-500"></span> 情感值</span>
<span className="flex items-center gap-1 text-xs text-slate-500"><span className="w-3 h-3 rounded-full bg-purple-500"></span> 学术产出</span>
</div>
</div>
<div className="relative h-[300px] w-full mt-4">
<svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 800 300">
{/* Grid Lines */}
<line stroke="#e2e8f0" stroke-dasharray="4" x1="0" x2="800" y1="250" y2="250"></line>
<line stroke="#e2e8f0" stroke-dasharray="4" x1="0" x2="800" y1="150" y2="150"></line>
<line stroke="#e2e8f0" stroke-dasharray="4" x1="0" x2="800" y1="50" y2="50"></line>
{/* Primary Line (News Volume) */}
<path d="M0,220 C100,210 150,50 200,80 S300,250 400,200 S550,20 700,100 L800,120" fill="none" stroke="#13b6ec" stroke-linecap="round" stroke-width="3"></path>
{/* Secondary Line (Sentiment) */}
<path d="M0,150 Q100,140 200,160 T400,130 T600,170 T800,140" fill="none" stroke="#10b981" stroke-dasharray="5,5" stroke-width="2"></path>
</svg>
<div className="flex justify-between mt-4 text-[11px] text-slate-400 font-bold uppercase tracking-wider">
<span>01/01</span><span>01/05</span><span>01/10</span><span>01/15</span><span>01/20</span><span>01/25</span><span>01/30</span>
</div>
</div>
</div>
{/* Hot Detection: Right (1/3) */}
<div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm overflow-hidden flex flex-col">
<h3 className="text-lg font-bold mb-4">热点突发检测</h3>
<div className="flex-1 overflow-y-auto space-y-4 pr-2 custom-scrollbar">
<div className="group p-3 rounded-lg bg-slate-50 dark:bg-slate-700/50 hover:bg-primary/5 transition-colors border border-transparent hover:border-primary/20">
<div className="flex justify-between items-start mb-2">
<span className="text-sm font-bold truncate pr-2">量子通信安全标准发布</span>
<span className="shrink-0 px-2 py-0.5 rounded-md bg-orange-100 text-orange-600 text-[10px] font-bold">高强度</span>
</div>
<div className="flex justify-between items-center">
<span className="text-xs text-slate-500">爆发指数: 94.2</span>
<button className="text-primary text-xs font-bold flex items-center gap-1">
<span className="material-symbols-outlined text-sm">add_circle</span>加入监控
                                </button>
</div>
</div>
<div className="group p-3 rounded-lg bg-slate-50 dark:bg-slate-700/50 hover:bg-primary/5 transition-colors border border-transparent hover:border-primary/20">
<div className="flex justify-between items-start mb-2">
<span className="text-sm font-bold truncate pr-2">硅光子芯片技术路线争议</span>
<span className="shrink-0 px-2 py-0.5 rounded-md bg-blue-100 text-blue-600 text-[10px] font-bold">中等</span>
</div>
<div className="flex justify-between items-center">
<span className="text-xs text-slate-500">爆发指数: 68.5</span>
<button className="text-primary text-xs font-bold flex items-center gap-1">
<span className="material-symbols-outlined text-sm">add_circle</span>加入监控
                                </button>
</div>
</div>
<div className="group p-3 rounded-lg bg-slate-50 dark:bg-slate-700/50 hover:bg-primary/5 transition-colors border border-transparent hover:border-primary/20">
<div className="flex justify-between items-start mb-2">
<span className="text-sm font-bold truncate pr-2">低轨卫星互联网频段分配</span>
<span className="shrink-0 px-2 py-0.5 rounded-md bg-orange-100 text-orange-600 text-[10px] font-bold">高强度</span>
</div>
<div className="flex justify-between items-center">
<span className="text-xs text-slate-500">爆发指数: 88.1</span>
<button className="text-primary text-xs font-bold flex items-center gap-1">
<span className="material-symbols-outlined text-sm">add_circle</span>加入监控
                                </button>
</div>
</div>
</div>
</div>
</div>
{/* Middle Section (Interactive Network) */}
<div className="w-full mb-8">
<div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm relative overflow-hidden h-[500px] flex flex-col">
<div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6 relative z-10">
<div>
<h3 className="text-lg font-bold">媒体—技术耦合关联网络</h3>
<p className="text-xs text-slate-500 mt-1">分析重点：关键核心技术与全球主流媒体报道链条</p>
</div>
<div className="flex flex-wrap gap-2">
<div className="flex bg-slate-100 dark:bg-slate-700 p-1 rounded-lg">
<button className="p-1.5 hover:bg-white dark:hover:bg-slate-600 rounded-md transition-all shadow-sm">
<span className="material-symbols-outlined text-xl">zoom_in</span>
</button>
<button className="p-1.5 hover:bg-white dark:hover:bg-slate-600 rounded-md transition-all">
<span className="material-symbols-outlined text-xl">zoom_out</span>
</button>
</div>
<button className="inline-flex items-center gap-2 px-3 py-1.5 bg-slate-100 dark:bg-slate-700 rounded-lg text-xs font-bold">
<span className="material-symbols-outlined text-lg">route</span> 路径查找
                            </button>
<button className="inline-flex items-center gap-2 px-3 py-1.5 bg-slate-100 dark:bg-slate-700 rounded-lg text-xs font-bold">
<span className="material-symbols-outlined text-lg">filter_alt</span> 关系强度过滤
                            </button>
</div>
</div>
{/* Graph Visualization Container */}
<div className="flex-1 rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800 relative overflow-hidden flex items-center justify-center">
{/* Simulated Network Background */}
<div className="absolute inset-0 opacity-20 dark:opacity-40 pointer-events-none">
<svg height="100%" width="100%" xmlns="http://www.w3.org/2000/svg">
<defs>
<pattern height="40" id="grid" patternUnits="userSpaceOnUse" width="40">
<path d="M 40 0 L 0 0 0 40" fill="none" stroke="#cbd5e1" stroke-width="0.5"></path>
</pattern>
</defs>
<rect fill="url(#grid)" height="100%" width="100%"></rect>
</svg>
</div>
{/* Visual Nodes (Simulated) */}
<div className="relative w-full h-full">
{/* Node 1: Primary Center */}
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center animate-pulse">
<div className="w-24 h-24 rounded-full bg-primary text-white flex items-center justify-center text-center p-2 font-bold text-sm shadow-xl">生成式AI</div>
</div>
{/* Orbiting Nodes */}
<div className="absolute top-1/4 left-1/4 w-20 h-20 rounded-full bg-white dark:bg-slate-700 border-2 border-green-400 flex items-center justify-center text-center p-2 text-[10px] font-bold shadow-lg">纽约时报</div>
<div className="absolute bottom-1/4 right-1/4 w-20 h-20 rounded-full bg-white dark:bg-slate-700 border-2 border-purple-400 flex items-center justify-center text-center p-2 text-[10px] font-bold shadow-lg">算力分配</div>
<div className="absolute top-1/3 right-1/3 w-16 h-16 rounded-full bg-white dark:bg-slate-700 border-2 border-orange-400 flex items-center justify-center text-center p-1 text-[10px] font-bold shadow-lg">伦理争论</div>
{/* Connections (Simulated Lines) */}
<svg className="absolute inset-0 w-full h-full pointer-events-none">
<line stroke="#13b6ec" stroke-opacity="0.3" stroke-width="2" x1="50%" x2="25%" y1="50%" y2="25%"></line>
<line stroke="#13b6ec" stroke-opacity="0.3" stroke-width="2" x1="50%" x2="75%" y1="50%" y2="75%"></line>
<line stroke="#13b6ec" stroke-opacity="0.3" stroke-width="2" x1="50%" x2="66%" y1="50%" y2="33%"></line>
</svg>
</div>
</div>
</div>
</div>
{/* Lower Section (Monitoring & Details) */}
<div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
{/* Heatmap: Left (1/2) */}
<div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm">
<div className="flex justify-between items-center mb-6">
<h3 className="text-lg font-bold">耦合度分析矩阵</h3>
<span className="text-[10px] font-bold px-2 py-0.5 bg-slate-100 dark:bg-slate-700 rounded uppercase">Granger Causality</span>
</div>
<div className="grid grid-cols-6 gap-2">
{/* Y-axis labels would go here, simplified to a grid */}
<div className="col-start-2 col-span-5 flex justify-between px-2 text-[10px] text-slate-400 font-bold mb-1">
<span>A</span><span>B</span><span>C</span><span>D</span><span>E</span>
</div>
<div className="flex flex-col justify-between py-2 text-[10px] text-slate-400 font-bold text-right pr-2">
<span>M1</span><span>M2</span><span>M3</span><span>M4</span><span>M5</span>
</div>
<div className="col-span-5 grid grid-cols-5 grid-rows-5 gap-2 h-[240px]">
{/* Grid cells with varying opacity primary color */}
<div className="bg-primary/90 rounded shadow-sm"></div>
<div className="bg-primary/20 rounded shadow-sm"></div>
<div className="bg-primary/60 rounded shadow-sm"></div>
<div className="bg-primary/40 rounded shadow-sm"></div>
<div className="bg-primary/10 rounded shadow-sm"></div>
<div className="bg-primary/30 rounded shadow-sm"></div>
<div className="bg-primary/80 rounded shadow-sm"></div>
<div className="bg-primary/50 rounded shadow-sm"></div>
<div className="bg-primary/20 rounded shadow-sm"></div>
<div className="bg-primary/70 rounded shadow-sm"></div>
<div className="bg-primary/10 rounded shadow-sm"></div>
<div className="bg-primary/40 rounded shadow-sm"></div>
<div className="bg-primary/90 rounded shadow-sm"></div>
<div className="bg-primary/30 rounded shadow-sm"></div>
<div className="bg-primary/20 rounded shadow-sm"></div>
<div className="bg-primary/50 rounded shadow-sm"></div>
<div className="bg-primary/20 rounded shadow-sm"></div>
<div className="bg-primary/10 rounded shadow-sm"></div>
<div className="bg-primary/85 rounded shadow-sm"></div>
<div className="bg-primary/40 rounded shadow-sm"></div>
<div className="bg-primary/70 rounded shadow-sm"></div>
<div className="bg-primary/10 rounded shadow-sm"></div>
<div className="bg-primary/30 rounded shadow-sm"></div>
<div className="bg-primary/20 rounded shadow-sm"></div>
<div className="bg-primary/95 rounded shadow-sm"></div>
</div>
</div>
<div className="mt-4 flex items-center justify-end gap-2">
<span className="text-[10px] text-slate-400">弱相关</span>
<div className="h-2 w-32 bg-gradient-to-r from-primary/10 to-primary rounded-full"></div>
<span className="text-[10px] text-slate-400">强相关</span>
</div>
</div>
{/* Alerts Feed: Right (1/2) */}
<div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm flex flex-col">
<h3 className="text-lg font-bold mb-6">预警动态</h3>
<div className="flex-1 space-y-6">
<div className="relative pl-6 before:absolute before:left-[3px] before:top-2 before:bottom-[-24px] before:w-[1px] before:bg-slate-200 dark:before:bg-slate-700 last:before:hidden">
<div className="absolute left-0 top-1.5 w-2 h-2 rounded-full bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.5)]"></div>
<div className="flex flex-col gap-1">
<div className="flex justify-between items-center">
<span className="text-xs font-bold text-slate-400">10:42 AM</span>
<span className="text-[10px] px-1.5 py-0.5 bg-red-100 text-red-600 rounded font-bold uppercase">Critical</span>
</div>
<p className="text-sm font-semibold text-slate-800 dark:text-slate-200">检测到海外社交媒体关于“6G卫星隐私”的非正常激增</p>
<div className="flex gap-4 mt-1">
<a className="text-xs text-primary font-bold hover:underline flex items-center gap-1" href="#">
<span className="material-symbols-outlined text-sm">history_edu</span> 回测验证
                                    </a>
<a className="text-xs text-primary font-bold hover:underline flex items-center gap-1" href="#">
<span className="material-symbols-outlined text-sm">find_in_page</span> 查看证据溯源
                                    </a>
</div>
</div>
</div>
<div className="relative pl-6 before:absolute before:left-[3px] before:top-2 before:bottom-[-24px] before:w-[1px] before:bg-slate-200 dark:before:bg-slate-700 last:before:hidden">
<div className="absolute left-0 top-1.5 w-2 h-2 rounded-full bg-primary/60"></div>
<div className="flex flex-col gap-1">
<div className="flex justify-between items-center">
<span className="text-xs font-bold text-slate-400">09:15 AM</span>
<span className="text-[10px] px-1.5 py-0.5 bg-blue-100 text-blue-600 rounded font-bold uppercase">Info</span>
</div>
<p className="text-sm font-semibold text-slate-800 dark:text-slate-200">《Nature》发表针对特定蛋白质折叠技术的新突破</p>
<div className="flex gap-4 mt-1">
<a className="text-xs text-primary font-bold hover:underline flex items-center gap-1" href="#">
<span className="material-symbols-outlined text-sm">history_edu</span> 回测验证
                                    </a>
<a className="text-xs text-primary font-bold hover:underline flex items-center gap-1" href="#">
<span className="material-symbols-outlined text-sm">find_in_page</span> 查看证据溯源
                                    </a>
</div>
</div>
</div>
<div className="relative pl-6">
<div className="absolute left-0 top-1.5 w-2 h-2 rounded-full bg-primary/60"></div>
<div className="flex flex-col gap-1">
<div className="flex justify-between items-center">
<span className="text-xs font-bold text-slate-400">昨天 18:30</span>
<span className="text-[10px] px-1.5 py-0.5 bg-blue-100 text-blue-600 rounded font-bold uppercase">Info</span>
</div>
<p className="text-sm font-semibold text-slate-800 dark:text-slate-200">主要智库关于“数据跨境流动”的共识达成初步报告</p>
<div className="flex gap-4 mt-1">
<a className="text-xs text-primary font-bold hover:underline flex items-center gap-1" href="#">
<span className="material-symbols-outlined text-sm">history_edu</span> 回测验证
                                    </a>
<a className="text-xs text-primary font-bold hover:underline flex items-center gap-1" href="#">
<span className="material-symbols-outlined text-sm">find_in_page</span> 查看证据溯源
                                    </a>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

    </div>
  )
}
