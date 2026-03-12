import { useNavigate } from "react-router-dom";

export default function DataDashboardPage() {
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
      <div className="fixed right-6 top-1/2 -translate-y-1/2 flex flex-col gap-3 z-50">
      <button className="w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center text-slate-400 hover:text-primary transition-colors">
      <span className="material-symbols-outlined text-[20px]">chat_bubble</span>
      </button>
      <button className="w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center text-slate-400 hover:text-primary transition-colors">
      <span className="material-symbols-outlined text-[20px]">help</span>
      </button>
      <button className="w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center text-slate-400 hover:text-primary transition-colors">
      <span className="material-symbols-outlined text-[20px]">download</span>
      </button>
      <button className="w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center text-slate-400 hover:text-primary transition-colors">
      <span className="material-symbols-outlined text-[20px]">fullscreen</span>
      </button>
      </div>
      <div className="max-w-[1600px] mx-auto px-8 py-6">
      <nav className="flex items-center gap-2 mb-4 text-xs font-medium">
      <a className="text-slate-500 hover:text-primary" href="#">新型高端智库系统</a>
      <span className="text-slate-300">/</span>
      <a className="text-slate-500 hover:text-primary" href="#">战略咨询智能支持</a>
      <span className="text-slate-300">/</span>
      <a className="text-slate-500 hover:text-primary" href="#">领域热点解读</a>
      <span className="text-slate-300">/</span>
      <span className="text-primary">AIGC行业</span>
      </nav>
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
      <h1 className="text-2xl font-bold tracking-tight text-slate-900">AIGC行业深度研判看板</h1>
      <div className="flex flex-wrap gap-2">
      <button className="flex items-center gap-2 px-5 py-2 bg-primary text-white hover:bg-primary/90 transition-colors rounded-lg font-bold text-sm">
      <span className="material-symbols-outlined text-[18px]">description</span>
      <span>生成研报</span>
      </button>
      <button className="flex items-center gap-2 px-5 py-2 bg-primary text-white hover:bg-primary/90 transition-colors rounded-lg font-bold text-sm">
      <span className="material-symbols-outlined text-[18px]">database</span>
      <span>导出数据</span>
      </button>
      <button className="flex items-center gap-2 px-5 py-2 bg-primary text-white hover:bg-primary/90 transition-colors rounded-lg font-bold text-sm">
      <span className="material-symbols-outlined text-[18px]">tv</span>
      <span>进入大屏</span>
      </button>
      </div>
      </div>
      <div className="bg-white p-4 rounded-xl custom-shadow mb-6 flex items-center gap-4 overflow-x-auto scrollbar-hide">
      <button className="px-5 py-1.5 bg-primary text-white rounded-full text-sm font-bold whitespace-nowrap">AIGC行业</button>
      <button className="px-5 py-1.5 text-slate-500 hover:bg-slate-50 rounded-full text-sm font-medium whitespace-nowrap">人形机器人</button>
      <button className="px-5 py-1.5 text-slate-500 hover:bg-slate-50 rounded-full text-sm font-medium whitespace-nowrap">低空经济</button>
      <button className="px-5 py-1.5 text-slate-500 hover:bg-slate-50 rounded-full text-sm font-medium whitespace-nowrap">新能源汽车</button>
      <button className="px-5 py-1.5 text-slate-500 hover:bg-slate-50 rounded-full text-sm font-medium whitespace-nowrap">宠物行业</button>
      <button className="px-5 py-1.5 text-slate-500 hover:bg-slate-50 rounded-full text-sm font-medium whitespace-nowrap">美妆</button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
      <div className="bg-white p-5 rounded-xl custom-shadow border border-slate-50">
      <div className="flex justify-between items-start mb-6">
      <h3 className="text-sm font-bold text-slate-800">GPU进口量</h3>
      <button className="text-[10px] text-primary bg-primary/10 px-2 py-0.5 rounded font-bold">指标详情</button>
      </div>
      <div className="h-28 flex items-end gap-1.5 mb-4">
      <div className="flex-1 bg-primary/20 rounded-t-sm h-[40%]"></div>
      <div className="flex-1 bg-primary/20 rounded-t-sm h-[55%]"></div>
      <div className="flex-1 bg-primary/20 rounded-t-sm h-[45%]"></div>
      <div className="flex-1 bg-primary/20 rounded-t-sm h-[70%]"></div>
      <div className="flex-1 bg-primary/20 rounded-t-sm h-[65%]"></div>
      <div className="flex-1 bg-primary/20 rounded-t-sm h-[85%]"></div>
      <div className="flex-1 bg-primary/20 rounded-t-sm h-[75%]"></div>
      </div>
      <div className="flex justify-between text-[10px] text-slate-400">
      <span>单位: 亿个</span>
      <span>数据来源: 海关总署</span>
      </div>
      </div>
      <div className="bg-white p-5 rounded-xl custom-shadow border border-slate-50">
      <div className="flex justify-between items-start mb-6">
      <h3 className="text-sm font-bold text-slate-800">AIGC企业平均毛利率</h3>
      <button className="text-[10px] text-primary bg-primary/10 px-2 py-0.5 rounded font-bold">指标详情</button>
      </div>
      <div className="h-28 flex items-end gap-1.5 mb-4">
      <div className="flex-1 bg-primary/20 rounded-t-sm h-[60%]"></div>
      <div className="flex-1 bg-primary/20 rounded-t-sm h-[62%]"></div>
      <div className="flex-1 bg-primary/20 rounded-t-sm h-[58%]"></div>
      <div className="flex-1 bg-primary/20 rounded-t-sm h-[65%]"></div>
      <div className="flex-1 bg-primary/20 rounded-t-sm h-[68%]"></div>
      <div className="flex-1 bg-primary/20 rounded-t-sm h-[63%]"></div>
      <div className="flex-1 bg-primary/20 rounded-t-sm h-[70%]"></div>
      </div>
      <div className="flex justify-between text-[10px] text-slate-400">
      <span>单位: %</span>
      <span>数据来源: 上市公司年报</span>
      </div>
      </div>
      <div className="bg-white p-5 rounded-xl custom-shadow border border-slate-50">
      <div className="flex justify-between items-start mb-6">
      <h3 className="text-sm font-bold text-slate-800">数据中心平均PUE</h3>
      <button className="text-[10px] text-primary bg-primary/10 px-2 py-0.5 rounded font-bold">指标详情</button>
      </div>
      <div className="h-28 flex items-end gap-1.5 mb-4 relative">
      <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 100">
      <path d="M0,80 L20,70 L40,75 L60,60 L80,50 L100,45" fill="none" stroke="#17b0cf" strokeWidth="2"></path>
      <path d="M0,80 L20,70 L40,75 L60,60 L80,50 L100,45 L100,100 L0,100 Z" fill="url(#grad1)" opacity="0.2"></path>
      <defs>
      <linearGradient id="grad1" x1="0%" x2="0%" y1="0%" y2="100%">
      <stop offset="0%" style={{ stopColor: "rgb(23,176,207)", stopOpacity: "1" }}></stop>
      <stop offset="100%" style={{ stopColor: "rgb(23,176,207)", stopOpacity: "0" }}></stop>
      </linearGradient>
      </defs>
      </svg>
      </div>
      <div className="flex justify-between text-[10px] text-slate-400">
      <span>单位: 指数</span>
      <span>数据来源: 行业公开报告</span>
      </div>
      </div>
      <div className="bg-white p-5 rounded-xl custom-shadow border border-slate-50">
      <div className="flex justify-between items-start mb-6">
      <h3 className="text-sm font-bold text-slate-800">数据中心电力成本指数</h3>
      <button className="text-[10px] text-primary bg-primary/10 px-2 py-0.5 rounded font-bold">指标详情</button>
      </div>
      <div className="h-28 flex items-end gap-1.5 mb-4">
      <div className="flex-1 bg-primary/20 rounded-t-sm h-[30%]"></div>
      <div className="flex-1 bg-primary/20 rounded-t-sm h-[40%]"></div>
      <div className="flex-1 bg-primary/20 rounded-t-sm h-[50%]"></div>
      <div className="flex-1 bg-primary/20 rounded-t-sm h-[60%]"></div>
      <div className="flex-1 bg-primary/20 rounded-t-sm h-[55%]"></div>
      <div className="flex-1 bg-primary/20 rounded-t-sm h-[75%]"></div>
      <div className="flex-1 bg-primary/20 rounded-t-sm h-[80%]"></div>
      </div>
      <div className="flex justify-between text-[10px] text-slate-400">
      <span>单位: 点</span>
      <span>数据来源: 发改委公开数据</span>
      </div>
      </div>
      <div className="bg-white p-5 rounded-xl custom-shadow border border-slate-50">
      <div className="flex justify-between items-start mb-6">
      <h3 className="text-sm font-bold text-slate-800">GPU渠道库存周转天数</h3>
      <button className="text-[10px] text-primary bg-primary/10 px-2 py-0.5 rounded font-bold">指标详情</button>
      </div>
      <div className="h-28 flex items-end gap-1.5 mb-4 relative">
      <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 100">
      <path d="M0,50 L20,55 L40,45 L60,40 L80,35 L100,30" fill="none" stroke="#17b0cf" strokeWidth="2"></path>
      </svg>
      </div>
      <div className="flex justify-between text-[10px] text-slate-400">
      <span>单位: 天</span>
      <span>数据来源: 调研汇总数据</span>
      </div>
      </div>
      <div className="bg-white p-5 rounded-xl custom-shadow border border-slate-50">
      <div className="flex justify-between items-start mb-6">
      <h3 className="text-sm font-bold text-slate-800">数据中心GPU利用率</h3>
      <button className="text-[10px] text-primary bg-primary/10 px-2 py-0.5 rounded font-bold">指标详情</button>
      </div>
      <div className="h-28 flex items-end gap-1.5 mb-4">
      <div className="flex-1 bg-primary/20 rounded-t-sm h-[40%]"></div>
      <div className="flex-1 bg-primary/20 rounded-t-sm h-[42%]"></div>
      <div className="flex-1 bg-primary/20 rounded-t-sm h-[45%]"></div>
      <div className="flex-1 bg-primary/20 rounded-t-sm h-[50%]"></div>
      <div className="flex-1 bg-primary/20 rounded-t-sm h-[55%]"></div>
      <div className="flex-1 bg-primary/20 rounded-t-sm h-[60%]"></div>
      <div className="flex-1 bg-primary/20 rounded-t-sm h-[62%]"></div>
      </div>
      <div className="flex justify-between text-[10px] text-slate-400">
      <span>单位: %</span>
      <span>数据来源: 基点公开信息</span>
      </div>
      </div>
      <div className="bg-white p-5 rounded-xl custom-shadow border border-slate-50">
      <div className="flex justify-between items-start mb-6">
      <h3 className="text-sm font-bold text-slate-800">生成式AI行业市场规模</h3>
      <button className="text-[10px] text-primary bg-primary/10 px-2 py-0.5 rounded font-bold">指标详情</button>
      </div>
      <div className="h-28 flex items-end gap-1.5 mb-4">
      <div className="flex-1 bg-primary/20 rounded-t-sm h-[10%]"></div>
      <div className="flex-1 bg-primary/20 rounded-t-sm h-[15%]"></div>
      <div className="flex-1 bg-primary/20 rounded-t-sm h-[20%]"></div>
      <div className="flex-1 bg-primary/20 rounded-t-sm h-[35%]"></div>
      <div className="flex-1 bg-primary/20 rounded-t-sm h-[55%]"></div>
      <div className="flex-1 bg-primary/20 rounded-t-sm h-[80%]"></div>
      <div className="flex-1 bg-primary/20 rounded-t-sm h-[95%]"></div>
      </div>
      <div className="flex justify-between text-[10px] text-slate-400">
      <span>单位: 亿元</span>
      <span>数据来源: 行业研究报告</span>
      </div>
      </div>
      <div className="bg-white p-5 rounded-xl custom-shadow border border-slate-50">
      <div className="flex justify-between items-start mb-6">
      <h3 className="text-sm font-bold text-slate-800">AIGC行业投融资金额</h3>
      <button className="text-[10px] text-primary bg-primary/10 px-2 py-0.5 rounded font-bold">指标详情</button>
      </div>
      <div className="h-28 flex items-end gap-1.5 mb-4">
      <div className="flex-1 bg-primary/20 rounded-t-sm h-[30%]"></div>
      <div className="flex-1 bg-primary/20 rounded-t-sm h-[35%]"></div>
      <div className="flex-1 bg-primary/20 rounded-t-sm h-[45%]"></div>
      <div className="flex-1 bg-primary/20 rounded-t-sm h-[65%]"></div>
      <div className="flex-1 bg-primary/20 rounded-t-sm h-[85%]"></div>
      <div className="flex-1 bg-primary/20 rounded-t-sm h-[75%]"></div>
      <div className="flex-1 bg-primary/20 rounded-t-sm h-[90%]"></div>
      </div>
      <div className="flex justify-between text-[10px] text-slate-400">
      <span>单位: 亿元</span>
      <span>数据来源: IT桔子</span>
      </div>
      </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <div className="bg-white rounded-xl custom-shadow overflow-hidden border border-slate-50">
      <div className="p-5">
      <div className="flex items-center gap-2 mb-4">
      <div className="w-1 h-4 bg-primary rounded-full"></div>
      <h2 className="font-bold text-slate-800">相关政策</h2>
      </div>
      <div className="space-y-4 mb-8">
      <div className="flex justify-between items-center group cursor-pointer">
      <span className="text-sm text-slate-600 group-hover:text-primary transition-colors">《生成式人工智能服务管理暂行办法》落地实施方案</span>
      <span className="text-xs text-slate-400">2024-03-15</span>
      </div>
      <div className="flex justify-between items-center group cursor-pointer">
      <span className="text-sm text-slate-600 group-hover:text-primary transition-colors">关于促进人工智能产业高质量发展的指导意见</span>
      <span className="text-xs text-slate-400">2024-02-28</span>
      </div>
      <div className="flex justify-between items-center group cursor-pointer">
      <span className="text-sm text-slate-600 group-hover:text-primary transition-colors">国家算力枢纽节点建设规划纲要 (2024-2026)</span>
      <span className="text-xs text-slate-400">2024-01-20</span>
      </div>
      </div>
      <div className="flex items-center gap-2 mb-4">
      <div className="w-1 h-4 bg-primary rounded-full"></div>
      <h2 className="font-bold text-slate-800">相关研报 - 月度推荐</h2>
      </div>
      <div className="space-y-4">
      <div className="flex justify-between items-start group cursor-pointer">
      <div>
      <h4 className="text-sm font-bold text-slate-800 group-hover:text-primary transition-colors">从AIGC到AIGD：智能决策的下一站</h4>
      <p className="text-[10px] text-slate-400 mt-1">明略科技研究院 · 行业研究</p>
      </div>
      <span className="text-xs text-slate-400">2024-03-01</span>
      </div>
      <div className="flex justify-between items-start group cursor-pointer">
      <div>
      <h4 className="text-sm font-bold text-slate-800 group-hover:text-primary transition-colors">2024年AIGC行业现状及发展趋势白皮书</h4>
      <p className="text-[10px] text-slate-400 mt-1">AIGCLink研究院 · 行业研究</p>
      </div>
      <span className="text-xs text-slate-400">2024-02-15</span>
      </div>
      </div>
      </div>
      </div>
      <div className="bg-white rounded-xl custom-shadow overflow-hidden border border-slate-50">
      <div className="p-5">
      <div className="flex items-center gap-2 mb-4">
      <div className="w-1 h-4 bg-primary rounded-full"></div>
      <h2 className="font-bold text-slate-800">相关新闻</h2>
      </div>
      <div className="space-y-4 mb-8">
      <div className="flex justify-between items-center group cursor-pointer">
      <span className="text-sm text-slate-600 group-hover:text-primary transition-colors">大模型驱动下，AI算力基础设施行业迎来黄金发展期</span>
      <span className="text-xs text-slate-400">2024-03-20</span>
      </div>
      <div className="flex justify-between items-center group cursor-pointer">
      <span className="text-sm text-slate-600 group-hover:text-primary transition-colors">万卡大算力+万亿大模型：中国AI新叙事</span>
      <span className="text-xs text-slate-400">2024-03-18</span>
      </div>
      <div className="flex justify-between items-center group cursor-pointer">
      <span className="text-sm text-slate-600 group-hover:text-primary transition-colors">英伟达发布全新B200芯片，性能提升5倍</span>
      <span className="text-xs text-slate-400">2024-03-17</span>
      </div>
      </div>
      <div className="flex items-center gap-2 mb-4">
      <div className="w-1 h-4 bg-primary rounded-full"></div>
      <h2 className="font-bold text-slate-800">相关研报 - 最新推荐</h2>
      </div>
      <div className="space-y-4">
      <div className="flex justify-between items-start group cursor-pointer">
      <div>
      <h4 className="text-sm font-bold text-slate-800 group-hover:text-primary transition-colors">2025智绘未来：AIGC应用赋能千行百业发展报告</h4>
      <p className="text-[10px] text-slate-400 mt-1">人民网研究院 · 行业研究</p>
      </div>
      <span className="text-xs text-slate-400">2024-03-19</span>
      </div>
      <div className="flex justify-between items-start group cursor-pointer">
      <div>
      <h4 className="text-sm font-bold text-slate-800 group-hover:text-primary transition-colors">传媒互联网周观点：Coding、Agent和AIGC多模态三大主线</h4>
      <p className="text-[10px] text-slate-400 mt-1">浙商证券 · 行业研究</p>
      </div>
      <span className="text-xs text-slate-400">2024-03-18</span>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      
      
      </div>
      
      </div></div></div>
    </div>
  );
}
