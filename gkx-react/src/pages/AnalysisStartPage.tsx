import { useNavigate } from "react-router-dom";

export default function AnalysisStartPage() {
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
      <div className="flex h-screen w-full bg-slate-50 overflow-hidden"><aside id="sidebar" className="w-64 bg-white border-r border-slate-200 flex flex-col z-30 shrink-0" style={{ minWidth: "256px" }}><div className="p-5 flex items-center gap-3 border-b border-slate-100"><div className="w-8 h-8 bg-[#0d9488] rounded-lg flex items-center justify-center"><span className="material-symbols-outlined text-white" style={{ fontSize: "20px" }}>insights</span></div><span className="font-bold text-base text-slate-800">GKX</span><a href="/home" onClick={(event) => { event.preventDefault(); navigate("/home"); }} className="ml-auto text-slate-400 hover:text-slate-600" title="返回首页"><span className="material-symbols-outlined" style={{ fontSize: "18px" }}>home</span></a></div><div className="px-4 pt-4 pb-1"><span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">战略咨询体系</span></div><nav className="flex-1 px-2 py-2 overflow-y-auto space-y-0.5"><div className="nav-group"><button onClick={toggleGroup} className="w-full flex items-center gap-3 px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 rounded-lg transition-colors"><span className="material-symbols-outlined text-xl text-slate-400">search_check</span><span className="flex-1 text-left">研究需求分析</span><span className="material-symbols-outlined text-sm text-slate-400 expand-icon">expand_more</span></button><div className="group-children overflow-hidden" style={{ maxHeight: "0", transition: "max-height .25s ease" }}><a href="/strategy/entity-list.html" onClick={(event) => { event.preventDefault(); navigate("/strategy/entity-list.html"); }} className="flex items-center pl-12 pr-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#0d9488] rounded-lg nav-item" data-file="entity-list.html">科技实体清单</a><a href="/strategy/frontier-tech.html" onClick={(event) => { event.preventDefault(); navigate("/strategy/frontier-tech.html"); }} className="flex items-center pl-12 pr-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#0d9488] rounded-lg nav-item" data-file="frontier-tech.html">颠覆性与前沿技术分析</a><a href="/strategy/media-focus.html" onClick={(event) => { event.preventDefault(); navigate("/strategy/media-focus.html"); }} className="flex items-center pl-12 pr-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#0d9488] rounded-lg nav-item" data-file="media-focus.html">媒体聚焦</a></div></div><div className="nav-group"><button onClick={toggleGroup} className="w-full flex items-center gap-3 px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 rounded-lg transition-colors"><span className="material-symbols-outlined text-xl text-slate-400">hub</span><span className="flex-1 text-left">技术体系分析</span><span className="material-symbols-outlined text-sm text-slate-400 expand-icon">expand_more</span></button><div className="group-children overflow-hidden" style={{ maxHeight: "0", transition: "max-height .25s ease" }}><a href="/strategy/tech-system.html" onClick={(event) => { event.preventDefault(); navigate("/strategy/tech-system.html"); }} className="flex items-center pl-12 pr-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#0d9488] rounded-lg nav-item" data-file="tech-system.html">技术体系</a><a href="/strategy/paper-dashboard.html" onClick={(event) => { event.preventDefault(); navigate("/strategy/paper-dashboard.html"); }} className="flex items-center pl-12 pr-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#0d9488] rounded-lg nav-item" data-file="paper-dashboard.html">论文分析</a><a href="/strategy/patent.html" onClick={(event) => { event.preventDefault(); navigate("/strategy/patent.html"); }} className="flex items-center pl-12 pr-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#0d9488] rounded-lg nav-item" data-file="patent.html">专利分析</a><a href="/strategy/project-stats.html" onClick={(event) => { event.preventDefault(); navigate("/strategy/project-stats.html"); }} className="flex items-center pl-12 pr-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#0d9488] rounded-lg nav-item" data-file="project-stats.html">科研项目分析</a><a href="/strategy/social-network-import.html" onClick={(event) => { event.preventDefault(); navigate("/strategy/social-network-import.html"); }} className="flex items-center pl-12 pr-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#0d9488] rounded-lg nav-item" data-file="social-network-import.html">社会网络分析</a></div></div><div className="nav-group"><button onClick={toggleGroup} className="w-full flex items-center gap-3 px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 rounded-lg transition-colors"><span className="material-symbols-outlined text-xl text-slate-400">trending_up</span><span className="flex-1 text-left">技术趋势分析</span><span className="material-symbols-outlined text-sm text-slate-400 expand-icon">expand_more</span></button><div className="group-children overflow-hidden" style={{ maxHeight: "0", transition: "max-height .25s ease" }}><a href="/strategy/clustering-task.html" onClick={(event) => { event.preventDefault(); navigate("/strategy/clustering-task.html"); }} className="flex items-center pl-12 pr-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#0d9488] rounded-lg nav-item" data-file="clustering-task.html">聚类分析</a><a href="/strategy/common-network-task.html" onClick={(event) => { event.preventDefault(); navigate("/strategy/common-network-task.html"); }} className="flex items-center pl-12 pr-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#0d9488] rounded-lg nav-item" data-file="common-network-task.html">共性网络分析</a><a href="/strategy/tech-trend.html" onClick={(event) => { event.preventDefault(); navigate("/strategy/tech-trend.html"); }} className="flex items-center pl-12 pr-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#0d9488] rounded-lg nav-item" data-file="tech-trend.html">技术趋势分析</a><a href="/strategy/tech-alert.html" onClick={(event) => { event.preventDefault(); navigate("/strategy/tech-alert.html"); }} className="flex items-center pl-12 pr-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#0d9488] rounded-lg nav-item" data-file="tech-alert.html">技术动态预警</a></div></div><div className="nav-group"><button onClick={toggleGroup} className="w-full flex items-center gap-3 px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 rounded-lg transition-colors"><span className="material-symbols-outlined text-xl text-slate-400">route</span><span className="flex-1 text-left">领域技术线路</span><span className="material-symbols-outlined text-sm text-slate-400 expand-icon">expand_more</span></button><div className="group-children overflow-hidden" style={{ maxHeight: "0", transition: "max-height .25s ease" }}><a href="/strategy/delphi.html" onClick={(event) => { event.preventDefault(); navigate("/strategy/delphi.html"); }} className="flex items-center pl-12 pr-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#0d9488] rounded-lg nav-item" data-file="delphi.html">德尔菲问卷</a><a href="/strategy/tech-roadmap.html" onClick={(event) => { event.preventDefault(); navigate("/strategy/tech-roadmap.html"); }} className="flex items-center pl-12 pr-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#0d9488] rounded-lg nav-item" data-file="tech-roadmap.html">技术发展线路</a></div></div><div className="nav-group"><button onClick={toggleGroup} className="w-full flex items-center gap-3 px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 rounded-lg transition-colors"><span className="material-symbols-outlined text-xl text-slate-400">description</span><span className="flex-1 text-left">战略咨询报告</span><span className="material-symbols-outlined text-sm text-slate-400 expand-icon">expand_more</span></button><div className="group-children overflow-hidden" style={{ maxHeight: "0", transition: "max-height .25s ease" }}><a href="/strategy/report-generation.html" onClick={(event) => { event.preventDefault(); navigate("/strategy/report-generation.html"); }} className="flex items-center pl-12 pr-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#0d9488] rounded-lg nav-item" data-file="strategy-shell.html">研究报告管理</a><a href="/strategy/insight-publish.html" onClick={(event) => { event.preventDefault(); navigate("/strategy/insight-publish.html"); }} className="flex items-center pl-12 pr-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#0d9488] rounded-lg nav-item" data-file="insight-publish.html">洞察报告发布</a><a href="/strategy/hot-analysis.html" onClick={(event) => { event.preventDefault(); navigate("/strategy/hot-analysis.html"); }} className="flex items-center pl-12 pr-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#0d9488] rounded-lg nav-item" data-file="hot-analysis.html">热点分析</a><a href="/strategy/report-generation.html" onClick={(event) => { event.preventDefault(); navigate("/strategy/report-generation.html"); }} className="flex items-center pl-12 pr-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#0d9488] rounded-lg nav-item" data-file="report-generation.html">战略咨询报告生成</a></div></div><div className="nav-group"><button onClick={toggleGroup} className="w-full flex items-center gap-3 px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 rounded-lg transition-colors"><span className="material-symbols-outlined text-xl text-slate-400">folder_special</span><span className="flex-1 text-left">战略咨询成果</span><span className="material-symbols-outlined text-sm text-slate-400 expand-icon">expand_more</span></button><div className="group-children overflow-hidden" style={{ maxHeight: "0", transition: "max-height .25s ease" }}><a href="/strategy/strategy-cases.html" onClick={(event) => { event.preventDefault(); navigate("/strategy/strategy-cases.html"); }} className="flex items-center pl-12 pr-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#0d9488] rounded-lg nav-item" data-file="strategy-cases.html">战略咨询案例展示</a></div></div><div className="nav-group"><button onClick={toggleGroup} className="w-full flex items-center gap-3 px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 rounded-lg transition-colors"><span className="material-symbols-outlined text-xl text-slate-400">query_stats</span><span className="flex-1 text-left">智能问数</span><span className="material-symbols-outlined text-sm text-slate-400 expand-icon">expand_more</span></button><div className="group-children overflow-hidden" style={{ maxHeight: "0", transition: "max-height .25s ease" }}><a href="/strategy/analysis-start.html" onClick={(event) => { event.preventDefault(); navigate("/strategy/analysis-start.html"); }} className="flex items-center pl-12 pr-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#0d9488] rounded-lg nav-item" data-file="analysis-start.html">开始分析</a><a href="/strategy/case-share.html" onClick={(event) => { event.preventDefault(); navigate("/strategy/case-share.html"); }} className="flex items-center pl-12 pr-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#0d9488] rounded-lg nav-item" data-file="case-share.html">案例分享</a><a href="/strategy/multi-source-data.html" onClick={(event) => { event.preventDefault(); navigate("/strategy/multi-source-data.html"); }} className="flex items-center pl-12 pr-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#0d9488] rounded-lg nav-item" data-file="multi-source-data.html">多源数据接入</a><a href="/strategy/data-dashboard.html" onClick={(event) => { event.preventDefault(); navigate("/strategy/data-dashboard.html"); }} className="flex items-center pl-12 pr-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#0d9488] rounded-lg nav-item" data-file="data-dashboard.html">数据看板显示</a><a href="/strategy/report-gen-ai.html" onClick={(event) => { event.preventDefault(); navigate("/strategy/report-gen-ai.html"); }} className="flex items-center pl-12 pr-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#0d9488] rounded-lg nav-item" data-file="report-gen-ai.html">一键报告生成</a></div></div></nav><div className="p-4 border-t border-slate-100"><div className="bg-slate-50 rounded-xl p-3 flex items-center gap-3"><div className="w-9 h-9 bg-[#0d9488] rounded-lg flex items-center justify-center"><span className="material-symbols-outlined text-white" style={{ fontSize: "18px" }}>manage_accounts</span></div><div><p className="text-xs font-bold text-slate-800">系统管理员</p><p className="text-[10px] text-slate-500">ID: GKX-0822</p></div></div></div></aside><div className="flex-1 flex flex-col min-w-0 overflow-hidden"><header className="h-14 bg-white border-b border-slate-200 flex items-center justify-between px-6 shrink-0"><div className="flex items-center gap-4"><button onClick={toggleSidebar} className="p-1 text-slate-500 hover:bg-slate-100 rounded-lg"><span className="material-symbols-outlined">menu</span></button><h2 className="text-sm font-bold text-slate-800">战略咨询智能支持</h2></div><div className="flex-1 max-w-md mx-6"><div className="relative"><span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" style={{ fontSize: "18px" }}>search</span><input className="w-full pl-9 pr-4 py-1.5 bg-slate-100 rounded-full text-sm placeholder-slate-400 outline-none border-none" placeholder="搜索功能、报告..." type="text"/></div></div><div className="flex items-center gap-2"><button className="p-2 text-slate-500 hover:bg-slate-100 rounded-full relative"><span className="material-symbols-outlined" style={{ fontSize: "22px" }}>notifications</span><span className="absolute top-2 right-2 w-1.5 h-1.5 bg-red-500 rounded-full"></span></button></div></header><div className="flex-1 overflow-y-auto p-8 space-y-6">
      <div className="page-inner">
      
      <aside className="fixed right-6 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-4" data-purpose="sidebar-navigation">
      <div className="flex flex-col items-center bg-white/90 backdrop-blur-md rounded-2xl shadow-xl border border-gray-100 p-2 gap-4">
      
      <button className="p-3 btn-gradient-primary rounded-xl shadow-md hover:opacity-90 transition-all">
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
      </svg>
      </button>
      
      <button className="p-3 text-gray-400 hover:text-primary-blue transition-colors">
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
      </svg>
      </button>
      
      <button className="p-3 text-gray-400 hover:text-primary-blue transition-colors">
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
      </svg>
      </button>
      
      <button className="p-3 text-gray-400 hover:text-primary-blue transition-colors">
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
      </svg>
      </button>
      </div>
      </aside>
      
      <header className="w-full max-w-[1440px] mx-auto flex justify-end p-6">
      <button className="p-2 rounded-full border border-gray-200 bg-white text-gray-600 hover:bg-gray-50 transition-colors shadow-sm">
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
      </svg>
      </button>
      </header>
      
      <main className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 pb-24">
      
      <section className="text-center mt-8 mb-12" data-purpose="hero-content">
      <div className="flex items-center justify-center gap-3 mb-6">
      <h1 className="text-5xl font-bold tracking-tight text-gray-800">
      可信可追踪的决策分析助手
            </h1>
      <span className="material-symbols-outlined text-primary-blue text-4xl">Auto_Awesome</span>
      </div>
      <p className="text-gray-500 text-lg max-w-4xl mx-auto leading-relaxed">
            覆盖行业研究、企业分析、产业链分析、政策解读、风险预估与投资判断等关键场景，以可验证的证据链与推理链，支撑你的全链路分析与判断。
          </p>
      </section>
      
      <section className="flex flex-wrap justify-center gap-3 mb-8" data-purpose="navigation-tabs">
      <button className="px-6 py-2 rounded-full nav-btn-active font-medium flex items-center gap-2 transition-all">
      <span className="material-symbols-outlined text-xl">chat_bubble</span> 快速分析
          </button>
      <button className="px-6 py-2 rounded-full border border-gray-100 bg-white hover:bg-gray-50 text-gray-600 font-medium flex items-center gap-2 transition-all shadow-sm">
      <span className="material-symbols-outlined text-xl">description</span> 深度分析报告
          </button>
      <button className="relative px-6 py-2 rounded-full border border-gray-100 bg-white hover:bg-gray-50 text-gray-600 font-medium flex items-center gap-2 transition-all shadow-sm">
      <span className="material-symbols-outlined text-xl">analytics</span> 企业研报解读
            <span className="absolute -top-1 -right-1 px-1.5 py-0.5 bg-primary-blue/20 text-[10px] text-primary-blue rounded-md font-bold scale-90">Beta</span>
      </button>
      <button className="relative px-6 py-2 rounded-full border border-gray-100 bg-white hover:bg-gray-50 text-gray-600 font-medium flex items-center gap-2 transition-all shadow-sm">
      <span className="material-symbols-outlined text-xl">trending_up</span> 行业研报解读
            <span className="absolute -top-1 -right-1 px-1.5 py-0.5 bg-primary-blue/20 text-[10px] text-primary-blue rounded-md font-bold scale-90">Beta</span>
      </button>
      <button className="relative px-6 py-2 rounded-full border border-gray-100 bg-white hover:bg-gray-50 text-gray-600 font-medium flex items-center gap-2 transition-all shadow-sm">
      <span className="material-symbols-outlined text-xl">account_balance</span> 企业财务分析报告
            <span className="absolute -top-1 -right-1 px-1.5 py-0.5 bg-primary-blue/20 text-[10px] text-primary-blue rounded-md font-bold scale-90">Beta</span>
      </button>
      </section>
      
      <section className="max-w-5xl mx-auto mb-16" data-purpose="search-interface">
      <div className="relative group">
      <div className="absolute inset-y-0 left-6 flex items-center pointer-events-none">
      <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
      </svg>
      </div>
      <input className="block w-full pl-16 pr-20 py-6 glass-search rounded-full shadow-xl focus:ring-2 outline-none text-gray-700 text-lg placeholder-gray-400 transition-all shadow-[#0078D4]/10 focus:ring-[#00BFFF]/30" placeholder="请输入您的问题，AI咨询师将基于数据与模型，即时为您提供专业的商业分析与建议" type="text"/>
      <div className="absolute inset-y-0 right-4 flex items-center">
      
      <button className="p-3 btn-gradient-primary rounded-full hover:opacity-90 transition-all shadow-lg flex items-center justify-center">
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
      <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"></path>
      </svg>
      </button>
      </div>
      </div>
      
      <div className="mt-8 flex flex-wrap justify-center gap-3 text-sm">
      <div className="flex items-center gap-2 px-4 py-2 bg-gray-50/80 border border-gray-100 rounded-lg text-gray-600 hover:bg-white hover:shadow-sm cursor-pointer transition-all">
      <span className="text-gray-400">例</span>
      <span>最近人形机器人行业的发展趋势是什么</span>
      </div>
      <div className="flex items-center gap-2 px-4 py-2 bg-gray-50/80 border border-gray-100 rounded-lg text-gray-600 hover:bg-white hover:shadow-sm cursor-pointer transition-all">
      <span className="text-gray-400">例</span>
      <span>新能源汽车行业的龙头企业有哪些</span>
      </div>
      <div className="flex items-center gap-2 px-4 py-2 bg-gray-50/80 border border-gray-100 rounded-lg text-gray-600 hover:bg-white hover:shadow-sm cursor-pointer transition-all">
      <span className="text-gray-400">例</span>
      <span>低空经济行业的核心技术与政策动态有哪些</span>
      </div>
      </div>
      </section>
      
      <section data-purpose="toolbox">
      <div className="flex items-center justify-between mb-8">
      <div className="flex items-center gap-3">
      <div className="w-1.5 h-6 bg-primary-blue rounded-full"></div>
      <h2 className="text-2xl font-bold text-gray-800">商业分析百宝箱</h2>
      </div>
      <button className="text-primary-blue text-sm font-medium hover:underline">查看全部</button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      
      <div className="relative group bg-white p-8 rounded-[2rem] card-shadow border border-gray-50 hover:border-blue-100 transition-all hover:-translate-y-1 overflow-hidden">
      <h3 className="text-xl font-bold text-gray-800 mb-2">上传大纲生成正文</h3>
      <p className="text-gray-400 text-sm leading-relaxed mb-8">根据上传大纲进行正文生成</p>
      
      <button className="px-6 py-2 rounded-xl btn-gradient-primary text-sm font-semibold hover:opacity-90 transition-all">立即开始</button>
      <div className="absolute bottom-4 right-4 text-primary-blue opacity-[0.05] pointer-events-none">
      <span className="material-symbols-outlined text-8xl">upload_file</span>
      </div>
      </div>
      
      <div className="relative group bg-white p-8 rounded-[2rem] card-shadow border border-gray-50 hover:border-blue-100 transition-all hover:-translate-y-1 overflow-hidden">
      <h3 className="text-xl font-bold text-gray-800 mb-2">金融企业财务分析</h3>
      <p className="text-gray-400 text-sm leading-relaxed mb-8">金融企业财务全景智能分析</p>
      
      <button className="px-6 py-2 rounded-xl btn-gradient-primary text-sm font-semibold hover:opacity-90 transition-all">立即开始</button>
      <div className="absolute bottom-4 right-4 text-primary-blue opacity-[0.05] pointer-events-none">
      <span className="material-symbols-outlined text-8xl">account_balance_wallet</span>
      </div>
      </div>
      
      <div className="relative group bg-white p-8 rounded-[2rem] card-shadow border border-gray-50 hover:border-blue-100 transition-all hover:-translate-y-1 overflow-hidden">
      <h3 className="text-xl font-bold text-gray-800 mb-2">非金融企业财务分析</h3>
      <p className="text-gray-400 text-sm leading-relaxed mb-8">看懂非金融企业的真实财务表现</p>
      
      <button className="px-6 py-2 rounded-xl btn-gradient-primary text-sm font-semibold hover:opacity-90 transition-all">立即开始</button>
      <div className="absolute bottom-4 right-4 text-primary-blue opacity-[0.05] pointer-events-none">
      <span className="material-symbols-outlined text-8xl">monitoring</span>
      </div>
      </div>
      
      <div className="relative group bg-white p-8 rounded-[2rem] card-shadow border border-gray-50 hover:border-blue-100 transition-all hover:-translate-y-1 overflow-hidden">
      <h3 className="text-xl font-bold text-gray-800 mb-2">生成大纲</h3>
      <p className="text-gray-400 text-sm leading-relaxed mb-8">敬请期待</p>
      <button className="px-6 py-2 rounded-xl bg-gray-50 text-gray-400 text-sm font-semibold cursor-not-allowed">敬请期待</button>
      <div className="absolute bottom-4 right-4 text-gray-200 opacity-[0.1] pointer-events-none">
      <span className="material-symbols-outlined text-8xl">rocket_launch</span>
      </div>
      </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
      <div className="bg-gray-50/50 p-8 rounded-[2rem] border border-transparent flex flex-col justify-between h-40">
      <h3 className="text-xl font-bold text-gray-400">竞品分析</h3>
      <p className="text-gray-300 text-sm">敬请期待</p>
      </div>
      <div className="bg-gray-50/50 p-8 rounded-[2rem] border border-transparent flex flex-col justify-between h-40">
      <h3 className="text-xl font-bold text-gray-400">洞见趋势</h3>
      <p className="text-gray-300 text-sm">敬请期待</p>
      </div>
      <div className="bg-gray-50/50 p-8 rounded-[2rem] border border-transparent flex flex-col justify-between h-40">
      <h3 className="text-xl font-bold text-gray-400">政策解读</h3>
      <p className="text-gray-300 text-sm">敬请期待</p>
      </div>
      <div className="bg-gray-50/50 p-8 rounded-[2rem] border border-transparent flex flex-col justify-between h-40">
      <h3 className="text-xl font-bold text-gray-400">行业全景</h3>
      <p className="text-gray-300 text-sm">敬请期待</p>
      </div>
      </div>
      </section>
      
      </main>
      
      </div>
      
      </div></div></div>
    </div>
  );
}
