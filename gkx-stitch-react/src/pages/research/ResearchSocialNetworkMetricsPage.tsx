export default function ResearchSocialNetworkMetricsPage() {
  return (
    <div className="p-8 space-y-6">
<div className="max-w-[1440px] mx-auto px-6 py-8">
<nav className="flex items-center gap-2 mb-6 text-sm">
<a className="text-primary hover:underline font-medium" href="#">分析工具</a>
<span className="text-slate-400">/</span>
<a className="text-primary hover:underline font-medium" href="#">社会网络分析</a>
<span className="text-slate-400">/</span>
<span className="text-slate-600 dark:text-slate-400 font-medium">分析结果</span>
</nav>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
<div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm">
<div className="flex items-center justify-between mb-2">
<p className="text-slate-500 dark:text-slate-400 text-sm font-medium">节点总数</p>
<span className="material-symbols-outlined text-primary text-xl">hub</span>
</div>
<p className="text-2xl font-bold tracking-tight">1,284</p>
<div className="mt-2 flex items-center gap-1 text-xs text-green-600">
<span className="material-symbols-outlined text-xs">trending_up</span>
<span>较上月 +12%</span>
</div>
</div>
<div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm">
<div className="flex items-center justify-between mb-2">
<p className="text-slate-500 dark:text-slate-400 text-sm font-medium">连线总数</p>
<span className="material-symbols-outlined text-primary text-xl">rebase_edit</span>
</div>
<p className="text-2xl font-bold tracking-tight">4,592</p>
<div className="mt-2 flex items-center gap-1 text-xs text-green-600">
<span className="material-symbols-outlined text-xs">trending_up</span>
<span>较上月 +8.4%</span>
</div>
</div>
<div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm">
<div className="flex items-center justify-between mb-2">
<p className="text-slate-500 dark:text-slate-400 text-sm font-medium">网络密度</p>
<span className="material-symbols-outlined text-primary text-xl">grain</span>
</div>
<p className="text-2xl font-bold tracking-tight">0.028</p>
<div className="mt-2 flex items-center gap-1 text-xs text-slate-400">
<span>稳定状态</span>
</div>
</div>
<div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm">
<div className="flex items-center justify-between mb-2">
<p className="text-slate-500 dark:text-slate-400 text-sm font-medium">平均路径长度</p>
<span className="material-symbols-outlined text-primary text-xl">route</span>
</div>
<p className="text-2xl font-bold tracking-tight">3.45</p>
<div className="mt-2 flex items-center gap-1 text-xs text-blue-600">
<span>高效传输层级</span>
</div>
</div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
<div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm overflow-hidden">
<div className="p-5 border-b border-slate-100 dark:border-slate-700 flex justify-between items-center">
<h3 className="font-bold text-lg flex items-center gap-2">
<span className="material-symbols-outlined text-primary">leaderboard</span>
            关键节点排名
          </h3>
<button className="text-primary text-sm font-medium hover:bg-primary/5 px-2 py-1 rounded">查看全部</button>
</div>
<div className="overflow-x-auto">
<table className="w-full text-left text-sm">
<thead className="bg-slate-50 dark:bg-slate-900/50 text-slate-500">
<tr>
<th className="px-5 py-3 font-medium">节点名称</th>
<th className="px-5 py-3 font-medium">度中心性</th>
<th className="px-5 py-3 font-medium">介数中心性</th>
<th className="px-5 py-3 font-medium text-right">操作</th>
</tr>
</thead>
<tbody className="divide-y divide-slate-100 dark:divide-slate-700">
<tr className="hover:bg-slate-50/50 dark:hover:bg-slate-700/30 transition-colors">
<td className="px-5 py-4 font-medium">核心智库A</td>
<td className="px-5 py-4 text-primary font-semibold">0.85</td>
<td className="px-5 py-4 text-primary">0.42</td>
<td className="px-5 py-4 text-right">
<button className="text-primary hover:text-primary/80 font-bold">定位</button>
</td>
</tr>
<tr className="hover:bg-slate-50/50 dark:hover:bg-slate-700/30 transition-colors">
<td className="px-5 py-4 font-medium">研究机构B</td>
<td className="px-5 py-4 text-primary font-semibold">0.72</td>
<td className="px-5 py-4 text-primary">0.31</td>
<td className="px-5 py-4 text-right">
<button className="text-primary hover:text-primary/80 font-bold">定位</button>
</td>
</tr>
<tr className="hover:bg-slate-50/50 dark:hover:bg-slate-700/30 transition-colors">
<td className="px-5 py-4 font-medium">专家学者C</td>
<td className="px-5 py-4 text-primary font-semibold">0.68</td>
<td className="px-5 py-4 text-primary">0.28</td>
<td className="px-5 py-4 text-right">
<button className="text-primary hover:text-primary/80 font-bold">定位</button>
</td>
</tr>
</tbody>
</table>
</div>
</div>
<div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm overflow-hidden">
<div className="p-5 border-b border-slate-100 dark:border-slate-700 flex justify-between items-center">
<h3 className="font-bold text-lg flex items-center gap-2">
<span className="material-symbols-outlined text-primary">groups_3</span>
            社区集群列表
          </h3>
<button className="text-primary text-sm font-medium hover:bg-primary/5 px-2 py-1 rounded">全局分析</button>
</div>
<div className="overflow-x-auto">
<table className="w-full text-left text-sm">
<thead className="bg-slate-50 dark:bg-slate-900/50 text-slate-500">
<tr>
<th className="px-5 py-3 font-medium">社区ID</th>
<th className="px-5 py-3 font-medium">成员数量</th>
<th className="px-5 py-3 font-medium">内聚性得分</th>
<th className="px-5 py-3 font-medium text-right">操作</th>
</tr>
</thead>
<tbody className="divide-y divide-slate-100 dark:divide-slate-700">
<tr className="hover:bg-slate-50/50 dark:hover:bg-slate-700/30 transition-colors">
<td className="px-5 py-4">
<span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-bold">Cluster_01</span>
</td>
<td className="px-5 py-4 font-medium">45</td>
<td className="px-5 py-4 text-primary">0.88</td>
<td className="px-5 py-4 text-right">
<button className="bg-primary text-white text-xs px-3 py-1.5 rounded-lg hover:bg-primary/90 transition-colors">聚合查看</button>
</td>
</tr>
<tr className="hover:bg-slate-50/50 dark:hover:bg-slate-700/30 transition-colors">
<td className="px-5 py-4">
<span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-bold">Cluster_02</span>
</td>
<td className="px-5 py-4 font-medium">32</td>
<td className="px-5 py-4 text-primary">0.75</td>
<td className="px-5 py-4 text-right">
<button className="bg-primary text-white text-xs px-3 py-1.5 rounded-lg hover:bg-primary/90 transition-colors">聚合查看</button>
</td>
</tr>
<tr className="hover:bg-slate-50/50 dark:hover:bg-slate-700/30 transition-colors">
<td className="px-5 py-4">
<span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-bold">Cluster_03</span>
</td>
<td className="px-5 py-4 font-medium">28</td>
<td className="px-5 py-4 text-primary">0.62</td>
<td className="px-5 py-4 text-right">
<button className="bg-primary text-white text-xs px-3 py-1.5 rounded-lg hover:bg-primary/90 transition-colors">聚合查看</button>
</td>
</tr>
</tbody>
</table>
</div>
</div>
</div>
<div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm overflow-hidden">
<div className="p-5 border-b border-slate-100 dark:border-slate-700 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
<h3 className="font-bold text-lg flex items-center gap-2">
<span className="material-symbols-outlined text-primary">table_rows</span>
          详细节点信息表
        </h3>
<div className="flex items-center gap-3">
<div className="relative">
<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-lg">search</span>
<input className="pl-10 pr-4 py-2 border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 rounded-lg text-sm focus:ring-primary focus:border-primary w-full sm:w-64" placeholder="搜索节点名称..." type="text" />
</div>
<button className="flex items-center gap-1 bg-slate-100 dark:bg-slate-700 px-3 py-2 rounded-lg text-sm font-medium hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors">
<span className="material-symbols-outlined text-lg">filter_list</span>
            筛选
          </button>
</div>
</div>
<div className="overflow-x-auto">
<table className="w-full text-left text-sm">
<thead className="bg-slate-50 dark:bg-slate-900/50 text-slate-500 uppercase tracking-wider">
<tr>
<th className="px-6 py-4 font-semibold">节点名称</th>
<th className="px-6 py-4 font-semibold">标签</th>
<th className="px-6 py-4 font-semibold">关联数</th>
<th className="px-6 py-4 font-semibold">聚类类别</th>
<th className="px-6 py-4 font-semibold text-right">操作</th>
</tr>
</thead>
<tbody className="divide-y divide-slate-100 dark:divide-slate-700">
<tr className="hover:bg-slate-50/50 dark:hover:bg-slate-700/30 transition-colors">
<td className="px-6 py-4 font-medium">北京市智库办公室</td>
<td className="px-6 py-4">
<span className="bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 px-2 py-0.5 rounded text-xs">政府部门</span>
</td>
<td className="px-6 py-4">124</td>
<td className="px-6 py-4">
<span className="inline-block w-2 h-2 rounded-full bg-blue-500 mr-2"></span>
                核心圈层
              </td>
<td className="px-6 py-4 text-right flex justify-end gap-3">
<button className="text-primary hover:text-primary/80 flex items-center gap-1">
<span className="material-symbols-outlined text-lg">edit_note</span> 编辑
                </button>
<button className="text-red-500 hover:text-red-600 flex items-center gap-1">
<span className="material-symbols-outlined text-lg">delete</span> 删除
                </button>
</td>
</tr>
<tr className="hover:bg-slate-50/50 dark:hover:bg-slate-700/30 transition-colors">
<td className="px-6 py-4 font-medium">能源安全研究所</td>
<td className="px-6 py-4">
<span className="bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 px-2 py-0.5 rounded text-xs">科研机构</span>
</td>
<td className="px-6 py-4">89</td>
<td className="px-6 py-4">
<span className="inline-block w-2 h-2 rounded-full bg-green-500 mr-2"></span>
                专业集群A
              </td>
<td className="px-6 py-4 text-right flex justify-end gap-3">
<button className="text-primary hover:text-primary/80 flex items-center gap-1">
<span className="material-symbols-outlined text-lg">edit_note</span> 编辑
                </button>
<button className="text-red-500 hover:text-red-600 flex items-center gap-1">
<span className="material-symbols-outlined text-lg">delete</span> 删除
                </button>
</td>
</tr>
<tr className="hover:bg-slate-50/50 dark:hover:bg-slate-700/30 transition-colors">
<td className="px-6 py-4 font-medium">李建国 教授</td>
<td className="px-6 py-4">
<span className="bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 px-2 py-0.5 rounded text-xs">专家个人</span>
</td>
<td className="px-6 py-4">56</td>
<td className="px-6 py-4">
<span className="inline-block w-2 h-2 rounded-full bg-orange-500 mr-2"></span>
                边缘连接者
              </td>
<td className="px-6 py-4 text-right flex justify-end gap-3">
<button className="text-primary hover:text-primary/80 flex items-center gap-1">
<span className="material-symbols-outlined text-lg">edit_note</span> 编辑
                </button>
<button className="text-red-500 hover:text-red-600 flex items-center gap-1">
<span className="material-symbols-outlined text-lg">delete</span> 删除
                </button>
</td>
</tr>
<tr className="hover:bg-slate-50/50 dark:hover:bg-slate-700/30 transition-colors">
<td className="px-6 py-4 font-medium">全球化研究学会</td>
<td className="px-6 py-4">
<span className="bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 px-2 py-0.5 rounded text-xs">社会组织</span>
</td>
<td className="px-6 py-4">212</td>
<td className="px-6 py-4">
<span className="inline-block w-2 h-2 rounded-full bg-purple-500 mr-2"></span>
                跨界纽带
              </td>
<td className="px-6 py-4 text-right flex justify-end gap-3">
<button className="text-primary hover:text-primary/80 flex items-center gap-1">
<span className="material-symbols-outlined text-lg">edit_note</span> 编辑
                </button>
<button className="text-red-500 hover:text-red-600 flex items-center gap-1">
<span className="material-symbols-outlined text-lg">delete</span> 删除
                </button>
</td>
</tr>
</tbody>
</table>
</div>
<div className="p-5 border-t border-slate-100 dark:border-slate-700 flex items-center justify-between">
<p className="text-sm text-slate-500">显示第 1 至 4 条结果，共 1,284 条</p>
<div className="flex gap-2">
<button className="p-2 border border-slate-200 dark:border-slate-700 rounded hover:bg-slate-50 dark:hover:bg-slate-700 disabled:opacity-50" disabled>
<span className="material-symbols-outlined text-lg">chevron_left</span>
</button>
<button className="px-3 py-1 bg-primary text-white rounded text-sm font-medium">1</button>
<button className="px-3 py-1 border border-slate-200 dark:border-slate-700 rounded text-sm hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors">2</button>
<button className="px-3 py-1 border border-slate-200 dark:border-slate-700 rounded text-sm hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors">3</button>
<span className="px-2 py-1">...</span>
<button className="px-3 py-1 border border-slate-200 dark:border-slate-700 rounded text-sm hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors">129</button>
<button className="p-2 border border-slate-200 dark:border-slate-700 rounded hover:bg-slate-50 dark:hover:bg-slate-700">
<span className="material-symbols-outlined text-lg">chevron_right</span>
</button>
</div>
</div>
</div>
</div>
    </div>
  )
}
