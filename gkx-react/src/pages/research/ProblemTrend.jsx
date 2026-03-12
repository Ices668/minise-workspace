// Source: gkx-prototype/problem-trend.html
// Shell stripped: ONLY page content rendered inside Layout <Outlet />.

export default function ProblemTrend() {
  return (
    <>
      <div className="min-h-screen p-6 max-w-[1440px] mx-auto">
      {/* Breadcrumbs */}
      <nav className="flex items-center gap-2 text-sm font-medium mb-6 text-slate-500">
      <a className="hover:text-primary transition-colors" href="#">新型高端智库系统</a>
      <span className="material-symbols-outlined text-sm">chevron_right</span>
      <a className="hover:text-primary transition-colors" href="#">基础研究智能决策</a>
      <span className="material-symbols-outlined text-sm">chevron_right</span>
      <a className="hover:text-primary transition-colors" href="#">基础研究问题清单</a>
      <span className="material-symbols-outlined text-sm">chevron_right</span>
      <span className="text-slate-900 font-bold">问题发展趋势分析</span>
      </nav>
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
      <h1 className="text-3xl font-black tracking-tight text-slate-900">问题发展趋势分析</h1>
      <div className="flex items-center gap-3">
      <button className="flex items-center gap-2 px-5 py-2.5 bg-primary/10 text-primary font-semibold rounded-lg hover:bg-primary/20 transition-all border border-primary/20">
      <span className="material-symbols-outlined text-[20px]">settings_suggest</span>
      <span>预测模型配置</span>
      </button>
      <button className="flex items-center gap-2 px-5 py-2.5 bg-primary text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-primary/30 transition-all">
      <span className="material-symbols-outlined text-[20px]">analytics</span>
      <span>生成趋势报告</span>
      </button>
      <button className="flex items-center gap-2 px-5 py-2.5 bg-white border border-slate-200 text-slate-700 font-semibold rounded-lg hover:bg-slate-50 transition-all">
      <span className="material-symbols-outlined text-[20px]">ios_share</span>
      <span>导出</span>
      </button>
      </div>
      </div>
      </div>
    </>
  )
}
