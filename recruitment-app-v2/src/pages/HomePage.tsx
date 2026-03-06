import { useNavigate } from 'react-router-dom'
import { jobs } from '../data/mockData'

const categories = [
  { icon: 'work', label: '全职招聘', bg: 'bg-[#2761e7]/10', color: 'text-[#2761e7]' },
  { icon: 'schedule', label: '兼职招聘', bg: 'bg-orange-100', color: 'text-orange-600' },
  { icon: 'account_balance', label: '公招信息', bg: 'bg-emerald-100', color: 'text-emerald-600' },
  { icon: 'school', label: '校园招聘', bg: 'bg-purple-100', color: 'text-purple-600' },
  { icon: 'rocket_launch', label: '急招职位', bg: 'bg-blue-50', color: 'text-blue-500' },
]

export default function HomePage() {
  const navigate = useNavigate()

  return (
    <div className="bg-[#f6f6f8] font-[Inter,sans-serif]">
      <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden max-w-[448px] mx-auto shadow-2xl">

        {/* Sticky Header */}
        <div className="sticky top-0 z-50 bg-white shadow-sm">
          <div className="flex items-center p-4 pb-2 justify-between">
            <div className="flex items-center gap-1 cursor-pointer">
              <h2 className="text-slate-900 text-lg font-bold leading-tight tracking-tight">北京</h2>
              <span className="material-symbols-outlined text-slate-500 text-[20px]">keyboard_arrow_down</span>
            </div>
            <div className="flex w-12 items-center justify-end">
              <button className="relative flex items-center justify-center rounded-lg h-10 w-10 bg-transparent text-slate-900">
                <span className="material-symbols-outlined">notifications</span>
                <span className="absolute top-2 right-2 flex h-2 w-2 rounded-full bg-red-500"></span>
              </button>
            </div>
          </div>
          {/* Search Bar */}
          <div className="px-4 py-3">
            <label className="flex flex-col min-w-40 h-12 w-full">
              <div className="flex w-full flex-1 items-stretch rounded-xl h-full shadow-sm">
                <div className="text-slate-400 flex border-none bg-slate-100 items-center justify-center pl-4 rounded-l-xl">
                  <span className="material-symbols-outlined">search</span>
                </div>
                <input
                  className="flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-r-xl text-slate-900 focus:outline-none border-none bg-slate-100 h-full placeholder:text-slate-400 px-4 pl-2 text-base font-normal leading-normal"
                  placeholder="搜索职位/公司"
                />
              </div>
            </label>
          </div>
        </div>

        {/* Categories */}
        <div className="flex gap-3 p-4 overflow-x-auto no-scrollbar bg-white">
          {categories.map(c => (
            <div key={c.label} className="flex flex-col items-center justify-center min-w-[80px] gap-2 cursor-pointer">
              <div className={`flex h-14 w-14 items-center justify-center rounded-2xl ${c.bg} ${c.color}`}>
                <span className="material-symbols-outlined text-[32px]">{c.icon}</span>
              </div>
              <span className="text-xs font-semibold text-slate-700">{c.label}</span>
            </div>
          ))}
        </div>

        {/* Section Title */}
        <div className="flex items-center justify-between px-4 pb-3 pt-4 bg-[#f6f6f8]">
          <h2 className="text-slate-900 text-xl font-bold leading-tight tracking-tight">推荐职位</h2>
          <button className="text-sm font-medium text-[#2761e7] flex items-center">
            换一批 <span className="material-symbols-outlined text-[16px] ml-1">refresh</span>
          </button>
        </div>

        {/* Job Cards */}
        <div className="flex flex-col gap-4 px-4 pb-24">
          {jobs.map(job => (
            <div
              key={job.id}
              className="bg-white rounded-xl p-4 shadow-sm border border-slate-100 cursor-pointer active:bg-slate-50"
              onClick={() => navigate('/job-detail')}
            >
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-lg font-bold text-slate-900">{job.title}</h3>
                <span className="text-[#2761e7] font-bold text-lg">{job.salary}</span>
              </div>
              <div className="flex items-center gap-2 mb-3">
                <div className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center">
                  <span className="material-symbols-outlined text-slate-400 text-xl">business</span>
                </div>
                <div className="flex flex-col">
                  <p className="text-sm font-medium text-slate-800">{job.company}</p>
                  <p className="text-xs text-slate-500">{job.stage} · {job.size}</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2 mb-4">
                {job.tags.map(t => (
                  <span key={t} className="px-2 py-1 bg-slate-100 text-slate-600 text-xs rounded">{t}</span>
                ))}
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center text-xs text-slate-400 gap-1">
                  <span className="material-symbols-outlined text-[14px]">location_on</span>
                  <span>{job.location}</span>
                </div>
                <button
                  className="bg-[#2761e7] text-white px-6 py-2 rounded-lg font-bold text-sm shadow-md shadow-[#2761e7]/20 hover:bg-[#2761e7]/90 transition-colors"
                  onClick={e => { e.stopPropagation(); navigate('/resume') }}
                >
                  立即投递
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Nav */}
        <nav className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[448px] border-t border-slate-100 bg-white/95 backdrop-blur-md px-4 pb-6 pt-2 z-50">
          <div className="flex gap-2">
            {[
              { icon: 'home', label: '首页', active: true, path: '/home' },
              { icon: 'work', label: '职位', active: false, path: '/home' },
              { icon: 'chat_bubble', label: '消息', active: false, path: '/home', badge: 3 },
              { icon: 'person', label: '我的', active: false, path: '/profile' },
            ].map(item => (
              <button
                key={item.label}
                className={`flex flex-1 flex-col items-center justify-center gap-1 ${item.active ? 'text-[#2761e7]' : 'text-slate-500'}`}
                onClick={() => navigate(item.path)}
              >
                <div className="flex h-8 items-center justify-center relative">
                  <span className="material-symbols-outlined">{item.icon}</span>
                  {item.badge && (
                    <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[10px] text-white">{item.badge}</span>
                  )}
                </div>
                <p className={`text-xs leading-normal tracking-[0.015em] ${item.active ? 'font-bold' : 'font-medium'}`}>{item.label}</p>
              </button>
            ))}
          </div>
        </nav>
      </div>
    </div>
  )
}
