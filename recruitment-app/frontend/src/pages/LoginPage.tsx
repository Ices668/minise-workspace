import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const [phone, setPhone] = useState('');
  const [code, setCode] = useState('');

  return (
    <div className="relative flex min-h-screen w-full max-w-md mx-auto flex-col bg-white">
      {/* Header */}
      <div className="flex items-center justify-between p-4 pt-12">
        <span className="material-symbols-outlined text-slate-400 cursor-pointer">arrow_back</span>
      </div>

      {/* Logo */}
      <div className="flex flex-col items-center mt-8 mb-10">
        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#2761e7] text-white text-3xl font-bold mb-3">才</div>
        <h1 className="text-2xl font-bold text-slate-900">招才</h1>
        <p className="text-slate-500 text-sm mt-1">欢迎登录，找到理想工作</p>
      </div>

      {/* Tabs */}
      <div className="flex mx-6 mb-6 bg-slate-100 rounded-xl p-1">
        <button className="flex-1 py-2 rounded-lg bg-white text-[#2761e7] font-semibold text-sm shadow-sm">手机号登录</button>
        <button className="flex-1 py-2 rounded-lg text-slate-500 text-sm">密码登录</button>
      </div>

      {/* Form */}
      <div className="px-6 flex flex-col gap-4">
        <div className="flex items-center bg-slate-100 rounded-xl px-4 h-12">
          <span className="text-slate-500 text-sm mr-2">+86</span>
          <span className="text-slate-300 mr-2">|</span>
          <input
            className="flex-1 bg-transparent outline-none text-slate-900 text-base placeholder-slate-400"
            placeholder="请输入手机号"
            value={phone}
            onChange={e => setPhone(e.target.value)}
          />
        </div>
        <div className="flex items-center bg-slate-100 rounded-xl px-4 h-12 gap-2">
          <input
            className="flex-1 bg-transparent outline-none text-slate-900 text-base placeholder-slate-400"
            placeholder="请输入验证码"
            value={code}
            onChange={e => setCode(e.target.value)}
          />
          <button className="text-[#2761e7] text-sm font-semibold whitespace-nowrap">获取验证码</button>
        </div>

        <button
          className="w-full h-12 bg-[#2761e7] text-white rounded-xl font-semibold text-base mt-2"
          onClick={() => navigate('/home')}
        >
          登录
        </button>
      </div>

      {/* Divider */}
      <div className="flex items-center gap-3 mx-6 mt-6">
        <div className="flex-1 h-px bg-slate-200" />
        <span className="text-slate-400 text-sm">其他登录方式</span>
        <div className="flex-1 h-px bg-slate-200" />
      </div>

      {/* Social login */}
      <div className="flex justify-center gap-8 mt-5">
        <div className="flex flex-col items-center gap-1">
          <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center">
            <span className="text-green-600 font-bold text-lg">微</span>
          </div>
          <span className="text-xs text-slate-500">微信</span>
        </div>
        <div className="flex flex-col items-center gap-1">
          <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center">
            <span className="text-blue-600 font-bold text-lg">Q</span>
          </div>
          <span className="text-xs text-slate-500">QQ</span>
        </div>
      </div>

      {/* Register */}
      <p className="text-center text-slate-500 text-sm mt-8">
        没有账号？<span className="text-[#2761e7] font-semibold cursor-pointer">立即注册</span>
      </p>
    </div>
  );
};

export default LoginPage;
