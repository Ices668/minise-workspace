export default function ResearchCommonNetworkPage() {
  return (
    <div className="p-8 space-y-6">
<div className="max-w-[1200px] mx-auto px-6 py-8">
{/* Page Header */}
<div className="mb-8">
<h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-100">共性网络分析</h1>
<p className="mt-2 text-slate-600 dark:text-slate-400">深入分析技术术语关联及核心研究者贡献度</p>
</div>
{/* Tabs Navigation */}
<div className="mb-8 border-b border-slate-200 dark:border-slate-800">
<div className="flex gap-8">
<button className="flex flex-col items-center justify-center border-b-2 border-primary pb-4 pt-2 group">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-primary">hub</span>
<p className="text-sm font-bold text-slate-900 dark:text-slate-100">关系矩阵</p>
</div>
</button>
<button className="flex flex-col items-center justify-center border-b-2 border-transparent pb-4 pt-2 text-slate-500 hover:text-primary transition-colors">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined">groups</span>
<p className="text-sm font-bold">核心研究者</p>
</div>
</button>
</div>
</div>
{/* View 1: Term Relationship Matrix */}
<section className="space-y-6">
<div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
<h2 className="text-xl font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
                术语关系矩阵
                <span className="px-2 py-0.5 rounded bg-primary/10 text-primary text-xs font-medium uppercase tracking-wider">实时分析</span>
</h2>
{/* Capsule Search */}
<div className="relative w-full md:w-80">
<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
<span className="material-symbols-outlined text-slate-400 text-xl">search</span>
</div>
<input className="block w-full pl-10 pr-4 py-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-full text-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all" placeholder="搜索特定术语或关键词..." type="text" />
</div>
</div>
{/* Table Component */}
<div className="overflow-hidden rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm">
<div className="overflow-x-auto">
<table className="w-full text-left border-collapse">
<thead>
<tr className="bg-slate-50 dark:bg-slate-800/50">
<th className="px-6 py-4 text-sm font-semibold text-slate-700 dark:text-slate-300">术语对</th>
<th className="px-6 py-4 text-sm font-semibold text-slate-700 dark:text-slate-300 text-center">共现频次</th>
<th className="px-6 py-4 text-sm font-semibold text-slate-700 dark:text-slate-300 text-center">语义相似度</th>
<th className="px-6 py-4 text-sm font-semibold text-slate-700 dark:text-slate-300 text-center">上下文相关度</th>
<th className="px-6 py-4 text-sm font-semibold text-slate-700 dark:text-slate-300">综合强度</th>
</tr>
</thead>
<tbody className="divide-y divide-slate-100 dark:divide-slate-800">
<tr className="hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors">
<td className="px-6 py-5 text-sm font-medium text-slate-900 dark:text-slate-100">人工智能 - 机器学习</td>
<td className="px-6 py-5 text-sm text-slate-600 dark:text-slate-400 text-center">1,240</td>
<td className="px-6 py-5 text-sm text-slate-600 dark:text-slate-400 text-center">0.89</td>
<td className="px-6 py-5 text-sm text-slate-600 dark:text-slate-400 text-center">0.82</td>
<td className="px-6 py-5">
<div className="flex items-center gap-3">
<div className="flex-1 h-1.5 rounded-full bg-slate-200 dark:bg-slate-700 overflow-hidden">
<div className="h-full bg-primary rounded-full" style={{width: '85%'}}></div>
</div>
<span className="text-sm font-bold text-primary">85</span>
</div>
</td>
</tr>
<tr className="hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors">
<td className="px-6 py-5 text-sm font-medium text-slate-900 dark:text-slate-100">神经网络 - 深度学习</td>
<td className="px-6 py-5 text-sm text-slate-600 dark:text-slate-400 text-center">980</td>
<td className="px-6 py-5 text-sm text-slate-600 dark:text-slate-400 text-center">0.95</td>
<td className="px-6 py-5 text-sm text-slate-600 dark:text-slate-400 text-center">0.91</td>
<td className="px-6 py-5">
<div className="flex items-center gap-3">
<div className="flex-1 h-1.5 rounded-full bg-slate-200 dark:bg-slate-700 overflow-hidden">
<div className="h-full bg-primary rounded-full" style={{width: '93%'}}></div>
</div>
<span className="text-sm font-bold text-primary">93</span>
</div>
</td>
</tr>
<tr className="hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors">
<td className="px-6 py-5 text-sm font-medium text-slate-900 dark:text-slate-100">大数据 - 云计算</td>
<td className="px-6 py-5 text-sm text-slate-600 dark:text-slate-400 text-center">850</td>
<td className="px-6 py-5 text-sm text-slate-600 dark:text-slate-400 text-center">0.76</td>
<td className="px-6 py-5 text-sm text-slate-600 dark:text-slate-400 text-center">0.70</td>
<td className="px-6 py-5">
<div className="flex items-center gap-3">
<div className="flex-1 h-1.5 rounded-full bg-slate-200 dark:bg-slate-700 overflow-hidden">
<div className="h-full bg-primary rounded-full" style={{width: '72%'}}></div>
</div>
<span className="text-sm font-bold text-primary">72</span>
</div>
</td>
</tr>
<tr className="hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors">
<td className="px-6 py-5 text-sm font-medium text-slate-900 dark:text-slate-100">边缘计算 - 物联网</td>
<td className="px-6 py-5 text-sm text-slate-600 dark:text-slate-400 text-center">620</td>
<td className="px-6 py-5 text-sm text-slate-600 dark:text-slate-400 text-center">0.82</td>
<td className="px-6 py-5 text-sm text-slate-600 dark:text-slate-400 text-center">0.78</td>
<td className="px-6 py-5">
<div className="flex items-center gap-3">
<div className="flex-1 h-1.5 rounded-full bg-slate-200 dark:bg-slate-700 overflow-hidden">
<div className="h-full bg-primary rounded-full" style={{width: '79%'}}></div>
</div>
<span className="text-sm font-bold text-primary">79</span>
</div>
</td>
</tr>
</tbody>
</table>
</div>
</div>
</section>
{/* View 2: Core Researcher Identification */}
<section className="mt-12 space-y-6">
<h2 className="text-xl font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
            核心研究者识别
            <span className="text-slate-400 font-normal text-sm">(共 24 位核心研究者)</span>
</h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
{/* Researcher Card 1 */}
<div className="p-6 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow">
<div className="flex items-start justify-between mb-4">
<div className="flex items-center gap-4">
<div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center border-2 border-primary/20">
<span className="material-symbols-outlined text-3xl text-primary">account_circle</span>
</div>
<div>
<h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">张明远 教授</h3>
<p className="text-sm text-slate-500">清华大学 · 计算机科学与技术系</p>
</div>
</div>
<div className="text-right">
<div className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-1">贡献值</div>
<div className="text-2xl font-black text-primary">98.4</div>
</div>
</div>
<div className="space-y-4">
<div className="flex flex-wrap gap-2">
<span className="px-2 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-xs rounded-md">自然语言处理</span>
<span className="px-2 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-xs rounded-md">大模型架构</span>
<span className="px-2 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-xs rounded-md">知识图谱</span>
</div>
<div className="border-t border-slate-100 dark:border-slate-800 pt-4">
<h4 className="text-xs font-bold text-slate-400 uppercase mb-3 flex items-center gap-2">
<span className="material-symbols-outlined text-sm">stars</span> 代表性成果
                        </h4>
<ul className="space-y-2">
<li className="text-sm text-slate-700 dark:text-slate-300 flex items-start gap-2">
<span className="material-symbols-outlined text-primary text-xs mt-1">description</span>
<span>《下一代认知智能架构：从感知到认知的跨越》 (2023)</span>
</li>
<li className="text-sm text-slate-700 dark:text-slate-300 flex items-start gap-2">
<span className="material-symbols-outlined text-primary text-xs mt-1">description</span>
<span>一种多模态深度学习处理系统及其优化方法 [专利]</span>
</li>
</ul>
</div>
</div>
</div>
{/* Researcher Card 2 */}
<div className="p-6 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow">
<div className="flex items-start justify-between mb-4">
<div className="flex items-center gap-4">
<div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center border-2 border-primary/20">
<span className="material-symbols-outlined text-3xl text-primary">account_circle</span>
</div>
<div>
<h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">李华 研究员</h3>
<p className="text-sm text-slate-500">中国科学院 · 软件研究所</p>
</div>
</div>
<div className="text-right">
<div className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-1">贡献值</div>
<div className="text-2xl font-black text-primary">95.2</div>
</div>
</div>
<div className="space-y-4">
<div className="flex flex-wrap gap-2">
<span className="px-2 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-xs rounded-md">异构计算</span>
<span className="px-2 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-xs rounded-md">分布式存储</span>
<span className="px-2 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-xs rounded-md">云原生</span>
</div>
<div className="border-t border-slate-100 dark:border-slate-800 pt-4">
<h4 className="text-xs font-bold text-slate-400 uppercase mb-3 flex items-center gap-2">
<span className="material-symbols-outlined text-sm">stars</span> 代表性成果
                        </h4>
<ul className="space-y-2">
<li className="text-sm text-slate-700 dark:text-slate-300 flex items-start gap-2">
<span className="material-symbols-outlined text-primary text-xs mt-1">description</span>
<span>《大规模分布式异构系统的调度优化研究》 (2024)</span>
</li>
<li className="text-sm text-slate-700 dark:text-slate-300 flex items-start gap-2">
<span className="material-symbols-outlined text-primary text-xs mt-1">description</span>
<span>开源框架 "NebulaCloud" 核心贡献者 (GitHub 12k+)</span>
</li>
</ul>
</div>
</div>
</div>
</div>
{/* Pagination / Load More */}
<div className="flex justify-center pt-4">
<button className="px-6 py-2.5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-full text-sm font-medium text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all flex items-center gap-2">
                加载更多研究者
                <span className="material-symbols-outlined text-lg">expand_more</span>
</button>
</div>
</section>
</div>
    </div>
  )
}
