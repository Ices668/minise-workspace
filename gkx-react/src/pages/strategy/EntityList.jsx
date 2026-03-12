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
      </div>
    </>
  )
}
