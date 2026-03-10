import { useNavigate } from 'react-router-dom'

export default function HomePage() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen flex flex-col bg-[#f6f7f8] font-display text-slate-900">
      {/* Top Header */}
      <header className="sticky top-0 z-50 bg-white border-b border-slate-200 px-6 py-3">
        <div className="max-w-[1440px] mx-auto flex items-center justify-between">
          {/* Left: Logo & Title */}
          <div className="flex items-center gap-3">
            <div className="bg-[#1392ec] text-white p-2 rounded-lg flex items-center justify-center">
              <span className="material-symbols-outlined" style={{ fontSize: '24px' }}>insights</span>
            </div>
            <h1 className="text-xl font-bold tracking-tight text-slate-900">GKX 智能决策平台</h1>
          </div>
          {/* Center: Search Bar */}
          <div className="hidden md:flex flex-1 max-w-md mx-8">
            <div className="relative w-full group">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
                <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>search</span>
              </div>
              <input
                className="block w-full pl-11 pr-4 py-2 bg-slate-100 border-none rounded-full text-sm placeholder-slate-500 outline-none focus:ring-2 focus:ring-[#1392ec]/20 transition-all"
                placeholder="搜索功能、报告或数据集..."
                type="text"
              />
            </div>
          </div>
          {/* Right: Action Icons */}
          <div className="flex items-center gap-2">
            <button className="p-2 text-slate-600 hover:bg-slate-100 rounded-full transition-colors relative">
              <span className="material-symbols-outlined" style={{ fontSize: '24px' }}>notifications</span>
              <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
            </button>
            <button className="p-2 text-slate-600 hover:bg-slate-100 rounded-full transition-colors">
              <span className="material-symbols-outlined" style={{ fontSize: '24px' }}>help</span>
            </button>
            <div className="h-8 w-[1px] bg-slate-200 mx-2"></div>
            <div className="flex items-center gap-3 pl-2 cursor-pointer group">
              <div className="text-right hidden sm:block">
                <p className="text-xs font-semibold text-slate-900">管理员用户</p>
                <p className="text-[10px] text-slate-500">超级管理权限</p>
              </div>
              <div
                className="w-10 h-10 rounded-full overflow-hidden border-2 border-[#1392ec]/20 group-hover:border-[#1392ec] transition-all shadow-sm bg-slate-200"
                style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAyjMP1t5wFzLTzq7P9GW0q-HvN6PCfnUzxFhn_AeBHU1U8kVGSNDsrqAsHlTb7K4wkqKMOrDPEr8nBJZq2ed5b-lPvaMOtllWxIQS51jRPpg2rRAOuAAfQx2Q6njeDrKW6goLp5-uiGdSzn1kwyd-J7L_JdMa9BDd0DO6fN-yQDYJyuNJkGAAhr6Hj_l9kmnMJbilZcytUjVVneYpYeQnhrj31Am9uP6O1ne8MhGA8phQN6ULjTyfdKbxhta68hejajh8OQfk-9hIs')", backgroundSize: 'cover' }}
              ></div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content — flex-1 撑满剩余高度 */}
      <main className="flex-1 flex flex-col items-center justify-center py-12 px-6 relative overflow-hidden">
        {/* 背景光晕 */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-[-5%] left-[-5%] w-[40%] h-[40%] bg-[#1392ec]/10 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-[-5%] right-[-5%] w-[40%] h-[40%] bg-[#0d9488]/10 rounded-full blur-[120px]"></div>
        </div>

        {/* 标题 */}
        <div className="text-center mb-10 relative z-10">
          <h2 className="text-4xl font-extrabold text-slate-900 mb-3 tracking-tight">选择系统</h2>
          <p className="text-base text-slate-500 max-w-xl mx-auto leading-relaxed">
            欢迎回来，GKX 智能决策平台为您提供全方位的战略与科研决策支持。请选择要进入的业务系统。
          </p>
        </div>

        {/* 卡片区 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full max-w-[1100px] relative z-10">
          {/* 战略咨询 */}
          <div className="group bg-white rounded-2xl p-8 shadow-sm border border-slate-100 hover:shadow-lg hover:border-[#0d9488]/30 transition-all duration-300 flex flex-col">
            <div className="flex items-start gap-5 mb-5">
              <div className="w-14 h-14 shrink-0 bg-[#0d9488]/10 text-[#0d9488] rounded-xl flex items-center justify-center">
                <span className="material-symbols-outlined" style={{ fontSize: '32px' }}>strategy</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-1">战略咨询智能支持</h3>
                <p className="text-sm text-slate-500 leading-relaxed">
                  面向战略研究与咨询成果管理的一体化工作台。提供全流程自动化报告生成与深度案例分析支持。
                </p>
              </div>
            </div>
            <div className="flex flex-wrap gap-2 mb-6">
              {['研究需求', '技术体系', '报告生成', '成果案例'].map(tag => (
                <span key={tag} className="px-3 py-1 bg-slate-100 text-slate-600 text-xs font-semibold rounded-full border border-slate-200">{tag}</span>
              ))}
            </div>
            <div className="mt-auto flex gap-3">
              <button
                onClick={() => navigate('/strategy')}
                className="flex-1 bg-[#0d9488] hover:bg-[#0d9488]/90 text-white font-bold py-2.5 px-5 rounded-lg transition-all flex items-center justify-center gap-2"
              >
                <span>进入系统</span>
                <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>arrow_right_alt</span>
              </button>
              <button className="flex-1 bg-white text-slate-700 border border-slate-200 font-bold py-2.5 px-5 rounded-lg hover:bg-slate-50 transition-all">
                查看简介
              </button>
            </div>
          </div>

          {/* 基础研究 */}
          <div className="group bg-white rounded-2xl p-8 shadow-sm border border-slate-100 hover:shadow-lg hover:border-[#1392ec]/30 transition-all duration-300 flex flex-col">
            <div className="flex items-start gap-5 mb-5">
              <div className="w-14 h-14 shrink-0 bg-[#1392ec]/10 text-[#1392ec] rounded-xl flex items-center justify-center">
                <span className="material-symbols-outlined" style={{ fontSize: '32px' }}>science</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-1">基础研究智能决策</h3>
                <p className="text-sm text-slate-500 leading-relaxed">
                  面向基础研究分析与决策支持的数据与模型平台。集成海量数据源，实现多维度的预警监测。
                </p>
              </div>
            </div>
            <div className="flex flex-wrap gap-2 mb-6">
              {['课题分析', '趋势洞察', '预警监测', '知识图谱'].map(tag => (
                <span key={tag} className="px-3 py-1 bg-slate-100 text-slate-600 text-xs font-semibold rounded-full border border-slate-200">{tag}</span>
              ))}
            </div>
            <div className="mt-auto flex gap-3">
              <button
                onClick={() => navigate('/research')}
                className="flex-1 bg-[#1392ec] hover:bg-[#1392ec]/90 text-white font-bold py-2.5 px-5 rounded-lg transition-all flex items-center justify-center gap-2"
              >
                <span>进入系统</span>
                <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>arrow_right_alt</span>
              </button>
              <button className="flex-1 bg-white text-slate-700 border border-slate-200 font-bold py-2.5 px-5 rounded-lg hover:bg-slate-50 transition-all">
                查看简介
              </button>
            </div>
          </div>
        </div>

        {/* 统计数字 */}
        <div className="mt-10 w-full max-w-[1100px] grid grid-cols-4 gap-4 relative z-10">
          {[
            { val: '2,840+', label: '战略报告总数', color: '#0d9488' },
            { val: '15,200+', label: '课题分析模型', color: '#1392ec' },
            { val: '99.9%', label: '系统运行稳定性', color: '#475569' },
            { val: '24/7', label: '实时数据监测', color: '#475569' },
          ].map(item => (
            <div key={item.label} className="text-center py-4 bg-white/60 rounded-xl border border-slate-100">
              <p className="text-2xl font-bold" style={{ color: item.color }}>{item.val}</p>
              <p className="text-xs text-slate-500 mt-1">{item.label}</p>
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="py-5 border-t border-slate-200 bg-white">
        <div className="max-w-[1440px] mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-3">
          <div className="text-slate-400 text-sm">
            © 2024 GKX 智能决策平台 | 业务单位：国家基础研究决策支持中心
          </div>
          <div className="flex items-center gap-6 text-slate-400 text-sm">
            <a className="hover:text-[#1392ec] transition-colors" href="#">隐私政策</a>
            <a className="hover:text-[#1392ec] transition-colors" href="#">服务条款</a>
            <span className="px-2 py-0.5 bg-slate-100 rounded text-[10px] font-bold">V 2.4.0 Stable</span>
          </div>
        </div>
      </footer>
    </div>
  )
}
