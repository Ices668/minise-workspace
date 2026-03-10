import { Outlet, useNavigate, useLocation } from 'react-router-dom'
import { useState } from 'react'

interface NavItem {
  label: string
  icon: string
  path?: string
  children?: { label: string; path: string }[]
}

const strategyNav: NavItem[] = [
  { label: '仪表盘概览', icon: 'dashboard', path: '/strategy/entity-list' },
  {
    label: '研究需求分析',
    icon: 'search_check',
    children: [
      { label: '科技实体清单', path: '/strategy/entity-list' },
      { label: '前沿技术库', path: '/strategy/tech-system' },
      { label: '媒体动态监测', path: '/strategy/consulting-report' },
    ],
  },
  { label: '技术体系分析', icon: 'hub', path: '/strategy/tech-system' },
  { label: '技术趋势预测', icon: 'trending_up', path: '/strategy/cases' },
  { label: '战略咨询报告', icon: 'description', path: '/strategy/report-generation' },
  { label: '洞察报告发布', icon: 'publish', path: '/strategy/insight-publish' },
  { label: '战略咨询案例', icon: 'folder_special', path: '/strategy/cases' },
]

export default function StrategyLayout() {
  const navigate = useNavigate()
  const location = useLocation()
  const [expandedItems, setExpandedItems] = useState<string[]>(['研究需求分析'])

  const toggleExpand = (label: string) => {
    setExpandedItems(prev =>
      prev.includes(label) ? prev.filter(i => i !== label) : [...prev, label]
    )
  }

  const isActive = (path: string) => location.pathname === path

  return (
    <div className="flex h-screen w-full bg-background-main overflow-hidden">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-border-light flex flex-col z-30 shrink-0">
        {/* Logo */}
        <div className="p-6 flex items-center gap-2">
          <div className="w-8 h-8 bg-primary-blue rounded-lg flex items-center justify-center">
            <span className="material-symbols-outlined text-white text-xl">insights</span>
          </div>
          <span className="font-bold text-lg text-nav-text tracking-tight">GKX</span>
        </div>

        {/* Nav */}
        <nav className="flex-1 px-0 py-4 overflow-y-auto space-y-1">
          <div className="px-6 py-2">
            <span className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">战略咨询体系</span>
          </div>
          {strategyNav.map(item => (
            <div key={item.label}>
              {item.children ? (
                <>
                  <button
                    onClick={() => toggleExpand(item.label)}
                    className="w-full flex items-center gap-3 px-6 py-3 text-nav-text hover:bg-slate-50 transition-colors"
                  >
                    <span className="material-symbols-outlined text-xl text-slate-400">{item.icon}</span>
                    <span className="text-sm font-medium flex-1 text-left">{item.label}</span>
                    <span className="material-symbols-outlined text-sm text-slate-400">
                      {expandedItems.includes(item.label) ? 'expand_less' : 'expand_more'}
                    </span>
                  </button>
                  {expandedItems.includes(item.label) && (
                    <div className="bg-white">
                      {item.children.map(child => (
                        <button
                          key={child.path}
                          onClick={() => navigate(child.path)}
                          className={`w-full flex items-center gap-3 pl-14 py-3 text-sm font-medium transition-colors text-left ${
                            isActive(child.path)
                              ? 'active-nav-item font-semibold'
                              : 'text-nav-text hover:text-primary-blue'
                          }`}
                        >
                          <span>{child.label}</span>
                        </button>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <button
                  onClick={() => item.path && navigate(item.path)}
                  className={`w-full flex items-center gap-3 px-6 py-3 transition-colors text-left ${
                    item.path && isActive(item.path)
                      ? 'active-nav-item font-semibold'
                      : 'text-nav-text hover:bg-slate-50'
                  }`}
                >
                  <span className="material-symbols-outlined text-xl">{item.icon}</span>
                  <span className="text-sm font-medium">{item.label}</span>
                </button>
              )}
            </div>
          ))}
        </nav>

        {/* User Info */}
        <div className="p-4 border-t border-border-light">
          <div className="bg-[#F0F7FF] rounded-xl p-3 flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-primary-blue/20 flex items-center justify-center text-primary-blue font-bold">
              <span className="material-symbols-outlined">manage_accounts</span>
            </div>
            <div className="overflow-hidden">
              <p className="text-sm font-bold text-slate-800 truncate">系统管理员</p>
              <p className="text-[11px] text-slate-500">ID: GKX-0822</p>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Area */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Top Header */}
        <header className="h-16 bg-white border-b border-border-light flex items-center justify-between px-8 shrink-0">
          <div className="flex items-center gap-4">
            <h2 className="text-base font-bold text-slate-800">战略咨询智能支持</h2>
          </div>
          <div className="flex-1 max-w-lg px-8">
            <div className="relative group">
              <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-lg group-focus-within:text-primary-blue transition-colors">search</span>
              <input
                className="w-full bg-slate-100 border-none rounded-full py-2 pl-12 pr-4 text-sm focus:ring-2 focus:ring-primary-blue/20 focus:bg-white transition-all"
                placeholder="搜索实体、技术、专利或报告..."
                type="text"
              />
            </div>
          </div>
          <div className="flex items-center gap-5">
            <button className="text-slate-500 hover:text-primary-blue relative transition-colors">
              <span className="material-symbols-outlined">notifications</span>
              <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
            </button>
            <button className="text-slate-500 hover:text-primary-blue transition-colors">
              <span className="material-symbols-outlined">settings</span>
            </button>
            <div className="h-8 w-px bg-slate-200"></div>
            <div className="flex items-center gap-3 cursor-pointer group">
              <div className="w-9 h-9 rounded-full bg-slate-200 overflow-hidden border border-slate-100 shadow-sm transition-transform group-hover:scale-105">
                <img
                  alt="User Avatar"
                  className="w-full h-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuA7Rci2wDZdno5YFKr4rMjgs-dxvxVs_6A1pZSpKu8jL5lsc-8lR5r8n08uFMOumhqQmy3bJWOTYlRAvF5qTspyoDutJQKjuBltHrSKRBJjyxRQbgOvBDnOeczlzBGYAQfksnTNlVWex2ZVS8S8pfBq1xYc_z7qeJqu6KViOOWAQzjUoNHd5QH_2a8T9pSj_yrIpjB-i_OwROjkKjH3SevtTB1vWStqQFB2QcMUg3dc6NdZx7eoWf5UpVrTOccnIPdINWT53EEUF24N"
                />
              </div>
              <span className="text-sm font-semibold text-slate-700">张志强</span>
              <span className="material-symbols-outlined text-slate-400 text-sm">keyboard_arrow_down</span>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  )
}
