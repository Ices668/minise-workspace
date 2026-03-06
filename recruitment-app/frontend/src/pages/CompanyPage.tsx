import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { companyInfo, jobs } from '../data/mockData';

const tabs = ['在招职位', '公司介绍', '员工评价'];

const CompanyPage: React.FC = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="relative flex min-h-screen w-full max-w-md mx-auto flex-col bg-[#f6f6f8] shadow-2xl pb-24">
      {/* Header */}
      <div className="sticky top-0 z-50 bg-white flex items-center justify-between px-4 h-14 shadow-sm">
        <button onClick={() => navigate(-1)}>
          <span className="material-symbols-outlined text-slate-700">arrow_back</span>
        </button>
        <button className="px-4 py-1.5 border border-[#2761e7] text-[#2761e7] rounded-full text-sm font-semibold">关注</button>
      </div>

      {/* Cover */}
      <div className="bg-[#2761e7]/10 h-32 w-full" />

      {/* Company Info */}
      <div className="bg-white -mt-6 mx-4 rounded-2xl px-4 pt-4 pb-3 shadow-sm">
        <div className="flex items-end gap-3 mb-3">
          <div className="h-16 w-16 rounded-xl bg-[#2761e7] flex items-center justify-center text-white text-2xl font-bold -mt-10 shadow-md">某</div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="font-bold text-slate-900 text-lg">{companyInfo.name}</h1>
              <span className="text-xs bg-blue-50 text-[#2761e7] px-1.5 py-0.5 rounded">已认证</span>
            </div>
          </div>
        </div>
        <div className="flex gap-4 text-sm text-slate-500">
          <span>{companyInfo.industry}</span>
          <span>·</span>
          <span>{companyInfo.size}</span>
          <span>·</span>
          <span>{companyInfo.stage}</span>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex bg-white mt-2 border-b border-slate-100 px-4">
        {tabs.map((t, i) => (
          <button
            key={t}
            className={`mr-6 py-3 text-sm font-semibold border-b-2 transition-colors ${activeTab === i ? 'text-[#2761e7] border-[#2761e7]' : 'text-slate-500 border-transparent'}`}
            onClick={() => setActiveTab(i)}
          >
            {t}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="flex flex-col gap-3 p-4">
        {activeTab === 0 && jobs.slice(0, 3).map(job => (
          <div
            key={job.id}
            className="bg-white rounded-2xl p-4 shadow-sm cursor-pointer"
            onClick={() => navigate('/job-detail')}
          >
            <div className="flex justify-between items-start mb-2">
              <span className="font-bold text-slate-900">{job.title}</span>
              <span className="text-[#2761e7] font-bold">{job.salary}</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {job.tags.slice(0, 2).map(tag => (
                <span key={tag} className="text-xs bg-slate-100 text-slate-500 px-2 py-0.5 rounded-full">{tag}</span>
              ))}
            </div>
          </div>
        ))}
        {activeTab === 1 && (
          <div className="bg-white rounded-2xl p-4 shadow-sm text-sm text-slate-600 leading-relaxed">
            <p>{companyInfo.description}</p>
            <p className="mt-3">成立时间：{companyInfo.founded}</p>
          </div>
        )}
        {activeTab === 2 && (
          <div className="bg-white rounded-2xl p-4 shadow-sm text-sm text-slate-500 text-center py-10">
            暂无评价
          </div>
        )}
      </div>

      {/* Bottom CTA */}
      <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-md bg-white border-t border-slate-100 px-4 py-3">
        <button className="w-full h-12 bg-[#2761e7] text-white rounded-xl font-semibold" onClick={() => navigate('/home')}>私信HR</button>
      </div>
    </div>
  );
};

export default CompanyPage;
