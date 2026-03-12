import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export default function Blank() {
  const location = useLocation()

  useEffect(() => {
    document.title = 'GKX - 页面建设中'
  }, [])

  return (
    <div className="p-6">
      <div className="bg-white border border-slate-200 rounded-xl p-6">
        <div className="flex items-center gap-3">
          <span className="material-symbols-outlined text-slate-400">construction</span>
          <h1 className="text-lg font-bold text-slate-800">页面建设中</h1>
        </div>
        <p className="mt-2 text-sm text-slate-600">路由已打通：{location.pathname}</p>
        <p className="mt-1 text-xs text-slate-400">后续将按原型 HTML 1:1 搬运到 JSX。</p>
      </div>
    </div>
  )
}
