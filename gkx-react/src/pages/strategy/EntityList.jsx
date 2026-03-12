// Source: gkx-prototype/entity-list.html
// Shell stripped: ONLY page content rendered inside Layout <Outlet />.

export default function EntityList() {
  return (
    <>
      <div className="max-w-[1200px] mx-auto px-6 py-8">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 mb-6 text-sm font-medium">
      <a className="text-primary hover:opacity-80" href="#">新型高端智库系统</a>
      <span className="text-slate-400 dark:text-slate-500 material-symbols-outlined text-sm">chevron_right</span>
      <a className="text-primary hover:opacity-80" href="#">战略咨询智能支持</a>
      <span className="text-slate-400 dark:text-slate-500 material-symbols-outlined text-sm">chevron_right</span>
      <a className="text-primary hover:opacity-80" href="#">研究需求分析</a>
      <span className="text-slate-400 dark:text-slate-500 material-symbols-outlined text-sm">chevron_right</span>
      <span className="text-slate-600 dark:text-slate-400">科技实体清单</span>
      </nav>
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
      <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-50">科技实体清单</h1>
      <div className="flex items-center gap-3">
      <button className="flex items-center gap-2 px-5 py-2.5 bg-primary/10 text-primary hover:bg-primary/20 transition-colors rounded-lg font-semibold text-sm">
      <span className="material-symbols-outlined text-[20px]">file_download</span>
                          一键导出报告
                      </button>
      <button className="flex items-center gap-2 px-5 py-2.5 bg-primary text-white hover:opacity-90 transition-opacity rounded-lg font-semibold text-sm">
      <span className="material-symbols-outlined text-[20px]">add</span>
                          新建实体
                      </button>
      <button className="p-2.5 bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-300 dark:hover:bg-slate-700 rounded-lg transition-colors">
      <span className="material-symbols-outlined text-[20px]">refresh</span>
      </button>
      </div>
      </div>
      {/* Stats Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      <div className="bg-white dark:bg-slate-900 p-6 rounded-xl shadow-sm border border-slate-200/60 dark:border-slate-800">
      <p className="text-sm font-medium text-slate-500 dark:text-slate-400 mb-1">实体总数</p>
      <div className="flex items-end gap-2">
      <span className="text-3xl font-bold text-slate-900 dark:text-white leading-none">1,284</span>
      <span className="text-xs text-green-500 font-medium mb-1">+12%</span>
      </div>
      </div>
      <div className="bg-white dark:bg-slate-900 p-6 rounded-xl shadow-sm border border-slate-200/60 dark:border-slate-800">
      <p className="text-sm font-medium text-slate-500 dark:text-slate-400 mb-1">本月新增</p>
      <div className="flex items-end gap-2">
      <span className="text-3xl font-bold text-slate-900 dark:text-white leading-none">56</span>
      <span className="text-xs text-primary font-medium mb-1">活跃</span>
      </div>
      </div>
      <div className="bg-white dark:bg-slate-900 p-6 rounded-xl shadow-sm border border-slate-200/60 dark:border-slate-800">
      <p className="text-sm font-medium text-slate-500 dark:text-slate-400 mb-1">高创新指数占比</p>
      <div className="flex items-end gap-2">
      <span className="text-3xl font-bold text-slate-900 dark:text-white leading-none">32.4%</span>
      <div className="w-24 h-2 bg-slate-100 dark:bg-slate-800 rounded-full mb-2 overflow-hidden">
      <div className="bg-primary h-full w-[32.4%]"></div>
      </div>
      </div>
      </div>
      </div>
      {/* Filter Card */}
      <div className="bg-white dark:bg-slate-900 p-6 rounded-xl shadow-sm border border-slate-200/60 dark:border-slate-800 mb-8">
      <div className="flex flex-col gap-5">
      {/* Capsule Search */}
      <div className="relative group">
      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary material-symbols-outlined">search</span>
      <input className="w-full pl-12 pr-4 py-3 bg-slate-50 dark:bg-slate-800/50 border-none rounded-full focus:ring-2 focus:ring-primary/50 text-slate-900 dark:text-slate-100 placeholder:text-slate-400" placeholder="关键词模糊搜索（实体名称、简介、技术关键词）" type="text"/>
      </div>
      {/* Dropdowns and Actions */}
      <div className="flex flex-wrap items-center justify-between gap-4">
      <div className="flex flex-wrap items-center gap-3">
      <button className="flex items-center gap-2 px-4 py-2 bg-slate-100 dark:bg-slate-800 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors text-sm font-medium">
                                  技术领域 <span className="material-symbols-outlined text-sm">expand_more</span>
      </button>
      <button className="flex items-center gap-2 px-4 py-2 bg-slate-100 dark:bg-slate-800 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors text-sm font-medium">
                                  所属地区 <span className="material-symbols-outlined text-sm">expand_more</span>
      </button>
      <button className="flex items-center gap-2 px-4 py-2 bg-slate-100 dark:bg-slate-800 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors text-sm font-medium">
                                  创新指数 <span className="material-symbols-outlined text-sm">expand_more</span>
      </button>
      <button className="flex items-center gap-2 px-4 py-2 bg-slate-100 dark:bg-slate-800 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors text-sm font-medium">
                                  实体标签 <span className="material-symbols-outlined text-sm">expand_more</span>
      </button>
      </div>
      <div className="flex items-center gap-2">
      <button className="px-6 py-2 bg-primary text-white rounded-lg font-semibold text-sm hover:opacity-90">查询</button>
      <button className="px-6 py-2 bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-400 rounded-lg font-semibold text-sm hover:bg-slate-300 dark:hover:bg-slate-700">重置</button>
      </div>
      </div>
      </div>
      </div>
      {/* Toolbar */}
      <div className="flex items-center justify-between mb-4 px-2">
      <div className="flex items-center bg-slate-200/50 dark:bg-slate-800 p-1 rounded-lg">
      <button className="p-1.5 rounded-md bg-white dark:bg-slate-700 shadow-sm text-primary">
      <span className="material-symbols-outlined block">format_list_bulleted</span>
      </button>
      <button className="p-1.5 rounded-md text-slate-500 hover:text-slate-700 dark:hover:text-slate-300">
      <span className="material-symbols-outlined block">grid_view</span>
      </button>
      </div>
      <div className="flex items-center gap-3">
      <button className="flex items-center gap-2 text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-primary transition-colors">
      <span className="material-symbols-outlined text-[18px]">upload_file</span>
                          批量导入 (Excel)
                      </button>
      <button className="flex items-center gap-2 text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-primary transition-colors">
      <span className="material-symbols-outlined text-[18px]">download</span>
                          导出
                      </button>
      </div>
      </div>
      {/* Main Content Table */}
      <div className="bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-200/60 dark:border-slate-800 overflow-hidden mb-6">
      <div className="overflow-x-auto">
      <table className="w-full text-left border-collapse">
      <thead>
      <tr className="bg-slate-50 dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-800">
      <th className="px-6 py-4 text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">实体名称</th>
      <th className="px-6 py-4 text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">技术领域</th>
      <th className="px-6 py-4 text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">创新指数</th>
      <th className="px-6 py-4 text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">标签</th>
      <th className="px-6 py-4 text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">更新时间</th>
      <th className="px-6 py-4 text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider text-right">操作</th>
      </tr>
      </thead>
      <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
      {/* Table Row 1 */}
      <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors">
      <td className="px-6 py-4 whitespace-nowrap">
      <div className="flex items-center gap-3">
      <div className="w-8 h-8 rounded bg-primary/10 flex items-center justify-center text-primary font-bold text-xs">A</div>
      <span className="font-semibold text-slate-900 dark:text-slate-100">先导微电子研究所</span>
      </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-600 dark:text-slate-400">半导体装备</td>
      <td className="px-6 py-4 whitespace-nowrap">
      <div className="flex items-center gap-3">
      <div className="flex-1 w-24 h-1.5 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
      <div className="bg-green-500 h-full w-[88%]"></div>
      </div>
      <span className="text-xs font-bold text-slate-700 dark:text-slate-300">88.5</span>
      </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
      <div className="flex gap-1.5">
      <span className="px-2 py-0.5 bg-primary/10 text-primary text-[10px] font-bold rounded">核心实验室</span>
      <span className="px-2 py-0.5 bg-slate-100 dark:bg-slate-800 text-slate-500 text-[10px] font-bold rounded">高新企业</span>
      </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-500 dark:text-slate-400">2023-11-20</td>
      <td className="px-6 py-4 whitespace-nowrap text-right text-sm">
      <div className="flex items-center justify-end gap-3">
      <button className="text-primary hover:underline font-medium">详情</button>
      <button className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 material-symbols-outlined text-[18px]">edit</button>
      <button className="text-slate-400 hover:text-red-500 material-symbols-outlined text-[18px]">delete</button>
      </div>
      </td>
      </tr>
      {/* Table Row 2 */}
      <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors">
      <td className="px-6 py-4 whitespace-nowrap">
      <div className="flex items-center gap-3">
      <div className="w-8 h-8 rounded bg-primary/10 flex items-center justify-center text-primary font-bold text-xs">B</div>
      <span className="font-semibold text-slate-900 dark:text-slate-100">量子信息科技实验室</span>
      </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-600 dark:text-slate-400">量子通信</td>
      <td className="px-6 py-4 whitespace-nowrap">
      <div className="flex items-center gap-3">
      <div className="flex-1 w-24 h-1.5 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
      <div className="bg-primary h-full w-[94%]"></div>
      </div>
      <span className="text-xs font-bold text-slate-700 dark:text-slate-300">94.2</span>
      </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
      <div className="flex gap-1.5">
      <span className="px-2 py-0.5 bg-primary/10 text-primary text-[10px] font-bold rounded">国家级</span>
      <span className="px-2 py-0.5 bg-slate-100 dark:bg-slate-800 text-slate-500 text-[10px] font-bold rounded">独角兽</span>
      </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-500 dark:text-slate-400">2023-11-18</td>
      <td className="px-6 py-4 whitespace-nowrap text-right text-sm">
      <div className="flex items-center justify-end gap-3">
      <button className="text-primary hover:underline font-medium">详情</button>
      <button className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 material-symbols-outlined text-[18px]">edit</button>
      <button className="text-slate-400 hover:text-red-500 material-symbols-outlined text-[18px]">delete</button>
      </div>
      </td>
      </tr>
      {/* Table Row 3 */}
      <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors">
      <td className="px-6 py-4 whitespace-nowrap">
      <div className="flex items-center gap-3">
      <div className="w-8 h-8 rounded bg-primary/10 flex items-center justify-center text-primary font-bold text-xs">C</div>
      <span className="font-semibold text-slate-900 dark:text-slate-100">深海深地探测工程院</span>
      </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-600 dark:text-slate-400">能源科技</td>
      <td className="px-6 py-4 whitespace-nowrap">
      <div className="flex items-center gap-3">
      <div className="flex-1 w-24 h-1.5 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
      <div className="bg-yellow-500 h-full w-[72%]"></div>
      </div>
      <span className="text-xs font-bold text-slate-700 dark:text-slate-300">72.0</span>
      </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
      <div className="flex gap-1.5">
      <span className="px-2 py-0.5 bg-slate-100 dark:bg-slate-800 text-slate-500 text-[10px] font-bold rounded">重点工程</span>
      </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-500 dark:text-slate-400">2023-11-15</td>
      <td className="px-6 py-4 whitespace-nowrap text-right text-sm">
      <div className="flex items-center justify-end gap-3">
      <button className="text-primary hover:underline font-medium">详情</button>
      <button className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 material-symbols-outlined text-[18px]">edit</button>
      <button className="text-slate-400 hover:text-red-500 material-symbols-outlined text-[18px]">delete</button>
      </div>
      </td>
      </tr>
      {/* Table Row 4 */}
      <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors">
      <td className="px-6 py-4 whitespace-nowrap">
      <div className="flex items-center gap-3">
      <div className="w-8 h-8 rounded bg-primary/10 flex items-center justify-center text-primary font-bold text-xs">D</div>
      <span className="font-semibold text-slate-900 dark:text-slate-100">神经形态计算中心</span>
      </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-600 dark:text-slate-400">人工智能</td>
      <td className="px-6 py-4 whitespace-nowrap">
      <div className="flex items-center gap-3">
      <div className="flex-1 w-24 h-1.5 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
      <div className="bg-green-500 h-full w-[85%]"></div>
      </div>
      <span className="text-xs font-bold text-slate-700 dark:text-slate-300">85.9</span>
      </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
      <div className="flex gap-1.5">
      <span className="px-2 py-0.5 bg-primary/10 text-primary text-[10px] font-bold rounded">前沿领域</span>
      <span className="px-2 py-0.5 bg-slate-100 dark:bg-slate-800 text-slate-500 text-[10px] font-bold rounded">校企合作</span>
      </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-500 dark:text-slate-400">2023-11-12</td>
      <td className="px-6 py-4 whitespace-nowrap text-right text-sm">
      <div className="flex items-center justify-end gap-3">
      <button className="text-primary hover:underline font-medium">详情</button>
      <button className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 material-symbols-outlined text-[18px]">edit</button>
      <button className="text-slate-400 hover:text-red-500 material-symbols-outlined text-[18px]">delete</button>
      </div>
      </td>
      </tr>
      </tbody>
      </table>
      </div>
      </div>
      {/* Pagination */}
      <div className="flex items-center justify-end gap-2 text-sm">
      <span className="text-slate-500 dark:text-slate-400 mr-4">共 1,284 条数据</span>
      <button className="w-8 h-8 flex items-center justify-center rounded-lg border border-slate-200 dark:border-slate-800 text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
      <span className="material-symbols-outlined text-[18px]">chevron_left</span>
      </button>
      <button className="w-8 h-8 flex items-center justify-center rounded-lg bg-primary text-white font-bold">1</button>
      <button className="w-8 h-8 flex items-center justify-center rounded-lg border border-slate-200 dark:border-slate-800 text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">2</button>
      <button className="w-8 h-8 flex items-center justify-center rounded-lg border border-slate-200 dark:border-slate-800 text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">3</button>
      <span className="px-2 text-slate-400">...</span>
      <button className="w-8 h-8 flex items-center justify-center rounded-lg border border-slate-200 dark:border-slate-800 text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">129</button>
      <button className="w-8 h-8 flex items-center justify-center rounded-lg border border-slate-200 dark:border-slate-800 text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
      <span className="material-symbols-outlined text-[18px]">chevron_right</span>
      </button>
      </div>
      </div>
    </>
  )
}
