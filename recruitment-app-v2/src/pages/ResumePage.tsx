import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function ResumePage() {
  const navigate = useNavigate()
  const [selected, setSelected] = useState<'online' | 'pdf'>('online')
  const [intro, setIntro] = useState('')

  return (
    <div className="bg-[#f6f6f8] font-[Inter,sans-serif] min-h-screen">
      <div className="relative flex min-h-screen w-full max-w-[430px] mx-auto flex-col bg-[#f6f6f8] shadow-xl overflow-x-hidden">

        {/* Top Navigation */}
        <div className="sticky top-0 z-10 flex items-center bg-white p-4 border-b border-slate-200 justify-between">
          <div
            className="text-slate-900 flex size-10 shrink-0 items-center justify-center cursor-pointer"
            onClick={() => navigate(-1)}
          >
            <span className="material-symbols-outlined">arrow_back</span>
          </div>
          <h2 className="text-slate-900 text-lg font-bold leading-tight tracking-tight flex-1 text-center pr-10">投递简历</h2>
        </div>

        {/* Candidate Info Card */}
        <div className="p-4">
          <div className="flex flex-col gap-4 rounded-xl bg-white p-5 shadow-sm border border-slate-100">
            <div className="flex items-center gap-4">
              <div
                className="size-16 bg-center bg-no-repeat bg-cover rounded-full border-2 border-[#2761e7]/10"
                style={{
                  backgroundImage:
                    'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAJ4aAQTSti2Y-_JjdDZyVOfGKFYGErkrF_EMZjKyYBV-5DGUVwAJ9hi5eCTy-5NM5JwJTV0AOdgXEjSd8X5IeHNXHzjG98OypneGqthk9hqurH1QpQSW8LImfeMTf15no3op4fKI2DMnJ_eXCqfO6tCUnS0SzkjQZcRtY43Xps7c0Su3Ap5jcb4YxRGVy0ggXfQ1kSl6LWgKY_jTF6sMCrbJhfHCDLTfzDUYSsrhHtpNRQ9KrK23xvWsRxXFWJ6BeelAscm9MrOS9N")',
                }}
              />
              <div className="flex flex-col gap-0.5">
                <p className="text-slate-900 text-lg font-bold leading-tight">张伟</p>
                <p className="text-slate-500 text-sm font-normal">高级产品经理</p>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex justify-between items-center">
                <p className="text-slate-700 text-sm font-medium">简历完整度</p>
                <p className="text-[#2761e7] text-sm font-bold">85%</p>
              </div>
              <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                <div className="h-full bg-[#2761e7] rounded-full" style={{ width: '85%' }}></div>
              </div>
            </div>
          </div>
        </div>

        {/* Job Summary */}
        <div className="px-4 pb-4">
          <h3 className="text-slate-400 text-xs font-bold uppercase tracking-wider mb-2 px-1">投递职位</h3>
          <div className="flex items-start justify-between rounded-xl bg-white p-5 shadow-sm border border-slate-100">
            <div className="flex flex-col gap-1">
              <p className="text-slate-900 text-lg font-bold">高级UI设计师</p>
              <div className="flex items-center gap-2">
                <span className="text-slate-600 text-sm">未来科技网络有限公司</span>
                <span className="text-slate-300">|</span>
                <span className="text-[#2761e7] text-sm font-semibold">15k-25k</span>
              </div>
            </div>
            <div className="size-12 bg-slate-50 rounded-lg flex items-center justify-center border border-slate-100">
              <span className="material-symbols-outlined text-[#2761e7]">corporate_fare</span>
            </div>
          </div>
        </div>

        {/* Resume Selection */}
        <div className="px-4 pb-4">
          <h3 className="text-slate-400 text-xs font-bold uppercase tracking-wider px-1 mb-2">选择投递方式</h3>
          <div className="flex flex-col gap-3">
            <label
              className={`flex items-center justify-between rounded-xl bg-white p-4 border-2 shadow-sm cursor-pointer transition-colors ${selected === 'online' ? 'border-[#2761e7]' : 'border-slate-100'}`}
              onClick={() => setSelected('online')}
            >
              <div className="flex items-center gap-3">
                <div className="size-10 rounded-full bg-[#2761e7]/10 flex items-center justify-center">
                  <span className="material-symbols-outlined text-[#2761e7]">description</span>
                </div>
                <div className="flex flex-col">
                  <p className="text-slate-900 text-sm font-bold">在线简历</p>
                  <p className="text-slate-500 text-xs">更新于 2023-11-20</p>
                </div>
              </div>
              <div className={`size-5 rounded-full border-2 flex items-center justify-center ${selected === 'online' ? 'border-[#2761e7]' : 'border-slate-300'}`}>
                {selected === 'online' && <div className="size-2.5 rounded-full bg-[#2761e7]"></div>}
              </div>
            </label>

            <label
              className={`flex items-center justify-between rounded-xl bg-white p-4 border-2 shadow-sm cursor-pointer transition-colors ${selected === 'pdf' ? 'border-[#2761e7]' : 'border-slate-100'}`}
              onClick={() => setSelected('pdf')}
            >
              <div className="flex items-center gap-3">
                <div className="size-10 rounded-full bg-slate-100 flex items-center justify-center">
                  <span className="material-symbols-outlined text-slate-500">picture_as_pdf</span>
                </div>
                <div className="flex flex-col">
                  <p className="text-slate-900 text-sm font-bold">附件简历</p>
                  <p className="text-slate-500 text-xs">张伟_高级产品经理_2023.pdf</p>
                </div>
              </div>
              <div className={`size-5 rounded-full border-2 flex items-center justify-center ${selected === 'pdf' ? 'border-[#2761e7]' : 'border-slate-300'}`}>
                {selected === 'pdf' && <div className="size-2.5 rounded-full bg-[#2761e7]"></div>}
              </div>
            </label>
          </div>
        </div>

        {/* Additional Info */}
        <div className="px-4 pb-24">
          <h3 className="text-slate-400 text-xs font-bold uppercase tracking-wider px-1 mb-2">自我介绍 (选填)</h3>
          <div className="rounded-xl bg-white p-4 border border-slate-100 shadow-sm">
            <textarea
              className="w-full bg-transparent border-none focus:ring-0 focus:outline-none text-slate-900 text-sm min-h-[120px] resize-none p-0"
              placeholder="介绍一下你的优势，或者对这份职位的理解..."
              value={intro}
              onChange={e => setIntro(e.target.value.slice(0, 500))}
            />
            <div className="flex justify-end pt-2">
              <span className="text-slate-400 text-xs tracking-tight">{intro.length}/500</span>
            </div>
          </div>
        </div>

        {/* Fixed Bottom Bar */}
        <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[430px] bg-white border-t border-slate-100 p-4 pb-8">
          <button
            className="w-full bg-[#2761e7] hover:bg-[#2761e7]/90 text-white font-bold py-4 rounded-xl shadow-lg shadow-[#2761e7]/20 transition-all flex items-center justify-center gap-2"
            onClick={() => navigate('/home')}
          >
            <span>确认投递</span>
            <span className="material-symbols-outlined text-sm">send</span>
          </button>
        </div>
      </div>
    </div>
  )
}
