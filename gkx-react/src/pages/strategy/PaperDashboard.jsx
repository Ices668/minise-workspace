// Source: gkx-prototype/paper-dashboard.html
// Shell stripped: ONLY page content rendered inside Layout <Outlet />.

export default function PaperDashboard() {
  return (
    <>
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
      </div>
    </>
  )
}
