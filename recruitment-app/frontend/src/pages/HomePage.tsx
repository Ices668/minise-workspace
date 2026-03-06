import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { jobs } from '../data/mockData';

const categories = [
  { icon: 'work', label: '全职招聘' },
  { icon: 'schedule', label: '兼职招聘' },
  { icon: 'business_center', label: '公招信息' },
  { icon: 'school', label: '校园招聘' },
];

const tabs = ['全职招聘', '兼职招聘', '公招信息'];

const HomePage: React.FC = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="relative flex min-h-screen w-full max-w-md mx-auto flex-col bg-[#f6f6f8] shadow-2xl">
      {/* Sticky Header */}
      <div className="sticky top-0 z-50 bg-white shadow-sm">
        <div className="flex items-center p-4 pb-2 justify-between">
          <div className="flex items-center gap-1 cursor-pointer">
            <h2 className="text-slate-900 text-lg font-bold">北京</h2>
            <span className="material-symbols-outlined text-slate-500 text-xl">keyboard_arrow_down</span>
          </div>
          <button className="relative flex items-center justify-center rounded-lg h-10 w-10">
            <span className="material-symbols-outlined text-slate-900">notifications</span>
            <span className="absolute top-2 right-2 h-2 w-2 rounded-full bg-red-500"></span>
          </button>
        </div>
        {/* Search Bar */}
        <div className="px-4 py-3">
          <div className="flex items-center h-12 bg-slate-100 rounded-xl shadow-sm overflow-hidden">
            <span className="material-symbols-outlined text-slate-400 pl-4">search</span>
            <input className="flex-1 bg-transparent outline-none text-slate-900 px-3 text-base placeholder-slate-400" placeholder="搜索职位/公司" />
          </div>
        </div>
      </div>

      {/* Categories */}
      <div className="flex gap-3 px-4 py-3 overflow-x-auto no-scrollbar bg-white">
        {categories.map(c => (
          <div key={c.label} className="flex flex-col items-center min-w-[72px] gap-1.5 cursor-pointer">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-[#2761e7]">
              <span className="material-symbols-outlined text-3xl">{c.icon}</span>
            </div>
            <span className="text-xs font-semibold text-slate-700 text-center">{c.label}</span>
          </div>
        ))}
      </div>

      {/* Tabs */}
      <div className="flex bg-white border-b border-slate-100 px-4 mt-2">
        {tabs.map((t, i) => (
          <button
            key={t}
            className={`mr-5 py-3 text-sm font-semibold border-b-2 transition-colors ${activeTab === i ? 'text-[#2761e7] border-[#2761e7]' : 'text-slate-500 border-transparent'}`}
            onClick={() => setActiveTab(i)}
          >
            {t}
          </button>
        ))}
      </div>

      {/* Job List */}
      <div className="flex flex-col gap-3 p-4 pb-24">
        {jobs.map(job => (
          <div
            key={job.id}
            className="bg-white rounded-2xl p-4 shadow-sm cursor-pointer active:bg-slate-50"
            onClick={() => navigate('/job-detail')}
          >
            <div className="flex justify-between items-start mb-2">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  {job.urgent && <span className="text-xs bg-red-50 text-red-500 px-2 py-0.5 rounded font-semibold">急聘</span>}
                  <span className="font-bold text-slate-900 text-base">{job.title}</span>
                </div>
                <p className="text-slate-500 text-sm">{job.company}</p>
              </div>
              <span className="text-[#2761e7] font-bold text-base">{job.salary}</span>
            </div>
            <div className="flex flex-wrap gap-2 mb-3">
              {job.tags.map(tag => (
                <span key={tag} className="text-xs bg-slate-100 text-slate-600 px-2 py-0.5 rounded-full">{tag}</span>
              ))}
            </div>
            <div className="flex items-center justify-between text-xs text-slate-400">
              <div className="flex items-center gap-1">
                <span className="material-symbols-outlined text-sm">location_on</span>
                <span>{job.address} · {job.distance}</span>
              </div>
              {job.verified && (
                <div className="flex items-center gap-1 text-green-500">
                  <span className="material-symbols-outlined text-sm">verified</span>
                  <span>已认证</span>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Nav */}
      <nav className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-md bg-white border-t border-slate-100 flex">
        {[
          { icon: 'home', label: '首页', active: true, path: '/home' },
          { icon: 'search', label: '找工作', active: false, path: '/home' },
          { icon: 'add_circle', label: '发布', active: false, path: '/home' },
          { icon: 'chat_bubble', label: '消息', active: false, path: '/home' },
          { icon: 'person', label: '我的', active: false, path: '/profile' },
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

export default HomePage;
