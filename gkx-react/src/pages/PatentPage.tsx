import { useNavigate } from "react-router-dom";

export default function PatentPage() {
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
      <div className="flex h-screen w-full bg-slate-50 overflow-hidden"><aside id="sidebar" className="w-64 bg-white border-r border-slate-200 flex flex-col z-30 shrink-0" style={{ minWidth: "256px" }}><div className="p-5 flex items-center gap-3 border-b border-slate-100"><div className="w-8 h-8 bg-[#0d9488] rounded-lg flex items-center justify-center"><span className="material-symbols-outlined text-white" style={{ fontSize: "20px" }}>insights</span></div><span className="font-bold text-base text-slate-800">GKX</span><a href="/home" onClick={(event) => { event.preventDefault(); navigate("/home"); }} className="ml-auto text-slate-400 hover:text-slate-600" title="返回首页"><span className="material-symbols-outlined" style={{ fontSize: "18px" }}>home</span></a></div><div className="px-4 pt-4 pb-1"><span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">战略咨询体系</span></div><nav className="flex-1 px-2 py-2 overflow-y-auto space-y-0.5"><div className="nav-group"><button onClick={toggleGroup} className="w-full flex items-center gap-3 px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 rounded-lg transition-colors"><span className="material-symbols-outlined text-xl text-slate-400">search_check</span><span className="flex-1 text-left">研究需求分析</span><span className="material-symbols-outlined text-sm text-slate-400 expand-icon">expand_more</span></button><div className="group-children overflow-hidden" style={{ maxHeight: "0", transition: "max-height .25s ease" }}><a href="/strategy/entity-list.html" onClick={(event) => { event.preventDefault(); navigate("/strategy/entity-list.html"); }} className="flex items-center pl-12 pr-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#0d9488] rounded-lg nav-item" data-file="entity-list.html">科技实体清单</a><a href="/strategy/frontier-tech.html" onClick={(event) => { event.preventDefault(); navigate("/strategy/frontier-tech.html"); }} className="flex items-center pl-12 pr-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#0d9488] rounded-lg nav-item" data-file="frontier-tech.html">颠覆性与前沿技术分析</a><a href="/strategy/media-focus.html" onClick={(event) => { event.preventDefault(); navigate("/strategy/media-focus.html"); }} className="flex items-center pl-12 pr-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#0d9488] rounded-lg nav-item" data-file="media-focus.html">媒体聚焦</a></div></div><div className="nav-group"><button onClick={toggleGroup} className="w-full flex items-center gap-3 px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 rounded-lg transition-colors"><span className="material-symbols-outlined text-xl text-slate-400">hub</span><span className="flex-1 text-left">技术体系分析</span><span className="material-symbols-outlined text-sm text-slate-400 expand-icon">expand_more</span></button><div className="group-children overflow-hidden" style={{ maxHeight: "0", transition: "max-height .25s ease" }}><a href="/strategy/tech-system.html" onClick={(event) => { event.preventDefault(); navigate("/strategy/tech-system.html"); }} className="flex items-center pl-12 pr-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#0d9488] rounded-lg nav-item" data-file="tech-system.html">技术体系</a><a href="/strategy/paper-dashboard.html" onClick={(event) => { event.preventDefault(); navigate("/strategy/paper-dashboard.html"); }} className="flex items-center pl-12 pr-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#0d9488] rounded-lg nav-item" data-file="paper-dashboard.html">论文分析</a><a href="/strategy/patent.html" onClick={(event) => { event.preventDefault(); navigate("/strategy/patent.html"); }} className="flex items-center pl-12 pr-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#0d9488] rounded-lg nav-item" data-file="patent.html">专利分析</a><a href="/strategy/project-stats.html" onClick={(event) => { event.preventDefault(); navigate("/strategy/project-stats.html"); }} className="flex items-center pl-12 pr-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#0d9488] rounded-lg nav-item" data-file="project-stats.html">科研项目分析</a><a href="/strategy/social-network-import.html" onClick={(event) => { event.preventDefault(); navigate("/strategy/social-network-import.html"); }} className="flex items-center pl-12 pr-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#0d9488] rounded-lg nav-item" data-file="social-network-import.html">社会网络分析</a></div></div><div className="nav-group"><button onClick={toggleGroup} className="w-full flex items-center gap-3 px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 rounded-lg transition-colors"><span className="material-symbols-outlined text-xl text-slate-400">trending_up</span><span className="flex-1 text-left">技术趋势分析</span><span className="material-symbols-outlined text-sm text-slate-400 expand-icon">expand_more</span></button><div className="group-children overflow-hidden" style={{ maxHeight: "0", transition: "max-height .25s ease" }}><a href="/strategy/clustering-task.html" onClick={(event) => { event.preventDefault(); navigate("/strategy/clustering-task.html"); }} className="flex items-center pl-12 pr-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#0d9488] rounded-lg nav-item" data-file="clustering-task.html">聚类分析</a><a href="/strategy/common-network-task.html" onClick={(event) => { event.preventDefault(); navigate("/strategy/common-network-task.html"); }} className="flex items-center pl-12 pr-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#0d9488] rounded-lg nav-item" data-file="common-network-task.html">共性网络分析</a><a href="/strategy/tech-trend.html" onClick={(event) => { event.preventDefault(); navigate("/strategy/tech-trend.html"); }} className="flex items-center pl-12 pr-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#0d9488] rounded-lg nav-item" data-file="tech-trend.html">技术趋势分析</a><a href="/strategy/tech-alert.html" onClick={(event) => { event.preventDefault(); navigate("/strategy/tech-alert.html"); }} className="flex items-center pl-12 pr-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#0d9488] rounded-lg nav-item" data-file="tech-alert.html">技术动态预警</a></div></div><div className="nav-group"><button onClick={toggleGroup} className="w-full flex items-center gap-3 px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 rounded-lg transition-colors"><span className="material-symbols-outlined text-xl text-slate-400">route</span><span className="flex-1 text-left">领域技术线路</span><span className="material-symbols-outlined text-sm text-slate-400 expand-icon">expand_more</span></button><div className="group-children overflow-hidden" style={{ maxHeight: "0", transition: "max-height .25s ease" }}><a href="/strategy/delphi.html" onClick={(event) => { event.preventDefault(); navigate("/strategy/delphi.html"); }} className="flex items-center pl-12 pr-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#0d9488] rounded-lg nav-item" data-file="delphi.html">德尔菲问卷</a><a href="/strategy/tech-roadmap.html" onClick={(event) => { event.preventDefault(); navigate("/strategy/tech-roadmap.html"); }} className="flex items-center pl-12 pr-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#0d9488] rounded-lg nav-item" data-file="tech-roadmap.html">技术发展线路</a></div></div><div className="nav-group"><button onClick={toggleGroup} className="w-full flex items-center gap-3 px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 rounded-lg transition-colors"><span className="material-symbols-outlined text-xl text-slate-400">description</span><span className="flex-1 text-left">战略咨询报告</span><span className="material-symbols-outlined text-sm text-slate-400 expand-icon">expand_more</span></button><div className="group-children overflow-hidden" style={{ maxHeight: "0", transition: "max-height .25s ease" }}><a href="/strategy/report-generation.html" onClick={(event) => { event.preventDefault(); navigate("/strategy/report-generation.html"); }} className="flex items-center pl-12 pr-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#0d9488] rounded-lg nav-item" data-file="strategy-shell.html">研究报告管理</a><a href="/strategy/insight-publish.html" onClick={(event) => { event.preventDefault(); navigate("/strategy/insight-publish.html"); }} className="flex items-center pl-12 pr-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#0d9488] rounded-lg nav-item" data-file="insight-publish.html">洞察报告发布</a><a href="/strategy/hot-analysis.html" onClick={(event) => { event.preventDefault(); navigate("/strategy/hot-analysis.html"); }} className="flex items-center pl-12 pr-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#0d9488] rounded-lg nav-item" data-file="hot-analysis.html">热点分析</a><a href="/strategy/report-generation.html" onClick={(event) => { event.preventDefault(); navigate("/strategy/report-generation.html"); }} className="flex items-center pl-12 pr-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#0d9488] rounded-lg nav-item" data-file="report-generation.html">战略咨询报告生成</a></div></div><div className="nav-group"><button onClick={toggleGroup} className="w-full flex items-center gap-3 px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 rounded-lg transition-colors"><span className="material-symbols-outlined text-xl text-slate-400">folder_special</span><span className="flex-1 text-left">战略咨询成果</span><span className="material-symbols-outlined text-sm text-slate-400 expand-icon">expand_more</span></button><div className="group-children overflow-hidden" style={{ maxHeight: "0", transition: "max-height .25s ease" }}><a href="/strategy/strategy-cases.html" onClick={(event) => { event.preventDefault(); navigate("/strategy/strategy-cases.html"); }} className="flex items-center pl-12 pr-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#0d9488] rounded-lg nav-item" data-file="strategy-cases.html">战略咨询案例展示</a></div></div><div className="nav-group"><button onClick={toggleGroup} className="w-full flex items-center gap-3 px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 rounded-lg transition-colors"><span className="material-symbols-outlined text-xl text-slate-400">query_stats</span><span className="flex-1 text-left">智能问数</span><span className="material-symbols-outlined text-sm text-slate-400 expand-icon">expand_more</span></button><div className="group-children overflow-hidden" style={{ maxHeight: "0", transition: "max-height .25s ease" }}><a href="/strategy/analysis-start.html" onClick={(event) => { event.preventDefault(); navigate("/strategy/analysis-start.html"); }} className="flex items-center pl-12 pr-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#0d9488] rounded-lg nav-item" data-file="analysis-start.html">开始分析</a><a href="/strategy/case-share.html" onClick={(event) => { event.preventDefault(); navigate("/strategy/case-share.html"); }} className="flex items-center pl-12 pr-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#0d9488] rounded-lg nav-item" data-file="case-share.html">案例分享</a><a href="/strategy/multi-source-data.html" onClick={(event) => { event.preventDefault(); navigate("/strategy/multi-source-data.html"); }} className="flex items-center pl-12 pr-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#0d9488] rounded-lg nav-item" data-file="multi-source-data.html">多源数据接入</a><a href="/strategy/data-dashboard.html" onClick={(event) => { event.preventDefault(); navigate("/strategy/data-dashboard.html"); }} className="flex items-center pl-12 pr-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#0d9488] rounded-lg nav-item" data-file="data-dashboard.html">数据看板显示</a><a href="/strategy/report-gen-ai.html" onClick={(event) => { event.preventDefault(); navigate("/strategy/report-gen-ai.html"); }} className="flex items-center pl-12 pr-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#0d9488] rounded-lg nav-item" data-file="report-gen-ai.html">一键报告生成</a></div></div></nav><div className="p-4 border-t border-slate-100"><div className="bg-slate-50 rounded-xl p-3 flex items-center gap-3"><div className="w-9 h-9 bg-[#0d9488] rounded-lg flex items-center justify-center"><span className="material-symbols-outlined text-white" style={{ fontSize: "18px" }}>manage_accounts</span></div><div><p className="text-xs font-bold text-slate-800">系统管理员</p><p className="text-[10px] text-slate-500">ID: GKX-0822</p></div></div></div></aside><div className="flex-1 flex flex-col min-w-0 overflow-hidden"><header className="h-14 bg-white border-b border-slate-200 flex items-center justify-between px-6 shrink-0"><div className="flex items-center gap-4"><button onClick={toggleSidebar} className="p-1 text-slate-500 hover:bg-slate-100 rounded-lg"><span className="material-symbols-outlined">menu</span></button><h2 className="text-sm font-bold text-slate-800">战略咨询智能支持</h2></div><div className="flex-1 max-w-md mx-6"><div className="relative"><span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" style={{ fontSize: "18px" }}>search</span><input className="w-full pl-9 pr-4 py-1.5 bg-slate-100 rounded-full text-sm placeholder-slate-400 outline-none border-none" placeholder="搜索功能、报告..." type="text"/></div></div><div className="flex items-center gap-2"><button className="p-2 text-slate-500 hover:bg-slate-100 rounded-full relative"><span className="material-symbols-outlined" style={{ fontSize: "22px" }}>notifications</span><span className="absolute top-2 right-2 w-1.5 h-1.5 bg-red-500 rounded-full"></span></button></div></header><div className="flex-1 overflow-y-auto"><div className="max-w-[1440px] mx-auto px-6 py-8 flex flex-col gap-6">
      
      <nav className="flex items-center gap-2 text-sm font-medium text-slate-500 dark:text-slate-400">
      <a className="hover:text-primary transition-colors" href="#">新型高端智库系统</a>
      <span className="material-symbols-outlined text-sm">chevron_right</span>
      <a className="hover:text-primary transition-colors" href="#">战略咨询智能支持</a>
      <span className="material-symbols-outlined text-sm">chevron_right</span>
      <a className="hover:text-primary transition-colors" href="#">技术体系分析</a>
      <span className="material-symbols-outlined text-sm">chevron_right</span>
      <span className="text-slate-900 dark:text-slate-100">专利分析</span>
      </nav>
      
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
      <h1 className="text-3xl font-black tracking-tight text-slate-900 dark:text-slate-100">专利分析</h1>
      <div className="flex items-center gap-3">
      <button className="flex items-center justify-center gap-2 px-4 py-2.5 bg-primary text-white rounded-lg font-bold hover:bg-primary/90 transition-all shadow-sm">
      <span className="material-symbols-outlined text-[20px]">add</span>
      <span>新建分析任务</span>
      </button>
      <button className="flex items-center justify-center gap-2 px-4 py-2.5 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 rounded-lg font-bold hover:bg-slate-50 dark:hover:bg-slate-700 transition-all shadow-sm">
      <span className="material-symbols-outlined text-[20px]">description</span>
      <span>生成分析报告</span>
      </button>
      <button className="flex items-center justify-center p-2.5 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700 transition-all">
      <span className="material-symbols-outlined text-[20px]">refresh</span>
      </button>
      </div>
      </div>
      
      <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700">
      <div className="flex flex-wrap items-center gap-4">
      <div className="flex-1 min-w-[300px]">
      <div className="relative group">
      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
      <span className="material-symbols-outlined text-slate-400 group-focus-within:text-primary">search</span>
      </div>
      <input className="block w-full pl-11 pr-4 py-2.5 bg-slate-50 dark:bg-slate-900 border-none rounded-full text-sm focus:ring-2 focus:ring-primary/20 placeholder-slate-400" placeholder="输入专利关键词、技术领域或申请人名称" type="text"/>
      </div>
      </div>
      <div className="flex flex-wrap items-center gap-3">
      <button className="flex items-center gap-2 px-4 py-2 bg-slate-50 dark:bg-slate-900 rounded-lg text-sm font-medium border border-transparent hover:border-primary/30 transition-all">
      <span>国家/地区</span>
      <span className="material-symbols-outlined text-[18px]">expand_more</span>
      </button>
      <button className="flex items-center gap-2 px-4 py-2 bg-slate-50 dark:bg-slate-900 rounded-lg text-sm font-medium border border-transparent hover:border-primary/30 transition-all">
      <span>IPC分类</span>
      <span className="material-symbols-outlined text-[18px]">expand_more</span>
      </button>
      <button className="flex items-center gap-2 px-4 py-2 bg-slate-50 dark:bg-slate-900 rounded-lg text-sm font-medium border border-transparent hover:border-primary/30 transition-all">
      <span>时间范围</span>
      <span className="material-symbols-outlined text-[18px]">expand_more</span>
      </button>
      <div className="h-6 w-px bg-slate-200 dark:bg-slate-700 mx-1"></div>
      <button className="px-6 py-2 bg-primary text-white rounded-lg text-sm font-bold hover:bg-primary/90 transition-all">查询</button>
      <button className="px-6 py-2 bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 rounded-lg text-sm font-bold hover:bg-slate-200 dark:hover:bg-slate-600 transition-all">重置</button>
      </div>
      </div>
      </div>
      
      <div className="flex border-b border-slate-200 dark:border-slate-700 gap-8">
      <button className="pb-4 text-primary border-b-2 border-primary font-bold text-sm px-2">分析总览</button>
      <button className="pb-4 text-slate-500 dark:text-slate-400 font-medium text-sm px-2 hover:text-slate-700 dark:hover:text-slate-200 transition-colors">深度矩阵分析</button>
      <button className="pb-4 text-slate-500 dark:text-slate-400 font-medium text-sm px-2 hover:text-slate-700 dark:hover:text-slate-200 transition-colors">任务管理</button>
      <button className="pb-4 text-slate-500 dark:text-slate-400 font-medium text-sm px-2 hover:text-slate-700 dark:hover:text-slate-200 transition-colors">专利案例库</button>
      </div>
      
      <div className="grid grid-cols-12 gap-6">
      
      <div className="col-span-12 md:col-span-4 bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700 flex items-center justify-between">
      <div>
      <p className="text-sm font-medium text-slate-500 dark:text-slate-400 mb-1">专利申请总量</p>
      <h3 className="text-3xl font-black text-slate-900 dark:text-slate-100">1,284,592</h3>
      <p className="text-xs text-green-500 mt-2 flex items-center gap-1">
      <span className="material-symbols-outlined text-xs">trending_up</span>
      <span>较上月增长 12.4%</span>
      </p>
      </div>
      <div className="p-4 bg-primary/10 rounded-full text-primary">
      <span className="material-symbols-outlined text-[32px]">analytics</span>
      </div>
      </div>
      <div className="col-span-12 md:col-span-4 bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700">
      <p className="text-sm font-medium text-slate-500 dark:text-slate-400 mb-3">热门关键词</p>
      <div className="flex flex-wrap gap-2">
      <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded font-bold">人工智能</span>
      <span className="px-2 py-1 bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 text-xs rounded">半导体</span>
      <span className="px-2 py-1 bg-primary/5 text-primary/80 text-lg rounded font-bold">量子计算</span>
      <span className="px-2 py-1 bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 text-xs rounded">区块链</span>
      <span className="px-2 py-1 bg-primary/20 text-primary text-sm rounded font-bold">5G 通信</span>
      <span className="px-2 py-1 bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 text-xs rounded">新能源</span>
      </div>
      </div>
      <div className="col-span-12 md:col-span-4 bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700 flex items-center justify-between">
      <div>
      <p className="text-sm font-medium text-slate-500 dark:text-slate-400 mb-1">机构参与总数</p>
      <h3 className="text-3xl font-black text-slate-900 dark:text-slate-100">42,810</h3>
      <p className="text-xs text-slate-400 mt-2">覆盖全球 85 个国家和地区</p>
      </div>
      <div className="p-4 bg-blue-500/10 rounded-full text-blue-500">
      <span className="material-symbols-outlined text-[32px]">corporate_fare</span>
      </div>
      </div>
      
      <div className="col-span-12 lg:col-span-8 bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700">
      <div className="flex items-center justify-between mb-6">
      <h4 className="font-bold text-slate-800 dark:text-slate-200">全球专利分布趋势</h4>
      <div className="flex bg-slate-100 dark:bg-slate-900 p-1 rounded-lg">
      <button className="px-3 py-1 bg-white dark:bg-slate-800 shadow-sm rounded-md text-xs font-bold">中国</button>
      <button className="px-3 py-1 text-xs font-medium text-slate-500">美国</button>
      <button className="px-3 py-1 text-xs font-medium text-slate-500">欧盟</button>
      <button className="px-3 py-1 text-xs font-medium text-slate-500">日本</button>
      </div>
      </div>
      <div className="h-64 flex items-end justify-between gap-4 px-2">
      
      <div className="flex-1 bg-primary/20 rounded-t-sm h-1/4 relative group">
      <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] opacity-0 group-hover:opacity-100 transition-opacity">2018</div>
      </div>
      <div className="flex-1 bg-primary/30 rounded-t-sm h-2/5 relative group">
      <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] opacity-0 group-hover:opacity-100 transition-opacity">2019</div>
      </div>
      <div className="flex-1 bg-primary/40 rounded-t-sm h-1/2 relative group">
      <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] opacity-0 group-hover:opacity-100 transition-opacity">2020</div>
      </div>
      <div className="flex-1 bg-primary/60 rounded-t-sm h-3/5 relative group">
      <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] opacity-0 group-hover:opacity-100 transition-opacity">2021</div>
      </div>
      <div className="flex-1 bg-primary/80 rounded-t-sm h-4/5 relative group">
      <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] opacity-0 group-hover:opacity-100 transition-opacity">2022</div>
      </div>
      <div className="flex-1 bg-primary rounded-t-sm h-full relative group">
      <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] opacity-0 group-hover:opacity-100 transition-opacity font-bold">2023</div>
      </div>
      </div>
      <div className="mt-4 pt-4 border-t border-slate-50 dark:border-slate-700 flex justify-between text-[10px] text-slate-400 uppercase tracking-widest font-bold">
      <span>2018</span>
      <span>2019</span>
      <span>2020</span>
      <span>2021</span>
      <span>2022</span>
      <span>2023</span>
      </div>
      </div>
      
      <div className="col-span-12 lg:col-span-4 bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700">
      <h4 className="font-bold text-slate-800 dark:text-slate-200 mb-6">热门关键词排行</h4>
      <div className="space-y-4">
      <div className="space-y-1">
      <div className="flex justify-between text-xs mb-1">
      <span className="font-bold text-slate-700 dark:text-slate-300">1. 生成式 AI</span>
      <span className="text-slate-400">84,293 件</span>
      </div>
      <div className="w-full bg-slate-100 dark:bg-slate-900 rounded-full h-1.5">
      <div className="bg-primary h-1.5 rounded-full w-[95%]"></div>
      </div>
      </div>
      <div className="space-y-1">
      <div className="flex justify-between text-xs mb-1">
      <span className="font-bold text-slate-700 dark:text-slate-300">2. 固态电池</span>
      <span className="text-slate-400">62,110 件</span>
      </div>
      <div className="w-full bg-slate-100 dark:bg-slate-900 rounded-full h-1.5">
      <div className="bg-primary h-1.5 rounded-full w-[78%]"></div>
      </div>
      </div>
      <div className="space-y-1">
      <div className="flex justify-between text-xs mb-1">
      <span className="font-bold text-slate-700 dark:text-slate-300">3. 自动驾驶算法</span>
      <span className="text-slate-400">54,821 件</span>
      </div>
      <div className="w-full bg-slate-100 dark:bg-slate-900 rounded-full h-1.5">
      <div className="bg-primary h-1.5 rounded-full w-[65%]"></div>
      </div>
      </div>
      <div className="space-y-1">
      <div className="flex justify-between text-xs mb-1">
      <span className="font-bold text-slate-700 dark:text-slate-300">4. 边缘计算</span>
      <span className="text-slate-400">48,930 件</span>
      </div>
      <div className="w-full bg-slate-100 dark:bg-slate-900 rounded-full h-1.5">
      <div className="bg-primary h-1.5 rounded-full w-[58%]"></div>
      </div>
      </div>
      <div className="space-y-1">
      <div className="flex justify-between text-xs mb-1">
      <span className="font-bold text-slate-700 dark:text-slate-300">5. 柔性显示</span>
      <span className="text-slate-400">32,100 件</span>
      </div>
      <div className="w-full bg-slate-100 dark:bg-slate-900 rounded-full h-1.5">
      <div className="bg-primary h-1.5 rounded-full w-[42%]"></div>
      </div>
      </div>
      </div>
      <button className="w-full mt-6 py-2 text-primary text-xs font-bold border border-primary/20 rounded-lg hover:bg-primary/5 transition-colors">查看完整榜单</button>
      </div>
      
      <div className="col-span-12 lg:col-span-6 bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700">
      <div className="flex items-center justify-between mb-4">
      <h4 className="font-bold text-slate-800 dark:text-slate-200">机构协作节点图</h4>
      <span className="material-symbols-outlined text-slate-400 cursor-pointer">fullscreen</span>
      </div>
      <div className="relative h-80 bg-slate-50 dark:bg-slate-900 rounded-lg overflow-hidden flex items-center justify-center">
      
      <div className="relative w-full h-full">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-primary/20 border-2 border-primary rounded-full flex items-center justify-center z-10">
      <span className="text-[10px] font-black text-center text-primary leading-tight">核心<br/>机构</span>
      </div>
      
      <div className="absolute top-1/2 left-1/2 w-[200px] h-px bg-primary/20 rotate-45 -translate-y-1/2 origin-left"></div>
      <div className="absolute top-1/2 left-1/2 w-[180px] h-px bg-primary/20 -rotate-[30deg] -translate-y-1/2 origin-left"></div>
      <div className="absolute top-1/2 left-1/2 w-[220px] h-px bg-primary/20 rotate-[160deg] -translate-y-1/2 origin-left"></div>
      <div className="absolute top-1/2 left-1/2 w-[150px] h-px bg-primary/20 -rotate-[120deg] -translate-y-1/2 origin-left"></div>
      
      <div className="absolute top-[20%] right-[25%] w-10 h-10 bg-slate-200 dark:bg-slate-700 rounded-full border border-slate-300"></div>
      <div className="absolute bottom-[15%] right-[15%] w-8 h-8 bg-slate-200 dark:bg-slate-700 rounded-full border border-slate-300"></div>
      <div className="absolute bottom-[25%] left-[10%] w-12 h-12 bg-slate-200 dark:bg-slate-700 rounded-full border border-slate-300"></div>
      <div className="absolute top-[30%] left-[20%] w-9 h-9 bg-slate-200 dark:bg-slate-700 rounded-full border border-slate-300"></div>
      </div>
      <div className="absolute bottom-4 left-4 flex flex-col gap-2">
      <div className="flex items-center gap-2">
      <div className="w-3 h-3 bg-primary rounded-full"></div>
      <span className="text-[10px] text-slate-500 font-medium">重点合作</span>
      </div>
      <div className="flex items-center gap-2">
      <div className="w-3 h-3 bg-slate-300 rounded-full"></div>
      <span className="text-[10px] text-slate-500 font-medium">普通关联</span>
      </div>
      </div>
      </div>
      </div>
      
      <div className="col-span-12 lg:col-span-6 bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700">
      <div className="flex items-center justify-between mb-4">
      <h4 className="font-bold text-slate-800 dark:text-slate-200">IPC分类部类分布</h4>
      <select className="bg-transparent border-none text-xs font-bold text-primary focus:ring-0">
      <option>一级分类</option>
      <option>二级分类</option>
      </select>
      </div>
      <div className="h-80 flex items-center justify-center relative">
      
      <div className="w-56 h-56 rounded-full border-[30px] border-primary/10 flex items-center justify-center relative">
      
      <div className="absolute inset-0 rounded-full border-[30px] border-primary border-r-transparent border-b-transparent border-l-transparent rotate-[30deg]"></div>
      <div className="absolute inset-0 rounded-full border-[30px] border-blue-400 border-r-transparent border-t-transparent border-l-transparent -rotate-[45deg]"></div>
      <div className="text-center">
      <p className="text-xs text-slate-400 font-medium">主要部类</p>
      <p className="text-2xl font-black text-slate-900 dark:text-slate-100 leading-none mt-1">G06F</p>
      </div>
      </div>
      <div className="absolute right-0 top-1/2 -translate-y-1/2 space-y-3">
      <div className="flex items-center gap-3">
      <div className="w-2 h-2 rounded-full bg-primary"></div>
      <div className="flex flex-col">
      <span className="text-[10px] text-slate-500">G部类: 物理</span>
      <span className="text-xs font-bold">42.5%</span>
      </div>
      </div>
      <div className="flex items-center gap-3">
      <div className="w-2 h-2 rounded-full bg-blue-400"></div>
      <div className="flex flex-col">
      <span className="text-[10px] text-slate-500">H部类: 电学</span>
      <span className="text-xs font-bold">28.1%</span>
      </div>
      </div>
      <div className="flex items-center gap-3">
      <div className="w-2 h-2 rounded-full bg-slate-200 dark:bg-slate-600"></div>
      <div className="flex flex-col">
      <span className="text-[10px] text-slate-500">其他部类</span>
      <span className="text-xs font-bold">29.4%</span>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div></div></div></div>
    </div>
  );
}
