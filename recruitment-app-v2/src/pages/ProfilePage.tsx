import { useNavigate } from 'react-router-dom'

const menuGroup1 = [
  { icon: 'description', label: '我的简历' },
  { icon: 'history', label: '投递记录' },
  { icon: 'bookmark', label: '收藏职位' },
  { icon: 'badge', label: '我的认证' },
  { icon: 'target', label: '求职意向' },
]

const menuGroup2 = [
  { icon: 'notifications', label: '消息通知' },
  { icon: 'lock', label: '隐私设置' },
  { icon: 'chat_bubble', label: '意见反馈' },
  { icon: 'info', label: '关于我们' },
]

const stats = [
  { val: 12, label: '已投递' },
  { val: 45, label: '被查看' },
  { val: 8, label: '我的收藏' },
]

export default function ProfilePage() {
  const navigate = useNavigate()

  return (
    <div className="bg-[#f3f4f6] font-[Inter,sans-serif] min-h-screen">
      <div className="relative mx-auto min-h-screen max-w-md bg-[#f3f4f6] pb-24">

        {/* Top Section: Header & Profile */}
        <div className="relative overflow-hidden bg-[#2761e7] px-6 pb-20 pt-12 text-white">
          {/* Decorative circles */}
          <div className="absolute right-0 top-0 h-32 w-32 -translate-y-8 translate-x-8 rounded-full bg-white/10"></div>
          <div className="absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 -translate-y-32 rounded-full bg-white/5"></div>

          <div className="relative flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="h-16 w-16 overflow-hidden rounded-full border-2 border-white/50 bg-white">
                <img
                  alt="Avatar"
                  className="h-full w-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDOlOFIS0bQcjtBsEtPoOE_rZEEcQ_J5TybmttclRokxkZir-Oq5xxvr4k3dNXSQ6WzhMaznAydvcnu1zOKr8QV7JXFLpgYcHq13Pjm8jSaMmFdsBQJON22Txdq018velWyr6p1mOpXTZHPm4n9OgCr_BJwjls-7ZIW8O5LTvol4sp-xoRPUzzkd42DBmIJWhpZxatP-k1SioTJUMFDk9Xllq1aENIVGVMlOts0miA6fQJ_-OQjNw21BoWyLui9-hXBfnyqnLwLzla9"
                />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h1 className="text-xl font-bold">求职者昵称</h1>
                  <span className="flex items-center gap-0.5 rounded-full bg-white/20 px-2 py-0.5 text-[10px] font-medium backdrop-blur-sm">
                    <span className="material-symbols-outlined text-[12px]">verified</span>
                    已实名
                  </span>
                </div>
                <p className="mt-1 text-sm text-white/80">产品经理 / 3年前端经验</p>
              </div>
            </div>
            <button className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 backdrop-blur-md">
              <span className="material-symbols-outlined text-white">settings</span>
            </button>
          </div>

          {/* Resume Progress */}
          <div className="mt-6 rounded-xl bg-white/10 p-4 backdrop-blur-md">
            <div className="mb-2 flex items-center justify-between text-xs font-medium">
              <span>简历完善度</span>
              <span>85%</span>
            </div>
            <div className="h-1.5 w-full rounded-full bg-white/20">
              <div className="h-full w-[85%] rounded-full bg-white"></div>
            </div>
            <p className="mt-2 text-[11px] text-white/70">完善简历可获得更多面试机会</p>
          </div>
        </div>

        {/* Data Statistics Row */}
        <div className="relative -mt-10 px-4">
          <div className="grid grid-cols-3 divide-x divide-slate-100 rounded-xl bg-white py-6 shadow-sm">
            {stats.map(s => (
              <div key={s.label} className="flex flex-col items-center">
                <span className="text-xl font-bold text-slate-900">{s.val}</span>
                <span className="mt-1 text-xs text-slate-500">{s.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Menu Group 1 */}
        <div className="mt-4 px-4">
          <div className="overflow-hidden rounded-xl bg-white shadow-sm">
            {menuGroup1.map((item, i) => (
              <a
                key={item.label}
                className={`flex items-center justify-between p-4 active:bg-slate-50 ${i < menuGroup1.length - 1 ? 'border-b border-slate-50' : ''}`}
                href="#"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-50 text-[#2761e7]">
                    <span className="material-symbols-outlined text-[20px]">{item.icon}</span>
                  </div>
                  <span className="text-sm font-medium text-slate-900">{item.label}</span>
                </div>
                <span className="material-symbols-outlined text-slate-300">chevron_right</span>
              </a>
            ))}
          </div>
        </div>

        {/* Menu Group 2 */}
        <div className="mt-4 px-4">
          <div className="overflow-hidden rounded-xl bg-white shadow-sm">
            {menuGroup2.map((item, i) => (
              <a
                key={item.label}
                className={`flex items-center justify-between p-4 active:bg-slate-50 ${i < menuGroup2.length - 1 ? 'border-b border-slate-50' : ''}`}
                href="#"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-50 text-slate-500">
                    <span className="material-symbols-outlined text-[20px]">{item.icon}</span>
                  </div>
                  <span className="text-sm font-medium text-slate-900">{item.label}</span>
                </div>
                <span className="material-symbols-outlined text-slate-300">chevron_right</span>
              </a>
            ))}
          </div>
        </div>

        {/* Logout Button */}
        <div className="mt-6 px-4">
          <button
            className="flex w-full items-center justify-center rounded-xl bg-white py-4 text-sm font-bold text-red-500 shadow-sm active:bg-slate-50"
            onClick={() => navigate('/')}
          >
            退出登录
          </button>
        </div>

        {/* Bottom Navigation Bar */}
        <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-md z-50 border-t border-slate-100 bg-white/80 px-6 pb-6 pt-2 backdrop-blur-lg">
          <div className="flex items-center justify-between">
            {[
              { icon: 'home', label: '首页', active: false, path: '/home' },
              { icon: 'work', label: '职位', active: false, path: '/home' },
              { icon: 'chat_bubble', label: '消息', active: false, path: '/home' },
              { icon: 'person', label: '我的', active: true, path: '/profile' },
            ].map(item => (
              <button
                key={item.label}
                className={`flex flex-col items-center gap-1 ${item.active ? 'text-[#2761e7]' : 'text-slate-400'}`}
                onClick={() => navigate(item.path)}
              >
                <span className="material-symbols-outlined">{item.icon}</span>
                <span className="text-[10px] font-medium">{item.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
