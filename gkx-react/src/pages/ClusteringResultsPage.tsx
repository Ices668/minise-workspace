import { useNavigate } from "react-router-dom";

export default function ClusteringResultsPage() {
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
      <div className="flex h-screen w-full bg-slate-50 overflow-hidden"><aside id="sidebar" className="w-64 bg-white border-r border-slate-200 flex flex-col z-30 shrink-0" style={{ minWidth: "256px" }}><div className="p-5 flex items-center gap-3 border-b border-slate-100"><div className="w-8 h-8 bg-[#0d9488] rounded-lg flex items-center justify-center"><span className="material-symbols-outlined text-white" style={{ fontSize: "20px" }}>insights</span></div><span className="font-bold text-base text-slate-800">GKX</span><a href="/home" onClick={(event) => { event.preventDefault(); navigate("/home"); }} className="ml-auto text-slate-400 hover:text-slate-600" title="返回首页"><span className="material-symbols-outlined" style={{ fontSize: "18px" }}>home</span></a></div><div className="px-4 pt-4 pb-1"><span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">战略咨询体系</span></div><nav className="flex-1 px-2 py-2 overflow-y-auto space-y-0.5"><div className="nav-group"><button onClick={toggleGroup} className="w-full flex items-center gap-3 px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 rounded-lg transition-colors"><span className="material-symbols-outlined text-xl text-slate-400">search_check</span><span className="flex-1 text-left">研究需求分析</span><span className="material-symbols-outlined text-sm text-slate-400 expand-icon">expand_more</span></button><div className="group-children overflow-hidden" style={{ maxHeight: "0", transition: "max-height .25s ease" }}><a href="/strategy/entity-list.html" onClick={(event) => { event.preventDefault(); navigate("/strategy/entity-list.html"); }} className="flex items-center pl-12 pr-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#0d9488] rounded-lg nav-item" data-file="entity-list.html">科技实体清单</a><a href="/strategy/frontier-tech.html" onClick={(event) => { event.preventDefault(); navigate("/strategy/frontier-tech.html"); }} className="flex items-center pl-12 pr-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#0d9488] rounded-lg nav-item" data-file="frontier-tech.html">颠覆性与前沿技术分析</a><a href="/strategy/media-focus.html" onClick={(event) => { event.preventDefault(); navigate("/strategy/media-focus.html"); }} className="flex items-center pl-12 pr-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#0d9488] rounded-lg nav-item" data-file="media-focus.html">媒体聚焦</a></div></div><div className="nav-group"><button onClick={toggleGroup} className="w-full flex items-center gap-3 px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 rounded-lg transition-colors"><span className="material-symbols-outlined text-xl text-slate-400">hub</span><span className="flex-1 text-left">技术体系分析</span><span className="material-symbols-outlined text-sm text-slate-400 expand-icon">expand_more</span></button><div className="group-children overflow-hidden" style={{ maxHeight: "0", transition: "max-height .25s ease" }}><a href="/strategy/tech-system.html" onClick={(event) => { event.preventDefault(); navigate("/strategy/tech-system.html"); }} className="flex items-center pl-12 pr-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#0d9488] rounded-lg nav-item" data-file="tech-system.html">技术体系</a><a href="/strategy/paper-dashboard.html" onClick={(event) => { event.preventDefault(); navigate("/strategy/paper-dashboard.html"); }} className="flex items-center pl-12 pr-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#0d9488] rounded-lg nav-item" data-file="paper-dashboard.html">论文分析</a><a href="/strategy/patent.html" onClick={(event) => { event.preventDefault(); navigate("/strategy/patent.html"); }} className="flex items-center pl-12 pr-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#0d9488] rounded-lg nav-item" data-file="patent.html">专利分析</a><a href="/strategy/project-stats.html" onClick={(event) => { event.preventDefault(); navigate("/strategy/project-stats.html"); }} className="flex items-center pl-12 pr-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#0d9488] rounded-lg nav-item" data-file="project-stats.html">科研项目分析</a><a href="/strategy/social-network-import.html" onClick={(event) => { event.preventDefault(); navigate("/strategy/social-network-import.html"); }} className="flex items-center pl-12 pr-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#0d9488] rounded-lg nav-item" data-file="social-network-import.html">社会网络分析</a></div></div><div className="nav-group"><button onClick={toggleGroup} className="w-full flex items-center gap-3 px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 rounded-lg transition-colors"><span className="material-symbols-outlined text-xl text-slate-400">trending_up</span><span className="flex-1 text-left">技术趋势分析</span><span className="material-symbols-outlined text-sm text-slate-400 expand-icon">expand_more</span></button><div className="group-children overflow-hidden" style={{ maxHeight: "0", transition: "max-height .25s ease" }}><a href="/strategy/clustering-task.html" onClick={(event) => { event.preventDefault(); navigate("/strategy/clustering-task.html"); }} className="flex items-center pl-12 pr-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#0d9488] rounded-lg nav-item" data-file="clustering-task.html">聚类分析</a><a href="/strategy/common-network-task.html" onClick={(event) => { event.preventDefault(); navigate("/strategy/common-network-task.html"); }} className="flex items-center pl-12 pr-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#0d9488] rounded-lg nav-item" data-file="common-network-task.html">共性网络分析</a><a href="/strategy/tech-trend.html" onClick={(event) => { event.preventDefault(); navigate("/strategy/tech-trend.html"); }} className="flex items-center pl-12 pr-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#0d9488] rounded-lg nav-item" data-file="tech-trend.html">技术趋势分析</a><a href="/strategy/tech-alert.html" onClick={(event) => { event.preventDefault(); navigate("/strategy/tech-alert.html"); }} className="flex items-center pl-12 pr-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#0d9488] rounded-lg nav-item" data-file="tech-alert.html">技术动态预警</a></div></div><div className="nav-group"><button onClick={toggleGroup} className="w-full flex items-center gap-3 px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 rounded-lg transition-colors"><span className="material-symbols-outlined text-xl text-slate-400">route</span><span className="flex-1 text-left">领域技术线路</span><span className="material-symbols-outlined text-sm text-slate-400 expand-icon">expand_more</span></button><div className="group-children overflow-hidden" style={{ maxHeight: "0", transition: "max-height .25s ease" }}><a href="/strategy/delphi.html" onClick={(event) => { event.preventDefault(); navigate("/strategy/delphi.html"); }} className="flex items-center pl-12 pr-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#0d9488] rounded-lg nav-item" data-file="delphi.html">德尔菲问卷</a><a href="/strategy/tech-roadmap.html" onClick={(event) => { event.preventDefault(); navigate("/strategy/tech-roadmap.html"); }} className="flex items-center pl-12 pr-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#0d9488] rounded-lg nav-item" data-file="tech-roadmap.html">技术发展线路</a></div></div><div className="nav-group"><button onClick={toggleGroup} className="w-full flex items-center gap-3 px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 rounded-lg transition-colors"><span className="material-symbols-outlined text-xl text-slate-400">description</span><span className="flex-1 text-left">战略咨询报告</span><span className="material-symbols-outlined text-sm text-slate-400 expand-icon">expand_more</span></button><div className="group-children overflow-hidden" style={{ maxHeight: "0", transition: "max-height .25s ease" }}><a href="/strategy/report-generation.html" onClick={(event) => { event.preventDefault(); navigate("/strategy/report-generation.html"); }} className="flex items-center pl-12 pr-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#0d9488] rounded-lg nav-item" data-file="strategy-shell.html">研究报告管理</a><a href="/strategy/insight-publish.html" onClick={(event) => { event.preventDefault(); navigate("/strategy/insight-publish.html"); }} className="flex items-center pl-12 pr-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#0d9488] rounded-lg nav-item" data-file="insight-publish.html">洞察报告发布</a><a href="/strategy/hot-analysis.html" onClick={(event) => { event.preventDefault(); navigate("/strategy/hot-analysis.html"); }} className="flex items-center pl-12 pr-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#0d9488] rounded-lg nav-item" data-file="hot-analysis.html">热点分析</a><a href="/strategy/report-generation.html" onClick={(event) => { event.preventDefault(); navigate("/strategy/report-generation.html"); }} className="flex items-center pl-12 pr-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#0d9488] rounded-lg nav-item" data-file="report-generation.html">战略咨询报告生成</a></div></div><div className="nav-group"><button onClick={toggleGroup} className="w-full flex items-center gap-3 px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 rounded-lg transition-colors"><span className="material-symbols-outlined text-xl text-slate-400">folder_special</span><span className="flex-1 text-left">战略咨询成果</span><span className="material-symbols-outlined text-sm text-slate-400 expand-icon">expand_more</span></button><div className="group-children overflow-hidden" style={{ maxHeight: "0", transition: "max-height .25s ease" }}><a href="/strategy/strategy-cases.html" onClick={(event) => { event.preventDefault(); navigate("/strategy/strategy-cases.html"); }} className="flex items-center pl-12 pr-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#0d9488] rounded-lg nav-item" data-file="strategy-cases.html">战略咨询案例展示</a></div></div><div className="nav-group"><button onClick={toggleGroup} className="w-full flex items-center gap-3 px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 rounded-lg transition-colors"><span className="material-symbols-outlined text-xl text-slate-400">query_stats</span><span className="flex-1 text-left">智能问数</span><span className="material-symbols-outlined text-sm text-slate-400 expand-icon">expand_more</span></button><div className="group-children overflow-hidden" style={{ maxHeight: "0", transition: "max-height .25s ease" }}><a href="/strategy/analysis-start.html" onClick={(event) => { event.preventDefault(); navigate("/strategy/analysis-start.html"); }} className="flex items-center pl-12 pr-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#0d9488] rounded-lg nav-item" data-file="analysis-start.html">开始分析</a><a href="/strategy/case-share.html" onClick={(event) => { event.preventDefault(); navigate("/strategy/case-share.html"); }} className="flex items-center pl-12 pr-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#0d9488] rounded-lg nav-item" data-file="case-share.html">案例分享</a><a href="/strategy/multi-source-data.html" onClick={(event) => { event.preventDefault(); navigate("/strategy/multi-source-data.html"); }} className="flex items-center pl-12 pr-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#0d9488] rounded-lg nav-item" data-file="multi-source-data.html">多源数据接入</a><a href="/strategy/data-dashboard.html" onClick={(event) => { event.preventDefault(); navigate("/strategy/data-dashboard.html"); }} className="flex items-center pl-12 pr-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#0d9488] rounded-lg nav-item" data-file="data-dashboard.html">数据看板显示</a><a href="/strategy/report-gen-ai.html" onClick={(event) => { event.preventDefault(); navigate("/strategy/report-gen-ai.html"); }} className="flex items-center pl-12 pr-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#0d9488] rounded-lg nav-item" data-file="report-gen-ai.html">一键报告生成</a></div></div></nav><div className="p-4 border-t border-slate-100"><div className="bg-slate-50 rounded-xl p-3 flex items-center gap-3"><div className="w-9 h-9 bg-[#0d9488] rounded-lg flex items-center justify-center"><span className="material-symbols-outlined text-white" style={{ fontSize: "18px" }}>manage_accounts</span></div><div><p className="text-xs font-bold text-slate-800">系统管理员</p><p className="text-[10px] text-slate-500">ID: GKX-0822</p></div></div></div></aside><div className="flex-1 flex flex-col min-w-0 overflow-hidden"><header className="h-14 bg-white border-b border-slate-200 flex items-center justify-between px-6 shrink-0"><div className="flex items-center gap-4"><button onClick={toggleSidebar} className="p-1 text-slate-500 hover:bg-slate-100 rounded-lg"><span className="material-symbols-outlined">menu</span></button><h2 className="text-sm font-bold text-slate-800">战略咨询智能支持</h2></div><div className="flex-1 max-w-md mx-6"><div className="relative"><span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" style={{ fontSize: "18px" }}>search</span><input className="w-full pl-9 pr-4 py-1.5 bg-slate-100 rounded-full text-sm placeholder-slate-400 outline-none border-none" placeholder="搜索功能、报告..." type="text"/></div></div><div className="flex items-center gap-2"><button className="p-2 text-slate-500 hover:bg-slate-100 rounded-full relative"><span className="material-symbols-outlined" style={{ fontSize: "22px" }}>notifications</span><span className="absolute top-2 right-2 w-1.5 h-1.5 bg-red-500 rounded-full"></span></button></div></header><div className="flex-1 overflow-y-auto"><div className="max-w-[1280px] mx-auto px-6 py-8">
      
      <nav className="flex items-center space-x-2 text-sm font-medium text-primary/80 mb-6">
      <a className="hover:text-primary transition-colors" href="#">新型高端智库系统</a>
      <span className="material-symbols-outlined text-sm">chevron_right</span>
      <a className="hover:text-primary transition-colors" href="#">战略咨询智能支持</a>
      <span className="material-symbols-outlined text-sm">chevron_right</span>
      <a className="hover:text-primary transition-colors" href="#">技术趋势分析</a>
      <span className="material-symbols-outlined text-sm">chevron_right</span>
      <span className="text-slate-900 dark:text-slate-100">聚类分析</span>
      </nav>
      
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
      <h1 className="text-3xl font-black tracking-tight">聚类分析</h1>
      <div className="flex flex-wrap gap-3">
      <button className="flex items-center gap-2 px-4 py-2.5 bg-primary text-white font-bold rounded-lg hover:bg-primary/90 transition-all shadow-sm">
      <span className="material-symbols-outlined text-[20px]">add_circle</span>
      <span>新建聚类任务</span>
      </button>
      <button className="flex items-center gap-2 px-4 py-2.5 bg-primary/10 text-primary font-bold rounded-lg border border-primary/20 hover:bg-primary/20 transition-all">
      <span className="material-symbols-outlined text-[20px]">upload_file</span>
      <span>数据导入</span>
      </button>
      <button className="flex items-center gap-2 px-4 py-2.5 bg-primary/10 text-primary font-bold rounded-lg border border-primary/20 hover:bg-primary/20 transition-all">
      <span className="material-symbols-outlined text-[20px]">download</span>
      <span>导出报告</span>
      </button>
      </div>
      </div>
      
      <div className="border-b border-primary/10 mb-8">
      <div className="flex gap-8 overflow-x-auto no-scrollbar">
      <a className="pb-4 text-sm font-bold text-slate-500 hover:text-primary transition-colors border-b-2 border-transparent" href="#">
                          聚类任务管理
                      </a>
      <a className="pb-4 text-sm font-bold text-primary border-b-2 border-primary" href="#">
                          聚类结果视图
                      </a>
      <a className="pb-4 text-sm font-bold text-slate-500 hover:text-primary transition-colors border-b-2 border-transparent" href="#">
                          筛选机制配置
                      </a>
      <a className="pb-4 text-sm font-bold text-slate-500 hover:text-primary transition-colors border-b-2 border-transparent" href="#">
                          清单定制
                      </a>
      </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
      <div className="bg-white dark:bg-slate-800 p-6 rounded-lg border border-primary/10 shadow-sm flex flex-col gap-1">
      <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">分析样本总数</p>
      <div className="flex items-end justify-between">
      <p className="text-3xl font-black text-slate-900 dark:text-white">12,840</p>
      <span className="text-xs font-bold px-2 py-1 bg-green-100 text-green-700 rounded-full">+12%</span>
      </div>
      </div>
      <div className="bg-white dark:bg-slate-800 p-6 rounded-lg border border-primary/10 shadow-sm flex flex-col gap-1">
      <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">聚类簇数</p>
      <p className="text-3xl font-black text-slate-900 dark:text-white">12</p>
      </div>
      <div className="bg-white dark:bg-slate-800 p-6 rounded-lg border border-primary/10 shadow-sm flex flex-col gap-1">
      <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">平均置信度</p>
      <div className="flex items-center gap-2">
      <p className="text-3xl font-black text-slate-900 dark:text-white">94.2%</p>
      <div className="w-16 h-1.5 bg-slate-100 rounded-full overflow-hidden">
      <div className="bg-primary h-full" style={{ width: "94.2%" }}></div>
      </div>
      </div>
      </div>
      <div className="bg-white dark:bg-slate-800 p-6 rounded-lg border border-primary/10 shadow-sm flex flex-col gap-1">
      <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">覆盖关键词数</p>
      <p className="text-3xl font-black text-slate-900 dark:text-white">356</p>
      </div>
      </div>
      
      <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
      <span className="material-symbols-outlined text-primary">bubble_chart</span>
                  聚类核心发现
              </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
      
      <div className="bg-white dark:bg-slate-800 rounded-lg border border-primary/10 shadow-sm p-5 hover:border-primary/40 transition-all group">
      <div className="flex justify-between items-start mb-4">
      <div>
      <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1">聚类 #01</h3>
      <p className="text-sm text-slate-500">生成式人工智能应用</p>
      </div>
      <div className="relative flex items-center justify-center w-12 h-12">
      <svg className="w-full h-full transform -rotate-90">
      <circle className="text-slate-100 dark:text-slate-700" cx="24" cy="24" fill="transparent" r="20" stroke="currentColor" strokeWidth="4"></circle>
      <circle className="text-primary" cx="24" cy="24" fill="transparent" r="20" stroke="currentColor" strokeDasharray="125.6" strokeDashoffset="12.5" strokeWidth="4"></circle>
      </svg>
      <span className="absolute text-[10px] font-bold">90%</span>
      </div>
      </div>
      <div className="flex gap-4 mb-4 text-sm">
      <div className="flex flex-col">
      <span className="text-slate-400">文档数</span>
      <span className="font-bold">2,410</span>
      </div>
      <div className="flex flex-col">
      <span className="text-slate-400">权重</span>
      <span className="font-bold">18.4%</span>
      </div>
      </div>
      <div className="flex flex-wrap gap-2">
      <span className="px-2 py-1 bg-primary/5 text-primary text-xs rounded-full border border-primary/10">大语言模型</span>
      <span className="px-2 py-1 bg-primary/5 text-primary text-xs rounded-full border border-primary/10">多模态生成</span>
      <span className="px-2 py-1 bg-primary/5 text-primary text-xs rounded-full border border-primary/10">扩散模型</span>
      <span className="px-2 py-1 bg-primary/5 text-primary text-xs rounded-full border border-primary/10">智算中心</span>
      </div>
      </div>
      
      <div className="bg-white dark:bg-slate-800 rounded-lg border border-primary/10 shadow-sm p-5 hover:border-primary/40 transition-all">
      <div className="flex justify-between items-start mb-4">
      <div>
      <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1">聚类 #02</h3>
      <p className="text-sm text-slate-500">量子计算硬件突破</p>
      </div>
      <div className="relative flex items-center justify-center w-12 h-12">
      <svg className="w-full h-full transform -rotate-90">
      <circle className="text-slate-100 dark:text-slate-700" cx="24" cy="24" fill="transparent" r="20" stroke="currentColor" strokeWidth="4"></circle>
      <circle className="text-primary" cx="24" cy="24" fill="transparent" r="20" stroke="currentColor" strokeDasharray="125.6" strokeDashoffset="25.1" strokeWidth="4"></circle>
      </svg>
      <span className="absolute text-[10px] font-bold">80%</span>
      </div>
      </div>
      <div className="flex gap-4 mb-4 text-sm">
      <div className="flex flex-col">
      <span className="text-slate-400">文档数</span>
      <span className="font-bold">1,820</span>
      </div>
      <div className="flex flex-col">
      <span className="text-slate-400">权重</span>
      <span className="font-bold">14.2%</span>
      </div>
      </div>
      <div className="flex flex-wrap gap-2">
      <span className="px-2 py-1 bg-primary/5 text-primary text-xs rounded-full border border-primary/10">超导量子</span>
      <span className="px-2 py-1 bg-primary/5 text-primary text-xs rounded-full border border-primary/10">纠错技术</span>
      <span className="px-2 py-1 bg-primary/5 text-primary text-xs rounded-full border border-primary/10">低温制冷</span>
      <span className="px-2 py-1 bg-primary/5 text-primary text-xs rounded-full border border-primary/10">量子霸权</span>
      </div>
      </div>
      
      <div className="bg-white dark:bg-slate-800 rounded-lg border border-primary/10 shadow-sm p-5 hover:border-primary/40 transition-all">
      <div className="flex justify-between items-start mb-4">
      <div>
      <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1">聚类 #03</h3>
      <p className="text-sm text-slate-500">半导体先进封测</p>
      </div>
      <div className="relative flex items-center justify-center w-12 h-12">
      <svg className="w-full h-full transform -rotate-90">
      <circle className="text-slate-100 dark:text-slate-700" cx="24" cy="24" fill="transparent" r="20" stroke="currentColor" strokeWidth="4"></circle>
      <circle className="text-primary" cx="24" cy="24" fill="transparent" r="20" stroke="currentColor" strokeDasharray="125.6" strokeDashoffset="15.7" strokeWidth="4"></circle>
      </svg>
      <span className="absolute text-[10px] font-bold">88%</span>
      </div>
      </div>
      <div className="flex gap-4 mb-4 text-sm">
      <div className="flex flex-col">
      <span className="text-slate-400">文档数</span>
      <span className="font-bold">3,105</span>
      </div>
      <div className="flex flex-col">
      <span className="text-slate-400">权重</span>
      <span className="font-bold">22.1%</span>
      </div>
      </div>
      <div className="flex flex-wrap gap-2">
      <span className="px-2 py-1 bg-primary/5 text-primary text-xs rounded-full border border-primary/10">Chiplet</span>
      <span className="px-2 py-1 bg-primary/5 text-primary text-xs rounded-full border border-primary/10">3D封装</span>
      <span className="px-2 py-1 bg-primary/5 text-primary text-xs rounded-full border border-primary/10">光电集成</span>
      <span className="px-2 py-1 bg-primary/5 text-primary text-xs rounded-full border border-primary/10">异构集成</span>
      </div>
      </div>
      </div>
      
      <div className="bg-white dark:bg-slate-800 rounded-lg border border-primary/10 shadow-sm overflow-hidden">
      <div className="px-6 py-4 border-b border-primary/10 flex justify-between items-center">
      <h2 className="text-lg font-bold">聚类清单详情</h2>
      <div className="flex gap-2">
      <div className="relative">
      <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
      <span className="material-symbols-outlined text-sm">search</span>
      </span>
      <input className="pl-10 pr-4 py-1.5 text-sm bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary" placeholder="搜索关键词..." type="text"/>
      </div>
      </div>
      </div>
      <div className="overflow-x-auto">
      <table className="w-full text-left border-collapse">
      <thead>
      <tr className="bg-slate-50 dark:bg-slate-700/50 text-slate-600 dark:text-slate-300 text-xs font-bold uppercase tracking-wider">
      <th className="px-6 py-4 w-12"><input className="rounded text-primary focus:ring-primary border-slate-300" type="checkbox"/></th>
      <th className="px-6 py-4">聚类名称</th>
      <th className="px-6 py-4">关键词集</th>
      <th className="px-6 py-4">相关度 (Heat)</th>
      <th className="px-6 py-4">出现频次</th>
      <th className="px-6 py-4 text-right">操作</th>
      </tr>
      </thead>
      <tbody className="divide-y divide-primary/5">
      <tr className="hover:bg-slate-50/80 dark:hover:bg-slate-700/30 transition-colors">
      <td className="px-6 py-4"><input className="rounded text-primary focus:ring-primary border-slate-300" type="checkbox"/></td>
      <td className="px-6 py-4">
      <span className="font-bold text-slate-900 dark:text-white">边缘AI加速器</span>
      </td>
      <td className="px-6 py-4">
      <span className="text-sm text-slate-600 dark:text-slate-400">端侧算力, NPU, 低功耗, 推理优化</span>
      </td>
      <td className="px-6 py-4">
      <div className="w-32 h-2 bg-slate-100 dark:bg-slate-700 rounded-full overflow-hidden">
      <div className="bg-gradient-to-r from-blue-400 to-primary h-full" style={{ width: "85%" }}></div>
      </div>
      </td>
      <td className="px-6 py-4 text-sm font-medium">1,245</td>
      <td className="px-6 py-4 text-right">
      <div className="flex justify-end gap-3">
      <button className="text-primary hover:underline text-sm font-bold">加入清单</button>
      <button className="text-slate-500 hover:text-primary transition-colors">
      <span className="material-symbols-outlined text-sm">visibility</span>
      </button>
      </div>
      </td>
      </tr>
      <tr className="hover:bg-slate-50/80 dark:hover:bg-slate-700/30 transition-colors">
      <td className="px-6 py-4"><input className="rounded text-primary focus:ring-primary border-slate-300" type="checkbox"/></td>
      <td className="px-6 py-4">
      <span className="font-bold text-slate-900 dark:text-white">自动驾驶视觉系统</span>
      </td>
      <td className="px-6 py-4">
      <span className="text-sm text-slate-600 dark:text-slate-400">激光雷达, SLAM, 图像识别, 毫米波</span>
      </td>
      <td className="px-6 py-4">
      <div className="w-32 h-2 bg-slate-100 dark:bg-slate-700 rounded-full overflow-hidden">
      <div className="bg-gradient-to-r from-blue-400 to-primary h-full" style={{ width: "72%" }}></div>
      </div>
      </td>
      <td className="px-6 py-4 text-sm font-medium">958</td>
      <td className="px-6 py-4 text-right">
      <div className="flex justify-end gap-3">
      <button className="text-primary hover:underline text-sm font-bold">加入清单</button>
      <button className="text-slate-500 hover:text-primary transition-colors">
      <span className="material-symbols-outlined text-sm">visibility</span>
      </button>
      </div>
      </td>
      </tr>
      <tr className="hover:bg-slate-50/80 dark:hover:bg-slate-700/30 transition-colors">
      <td className="px-6 py-4"><input className="rounded text-primary focus:ring-primary border-slate-300" type="checkbox"/></td>
      <td className="px-6 py-4">
      <span className="font-bold text-slate-900 dark:text-white">智慧能源网格</span>
      </td>
      <td className="px-6 py-4">
      <span className="text-sm text-slate-600 dark:text-slate-400">特高压, 储能平衡, 虚拟电厂</span>
      </td>
      <td className="px-6 py-4">
      <div className="w-32 h-2 bg-slate-100 dark:bg-slate-700 rounded-full overflow-hidden">
      <div className="bg-gradient-to-r from-blue-400 to-primary h-full" style={{ width: "45%" }}></div>
      </div>
      </td>
      <td className="px-6 py-4 text-sm font-medium">622</td>
      <td className="px-6 py-4 text-right">
      <div className="flex justify-end gap-3">
      <button className="text-primary hover:underline text-sm font-bold">加入清单</button>
      <button className="text-slate-500 hover:text-primary transition-colors">
      <span className="material-symbols-outlined text-sm">visibility</span>
      </button>
      </div>
      </td>
      </tr>
      </tbody>
      </table>
      </div>
      <div className="px-6 py-4 bg-slate-50 dark:bg-slate-700/20 border-t border-primary/10 flex items-center justify-between">
      <p className="text-sm text-slate-500">显示 1 到 3 条，共 12 个聚类项</p>
      <div className="flex gap-1">
      <button className="w-8 h-8 flex items-center justify-center rounded border border-slate-200 bg-white hover:bg-slate-100"><span className="material-symbols-outlined text-sm">chevron_left</span></button>
      <button className="w-8 h-8 flex items-center justify-center rounded border border-primary bg-primary text-white text-xs font-bold">1</button>
      <button className="w-8 h-8 flex items-center justify-center rounded border border-slate-200 bg-white hover:bg-slate-100 text-xs font-bold">2</button>
      <button className="w-8 h-8 flex items-center justify-center rounded border border-slate-200 bg-white hover:bg-slate-100 text-xs font-bold">3</button>
      <button className="w-8 h-8 flex items-center justify-center rounded border border-slate-200 bg-white hover:bg-slate-100"><span className="material-symbols-outlined text-sm">chevron_right</span></button>
      </div>
      </div>
      </div>
      </div></div></div></div>
    </div>
  );
}
