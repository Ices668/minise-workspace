import { useNavigate } from "react-router-dom";

export default function ClusteringTaskPage() {
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
      <div className="flex h-screen w-full bg-slate-50 overflow-hidden"><aside id="sidebar" className="w-64 bg-white border-r border-slate-200 flex flex-col z-30 shrink-0" style={{ minWidth: "256px" }}><div className="p-5 flex items-center gap-3 border-b border-slate-100"><div className="w-8 h-8 bg-[#0d9488] rounded-lg flex items-center justify-center"><span className="material-symbols-outlined text-white" style={{ fontSize: "20px" }}>insights</span></div><span className="font-bold text-base text-slate-800">GKX</span><a href="/home" onClick={(event) => { event.preventDefault(); navigate("/home"); }} className="ml-auto text-slate-400 hover:text-slate-600" title="返回首页"><span className="material-symbols-outlined" style={{ fontSize: "18px" }}>home</span></a></div><div className="px-4 pt-4 pb-1"><span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">战略咨询体系</span></div><nav className="flex-1 px-2 py-2 overflow-y-auto space-y-0.5"><div className="nav-group"><button onClick={toggleGroup} className="w-full flex items-center gap-3 px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 rounded-lg transition-colors"><span className="material-symbols-outlined text-xl text-slate-400">search_check</span><span className="flex-1 text-left">研究需求分析</span><span className="material-symbols-outlined text-sm text-slate-400 expand-icon">expand_more</span></button><div className="group-children overflow-hidden" style={{ maxHeight: "0", transition: "max-height .25s ease" }}><a href="/strategy/entity-list.html" onClick={(event) => { event.preventDefault(); navigate("/strategy/entity-list.html"); }} className="flex items-center pl-12 pr-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#0d9488] rounded-lg nav-item" data-file="entity-list.html">科技实体清单</a><a href="/strategy/frontier-tech.html" onClick={(event) => { event.preventDefault(); navigate("/strategy/frontier-tech.html"); }} className="flex items-center pl-12 pr-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#0d9488] rounded-lg nav-item" data-file="frontier-tech.html">颠覆性与前沿技术分析</a><a href="/strategy/media-focus.html" onClick={(event) => { event.preventDefault(); navigate("/strategy/media-focus.html"); }} className="flex items-center pl-12 pr-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#0d9488] rounded-lg nav-item" data-file="media-focus.html">媒体聚焦</a></div></div><div className="nav-group"><button onClick={toggleGroup} className="w-full flex items-center gap-3 px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 rounded-lg transition-colors"><span className="material-symbols-outlined text-xl text-slate-400">hub</span><span className="flex-1 text-left">技术体系分析</span><span className="material-symbols-outlined text-sm text-slate-400 expand-icon">expand_more</span></button><div className="group-children overflow-hidden" style={{ maxHeight: "0", transition: "max-height .25s ease" }}><a href="/strategy/tech-system.html" onClick={(event) => { event.preventDefault(); navigate("/strategy/tech-system.html"); }} className="flex items-center pl-12 pr-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#0d9488] rounded-lg nav-item" data-file="tech-system.html">技术体系</a><a href="/strategy/paper-dashboard.html" onClick={(event) => { event.preventDefault(); navigate("/strategy/paper-dashboard.html"); }} className="flex items-center pl-12 pr-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#0d9488] rounded-lg nav-item" data-file="paper-dashboard.html">论文分析</a><a href="/strategy/patent.html" onClick={(event) => { event.preventDefault(); navigate("/strategy/patent.html"); }} className="flex items-center pl-12 pr-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#0d9488] rounded-lg nav-item" data-file="patent.html">专利分析</a><a href="/strategy/project-stats.html" onClick={(event) => { event.preventDefault(); navigate("/strategy/project-stats.html"); }} className="flex items-center pl-12 pr-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#0d9488] rounded-lg nav-item" data-file="project-stats.html">科研项目分析</a><a href="/strategy/social-network-import.html" onClick={(event) => { event.preventDefault(); navigate("/strategy/social-network-import.html"); }} className="flex items-center pl-12 pr-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#0d9488] rounded-lg nav-item" data-file="social-network-import.html">社会网络分析</a></div></div><div className="nav-group"><button onClick={toggleGroup} className="w-full flex items-center gap-3 px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 rounded-lg transition-colors"><span className="material-symbols-outlined text-xl text-slate-400">trending_up</span><span className="flex-1 text-left">技术趋势分析</span><span className="material-symbols-outlined text-sm text-slate-400 expand-icon">expand_more</span></button><div className="group-children overflow-hidden" style={{ maxHeight: "0", transition: "max-height .25s ease" }}><a href="/strategy/clustering-task.html" onClick={(event) => { event.preventDefault(); navigate("/strategy/clustering-task.html"); }} className="flex items-center pl-12 pr-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#0d9488] rounded-lg nav-item" data-file="clustering-task.html">聚类分析</a><a href="/strategy/common-network-task.html" onClick={(event) => { event.preventDefault(); navigate("/strategy/common-network-task.html"); }} className="flex items-center pl-12 pr-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#0d9488] rounded-lg nav-item" data-file="common-network-task.html">共性网络分析</a><a href="/strategy/tech-trend.html" onClick={(event) => { event.preventDefault(); navigate("/strategy/tech-trend.html"); }} className="flex items-center pl-12 pr-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#0d9488] rounded-lg nav-item" data-file="tech-trend.html">技术趋势分析</a><a href="/strategy/tech-alert.html" onClick={(event) => { event.preventDefault(); navigate("/strategy/tech-alert.html"); }} className="flex items-center pl-12 pr-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#0d9488] rounded-lg nav-item" data-file="tech-alert.html">技术动态预警</a></div></div><div className="nav-group"><button onClick={toggleGroup} className="w-full flex items-center gap-3 px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 rounded-lg transition-colors"><span className="material-symbols-outlined text-xl text-slate-400">route</span><span className="flex-1 text-left">领域技术线路</span><span className="material-symbols-outlined text-sm text-slate-400 expand-icon">expand_more</span></button><div className="group-children overflow-hidden" style={{ maxHeight: "0", transition: "max-height .25s ease" }}><a href="/strategy/delphi.html" onClick={(event) => { event.preventDefault(); navigate("/strategy/delphi.html"); }} className="flex items-center pl-12 pr-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#0d9488] rounded-lg nav-item" data-file="delphi.html">德尔菲问卷</a><a href="/strategy/tech-roadmap.html" onClick={(event) => { event.preventDefault(); navigate("/strategy/tech-roadmap.html"); }} className="flex items-center pl-12 pr-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#0d9488] rounded-lg nav-item" data-file="tech-roadmap.html">技术发展线路</a></div></div><div className="nav-group"><button onClick={toggleGroup} className="w-full flex items-center gap-3 px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 rounded-lg transition-colors"><span className="material-symbols-outlined text-xl text-slate-400">description</span><span className="flex-1 text-left">战略咨询报告</span><span className="material-symbols-outlined text-sm text-slate-400 expand-icon">expand_more</span></button><div className="group-children overflow-hidden" style={{ maxHeight: "0", transition: "max-height .25s ease" }}><a href="/strategy/report-generation.html" onClick={(event) => { event.preventDefault(); navigate("/strategy/report-generation.html"); }} className="flex items-center pl-12 pr-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#0d9488] rounded-lg nav-item" data-file="strategy-shell.html">研究报告管理</a><a href="/strategy/insight-publish.html" onClick={(event) => { event.preventDefault(); navigate("/strategy/insight-publish.html"); }} className="flex items-center pl-12 pr-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#0d9488] rounded-lg nav-item" data-file="insight-publish.html">洞察报告发布</a><a href="/strategy/hot-analysis.html" onClick={(event) => { event.preventDefault(); navigate("/strategy/hot-analysis.html"); }} className="flex items-center pl-12 pr-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#0d9488] rounded-lg nav-item" data-file="hot-analysis.html">热点分析</a><a href="/strategy/report-generation.html" onClick={(event) => { event.preventDefault(); navigate("/strategy/report-generation.html"); }} className="flex items-center pl-12 pr-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#0d9488] rounded-lg nav-item" data-file="report-generation.html">战略咨询报告生成</a></div></div><div className="nav-group"><button onClick={toggleGroup} className="w-full flex items-center gap-3 px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 rounded-lg transition-colors"><span className="material-symbols-outlined text-xl text-slate-400">folder_special</span><span className="flex-1 text-left">战略咨询成果</span><span className="material-symbols-outlined text-sm text-slate-400 expand-icon">expand_more</span></button><div className="group-children overflow-hidden" style={{ maxHeight: "0", transition: "max-height .25s ease" }}><a href="/strategy/strategy-cases.html" onClick={(event) => { event.preventDefault(); navigate("/strategy/strategy-cases.html"); }} className="flex items-center pl-12 pr-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#0d9488] rounded-lg nav-item" data-file="strategy-cases.html">战略咨询案例展示</a></div></div><div className="nav-group"><button onClick={toggleGroup} className="w-full flex items-center gap-3 px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 rounded-lg transition-colors"><span className="material-symbols-outlined text-xl text-slate-400">query_stats</span><span className="flex-1 text-left">智能问数</span><span className="material-symbols-outlined text-sm text-slate-400 expand-icon">expand_more</span></button><div className="group-children overflow-hidden" style={{ maxHeight: "0", transition: "max-height .25s ease" }}><a href="/strategy/analysis-start.html" onClick={(event) => { event.preventDefault(); navigate("/strategy/analysis-start.html"); }} className="flex items-center pl-12 pr-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#0d9488] rounded-lg nav-item" data-file="analysis-start.html">开始分析</a><a href="/strategy/case-share.html" onClick={(event) => { event.preventDefault(); navigate("/strategy/case-share.html"); }} className="flex items-center pl-12 pr-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#0d9488] rounded-lg nav-item" data-file="case-share.html">案例分享</a><a href="/strategy/multi-source-data.html" onClick={(event) => { event.preventDefault(); navigate("/strategy/multi-source-data.html"); }} className="flex items-center pl-12 pr-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#0d9488] rounded-lg nav-item" data-file="multi-source-data.html">多源数据接入</a><a href="/strategy/data-dashboard.html" onClick={(event) => { event.preventDefault(); navigate("/strategy/data-dashboard.html"); }} className="flex items-center pl-12 pr-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#0d9488] rounded-lg nav-item" data-file="data-dashboard.html">数据看板显示</a><a href="/strategy/report-gen-ai.html" onClick={(event) => { event.preventDefault(); navigate("/strategy/report-gen-ai.html"); }} className="flex items-center pl-12 pr-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#0d9488] rounded-lg nav-item" data-file="report-gen-ai.html">一键报告生成</a></div></div></nav><div className="p-4 border-t border-slate-100"><div className="bg-slate-50 rounded-xl p-3 flex items-center gap-3"><div className="w-9 h-9 bg-[#0d9488] rounded-lg flex items-center justify-center"><span className="material-symbols-outlined text-white" style={{ fontSize: "18px" }}>manage_accounts</span></div><div><p className="text-xs font-bold text-slate-800">系统管理员</p><p className="text-[10px] text-slate-500">ID: GKX-0822</p></div></div></div></aside><div className="flex-1 flex flex-col min-w-0 overflow-hidden"><header className="h-14 bg-white border-b border-slate-200 flex items-center justify-between px-6 shrink-0"><div className="flex items-center gap-4"><button onClick={toggleSidebar} className="p-1 text-slate-500 hover:bg-slate-100 rounded-lg"><span className="material-symbols-outlined">menu</span></button><h2 className="text-sm font-bold text-slate-800">战略咨询智能支持</h2></div><div className="flex-1 max-w-md mx-6"><div className="relative"><span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" style={{ fontSize: "18px" }}>search</span><input className="w-full pl-9 pr-4 py-1.5 bg-slate-100 rounded-full text-sm placeholder-slate-400 outline-none border-none" placeholder="搜索功能、报告..." type="text"/></div></div><div className="flex items-center gap-2"><button className="p-2 text-slate-500 hover:bg-slate-100 rounded-full relative"><span className="material-symbols-outlined" style={{ fontSize: "22px" }}>notifications</span><span className="absolute top-2 right-2 w-1.5 h-1.5 bg-red-500 rounded-full"></span></button></div></header><div className="flex-1 overflow-y-auto"><div className="max-w-[1200px] mx-auto p-6 lg:p-10 space-y-10">
      
      <div className="bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 p-8">
      <div className="flex flex-wrap justify-between gap-3 mb-8">
      <div className="flex flex-col gap-2">
      <h1 className="text-slate-900 dark:text-slate-100 text-4xl font-black leading-tight tracking-tight">聚类分析</h1>
      <p className="text-slate-500 dark:text-slate-400 text-base font-normal">管理您的筛选机制与聚类任务</p>
      </div>
      <div className="flex items-center gap-3">
      <button className="bg-primary hover:bg-primary/90 text-white px-5 py-2.5 rounded-lg font-semibold flex items-center gap-2 transition-colors">
      <span className="material-symbols-outlined text-[20px]">add</span>
                              新建聚类任务
                          </button>
      </div>
      </div>
      <div className="space-y-6">
      <h2 className="text-slate-900 dark:text-slate-100 text-xl font-bold border-l-4 border-primary pl-4">筛选机制配置</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 relative py-6">
      
      <div className="hidden md:block absolute top-1/2 left-[30%] right-[30%] h-0.5 bg-slate-200 dark:bg-slate-800 -translate-y-1/2 z-0"></div>
      
      <div className="relative z-10 bg-background-light dark:bg-slate-800 p-5 rounded-xl border border-slate-200 dark:border-slate-700 flex flex-col items-center text-center group">
      <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-3">
      <span className="material-symbols-outlined">filter_alt</span>
      </div>
      <h3 className="font-bold text-slate-900 dark:text-slate-100">初级筛选</h3>
      <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">基础规则与数据清洗过滤</p>
      </div>
      
      <div className="relative z-10 bg-background-light dark:bg-slate-800 p-5 rounded-xl border border-primary/30 dark:border-primary/30 flex flex-col items-center text-center ring-2 ring-primary/20">
      <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center mb-3 shadow-lg shadow-primary/20">
      <span className="material-symbols-outlined">analytics</span>
      </div>
      <h3 className="font-bold text-slate-900 dark:text-slate-100">权重计算</h3>
      <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">多维度特征权重自定义分配</p>
      </div>
      
      <div className="relative z-10 bg-background-light dark:bg-slate-800 p-5 rounded-xl border border-slate-200 dark:border-slate-700 flex flex-col items-center text-center">
      <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-3">
      <span className="material-symbols-outlined">task_alt</span>
      </div>
      <h3 className="font-bold text-slate-900 dark:text-slate-100">最终过滤</h3>
      <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">置信度阈值最终筛选</p>
      </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pt-4">
      <div className="space-y-6">
      <div className="flex flex-col gap-4">
      <div className="flex justify-between items-center">
      <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">特征权重分值 (Feature Weight)</label>
      <span className="text-primary font-bold">85%</span>
      </div>
      <div className="relative w-full h-2 bg-slate-200 dark:bg-slate-800 rounded-full">
      <div className="absolute top-0 left-0 h-full bg-primary rounded-full w-[85%]"></div>
      <div className="absolute top-1/2 left-[85%] -translate-x-1/2 -translate-y-1/2 w-5 h-5 bg-white border-2 border-primary rounded-full shadow cursor-pointer"></div>
      </div>
      <div className="flex justify-between text-xs text-slate-400">
      <span>0</span>
      <span>50</span>
      <span>100</span>
      </div>
      </div>
      </div>
      <div className="space-y-6">
      <div className="flex flex-col gap-4">
      <div className="flex justify-between items-center">
      <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">过滤阈值设定 (Threshold)</label>
      <span className="text-primary font-bold">65%</span>
      </div>
      <div className="relative w-full h-2 bg-slate-200 dark:bg-slate-800 rounded-full">
      <div className="absolute top-0 left-0 h-full bg-primary/60 rounded-full w-[65%]"></div>
      <div className="absolute top-1/2 left-[65%] -translate-x-1/2 -translate-y-1/2 w-5 h-5 bg-white border-2 border-primary/60 rounded-full shadow cursor-pointer"></div>
      </div>
      <div className="flex justify-between text-xs text-slate-400">
      <span>严格</span>
      <span>标准</span>
      <span>宽松</span>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      
      <div className="space-y-6">
      <div className="flex items-center justify-between">
      <h2 className="text-slate-900 dark:text-slate-100 text-xl font-bold border-l-4 border-primary pl-4">任务管理</h2>
      <div className="flex gap-2">
      <button className="p-2 text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors">
      <span className="material-symbols-outlined">search</span>
      </button>
      <button className="p-2 text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors">
      <span className="material-symbols-outlined">filter_list</span>
      </button>
      </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
      
      <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      <div className="p-6">
      <div className="flex justify-between items-start mb-4">
      <div className="space-y-1">
      <h3 className="font-bold text-slate-900 dark:text-slate-100">Q3 市场行为分析</h3>
      <p className="text-xs text-slate-500">ID: TASK-2023081501</p>
      </div>
      <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400 flex items-center gap-1">
      <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse"></span>
                                      分析中
                                  </span>
      </div>
      <div className="space-y-4 mb-6">
      <div className="flex justify-between text-sm">
      <span className="text-slate-500">创建时间</span>
      <span className="text-slate-700 dark:text-slate-300">2023-10-24 14:20</span>
      </div>
      <div className="flex justify-between text-sm">
      <span className="text-slate-500">数据源</span>
      <span className="text-slate-700 dark:text-slate-300">MySQL_Cluster_01</span>
      </div>
      <div className="space-y-1.5">
      <div className="flex justify-between text-xs">
      <span className="text-slate-500">进度</span>
      <span className="text-primary font-semibold">72%</span>
      </div>
      <div className="w-full h-1.5 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
      <div className="h-full bg-primary rounded-full" style={{ width: "72%" }}></div>
      </div>
      </div>
      </div>
      <div className="grid grid-cols-2 gap-2">
      <button className="flex items-center justify-center gap-1.5 py-2 px-3 text-sm font-medium text-slate-700 dark:text-slate-300 bg-slate-50 dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-lg transition-colors">
      <span className="material-symbols-outlined text-[18px]">visibility</span> 查看
                                  </button>
      <button className="flex items-center justify-center gap-1.5 py-2 px-3 text-sm font-medium text-red-600 bg-red-50 dark:bg-red-900/20 hover:bg-red-100 dark:hover:bg-red-900/30 rounded-lg transition-colors">
      <span className="material-symbols-outlined text-[18px]">stop_circle</span> 停止
                                  </button>
      </div>
      </div>
      </div>
      
      <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      <div className="p-6">
      <div className="flex justify-between items-start mb-4">
      <div className="space-y-1">
      <h3 className="font-bold text-slate-900 dark:text-slate-100">电商用户画像聚类</h3>
      <p className="text-xs text-slate-500">ID: TASK-2023081502</p>
      </div>
      <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400">
                                      已完成
                                  </span>
      </div>
      <div className="space-y-4 mb-6">
      <div className="flex justify-between text-sm">
      <span className="text-slate-500">创建时间</span>
      <span className="text-slate-700 dark:text-slate-300">2023-10-22 09:15</span>
      </div>
      <div className="flex justify-between text-sm">
      <span className="text-slate-500">数据源</span>
      <span className="text-slate-700 dark:text-slate-300">HDFS_User_Logs</span>
      </div>
      <div className="space-y-1.5">
      <div className="flex justify-between text-xs">
      <span className="text-slate-500">分析结果</span>
      <span className="text-slate-700 dark:text-slate-300">8个聚类簇</span>
      </div>
      <div className="w-full h-1.5 bg-emerald-500 rounded-full"></div>
      </div>
      </div>
      <div className="grid grid-cols-2 gap-2">
      <button className="flex items-center justify-center gap-1.5 py-2 px-3 text-sm font-medium text-white bg-primary hover:bg-primary/90 rounded-lg transition-colors col-span-2">
      <span className="material-symbols-outlined text-[18px]">bar_chart</span> 查看详细报告
                                  </button>
      <button className="flex items-center justify-center gap-1.5 py-2 px-3 text-sm font-medium text-slate-700 dark:text-slate-300 bg-slate-50 dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-lg transition-colors">
      <span className="material-symbols-outlined text-[18px]">refresh</span> 重新分析
                                  </button>
      <button className="flex items-center justify-center gap-1.5 py-2 px-3 text-sm font-medium text-slate-700 dark:text-slate-300 bg-slate-50 dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-lg transition-colors">
      <span className="material-symbols-outlined text-[18px]">delete</span> 删除
                                  </button>
      </div>
      </div>
      </div>
      
      <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      <div className="p-6">
      <div className="flex justify-between items-start mb-4">
      <div className="space-y-1">
      <h3 className="font-bold text-slate-900 dark:text-slate-100">舆情趋势演化任务</h3>
      <p className="text-xs text-slate-500">ID: TASK-2023081503</p>
      </div>
      <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-400">
                                      已停止
                                  </span>
      </div>
      <div className="space-y-4 mb-6">
      <div className="flex justify-between text-sm">
      <span className="text-slate-500">创建时间</span>
      <span className="text-slate-700 dark:text-slate-300">2023-10-20 18:40</span>
      </div>
      <div className="flex justify-between text-sm">
      <span className="text-slate-500">数据源</span>
      <span className="text-slate-700 dark:text-slate-300">API_Feed_v2</span>
      </div>
      <div className="space-y-1.5">
      <div className="flex justify-between text-xs">
      <span className="text-slate-500">停止位置</span>
      <span className="text-slate-400">Step 2: 权重计算</span>
      </div>
      <div className="w-full h-1.5 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
      <div className="h-full bg-slate-400 rounded-full" style={{ width: "45%" }}></div>
      </div>
      </div>
      </div>
      <div className="grid grid-cols-2 gap-2">
      <button className="flex items-center justify-center gap-1.5 py-2 px-3 text-sm font-medium text-slate-700 dark:text-slate-300 bg-slate-50 dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-lg transition-colors">
      <span className="material-symbols-outlined text-[18px]">play_arrow</span> 继续分析
                                  </button>
      <button className="flex items-center justify-center gap-1.5 py-2 px-3 text-sm font-medium text-slate-700 dark:text-slate-300 bg-slate-50 dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-lg transition-colors">
      <span className="material-symbols-outlined text-[18px]">delete</span> 删除
                                  </button>
      </div>
      </div>
      </div>
      </div>
      
      <div className="flex justify-center pt-4">
      <nav className="flex items-center gap-2">
      <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-slate-200 dark:border-slate-800 text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800">
      <span className="material-symbols-outlined">chevron_left</span>
      </button>
      <button className="w-10 h-10 flex items-center justify-center rounded-lg bg-primary text-white font-semibold">1</button>
      <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800">2</button>
      <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800">3</button>
      <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-slate-200 dark:border-slate-800 text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800">
      <span className="material-symbols-outlined">chevron_right</span>
      </button>
      </nav>
      </div>
      </div>
      </div>
      
      </div></div></div>
    </div>
  );
}
