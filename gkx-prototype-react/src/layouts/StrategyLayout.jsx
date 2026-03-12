import { useEffect } from 'react'
import { Link } from 'react-router-dom'

import { setActiveNavItem, toggleGroup } from '../runtime/gkxDom.js'

export default function StrategyLayout({ children }) {
  useEffect(() => {
    // Match the original prototype behavior.
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
            to="/"
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
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">战略咨询体系</span>
        </div>

        <nav className="flex-1 px-2 py-2 overflow-y-auto space-y-0.5">
          <div className="nav-group">
            <button
              onClick={(e) => toggleGroup(e.currentTarget)}
              className="w-full flex items-center gap-3 px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 rounded-lg transition-colors"
            >
              <span className="material-symbols-outlined text-xl text-slate-400">search_check</span>
              <span className="flex-1 text-left">研究需求分析</span>
              <span className="material-symbols-outlined text-sm text-slate-400 expand-icon">expand_more</span>
            </button>
            <div className="group-children overflow-hidden transition-all" style={{ maxHeight: 0 }}>
              <Link
                to="/strategy/entity-list"
                className="nav-item block px-10 py-2 text-[13px] text-slate-600 hover:bg-slate-50 rounded-lg"
                data-file="entity-list.html"
                style={{ textDecoration: 'none' }}
              >
                科技实体清单
              </Link>
              <Link
                to="/strategy/problem-identification"
                className="nav-item block px-10 py-2 text-[13px] text-slate-600 hover:bg-slate-50 rounded-lg"
                data-file="problem-identification.html"
                style={{ textDecoration: 'none' }}
              >
                问题识别
              </Link>
            </div>
          </div>

          <div className="nav-group">
            <button
              onClick={(e) => toggleGroup(e.currentTarget)}
              className="w-full flex items-center gap-3 px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 rounded-lg transition-colors"
            >
              <span className="material-symbols-outlined text-xl text-slate-400">account_tree</span>
              <span className="flex-1 text-left">技术体系</span>
              <span className="material-symbols-outlined text-sm text-slate-400 expand-icon">expand_more</span>
            </button>
            <div className="group-children overflow-hidden transition-all" style={{ maxHeight: 0 }}>
              <Link
                to="/strategy/tech-system"
                className="nav-item block px-10 py-2 text-[13px] text-slate-600 hover:bg-slate-50 rounded-lg"
                data-file="tech-system.html"
                style={{ textDecoration: 'none' }}
              >
                技术体系分析
              </Link>
            </div>
          </div>
        </nav>

        <div className="p-4 border-t border-slate-100">
          <div className="bg-slate-50 border border-slate-200 rounded-lg p-3">
            <div className="text-xs font-bold text-slate-700">系统状态</div>
            <div className="text-[11px] text-slate-500 mt-1">原型交互复刻模式</div>
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
            <h2 className="text-sm font-bold text-slate-800">战略咨询智能支持</h2>
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
                placeholder="搜索..."
                type="text"
              />
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button className="p-2 text-slate-500 hover:bg-slate-100 rounded-full">
              <span className="material-symbols-outlined">notifications</span>
            </button>
            <div
              className="w-8 h-8 rounded-full bg-slate-200"
              style={{ backgroundImage: "url('/gkx/assets/75410cc6c73fa075.bin')", backgroundSize: 'cover' }}
            />
          </div>
        </header>

        <div className="flex-1 min-w-0 overflow-auto">{children}</div>
      </div>

      <style>{`.active-nav-item{color:#1392ec!important;background:#e0f2fe;font-weight:600;border-radius:8px;}`}</style>
    </div>
  )
}
