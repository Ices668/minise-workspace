import React from 'react';
import { useNavigate } from 'react-router-dom';
import { userProfile } from '../data/mockData';

const menuItems = [
  { icon: 'description', label: '我的简历' },
  { icon: 'send', label: '投递记录' },
  { icon: 'bookmark', label: '收藏职位' },
  { icon: 'verified_user', label: '我的认证' },
  { icon: 'travel_explore', label: '求职意向' },
];

const settingItems = [
  { icon: 'notifications', label: '消息通知' },
  { icon: 'lock', label: '隐私设置' },
  { icon: 'feedback', label: '意见反馈' },
  { icon: 'info', label: '关于我们' },
];

const ProfilePage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="relative flex min-h-screen w-full max-w-md mx-auto flex-col bg-[#f6f6f8] shadow-2xl pb-24">
      {/* Blue Header */}
      <div className="bg-[#2761e7] px-4 pt-12 pb-6">
        <div className="flex items-center gap-4 mb-4">
          <div className="h-16 w-16 rounded-full bg-white/20 flex items-center justify-center text-white text-2xl font-bold">张</div>
          <div className="flex-1">
            <div className="flex items-center gap-2">
              <h1 className="text-white font-bold text-xl">{userProfile.name}</h1>
              <span className="text-xs bg-white/20 text-white px-2 py-0.5 rounded-full">未认证</span>
            </div>
            <p className="text-blue-100 text-sm mt-0.5">{userProfile.position}</p>
          </div>
          <span className="material-symbols-outlined text-white">settings</span>
        </div>
        {/* Resume Completeness */}
        <div className="bg-white/10 rounded-xl px-4 py-3">
          <div className="flex justify-between text-white text-sm mb-2">
            <span>简历完整度</span>
            <span>{userProfile.resumeCompleteness}%</span>
          </div>
          <div className="h-2 bg-white/30 rounded-full overflow-hidden">
            <div className="h-full bg-white rounded-full" style={{ width: `${userProfile.resumeCompleteness}%` }} />
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="bg-white mx-4 -mt-4 rounded-2xl shadow-sm flex divide-x divide-slate-100 mb-3">
        {[
          { label: '投递', value: userProfile.stats.applied },
          { label: '被查看', value: userProfile.stats.viewed },
          { label: '收藏', value: userProfile.stats.saved },
        ].map(s => (
          <div key={s.label} className="flex-1 flex flex-col items-center py-4">
            <span className="text-xl font-bold text-slate-900">{s.value}</span>
            <span className="text-xs text-slate-500 mt-1">{s.label}</span>
          </div>
        ))}
      </div>

      {/* Menu */}
      <div className="bg-white mx-4 rounded-2xl shadow-sm overflow-hidden mb-3">
        {menuItems.map((item, i) => (
          <div key={item.label} className={`flex items-center px-4 py-3.5 cursor-pointer active:bg-slate-50 ${i < menuItems.length - 1 ? 'border-b border-slate-50' : ''}`}>
            <span className="material-symbols-outlined text-[#2761e7] mr-3">{item.icon}</span>
            <span className="flex-1 text-slate-800 text-sm font-medium">{item.label}</span>
            <span className="material-symbols-outlined text-slate-300 text-lg">chevron_right</span>
          </div>
        ))}
      </div>

      {/* Settings */}
      <div className="bg-white mx-4 rounded-2xl shadow-sm overflow-hidden mb-3">
        {settingItems.map((item, i) => (
          <div key={item.label} className={`flex items-center px-4 py-3.5 cursor-pointer active:bg-slate-50 ${i < settingItems.length - 1 ? 'border-b border-slate-50' : ''}`}>
            <span className="material-symbols-outlined text-slate-400 mr-3">{item.icon}</span>
            <span className="flex-1 text-slate-800 text-sm font-medium">{item.label}</span>
            <span className="material-symbols-outlined text-slate-300 text-lg">chevron_right</span>
          </div>
        ))}
      </div>

      {/* Logout */}
      <div className="mx-4">
        <button className="w-full h-12 bg-white rounded-2xl text-red-500 font-semibold text-sm shadow-sm" onClick={() => navigate('/')}>
          退出登录
        </button>
      </div>

      {/* Bottom Nav */}
      <nav className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-md bg-white border-t border-slate-100 flex">
        {[
          { icon: 'home', label: '首页', path: '/home' },
          { icon: 'search', label: '找工作', path: '/home' },
          { icon: 'add_circle', label: '发布', path: '/home' },
          { icon: 'chat_bubble', label: '消息', path: '/home' },
          { icon: 'person', label: '我的', path: '/profile', active: true },
        ].map(item => (
          <button
            key={item.label}
            className={`flex-1 flex flex-col items-center py-2 gap-0.5 ${item.active ? 'text-[#2761e7]' : 'text-slate-400'}`}
            onClick={() => navigate(item.path)}
          >
            <span className="material-symbols-outlined text-2xl">{item.icon}</span>
            <span className="text-xs">{item.label}</span>
          </button>
        ))}
      </nav>
    </div>
  );
};

export default ProfilePage;
