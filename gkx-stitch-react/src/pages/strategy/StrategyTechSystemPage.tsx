export default function StrategyTechSystemPage() {
  return (
    <div className="p-8 space-y-6">
<div className="max-w-[1200px] mx-auto px-6 py-8">
<nav className="flex items-center gap-2 mb-6 text-sm">
<a className="text-primary hover:underline" href="#">新型高端智库系统</a>
<span className="text-slate-400">/</span>
<a className="text-primary hover:underline" href="#">战略咨询智能支持</a>
<span className="text-slate-400">/</span>
<a className="text-primary hover:underline" href="#">技术体系分析</a>
<span className="text-slate-400">/</span>
<span className="text-slate-500">技术体系</span>
</nav>
<header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
<h1 className="text-3xl font-black tracking-tight text-slate-900 dark:text-white">技术体系</h1>
<div className="flex items-center gap-3">
<button className="bg-primary text-white px-5 py-2.5 rounded-lg font-bold flex items-center gap-2 hover:bg-primary/90 transition-colors shadow-sm">
<span className="material-symbols-outlined text-[20px]">add</span>
<span>新建体系</span>
</button>
<button className="bg-primary/10 text-primary px-5 py-2.5 rounded-lg font-bold flex items-center gap-2 hover:bg-primary/20 transition-colors">
<span className="material-symbols-outlined text-[20px]">ios_share</span>
<span>批量导出</span>
</button>
<button className="bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 p-2.5 rounded-lg hover:bg-slate-300 dark:hover:bg-slate-700 transition-colors">
<span className="material-symbols-outlined text-[20px]">refresh</span>
</button>
</div>
</header>
<section className="bg-white dark:bg-slate-900 rounded-xl p-6 shadow-sm mb-8 border border-slate-100 dark:border-slate-800">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 items-end">
<div className="lg:col-span-2">
<label className="block text-xs font-semibold text-slate-500 mb-2 uppercase tracking-wider">搜索体系名称</label>
<div className="relative">
<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">search</span>
<input className="w-full pl-10 pr-4 py-2.5 bg-slate-50 dark:bg-slate-800 border-none rounded-full focus:ring-2 focus:ring-primary text-sm" placeholder="输入关键字搜索..." type="text" />
</div>
</div>
<div>
<label className="block text-xs font-semibold text-slate-500 mb-2 uppercase tracking-wider">体系类型</label>
<select className="w-full px-4 py-2.5 bg-slate-50 dark:bg-slate-800 border-none rounded-lg focus:ring-2 focus:ring-primary text-sm appearance-none cursor-pointer">
<option>全部类型</option>
<option>前沿技术</option>
<option>成熟技术</option>
</select>
</div>
<div>
<label className="block text-xs font-semibold text-slate-500 mb-2 uppercase tracking-wider">发布状态</label>
<select className="w-full px-4 py-2.5 bg-slate-50 dark:bg-slate-800 border-none rounded-lg focus:ring-2 focus:ring-primary text-sm appearance-none cursor-pointer">
<option>所有状态</option>
<option>草稿</option>
<option>审核中</option>
<option>已发布</option>
</select>
</div>
<div>
<label className="block text-xs font-semibold text-slate-500 mb-2 uppercase tracking-wider">更新时间</label>
<div className="relative">
<span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 text-sm">calendar_today</span>
<input className="w-full pl-4 pr-10 py-2.5 bg-slate-50 dark:bg-slate-800 border-none rounded-lg focus:ring-2 focus:ring-primary text-sm cursor-pointer" placeholder="选择日期范围" type="text" />
</div>
</div>
</div>
</section>
<div className="flex gap-8 border-b border-slate-200 dark:border-slate-800 mb-8 overflow-x-auto no-scrollbar">
<button className="pb-4 px-2 text-primary border-b-2 border-primary font-bold whitespace-nowrap">体系概览</button>
<button className="pb-4 px-2 text-slate-500 hover:text-slate-700 dark:hover:text-slate-300 font-medium whitespace-nowrap">在线编辑器</button>
<button className="pb-4 px-2 text-slate-500 hover:text-slate-700 dark:hover:text-slate-300 font-medium whitespace-nowrap">体系案例库</button>
<button className="pb-4 px-2 text-slate-500 hover:text-slate-700 dark:hover:text-slate-300 font-medium whitespace-nowrap">专家意见反馈</button>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
<div className="bg-white dark:bg-slate-900 rounded-xl p-5 shadow-sm border border-slate-100 dark:border-slate-800 hover:shadow-md transition-shadow group">
<div className="flex justify-between items-start mb-4">
<div className="flex items-center gap-3">
<div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
<span className="material-symbols-outlined text-3xl">biotech</span>
</div>
<div>
<h3 className="font-bold text-slate-900 dark:text-white group-hover:text-primary transition-colors">量子计算技术体系 2.0</h3>
<p className="text-xs text-slate-400 mt-1">更新于 2023-10-24</p>
</div>
</div>
<span className="bg-amber-100 text-amber-700 text-[10px] px-2 py-0.5 rounded-full font-bold">12 意见</span>
</div>
<div className="flex flex-wrap gap-2 mb-6">
<span className="bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 text-xs px-2.5 py-1 rounded-md">前沿技术</span>
<span className="bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 text-xs px-2.5 py-1 rounded-md">重点领域</span>
<span className="bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 text-xs px-2.5 py-1 rounded-md">国家实验室</span>
</div>
<div className="mb-6">
<div className="flex justify-between items-center mb-2">
<span className="text-xs font-medium text-slate-500">编制进度</span>
<span className="text-xs font-bold text-primary">75%</span>
</div>
<div className="w-full h-1.5 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
<div className="bg-primary h-full rounded-full" style={{width: '75%'}}></div>
</div>
</div>
<div className="flex justify-between items-center pt-4 border-t border-slate-50 dark:border-slate-800">
<div className="flex -space-x-2">
<div className="w-7 h-7 rounded-full border-2 border-white dark:border-slate-900 bg-slate-200 overflow-hidden">
<img className="w-full h-full object-cover" data-alt="User profile avatar male" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDEGpz5bWwgiS5Yp9j9LDvhrD8T8cnhdC52FYBzG6tgy978OPwlBK-cuELZGGcTE_fklGW2_P7Ofnf7TzeXNg9dR4lJGcuhiAiktkb7oPvErVgtpXgrbXFYWx-FMixNi12iYaqzYOHVV4tJxZuWC7iSXrcg1V4sy1HAtgnxO4Vx-DClgwCLQjIaNsfLPlbWFtlLjyGwX3pEedNjXFhxAFiGAcfFUpWVYdZW7p8_X1u6n9cBU4F1J1G6OPdApldRXLXa6Vf5NkaNOiYF"/>
</div>
<div className="w-7 h-7 rounded-full border-2 border-white dark:border-slate-900 bg-slate-200 overflow-hidden">
<img className="w-full h-full object-cover" data-alt="User profile avatar female" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDMqFW7nlMgE7-6-zkJmJG2hSP5w_0ILUOgBGk9l9In3o-9jaZZQP-Djgeg9p-S7PZiHFKPnchI_BmGS6io3iFWzg9fTpQ-deTUcUa5OfawHtZUguus7diBM_8oVTHB8rE9kA8IRfwr0HrEme8mEZVZp1PdHnhLH1lSTiZKhOxWi0VSJUK5RRbszIWOhgjasSDKtyxpo1E_PjhJawjyZScGYgbbtXLGJuE6CBbopt38ez8ZZ7MeFoLR5YaTjjdXRTt-yVx7Vq3zGxEe"/>
</div>
<div className="w-7 h-7 rounded-full border-2 border-white dark:border-slate-900 bg-slate-200 overflow-hidden">
<img className="w-full h-full object-cover" data-alt="User profile avatar scientist" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC7z_SKP-ZitlHa6t8oAxMK0b9LHxj_480xLsgP_HbAc4lfgphx1KQ6Ze1wBcU7_m8dMe3JM431kve6w1KH_ZM5BGu8Ggb_HqRoscAd7XFD2IPquPPoMAZKehAcdJwB5neZiiu19HuYpvTPu284Z3t7h_iaOviroHYVt9aJW6yoIC8YE66fIVdvG-S1-MhBdOcIUkwAAhzQhh06O0b56o_RGbEo2jP0zpIx912ynsd9Dza02DNMbg4V3Ol_dokH8yqaW682zcb1Cg_E"/>
</div>
</div>
<div className="flex gap-2">
<button className="p-1.5 text-slate-400 hover:text-primary transition-colors" title="查看详情">
<span className="material-symbols-outlined text-lg">visibility</span>
</button>
<button className="p-1.5 text-slate-400 hover:text-primary transition-colors" title="编辑">
<span className="material-symbols-outlined text-lg">edit_note</span>
</button>
<button className="p-1.5 text-slate-400 hover:text-primary transition-colors" title="复制">
<span className="material-symbols-outlined text-lg">content_copy</span>
</button>
<button className="p-1.5 text-slate-400 hover:text-red-500 transition-colors" title="删除">
<span className="material-symbols-outlined text-lg">delete</span>
</button>
</div>
</div>
</div>
<div className="bg-white dark:bg-slate-900 rounded-xl p-5 shadow-sm border border-slate-100 dark:border-slate-800 hover:shadow-md transition-shadow group">
<div className="flex justify-between items-start mb-4">
<div className="flex items-center gap-3">
<div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
<span className="material-symbols-outlined text-3xl">rocket_launch</span>
</div>
<div>
<h3 className="font-bold text-slate-900 dark:text-white group-hover:text-primary transition-colors">深空探测运载体系</h3>
<p className="text-xs text-slate-400 mt-1">更新于 2023-11-02</p>
</div>
</div>
<span className="bg-amber-100 text-amber-700 text-[10px] px-2 py-0.5 rounded-full font-bold">5 意见</span>
</div>
<div className="flex flex-wrap gap-2 mb-6">
<span className="bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 text-xs px-2.5 py-1 rounded-md">航天工程</span>
<span className="bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 text-xs px-2.5 py-1 rounded-md">大型装备</span>
</div>
<div className="mb-6">
<div className="flex justify-between items-center mb-2">
<span className="text-xs font-medium text-slate-500">编制进度</span>
<span className="text-xs font-bold text-primary">42%</span>
</div>
<div className="w-full h-1.5 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
<div className="bg-primary h-full rounded-full" style={{width: '42%'}}></div>
</div>
</div>
<div className="flex justify-between items-center pt-4 border-t border-slate-50 dark:border-slate-800">
<div className="flex -space-x-2">
<div className="w-7 h-7 rounded-full border-2 border-white dark:border-slate-900 bg-slate-200 overflow-hidden">
<img className="w-full h-full object-cover" data-alt="User profile avatar engineer" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBv_o5R1UDYvSrzh_vad_gy5I9MZcKAs69GOYHIdQQB0Z204H_WzdSTQgNJ9OyFhFLKkpznuP984bJYz5pb_ba7Z5HSPuBFaIYr-yh79cyRrZn2PX-4sVn-DQedKelNqfcVLSRreUY2EuRcJN6i_AAkRgechidbYeVnqRxYFdXJAdbGpHGjLP24AN02fDLGqpZMRD4gceKM3zD5odjAkJByUXniJqdsg_C0bAdTDp9MKUM7-C-0ROMQ5lpx1oCdtjQ2i-wPYZ9VIIdJ"/>
</div>
<div className="w-7 h-7 rounded-full border-2 border-white dark:border-slate-900 bg-slate-200 overflow-hidden">
<img className="w-full h-full object-cover" data-alt="User profile avatar designer" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCuY-VhzXjwh45WN4W5a1Zng_qpZJRluK6CjfXJHVp1OfJmQD7E7jqTMR_5LBFzQ5duYbxVRXTcSezIJev_iuLz82mk8B-G-O_ry_Zpr1ZSTgI_WaQOpuV9aCDhzelV-3F_6d8SDe9pyEexRBrhkHwyfu1I692b0ASoKCb8T2VXrjeENTY08oYw18tttPdtZ5q0ih-Tjxp8lnE3OvnvamNJXxv8xUlb-6aMBZkuqC9pVVFREXJ2Z0NNYw4QcuTjETEfq5vbd3tk7bH4"/>
</div>
</div>
<div className="flex gap-2">
<button className="p-1.5 text-slate-400 hover:text-primary transition-colors">
<span className="material-symbols-outlined text-lg">visibility</span>
</button>
<button className="p-1.5 text-slate-400 hover:text-primary transition-colors">
<span className="material-symbols-outlined text-lg">edit_note</span>
</button>
<button className="p-1.5 text-slate-400 hover:text-primary transition-colors">
<span className="material-symbols-outlined text-lg">content_copy</span>
</button>
<button className="p-1.5 text-slate-400 hover:text-red-500 transition-colors">
<span className="material-symbols-outlined text-lg">delete</span>
</button>
</div>
</div>
</div>
<div className="bg-white dark:bg-slate-900 rounded-xl p-5 shadow-sm border border-slate-100 dark:border-slate-800 hover:shadow-md transition-shadow group">
<div className="flex justify-between items-start mb-4">
<div className="flex items-center gap-3">
<div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
<span className="material-symbols-outlined text-3xl">smart_toy</span>
</div>
<div>
<h3 className="font-bold text-slate-900 dark:text-white group-hover:text-primary transition-colors">通用人工智能大模型</h3>
<p className="text-xs text-slate-400 mt-1">更新于 2023-11-15</p>
</div>
</div>
<span className="bg-amber-100 text-amber-700 text-[10px] px-2 py-0.5 rounded-full font-bold">28 意见</span>
</div>
<div className="flex flex-wrap gap-2 mb-6">
<span className="bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 text-xs px-2.5 py-1 rounded-md">人工智能</span>
<span className="bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 text-xs px-2.5 py-1 rounded-md">核心软硬件</span>
</div>
<div className="mb-6">
<div className="flex justify-between items-center mb-2">
<span className="text-xs font-medium text-slate-500">编制进度</span>
<span className="text-xs font-bold text-primary">90%</span>
</div>
<div className="w-full h-1.5 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
<div className="bg-primary h-full rounded-full" style={{width: '90%'}}></div>
</div>
</div>
<div className="flex justify-between items-center pt-4 border-t border-slate-50 dark:border-slate-800">
<div className="flex -space-x-2">
<div className="w-7 h-7 rounded-full border-2 border-white dark:border-slate-900 bg-slate-200 overflow-hidden">
<img className="w-full h-full object-cover" data-alt="User profile avatar developer" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBt0UwkF34gci0-s0zacnmM0dODAPoj-mmNC9E0-mMeGIeAgaMtLiCFbCAKnblVhSsq_ei3TuK4cnizZg1PHO2BzAB3eVOrcIdWPbvnDERQb0g41svby85VMQMYGn9vuraWWB9llfk5jEMMDddVZtif_KHt2ECZbzUtapIgcvvcZjVpc_7bZ0NF9tiA1w1lvHlHrnSzLIW-MLFxtdJVoWqmkyhf8IcYvgz7SsfgFthrv2Re5rpdSF-fNTX_Ei_sFvY6Nk4ed2c5X6ng"/>
</div>
<div className="w-7 h-7 rounded-full border-2 border-white dark:border-slate-900 bg-slate-200 overflow-hidden">
<img className="w-full h-full object-cover" data-alt="User profile avatar expert" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAB7mHo87bmiEOzr-PZo9P8KKOfEPfn1PRB7lj1ElGZlIQoDuVJ1TNwdT-oygntQWrvie76G3kp_vts9CbFe6a8KsH88Co8Td9a8AbgPEKycVD6n6NTCvQSlG0gI_ps7HmMfVyuW_e7ViDpcNmXQQk5df7cV8n4bZrSmu_8N-DCKvX70VpZfFFVjq2Su2TKGztibJBxhEDjpzjw6MDC7iaVVADAVBSDLUysbcXvAQQ-moHEQfvtOMAFqzS0TsuB2s0vfwnVQ0IatxBk"/>
</div>
<div className="w-7 h-7 rounded-full border-2 border-white dark:border-slate-900 bg-slate-200 overflow-hidden">
<img className="w-full h-full object-cover" data-alt="User profile avatar researcher" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAvzbh0ZgEvBmslgj4sjSWPwYl4SsNsQT--C5eOE5JzkJD5ZPnzfFZAKkO1igc6U3dxbutlnMg0Fm6ygMVLytbrNZMGVqpa84gsskYQLwVMEjCU9Pq9cWTI9DFFtFaBw6lNXtGCCogRUlQVSUnR3_jkaboIkCIDUnTCA8Q1hArD7DJK9-25VT2aQKx0YLv5gUkAiaLN2-7Co1nNuCYqXWr1kqEj2JTmmuGtKtluKNVT-2EEA0XsByyHE2mfjcmTHVvIL8hJ5bkYPRJo"/>
</div>
</div>
<div className="flex gap-2">
<button className="p-1.5 text-slate-400 hover:text-primary transition-colors">
<span className="material-symbols-outlined text-lg">visibility</span>
</button>
<button className="p-1.5 text-slate-400 hover:text-primary transition-colors">
<span className="material-symbols-outlined text-lg">edit_note</span>
</button>
<button className="p-1.5 text-slate-400 hover:text-primary transition-colors">
<span className="material-symbols-outlined text-lg">content_copy</span>
</button>
<button className="p-1.5 text-slate-400 hover:text-red-500 transition-colors">
<span className="material-symbols-outlined text-lg">delete</span>
</button>
</div>
</div>
</div>
</div>
<section className="mt-12">
<div className="flex items-center justify-between mb-6">
<h2 className="text-xl font-bold flex items-center gap-2">
<span className="material-symbols-outlined text-primary">auto_awesome</span>
                    推荐参考案例
                </h2>
<button className="text-primary text-sm font-semibold hover:underline">查看全部</button>
</div>
<div className="flex gap-4 overflow-x-auto pb-4 no-scrollbar">
<div className="min-w-[280px] bg-white dark:bg-slate-900 rounded-lg p-4 shadow-sm border border-slate-100 dark:border-slate-800 flex flex-col gap-3">
<div className="flex justify-between items-start">
<h4 className="font-bold text-sm text-slate-800 dark:text-slate-200 line-clamp-1">美国 NASA 空间技术路线图</h4>
<span className="flex items-center text-amber-500 text-xs">
<span className="material-symbols-outlined text-sm">star</span>
                            4.9
                        </span>
</div>
<p className="text-xs text-slate-400">来源：国际航天研究机构</p>
<div className="mt-auto pt-2">
<button className="text-[11px] text-primary bg-primary/5 px-2 py-1 rounded hover:bg-primary/10">立即学习</button>
</div>
</div>
<div className="min-w-[280px] bg-white dark:bg-slate-900 rounded-lg p-4 shadow-sm border border-slate-100 dark:border-slate-800 flex flex-col gap-3">
<div className="flex justify-between items-start">
<h4 className="font-bold text-sm text-slate-800 dark:text-slate-200 line-clamp-1">欧盟地平线计划技术框架</h4>
<span className="flex items-center text-amber-500 text-xs">
<span className="material-symbols-outlined text-sm">star</span>
                            4.7
                        </span>
</div>
<p className="text-xs text-slate-400">来源：欧盟科学委员会</p>
<div className="mt-auto pt-2">
<button className="text-[11px] text-primary bg-primary/5 px-2 py-1 rounded hover:bg-primary/10">立即学习</button>
</div>
</div>
<div className="min-w-[280px] bg-white dark:bg-slate-900 rounded-lg p-4 shadow-sm border border-slate-100 dark:border-slate-800 flex flex-col gap-3">
<div className="flex justify-between items-start">
<h4 className="font-bold text-sm text-slate-800 dark:text-slate-200 line-clamp-1">半导体产业技术成熟度模型</h4>
<span className="flex items-center text-amber-500 text-xs">
<span className="material-symbols-outlined text-sm">star</span>
                            4.8
                        </span>
</div>
<p className="text-xs text-slate-400">来源：产业技术联盟</p>
<div className="mt-auto pt-2">
<button className="text-[11px] text-primary bg-primary/5 px-2 py-1 rounded hover:bg-primary/10">立即学习</button>
</div>
</div>
<div className="min-w-[280px] bg-white dark:bg-slate-900 rounded-lg p-4 shadow-sm border border-slate-100 dark:border-slate-800 flex flex-col gap-3">
<div className="flex justify-between items-start">
<h4 className="font-bold text-sm text-slate-800 dark:text-slate-200 line-clamp-1">国家能源互联网发展路径</h4>
<span className="flex items-center text-amber-500 text-xs">
<span className="material-symbols-outlined text-sm">star</span>
                            4.6
                        </span>
</div>
<p className="text-xs text-slate-400">来源：能源动力实验室</p>
<div className="mt-auto pt-2">
<button className="text-[11px] text-primary bg-primary/5 px-2 py-1 rounded hover:bg-primary/10">立即学习</button>
</div>
</div>
</div>
</section>
</div>

    </div>
  )
}
