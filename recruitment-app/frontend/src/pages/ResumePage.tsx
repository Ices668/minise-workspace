import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ResumePage: React.FC = () => {
  const navigate = useNavigate();
  const [resumeType, setResumeType] = useState<'online' | 'attachment'>('online');
  const [intro, setIntro] = useState('');

  return (
    <div className="relative flex min-h-screen w-full max-w-md mx-auto flex-col bg-[#f6f6f8] shadow-2xl pb-28">
      {/* Header */}
      <div className="sticky top-0 z-50 bg-white flex items-center justify-between px-4 h-14 shadow-sm">
        <button onClick={() => navigate(-1)}>
          <span className="material-symbols-outlined text-slate-700">arrow_back</span>
        </button>
        <span className="font-bold text-slate-900 text-base">投递简历</span>
        <span className="w-6" />
      </div>

      {/* User Card */}
      <div className="bg-white mx-4 mt-4 rounded-2xl p-4 shadow-sm flex items-center gap-3">
        <div className="h-14 w-14 rounded-full bg-[#2761e7]/20 flex items-center justify-center text-[#2761e7] text-xl font-bold">张</div>
        <div className="flex-1">
          <p className="font-bold text-slate-900">张小明</p>
          <p className="text-sm text-slate-500 mb-2">求职中 · 销售岗位</p>
          <div className="flex items-center gap-2">
            <div className="flex-1 h-1.5 bg-slate-100 rounded-full overflow-hidden">
              <div className="h-full bg-[#2761e7] rounded-full" style={{ width: '75%' }} />
            </div>
            <span className="text-xs text-slate-500">简历完整度 75%</span>
          </div>
        </div>
      </div>

      {/* Job Summary */}
      <div className="bg-white mx-4 mt-3 rounded-2xl p-4 shadow-sm">
        <p className="text-xs text-slate-400 mb-1">投递至</p>
        <div className="flex justify-between items-center">
          <div>
            <p className="font-bold text-slate-900">电话销售</p>
            <p className="text-sm text-slate-500">某某科技有限公司</p>
          </div>
          <span className="text-[#2761e7] font-bold">5000-8000元</span>
        </div>
      </div>

      {/* Resume Type */}
      <div className="bg-white mx-4 mt-3 rounded-2xl p-4 shadow-sm">
        <p className="font-semibold text-slate-900 mb-3">选择简历</p>
        <div className="flex gap-3">
          <button
            className={`flex-1 h-12 rounded-xl border-2 text-sm font-semibold transition-colors ${resumeType === 'online' ? 'border-[#2761e7] bg-blue-50 text-[#2761e7]' : 'border-slate-200 text-slate-500'}`}
            onClick={() => setResumeType('online')}
          >
            在线简历
          </button>
          <button
            className={`flex-1 h-12 rounded-xl border-2 text-sm font-semibold transition-colors ${resumeType === 'attachment' ? 'border-[#2761e7] bg-blue-50 text-[#2761e7]' : 'border-slate-200 text-slate-500'}`}
            onClick={() => setResumeType('attachment')}
          >
            附件简历
          </button>
        </div>
      </div>

      {/* Self Introduction */}
      <div className="bg-white mx-4 mt-3 rounded-2xl p-4 shadow-sm">
        <p className="font-semibold text-slate-900 mb-3">自我介绍 <span className="text-slate-400 font-normal text-sm">（选填）</span></p>
        <textarea
          className="w-full h-24 bg-slate-50 rounded-xl p-3 text-sm text-slate-700 outline-none resize-none placeholder-slate-400 border border-slate-100"
          placeholder="介绍一下你的优势和求职意向..."
          value={intro}
          onChange={e => setIntro(e.target.value)}
        />
      </div>

      {/* Bottom CTA */}
      <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-md bg-white border-t border-slate-100 px-4 py-3">
        <button className="w-full h-12 bg-[#2761e7] text-white rounded-xl font-semibold text-base" onClick={() => navigate('/home')}>
          确认投递
        </button>
      </div>
    </div>
  );
};

export default ResumePage;
