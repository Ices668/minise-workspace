// Source: gkx-prototype/shenzhen-list.html
// Shell stripped: ONLY page content rendered inside Layout <Outlet />.

export default function ShenzhenList() {
  return (
    <>
      <div className="max-w-[1440px] mx-auto px-6 py-8">
      {/* Breadcrumbs */}
      <nav className="flex items-center gap-2 mb-6 text-sm">
      <a className="text-accent-teal hover:text-primary transition-colors" href="#">新型高端智库系统</a>
      <span className="text-slate-400 material-symbols-outlined text-xs">chevron_right</span>
      <a className="text-accent-teal hover:text-primary transition-colors" href="#">基础研究智能决策</a>
      <span className="text-slate-400 material-symbols-outlined text-xs">chevron_right</span>
      <a className="text-accent-teal hover:text-primary transition-colors" href="#">基础研究部署清单</a>
      <span className="text-slate-400 material-symbols-outlined text-xs">chevron_right</span>
      <span className="font-medium text-slate-900 dark:text-slate-100">深圳市基础研究部署清单</span>
      </nav>
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
      <h1 className="text-3xl font-black tracking-tight text-slate-900 dark:text-slate-100">深圳市基础研究部署清单</h1>
      <div className="flex flex-wrap gap-3">
      <button className="flex items-center gap-2 px-5 py-2.5 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg font-semibold text-slate-700 dark:text-slate-200 hover:bg-slate-50 transition-all">
      <span className="material-symbols-outlined text-lg">description</span>
      <span>生成部署报告</span>
      </button>
      <button className="flex items-center gap-2 px-5 py-2.5 bg-primary text-white rounded-lg font-semibold hover:opacity-90 transition-all shadow-sm">
      <span className="material-symbols-outlined text-lg">add_circle</span>
      <span>新建项目录入</span>
      </button>
      <button className="flex items-center justify-center w-11 h-11 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-50 transition-all">
      <span className="material-symbols-outlined">refresh</span>
      </button>
      </div>
      </div>
      </div>
    </>
  )
}
