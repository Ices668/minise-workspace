import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { jobDetail } from '../data/mockData'

export default function JobDetailPage() {
  const navigate = useNavigate()
  const [expanded, setExpanded] = useState(false)

  return (
    <div className="bg-[#f3f4f6] font-[Inter,sans-serif] min-h-screen">
      <div className="relative mx-auto min-h-screen w-full max-w-[390px] bg-[#f3f4f6] pb-24 shadow-2xl overflow-x-hidden">

        {/* Top Nav */}
        <header className="sticky top-0 z-50 flex items-center justify-between bg-white/80 backdrop-blur-md px-4 py-3 border-b border-slate-200">
          <button className="flex h-10 w-10 items-center justify-start text-slate-900" onClick={() => navigate(-1)}>
            <span className="material-symbols-outlined">arrow_back_ios</span>
          </button>
          <h1 className="text-lg font-bold text-slate-900">职位详情</h1>
          <div className="flex gap-4">
            <button className="text-slate-600"><span className="material-symbols-outlined">share</span></button>
            <button className="text-slate-600"><span className="material-symbols-outlined">favorite</span></button>
          </div>
        </header>

        {/* Company Card */}
        <div className="px-4 py-4">
          <div
            className="flex items-center gap-4 rounded-xl bg-white p-4 shadow-sm border border-slate-100 cursor-pointer"
            onClick={() => navigate('/company')}
          >
            <div className="h-16 w-16 flex-shrink-0 overflow-hidden rounded-lg bg-slate-100">
              <img
                alt="Company Logo"
                className="h-full w-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuADPe542Ti7mG7tSAWSIuObDncsZqUusyfAfwa_h11tSt4zOdWKrZEVkRNc8TimKTjeJIZgXaRHRuD_sxzizglMwmy0PPK5IU1qVT0548DeQpalgA2TWsGU7GYgOhjBO5K35YJ_d2llR_jebma7qvkVIam-nuXYjqSE4b_qJ9_EkxbhruwzVcwcOt5H6ajICrsFRJRnzyI-qyzkAQXBEdOj9F_DXBYmn0tVDZGpo3vn3S_QXaqdSjkThcjcNuEwj-Sm6mnn5vT1n7pp"
              />
            </div>
            <div className="flex flex-col gap-1 overflow-hidden">
              <h2 className="truncate text-lg font-bold text-slate-900 leading-tight">{jobDetail.company}</h2>
              <p className="text-sm text-slate-500">{jobDetail.size} | 互联网/软件</p>
            </div>
            <div className="ml-auto">
              <span className="material-symbols-outlined text-slate-300">chevron_right</span>
            </div>
          </div>
        </div>

        {/* Job Core Info */}
        <section className="bg-white px-4 py-6 mb-2">
          <h1 className="text-2xl font-bold text-slate-900 mb-2">{jobDetail.title}</h1>
          <div className="text-xl font-bold text-[#2761e7] mb-4">{jobDetail.salary}·14薪</div>
          <div className="flex flex-wrap gap-y-2 gap-x-4 mb-6">
            {[
              { icon: 'location_on', text: `北京·${jobDetail.location}` },
              { icon: 'work_history', text: jobDetail.experience },
              { icon: 'school', text: jobDetail.education },
            ].map(item => (
              <div key={item.text} className="flex items-center gap-1.5 text-slate-600">
                <span className="material-symbols-outlined text-lg">{item.icon}</span>
                <span className="text-sm">{item.text}</span>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap gap-2">
            {jobDetail.tags.map(t => (
              <span key={t} className="rounded-lg bg-[#2761e7]/10 px-3 py-1 text-xs font-medium text-[#2761e7]">{t}</span>
            ))}
          </div>
        </section>

        {/* Job Description */}
        <section className="bg-white px-4 py-6 mb-2">
          <h3 className="text-lg font-bold text-slate-900 mb-4">职位描述</h3>
          <div className={`overflow-hidden transition-all ${expanded ? '' : 'max-h-48'}`}>
            <div>
              <h4 className="text-sm font-semibold text-slate-700 mb-2">岗位职责：</h4>
              <ul className="list-inside list-disc text-sm text-slate-600 space-y-2 leading-relaxed">
                {jobDetail.desc.map((d, i) => <li key={i}>{d}</li>)}
              </ul>
            </div>
            <div className="mt-4 relative">
              <h4 className="text-sm font-semibold text-slate-700 mb-2">任职要求：</h4>
              <ul className="list-inside list-disc text-sm text-slate-600 space-y-2 leading-relaxed">
                {jobDetail.require.map((r, i) => <li key={i}>{r}</li>)}
              </ul>
              {!expanded && <div className="absolute bottom-0 h-12 w-full bg-gradient-to-t from-white to-transparent"></div>}
            </div>
          </div>
          <button
            className="flex w-full items-center justify-center gap-1 py-2 text-sm font-medium text-[#2761e7]"
            onClick={() => setExpanded(!expanded)}
          >
            {expanded ? '收起' : '展开全文'}
            <span className="material-symbols-outlined text-lg">{expanded ? 'expand_less' : 'expand_more'}</span>
          </button>
        </section>

        {/* Company Introduction */}
        <section className="bg-white px-4 py-6">
          <h3 className="text-lg font-bold text-slate-900 mb-4">公司介绍</h3>
          <p className="text-sm leading-relaxed text-slate-600">
            {jobDetail.company}成立于2015年，是国内领先的数字化转型解决方案提供商。我们秉承"技术驱动未来"的理念，致力于为企业提供最高效的软件服务。
          </p>
          <div className="mt-4 h-32 w-full rounded-xl bg-slate-100 overflow-hidden">
            <img
              alt="Office Environment"
              className="h-full w-full object-cover opacity-80"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBwSAHv7JYU6FH40BGP472F2jJ2pzSWR05G6OGHRmbhKBMEIuuvKINvqWbUFwz_unFQgwcztWLSxRNWoh-otJgYNIThAOaZaqMarg7mK3dR3jrh2c761udxJofYBYTEXOIQseLysOuWQVjSVA9mlQI5wmh0NXU-HYUKPMiLeoanyhZKBucfMCiIlMFgbBDa-gONY1IzY-J_-RUb6BWWo3thLlmSTjsAI3bbUMPt3thDdS3kQpAPSK6g4G_wdpiDRZ6dSvZS5lbnaClS"
            />
          </div>
        </section>

        {/* Bottom Actions */}
        <footer className="fixed bottom-0 left-1/2 z-[60] w-full max-w-[390px] -translate-x-1/2 bg-white/95 backdrop-blur-md px-4 py-4 border-t border-slate-200 flex items-center gap-3">
          <button className="flex h-12 w-14 flex-shrink-0 flex-col items-center justify-center rounded-xl border border-slate-200 text-slate-600">
            <span className="material-symbols-outlined">forum</span>
            <span className="text-[10px] font-medium">聊一聊</span>
          </button>
          <button
            className="h-12 flex-1 rounded-xl bg-[#2761e7] text-white font-bold text-base shadow-lg shadow-[#2761e7]/30 active:scale-95 transition-transform"
            onClick={() => navigate('/resume')}
          >
            立即投递
          </button>
        </footer>
      </div>
    </div>
  )
}
