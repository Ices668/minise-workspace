// Source: gkx-prototype/tech-system.html
// Shell stripped: ONLY page content rendered inside Layout <Outlet />.

export default function TechSystem() {
  return (
    <>
      <div className="max-w-[1200px] mx-auto px-6 py-8">
      <nav className="flex items-center gap-2 mb-6 text-sm">
      <a className="text-primary hover:underline" href="#">新型高端智库系统</a>
      <span className="text-slate-400">/</span>
      <a className="text-primary hover:underline" href="#">战略咨询智能支持</a>
      <span className="text-slate-400">/</span>
      <a className="text-primary hover:underline" href="#">技术体系分析</a>
      <span className="text-slate-400">/</span>
      <span className="text-slate-500">技术体系</span>
      </nav>
      <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
      <h1 className="text-3xl font-black tracking-tight text-slate-900 dark:text-white">技术体系</h1>
      <div className="flex items-center gap-3">
      <button className="bg-primary text-white px-5 py-2.5 rounded-lg font-bold flex items-center gap-2 hover:bg-primary/90 transition-colors shadow-sm">
      <span className="material-symbols-outlined text-[20px]">add</span>
      <span>新建体系</span>
      </button>
      <button className="bg-primary/10 text-primary px-5 py-2.5 rounded-lg font-bold flex items-center gap-2 hover:bg-primary/20 transition-colors">
      <span className="material-symbols-outlined text-[20px]">ios_share</span>
      <span>批量导出</span>
      </button>
      <button className="bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 p-2.5 rounded-lg hover:bg-slate-300 dark:hover:bg-slate-700 transition-colors">
      <span className="material-symbols-outlined text-[20px]">refresh</span>
      </button>
      </div>
      </header>
      </div>
    </>
  )
}
