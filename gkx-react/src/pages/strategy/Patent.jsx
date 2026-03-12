// Source: gkx-prototype/patent.html
// Shell stripped: ONLY page content rendered inside Layout <Outlet />.

export default function Patent() {
  return (
    <>
      <div className="max-w-[1440px] mx-auto px-6 py-8 flex flex-col gap-6">
      {/* Breadcrumbs */}
      <nav className="flex items-center gap-2 text-sm font-medium text-slate-500 dark:text-slate-400">
      <a className="hover:text-primary transition-colors" href="#">新型高端智库系统</a>
      <span className="material-symbols-outlined text-sm">chevron_right</span>
      <a className="hover:text-primary transition-colors" href="#">战略咨询智能支持</a>
      <span className="material-symbols-outlined text-sm">chevron_right</span>
      <a className="hover:text-primary transition-colors" href="#">技术体系分析</a>
      <span className="material-symbols-outlined text-sm">chevron_right</span>
      <span className="text-slate-900 dark:text-slate-100">专利分析</span>
      </nav>
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
      <h1 className="text-3xl font-black tracking-tight text-slate-900 dark:text-slate-100">专利分析</h1>
      <div className="flex items-center gap-3">
      <button className="flex items-center justify-center gap-2 px-4 py-2.5 bg-primary text-white rounded-lg font-bold hover:bg-primary/90 transition-all shadow-sm">
      <span className="material-symbols-outlined text-[20px]">add</span>
      <span>新建分析任务</span>
      </button>
      <button className="flex items-center justify-center gap-2 px-4 py-2.5 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 rounded-lg font-bold hover:bg-slate-50 dark:hover:bg-slate-700 transition-all shadow-sm">
      <span className="material-symbols-outlined text-[20px]">description</span>
      <span>生成分析报告</span>
      </button>
      <button className="flex items-center justify-center p-2.5 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700 transition-all">
      <span className="material-symbols-outlined text-[20px]">refresh</span>
      </button>
      </div>
      </div>
      </div>
    </>
  )
}
