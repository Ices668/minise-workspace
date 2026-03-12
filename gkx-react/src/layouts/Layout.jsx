import { useEffect } from 'react'
import { Link, Outlet } from 'react-router-dom'

import { setActiveNavItem, toggleGroup } from '../runtime/strategyShell.js'

// Layout copied 1:1 from gkx-prototype/strategy-shell.html (sidebar + top header)
export default function Layout() {
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
            <div className="group-children overflow-hidden" style={{ maxHeight: 0, transition: 'max-height .25s ease' }}>
              <Link
                to="/strategy/entity-list.html"
                className="flex items-center pl-12 pr-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#0d9488] rounded-lg nav-item"
                data-file="entity-list.html"
                style={{ textDecoration: 'none' }}
              >
                科技实体清单
              </Link>
              <Link
                to="/strategy/frontier-tech.html"
                className="flex items-center pl-12 pr-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#0d9488] rounded-lg nav-item"
                data-file="frontier-tech.html"
                style={{ textDecoration: 'none' }}
              >
                颠覆性与前沿技术分析
              </Link>
              <Link
                to="/strategy/media-focus.html"
                className="flex items-center pl-12 pr-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#0d9488] rounded-lg nav-item"
                data-file="media-focus.html"
                style={{ textDecoration: 'none' }}
              >
                媒体聚焦
              </Link>
            </div>
          </div>

          <div className="nav-group">
            <button
              onClick={(e) => toggleGroup(e.currentTarget)}
              className="w-full flex items-center gap-3 px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 rounded-lg transition-colors"
            >
              <span className="material-symbols-outlined text-xl text-slate-400">hub</span>
              <span className="flex-1 text-left">技术体系分析</span>
              <span className="material-symbols-outlined text-sm text-slate-400 expand-icon">expand_more</span>
            </button>
            <div className="group-children overflow-hidden" style={{ maxHeight: 0, transition: 'max-height .25s ease' }}>
              <Link
                to="/strategy/tech-system.html"
                className="flex items-center pl-12 pr-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#0d9488] rounded-lg nav-item"
                data-file="tech-system.html"
                style={{ textDecoration: 'none' }}
              >
                技术体系
              </Link>
              <Link
                to="/strategy/paper-dashboard.html"
                className="flex items-center pl-12 pr-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#0d9488] rounded-lg nav-item"
                data-file="paper-dashboard.html"
                style={{ textDecoration: 'none' }}
              >
                论文分析
              </Link>
              <Link
                to="/strategy/patent.html"
                className="flex items-center pl-12 pr-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#0d9488] rounded-lg nav-item"
                data-file="patent.html"
                style={{ textDecoration: 'none' }}
              >
                专利分析
              </Link>
              <Link
                to="/strategy/project-stats.html"
                className="flex items-center pl-12 pr-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#0d9488] rounded-lg nav-item"
                data-file="project-stats.html"
                style={{ textDecoration: 'none' }}
              >
                科研项目分析
              </Link>
              <Link
                to="/strategy/social-network-import.html"
                className="flex items-center pl-12 pr-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#0d9488] rounded-lg nav-item"
                data-file="social-network-import.html"
                style={{ textDecoration: 'none' }}
              >
                社会网络分析
              </Link>
            </div>
          </div>

          <div className="nav-group">
            <button
              onClick={(e) => toggleGroup(e.currentTarget)}
              className="w-full flex items-center gap-3 px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 rounded-lg transition-colors"
            >
              <span className="material-symbols-outlined text-xl text-slate-400">trending_up</span>
              <span className="flex-1 text-left">技术趋势分析</span>
              <span className="material-symbols-outlined text-sm text-slate-400 expand-icon">expand_more</span>
            </button>
            <div className="group-children overflow-hidden" style={{ maxHeight: 0, transition: 'max-height .25s ease' }}>
              <Link
                to="/strategy/clustering-task.html"
                className="flex items-center pl-12 pr-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#0d9488] rounded-lg nav-item"
                data-file="clustering-task.html"
                style={{ textDecoration: 'none' }}
              >
                聚类分析
              </Link>
              <Link
                to="/strategy/common-network-task.html"
                className="flex items-center pl-12 pr-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#0d9488] rounded-lg nav-item"
                data-file="common-network-task.html"
                style={{ textDecoration: 'none' }}
              >
                共性网络分析
              </Link>
              <Link
                to="/strategy/tech-trend.html"
                className="flex items-center pl-12 pr-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#0d9488] rounded-lg nav-item"
                data-file="tech-trend.html"
                style={{ textDecoration: 'none' }}
              >
                技术趋势分析
              </Link>
              <Link
                to="/strategy/tech-alert.html"
                className="flex items-center pl-12 pr-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#0d9488] rounded-lg nav-item"
                data-file="tech-alert.html"
                style={{ textDecoration: 'none' }}
              >
                技术动态预警
              </Link>
            </div>
          </div>

          <div className="nav-group">
            <button
              onClick={(e) => toggleGroup(e.currentTarget)}
              className="w-full flex items-center gap-3 px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 rounded-lg transition-colors"
            >
              <span className="material-symbols-outlined text-xl text-slate-400">route</span>
              <span className="flex-1 text-left">领域技术线路</span>
              <span className="material-symbols-outlined text-sm text-slate-400 expand-icon">expand_more</span>
            </button>
            <div className="group-children overflow-hidden" style={{ maxHeight: 0, transition: 'max-height .25s ease' }}>
              <Link
                to="/strategy/delphi.html"
                className="flex items-center pl-12 pr-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#0d9488] rounded-lg nav-item"
                data-file="delphi.html"
                style={{ textDecoration: 'none' }}
              >
                德尔菲问卷
              </Link>
              <Link
                to="/strategy/tech-roadmap.html"
                className="flex items-center pl-12 pr-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#0d9488] rounded-lg nav-item"
                data-file="tech-roadmap.html"
                style={{ textDecoration: 'none' }}
              >
                技术发展线路
              </Link>
            </div>
          </div>

          <div className="nav-group">
            <button
              onClick={(e) => toggleGroup(e.currentTarget)}
              className="w-full flex items-center gap-3 px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 rounded-lg transition-colors"
            >
              <span className="material-symbols-outlined text-xl text-slate-400">description</span>
              <span className="flex-1 text-left">战略咨询报告</span>
              <span className="material-symbols-outlined text-sm text-slate-400 expand-icon">expand_more</span>
            </button>
            <div className="group-children overflow-hidden" style={{ maxHeight: 0, transition: 'max-height .25s ease' }}>
              <Link
                to="/strategy/strategy-shell.html"
                className="flex items-center pl-12 pr-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#0d9488] rounded-lg nav-item"
                data-file="strategy-shell.html"
                style={{ textDecoration: 'none' }}
              >
                研究报告管理
              </Link>
              <Link
                to="/strategy/insight-publish.html"
                className="flex items-center pl-12 pr-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#0d9488] rounded-lg nav-item"
                data-file="insight-publish.html"
                style={{ textDecoration: 'none' }}
              >
                洞察报告发布
              </Link>
              <Link
                to="/strategy/hot-analysis.html"
                className="flex items-center pl-12 pr-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#0d9488] rounded-lg nav-item"
                data-file="hot-analysis.html"
                style={{ textDecoration: 'none' }}
              >
                热点分析
              </Link>
              <Link
                to="/strategy/report-generation.html"
                className="flex items-center pl-12 pr-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#0d9488] rounded-lg nav-item"
                data-file="report-generation.html"
                style={{ textDecoration: 'none' }}
              >
                战略咨询报告生成
              </Link>
            </div>
          </div>

          <div className="nav-group">
            <button
              onClick={(e) => toggleGroup(e.currentTarget)}
              className="w-full flex items-center gap-3 px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 rounded-lg transition-colors"
            >
              <span className="material-symbols-outlined text-xl text-slate-400">folder_special</span>
              <span className="flex-1 text-left">战略咨询成果</span>
              <span className="material-symbols-outlined text-sm text-slate-400 expand-icon">expand_more</span>
            </button>
            <div className="group-children overflow-hidden" style={{ maxHeight: 0, transition: 'max-height .25s ease' }}>
              <Link
                to="/strategy/strategy-cases.html"
                className="flex items-center pl-12 pr-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#0d9488] rounded-lg nav-item"
                data-file="strategy-cases.html"
                style={{ textDecoration: 'none' }}
              >
                战略咨询案例展示
              </Link>
            </div>
          </div>

          <div className="nav-group">
            <button
              onClick={(e) => toggleGroup(e.currentTarget)}
              className="w-full flex items-center gap-3 px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 rounded-lg transition-colors"
            >
              <span className="material-symbols-outlined text-xl text-slate-400">query_stats</span>
              <span className="flex-1 text-left">智能问数</span>
              <span className="material-symbols-outlined text-sm text-slate-400 expand-icon">expand_more</span>
            </button>
            <div className="group-children overflow-hidden" style={{ maxHeight: 0, transition: 'max-height .25s ease' }}>
              <Link
                to="/strategy/analysis-start.html"
                className="flex items-center pl-12 pr-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#0d9488] rounded-lg nav-item"
                data-file="analysis-start.html"
                style={{ textDecoration: 'none' }}
              >
                开始分析
              </Link>
              <Link
                to="/strategy/case-share.html"
                className="flex items-center pl-12 pr-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#0d9488] rounded-lg nav-item"
                data-file="case-share.html"
                style={{ textDecoration: 'none' }}
              >
                案例分享
              </Link>
              <Link
                to="/strategy/multi-source-data.html"
                className="flex items-center pl-12 pr-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#0d9488] rounded-lg nav-item"
                data-file="multi-source-data.html"
                style={{ textDecoration: 'none' }}
              >
                多源数据接入
              </Link>
              <Link
                to="/strategy/data-dashboard.html"
                className="flex items-center pl-12 pr-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#0d9488] rounded-lg nav-item"
                data-file="data-dashboard.html"
                style={{ textDecoration: 'none' }}
              >
                数据看板显示
              </Link>
              <Link
                to="/strategy/report-gen-ai.html"
                className="flex items-center pl-12 pr-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#0d9488] rounded-lg nav-item"
                data-file="report-gen-ai.html"
                style={{ textDecoration: 'none' }}
              >
                一键报告生成
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
