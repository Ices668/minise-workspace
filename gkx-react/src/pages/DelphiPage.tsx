import { useNavigate } from "react-router-dom";

export default function DelphiPage() {
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
      <div className="flex h-screen w-full bg-slate-50 overflow-hidden"><aside id="sidebar" className="w-64 bg-white border-r border-slate-200 flex flex-col z-30 shrink-0" style={{ minWidth: "256px" }}><div className="p-5 flex items-center gap-3 border-b border-slate-100"><div className="w-8 h-8 bg-[#0d9488] rounded-lg flex items-center justify-center"><span className="material-symbols-outlined text-white" style={{ fontSize: "20px" }}>insights</span></div><span className="font-bold text-base text-slate-800">GKX</span><a href="/home" onClick={(event) => { event.preventDefault(); navigate("/home"); }} className="ml-auto text-slate-400 hover:text-slate-600" title="返回首页"><span className="material-symbols-outlined" style={{ fontSize: "18px" }}>home</span></a></div><div className="px-4 pt-4 pb-1"><span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">战略咨询体系</span></div><nav className="flex-1 px-2 py-2 overflow-y-auto space-y-0.5"><div className="nav-group"><button onClick={toggleGroup} className="w-full flex items-center gap-3 px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 rounded-lg transition-colors"><span className="material-symbols-outlined text-xl text-slate-400">search_check</span><span className="flex-1 text-left">研究需求分析</span><span className="material-symbols-outlined text-sm text-slate-400 expand-icon">expand_more</span></button><div className="group-children overflow-hidden" style={{ maxHeight: "0", transition: "max-height .25s ease" }}><a href="/strategy/entity-list.html" onClick={(event) => { event.preventDefault(); navigate("/strategy/entity-list.html"); }} className="flex items-center pl-12 pr-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#0d9488] rounded-lg nav-item" data-file="entity-list.html">科技实体清单</a><a href="/strategy/frontier-tech.html" onClick={(event) => { event.preventDefault(); navigate("/strategy/frontier-tech.html"); }} className="flex items-center pl-12 pr-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#0d9488] rounded-lg nav-item" data-file="frontier-tech.html">颠覆性与前沿技术分析</a><a href="/strategy/media-focus.html" onClick={(event) => { event.preventDefault(); navigate("/strategy/media-focus.html"); }} className="flex items-center pl-12 pr-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#0d9488] rounded-lg nav-item" data-file="media-focus.html">媒体聚焦</a></div></div><div className="nav-group"><button onClick={toggleGroup} className="w-full flex items-center gap-3 px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 rounded-lg transition-colors"><span className="material-symbols-outlined text-xl text-slate-400">hub</span><span className="flex-1 text-left">技术体系分析</span><span className="material-symbols-outlined text-sm text-slate-400 expand-icon">expand_more</span></button><div className="group-children overflow-hidden" style={{ maxHeight: "0", transition: "max-height .25s ease" }}><a href="/strategy/tech-system.html" onClick={(event) => { event.preventDefault(); navigate("/strategy/tech-system.html"); }} className="flex items-center pl-12 pr-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#0d9488] rounded-lg nav-item" data-file="tech-system.html">技术体系</a><a href="/strategy/paper-dashboard.html" onClick={(event) => { event.preventDefault(); navigate("/strategy/paper-dashboard.html"); }} className="flex items-center pl-12 pr-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#0d9488] rounded-lg nav-item" data-file="paper-dashboard.html">论文分析</a><a href="/strategy/patent.html" onClick={(event) => { event.preventDefault(); navigate("/strategy/patent.html"); }} className="flex items-center pl-12 pr-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#0d9488] rounded-lg nav-item" data-file="patent.html">专利分析</a><a href="/strategy/project-stats.html" onClick={(event) => { event.preventDefault(); navigate("/strategy/project-stats.html"); }} className="flex items-center pl-12 pr-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#0d9488] rounded-lg nav-item" data-file="project-stats.html">科研项目分析</a><a href="/strategy/social-network-import.html" onClick={(event) => { event.preventDefault(); navigate("/strategy/social-network-import.html"); }} className="flex items-center pl-12 pr-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#0d9488] rounded-lg nav-item" data-file="social-network-import.html">社会网络分析</a></div></div><div className="nav-group"><button onClick={toggleGroup} className="w-full flex items-center gap-3 px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 rounded-lg transition-colors"><span className="material-symbols-outlined text-xl text-slate-400">trending_up</span><span className="flex-1 text-left">技术趋势分析</span><span className="material-symbols-outlined text-sm text-slate-400 expand-icon">expand_more</span></button><div className="group-children overflow-hidden" style={{ maxHeight: "0", transition: "max-height .25s ease" }}><a href="/strategy/clustering-task.html" onClick={(event) => { event.preventDefault(); navigate("/strategy/clustering-task.html"); }} className="flex items-center pl-12 pr-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#0d9488] rounded-lg nav-item" data-file="clustering-task.html">聚类分析</a><a href="/strategy/common-network-task.html" onClick={(event) => { event.preventDefault(); navigate("/strategy/common-network-task.html"); }} className="flex items-center pl-12 pr-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#0d9488] rounded-lg nav-item" data-file="common-network-task.html">共性网络分析</a><a href="/strategy/tech-trend.html" onClick={(event) => { event.preventDefault(); navigate("/strategy/tech-trend.html"); }} className="flex items-center pl-12 pr-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#0d9488] rounded-lg nav-item" data-file="tech-trend.html">技术趋势分析</a><a href="/strategy/tech-alert.html" onClick={(event) => { event.preventDefault(); navigate("/strategy/tech-alert.html"); }} className="flex items-center pl-12 pr-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#0d9488] rounded-lg nav-item" data-file="tech-alert.html">技术动态预警</a></div></div><div className="nav-group"><button onClick={toggleGroup} className="w-full flex items-center gap-3 px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 rounded-lg transition-colors"><span className="material-symbols-outlined text-xl text-slate-400">route</span><span className="flex-1 text-left">领域技术线路</span><span className="material-symbols-outlined text-sm text-slate-400 expand-icon">expand_more</span></button><div className="group-children overflow-hidden" style={{ maxHeight: "0", transition: "max-height .25s ease" }}><a href="/strategy/delphi.html" onClick={(event) => { event.preventDefault(); navigate("/strategy/delphi.html"); }} className="flex items-center pl-12 pr-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#0d9488] rounded-lg nav-item" data-file="delphi.html">德尔菲问卷</a><a href="/strategy/tech-roadmap.html" onClick={(event) => { event.preventDefault(); navigate("/strategy/tech-roadmap.html"); }} className="flex items-center pl-12 pr-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#0d9488] rounded-lg nav-item" data-file="tech-roadmap.html">技术发展线路</a></div></div><div className="nav-group"><button onClick={toggleGroup} className="w-full flex items-center gap-3 px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 rounded-lg transition-colors"><span className="material-symbols-outlined text-xl text-slate-400">description</span><span className="flex-1 text-left">战略咨询报告</span><span className="material-symbols-outlined text-sm text-slate-400 expand-icon">expand_more</span></button><div className="group-children overflow-hidden" style={{ maxHeight: "0", transition: "max-height .25s ease" }}><a href="/strategy/report-generation.html" onClick={(event) => { event.preventDefault(); navigate("/strategy/report-generation.html"); }} className="flex items-center pl-12 pr-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#0d9488] rounded-lg nav-item" data-file="strategy-shell.html">研究报告管理</a><a href="/strategy/insight-publish.html" onClick={(event) => { event.preventDefault(); navigate("/strategy/insight-publish.html"); }} className="flex items-center pl-12 pr-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#0d9488] rounded-lg nav-item" data-file="insight-publish.html">洞察报告发布</a><a href="/strategy/hot-analysis.html" onClick={(event) => { event.preventDefault(); navigate("/strategy/hot-analysis.html"); }} className="flex items-center pl-12 pr-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#0d9488] rounded-lg nav-item" data-file="hot-analysis.html">热点分析</a><a href="/strategy/report-generation.html" onClick={(event) => { event.preventDefault(); navigate("/strategy/report-generation.html"); }} className="flex items-center pl-12 pr-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#0d9488] rounded-lg nav-item" data-file="report-generation.html">战略咨询报告生成</a></div></div><div className="nav-group"><button onClick={toggleGroup} className="w-full flex items-center gap-3 px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 rounded-lg transition-colors"><span className="material-symbols-outlined text-xl text-slate-400">folder_special</span><span className="flex-1 text-left">战略咨询成果</span><span className="material-symbols-outlined text-sm text-slate-400 expand-icon">expand_more</span></button><div className="group-children overflow-hidden" style={{ maxHeight: "0", transition: "max-height .25s ease" }}><a href="/strategy/strategy-cases.html" onClick={(event) => { event.preventDefault(); navigate("/strategy/strategy-cases.html"); }} className="flex items-center pl-12 pr-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#0d9488] rounded-lg nav-item" data-file="strategy-cases.html">战略咨询案例展示</a></div></div><div className="nav-group"><button onClick={toggleGroup} className="w-full flex items-center gap-3 px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 rounded-lg transition-colors"><span className="material-symbols-outlined text-xl text-slate-400">query_stats</span><span className="flex-1 text-left">智能问数</span><span className="material-symbols-outlined text-sm text-slate-400 expand-icon">expand_more</span></button><div className="group-children overflow-hidden" style={{ maxHeight: "0", transition: "max-height .25s ease" }}><a href="/strategy/analysis-start.html" onClick={(event) => { event.preventDefault(); navigate("/strategy/analysis-start.html"); }} className="flex items-center pl-12 pr-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#0d9488] rounded-lg nav-item" data-file="analysis-start.html">开始分析</a><a href="/strategy/case-share.html" onClick={(event) => { event.preventDefault(); navigate("/strategy/case-share.html"); }} className="flex items-center pl-12 pr-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#0d9488] rounded-lg nav-item" data-file="case-share.html">案例分享</a><a href="/strategy/multi-source-data.html" onClick={(event) => { event.preventDefault(); navigate("/strategy/multi-source-data.html"); }} className="flex items-center pl-12 pr-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#0d9488] rounded-lg nav-item" data-file="multi-source-data.html">多源数据接入</a><a href="/strategy/data-dashboard.html" onClick={(event) => { event.preventDefault(); navigate("/strategy/data-dashboard.html"); }} className="flex items-center pl-12 pr-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#0d9488] rounded-lg nav-item" data-file="data-dashboard.html">数据看板显示</a><a href="/strategy/report-gen-ai.html" onClick={(event) => { event.preventDefault(); navigate("/strategy/report-gen-ai.html"); }} className="flex items-center pl-12 pr-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#0d9488] rounded-lg nav-item" data-file="report-gen-ai.html">一键报告生成</a></div></div></nav><div className="p-4 border-t border-slate-100"><div className="bg-slate-50 rounded-xl p-3 flex items-center gap-3"><div className="w-9 h-9 bg-[#0d9488] rounded-lg flex items-center justify-center"><span className="material-symbols-outlined text-white" style={{ fontSize: "18px" }}>manage_accounts</span></div><div><p className="text-xs font-bold text-slate-800">系统管理员</p><p className="text-[10px] text-slate-500">ID: GKX-0822</p></div></div></div></aside><div className="flex-1 flex flex-col min-w-0 overflow-hidden"><header className="h-14 bg-white border-b border-slate-200 flex items-center justify-between px-6 shrink-0"><div className="flex items-center gap-4"><button onClick={toggleSidebar} className="p-1 text-slate-500 hover:bg-slate-100 rounded-lg"><span className="material-symbols-outlined">menu</span></button><h2 className="text-sm font-bold text-slate-800">战略咨询智能支持</h2></div><div className="flex-1 max-w-md mx-6"><div className="relative"><span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" style={{ fontSize: "18px" }}>search</span><input className="w-full pl-9 pr-4 py-1.5 bg-slate-100 rounded-full text-sm placeholder-slate-400 outline-none border-none" placeholder="搜索功能、报告..." type="text"/></div></div><div className="flex items-center gap-2"><button className="p-2 text-slate-500 hover:bg-slate-100 rounded-full relative"><span className="material-symbols-outlined" style={{ fontSize: "22px" }}>notifications</span><span className="absolute top-2 right-2 w-1.5 h-1.5 bg-red-500 rounded-full"></span></button></div></header><div className="flex-1 overflow-y-auto"><div className="max-w-[1200px] mx-auto px-6 py-8">
      
      <nav className="flex items-center gap-2 mb-6 text-sm font-medium">
      <a className="text-primary hover:opacity-80" href="#">新型高端智库系统</a>
      <span className="text-slate-400">/</span>
      <a className="text-primary hover:opacity-80" href="#">战略咨询智能支持</a>
      <span className="text-slate-400">/</span>
      <a className="text-primary hover:opacity-80" href="#">领域技术线路</a>
      <span className="text-slate-400">/</span>
      <span className="text-slate-600 dark:text-slate-400">德尔菲问卷</span>
      </nav>
      
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
      <h1 className="text-3xl font-black tracking-tight text-slate-900 dark:text-white">德尔菲问卷</h1>
      <div className="flex items-center gap-3">
      <button className="flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary font-bold rounded-lg hover:bg-primary/20 transition-colors">
      <span className="material-symbols-outlined text-[20px]">add_circle</span>
      <span>新建问卷轮次</span>
      </button>
      <button className="flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary font-bold rounded-lg hover:bg-primary/20 transition-colors">
      <span className="material-symbols-outlined text-[20px]">file_download</span>
      <span>导出分析报告</span>
      </button>
      <button className="flex items-center gap-2 px-6 py-2 bg-primary text-white font-bold rounded-lg hover:opacity-90 shadow-lg shadow-primary/20 transition-all">
      <span className="material-symbols-outlined text-[20px]">send</span>
      <span>一键发放</span>
      </button>
      </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-primary/10 shadow-sm flex flex-col justify-between">
      <div>
      <p className="text-slate-500 dark:text-slate-400 text-sm mb-1">当前问卷轮次</p>
      <div className="flex items-baseline gap-2">
      <span className="text-3xl font-bold text-slate-900 dark:text-white">第 2 轮</span>
      <span className="text-emerald-500 text-sm font-semibold flex items-center">
      <span className="material-symbols-outlined text-[16px]">trending_up</span>+1轮
                              </span>
      </div>
      </div>
      <div className="mt-4 flex gap-1">
      <div className="h-1.5 w-full bg-primary rounded-full"></div>
      <div className="h-1.5 w-full bg-primary rounded-full"></div>
      <div className="h-1.5 w-full bg-slate-200 dark:bg-slate-700 rounded-full"></div>
      </div>
      </div>
      <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-primary/10 shadow-sm">
      <div className="flex justify-between items-start mb-4">
      <div>
      <p className="text-slate-500 dark:text-slate-400 text-sm mb-1">专家回收率</p>
      <span className="text-3xl font-bold text-slate-900 dark:text-white">85.4%</span>
      </div>
      <span className="text-emerald-500 text-sm font-semibold flex items-center">
      <span className="material-symbols-outlined text-[16px]">trending_up</span>+12%
                          </span>
      </div>
      <div className="w-full bg-slate-100 dark:bg-slate-700 h-2 rounded-full overflow-hidden">
      <div className="bg-primary h-full rounded-full" style={{ width: "85.4%" }}></div>
      </div>
      <div className="flex justify-between mt-2 text-[10px] text-slate-400 uppercase tracking-wider">
      <span>已回收 128</span>
      <span>总专家 150</span>
      </div>
      </div>
      <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-primary/10 shadow-sm flex items-center justify-between">
      <div>
      <p className="text-slate-500 dark:text-slate-400 text-sm mb-1">专家意见共识度</p>
      <div className="flex items-baseline gap-2">
      <span className="text-3xl font-bold text-slate-900 dark:text-white">78%</span>
      <span className="text-emerald-500 text-sm font-semibold flex items-center">
      <span className="material-symbols-outlined text-[16px]">trending_up</span>+5%
                              </span>
      </div>
      </div>
      
      <div className="relative w-16 h-16">
      <svg className="w-full h-full transform -rotate-90">
      <circle className="text-slate-100 dark:text-slate-700" cx="32" cy="32" fill="transparent" r="28" stroke="currentColor" strokeWidth="6"></circle>
      <circle className="text-primary" cx="32" cy="32" fill="transparent" r="28" stroke="currentColor" strokeDasharray="175.9" strokeDashoffset="38.7" strokeWidth="6"></circle>
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
      <span className="material-symbols-outlined text-primary text-[20px]">groups</span>
      </div>
      </div>
      </div>
      </div>
      
      <div className="bg-white dark:bg-slate-800 p-5 rounded-xl border border-primary/10 shadow-sm mb-8">
      <div className="flex flex-wrap items-center gap-4">
      <div className="flex-1 min-w-[240px] relative">
      <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">search</span>
      <input className="w-full pl-10 pr-4 py-2 bg-slate-50 dark:bg-slate-900 border-none rounded-full text-sm focus:ring-2 focus:ring-primary/50" placeholder="搜索问卷名称..." type="text"/>
      </div>
      <div className="flex items-center gap-3">
      <select className="bg-slate-50 dark:bg-slate-900 border-none rounded-lg text-sm px-4 py-2 focus:ring-2 focus:ring-primary/50">
      <option>所有发放状态</option>
      <option>进行中</option>
      <option>已结束</option>
      </select>
      <select className="bg-slate-50 dark:bg-slate-900 border-none rounded-lg text-sm px-4 py-2 focus:ring-2 focus:ring-primary/50">
      <option>所有技术领域</option>
      <option>量子科技</option>
      <option>人工智能</option>
      <option>生物医药</option>
      </select>
      <button className="px-6 py-2 bg-primary text-white text-sm font-bold rounded-lg hover:opacity-90">查询</button>
      <button className="px-6 py-2 bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 text-sm font-bold rounded-lg hover:bg-slate-200 transition-colors">重置</button>
      </div>
      </div>
      </div>
      
      <div className="bg-white dark:bg-slate-800 rounded-xl border border-primary/10 shadow-sm overflow-hidden">
      <div className="border-b border-primary/10 px-6">
      <div className="flex gap-8">
      <button className="py-4 border-b-2 border-primary text-primary font-bold text-sm">问卷列表</button>
      <button className="py-4 border-b-2 border-transparent text-slate-500 dark:text-slate-400 font-medium text-sm hover:text-primary transition-colors">分析看板</button>
      </div>
      </div>
      
      <div className="overflow-x-auto">
      <table className="w-full text-left">
      <thead>
      <tr className="bg-slate-50/50 dark:bg-slate-900/50 text-slate-500 dark:text-slate-400 text-xs font-bold uppercase tracking-wider">
      <th className="px-6 py-4">问卷名称</th>
      <th className="px-6 py-4">当前轮次</th>
      <th className="px-6 py-4">发放/回收</th>
      <th className="px-6 py-4">截止日期</th>
      <th className="px-6 py-4">状态</th>
      <th className="px-6 py-4 text-right">操作</th>
      </tr>
      </thead>
      <tbody className="divide-y divide-primary/5">
      <tr className="hover:bg-primary/5 transition-colors">
      <td className="px-6 py-4">
      <p className="text-sm font-semibold text-slate-900 dark:text-white">2024量子通信关键技术预见</p>
      <p className="text-xs text-slate-400">领域：前沿物理</p>
      </td>
      <td className="px-6 py-4">
      <span className="text-sm font-medium">第 2 轮</span>
      </td>
      <td className="px-6 py-4">
      <div className="text-sm">
      <span className="font-bold text-primary">42</span> / 50
                                          <div className="w-20 h-1 bg-slate-100 dark:bg-slate-700 mt-1 rounded-full overflow-hidden">
      <div className="bg-primary h-full" style={{ width: "84%" }}></div>
      </div>
      </div>
      </td>
      <td className="px-6 py-4 text-sm">2024-12-30</td>
      <td className="px-6 py-4">
      <span className="px-2 py-1 rounded-full bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400 text-[10px] font-bold">进行中</span>
      </td>
      <td className="px-6 py-4 text-right space-x-3">
      <button className="text-primary text-sm font-semibold hover:underline">查看详情</button>
      <button className="text-primary text-sm font-semibold hover:underline">共识分析</button>
      <button className="text-primary text-sm font-semibold hover:underline">进入下轮</button>
      </td>
      </tr>
      <tr className="hover:bg-primary/5 transition-colors">
      <td className="px-6 py-4">
      <p className="text-sm font-semibold text-slate-900 dark:text-white">新一代人工智能伦理指南调研</p>
      <p className="text-xs text-slate-400">领域：社会科学</p>
      </td>
      <td className="px-6 py-4">
      <span className="text-sm font-medium">第 3 轮</span>
      </td>
      <td className="px-6 py-4">
      <div className="text-sm">
      <span className="font-bold text-primary">100</span> / 100
                                          <div className="w-20 h-1 bg-slate-100 dark:bg-slate-700 mt-1 rounded-full overflow-hidden">
      <div className="bg-primary h-full" style={{ width: "100%" }}></div>
      </div>
      </div>
      </td>
      <td className="px-6 py-4 text-sm">2024-10-15</td>
      <td className="px-6 py-4">
      <span className="px-2 py-1 rounded-full bg-slate-100 text-slate-600 dark:bg-slate-700 dark:text-slate-300 text-[10px] font-bold">已结束</span>
      </td>
      <td className="px-6 py-4 text-right space-x-3">
      <button className="text-primary text-sm font-semibold hover:underline">查看详情</button>
      <button className="text-primary text-sm font-semibold hover:underline">查看报告</button>
      <button className="text-slate-400 text-sm font-semibold cursor-not-allowed">进入下轮</button>
      </td>
      </tr>
      </tbody>
      </table>
      </div>
      
      <div className="p-6 border-t border-primary/5 bg-slate-50/30 dark:bg-slate-900/30">
      <h3 className="text-base font-bold mb-6 flex items-center gap-2">
      <span className="material-symbols-outlined text-primary">analytics</span>
                          分析看板预览
                      </h3>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      
      <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-primary/10 flex flex-col items-center">
      <p className="text-sm font-bold text-slate-600 dark:text-slate-300 mb-4 w-full">专家意见一致性雷达图</p>
      <div className="w-full aspect-square max-w-[300px] relative">
      
      <svg className="w-full h-full" viewBox="0 0 100 100">
      <polygon className="text-slate-200 dark:text-slate-700" fill="none" points="50,5 95,35 80,85 20,85 5,35" stroke="currentColor" strokeWidth="0.5"></polygon>
      <polygon className="text-slate-200 dark:text-slate-700" fill="none" points="50,20 80,45 70,75 30,75 20,45" stroke="currentColor" strokeWidth="0.5"></polygon>
      <line className="text-slate-200 dark:text-slate-700" stroke="currentColor" strokeWidth="0.5" x1="50" x2="50" y1="50" y2="5"></line>
      <line className="text-slate-200 dark:text-slate-700" stroke="currentColor" strokeWidth="0.5" x1="50" x2="95" y1="50" y2="35"></line>
      <line className="text-slate-200 dark:text-slate-700" stroke="currentColor" strokeWidth="0.5" x1="50" x2="80" y1="50" y2="85"></line>
      <line className="text-slate-200 dark:text-slate-700" stroke="currentColor" strokeWidth="0.5" x1="50" x2="20" y1="50" y2="85"></line>
      <line className="text-slate-200 dark:text-slate-700" stroke="currentColor" strokeWidth="0.5" x1="50" x2="5" y1="50" y2="35"></line>
      <polygon fill="rgba(11, 166, 218, 0.2)" points="50,15 85,38 75,80 35,70 15,40" stroke="#0ba6da" strokeWidth="1.5"></polygon>
      </svg>
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
      <span className="text-[8px] absolute top-0 text-slate-400">技术成熟度</span>
      <span className="text-[8px] absolute right-0 text-slate-400">战略重要性</span>
      <span className="text-[8px] absolute bottom-0 right-1/4 text-slate-400">资源投入</span>
      <span className="text-[8px] absolute bottom-0 left-1/4 text-slate-400">风险可控</span>
      <span className="text-[8px] absolute left-0 text-slate-400">社会影响</span>
      </div>
      </div>
      </div>
      
      <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-primary/10">
      <p className="text-sm font-bold text-slate-600 dark:text-slate-300 mb-4">回收趋势波动图</p>
      <div className="h-[300px] w-full flex items-end justify-between gap-1 pt-4">
      
      <div className="flex-1 bg-primary/20 rounded-t-sm h-[30%] relative group">
      <div className="absolute -top-6 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 text-[10px] bg-slate-800 text-white px-1 rounded transition-opacity">12</div>
      </div>
      <div className="flex-1 bg-primary/30 rounded-t-sm h-[45%]"></div>
      <div className="flex-1 bg-primary/40 rounded-t-sm h-[60%]"></div>
      <div className="flex-1 bg-primary/20 rounded-t-sm h-[25%]"></div>
      <div className="flex-1 bg-primary/50 rounded-t-sm h-[80%]"></div>
      <div className="flex-1 bg-primary/70 rounded-t-sm h-[95%]"></div>
      <div className="flex-1 bg-primary rounded-t-sm h-[75%]"></div>
      <div className="flex-1 bg-primary/40 rounded-t-sm h-[55%]"></div>
      </div>
      <div className="flex justify-between mt-4 text-[10px] text-slate-400">
      <span>周一</span>
      <span>周二</span>
      <span>周三</span>
      <span>周四</span>
      <span>周五</span>
      <span>周六</span>
      <span>周日</span>
      <span>今日</span>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div></div></div></div>
    </div>
  );
}
