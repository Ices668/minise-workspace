import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const JobDetailPage: React.FC = () => {
  const navigate = useNavigate();
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="relative flex min-h-screen w-full max-w-md mx-auto flex-col bg-[#f6f6f8] shadow-2xl pb-24">
      {/* Header */}
      <div className="sticky top-0 z-50 bg-white flex items-center justify-between px-4 h-14 shadow-sm">
        <button onClick={() => navigate(-1)}>
          <span className="material-symbols-outlined text-slate-700">arrow_back</span>
        </button>
        <span className="font-bold text-slate-900 text-base">职位详情</span>
        <div className="flex gap-3">
          <span className="material-symbols-outlined text-slate-500">share</span>
          <span className="material-symbols-outlined text-slate-500">bookmark_border</span>
        </div>
      </div>

      {/* Company Card */}
      <div className="bg-white px-4 py-4 flex items-center gap-3 cursor-pointer" onClick={() => navigate('/company')}>
        <div className="h-14 w-14 rounded-xl bg-[#2761e7]/10 flex items-center justify-center text-[#2761e7] font-bold text-xl">某</div>
        <div className="flex-1">
          <p className="font-semibold text-slate-900">某某科技有限公司</p>
          <p className="text-sm text-slate-500">互联网 · 500-2000人</p>
        </div>
        <span className="material-symbols-outlined text-slate-400">chevron_right</span>
      </div>

      {/* Job Core Info */}
      <div className="bg-white mt-2 px-4 py-4">
        <h1 className="text-xl font-bold text-slate-900 mb-1">电话销售</h1>
        <p className="text-[#2761e7] font-bold text-lg mb-3">5000-8000元/月</p>
        <div className="flex flex-wrap gap-2 text-sm text-slate-600">
          <div className="flex items-center gap-1"><span className="material-symbols-outlined text-sm text-slate-400">location_on</span> 朝阳区</div>
          <div className="flex items-center gap-1"><span className="material-symbols-outlined text-sm text-slate-400">work_history</span> 1年以上</div>
          <div className="flex items-center gap-1"><span className="material-symbols-outlined text-sm text-slate-400">school</span> 大专及以上</div>
        </div>
      </div>

      {/* Tags */}
      <div className="bg-white mt-2 px-4 py-3 flex flex-wrap gap-2">
        {['五险一金', '包吃住', '节假日休息', '带薪年假', '绩效奖金'].map(tag => (
          <span key={tag} className="text-sm bg-blue-50 text-[#2761e7] px-3 py-1 rounded-full">{tag}</span>
        ))}
      </div>

      {/* Job Description */}
      <div className="bg-white mt-2 px-4 py-4">
        <h2 className="font-bold text-slate-900 mb-3">职位描述</h2>
        <div className={`text-sm text-slate-600 leading-relaxed overflow-hidden ${expanded ? '' : 'max-h-32'}`}>
          <p className="mb-2">岗位职责：</p>
          <p>1. 负责通过电话方式向潜在客户介绍公司产品和服务；</p>
          <p>2. 维护客户关系，跟进客户需求，促成销售成交；</p>
          <p>3. 完成每月销售指标，及时反馈市场信息；</p>
          <p>4. 配合团队完成其他销售相关工作。</p>
          <p className="mt-2 mb-2">任职要求：</p>
          <p>1. 大专及以上学历，市场营销、商务相关专业优先；</p>
          <p>2. 具备1年以上电话销售或客服经验；</p>
          <p>3. 普通话标准，口齿清晰，沟通能力强；</p>
          <p>4. 有较强的抗压能力和目标导向意识。</p>
        </div>
        <button className="text-[#2761e7] text-sm mt-2 font-semibold" onClick={() => setExpanded(!expanded)}>
          {expanded ? '收起 ▲' : '展开全部 ▼'}
        </button>
      </div>

      {/* Bottom CTA */}
      <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-md bg-white border-t border-slate-100 px-4 py-3 flex gap-3">
        <button className="flex-1 h-12 border border-[#2761e7] text-[#2761e7] rounded-xl font-semibold" onClick={() => navigate('/company')}>查看公司</button>
        <button className="flex-2 w-2/3 h-12 bg-[#2761e7] text-white rounded-xl font-semibold" onClick={() => navigate('/resume')}>立即投递</button>
      </div>
    </div>
  );
};

export default JobDetailPage;
