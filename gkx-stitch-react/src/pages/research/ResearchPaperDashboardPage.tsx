export default function ResearchPaperDashboardPage() {
  return (
    <div className="p-8 space-y-6">
<div className="max-w-[1440px] mx-auto p-6 lg:p-10">
{/* Breadcrumbs */}
<nav className="flex items-center gap-2 mb-6 text-sm font-medium">
<a className="text-primary hover:underline" href="#">新型高端智库系统</a>
<span className="text-slate-400 dark:text-slate-500 material-symbols-outlined text-xs">chevron_right</span>
<a className="text-primary hover:underline" href="#">战略咨询智能支持</a>
<span className="text-slate-400 dark:text-slate-500 material-symbols-outlined text-xs">chevron_right</span>
<a className="text-primary hover:underline" href="#">技术体系分析</a>
<span className="text-slate-400 dark:text-slate-500 material-symbols-outlined text-xs">chevron_right</span>
<span className="text-slate-600 dark:text-slate-300">论文分析</span>
</nav>
{/* Header */}
<div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
<h1 className="text-3xl font-black tracking-tight text-slate-900 dark:text-slate-50">论文分析</h1>
<div className="flex flex-wrap gap-3">
<button className="flex items-center gap-2 px-5 py-2.5 bg-primary text-white rounded-lg font-bold hover:bg-primary/90 transition-colors shadow-sm shadow-primary/20">
<span className="material-symbols-outlined text-sm">add</span>
<span>新增分析任务</span>
</button>
<button className="flex items-center gap-2 px-5 py-2.5 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 rounded-lg font-bold hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors">
<span className="material-symbols-outlined text-sm">ios_share</span>
<span>导出报告</span>
</button>
<button className="flex items-center justify-center p-2.5 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors">
<span className="material-symbols-outlined text-sm">refresh</span>
</button>
</div>
</div>
{/* Tab Switcher */}
<div className="border-b border-slate-200 dark:border-slate-800 mb-6">
<div className="flex gap-8">
<button className="pb-4 border-b-2 border-primary text-primary font-bold text-base px-1">分析总览</button>
<button className="pb-4 border-b-2 border-transparent text-slate-500 dark:text-slate-400 font-medium text-base hover:text-slate-700 dark:hover:text-slate-200 px-1">二维交叉分析</button>
<button className="pb-4 border-b-2 border-transparent text-slate-500 dark:text-slate-400 font-medium text-base hover:text-slate-700 dark:hover:text-slate-200 px-1">任务列表</button>
</div>
</div>
{/* Filters Section */}
<div className="flex flex-wrap gap-3 mb-8">
<button className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-full text-sm font-medium text-slate-700 dark:text-slate-200 hover:border-primary transition-all">
<span>发表年份</span>
<span className="material-symbols-outlined text-sm">keyboard_arrow_down</span>
</button>
<button className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-full text-sm font-medium text-slate-700 dark:text-slate-200 hover:border-primary transition-all">
<span>核心刊物</span>
<span className="material-symbols-outlined text-sm">keyboard_arrow_down</span>
</button>
<button className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-full text-sm font-medium text-slate-700 dark:text-slate-200 hover:border-primary transition-all">
<span>学科领域</span>
<span className="material-symbols-outlined text-sm">keyboard_arrow_down</span>
</button>
<div className="ml-auto flex items-center gap-2 text-xs text-slate-400 dark:text-slate-500">
<span className="material-symbols-outlined text-xs">info</span>
                数据更新于: 2023-12-28 14:30
            </div>
</div>
{/* Row 1: Metric Cards */}
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
<div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-sm border border-slate-100 dark:border-slate-700">
<p className="text-sm font-medium text-slate-500 dark:text-slate-400 mb-2">论文收录总数</p>
<div className="flex items-end gap-2">
<span className="text-3xl font-black text-slate-900 dark:text-slate-50">12,482</span>
<span className="text-emerald-500 text-sm font-bold pb-1 flex items-center"><span className="material-symbols-outlined text-xs">trending_up</span> 12%</span>
</div>
</div>
<div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-sm border border-slate-100 dark:border-slate-700">
<p className="text-sm font-medium text-slate-500 dark:text-slate-400 mb-2">核心关键词数</p>
<div className="flex items-end gap-2">
<span className="text-3xl font-black text-slate-900 dark:text-slate-50">856</span>
<span className="text-emerald-500 text-sm font-bold pb-1 flex items-center"><span className="material-symbols-outlined text-xs">trending_up</span> 5.4%</span>
</div>
</div>
<div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-sm border border-slate-100 dark:border-slate-700">
<p className="text-sm font-medium text-slate-500 dark:text-slate-400 mb-2">全球合作机构数</p>
<div className="flex items-end gap-2">
<span className="text-3xl font-black text-slate-900 dark:text-slate-50">2,140</span>
<span className="text-amber-500 text-sm font-bold pb-1 flex items-center"><span className="material-symbols-outlined text-xs">trending_flat</span> 0.8%</span>
</div>
</div>
</div>
{/* Row 2: Charts */}
<div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
{/* Keyword Cloud & Heatmap */}
<div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-sm border border-slate-100 dark:border-slate-700 flex flex-col">
<div className="flex justify-between items-center mb-6">
<h3 className="font-bold text-lg">关键词分析</h3>
<span className="text-xs text-primary font-bold cursor-pointer hover:underline">查看更多</span>
</div>
<div className="flex flex-col xl:flex-row gap-6 h-full min-h-[320px]">
<div className="flex-1 bg-slate-50 dark:bg-slate-900/50 rounded-lg p-4 relative overflow-hidden flex flex-wrap content-center justify-center gap-3">
{/* Simulated Word Cloud Tags */}
<span className="text-primary font-black text-3xl">人工智能</span>
<span className="text-slate-400 font-bold text-xl">大语言模型</span>
<span className="text-emerald-500 font-bold text-2xl">量子计算</span>
<span className="text-amber-500 font-medium text-lg">半导体</span>
<span className="text-rose-500 font-black text-4xl">深度学习</span>
<span className="text-indigo-400 font-medium text-md">神经网络</span>
<span className="text-primary/70 font-bold text-xl">自然语言处理</span>
<span className="text-slate-500 font-medium text-lg">算力优化</span>
<span className="text-emerald-400 font-bold text-2xl">可持续能源</span>
<span className="text-amber-600 font-medium text-sm">边际计算</span>
</div>
<div className="w-full xl:w-48">
<p className="text-xs font-bold text-slate-400 dark:text-slate-500 mb-3 uppercase tracking-wider">热度排行榜</p>
<ul className="space-y-3">
<li className="flex items-center justify-between">
<span className="flex items-center gap-2 text-sm"><span className="w-5 h-5 flex items-center justify-center bg-primary text-white text-[10px] rounded-full">1</span> 深度学习</span>
<span className="text-xs font-bold text-slate-400">2.4k</span>
</li>
<li className="flex items-center justify-between">
<span className="flex items-center gap-2 text-sm"><span className="w-5 h-5 flex items-center justify-center bg-primary/80 text-white text-[10px] rounded-full">2</span> 人工智能</span>
<span className="text-xs font-bold text-slate-400">1.9k</span>
</li>
<li className="flex items-center justify-between">
<span className="flex items-center gap-2 text-sm"><span className="w-5 h-5 flex items-center justify-center bg-primary/60 text-white text-[10px] rounded-full">3</span> 量子计算</span>
<span className="text-xs font-bold text-slate-400">1.5k</span>
</li>
<li className="flex items-center justify-between">
<span className="flex items-center gap-2 text-sm"><span className="w-5 h-5 flex items-center justify-center bg-slate-200 dark:bg-slate-700 text-slate-500 text-[10px] rounded-full">4</span> 核心算法</span>
<span className="text-xs font-bold text-slate-400">1.2k</span>
</li>
<li className="flex items-center justify-between">
<span className="flex items-center gap-2 text-sm"><span className="w-5 h-5 flex items-center justify-center bg-slate-200 dark:bg-slate-700 text-slate-500 text-[10px] rounded-full">5</span> 神经网络</span>
<span className="text-xs font-bold text-slate-400">0.9k</span>
</li>
</ul>
</div>
</div>
</div>
{/* Global Distribution Map */}
<div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-sm border border-slate-100 dark:border-slate-700 flex flex-col">
<div className="flex justify-between items-center mb-6">
<h3 className="font-bold text-lg">全球论文分布图</h3>
<div className="flex items-center gap-2 bg-slate-100 dark:bg-slate-900 px-2 py-1 rounded text-[10px] font-bold text-slate-500">
<span className="w-2 h-2 rounded-full bg-primary/40"></span> 低
                        <span className="w-2 h-2 rounded-full bg-primary/80"></span> 中
                        <span className="w-2 h-2 rounded-full bg-primary"></span> 高
                    </div>
</div>
<div className="flex flex-col xl:flex-row gap-6 h-full min-h-[320px]">
<div className="flex-1 bg-slate-50 dark:bg-slate-900/50 rounded-lg relative overflow-hidden">
<img alt="World Map Distribution" className="w-full h-full object-cover opacity-60 mix-blend-multiply dark:mix-blend-overlay" data-alt="Stylized world map showing research paper density with blue bubbles" data-location="Global" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBYqFFJDoeG-3YAIQ8TdWE5ZMT8Pa_f89_G-7NhN6f8ekayF7YOOBtWjBTUXP5sqrMxyiTqKaFC0iqE74dNNx0q-646EWiP-uFvBeJrOsKFI06ItM3KU-76cO1z5dzLT6EOBkNdosfWBuiHwaxBVNtFemUh9IdRv2pN90OztH3HbfxwwkrC01j_4KmJ_XIPPrHUNPr5917RLqk8YDHobe2J4dscYt1tFbNL3m3aMypQGRAUL_vVw0sCDm_caoSQnXtUeNA504wL7Kgz"/>
{/* Simulated Map Bubbles */}
<div className="absolute top-[30%] left-[20%] w-6 h-6 bg-primary/40 rounded-full animate-pulse border border-primary/20"></div>
<div className="absolute top-[35%] left-[75%] w-10 h-10 bg-primary/60 rounded-full animate-pulse border border-primary/20"></div>
<div className="absolute top-[45%] left-[82%] w-14 h-14 bg-primary rounded-full animate-pulse border border-primary/20"></div>
<div className="absolute top-[60%] left-[45%] w-8 h-8 bg-primary/30 rounded-full animate-pulse border border-primary/20"></div>
</div>
<div className="w-full xl:w-48">
<p className="text-xs font-bold text-slate-400 dark:text-slate-500 mb-3 uppercase tracking-wider">贡献度排行</p>
<div className="space-y-4">
<div>
<div className="flex justify-between text-xs mb-1 font-medium">
<span>中国</span>
<span className="font-bold">42%</span>
</div>
<div className="w-full bg-slate-100 dark:bg-slate-700 h-1.5 rounded-full">
<div className="bg-primary h-full rounded-full" style={{width: '42%'}}></div>
</div>
</div>
<div>
<div className="flex justify-between text-xs mb-1 font-medium">
<span>美国</span>
<span className="font-bold">35%</span>
</div>
<div className="w-full bg-slate-100 dark:bg-slate-700 h-1.5 rounded-full">
<div className="bg-primary/80 h-full rounded-full" style={{width: '35%'}}></div>
</div>
</div>
<div>
<div className="flex justify-between text-xs mb-1 font-medium">
<span>欧盟</span>
<span className="font-bold">18%</span>
</div>
<div className="w-full bg-slate-100 dark:bg-slate-700 h-1.5 rounded-full">
<div className="bg-primary/60 h-full rounded-full" style={{width: '18%'}}></div>
</div>
</div>
<div>
<div className="flex justify-between text-xs mb-1 font-medium">
<span>日本</span>
<span className="font-bold">5%</span>
</div>
<div className="w-full bg-slate-100 dark:bg-slate-700 h-1.5 rounded-full">
<div className="bg-primary/40 h-full rounded-full" style={{width: '5%'}}></div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
{/* Row 3: Author Analysis */}
<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
{/* Collaboration Network */}
<div className="lg:col-span-2 bg-white dark:bg-slate-800 p-6 rounded-lg shadow-sm border border-slate-100 dark:border-slate-700 flex flex-col">
<div className="flex justify-between items-center mb-6">
<h3 className="font-bold text-lg">作者合作关系网络</h3>
<div className="flex gap-2">
<button className="p-1 hover:bg-slate-100 dark:hover:bg-slate-700 rounded transition-colors"><span className="material-symbols-outlined text-base">zoom_in</span></button>
<button className="p-1 hover:bg-slate-100 dark:hover:bg-slate-700 rounded transition-colors"><span className="material-symbols-outlined text-base">zoom_out</span></button>
<button className="p-1 hover:bg-slate-100 dark:hover:bg-slate-700 rounded transition-colors"><span className="material-symbols-outlined text-base">fullscreen</span></button>
</div>
</div>
<div className="flex-1 min-h-[400px] bg-slate-50 dark:bg-slate-900/50 rounded-lg relative overflow-hidden flex items-center justify-center">
{/* Abstract Network Representation */}
<div className="absolute inset-0 opacity-20 dark:opacity-10">
<svg height="100%" width="100%" xmlns="http://www.w3.org/2000/svg">
<line stroke="currentColor" stroke-width="1" x1="20%" x2="50%" y1="30%" y2="50%"></line>
<line stroke="currentColor" stroke-width="1" x1="80%" x2="50%" y1="20%" y2="50%"></line>
<line stroke="currentColor" stroke-width="1" x1="10%" x2="50%" y1="80%" y2="50%"></line>
<line stroke="currentColor" stroke-width="1" x1="90%" x2="50%" y1="70%" y2="50%"></line>
<line stroke="currentColor" stroke-width="1" x1="20%" x2="10%" y1="30%" y2="80%"></line>
<line stroke="currentColor" stroke-width="1" x1="80%" x2="90%" y1="20%" y2="70%"></line>
</svg>
</div>
<div className="relative w-full h-full flex flex-wrap items-center justify-center gap-20">
<div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xs text-center p-1 shadow-lg shadow-primary/30 z-10">张教授</div>
<div className="w-12 h-12 bg-white dark:bg-slate-800 border-2 border-primary/40 rounded-full flex items-center justify-center text-slate-700 dark:text-slate-300 font-bold text-[10px] shadow-md">李博士</div>
<div className="w-10 h-10 bg-white dark:bg-slate-800 border-2 border-primary/40 rounded-full flex items-center justify-center text-slate-700 dark:text-slate-300 font-bold text-[10px] shadow-md">Wang L.</div>
<div className="w-14 h-14 bg-white dark:bg-slate-800 border-2 border-primary/40 rounded-full flex items-center justify-center text-slate-700 dark:text-slate-300 font-bold text-[10px] shadow-md">Smith J.</div>
</div>
<div className="absolute bottom-4 right-4 text-[10px] bg-white/80 dark:bg-slate-800/80 px-2 py-1 rounded backdrop-blur-sm border border-slate-200 dark:border-slate-700">
                        * 线条粗细代表合作频次
                    </div>
</div>
</div>
{/* Core Authors List */}
<div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-sm border border-slate-100 dark:border-slate-700 flex flex-col">
<div className="mb-6">
<h3 className="font-bold text-lg mb-4">核心作者列表</h3>
<div className="relative">
<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-sm">search</span>
<input className="w-full bg-slate-50 dark:bg-slate-900 border-slate-200 dark:border-slate-700 rounded-lg pl-9 py-2 text-sm focus:ring-primary focus:border-primary" placeholder="搜索作者或机构..." type="text" />
</div>
</div>
<div className="flex-1 overflow-auto">
<table className="w-full text-left text-sm">
<thead className="sticky top-0 bg-white dark:bg-slate-800 z-10 border-b border-slate-100 dark:border-slate-700">
<tr>
<th className="pb-3 font-bold text-slate-400 text-xs">姓名/机构</th>
<th className="pb-3 font-bold text-slate-400 text-xs text-center">论文</th>
<th className="pb-3 font-bold text-slate-400 text-xs text-right">H-Index</th>
</tr>
</thead>
<tbody className="divide-y divide-slate-50 dark:divide-slate-700/50">
<tr>
<td className="py-4">
<p className="font-bold text-slate-900 dark:text-slate-50">张明远</p>
<p className="text-[10px] text-slate-400">清华大学人工智能实验室</p>
</td>
<td className="py-4 text-center font-bold text-primary">142</td>
<td className="py-4 text-right font-bold">58</td>
</tr>
<tr>
<td className="py-4">
<p className="font-bold text-slate-900 dark:text-slate-50">Sarah Jenkins</p>
<p className="text-[10px] text-slate-400">MIT Computer Science</p>
</td>
<td className="py-4 text-center font-bold text-primary">98</td>
<td className="py-4 text-right font-bold">42</td>
</tr>
<tr>
<td className="py-4">
<p className="font-bold text-slate-900 dark:text-slate-50">李伟强</p>
<p className="text-[10px] text-slate-400">中国科学院自动化所</p>
</td>
<td className="py-4 text-center font-bold text-primary">85</td>
<td className="py-4 text-right font-bold">39</td>
</tr>
<tr>
<td className="py-4">
<p className="font-bold text-slate-900 dark:text-slate-50">David Miller</p>
<p className="text-[10px] text-slate-400">Stanford University</p>
</td>
<td className="py-4 text-center font-bold text-primary">76</td>
<td className="py-4 text-right font-bold">45</td>
</tr>
<tr>
<td className="py-4">
<p className="font-bold text-slate-900 dark:text-slate-50">陈思佳</p>
<p className="text-[10px] text-slate-400">浙江大学计算机学院</p>
</td>
<td className="py-4 text-center font-bold text-primary">64</td>
<td className="py-4 text-right font-bold">31</td>
</tr>
</tbody>
</table>
</div>
<button className="mt-4 w-full py-2 text-xs font-bold text-slate-500 dark:text-slate-400 bg-slate-50 dark:bg-slate-900 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors">
                    查看完整列表
                </button>
</div>
</div>
</div>

```
    </div>
  )
}
