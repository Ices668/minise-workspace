import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  // 1:1 structure from gkx-prototype/home.html.
  // Only changes: SPA routing via Link + small state for search icon color.
  const [isSearchFocused, setIsSearchFocused] = useState(false)

  const searchIconClass = useMemo(() => {
    return `absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none ${
      isSearchFocused ? 'text-primary' : 'text-slate-400'
    }`
  }, [isSearchFocused])

  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-slate-100 min-h-screen flex flex-col">
      <header className="sticky top-0 z-50 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 px-6 py-3">
        <div className="max-w-[1440px] mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="bg-primary text-white p-2 rounded-lg flex items-center justify-center">
              <span className="material-symbols-outlined text-2xl">insights</span>
            </div>
            <h1 className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">GKX 智能决策平台</h1>
          </div>

          <div className="hidden md:flex flex-1 max-w-md mx-8">
            <div className="relative w-full group">
              <div className={searchIconClass}>
                <span className="material-symbols-outlined text-xl">search</span>
              </div>
              <input
                className="block w-full pl-11 pr-4 py-2 bg-slate-100 dark:bg-slate-800 border-none rounded-full text-sm placeholder-slate-500 focus:ring-2 focus:ring-primary/20 transition-all"
                placeholder="搜索功能、报告或数据集..."
                type="text"
                onFocus={() => setIsSearchFocused(true)}
                onBlur={() => setIsSearchFocused(false)}
              />
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button className="p-2 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors relative">
              <span className="material-symbols-outlined">notifications</span>
              <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white dark:border-slate-900"></span>
            </button>
            <button className="p-2 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors">
              <span className="material-symbols-outlined">help</span>
            </button>
            <div className="h-8 w-[1px] bg-slate-200 dark:bg-slate-700 mx-2"></div>
            <div className="flex items-center gap-3 pl-2 cursor-pointer group">
              <div className="text-right hidden sm:block">
                <p className="text-xs font-semibold text-slate-900 dark:text-slate-100">管理员用户</p>
                <p className="text-[10px] text-slate-500">超级管理权限</p>
              </div>
              <div
                className="w-10 h-10 rounded-full bg-slate-200 dark:bg-slate-700 overflow-hidden border-2 border-primary/20 group-hover:border-primary transition-all shadow-sm"
                data-alt="User profile avatar of a professional administrator"
                style={{ backgroundImage: "url('/gkx/assets/75410cc6c73fa075.bin')" }}
              ></div>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-grow flex flex-col items-center py-16 px-6 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full opacity-30 pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/10 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-secondary/10 rounded-full blur-[120px]"></div>
        </div>

        <div className="text-center mb-16 relative z-10">
          <h2 className="text-4xl font-extrabold text-slate-900 dark:text-white mb-4 tracking-tight">选择系统</h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto font-medium">
            欢迎回来，GKX 智能决策平台为您提供全方位的战略与科研决策支持。请选择要进入的业务系统。
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full max-w-[1200px] relative z-10">
          <div className="group bg-white dark:bg-slate-900 rounded-xl p-10 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] border border-slate-100 dark:border-slate-800 hover:shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] hover:border-secondary/30 transition-all duration-300 relative overflow-hidden flex flex-col">
            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
              <span className="material-symbols-outlined text-[120px]">auto_graph</span>
            </div>
            <div className="mb-8">
              <div className="w-16 h-16 bg-secondary/10 text-secondary rounded-xl flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-4xl">strategy</span>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">战略咨询智能支持</h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                面向战略研究与咨询成果管理的一体化工作台。提供全流程自动化报告生成与深度案例分析支持。
              </p>
              <div className="flex flex-wrap gap-2 mb-8">
                <span className="px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-xs font-semibold rounded-full border border-slate-200 dark:border-slate-700">
                  研究需求
                </span>
                <span className="px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-xs font-semibold rounded-full border border-slate-200 dark:border-slate-700">
                  技术体系
                </span>
                <span className="px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-xs font-semibold rounded-full border border-slate-200 dark:border-slate-700">
                  报告生成
                </span>
                <span className="px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-xs font-semibold rounded-full border border-slate-200 dark:border-slate-700">
                  成果案例
                </span>
              </div>
            </div>

            <div className="mt-auto flex flex-col sm:flex-row gap-4">
              <Link
                to="/strategy/entity-list.html"
                className="flex-1 bg-secondary hover:bg-secondary/90 text-white font-bold py-3 px-6 rounded-lg transition-all flex items-center justify-center gap-2 group/btn no-underline"
                style={{ textDecoration: 'none' }}
              >
                <span>进入系统</span>
                <span className="material-symbols-outlined text-xl group-hover/btn:translate-x-1 transition-transform">
                  arrow_right_alt
                </span>
              </Link>
              <button className="flex-1 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 font-bold py-3 px-6 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700 transition-all">
                查看简介
              </button>
            </div>
          </div>

          <div className="group bg-white dark:bg-slate-900 rounded-xl p-10 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] border border-slate-100 dark:border-slate-800 hover:shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] hover:border-primary/30 transition-all duration-300 relative overflow-hidden flex flex-col">
            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
              <span className="material-symbols-outlined text-[120px]">hub</span>
            </div>
            <div className="mb-8">
              <div className="w-16 h-16 bg-primary/10 text-primary rounded-xl flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-4xl">science</span>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">基础研究智能决策</h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                面向基础研究分析与决策支持的数据与模型平台。集成海量数据源，实现多维度的预警监测。
              </p>
              <div className="flex flex-wrap gap-2 mb-8">
                <span className="px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-xs font-semibold rounded-full border border-slate-200 dark:border-slate-700">
                  课题分析
                </span>
                <span className="px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-xs font-semibold rounded-full border border-slate-200 dark:border-slate-700">
                  趋势洞察
                </span>
                <span className="px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-xs font-semibold rounded-full border border-slate-200 dark:border-slate-700">
                  预警监测
                </span>
                <span className="px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-xs font-semibold rounded-full border border-slate-200 dark:border-slate-700">
                  知识图谱
                </span>
              </div>
            </div>

            <div className="mt-auto flex flex-col sm:flex-row gap-4">
              <Link
                to="/research/problem-identification.html"
                className="flex-1 bg-primary hover:bg-primary/90 text-white font-bold py-3 px-6 rounded-lg transition-all flex items-center justify-center gap-2 group/btn no-underline"
                style={{ textDecoration: 'none' }}
              >
                <span>进入系统</span>
                <span className="material-symbols-outlined text-xl group-hover/btn:translate-x-1 transition-transform">
                  arrow_right_alt
                </span>
              </Link>
              <button className="flex-1 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 font-bold py-3 px-6 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700 transition-all">
                查看简介
              </button>
            </div>
          </div>
        </div>

        <div className="mt-16 w-full max-w-[1200px] grid grid-cols-2 md:grid-cols-4 gap-6 px-4">
          <div className="text-center p-4">
            <p className="text-3xl font-bold text-secondary">2,840+</p>
            <p className="text-sm text-slate-500 mt-1">战略报告总数</p>
          </div>
          <div className="text-center p-4">
            <p className="text-3xl font-bold text-primary">15,200+</p>
            <p className="text-sm text-slate-500 mt-1">课题分析模型</p>
          </div>
          <div className="text-center p-4">
            <p className="text-3xl font-bold text-slate-700 dark:text-slate-300">99.9%</p>
            <p className="text-sm text-slate-500 mt-1">系统运行稳定性</p>
          </div>
          <div className="text-center p-4">
            <p className="text-3xl font-bold text-slate-700 dark:text-slate-300">24/7</p>
            <p className="text-sm text-slate-500 mt-1">实时数据监测</p>
          </div>
        </div>
      </main>

      <footer className="mt-auto py-10 border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50">
        <div className="max-w-[1440px] mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-slate-400 text-sm font-medium">© 2024 GKX 智能决策平台 | 业务单位：国家基础研究决策支持中心</div>
          <div className="flex items-center gap-6 text-slate-400 text-sm">
            <a className="hover:text-primary transition-colors" href="#" style={{ textDecoration: 'none' }}>
              隐私政策
            </a>
            <a className="hover:text-primary transition-colors" href="#" style={{ textDecoration: 'none' }}>
              服务条款
            </a>
            <span className="px-2 py-0.5 bg-slate-100 dark:bg-slate-800 rounded text-[10px] font-bold">V 2.4.0 Stable</span>
          </div>
        </div>
      </footer>

      <style>{"body { font-family: \"Public Sans\", \"Noto Sans SC\", sans-serif; } .glass-effect { background: rgba(255, 255, 255, 0.8); backdrop-filter: blur(8px); }"}</style>
    </div>
  )
}
