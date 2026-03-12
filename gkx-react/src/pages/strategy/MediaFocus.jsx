// Source: gkx-prototype/media-focus.html
// Shell stripped: ONLY page content rendered inside Layout <Outlet />.

export default function MediaFocus() {
  return (
    <>
      <div className="relative flex min-h-screen flex-col overflow-x-hidden">
      <div className="flex h-full grow flex-col">
      {/* Main Content Area */}
      <div className="mx-auto flex w-full max-w-[1440px] flex-1 flex-col px-6 py-8 md:px-10 lg:px-16">
      {/* Breadcrumbs */}
      <nav className="flex flex-wrap items-center gap-2 mb-6">
      <a className="text-primary/80 hover:text-primary text-sm font-medium transition-colors" href="#">新型高端智库系统</a>
      <span className="text-slate-400 text-sm">/</span>
      <a className="text-primary/80 hover:text-primary text-sm font-medium transition-colors" href="#">战略咨询智能支持</a>
      <span className="text-slate-400 text-sm">/</span>
      <a className="text-primary/80 hover:text-primary text-sm font-medium transition-colors" href="#">研究需求分析</a>
      <span className="text-slate-400 text-sm">/</span>
      <span className="text-slate-900 dark:text-slate-100 text-sm font-semibold">媒体聚焦</span>
      </nav>
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-8">
      <h1 className="text-4xl font-black tracking-tight text-slate-900 dark:text-slate-100">媒体聚焦</h1>
      <div className="flex flex-wrap gap-3">
      <button className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-primary/10 text-primary border border-primary/20 rounded-lg text-sm font-bold hover:bg-primary/20 transition-all">
      <span className="material-symbols-outlined text-lg">settings_input_antenna</span>
      <span>突发监测配置</span>
      </button>
      <button className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-primary/10 text-primary border border-primary/20 rounded-lg text-sm font-bold hover:bg-primary/20 transition-all">
      <span className="material-symbols-outlined text-lg">description</span>
      <span>生成决策简报</span>
      </button>
      <button className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-primary text-white rounded-lg text-sm font-bold hover:bg-primary/90 shadow-lg shadow-primary/20 transition-all">
      <span className="material-symbols-outlined text-lg">download</span>
      <span>导出</span>
      </button>
      </div>
      </div>
      </div>
      </div>
      </div>
    </>
  )
}
