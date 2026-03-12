import { useNavigate } from "react-router-dom";

export default function ProjectTaskPage() {
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
      <div className="flex h-screen w-full bg-slate-50 overflow-hidden"><aside id="sidebar" className="w-64 bg-white border-r border-slate-200 flex flex-col z-30 shrink-0" style={{ minWidth: "256px" }}><div className="p-5 flex items-center gap-3 border-b border-slate-100"><div className="w-8 h-8 bg-[#0d9488] rounded-lg flex items-center justify-center"><span className="material-symbols-outlined text-white" style={{ fontSize: "20px" }}>insights</span></div><span className="font-bold text-base text-slate-800">GKX</span><a href="/home" onClick={(event) => { event.preventDefault(); navigate("/home"); }} className="ml-auto text-slate-400 hover:text-slate-600" title="返回首页"><span className="material-symbols-outlined" style={{ fontSize: "18px" }}>home</span></a></div><div className="px-4 pt-4 pb-1"><span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">战略咨询体系</span></div><nav className="flex-1 px-2 py-2 overflow-y-auto space-y-0.5"><div className="nav-group"><button onClick={toggleGroup} className="w-full flex items-center gap-3 px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 rounded-lg transition-colors"><span className="material-symbols-outlined text-xl text-slate-400">search_check</span><span className="flex-1 text-left">研究需求分析</span><span className="material-symbols-outlined text-sm text-slate-400 expand-icon">expand_more</span></button><div className="group-children overflow-hidden" style={{ maxHeight: "0", transition: "max-height .25s ease" }}><a href="/strategy/entity-list.html" onClick={(event) => { event.preventDefault(); navigate("/strategy/entity-list.html"); }} className="flex items-center pl-12 pr-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#0d9488] rounded-lg nav-item" data-file="entity-list.html">科技实体清单</a><a href="/strategy/frontier-tech.html" onClick={(event) => { event.preventDefault(); navigate("/strategy/frontier-tech.html"); }} className="flex items-center pl-12 pr-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#0d9488] rounded-lg nav-item" data-file="frontier-tech.html">颠覆性与前沿技术分析</a><a href="/strategy/media-focus.html" onClick={(event) => { event.preventDefault(); navigate("/strategy/media-focus.html"); }} className="flex items-center pl-12 pr-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#0d9488] rounded-lg nav-item" data-file="media-focus.html">媒体聚焦</a></div></div><div className="nav-group"><button onClick={toggleGroup} className="w-full flex items-center gap-3 px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 rounded-lg transition-colors"><span className="material-symbols-outlined text-xl text-slate-400">hub</span><span className="flex-1 text-left">技术体系分析</span><span className="material-symbols-outlined text-sm text-slate-400 expand-icon">expand_more</span></button><div className="group-children overflow-hidden" style={{ maxHeight: "0", transition: "max-height .25s ease" }}><a href="/strategy/tech-system.html" onClick={(event) => { event.preventDefault(); navigate("/strategy/tech-system.html"); }} className="flex items-center pl-12 pr-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#0d9488] rounded-lg nav-item" data-file="tech-system.html">技术体系</a><a href="/strategy/paper-dashboard.html" onClick={(event) => { event.preventDefault(); navigate("/strategy/paper-dashboard.html"); }} className="flex items-center pl-12 pr-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#0d9488] rounded-lg nav-item" data-file="paper-dashboard.html">论文分析</a><a href="/strategy/patent.html" onClick={(event) => { event.preventDefault(); navigate("/strategy/patent.html"); }} className="flex items-center pl-12 pr-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#0d9488] rounded-lg nav-item" data-file="patent.html">专利分析</a><a href="/strategy/project-stats.html" onClick={(event) => { event.preventDefault(); navigate("/strategy/project-stats.html"); }} className="flex items-center pl-12 pr-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#0d9488] rounded-lg nav-item" data-file="project-stats.html">科研项目分析</a><a href="/strategy/social-network-import.html" onClick={(event) => { event.preventDefault(); navigate("/strategy/social-network-import.html"); }} className="flex items-center pl-12 pr-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#0d9488] rounded-lg nav-item" data-file="social-network-import.html">社会网络分析</a></div></div><div className="nav-group"><button onClick={toggleGroup} className="w-full flex items-center gap-3 px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 rounded-lg transition-colors"><span className="material-symbols-outlined text-xl text-slate-400">trending_up</span><span className="flex-1 text-left">技术趋势分析</span><span className="material-symbols-outlined text-sm text-slate-400 expand-icon">expand_more</span></button><div className="group-children overflow-hidden" style={{ maxHeight: "0", transition: "max-height .25s ease" }}><a href="/strategy/clustering-task.html" onClick={(event) => { event.preventDefault(); navigate("/strategy/clustering-task.html"); }} className="flex items-center pl-12 pr-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#0d9488] rounded-lg nav-item" data-file="clustering-task.html">聚类分析</a><a href="/strategy/common-network-task.html" onClick={(event) => { event.preventDefault(); navigate("/strategy/common-network-task.html"); }} className="flex items-center pl-12 pr-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#0d9488] rounded-lg nav-item" data-file="common-network-task.html">共性网络分析</a><a href="/strategy/tech-trend.html" onClick={(event) => { event.preventDefault(); navigate("/strategy/tech-trend.html"); }} className="flex items-center pl-12 pr-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#0d9488] rounded-lg nav-item" data-file="tech-trend.html">技术趋势分析</a><a href="/strategy/tech-alert.html" onClick={(event) => { event.preventDefault(); navigate("/strategy/tech-alert.html"); }} className="flex items-center pl-12 pr-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#0d9488] rounded-lg nav-item" data-file="tech-alert.html">技术动态预警</a></div></div><div className="nav-group"><button onClick={toggleGroup} className="w-full flex items-center gap-3 px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 rounded-lg transition-colors"><span className="material-symbols-outlined text-xl text-slate-400">route</span><span className="flex-1 text-left">领域技术线路</span><span className="material-symbols-outlined text-sm text-slate-400 expand-icon">expand_more</span></button><div className="group-children overflow-hidden" style={{ maxHeight: "0", transition: "max-height .25s ease" }}><a href="/strategy/delphi.html" onClick={(event) => { event.preventDefault(); navigate("/strategy/delphi.html"); }} className="flex items-center pl-12 pr-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#0d9488] rounded-lg nav-item" data-file="delphi.html">德尔菲问卷</a><a href="/strategy/tech-roadmap.html" onClick={(event) => { event.preventDefault(); navigate("/strategy/tech-roadmap.html"); }} className="flex items-center pl-12 pr-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#0d9488] rounded-lg nav-item" data-file="tech-roadmap.html">技术发展线路</a></div></div><div className="nav-group"><button onClick={toggleGroup} className="w-full flex items-center gap-3 px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 rounded-lg transition-colors"><span className="material-symbols-outlined text-xl text-slate-400">description</span><span className="flex-1 text-left">战略咨询报告</span><span className="material-symbols-outlined text-sm text-slate-400 expand-icon">expand_more</span></button><div className="group-children overflow-hidden" style={{ maxHeight: "0", transition: "max-height .25s ease" }}><a href="/strategy/report-generation.html" onClick={(event) => { event.preventDefault(); navigate("/strategy/report-generation.html"); }} className="flex items-center pl-12 pr-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#0d9488] rounded-lg nav-item" data-file="strategy-shell.html">研究报告管理</a><a href="/strategy/insight-publish.html" onClick={(event) => { event.preventDefault(); navigate("/strategy/insight-publish.html"); }} className="flex items-center pl-12 pr-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#0d9488] rounded-lg nav-item" data-file="insight-publish.html">洞察报告发布</a><a href="/strategy/hot-analysis.html" onClick={(event) => { event.preventDefault(); navigate("/strategy/hot-analysis.html"); }} className="flex items-center pl-12 pr-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#0d9488] rounded-lg nav-item" data-file="hot-analysis.html">热点分析</a><a href="/strategy/report-generation.html" onClick={(event) => { event.preventDefault(); navigate("/strategy/report-generation.html"); }} className="flex items-center pl-12 pr-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#0d9488] rounded-lg nav-item" data-file="report-generation.html">战略咨询报告生成</a></div></div><div className="nav-group"><button onClick={toggleGroup} className="w-full flex items-center gap-3 px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 rounded-lg transition-colors"><span className="material-symbols-outlined text-xl text-slate-400">folder_special</span><span className="flex-1 text-left">战略咨询成果</span><span className="material-symbols-outlined text-sm text-slate-400 expand-icon">expand_more</span></button><div className="group-children overflow-hidden" style={{ maxHeight: "0", transition: "max-height .25s ease" }}><a href="/strategy/strategy-cases.html" onClick={(event) => { event.preventDefault(); navigate("/strategy/strategy-cases.html"); }} className="flex items-center pl-12 pr-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#0d9488] rounded-lg nav-item" data-file="strategy-cases.html">战略咨询案例展示</a></div></div><div className="nav-group"><button onClick={toggleGroup} className="w-full flex items-center gap-3 px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 rounded-lg transition-colors"><span className="material-symbols-outlined text-xl text-slate-400">query_stats</span><span className="flex-1 text-left">智能问数</span><span className="material-symbols-outlined text-sm text-slate-400 expand-icon">expand_more</span></button><div className="group-children overflow-hidden" style={{ maxHeight: "0", transition: "max-height .25s ease" }}><a href="/strategy/analysis-start.html" onClick={(event) => { event.preventDefault(); navigate("/strategy/analysis-start.html"); }} className="flex items-center pl-12 pr-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#0d9488] rounded-lg nav-item" data-file="analysis-start.html">开始分析</a><a href="/strategy/case-share.html" onClick={(event) => { event.preventDefault(); navigate("/strategy/case-share.html"); }} className="flex items-center pl-12 pr-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#0d9488] rounded-lg nav-item" data-file="case-share.html">案例分享</a><a href="/strategy/multi-source-data.html" onClick={(event) => { event.preventDefault(); navigate("/strategy/multi-source-data.html"); }} className="flex items-center pl-12 pr-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#0d9488] rounded-lg nav-item" data-file="multi-source-data.html">多源数据接入</a><a href="/strategy/data-dashboard.html" onClick={(event) => { event.preventDefault(); navigate("/strategy/data-dashboard.html"); }} className="flex items-center pl-12 pr-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#0d9488] rounded-lg nav-item" data-file="data-dashboard.html">数据看板显示</a><a href="/strategy/report-gen-ai.html" onClick={(event) => { event.preventDefault(); navigate("/strategy/report-gen-ai.html"); }} className="flex items-center pl-12 pr-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#0d9488] rounded-lg nav-item" data-file="report-gen-ai.html">一键报告生成</a></div></div></nav><div className="p-4 border-t border-slate-100"><div className="bg-slate-50 rounded-xl p-3 flex items-center gap-3"><div className="w-9 h-9 bg-[#0d9488] rounded-lg flex items-center justify-center"><span className="material-symbols-outlined text-white" style={{ fontSize: "18px" }}>manage_accounts</span></div><div><p className="text-xs font-bold text-slate-800">系统管理员</p><p className="text-[10px] text-slate-500">ID: GKX-0822</p></div></div></div></aside><div className="flex-1 flex flex-col min-w-0 overflow-hidden"><header className="h-14 bg-white border-b border-slate-200 flex items-center justify-between px-6 shrink-0"><div className="flex items-center gap-4"><button onClick={toggleSidebar} className="p-1 text-slate-500 hover:bg-slate-100 rounded-lg"><span className="material-symbols-outlined">menu</span></button><h2 className="text-sm font-bold text-slate-800">战略咨询智能支持</h2></div><div className="flex-1 max-w-md mx-6"><div className="relative"><span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" style={{ fontSize: "18px" }}>search</span><input className="w-full pl-9 pr-4 py-1.5 bg-slate-100 rounded-full text-sm placeholder-slate-400 outline-none border-none" placeholder="搜索功能、报告..." type="text"/></div></div><div className="flex items-center gap-2"><button className="p-2 text-slate-500 hover:bg-slate-100 rounded-full relative"><span className="material-symbols-outlined" style={{ fontSize: "22px" }}>notifications</span><span className="absolute top-2 right-2 w-1.5 h-1.5 bg-red-500 rounded-full"></span></button></div></header><div className="flex-1 overflow-y-auto"><div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">
      <div className="layout-container flex h-full grow flex-col">
      <main className="flex flex-1 justify-center py-8">
      <div className="layout-content-container flex flex-col max-w-[1200px] flex-1 px-6">
      <div className="flex flex-wrap items-center gap-2 mb-4">
      <a className="text-primary hover:text-primary/80 text-sm font-medium transition-colors" href="#">首页</a>
      <span className="text-slate-400 text-sm font-medium">/</span>
      <a className="text-primary hover:text-primary/80 text-sm font-medium transition-colors" href="#">科研项目分析</a>
      <span className="text-slate-400 text-sm font-medium">/</span>
      <span className="text-slate-600 dark:text-slate-400 text-sm font-medium">分析任务管理</span>
      </div>
      <div className="flex flex-wrap justify-between items-end gap-4 mb-8">
      <div className="flex flex-col gap-1">
      <h1 className="text-slate-900 dark:text-slate-50 text-3xl font-bold tracking-tight">分析任务管理</h1>
      <p className="text-slate-500 dark:text-slate-400 text-base">管理和监控您的科研分析任务进度与成果</p>
      </div>
      <div className="flex gap-3">
      <button className="flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-primary/10 text-primary font-semibold hover:bg-primary/20 transition-all border border-primary/20">
      <span className="material-symbols-outlined text-[20px]">merge</span>
      <span>合并选中任务</span>
      </button>
      <button className="flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-primary text-white font-semibold hover:bg-primary/90 shadow-sm transition-all">
      <span className="material-symbols-outlined text-[20px]">add</span>
      <span>新建任务</span>
      </button>
      </div>
      </div>
      <div className="bg-white dark:bg-slate-800/50 p-4 rounded-xl shadow-sm mb-6 border border-slate-200 dark:border-slate-700">
      <div className="flex flex-col md:flex-row gap-4">
      <div className="flex-1">
      <div className="relative group">
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400 group-focus-within:text-primary transition-colors">
      <span className="material-symbols-outlined">search</span>
      </div>
      <input className="block w-full pl-10 pr-3 py-2.5 bg-slate-100 dark:bg-slate-900 border-none rounded-xl text-sm placeholder-slate-500 focus:ring-2 focus:ring-primary/50 transition-all" placeholder="搜索任务名称或ID..." type="text"/>
      </div>
      </div>
      <div className="flex flex-wrap items-center gap-2">
      <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider mr-2">状态筛选</span>
      <button className="px-4 py-1.5 rounded-full bg-primary text-white text-xs font-medium">全部</button>
      <button className="px-4 py-1.5 rounded-full bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-300 text-xs font-medium hover:bg-primary/10 hover:text-primary transition-colors">运行中</button>
      <button className="px-4 py-1.5 rounded-full bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-300 text-xs font-medium hover:bg-primary/10 hover:text-primary transition-colors">已完成</button>
      <button className="px-4 py-1.5 rounded-full bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-300 text-xs font-medium hover:bg-primary/10 hover:text-primary transition-colors">已失败</button>
      <div className="h-6 w-px bg-slate-200 dark:bg-slate-700 mx-2"></div>
      <button className="flex items-center gap-2 px-4 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-300 text-xs font-medium hover:bg-primary/10 hover:text-primary transition-colors">
      <span>优先级</span>
      <span className="material-symbols-outlined text-[16px]">expand_more</span>
      </button>
      </div>
      </div>
      </div>
      <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 overflow-hidden">
      <div className="overflow-x-auto">
      <table className="w-full text-left border-collapse">
      <thead>
      <tr className="bg-slate-50 dark:bg-slate-900/50 border-b border-slate-200 dark:border-slate-700">
      <th className="px-6 py-4 text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
      <input className="rounded text-primary focus:ring-primary bg-transparent border-slate-300" type="checkbox"/>
      </th>
      <th className="px-6 py-4 text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">任务名称</th>
      <th className="px-6 py-4 text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">分析类型</th>
      <th className="px-6 py-4 text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">创建人</th>
      <th className="px-6 py-4 text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider text-center">优先级</th>
      <th className="px-6 py-4 text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">创建时间</th>
      <th className="px-6 py-4 text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider min-w-[140px]">任务进度</th>
      <th className="px-6 py-4 text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">状态</th>
      <th className="px-6 py-4 text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider text-right">操作</th>
      </tr>
      </thead>
      <tbody className="divide-y divide-slate-100 dark:divide-slate-700">
      <tr className="hover:bg-slate-50/80 dark:hover:bg-slate-700/30 transition-colors">
      <td className="px-6 py-4">
      <input className="rounded text-primary focus:ring-primary bg-transparent border-slate-300" type="checkbox"/>
      </td>
      <td className="px-6 py-4">
      <span className="text-sm font-semibold text-slate-900 dark:text-slate-100">基因序列比对_#1024</span>
      </td>
      <td className="px-6 py-4">
      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary/10 text-primary">序列比对</span>
      </td>
      <td className="px-6 py-4">
      <div className="flex items-center gap-2">
      <div className="w-6 h-6 rounded-full bg-slate-200 flex items-center justify-center text-[10px] font-bold text-slate-500">张</div>
      <span className="text-sm text-slate-600 dark:text-slate-300">张明</span>
      </div>
      </td>
      <td className="px-6 py-4 text-center">
      <span className="text-xs font-bold text-red-500 dark:text-red-400">高</span>
      </td>
      <td className="px-6 py-4">
      <span className="text-xs text-slate-500 dark:text-slate-400">2023-11-20 14:30</span>
      </td>
      <td className="px-6 py-4">
      <div className="w-full bg-slate-100 dark:bg-slate-700 rounded-full h-1.5">
      <div className="bg-primary h-1.5 rounded-full" style={{ width: "65%" }}></div>
      </div>
      <span className="text-[10px] text-slate-400 mt-1 block">65% 已处理</span>
      </td>
      <td className="px-6 py-4">
      <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400">运行中</span>
      </td>
      <td className="px-6 py-4 text-right">
      <div className="flex justify-end gap-2">
      <button className="p-1.5 text-slate-400 hover:text-primary transition-colors" title="查看"><span className="material-symbols-outlined text-[18px]">visibility</span></button>
      <button className="p-1.5 text-slate-400 hover:text-slate-600 transition-colors" title="重新运行"><span className="material-symbols-outlined text-[18px]">refresh</span></button>
      <button className="p-1.5 text-slate-400 hover:text-red-500 transition-colors" title="删除"><span className="material-symbols-outlined text-[18px]">delete</span></button>
      </div>
      </td>
      </tr>
      <tr className="hover:bg-slate-50/80 dark:hover:bg-slate-700/30 transition-colors">
      <td className="px-6 py-4">
      <input className="rounded text-primary focus:ring-primary bg-transparent border-slate-300" type="checkbox"/>
      </td>
      <td className="px-6 py-4">
      <span className="text-sm font-semibold text-slate-900 dark:text-slate-100">蛋白质结构预测_V2</span>
      </td>
      <td className="px-6 py-4">
      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary/10 text-primary">结构分析</span>
      </td>
      <td className="px-6 py-4">
      <div className="flex items-center gap-2">
      <div className="w-6 h-6 rounded-full bg-slate-200 flex items-center justify-center text-[10px] font-bold text-slate-500">李</div>
      <span className="text-sm text-slate-600 dark:text-slate-300">李华</span>
      </div>
      </td>
      <td className="px-6 py-4 text-center">
      <span className="text-xs font-bold text-slate-400">中</span>
      </td>
      <td className="px-6 py-4">
      <span className="text-xs text-slate-500 dark:text-slate-400">2023-11-19 09:15</span>
      </td>
      <td className="px-6 py-4">
      <div className="w-full bg-slate-100 dark:bg-slate-700 rounded-full h-1.5">
      <div className="bg-emerald-500 h-1.5 rounded-full" style={{ width: "100%" }}></div>
      </div>
      <span className="text-[10px] text-slate-400 mt-1 block">100% 已完成</span>
      </td>
      <td className="px-6 py-4">
      <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400">已完成</span>
      </td>
      <td className="px-6 py-4 text-right">
      <div className="flex justify-end gap-2">
      <button className="p-1.5 text-slate-400 hover:text-primary transition-colors" title="查看"><span className="material-symbols-outlined text-[18px]">visibility</span></button>
      <button className="p-1.5 text-slate-400 hover:text-slate-600 transition-colors" title="重新运行"><span className="material-symbols-outlined text-[18px]">refresh</span></button>
      <button className="p-1.5 text-slate-400 hover:text-red-500 transition-colors" title="删除"><span className="material-symbols-outlined text-[18px]">delete</span></button>
      </div>
      </td>
      </tr>
      <tr className="hover:bg-slate-50/80 dark:hover:bg-slate-700/30 transition-colors">
      <td className="px-6 py-4">
      <input className="rounded text-primary focus:ring-primary bg-transparent border-slate-300" type="checkbox"/>
      </td>
      <td className="px-6 py-4">
      <span className="text-sm font-semibold text-slate-900 dark:text-slate-100">代谢组学数据清洗</span>
      </td>
      <td className="px-6 py-4">
      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary/10 text-primary">数据预处理</span>
      </td>
      <td className="px-6 py-4">
      <div className="flex items-center gap-2">
      <div className="w-6 h-6 rounded-full bg-slate-200 flex items-center justify-center text-[10px] font-bold text-slate-500">王</div>
      <span className="text-sm text-slate-600 dark:text-slate-300">王强</span>
      </div>
      </td>
      <td className="px-6 py-4 text-center">
      <span className="text-xs font-bold text-slate-400">低</span>
      </td>
      <td className="px-6 py-4">
      <span className="text-xs text-slate-500 dark:text-slate-400">2023-11-18 16:45</span>
      </td>
      <td className="px-6 py-4">
      <div className="w-full bg-slate-100 dark:bg-slate-700 rounded-full h-1.5">
      <div className="bg-rose-500 h-1.5 rounded-full" style={{ width: "32%" }}></div>
      </div>
      <span className="text-[10px] text-slate-400 mt-1 block">32% 已中断</span>
      </td>
      <td className="px-6 py-4">
      <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-rose-100 dark:bg-rose-900/30 text-rose-600 dark:text-rose-400">已失败</span>
      </td>
      <td className="px-6 py-4 text-right">
      <div className="flex justify-end gap-2">
      <button className="p-1.5 text-slate-400 hover:text-primary transition-colors" title="查看"><span className="material-symbols-outlined text-[18px]">visibility</span></button>
      <button className="p-1.5 text-slate-400 hover:text-slate-600 transition-colors" title="重新运行"><span className="material-symbols-outlined text-[18px]">refresh</span></button>
      <button className="p-1.5 text-slate-400 hover:text-red-500 transition-colors" title="删除"><span className="material-symbols-outlined text-[18px]">delete</span></button>
      </div>
      </td>
      </tr>
      </tbody>
      </table>
      </div>
      <div className="px-6 py-4 bg-slate-50 dark:bg-slate-900/30 border-t border-slate-200 dark:border-slate-700 flex items-center justify-between">
      <span className="text-xs text-slate-500">显示 1 到 3 条，共 24 条记录</span>
      <div className="flex gap-1">
      <button className="p-1 rounded hover:bg-slate-200 dark:hover:bg-slate-700 disabled:opacity-30" disabled>
      <span className="material-symbols-outlined text-[18px]">chevron_left</span>
      </button>
      <button className="px-3 py-1 rounded bg-primary text-white text-xs font-medium">1</button>
      <button className="px-3 py-1 rounded hover:bg-slate-200 dark:hover:bg-slate-700 text-xs font-medium">2</button>
      <button className="px-3 py-1 rounded hover:bg-slate-200 dark:hover:bg-slate-700 text-xs font-medium">3</button>
      <button className="p-1 rounded hover:bg-slate-200 dark:hover:bg-slate-700">
      <span className="material-symbols-outlined text-[18px]">chevron_right</span>
      </button>
      </div>
      </div>
      </div>
      </div>
      </main>
      </div>
      </div>
      
      </div></div></div>
    </div>
  );
}
