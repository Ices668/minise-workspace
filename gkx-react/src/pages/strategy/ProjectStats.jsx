// Source: gkx-prototype/project-stats.html
// Shell stripped: ONLY page content rendered inside Layout <Outlet />.

export default function ProjectStats() {
  return (
    <>
      <div className="layout-container flex h-full grow flex-col">
      <div className="max-w-[1200px] mx-auto w-full px-6 py-8">
      <nav className="flex items-center gap-2 mb-6 text-sm font-medium">
      <a className="text-primary hover:opacity-80" href="#">新型高端智库系统</a>
      <span className="text-slate-400">/</span>
      <a className="text-primary hover:opacity-80" href="#">战略咨询智能支持</a>
      <span className="text-slate-400">/</span>
      <a className="text-primary hover:opacity-80" href="#">技术体系分析</a>
      <span className="text-slate-400">/</span>
      <span className="text-slate-600">科研项目分析</span>
      </nav>
      <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
      <h1 className="text-2xl font-black tracking-tight text-slate-900">科研项目分析</h1>
      <div className="flex items-center gap-3">
      <button className="flex items-center gap-2 px-5 py-2.5 bg-primary text-white rounded-xl font-bold hover:opacity-90 transition-all shadow-sm">
      <span className="material-symbols-outlined text-[20px]">add</span>
      <span>新增分析任务</span>
      </button>
      <button className="flex items-center gap-2 px-5 py-2.5 bg-white text-slate-700 border border-slate-200 rounded-xl font-bold hover:bg-slate-50 transition-all shadow-sm">
      <span className="material-symbols-outlined text-[20px]">download</span>
      <span>导出数据</span>
      </button>
      <button className="flex items-center justify-center w-11 h-11 bg-white text-slate-700 border border-slate-200 rounded-xl hover:bg-slate-50 transition-all shadow-sm">
      <span className="material-symbols-outlined">refresh</span>
      </button>
      </div>
      </div>
      </div>
      </div>
    </>
  )
}
