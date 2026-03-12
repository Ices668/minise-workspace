// Source: gkx-prototype/frontier-tech.html
// Shell stripped: ONLY page content rendered inside Layout <Outlet />.

export default function FrontierTech() {
  return (
    <>
      <div className="max-w-[1200px] mx-auto px-6 py-8">
      {/* Breadcrumbs */}
      <nav className="flex items-center gap-2 mb-6 text-sm font-medium text-slate-500 dark:text-slate-400">
      <a className="hover:text-primary transition-colors" href="#">新型高端智库系统</a>
      <span className="material-symbols-outlined text-sm">chevron_right</span>
      <a className="hover:text-primary transition-colors" href="#">战略咨询智能支持</a>
      <span className="material-symbols-outlined text-sm">chevron_right</span>
      <a className="hover:text-primary transition-colors" href="#">研究需求分析</a>
      <span className="material-symbols-outlined text-sm">chevron_right</span>
      <span className="text-slate-900 dark:text-slate-100">颠覆性与前沿技术分析</span>
      </nav>
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
      <h1 className="text-3xl font-black tracking-tight text-slate-900 dark:text-white">颠覆性与前沿技术分析</h1>
      <div className="flex items-center gap-3">
      <button className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-sm font-bold text-slate-700 dark:text-slate-200 hover:bg-slate-50 transition-all shadow-sm">
      <span className="material-symbols-outlined text-lg">refresh</span>
      <span>刷新数据</span>
      </button>
      <button className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-sm font-bold text-slate-700 dark:text-slate-200 hover:bg-slate-50 transition-all shadow-sm">
      <span className="material-symbols-outlined text-lg">ios_share</span>
      <span>导出报告</span>
      </button>
      <button className="flex items-center gap-2 px-5 py-2 bg-primary text-white rounded-lg text-sm font-bold hover:opacity-90 transition-all shadow-md shadow-primary/20">
      <span className="material-symbols-outlined text-lg">add</span>
      <span>新建技术识别</span>
      </button>
      </div>
      </div>
      </div>
    </>
  )
}
