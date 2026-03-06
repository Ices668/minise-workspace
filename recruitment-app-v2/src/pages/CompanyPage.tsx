import { useNavigate } from 'react-router-dom'
import { company } from '../data/mockData'

const companyJobs = [
  { title: '高级产品经理', salary: '25k-40k', tags: ['北京 · 朝阳', '3-5年', '本科'], desc: '负责移动端产品的迭代与规划，具备优秀的逻辑分析能力与跨部门沟通能力。', hr: 'HR · 王女士 · 活跃' },
  { title: '资深后端开发工程师', salary: '35k-60k', tags: ['上海 · 浦东', '5-10年', '硕士'], desc: '核心系统架构设计，解决高并发场景下的技术瓶颈，负责核心模块开发。', hr: '技术主管 · 李先生 · 刚才在线' },
  { title: 'UI/UX 设计师', salary: '18k-30k', tags: ['北京 · 朝阳', '1-3年', '本科'], desc: '负责产品的整体视觉风格定义，建立并维护设计规范体系。', hr: '设计总监 · 张女士 · 3小时前活跃' },
]

const companyMeta = [
  { icon: 'domain', text: '互联网' },
  { icon: 'groups', text: '1000-5000人' },
  { icon: 'account_balance', text: 'D轮' },
  { icon: 'event', text: '2015年成立' },
]

