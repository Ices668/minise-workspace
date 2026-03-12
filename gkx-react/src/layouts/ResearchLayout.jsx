import { useEffect } from 'react'
import { Link, Outlet } from 'react-router-dom'

import { setActiveNavItem, toggleGroup } from '../runtime/strategyShell.js'

// Reuse the same shell structure for Research for now.
// When we extract a dedicated research shell from prototypes, we can swap it here.
export default function ResearchLayout() {
  useEffect(() => {
    setActiveNavItem()
  })

  return (
    <div className="flex h-screen w-full bg-slate-50 overflow-hidden">
      <aside
        id="sidebar"
        className="w-64 bg-white border-r border-slate-200 flex flex-col z-30 shrink-0"
        style={{ minWidth: 256 }}
      >
        <div className="p-5 flex items-center gap-3 border-b border-slate-100">
          <div className="w-8 h-8 bg-[#0d9488] rounded-lg flex items-center justify-center">
            <span className="material-symbols-outlined text-white" style={{ fontSize: 20 }}>
              insights
            </span>
          </div>
          <span className="font-bold text-base text-slate-800">GKX</span>
          <Link
            to="/home"
            className="ml-auto text-slate-400 hover:text-slate-600"
            title="返回首页"
            style={{ textDecoration: 'none' }}
          >
            <span className="material-symbols-outlined" style={{ fontSize: 18 }}>
              home
            </span>
          </Link>
        </div>

        <div className="px-4 pt-4 pb-1">
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">基础研究体系</span>
        </div>

        <nav className="flex-1 px-2 py-2 overflow-y-auto space-y-0.5">
          <div className="nav-group">
            <button
              onClick={(e) => toggleGroup(e.currentTarget)}
              className="w-full flex items-center gap-3 px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 rounded-lg transition-colors"
            >
              <span className="material-symbols-outlined text-xl text-slate-400">biotech</span>
              <span className="flex-1 text-left">前沿与热点</span>
              <span className="material-symbols-outlined text-sm text-slate-400 expand-icon">expand_more</span>
            </button>
            <div className="group-children overflow-hidden" style={{ maxHeight: 0, transition: 'max-height .25s ease' }}>
              <Link
                to="/research/frontier-tech.html"
                className="flex items-center pl-12 pr-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#0d9488] rounded-lg nav-item"
                data-file="frontier-tech.html"
                style={{ textDecoration: 'none' }}
              >
                前沿技术监测
              </Link>
              <Link
                to="/research/hot-analysis.html"
                className="flex items-center pl-12 pr-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#0d9488] rounded-lg nav-item"
                data-file="hot-analysis.html"
                style={{ textDecoration: 'none' }}
              >
                热点分析
              </Link>
            </div>
          </div>

          <div className="nav-group">
            <button
              onClick={(e) => toggleGroup(e.currentTarget)}
              className="w-full flex items-center gap-3 px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 rounded-lg transition-colors"
            >
              <span className="material-symbols-outlined text-xl text-slate-400">dataset</span>
              <span className="flex-1 text-left">多源数据</span>
              <span className="material-symbols-outlined text-sm text-slate-400 expand-icon">expand_more</span>
            </button>
            <div className="group-children overflow-hidden" style={{ maxHeight: 0, transition: 'max-height .25s ease' }}>
              <Link
                to="/research/multi-source-data.html"
                className="flex items-center pl-12 pr-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#0d9488] rounded-lg nav-item"
                data-file="multi-source-data.html"
                style={{ textDecoration: 'none' }}
              >
                多源数据接入
              </Link>
              <Link
                to="/research/data-dashboard.html"
                className="flex items-center pl-12 pr-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#0d9488] rounded-lg nav-item"
                data-file="data-dashboard.html"
                style={{ textDecoration: 'none' }}
              >
                数据看板
              </Link>
            </div>
          </div>
        </nav>

        <div className="p-4 border-t border-slate-100">
          <div className="bg-slate-50 rounded-xl p-3 flex items-center gap-3">
            <div className="w-9 h-9 bg-[#0d9488] rounded-lg flex items-center justify-center">
              <span className="material-symbols-outlined text-white" style={{ fontSize: 18 }}>
                manage_accounts
              </span>
            </div>
            <div>
              <p className="text-xs font-bold text-slate-800">系统管理员</p>
              <p className="text-[10px] text-slate-500">ID: GKX-0822</p>
            </div>
          </div>
        </div>
      </aside>

      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        <header className="h-14 bg-white border-b border-slate-200 flex items-center justify-between px-6 shrink-0">
          <div className="flex items-center gap-4">
            <button
              onClick={() => {
                const s = document.getElementById('sidebar')
                if (!s) return
                s.style.display = s.style.display === 'none' ? 'flex' : 'none'
              }}
              className="p-1 text-slate-500 hover:bg-slate-100 rounded-lg"
            >
              <span className="material-symbols-outlined">menu</span>
            </button>
            <h2 className="text-sm font-bold text-slate-800">基础研究智能决策</h2>
          </div>
          <div className="flex-1 max-w-md mx-6">
            <div className="relative">
              <span
                className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                style={{ fontSize: 18 }}
              >
                search
              </span>
              <input
                className="w-full pl-9 pr-4 py-1.5 bg-slate-100 rounded-full text-sm placeholder-slate-400 outline-none border-none"
                placeholder="搜索功能、报告..."
                type="text"
              />
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button className="p-2 text-slate-500 hover:bg-slate-100 rounded-full relative">
              <span className="material-symbols-outlined" style={{ fontSize: 22 }}>
                notifications
              </span>
              <span className="absolute top-2 right-2 w-1.5 h-1.5 bg-red-500 rounded-full"></span>
            </button>
          </div>
        </header>

        <div className="flex-1 overflow-y-auto">
          <Outlet />
        </div>
      </div>

      <style>{`.active-nav-item{color:#1392ec!important;background:#e0f2fe;font-weight:600;border-radius:8px;}`}</style>
    </div>
  )
}
