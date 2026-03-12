import { useNavigate } from "react-router-dom";

export default function CaseSharePage() {
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
      <div className="flex h-screen w-full bg-slate-50 overflow-hidden"><aside id="sidebar" className="w-64 bg-white border-r border-slate-200 flex flex-col z-30 shrink-0" style={{ minWidth: "256px" }}><div className="p-5 flex items-center gap-3 border-b border-slate-100"><div className="w-8 h-8 bg-[#0d9488] rounded-lg flex items-center justify-center"><span className="material-symbols-outlined text-white" style={{ fontSize: "20px" }}>insights</span></div><span className="font-bold text-base text-slate-800">GKX</span><a href="/home" onClick={(event) => { event.preventDefault(); navigate("/home"); }} className="ml-auto text-slate-400 hover:text-slate-600" title="返回首页"><span className="material-symbols-outlined" style={{ fontSize: "18px" }}>home</span></a></div><div className="px-4 pt-4 pb-1"><span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">战略咨询体系</span></div><nav className="flex-1 px-2 py-2 overflow-y-auto space-y-0.5"><div className="nav-group"><button onClick={toggleGroup} className="w-full flex items-center gap-3 px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 rounded-lg transition-colors"><span className="material-symbols-outlined text-xl text-slate-400">search_check</span><span className="flex-1 text-left">研究需求分析</span><span className="material-symbols-outlined text-sm text-slate-400 expand-icon">expand_more</span></button><div className="group-children overflow-hidden" style={{ maxHeight: "0", transition: "max-height .25s ease" }}><a href="/strategy/entity-list.html" onClick={(event) => { event.preventDefault(); navigate("/strategy/entity-list.html"); }} className="flex items-center pl-12 pr-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#0d9488] rounded-lg nav-item" data-file="entity-list.html">科技实体清单</a><a href="/strategy/frontier-tech.html" onClick={(event) => { event.preventDefault(); navigate("/strategy/frontier-tech.html"); }} className="flex items-center pl-12 pr-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#0d9488] rounded-lg nav-item" data-file="frontier-tech.html">颠覆性与前沿技术分析</a><a href="/strategy/media-focus.html" onClick={(event) => { event.preventDefault(); navigate("/strategy/media-focus.html"); }} className="flex items-center pl-12 pr-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#0d9488] rounded-lg nav-item" data-file="media-focus.html">媒体聚焦</a></div></div><div className="nav-group"><button onClick={toggleGroup} className="w-full flex items-center gap-3 px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 rounded-lg transition-colors"><span className="material-symbols-outlined text-xl text-slate-400">hub</span><span className="flex-1 text-left">技术体系分析</span><span className="material-symbols-outlined text-sm text-slate-400 expand-icon">expand_more</span></button><div className="group-children overflow-hidden" style={{ maxHeight: "0", transition: "max-height .25s ease" }}><a href="/strategy/tech-system.html" onClick={(event) => { event.preventDefault(); navigate("/strategy/tech-system.html"); }} className="flex items-center pl-12 pr-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#0d9488] rounded-lg nav-item" data-file="tech-system.html">技术体系</a><a href="/strategy/paper-dashboard.html" onClick={(event) => { event.preventDefault(); navigate("/strategy/paper-dashboard.html"); }} className="flex items-center pl-12 pr-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#0d9488] rounded-lg nav-item" data-file="paper-dashboard.html">论文分析</a><a href="/strategy/patent.html" onClick={(event) => { event.preventDefault(); navigate("/strategy/patent.html"); }} className="flex items-center pl-12 pr-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#0d9488] rounded-lg nav-item" data-file="patent.html">专利分析</a><a href="/strategy/project-stats.html" onClick={(event) => { event.preventDefault(); navigate("/strategy/project-stats.html"); }} className="flex items-center pl-12 pr-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#0d9488] rounded-lg nav-item" data-file="project-stats.html">科研项目分析</a><a href="/strategy/social-network-import.html" onClick={(event) => { event.preventDefault(); navigate("/strategy/social-network-import.html"); }} className="flex items-center pl-12 pr-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#0d9488] rounded-lg nav-item" data-file="social-network-import.html">社会网络分析</a></div></div><div className="nav-group"><button onClick={toggleGroup} className="w-full flex items-center gap-3 px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 rounded-lg transition-colors"><span className="material-symbols-outlined text-xl text-slate-400">trending_up</span><span className="flex-1 text-left">技术趋势分析</span><span className="material-symbols-outlined text-sm text-slate-400 expand-icon">expand_more</span></button><div className="group-children overflow-hidden" style={{ maxHeight: "0", transition: "max-height .25s ease" }}><a href="/strategy/clustering-task.html" onClick={(event) => { event.preventDefault(); navigate("/strategy/clustering-task.html"); }} className="flex items-center pl-12 pr-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#0d9488] rounded-lg nav-item" data-file="clustering-task.html">聚类分析</a><a href="/strategy/common-network-task.html" onClick={(event) => { event.preventDefault(); navigate("/strategy/common-network-task.html"); }} className="flex items-center pl-12 pr-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#0d9488] rounded-lg nav-item" data-file="common-network-task.html">共性网络分析</a><a href="/strategy/tech-trend.html" onClick={(event) => { event.preventDefault(); navigate("/strategy/tech-trend.html"); }} className="flex items-center pl-12 pr-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#0d9488] rounded-lg nav-item" data-file="tech-trend.html">技术趋势分析</a><a href="/strategy/tech-alert.html" onClick={(event) => { event.preventDefault(); navigate("/strategy/tech-alert.html"); }} className="flex items-center pl-12 pr-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#0d9488] rounded-lg nav-item" data-file="tech-alert.html">技术动态预警</a></div></div><div className="nav-group"><button onClick={toggleGroup} className="w-full flex items-center gap-3 px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 rounded-lg transition-colors"><span className="material-symbols-outlined text-xl text-slate-400">route</span><span className="flex-1 text-left">领域技术线路</span><span className="material-symbols-outlined text-sm text-slate-400 expand-icon">expand_more</span></button><div className="group-children overflow-hidden" style={{ maxHeight: "0", transition: "max-height .25s ease" }}><a href="/strategy/delphi.html" onClick={(event) => { event.preventDefault(); navigate("/strategy/delphi.html"); }} className="flex items-center pl-12 pr-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#0d9488] rounded-lg nav-item" data-file="delphi.html">德尔菲问卷</a><a href="/strategy/tech-roadmap.html" onClick={(event) => { event.preventDefault(); navigate("/strategy/tech-roadmap.html"); }} className="flex items-center pl-12 pr-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#0d9488] rounded-lg nav-item" data-file="tech-roadmap.html">技术发展线路</a></div></div><div className="nav-group"><button onClick={toggleGroup} className="w-full flex items-center gap-3 px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 rounded-lg transition-colors"><span className="material-symbols-outlined text-xl text-slate-400">description</span><span className="flex-1 text-left">战略咨询报告</span><span className="material-symbols-outlined text-sm text-slate-400 expand-icon">expand_more</span></button><div className="group-children overflow-hidden" style={{ maxHeight: "0", transition: "max-height .25s ease" }}><a href="/strategy/report-generation.html" onClick={(event) => { event.preventDefault(); navigate("/strategy/report-generation.html"); }} className="flex items-center pl-12 pr-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#0d9488] rounded-lg nav-item" data-file="strategy-shell.html">研究报告管理</a><a href="/strategy/insight-publish.html" onClick={(event) => { event.preventDefault(); navigate("/strategy/insight-publish.html"); }} className="flex items-center pl-12 pr-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#0d9488] rounded-lg nav-item" data-file="insight-publish.html">洞察报告发布</a><a href="/strategy/hot-analysis.html" onClick={(event) => { event.preventDefault(); navigate("/strategy/hot-analysis.html"); }} className="flex items-center pl-12 pr-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#0d9488] rounded-lg nav-item" data-file="hot-analysis.html">热点分析</a><a href="/strategy/report-generation.html" onClick={(event) => { event.preventDefault(); navigate("/strategy/report-generation.html"); }} className="flex items-center pl-12 pr-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#0d9488] rounded-lg nav-item" data-file="report-generation.html">战略咨询报告生成</a></div></div><div className="nav-group"><button onClick={toggleGroup} className="w-full flex items-center gap-3 px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 rounded-lg transition-colors"><span className="material-symbols-outlined text-xl text-slate-400">folder_special</span><span className="flex-1 text-left">战略咨询成果</span><span className="material-symbols-outlined text-sm text-slate-400 expand-icon">expand_more</span></button><div className="group-children overflow-hidden" style={{ maxHeight: "0", transition: "max-height .25s ease" }}><a href="/strategy/strategy-cases.html" onClick={(event) => { event.preventDefault(); navigate("/strategy/strategy-cases.html"); }} className="flex items-center pl-12 pr-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#0d9488] rounded-lg nav-item" data-file="strategy-cases.html">战略咨询案例展示</a></div></div><div className="nav-group"><button onClick={toggleGroup} className="w-full flex items-center gap-3 px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 rounded-lg transition-colors"><span className="material-symbols-outlined text-xl text-slate-400">query_stats</span><span className="flex-1 text-left">智能问数</span><span className="material-symbols-outlined text-sm text-slate-400 expand-icon">expand_more</span></button><div className="group-children overflow-hidden" style={{ maxHeight: "0", transition: "max-height .25s ease" }}><a href="/strategy/analysis-start.html" onClick={(event) => { event.preventDefault(); navigate("/strategy/analysis-start.html"); }} className="flex items-center pl-12 pr-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#0d9488] rounded-lg nav-item" data-file="analysis-start.html">开始分析</a><a href="/strategy/case-share.html" onClick={(event) => { event.preventDefault(); navigate("/strategy/case-share.html"); }} className="flex items-center pl-12 pr-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#0d9488] rounded-lg nav-item" data-file="case-share.html">案例分享</a><a href="/strategy/multi-source-data.html" onClick={(event) => { event.preventDefault(); navigate("/strategy/multi-source-data.html"); }} className="flex items-center pl-12 pr-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#0d9488] rounded-lg nav-item" data-file="multi-source-data.html">案例分享</a><a href="/strategy/data-dashboard.html" onClick={(event) => { event.preventDefault(); navigate("/strategy/data-dashboard.html"); }} className="flex items-center pl-12 pr-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#0d9488] rounded-lg nav-item" data-file="data-dashboard.html">数据看板显示</a><a href="/strategy/report-gen-ai.html" onClick={(event) => { event.preventDefault(); navigate("/strategy/report-gen-ai.html"); }} className="flex items-center pl-12 pr-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#0d9488] rounded-lg nav-item" data-file="report-gen-ai.html">一键报告生成</a></div></div></nav><div className="p-4 border-t border-slate-100"><div className="bg-slate-50 rounded-xl p-3 flex items-center gap-3"><div className="w-9 h-9 bg-[#0d9488] rounded-lg flex items-center justify-center"><span className="material-symbols-outlined text-white" style={{ fontSize: "18px" }}>manage_accounts</span></div><div><p className="text-xs font-bold text-slate-800">系统管理员</p><p className="text-[10px] text-slate-500">ID: GKX-0822</p></div></div></div></aside><div className="flex-1 flex flex-col min-w-0 overflow-hidden"><header className="h-14 bg-white border-b border-slate-200 flex items-center justify-between px-6 shrink-0"><div className="flex items-center gap-4"><button onClick={toggleSidebar} className="p-1 text-slate-500 hover:bg-slate-100 rounded-lg"><span className="material-symbols-outlined">menu</span></button><h2 className="text-sm font-bold text-slate-800">战略咨询智能支持</h2></div><div className="flex-1 max-w-md mx-6"><div className="relative"><span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" style={{ fontSize: "18px" }}>search</span><input className="w-full pl-9 pr-4 py-1.5 bg-slate-100 rounded-full text-sm placeholder-slate-400 outline-none border-none" placeholder="搜索功能、报告..." type="text"/></div></div><div className="flex items-center gap-2"><button className="p-2 text-slate-500 hover:bg-slate-100 rounded-full relative"><span className="material-symbols-outlined" style={{ fontSize: "22px" }}>notifications</span><span className="absolute top-2 right-2 w-1.5 h-1.5 bg-red-500 rounded-full"></span></button></div></header><div className="flex-1 overflow-y-auto p-8 space-y-6">
      <div className="page-inner">
      <div className="max-w-[1440px] mx-auto px-6 py-8">
      <nav className="flex items-center space-x-2 text-sm mb-6 text-slate-500">
      <a className="hover:text-primary transition-colors" href="#">新型高端智库系统</a>
      <span className="material-symbols-outlined text-sm">chevron_right</span>
      <a className="hover:text-primary transition-colors" href="#">战略咨询成果</a>
      <span className="material-symbols-outlined text-sm">chevron_right</span>
      <span className="text-slate-900 font-medium">案例分享</span>
      </nav>
      <div className="mb-8">
      <h1 className="text-3xl font-bold tracking-tight text-slate-900 mb-2">案例分享</h1>
      <p className="text-slate-500 text-sm">Hi，现在开始搜索并使用您需要的报告案例吧，案例集市助您轻松分析</p>
      </div>
      <div className="flex gap-6 items-start">
      <aside className="w-72 flex-shrink-0">
      <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-5">
      <div className="relative mb-6">
      <input className="w-full pl-4 pr-10 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-primary/50 text-sm" placeholder="搜索相关案例..." type="text"/>
      <span className="absolute right-3 top-1/2 -translate-y-1/2 material-symbols-outlined text-slate-400 text-[18px]">search</span>
      </div>
      <div className="mb-8">
      <div className="flex items-center justify-between mb-4 group cursor-pointer">
      <div className="flex items-center gap-2">
      <span className="material-symbols-outlined text-primary text-[20px]">explore</span>
      <span className="font-semibold text-sm">项目分析方向</span>
      </div>
      <span className="material-symbols-outlined text-slate-400 text-[18px]">remove</span>
      </div>
      <div className="space-y-3 pl-7">
      <label className="flex items-center gap-2 cursor-pointer group">
      <input className="w-4 h-4 rounded border-slate-300 text-primary focus:ring-primary" type="checkbox"/>
      <span className="text-sm text-slate-600 group-hover:text-primary transition-colors">上传大纲生成正文</span>
      </label>
      <label className="flex items-center gap-2 cursor-pointer group">
      <input className="w-4 h-4 rounded border-slate-300 text-primary focus:ring-primary" type="checkbox"/>
      <span className="text-sm text-slate-600 group-hover:text-primary transition-colors">深度分析</span>
      </label>
      </div>
      </div>
      <div className="mb-4">
      <div className="flex items-center justify-between mb-4 group cursor-pointer">
      <div className="flex items-center gap-2">
      <span className="material-symbols-outlined text-primary text-[20px]">schedule</span>
      <span className="font-semibold text-sm">最近更新时间</span>
      </div>
      <span className="material-symbols-outlined text-slate-400 text-[18px]">remove</span>
      </div>
      <div className="flex flex-wrap gap-2 pl-7">
      <button className="px-3 py-1 bg-slate-100 text-slate-600 rounded-full text-xs hover:bg-primary/10 hover:text-primary transition-all">最近3个月</button>
      <button className="px-3 py-1 bg-slate-100 text-slate-600 rounded-full text-xs hover:bg-primary/10 hover:text-primary transition-all">最近6个月</button>
      <button className="px-3 py-1 bg-slate-100 text-slate-600 rounded-full text-xs hover:bg-primary/10 hover:text-primary transition-all">自定义</button>
      </div>
      </div>
      </div>
      </aside>
      <main className="flex-1 min-w-0">
      <div className="flex items-center justify-between mb-4 px-1">
      <div className="text-sm text-slate-500">项目数量: <span className="text-slate-900 font-bold">5</span></div>
      <div className="flex items-center gap-2">
      <span className="text-xs text-slate-400">排序:</span>
      <div className="flex items-center gap-1 text-sm font-medium text-slate-700 cursor-pointer">
      <span>更新时间</span>
      <span className="material-symbols-outlined text-[18px]">expand_more</span>
      </div>
      </div>
      </div>
      <div className="space-y-4">
      <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-6 hover:shadow-md transition-shadow">
      <div className="flex justify-between items-start mb-3">
      <h3 className="text-lg font-bold text-slate-900 leading-snug max-w-2xl">冷链物流服务模式升级：技术驱动、需求拉动与政策赋能的多维分析</h3>
      <span className="text-xs text-slate-400">最近更新 2026.01.13 08:49</span>
      </div>
      <div className="flex flex-wrap items-center gap-x-6 gap-y-2 mb-4 text-xs text-slate-500">
      <div className="flex items-center gap-1">
      <span className="text-slate-400">作者</span>
      <span className="text-slate-700">先见者1006516</span>
      </div>
      <div className="flex items-center gap-1">
      <span className="text-slate-400">创建时间</span>
      <span className="text-slate-700">2026-01-13</span>
      </div>
      </div>
      <p className="text-sm text-slate-500 line-clamp-2 mb-4">冷链物流服务模式升级：技术驱动、需求拉动与政策赋能的多维分析。探讨在数字化转型背景下，冷链物流如何通过物联网、大数据等技术提升效率...</p>
      <div className="flex items-center gap-6 mb-4">
      <div className="flex items-center gap-1.5 text-slate-500">
      <span className="material-symbols-outlined text-[16px]">database</span>
      <span className="text-xs">16个数据点</span>
      </div>
      <div className="flex items-center gap-1.5 text-slate-500">
      <span className="material-symbols-outlined text-[16px]">description</span>
      <span className="text-xs">共计 137 项政策文件</span>
      </div>
      <div className="flex items-center gap-1.5 text-slate-500">
      <span className="material-symbols-outlined text-[16px]">analytics</span>
      <span className="text-xs">113 份参考研报</span>
      </div>
      </div>
      <div className="bg-slate-50 rounded-lg p-3 mb-5 flex items-center justify-between text-xs text-slate-500">
      <div className="flex items-center gap-4">
      <span>数据覆盖时间:</span>
      <span>起始时间 2024.01.31</span>
      <span>结束时间 2024.12.31</span>
      <span>最新时间 2026.01.13</span>
      <span>频率：年</span>
      </div>
      </div>
      <div className="flex items-center justify-between pt-4 border-t border-slate-50">
      <div className="flex items-center gap-6">
      <div className="text-[var(--accent-purple)] font-bold">69383字</div>
      <div className="text-slate-400 text-xs">累计被采用 0 次</div>
      </div>
      <div className="flex items-center gap-4">
      <button className="flex items-center gap-1 px-4 py-1.5 text-primary text-sm font-medium hover:bg-primary/5 rounded-lg transition-colors">
      <span className="material-symbols-outlined text-[18px]">add</span>
                                          添加到我的工作台
                                      </button>
      <div className="flex items-center gap-1 text-slate-500 text-sm cursor-pointer hover:text-slate-700">
      <span>项目简介</span>
      <span className="material-symbols-outlined text-[18px]">expand_more</span>
      </div>
      </div>
      </div>
      </div>
      <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-6 hover:shadow-md transition-shadow">
      <div className="flex justify-between items-start mb-3">
      <h3 className="text-lg font-bold text-slate-900 leading-snug max-w-2xl">全球机器人产业发展阶段分析：技术演进、市场格局与政策驱动下的阶段性特征</h3>
      <span className="text-xs text-slate-400">最近更新 2025.12.29 11:16</span>
      </div>
      <div className="flex flex-wrap items-center gap-x-6 gap-y-2 mb-4 text-xs text-slate-500">
      <div className="flex items-center gap-1">
      <span className="text-slate-400">作者</span>
      <span className="text-slate-700">先见者1006516</span>
      </div>
      <div className="flex items-center gap-1">
      <span className="text-slate-400">创建时间</span>
      <span className="text-slate-700">2025-12-29</span>
      </div>
      </div>
      <p className="text-sm text-slate-500 line-clamp-2 mb-4">全球机器人产业正处于加速演进期，本报告通过对主要国家政策导向与核心技术突破的深度剖析，揭示了当前行业竞争格局...</p>
      <div className="flex items-center gap-6 mb-4">
      <div className="flex items-center gap-1.5 text-slate-500">
      <span className="material-symbols-outlined text-[16px]">database</span>
      <span className="text-xs">34个数据点</span>
      </div>
      <div className="flex items-center gap-1.5 text-slate-500">
      <span className="material-symbols-outlined text-[16px]">description</span>
      <span className="text-xs">共计 35 项政策文件</span>
      </div>
      <div className="flex items-center gap-1.5 text-slate-500">
      <span className="material-symbols-outlined text-[16px]">analytics</span>
      <span className="text-xs">46 份参考研报</span>
      </div>
      </div>
      <div className="flex items-center justify-between pt-4 border-t border-slate-50">
      <div className="flex items-center gap-6">
      <div className="text-[var(--accent-purple)] font-bold">31394字</div>
      <div className="text-slate-400 text-xs">累计被采用 2 次</div>
      </div>
      <div className="flex items-center gap-4">
      <button className="flex items-center gap-1 px-4 py-1.5 text-primary text-sm font-medium hover:bg-primary/5 rounded-lg transition-colors">
      <span className="material-symbols-outlined text-[18px]">add</span>
                                          添加到我的工作台
                                      </button>
      <div className="flex items-center gap-1 text-slate-500 text-sm cursor-pointer">
      <span>项目简介</span>
      <span className="material-symbols-outlined text-[18px]">expand_more</span>
      </div>
      </div>
      </div>
      </div>
      <div className="flex items-center justify-center gap-2 pt-6">
      <button className="w-8 h-8 flex items-center justify-center rounded-lg border border-slate-200 text-slate-400 hover:bg-white transition-colors">
      <span className="material-symbols-outlined text-lg">chevron_left</span>
      </button>
      <button className="w-8 h-8 flex items-center justify-center rounded-lg bg-primary text-white font-medium">1</button>
      <button className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-white transition-colors text-slate-600">2</button>
      <button className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-white transition-colors text-slate-600">3</button>
      <span className="px-1 text-slate-300">...</span>
      <button className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-white transition-colors text-slate-600">13</button>
      <button className="w-8 h-8 flex items-center justify-center rounded-lg border border-slate-200 text-slate-400 hover:bg-white transition-colors">
      <span className="material-symbols-outlined text-lg">chevron_right</span>
      </button>
      </div>
      </div>
      </main>
      </div>
      </div>
      <div className="fixed right-6 top-1/2 -translate-y-1/2 flex flex-col gap-3 z-50">
      <button className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-slate-500 hover:text-primary transition-all group relative">
      <span className="material-symbols-outlined">chat_bubble</span>
      <span className="absolute right-full mr-3 px-2 py-1 bg-slate-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">反馈</span>
      </button>
      <button className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-slate-500 hover:text-primary transition-all group relative">
      <span className="material-symbols-outlined">help</span>
      <span className="absolute right-full mr-3 px-2 py-1 bg-slate-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">帮助</span>
      </button>
      <button className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-slate-500 hover:text-primary transition-all group relative">
      <span className="material-symbols-outlined">history</span>
      <span className="absolute right-full mr-3 px-2 py-1 bg-slate-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">记录</span>
      </button>
      <button className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-slate-500 hover:text-primary transition-all group relative">
      <span className="material-symbols-outlined">fullscreen</span>
      <span className="absolute right-full mr-3 px-2 py-1 bg-slate-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">全屏</span>
      </button>
      </div>
      </div>
      
      </div></div></div>
    </div>
  );
}
