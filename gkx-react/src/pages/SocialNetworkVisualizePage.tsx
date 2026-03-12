import { useNavigate } from "react-router-dom";

export default function SocialNetworkVisualizePage() {
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
      <div className="flex h-full grow flex-col px-4 md:px-10 lg:px-20 py-6">
      
      <nav className="flex flex-wrap items-center gap-2 mb-6">
      <a className="text-primary hover:opacity-80 text-sm font-medium transition-colors" href="#">新型高端智库系统</a>
      <span className="text-slate-400 text-sm material-symbols-outlined">chevron_right</span>
      <a className="text-primary hover:opacity-80 text-sm font-medium transition-colors" href="#">战略咨询智能支持</a>
      <span className="text-slate-400 text-sm material-symbols-outlined">chevron_right</span>
      <a className="text-primary hover:opacity-80 text-sm font-medium transition-colors" href="#">技术体系分析</a>
      <span className="text-slate-400 text-sm material-symbols-outlined">chevron_right</span>
      <span className="text-slate-900 dark:text-slate-100 text-sm font-bold">社会网络分析</span>
      </nav>
      
      <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
      <div className="flex flex-col gap-1">
      <h1 className="text-3xl font-black tracking-tight text-slate-900 dark:text-slate-100">社会网络分析</h1>
      <p className="text-slate-500 dark:text-slate-400 text-sm">支持大规模社交关系挖掘与交互式网络演化分析</p>
      </div>
      <div className="flex flex-wrap gap-3">
      <button className="flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary hover:bg-primary/20 rounded-lg text-sm font-bold transition-all">
      <span className="material-symbols-outlined text-lg">add_circle</span>
      <span>新建分析任务</span>
      </button>
      <button className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:bg-slate-50 rounded-lg text-sm font-bold shadow-sm transition-all">
      <span className="material-symbols-outlined text-lg">download</span>
      <span>导出数据</span>
      </button>
      <button className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:bg-slate-50 rounded-lg text-sm font-bold shadow-sm transition-all">
      <span className="material-symbols-outlined text-lg">fullscreen</span>
      <span>全屏查看</span>
      </button>
      </div>
      </header>
      
      <main className="grid grid-cols-1 lg:grid-cols-4 gap-6 h-[720px]">
      
      <aside className="lg:col-span-1 bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-100 dark:border-slate-800 p-6 flex flex-col gap-6 overflow-y-auto">
      <div>
      <h3 className="text-sm font-bold text-slate-900 dark:text-slate-100 mb-4 flex items-center gap-2">
      <span className="material-symbols-outlined text-primary text-xl">settings_input_component</span>
                                  分析控制面板
                              </h3>
      <div className="space-y-6">
      
      <div className="space-y-3">
      <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">布局算法</label>
      <div className="grid grid-cols-2 gap-2">
      <button className="py-2 px-3 bg-primary text-white rounded-lg text-xs font-medium">引力导向 (Force)</button>
      <button className="py-2 px-3 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 rounded-lg text-xs font-medium hover:bg-slate-200">环形布局 (Circular)</button>
      </div>
      </div>
      
      <div className="space-y-3">
      <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">节点展示</label>
      <div className="flex items-center justify-between">
      <span className="text-sm text-slate-600 dark:text-slate-300">显示节点标签</span>
      <div className="w-10 h-5 bg-primary rounded-full relative cursor-pointer">
      <div className="absolute right-1 top-1 w-3 h-3 bg-white rounded-full"></div>
      </div>
      </div>
      <div className="flex flex-col gap-2 mt-2">
      <span className="text-xs text-slate-500">大小维度</span>
      <select className="w-full bg-slate-50 dark:bg-slate-800 border-none rounded-lg text-sm p-2 focus:ring-2 focus:ring-primary/50 text-slate-700 dark:text-slate-200">
      <option>度中心性 (Degree)</option>
      <option>介数中心性 (Betweenness)</option>
      <option>紧密中心性 (Closeness)</option>
      </select>
      </div>
      </div>
      
      <div className="space-y-3">
      <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">关系过滤</label>
      <div className="px-1">
      <div className="flex justify-between text-xs text-slate-500 mb-2">
      <span>关系强度阈值</span>
      <span className="text-primary font-bold">0.45</span>
      </div>
      <input className="w-full h-1.5 bg-slate-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-primary" type="range"/>
      </div>
      <div className="flex items-center justify-between mt-4">
      <span className="text-sm text-slate-600 dark:text-slate-300">颜色聚类 (Louvain)</span>
      <div className="w-10 h-5 bg-slate-200 dark:bg-slate-700 rounded-full relative cursor-pointer">
      <div className="absolute left-1 top-1 w-3 h-3 bg-white rounded-full"></div>
      </div>
      </div>
      </div>
      
      <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
      <button className="w-full py-2.5 bg-slate-900 dark:bg-primary text-white rounded-lg text-sm font-bold flex items-center justify-center gap-2 hover:opacity-90">
      <span className="material-symbols-outlined text-lg">play_arrow</span>
                                          启动物理引擎渲染
                                      </button>
      <button className="w-full mt-2 py-2.5 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 rounded-lg text-sm font-bold hover:bg-slate-200 transition-colors">
                                          重置布局
                                      </button>
      </div>
      </div>
      </div>
      </aside>
      
      <section className="lg:col-span-3 relative bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-100 dark:border-slate-800 overflow-hidden group">
      
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-slate-50 to-white dark:from-slate-950 dark:to-slate-900 opacity-50"></div>
      
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
      
      <div className="w-full h-full opacity-30 dark:opacity-20 bg-center bg-no-repeat bg-contain" data-alt="Abstract complex node-link network visualization graph" style={{ backgroundImage: "url('assets/ea760b273cae6e8e.bin')" }}>
      </div>
      </div>
      
      <div className="absolute bottom-6 right-6 flex flex-col gap-2">
      <div className="bg-white dark:bg-slate-800 shadow-xl rounded-lg p-1 flex flex-col border border-slate-200 dark:border-slate-700">
      <button className="p-2 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300 rounded-md transition-colors">
      <span className="material-symbols-outlined">add</span>
      </button>
      <hr className="border-slate-100 dark:border-slate-700 mx-1"/>
      <button className="p-2 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300 rounded-md transition-colors">
      <span className="material-symbols-outlined">remove</span>
      </button>
      </div>
      <button className="bg-white dark:bg-slate-800 shadow-xl rounded-lg p-3 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:text-primary transition-colors">
      <span className="material-symbols-outlined">my_location</span>
      </button>
      </div>
      
      <div className="absolute top-6 left-6 max-w-xs w-full">
      <div className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-md shadow-lg rounded-xl p-4 border border-white/20">
      <div className="flex items-center gap-2 mb-3">
      <span className="material-symbols-outlined text-primary text-xl">route</span>
      <span className="text-sm font-bold">最短路径查找</span>
      </div>
      <div className="space-y-2">
      <div className="relative">
      <span className="absolute left-3 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-green-500"></span>
      <input className="w-full pl-8 pr-4 py-2 bg-slate-50 dark:bg-slate-700 border-none rounded-lg text-xs" placeholder="起点节点名称..." type="text"/>
      </div>
      <div className="relative">
      <span className="absolute left-3 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-red-500"></span>
      <input className="w-full pl-8 pr-4 py-2 bg-slate-50 dark:bg-slate-700 border-none rounded-lg text-xs" placeholder="终点节点名称..." type="text"/>
      </div>
      <button className="w-full py-2 bg-primary text-white rounded-lg text-xs font-bold mt-2">执行查找</button>
      </div>
      </div>
      </div>
      
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 bg-white dark:bg-slate-800 shadow-2xl rounded-xl border-t-4 border-primary p-4 min-w-[200px] pointer-events-none transform translate-y-4 animate-pulse-subtle">
      <div className="flex justify-between items-start mb-2">
      <span className="text-xs font-bold px-2 py-0.5 bg-primary/10 text-primary rounded-full">核心节点</span>
      <span className="material-symbols-outlined text-slate-300 text-lg">info</span>
      </div>
      <h4 className="text-base font-bold text-slate-900 dark:text-white mb-1">华为技术有限公司</h4>
      <div className="space-y-1.5 mt-3">
      <div className="flex justify-between text-xs">
      <span className="text-slate-500">实体类别:</span>
      <span className="text-slate-700 dark:text-slate-300 font-medium">科技企业</span>
      </div>
      <div className="flex justify-between text-xs">
      <span className="text-slate-500">度中心性:</span>
      <span className="text-slate-700 dark:text-slate-300 font-medium">0.892</span>
      </div>
      <div className="flex justify-between text-xs">
      <span className="text-slate-500">介数中心性:</span>
      <span className="text-slate-700 dark:text-slate-300 font-medium">0.745</span>
      </div>
      </div>
      <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-700">
      <p className="text-[10px] text-slate-400 italic">点击节点以查看详细关联图谱</p>
      </div>
      </div>
      
      <div className="absolute bottom-6 left-6">
      <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-md px-4 py-3 rounded-xl border border-slate-100 dark:border-slate-700 shadow-sm">
      <h5 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">节点图例</h5>
      <div className="flex gap-4">
      <div className="flex items-center gap-2">
      <span className="w-3 h-3 rounded-full bg-primary"></span>
      <span className="text-xs text-slate-600 dark:text-slate-300">政府机构</span>
      </div>
      <div className="flex items-center gap-2">
      <span className="w-3 h-3 rounded-full bg-emerald-500"></span>
      <span className="text-xs text-slate-600 dark:text-slate-300">研究中心</span>
      </div>
      <div className="flex items-center gap-2">
      <span className="w-3 h-3 rounded-full bg-amber-500"></span>
      <span className="text-xs text-slate-600 dark:text-slate-300">社会组织</span>
      </div>
      </div>
      </div>
      </div>
      </section>
      </main>
      
      <footer className="mt-6 flex flex-wrap gap-6 items-center px-2">
      <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400">
      <span className="material-symbols-outlined text-sm">hub</span>
      <span className="text-xs font-medium">当前图表包含: <b className="text-slate-900 dark:text-white">1,284</b> 节点, <b className="text-slate-900 dark:text-white">4,902</b> 关系连线</span>
      </div>
      <div className="h-4 w-px bg-slate-300 dark:bg-slate-700 hidden md:block"></div>
      <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400">
      <span className="material-symbols-outlined text-sm">update</span>
      <span className="text-xs font-medium">最后分析更新: 2023-11-24 14:20:05</span>
      </div>
      <div className="ml-auto flex items-center gap-4">
      <span className="text-xs text-slate-400">渲染性能: 24ms (WebGL)</span>
      <div className="flex items-center gap-1">
      <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
      <span className="text-xs text-green-500 font-bold">实时同步中</span>
      </div>
      </div>
      </footer>
      </div>
      </div></div></div></div>
    </div>
  );
}
