import { useNavigate } from "react-router-dom";

export default function ProblemTrendPage() {
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
      <div className="flex h-screen w-full bg-slate-50 overflow-hidden"><aside id="sidebar" className="w-64 bg-white border-r border-slate-200 flex flex-col z-30 shrink-0" style={{ minWidth: "256px" }}><div className="p-5 flex items-center gap-3 border-b border-slate-100"><div className="w-8 h-8 bg-[#1392ec] rounded-lg flex items-center justify-center"><span className="material-symbols-outlined text-white" style={{ fontSize: "20px" }}>insights</span></div><span className="font-bold text-base text-slate-800">GKX</span><a href="/home" onClick={(event) => { event.preventDefault(); navigate("/home"); }} className="ml-auto text-slate-400 hover:text-slate-600" title="返回首页"><span className="material-symbols-outlined" style={{ fontSize: "18px" }}>home</span></a></div><div className="px-4 pt-4 pb-1"><span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">基础研究决策</span></div><nav className="flex-1 px-2 py-2 overflow-y-auto space-y-0.5"><div className="nav-group"><button onClick={toggleGroup} className="w-full flex items-center gap-3 px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 rounded-lg transition-colors"><span className="material-symbols-outlined text-xl text-slate-400">checklist</span><span className="flex-1 text-left">基础研究问题清单</span><span className="material-symbols-outlined text-sm text-slate-400 expand-icon">expand_more</span></button><div className="group-children overflow-hidden" style={{ maxHeight: "0", transition: "max-height .25s ease" }}><a href="/research/problem-identification.html" onClick={(event) => { event.preventDefault(); navigate("/research/problem-identification.html"); }} className="flex items-center pl-12 pr-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#1392ec] rounded-lg nav-item" data-file="problem-identification.html">问题识别与清单研发</a><a href="/research/problem-trend.html" onClick={(event) => { event.preventDefault(); navigate("/research/problem-trend.html"); }} className="flex items-center pl-12 pr-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#1392ec] rounded-lg nav-item" data-file="problem-trend.html">问题发展趋势分析</a><a href="/research/competition-report.html" onClick={(event) => { event.preventDefault(); navigate("/research/competition-report.html"); }} className="flex items-center pl-12 pr-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#1392ec] rounded-lg nav-item" data-file="competition-report.html">国内外竞争格局报告</a></div></div><div className="nav-group"><button onClick={toggleGroup} className="w-full flex items-center gap-3 px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 rounded-lg transition-colors"><span className="material-symbols-outlined text-xl text-slate-400">location_city</span><span className="flex-1 text-left">基础研究部署清单</span><span className="material-symbols-outlined text-sm text-slate-400 expand-icon">expand_more</span></button><div className="group-children overflow-hidden" style={{ maxHeight: "0", transition: "max-height .25s ease" }}><a href="/research/shenzhen-list.html" onClick={(event) => { event.preventDefault(); navigate("/research/shenzhen-list.html"); }} className="flex items-center pl-12 pr-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#1392ec] rounded-lg nav-item" data-file="shenzhen-list.html">深圳市基础研究部署清单</a></div></div><div className="nav-group"><button onClick={toggleGroup} className="w-full flex items-center gap-3 px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 rounded-lg transition-colors"><span className="material-symbols-outlined text-xl text-slate-400">assessment</span><span className="flex-1 text-left">基础研究成果评估</span><span className="material-symbols-outlined text-sm text-slate-400 expand-icon">expand_more</span></button><div className="group-children overflow-hidden" style={{ maxHeight: "0", transition: "max-height .25s ease" }}></div></div></nav><div className="p-4 border-t border-slate-100"><div className="bg-slate-50 rounded-xl p-3 flex items-center gap-3"><div className="w-9 h-9 bg-[#1392ec] rounded-lg flex items-center justify-center"><span className="material-symbols-outlined text-white" style={{ fontSize: "18px" }}>manage_accounts</span></div><div><p className="text-xs font-bold text-slate-800">系统管理员</p><p className="text-[10px] text-slate-500">ID: GKX-0822</p></div></div></div></aside><div className="flex-1 flex flex-col min-w-0 overflow-hidden"><header className="h-14 bg-white border-b border-slate-200 flex items-center justify-between px-6 shrink-0"><div className="flex items-center gap-4"><button onClick={toggleSidebar} className="p-1 text-slate-500 hover:bg-slate-100 rounded-lg"><span className="material-symbols-outlined">menu</span></button><h2 className="text-sm font-bold text-slate-800">基础研究智能决策</h2></div><div className="flex-1 max-w-md mx-6"><div className="relative"><span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" style={{ fontSize: "18px" }}>search</span><input className="w-full pl-9 pr-4 py-1.5 bg-slate-100 rounded-full text-sm placeholder-slate-400 outline-none border-none" placeholder="搜索功能、报告..." type="text"/></div></div><div className="flex items-center gap-2"><button className="p-2 text-slate-500 hover:bg-slate-100 rounded-full relative"><span className="material-symbols-outlined" style={{ fontSize: "22px" }}>notifications</span><span className="absolute top-2 right-2 w-1.5 h-1.5 bg-red-500 rounded-full"></span></button></div></header><div className="flex-1 overflow-y-auto"><div className="min-h-screen p-6 max-w-[1440px] mx-auto">
      
      <nav className="flex items-center gap-2 text-sm font-medium mb-6 text-slate-500">
      <a className="hover:text-primary transition-colors" href="#">新型高端智库系统</a>
      <span className="material-symbols-outlined text-sm">chevron_right</span>
      <a className="hover:text-primary transition-colors" href="#">基础研究智能决策</a>
      <span className="material-symbols-outlined text-sm">chevron_right</span>
      <a className="hover:text-primary transition-colors" href="#">基础研究问题清单</a>
      <span className="material-symbols-outlined text-sm">chevron_right</span>
      <span className="text-slate-900 font-bold">问题发展趋势分析</span>
      </nav>
      
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
      <h1 className="text-3xl font-black tracking-tight text-slate-900">问题发展趋势分析</h1>
      <div className="flex items-center gap-3">
      <button className="flex items-center gap-2 px-5 py-2.5 bg-primary/10 text-primary font-semibold rounded-lg hover:bg-primary/20 transition-all border border-primary/20">
      <span className="material-symbols-outlined text-[20px]">settings_suggest</span>
      <span>预测模型配置</span>
      </button>
      <button className="flex items-center gap-2 px-5 py-2.5 bg-primary text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-primary/30 transition-all">
      <span className="material-symbols-outlined text-[20px]">analytics</span>
      <span>生成趋势报告</span>
      </button>
      <button className="flex items-center gap-2 px-5 py-2.5 bg-white border border-slate-200 text-slate-700 font-semibold rounded-lg hover:bg-slate-50 transition-all">
      <span className="material-symbols-outlined text-[20px]">ios_share</span>
      <span>导出</span>
      </button>
      </div>
      </div>
      
      <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 mb-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-end">
      <div className="space-y-2">
      <label className="text-sm font-bold text-slate-700 ml-1">问题关键词</label>
      <div className="relative">
      <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">search</span>
      <input className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border-none rounded-full text-sm focus:ring-2 focus:ring-primary/30 transition-all" placeholder="输入问题关键词..." type="text"/>
      </div>
      </div>
      <div className="space-y-2">
      <label className="text-sm font-bold text-slate-700 ml-1">所属学科</label>
      <select className="w-full px-4 py-2.5 bg-slate-50 border-none rounded-lg text-sm focus:ring-2 focus:ring-primary/30 appearance-none">
      <option>全部分科</option>
      <option>量子物理</option>
      <option>合成生物学</option>
      <option>人工智能基础</option>
      </select>
      </div>
      <div className="space-y-2">
      <label className="text-sm font-bold text-slate-700 ml-1">分析周期</label>
      <div className="flex items-center gap-2 px-4 py-2.5 bg-slate-50 rounded-lg">
      <span className="material-symbols-outlined text-slate-400 text-[20px]">calendar_today</span>
      <input className="bg-transparent border-none p-0 text-sm focus:ring-0 w-full cursor-pointer" type="text" value="2023-01-01 至 2024-12-31"/>
      </div>
      </div>
      <div className="flex items-center gap-3">
      <button className="flex-1 py-2.5 bg-primary text-white font-bold rounded-lg hover:bg-primary/90 transition-all">查询</button>
      <button className="px-6 py-2.5 bg-slate-100 text-slate-600 font-bold rounded-lg hover:bg-slate-200 transition-all">重置</button>
      </div>
      </div>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      <div className="bg-white p-5 rounded-xl border border-slate-100 shadow-sm flex items-center gap-4">
      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
      <span className="material-symbols-outlined">monitoring</span>
      </div>
      <div>
      <p className="text-xs font-medium text-slate-500 mb-0.5">监控问题总数</p>
      <p className="text-2xl font-black text-slate-900">1,284 <span className="text-xs font-normal text-emerald-500 ml-1">+12%</span></p>
      </div>
      </div>
      <div className="bg-white p-5 rounded-xl border border-slate-100 shadow-sm flex items-center gap-4">
      <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center text-orange-500">
      <span className="material-symbols-outlined">trending_up</span>
      </div>
      <div>
      <p className="text-xs font-medium text-slate-500 mb-0.5">高热增长问题</p>
      <p className="text-2xl font-black text-slate-900">85 <span className="text-xs font-normal text-slate-400 ml-1">个项目</span></p>
      </div>
      </div>
      <div className="bg-white p-5 rounded-xl border border-slate-100 shadow-sm flex items-center gap-4">
      <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center text-purple-500">
      <span className="material-symbols-outlined">hub</span>
      </div>
      <div>
      <p className="text-xs font-medium text-slate-500 mb-0.5">交叉学科占比</p>
      <p className="text-2xl font-black text-slate-900">42.8% <span className="text-xs font-normal text-emerald-500 ml-1">↑ 3%</span></p>
      </div>
      </div>
      <div className="bg-white p-5 rounded-xl border border-slate-100 shadow-sm flex items-center gap-4">
      <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center text-red-500">
      <span className="material-symbols-outlined">warning</span>
      </div>
      <div>
      <p className="text-xs font-medium text-slate-500 mb-0.5">趋势预警数</p>
      <p className="text-2xl font-black text-slate-900">14 <span className="text-xs font-normal text-red-500 ml-1">高危</span></p>
      </div>
      </div>
      </div>
      
      <div className="space-y-8">
      
      <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm">
      <div className="flex items-center justify-between mb-8">
      <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
      <span className="w-1.5 h-6 bg-primary rounded-full"></span>
                              问题热度演变趋势图
                          </h3>
      <div className="flex gap-2">
      <span className="flex items-center gap-1.5 text-xs font-medium text-slate-500">
      <span className="w-3 h-3 rounded-full bg-primary/60"></span> 热度指数
                              </span>
      <span className="flex items-center gap-1.5 text-xs font-medium text-slate-500 ml-4">
      <span className="w-3 h-3 rounded-full bg-slate-300"></span> 基准线
                              </span>
      </div>
      </div>
      <div className="relative h-[300px] w-full bg-gradient-to-b from-primary/5 to-transparent rounded-lg border-b border-l border-slate-100 flex items-end px-4">
      
      <div className="absolute inset-0 flex items-end overflow-hidden">
      <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 1000 300">
      <path d="M0,250 C100,220 200,280 300,180 C400,80 500,150 600,100 C700,50 800,120 900,60 L1000,40 L1000,300 L0,300 Z" fill="url(#grad1)" fillOpacity="0.1"></path>
      <path d="M0,250 C100,220 200,280 300,180 C400,80 500,150 600,100 C700,50 800,120 900,60 L1000,40" fill="none" stroke="#13b6ec" strokeWidth="3"></path>
      <defs>
      <linearGradient id="grad1" x1="0%" x2="0%" y1="0%" y2="100%">
      <stop offset="0%" style={{ stopColor: "#13b6ec", stopOpacity: "1" }}></stop>
      <stop offset="100%" style={{ stopColor: "#13b6ec", stopOpacity: "0" }}></stop>
      </linearGradient>
      </defs>
      
      <circle cx="300" cy="180" fill="#13b6ec" r="6"></circle>
      <circle cx="600" cy="100" fill="#13b6ec" r="6"></circle>
      </svg>
      
      <div className="absolute left-[30%] top-[45%] bg-white/90 p-2 rounded shadow-sm border border-slate-100 text-[10px]">
      <p className="font-bold text-slate-700">关键突破期</p>
      <p className="text-slate-500">相关论文发表量激增 240%</p>
      </div>
      <div className="absolute left-[60%] top-[15%] bg-white/90 p-2 rounded shadow-sm border border-slate-100 text-[10px]">
      <p className="font-bold text-slate-700">产业应用拐点</p>
      <p className="text-slate-500">头部企业进入研发中试阶段</p>
      </div>
      </div>
      
      <div className="absolute bottom-[-24px] w-full flex justify-between text-[11px] text-slate-400">
      <span>2023 Q1</span><span>2023 Q2</span><span>2023 Q3</span><span>2023 Q4</span><span>2024 Q1</span><span>2024 Q2</span><span>2024 Q3</span><span>2024 Q4</span>
      </div>
      </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      
      <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm">
      <h3 className="text-lg font-bold text-slate-900 mb-6 flex items-center gap-2">
      <span className="w-1.5 h-6 bg-primary rounded-full"></span>
                              跨领域关联强度矩阵
                          </h3>
      <div className="grid grid-cols-6 gap-1">
      
      <div className="col-span-1 space-y-1 flex flex-col justify-around text-[10px] text-slate-500 pr-2">
      <span>量子计算</span><span>生物工程</span><span>新材料</span><span>能源科学</span><span>空间技术</span>
      </div>
      
      <div className="col-span-5 grid grid-cols-5 gap-2">
      <div className="aspect-square bg-primary/90 rounded-sm" title="强关联"></div>
      <div className="aspect-square bg-primary/40 rounded-sm"></div>
      <div className="aspect-square bg-primary/10 rounded-sm"></div>
      <div className="aspect-square bg-primary/20 rounded-sm"></div>
      <div className="aspect-square bg-primary/05 rounded-sm"></div>
      <div className="aspect-square bg-primary/30 rounded-sm"></div>
      <div className="aspect-square bg-primary/70 rounded-sm"></div>
      <div className="aspect-square bg-primary/40 rounded-sm"></div>
      <div className="aspect-square bg-primary/10 rounded-sm"></div>
      <div className="aspect-square bg-primary/10 rounded-sm"></div>
      <div className="aspect-square bg-primary/05 rounded-sm"></div>
      <div className="aspect-square bg-primary/40 rounded-sm"></div>
      <div className="aspect-square bg-primary/80 rounded-sm"></div>
      <div className="aspect-square bg-primary/50 rounded-sm"></div>
      <div className="aspect-square bg-primary/20 rounded-sm"></div>
      <div className="aspect-square bg-primary/10 rounded-sm"></div>
      <div className="aspect-square bg-primary/10 rounded-sm"></div>
      <div className="aspect-square bg-primary/30 rounded-sm"></div>
      <div className="aspect-square bg-primary/70 rounded-sm"></div>
      <div className="aspect-square bg-primary/40 rounded-sm"></div>
      <div className="aspect-square bg-primary/20 rounded-sm"></div>
      <div className="aspect-square bg-primary/05 rounded-sm"></div>
      <div className="aspect-square bg-primary/10 rounded-sm"></div>
      <div className="aspect-square bg-primary/30 rounded-sm"></div>
      <div className="aspect-square bg-primary/60 rounded-sm"></div>
      </div>
      
      <div className="col-start-2 col-span-5 flex justify-around text-[10px] text-slate-500 pt-2">
      <span>计算</span><span>生物</span><span>材料</span><span>能源</span><span>空间</span>
      </div>
      </div>
      </div>
      
      <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm">
      <h3 className="text-lg font-bold text-slate-900 mb-6 flex items-center gap-2">
      <span className="w-1.5 h-6 bg-primary rounded-full"></span>
                              未来趋势预测看板
                          </h3>
      <div className="relative h-[180px] w-full border-b border-l border-slate-100">
      
      <svg className="w-full h-full" viewBox="0 0 400 150">
      
      <path d="M200,100 L350,20 L400,40 L400,140 L350,130 L200,100 Z" fill="#13b6ec" fillOpacity="0.05"></path>
      
      <path d="M0,130 L50,140 L100,110 L150,120 L200,100" fill="none" stroke="#64748b" strokeWidth="2"></path>
      
      <path d="M200,100 L250,80 L300,50 L350,20 L400,15" fill="none" stroke="#13b6ec" strokeDasharray="4,4" strokeWidth="2"></path>
      <circle cx="200" cy="100" fill="#13b6ec" r="4"></circle>
      </svg>
      <div className="absolute right-4 top-4 text-[11px]">
      <div className="flex items-center gap-2">
      <span className="w-2 h-2 rounded-full bg-primary"></span>
      <span className="text-slate-600 font-bold">置信区间: 95%</span>
      </div>
      <p className="text-slate-400 mt-1">预计2025年Q1达到峰值</p>
      </div>
      </div>
      <div className="mt-4 grid grid-cols-2 gap-4">
      <div className="bg-slate-50 p-3 rounded-lg text-center">
      <p className="text-[10px] text-slate-500 font-medium">预测增长率</p>
      <p className="text-lg font-black text-primary">+184%</p>
      </div>
      <div className="bg-slate-50 p-3 rounded-lg text-center">
      <p className="text-[10px] text-slate-500 font-medium">潜在影响力</p>
      <p className="text-lg font-black text-orange-500">极其显著</p>
      </div>
      </div>
      </div>
      </div>
      
      <div className="bg-white rounded-xl border border-slate-100 shadow-sm overflow-hidden">
      <div className="p-6 border-b border-slate-50">
      <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
      <span className="w-1.5 h-6 bg-primary rounded-full"></span>
                              问题明细分析表
                          </h3>
      </div>
      <div className="overflow-x-auto">
      <table className="w-full text-left border-collapse">
      <thead className="bg-slate-50 text-slate-500 text-xs uppercase tracking-wider font-bold">
      <tr>
      <th className="px-6 py-4">问题描述</th>
      <th className="px-6 py-4">当前热度</th>
      <th className="px-6 py-4">增长率</th>
      <th className="px-6 py-4">预测级别</th>
      <th className="px-6 py-4">更新时间</th>
      <th className="px-6 py-4 text-right">操作</th>
      </tr>
      </thead>
      <tbody className="divide-y divide-slate-100 text-sm">
      <tr className="hover:bg-slate-50/50 transition-colors">
      <td className="px-6 py-4 font-medium text-slate-800">拓扑绝缘体在室温环境下的超导机制</td>
      <td className="px-6 py-4">
      <div className="flex items-center gap-2">
      <div className="flex-1 h-1.5 bg-slate-100 rounded-full max-w-[60px]">
      <div className="h-full bg-primary rounded-full" style={{ width: "85%" }}></div>
      </div>
      <span className="text-xs">8,429</span>
      </div>
      </td>
      <td className="px-6 py-4 text-emerald-500 font-bold">+24.5%</td>
      <td className="px-6 py-4">
      <span className="px-2 py-1 bg-red-100 text-red-600 text-[10px] rounded-full font-bold">爆发级 (A)</span>
      </td>
      <td className="px-6 py-4 text-slate-500">2024-05-20</td>
      <td className="px-6 py-4 text-right">
      <button className="text-primary hover:underline font-bold mr-4">详情</button>
      <button className="text-slate-400 hover:text-primary transition-colors">
      <span className="material-symbols-outlined text-[18px]">share_reviews</span>
      </button>
      </td>
      </tr>
      <tr className="hover:bg-slate-50/50 transition-colors">
      <td className="px-6 py-4 font-medium text-slate-800">深度学习模型中不可解释性的数学基础</td>
      <td className="px-6 py-4">
      <div className="flex items-center gap-2">
      <div className="flex-1 h-1.5 bg-slate-100 rounded-full max-w-[60px]">
      <div className="h-full bg-primary rounded-full" style={{ width: "62%" }}></div>
      </div>
      <span className="text-xs">5,102</span>
      </div>
      </td>
      <td className="px-6 py-4 text-emerald-500 font-bold">+12.8%</td>
      <td className="px-6 py-4">
      <span className="px-2 py-1 bg-orange-100 text-orange-600 text-[10px] rounded-full font-bold">稳定增长 (B)</span>
      </td>
      <td className="px-6 py-4 text-slate-500">2024-05-19</td>
      <td className="px-6 py-4 text-right">
      <button className="text-primary hover:underline font-bold mr-4">详情</button>
      <button className="text-slate-400 hover:text-primary transition-colors">
      <span className="material-symbols-outlined text-[18px]">share_reviews</span>
      </button>
      </td>
      </tr>
      <tr className="hover:bg-slate-50/50 transition-colors">
      <td className="px-6 py-4 font-medium text-slate-800">合成生物技术在极端气候修复中的应用边界</td>
      <td className="px-6 py-4">
      <div className="flex items-center gap-2">
      <div className="flex-1 h-1.5 bg-slate-100 rounded-full max-w-[60px]">
      <div className="h-full bg-primary rounded-full" style={{ width: "45%" }}></div>
      </div>
      <span className="text-xs">3,892</span>
      </div>
      </td>
      <td className="px-6 py-4 text-slate-400 font-bold">+5.2%</td>
      <td className="px-6 py-4">
      <span className="px-2 py-1 bg-blue-100 text-blue-600 text-[10px] rounded-full font-bold">潜在突破 (C)</span>
      </td>
      <td className="px-6 py-4 text-slate-500">2024-05-18</td>
      <td className="px-6 py-4 text-right">
      <button className="text-primary hover:underline font-bold mr-4">详情</button>
      <button className="text-slate-400 hover:text-primary transition-colors">
      <span className="material-symbols-outlined text-[18px]">share_reviews</span>
      </button>
      </td>
      </tr>
      </tbody>
      </table>
      </div>
      <div className="p-4 bg-slate-50 flex justify-between items-center text-xs text-slate-500">
      <span>显示 1 到 10 条，共 1,284 条数据</span>
      <div className="flex gap-1">
      <button className="p-1 px-2 border border-slate-200 rounded hover:bg-white disabled:opacity-50" disabled>上一页</button>
      <button className="p-1 px-3 border border-primary bg-primary text-white rounded">1</button>
      <button className="p-1 px-3 border border-slate-200 rounded hover:bg-white">2</button>
      <button className="p-1 px-3 border border-slate-200 rounded hover:bg-white">3</button>
      <button className="p-1 px-2 border border-slate-200 rounded hover:bg-white">下一页</button>
      </div>
      </div>
      </div>
      </div>
      </div></div></div></div>
    </div>
  );
}
