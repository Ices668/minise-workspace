import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function LoginPage() {
  const navigate = useNavigate()
  const [phone, setPhone] = useState('')
  const [code, setCode] = useState('')

  return (
    <div className="bg-[#f6f6f8] font-[Inter,sans-serif] min-h-screen">
      <div className="relative flex h-screen w-full flex-col bg-white overflow-x-hidden max-w-[430px] mx-auto shadow-2xl">

        {/* TopAppBar */}
        <div className="flex items-center bg-white p-4 pb-2 justify-between">
          <div className="text-[#2761e7] flex size-12 shrink-0 items-center justify-start">
            <span className="material-symbols-outlined text-3xl">work</span>
          </div>
          <h2 className="text-slate-900 text-lg font-bold leading-tight tracking-tight flex-1 text-center pr-12">招才</h2>
        </div>

        {/* Welcome Header */}
        <div className="px-6 pt-10 pb-6">
          <h1 className="text-slate-900 tracking-tight text-[28px] font-bold leading-tight">欢迎登录，</h1>
          <h1 className="text-slate-900 tracking-tight text-[28px] font-bold leading-tight">找到理想工作</h1>
        </div>

        {/* Tab Navigation */}
        <div className="px-6 mb-8">
          <div className="flex border-b border-slate-200 justify-between">
            <a className="flex flex-col items-center justify-center border-b-[3px] border-[#2761e7] text-[#2761e7] pb-3 pt-2 flex-1" href="#">
              <p className="text-sm font-bold leading-normal tracking-wide">手机号登录</p>
            </a>
            <a className="flex flex-col items-center justify-center border-b-[3px] border-transparent text-slate-500 pb-3 pt-2 flex-1" href="#">
              <p className="text-sm font-medium leading-normal tracking-wide">密码登录</p>
            </a>
          </div>
        </div>

        {/* Form Fields */}
        <div className="flex flex-col gap-5 px-6">
          <label className="flex flex-col w-full">
            <p className="text-slate-700 text-sm font-medium leading-normal pb-2">手机号</p>
            <div className="relative flex items-center">
              <span className="absolute left-4 text-slate-400 material-symbols-outlined">smartphone</span>
              <input
                className="flex w-full rounded-xl text-slate-900 focus:ring-2 focus:ring-[#2761e7]/20 border border-slate-200 bg-slate-50 h-14 placeholder:text-slate-400 pl-12 pr-4 text-base font-normal leading-normal outline-none"
                placeholder="请输入手机号"
                type="tel"
                value={phone}
                onChange={e => setPhone(e.target.value)}
              />
            </div>
          </label>
          <label className="flex flex-col w-full">
            <p className="text-slate-700 text-sm font-medium leading-normal pb-2">验证码</p>
            <div className="flex w-full gap-3">
              <div className="relative flex-1">
                <span className="absolute left-4 top-4 text-slate-400 material-symbols-outlined">verified_user</span>
                <input
                  className="flex w-full rounded-xl text-slate-900 focus:ring-2 focus:ring-[#2761e7]/20 border border-slate-200 bg-slate-50 h-14 placeholder:text-slate-400 pl-12 pr-4 text-base font-normal leading-normal outline-none"
                  placeholder="请输入验证码"
                  type="text"
                  value={code}
                  onChange={e => setCode(e.target.value)}
                />
              </div>
              <button className="px-4 h-14 text-[#2761e7] font-semibold text-sm whitespace-nowrap bg-[#2761e7]/10 rounded-xl hover:bg-[#2761e7]/20 transition-colors">
                获取验证码
              </button>
            </div>
          </label>
        </div>

        {/* Login Button */}
        <div className="px-6 pt-10">
          <button
            className="w-full h-14 bg-[#2761e7] text-white font-bold text-lg rounded-xl shadow-lg shadow-[#2761e7]/30 hover:bg-blue-700 active:scale-[0.98] transition-all"
            onClick={() => navigate('/home')}
          >
            登录
          </button>
        </div>

        {/* Divider */}
        <div className="mt-auto mb-8">
          <div className="flex items-center px-10 gap-4 mb-8">
            <div className="h-[1px] flex-1 bg-slate-200"></div>
            <p className="text-slate-400 text-xs font-medium">其他登录方式</p>
            <div className="h-[1px] flex-1 bg-slate-200"></div>
          </div>
          <div className="flex justify-center gap-10">
            <button className="flex flex-col items-center gap-2 group">
              <div className="size-12 rounded-full border border-slate-200 flex items-center justify-center group-hover:bg-slate-50 transition-colors">
                <span className="material-symbols-outlined text-green-500 text-2xl">chat</span>
              </div>
              <span className="text-xs text-slate-500">微信</span>
            </button>
            <button className="flex flex-col items-center gap-2 group">
              <div className="size-12 rounded-full border border-slate-200 flex items-center justify-center group-hover:bg-slate-50 transition-colors">
                <span className="material-symbols-outlined text-blue-400 text-2xl">alternate_email</span>
              </div>
              <span className="text-xs text-slate-500">QQ</span>
            </button>
          </div>
        </div>

        {/* Footer */}
        <div className="pb-10 text-center">
          <p className="text-slate-500 text-sm">
            没有账号？ <a className="text-[#2761e7] font-bold hover:underline" href="#">立即注册</a>
          </p>
        </div>
      </div>
    </div>
  )
}
