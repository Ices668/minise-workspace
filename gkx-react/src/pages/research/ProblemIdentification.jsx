// Source: gkx-prototype/problem-identification.html
// Shell stripped: ONLY page content rendered inside Layout <Outlet />.

export default function ProblemIdentification() {
  return (
    <>
      <main className="max-w-7xl mx-auto px-6 py-8">
      {/* Breadcrumbs */}
      <nav className="flex items-center gap-2 mb-6 text-sm font-medium">
      <a className="text-primary hover:opacity-80" href="#">新型高端智库系统</a>
      <span className="text-slate-400 dark:text-slate-600 material-symbols-outlined text-sm">chevron_right</span>
      <a className="text-primary hover:opacity-80" href="#">基础研究智能决策</a>
      <span className="text-slate-400 dark:text-slate-600 material-symbols-outlined text-sm">chevron_right</span>
      <a className="text-primary hover:opacity-80" href="#">基础研究问题清单</a>
      <span className="text-slate-400 dark:text-slate-600 material-symbols-outlined text-sm">chevron_right</span>
      <span className="text-slate-600 dark:text-slate-400">问题识别与清单研发</span>
      </nav>
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
      <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">问题识别与清单研发</h1>
      <div className="flex items-center gap-3">
      <button className="flex items-center gap-2 bg-primary text-white px-5 py-2.5 rounded-lg font-semibold hover:opacity-90 transition-all">
      <span className="material-symbols-outlined text-[20px]">add</span>
      <span>新建问题清单</span>
      </button>
      <button className="flex items-center gap-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 px-5 py-2.5 rounded-lg font-semibold hover:bg-slate-50 dark:hover:bg-slate-700 transition-all">
      <span className="material-symbols-outlined text-[20px]">ios_share</span>
      <span>批量导出</span>
      </button>
      <button className="p-2.5 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-600 dark:text-slate-300 hover:text-primary transition-all">
      <span className="material-symbols-outlined block">refresh</span>
      </button>
      </div>
      </div>
      </main>
    </>
  )
}