export default function CompanyPage() {
  const navigate = useNavigate()

  return (
    <div className="bg-[#f6f6f8] font-[Inter,sans-serif] min-h-screen">
      <div className="relative flex min-h-screen w-full max-w-[390px] mx-auto flex-col overflow-x-hidden pb-24 shadow-2xl">

        {/* Top Nav */}
        <div className="sticky top-0 z-50 flex items-center bg-white/80 backdrop-blur-md p-4 justify-between border-b border-slate-200">
          <div className="flex items-center gap-2">
            <button
              className="flex items-center justify-center size-10 rounded-full hover:bg-slate-100 transition-colors"
              onClick={() => navigate(-1)}
            >
              <span className="material-symbols-outlined text-slate-900">arrow_back</span>
            </button>
          </div>
          <h2 className="text-slate-900 text-lg font-bold leading-tight tracking-tight">{company.name}</h2>
          <div className="flex items-center">
            <button className="bg-[#2761e7]/10 text-[#2761e7] px-4 py-1.5 rounded-full text-sm font-bold hover:bg-[#2761e7] hover:text-white transition-all">
              关注
            </button>
          </div>
        </div>

        {/* Cover Image */}
        <div className="w-full bg-center bg-no-repeat bg-cover min-h-48 relative"
          style={{
            backgroundImage:
              'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDcYqUgA_gNDAo08Zw41SXyabBf131huJj40nP_FIp217ojIQzL_5DORuQS65QVe-2RUqY2moMsEtDPWd047ueNbAhPyBhZF5sLjcnpYytcRQlxx3B-xTCCwfhArBxK6H3qvBLnnY299wxxAlHIepbsRXb43yBkctp7uohjGHa7tLU2uuTmiY9aExf3HLvU-WNLqbNcN9oqw1-MOR-VbtdYzbtEJUhtIUZD8bHgDKDk79n6yA5t-jf2APsS7utOw-iHgrhsoR7va63Y")',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
        </div>

        {/* Company Header Info */}
        <div className="px-4 -mt-10 relative z-10">
          <div className="flex flex-col gap-4">
            <div className="bg-white p-1 rounded-xl shadow-lg w-24 h-24">
              <div
                className="bg-center bg-no-repeat bg-cover rounded-lg w-full h-full bg-slate-100"
                style={{
                  backgroundImage:
                    'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAyzMQt10Kn9Cn8RfPYXx-FTtl7-k1DSdXOUkgWZp-tVmKZDzAAkM-hMMDP-ETtkVNIOoDS0u1xy69oqj2NAFymitM_0PxwVplYiPiGIAMdmOI_Okux8IwIJN-ZB-jECmjXjsNKHPePrMMVHNeW-X5HLyTfyXOoP3FaqpWdU6N1yQkULkcAzEj5raf6riRLDkIXgIj--76C9iNsAkT4j3xSGlQgm84lsOqOhvQzpcjbrD4s9ZjpbX3A2QH2LT6NidO8ikyHCOLV5BU0")',
                }}
              />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <h1 className="text-slate-900 text-2xl font-bold tracking-tight">{company.name}</h1>
                <span className="material-symbols-outlined text-blue-500 text-xl">verified</span>
              </div>
              <div className="mt-2 flex flex-wrap gap-x-3 gap-y-1 text-slate-500 text-sm">
                {companyMeta.map(m => (
                  <span key={m.text} className="flex items-center gap-1">
                    <span className="material-symbols-outlined text-sm">{m.icon}</span> {m.text}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="mt-6 sticky top-[72px] bg-[#f6f6f8] z-40">
          <div className="flex border-b border-slate-200 px-4 gap-8 overflow-x-auto">
            {['在招职位 (32)', '公司概况', '员工评价'].map((tab, i) => (
              <a
                key={tab}
                className={`flex flex-col items-center justify-center border-b-[3px] pb-3 pt-4 shrink-0 ${i === 0 ? 'border-[#2761e7] text-[#2761e7]' : 'border-transparent text-slate-500'}`}
                href="#"
              >
                <p className={`text-sm ${i === 0 ? 'font-bold' : 'font-medium'}`}>{tab}</p>
              </a>
            ))}
          </div>
        </div>

        {/* Job List */}
        <div className="p-4 flex flex-col gap-4">
          {companyJobs.map((job, i) => (
            <div
              key={i}
              className="flex flex-col p-4 rounded-xl bg-white shadow-sm border border-slate-100 cursor-pointer"
              onClick={() => navigate('/job-detail')}
            >
              <div className="flex justify-between items-start">
                <h3 className="text-slate-900 text-lg font-bold">{job.title}</h3>
                <span className="text-[#2761e7] font-bold text-lg">{job.salary}</span>
              </div>
              <div className="mt-2 flex gap-2 text-xs flex-wrap">
                {job.tags.map(t => (
                  <span key={t} className="bg-slate-100 px-2 py-1 rounded text-slate-600">{t}</span>
                ))}
              </div>
              <p className="mt-3 text-slate-500 text-sm line-clamp-2">{job.desc}</p>
              <div className="mt-4 flex items-center border-t border-slate-50 pt-3">
                <div className="flex items-center gap-2">
                  <div
                    className="size-6 rounded-full bg-slate-200"
                    style={{
                      backgroundImage:
                        i === 0
                          ? 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCim-oTFLwtfhMSj3MgSjizjmR_rIWKpTm5Nhvy2apOpwee_X5c09-3cfSxU60UPzmaF_WvtcwGftBWOycLnQjPllpKm5AAG2E-ndU67A4AH-wtHWVKeQVAw0sG7PupFLfzj2hbtBfUjl4ym_ZmLBKkho6QEiH1XzdywfoFlr3DT45kXHjdhKDT4d5Chpl63-FmnuYnccYGvetsDRscwLeqhlv3kiJn9pi8zKZu9x36Mgt-H0Ef5Ha2ylYkIqOQfAmYWHeiYbZTZ5mH")'
                          : i === 1
                            ? 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuB6iTs54X6p3ZFLVsoKdwhBihdtx03e3YttrZO0iyOdsJKp5PGfvn8w0bPNuebHzXh3NpYiLlPGB8qBQEafSTv_WWuYkjlKskKBJuTDnaRvtphOX1pMN-bCE7UICWSVoLDdMji7m3cVe4dJuD86xH1bovYeEQjpxBvpYXXQZ1vZrwJK3zldXDEWrmXaTusHI83sMgom5_oDmJFeIbSdkbJqXrLXvhpAYNhkvfGQNfBeLpTkDDzKMQGKKbi5K2aoK5DkTaufAlGDH_zW")'
                            : 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuA4SXlQVZz1Ep4zCSuJGYcF0AK1BMtkAMRzfQKQ4LuGA7zkVIqSiIasBR8NiqtL9LhWHCjioiugKv23AOvamgApvjd_J9sYPsoZ8-pmMHv1V0-iTN5lg4uSZGx3yj8fyX17RnVc4L6TDbX_bdt2yWKM1NWVanjYT66HL7lwXCl68utvBcqLH6S-A99Z2nve5rGlfLyJDWEl22qlvRnQIdJaFu8pXDyjCBa-4EJiifzJCia6Gfn82JCGgRoT9epaCjajNhWskXyhBcny")',
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                    }}
                  />
                  <span className="text-xs text-slate-600">{job.hr}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Action Bar */}
        <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[390px] p-4 bg-white/90 backdrop-blur-lg border-t border-slate-200 flex gap-4">
          <button className="flex-1 bg-[#2761e7] text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 active:scale-95 transition-transform">
            <span className="material-symbols-outlined">chat</span>
            立即沟通
          </button>
        </div>
      </div>
    </div>
  )
}
