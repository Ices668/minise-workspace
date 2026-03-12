import { useNavigate } from "react-router-dom";

export default function CompetitionReportPage() {
  const navigate = useNavigate();
  const toggleGroup = (event: any) => {
    const button = event.currentTarget;
    const container = button.nextElementSibling as HTMLElement | null;
    if (!container) return;
    const icon = button.querySelector('.expand-icon');
    if (container.style.maxHeight && container.style.maxHeight !== '0px') {
      container.style.maxHeight = '0';
      if (icon) icon.textContent = 'expand_more';
    } else {
      container.style.maxHeight = container.scrollHeight + 'px';
      if (icon) icon.textContent = 'expand_less';
    }
  };
  const toggleSidebar = () => {
    const sidebar = document.getElementById('sidebar');
    if (!sidebar) return;
    sidebar.style.display = sidebar.style.display === 'none' ? 'flex' : 'none';
  };

  return (
    <div className="antialiased">
      <div className="flex h-screen w-full bg-slate-50 overflow-hidden"><aside id="sidebar" className="w-64 bg-white border-r border-slate-200 flex flex-col z-30 shrink-0" style={{ minWidth: "256px" }}><div className="p-5 flex items-center gap-3 border-b border-slate-100"><div className="w-8 h-8 bg-[#1392ec] rounded-lg flex items-center justify-center"><span className="material-symbols-outlined text-white" style={{ fontSize: "20px" }}>insights</span></div><span className="font-bold text-base text-slate-800">GKX</span><a href="/home" onClick={(event) => { event.preventDefault(); navigate("/home"); }} className="ml-auto text-slate-400 hover:text-slate-600" title="返回首页"><span className="material-symbols-outlined" style={{ fontSize: "18px" }}>home</span></a></div><div className="px-4 pt-4 pb-1"><span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">基础研究决策</span></div><nav className="flex-1 px-2 py-2 overflow-y-auto space-y-0.5"><div className="nav-group"><button onClick={toggleGroup} className="w-full flex items-center gap-3 px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 rounded-lg transition-colors"><span className="material-symbols-outlined text-xl text-slate-400">checklist</span><span className="flex-1 text-left">基础研究问题清单</span><span className="material-symbols-outlined text-sm text-slate-400 expand-icon">expand_more</span></button><div className="group-children overflow-hidden" style={{ maxHeight: "0", transition: "max-height .25s ease" }}><a href="/research/problem-identification.html" onClick={(event) => { event.preventDefault(); navigate("/research/problem-identification.html"); }} className="flex items-center pl-12 pr-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#1392ec] rounded-lg nav-item" data-file="problem-identification.html">问题识别与清单研发</a><a href="/research/problem-trend.html" onClick={(event) => { event.preventDefault(); navigate("/research/problem-trend.html"); }} className="flex items-center pl-12 pr-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#1392ec] rounded-lg nav-item" data-file="problem-trend.html">问题发展趋势分析</a><a href="/research/competition-report.html" onClick={(event) => { event.preventDefault(); navigate("/research/competition-report.html"); }} className="flex items-center pl-12 pr-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#1392ec] rounded-lg nav-item" data-file="competition-report.html">国内外竞争格局报告</a></div></div><div className="nav-group"><button onClick={toggleGroup} className="w-full flex items-center gap-3 px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 rounded-lg transition-colors"><span className="material-symbols-outlined text-xl text-slate-400">location_city</span><span className="flex-1 text-left">基础研究部署清单</span><span className="material-symbols-outlined text-sm text-slate-400 expand-icon">expand_more</span></button><div className="group-children overflow-hidden" style={{ maxHeight: "0", transition: "max-height .25s ease" }}><a href="/research/shenzhen-list.html" onClick={(event) => { event.preventDefault(); navigate("/research/shenzhen-list.html"); }} className="flex items-center pl-12 pr-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#1392ec] rounded-lg nav-item" data-file="shenzhen-list.html">深圳市基础研究部署清单</a></div></div><div className="nav-group"><button onClick={toggleGroup} className="w-full flex items-center gap-3 px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 rounded-lg transition-colors"><span className="material-symbols-outlined text-xl text-slate-400">assessment</span><span className="flex-1 text-left">基础研究成果评估</span><span className="material-symbols-outlined text-sm text-slate-400 expand-icon">expand_more</span></button><div className="group-children overflow-hidden" style={{ maxHeight: "0", transition: "max-height .25s ease" }}></div></div></nav><div className="p-4 border-t border-slate-100"><div className="bg-slate-50 rounded-xl p-3 flex items-center gap-3"><div className="w-9 h-9 bg-[#1392ec] rounded-lg flex items-center justify-center"><span className="material-symbols-outlined text-white" style={{ fontSize: "18px" }}>manage_accounts</span></div><div><p className="text-xs font-bold text-slate-800">系统管理员</p><p className="text-[10px] text-slate-500">ID: GKX-0822</p></div></div></div></aside><div className="flex-1 flex flex-col min-w-0 overflow-hidden"><header className="h-14 bg-white border-b border-slate-200 flex items-center justify-between px-6 shrink-0"><div className="flex items-center gap-4"><button onClick={toggleSidebar} className="p-1 text-slate-500 hover:bg-slate-100 rounded-lg"><span className="material-symbols-outlined">menu</span></button><h2 className="text-sm font-bold text-slate-800">基础研究智能决策</h2></div><div className="flex-1 max-w-md mx-6"><div className="relative"><span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" style={{ fontSize: "18px" }}>search</span><input className="w-full pl-9 pr-4 py-1.5 bg-slate-100 rounded-full text-sm placeholder-slate-400 outline-none border-none" placeholder="搜索功能、报告..." type="text"/></div></div><div className="flex items-center gap-2"><button className="p-2 text-slate-500 hover:bg-slate-100 rounded-full relative"><span className="material-symbols-outlined" style={{ fontSize: "22px" }}>notifications</span><span className="absolute top-2 right-2 w-1.5 h-1.5 bg-red-500 rounded-full"></span></button></div></header><div className="flex-1 overflow-y-auto"><div className="max-w-[1280px] mx-auto px-6 py-8">
      
      <div className="flex items-center gap-2 mb-6 text-slate-500 dark:text-slate-400 text-sm">
      <span>新型高端智库系统</span>
      <span className="material-symbols-outlined text-sm">chevron_right</span>
      <span>基础研究智能决策</span>
      <span className="material-symbols-outlined text-sm">chevron_right</span>
      <span>基础研究问题清单</span>
      <span className="material-symbols-outlined text-sm">chevron_right</span>
      <span className="text-slate-900 dark:text-slate-100 font-medium">国内外竞争格局报告</span>
      </div>
      
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
      <h1 className="text-3xl font-black tracking-tight text-slate-900 dark:text-slate-100">国内外竞争格局报告</h1>
      <div className="flex items-center gap-3">
      <button className="flex items-center gap-2 px-5 py-2.5 bg-primary/10 text-primary font-bold rounded-xl hover:bg-primary/20 transition-colors">
      <span className="material-symbols-outlined text-[20px]">add_circle</span>
      <span>新建报告</span>
      </button>
      <button className="flex items-center gap-2 px-5 py-2.5 bg-primary text-white font-bold rounded-xl hover:opacity-90 transition-opacity">
      <span className="material-symbols-outlined text-[20px]">auto_awesome</span>
      <span>AI生成报告</span>
      </button>
      <button className="flex items-center gap-2 px-5 py-2.5 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 font-bold rounded-xl hover:bg-slate-50 transition-colors">
      <span className="material-symbols-outlined text-[20px]">picture_as_pdf</span>
      <span>导出PDF</span>
      </button>
      </div>
      </div>
      
      <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700 p-6 mb-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-end">
      <div className="col-span-1 md:col-span-1">
      <label className="block text-sm font-medium text-slate-600 dark:text-slate-400 mb-2 ml-1">研究课题搜索</label>
      <div className="relative">
      <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">search</span>
      <input className="w-full pl-10 pr-4 py-2.5 bg-slate-50 dark:bg-slate-900 border-none rounded-full text-sm focus:ring-2 focus:ring-primary/50" placeholder="搜索研究课题..." type="text"/>
      </div>
      </div>
      <div>
      <label className="block text-sm font-medium text-slate-600 dark:text-slate-400 mb-2 ml-1">对比国家/地区</label>
      <div className="relative">
      <select className="w-full px-4 py-2.5 bg-slate-50 dark:bg-slate-900 border-none rounded-full text-sm appearance-none focus:ring-2 focus:ring-primary/50">
      <option>全球主要国家</option>
      <option>G7国家</option>
      <option>金砖国家</option>
      </select>
      <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none">expand_more</span>
      </div>
      </div>
      <div>
      <label className="block text-sm font-medium text-slate-600 dark:text-slate-400 mb-2 ml-1">技术领域</label>
      <div className="relative">
      <select className="w-full px-4 py-2.5 bg-slate-50 dark:bg-slate-900 border-none rounded-full text-sm appearance-none focus:ring-2 focus:ring-primary/50">
      <option>量子信息科学</option>
      <option>人工智能</option>
      <option>生物制药</option>
      <option>新能源材料</option>
      </select>
      <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none">expand_more</span>
      </div>
      </div>
      <div className="flex items-center gap-3">
      <div className="flex-1 relative">
      <label className="block text-sm font-medium text-slate-600 dark:text-slate-400 mb-2 ml-1">评价指标</label>
      <select className="w-full px-4 py-2.5 bg-slate-50 dark:bg-slate-900 border-none rounded-full text-sm appearance-none focus:ring-2 focus:ring-primary/50">
      <option>综合竞争力</option>
      <option>论文引用量</option>
      <option>专利申请数</option>
      </select>
      <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none">expand_more</span>
      </div>
      <div className="flex gap-2 pt-7">
      <button className="bg-primary text-white px-6 py-2.5 rounded-full font-bold text-sm hover:opacity-90">查询</button>
      <button className="bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 px-4 py-2.5 rounded-full font-bold text-sm hover:bg-slate-200">重置</button>
      </div>
      </div>
      </div>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-slate-100 dark:border-slate-700 shadow-sm">
      <p className="text-sm text-slate-500 dark:text-slate-400 mb-1">核心竞争机构数</p>
      <div className="flex items-end gap-2">
      <span className="text-3xl font-black text-slate-900 dark:text-slate-100">142</span>
      <span className="text-emerald-500 text-sm font-bold flex items-center mb-1"><span className="material-symbols-outlined text-sm">arrow_upward</span>12%</span>
      </div>
      </div>
      <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-slate-100 dark:border-slate-700 shadow-sm">
      <p className="text-sm text-slate-500 dark:text-slate-400 mb-1">国内外产出比</p>
      <div className="flex items-end gap-2">
      <span className="text-3xl font-black text-slate-900 dark:text-slate-100">0.85</span>
      <span className="text-primary text-sm font-bold flex items-center mb-1">稳定增长</span>
      </div>
      </div>
      <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-slate-100 dark:border-slate-700 shadow-sm">
      <p className="text-sm text-slate-500 dark:text-slate-400 mb-1">领先领域数量</p>
      <div className="flex items-end gap-2">
      <span className="text-3xl font-black text-slate-900 dark:text-slate-100">28</span>
      <span className="text-emerald-500 text-sm font-bold flex items-center mb-1"><span className="material-symbols-outlined text-sm">arrow_upward</span>4</span>
      </div>
      </div>
      <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-slate-100 dark:border-slate-700 shadow-sm">
      <p className="text-sm text-slate-500 dark:text-slate-400 mb-1">年度变化趋势</p>
      <div className="flex items-end gap-2">
      <span className="text-3xl font-black text-slate-900 dark:text-slate-100">+15.4%</span>
      <span className="text-slate-400 text-sm font-medium mb-1">较去年同期</span>
      </div>
      </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
      
      <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-slate-100 dark:border-slate-700 shadow-sm">
      <div className="flex justify-between items-center mb-6">
      <h3 className="text-lg font-bold text-slate-800 dark:text-slate-200">竞争力量多维对比</h3>
      <div className="flex gap-4 text-xs">
      <div className="flex items-center gap-1.5"><span className="w-3 h-3 rounded-full bg-primary"></span><span>中国</span></div>
      <div className="flex items-center gap-1.5"><span className="w-3 h-3 rounded-full bg-slate-300"></span><span>美国</span></div>
      <div className="flex items-center gap-1.5"><span className="w-3 h-3 rounded-full bg-emerald-400"></span><span>欧盟</span></div>
      </div>
      </div>
      <div className="h-[300px] w-full chart-placeholder rounded-lg flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center">
      <div className="w-64 h-64 border border-primary/20 rounded-full flex items-center justify-center">
      <div className="w-48 h-48 border border-primary/20 rounded-full flex items-center justify-center">
      <div className="w-32 h-32 border border-primary/20 rounded-full"></div>
      </div>
      </div>
      <svg className="absolute w-full h-full p-4" viewBox="0 0 100 100">
      <polygon className="text-slate-200" fill="none" points="50,10 85,35 75,85 25,85 15,35" stroke="currentColor" strokeWidth="0.5"></polygon>
      <line className="text-slate-200" stroke="currentColor" strokeWidth="0.5" x1="50" x2="50" y1="50" y2="10"></line>
      <line className="text-slate-200" stroke="currentColor" strokeWidth="0.5" x1="50" x2="85" y1="50" y2="35"></line>
      <line className="text-slate-200" stroke="currentColor" strokeWidth="0.5" x1="50" x2="75" y1="50" y2="85"></line>
      <line className="text-slate-200" stroke="currentColor" strokeWidth="0.5" x1="50" x2="25" y1="50" y2="85"></line>
      <line className="text-slate-200" stroke="currentColor" strokeWidth="0.5" x1="50" x2="15" y1="50" y2="35"></line>
      
      <polygon fill="rgba(19, 182, 236, 0.3)" points="50,25 75,45 65,75 35,70 25,45" stroke="#13b6ec" strokeWidth="1.5"></polygon>
      </svg>
      <span className="absolute top-2 left-1/2 -translate-x-1/2 text-[10px] text-slate-500">人才密度</span>
      <span className="absolute right-6 top-1/3 text-[10px] text-slate-500">经费投入</span>
      <span className="absolute bottom-6 right-1/4 text-[10px] text-slate-500">专利质量</span>
      <span className="absolute bottom-6 left-1/4 text-[10px] text-slate-500">成果转化</span>
      <span className="absolute left-6 top-1/3 text-[10px] text-slate-500">学术影响力</span>
      </div>
      </div>
      </div>
      
      <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-slate-100 dark:border-slate-700 shadow-sm">
      <div className="flex justify-between items-center mb-6">
      <h3 className="text-lg font-bold text-slate-800 dark:text-slate-200">全球机构竞争力矩阵</h3>
      <div className="text-xs text-slate-400">坐标轴：影响力 vs. 规模</div>
      </div>
      <div className="h-[300px] w-full chart-placeholder rounded-lg p-8 relative">
      <div className="absolute inset-x-8 bottom-8 h-px bg-slate-300 dark:bg-slate-600"></div>
      <div className="absolute inset-y-8 left-8 w-px bg-slate-300 dark:bg-slate-600"></div>
      
      <div className="absolute top-1/4 right-1/4 w-12 h-12 bg-primary/40 border-2 border-primary rounded-full flex items-center justify-center text-[10px] font-bold">中科院</div>
      <div className="absolute top-1/3 left-1/2 w-10 h-10 bg-emerald-400/40 border-2 border-emerald-500 rounded-full flex items-center justify-center text-[10px] font-bold">MIT</div>
      <div className="absolute bottom-1/3 right-1/3 w-8 h-8 bg-amber-400/40 border-2 border-amber-500 rounded-full flex items-center justify-center text-[10px] font-bold">Stanford</div>
      <div className="absolute top-1/2 left-1/3 w-9 h-9 bg-slate-400/40 border-2 border-slate-500 rounded-full flex items-center justify-center text-[10px] font-bold">Tsinghua</div>
      <span className="absolute bottom-2 right-8 text-[10px] text-slate-400">研究规模 (Scale)</span>
      <span className="absolute left-2 top-8 text-[10px] text-slate-400 vertical-text [writing-mode:vertical-lr]">影响力 (Impact)</span>
      </div>
      </div>
      </div>
      
      <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-100 dark:border-slate-700 shadow-sm overflow-hidden">
      <div className="p-6 border-b border-slate-50 dark:border-slate-700 flex justify-between items-center">
      <h3 className="text-lg font-bold text-slate-800 dark:text-slate-200">研究力量明细列表</h3>
      <div className="flex items-center gap-2">
      <button className="p-2 hover:bg-slate-50 dark:hover:bg-slate-700 rounded-lg text-slate-400">
      <span className="material-symbols-outlined">filter_list</span>
      </button>
      <button className="p-2 hover:bg-slate-50 dark:hover:bg-slate-700 rounded-lg text-slate-400">
      <span className="material-symbols-outlined">download</span>
      </button>
      </div>
      </div>
      <div className="overflow-x-auto">
      <table className="w-full text-left border-collapse">
      <thead className="bg-slate-50/50 dark:bg-slate-900/50">
      <tr>
      <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">机构名称</th>
      <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">所属国家</th>
      <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">研究重点</th>
      <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider text-center">综合评分</th>
      <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider text-right">操作</th>
      </tr>
      </thead>
      <tbody className="divide-y divide-slate-100 dark:divide-slate-700">
      <tr className="hover:bg-slate-50/80 dark:hover:bg-slate-800/80 transition-colors">
      <td className="px-6 py-4">
      <div className="flex items-center gap-3">
      <div className="w-8 h-8 rounded bg-primary/10 flex items-center justify-center text-primary font-bold text-xs">CAS</div>
      <span className="text-sm font-semibold text-slate-800 dark:text-slate-200">中国科学院 (CAS)</span>
      </div>
      </td>
      <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-400">中国</td>
      <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-400">量子通信、拓扑物态、超导计算</td>
      <td className="px-6 py-4 text-center">
      <span className="px-3 py-1 bg-emerald-100 text-emerald-600 dark:bg-emerald-900/30 dark:text-emerald-400 rounded-full text-xs font-bold">98.2</span>
      </td>
      <td className="px-6 py-4 text-right">
      <div className="flex justify-end gap-3 text-sm">
      <button className="text-primary hover:underline font-medium">查看详情</button>
      <button className="text-slate-400 hover:text-slate-600 flex items-center gap-1">下钻<span className="material-symbols-outlined text-sm">arrow_forward</span></button>
      </div>
      </td>
      </tr>
      <tr className="hover:bg-slate-50/80 dark:hover:bg-slate-800/80 transition-colors">
      <td className="px-6 py-4">
      <div className="flex items-center gap-3">
      <div className="w-8 h-8 rounded bg-slate-200 dark:bg-slate-700 flex items-center justify-center text-slate-600 dark:text-slate-400 font-bold text-xs">MIT</div>
      <span className="text-sm font-semibold text-slate-800 dark:text-slate-200">麻省理工学院 (MIT)</span>
      </div>
      </td>
      <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-400">美国</td>
      <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-400">量子算法、光量子芯片、硬件架构</td>
      <td className="px-6 py-4 text-center">
      <span className="px-3 py-1 bg-emerald-100 text-emerald-600 dark:bg-emerald-900/30 dark:text-emerald-400 rounded-full text-xs font-bold">97.5</span>
      </td>
      <td className="px-6 py-4 text-right">
      <div className="flex justify-end gap-3 text-sm">
      <button className="text-primary hover:underline font-medium">查看详情</button>
      <button className="text-slate-400 hover:text-slate-600 flex items-center gap-1">下钻<span className="material-symbols-outlined text-sm">arrow_forward</span></button>
      </div>
      </td>
      </tr>
      <tr className="hover:bg-slate-50/80 dark:hover:bg-slate-800/80 transition-colors">
      <td className="px-6 py-4">
      <div className="flex items-center gap-3">
      <div className="w-8 h-8 rounded bg-primary/10 flex items-center justify-center text-primary font-bold text-xs">THU</div>
      <span className="text-sm font-semibold text-slate-800 dark:text-slate-200">清华大学</span>
      </div>
      </td>
      <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-400">中国</td>
      <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-400">离子阱量子计算、纠错编码</td>
      <td className="px-6 py-4 text-center">
      <span className="px-3 py-1 bg-emerald-100 text-emerald-600 dark:bg-emerald-900/30 dark:text-emerald-400 rounded-full text-xs font-bold">94.8</span>
      </td>
      <td className="px-6 py-4 text-right">
      <div className="flex justify-end gap-3 text-sm">
      <button className="text-primary hover:underline font-medium">查看详情</button>
      <button className="text-slate-400 hover:text-slate-600 flex items-center gap-1">下钻<span className="material-symbols-outlined text-sm">arrow_forward</span></button>
      </div>
      </td>
      </tr>
      <tr className="hover:bg-slate-50/80 dark:hover:bg-slate-800/80 transition-colors">
      <td className="px-6 py-4">
      <div className="flex items-center gap-3">
      <div className="w-8 h-8 rounded bg-slate-200 dark:bg-slate-700 flex items-center justify-center text-slate-600 dark:text-slate-400 font-bold text-xs">OX</div>
      <span className="text-sm font-semibold text-slate-800 dark:text-slate-200">牛津大学</span>
      </div>
      </td>
      <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-400">英国</td>
      <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-400">量子传感、精密测量、基础物理</td>
      <td className="px-6 py-4 text-center">
      <span className="px-3 py-1 bg-amber-100 text-amber-600 dark:bg-amber-900/30 dark:text-amber-400 rounded-full text-xs font-bold">91.3</span>
      </td>
      <td className="px-6 py-4 text-right">
      <div className="flex justify-end gap-3 text-sm">
      <button className="text-primary hover:underline font-medium">查看详情</button>
      <button className="text-slate-400 hover:text-slate-600 flex items-center gap-1">下钻<span className="material-symbols-outlined text-sm">arrow_forward</span></button>
      </div>
      </td>
      </tr>
      </tbody>
      </table>
      </div>
      <div className="p-6 bg-slate-50/30 dark:bg-slate-900/30 flex justify-between items-center text-xs text-slate-500">
      <span>显示第 1-4 条，共 142 条记录</span>
      <div className="flex gap-1">
      <button className="w-8 h-8 rounded border border-slate-200 dark:border-slate-700 flex items-center justify-center bg-white dark:bg-slate-800"><span className="material-symbols-outlined text-sm">chevron_left</span></button>
      <button className="w-8 h-8 rounded bg-primary text-white font-bold">1</button>
      <button className="w-8 h-8 rounded border border-slate-200 dark:border-slate-700 flex items-center justify-center bg-white dark:bg-slate-800">2</button>
      <button className="w-8 h-8 rounded border border-slate-200 dark:border-slate-700 flex items-center justify-center bg-white dark:bg-slate-800">3</button>
      <button className="w-8 h-8 rounded border border-slate-200 dark:border-slate-700 flex items-center justify-center bg-white dark:bg-slate-800"><span className="material-symbols-outlined text-sm">chevron_right</span></button>
      </div>
      </div>
      </div>
      </div></div></div></div>
    </div>
  );
}
