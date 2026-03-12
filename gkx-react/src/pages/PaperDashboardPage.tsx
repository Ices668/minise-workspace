import { useNavigate } from "react-router-dom";

export default function PaperDashboardPage() {
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
      <div className="flex h-screen w-full bg-slate-50 overflow-hidden"><aside id="sidebar" className="w-64 bg-white border-r border-slate-200 flex flex-col z-30 shrink-0" style={{ minWidth: "256px" }}><div className="p-5 flex items-center gap-3 border-b border-slate-100"><div className="w-8 h-8 bg-[#0d9488] rounded-lg flex items-center justify-center"><span className="material-symbols-outlined text-white" style={{ fontSize: "20px" }}>insights</span></div><span className="font-bold text-base text-slate-800">GKX</span><a href="/home" onClick={(event) => { event.preventDefault(); navigate("/home"); }} className="ml-auto text-slate-400 hover:text-slate-600" title="返回首页"><span className="material-symbols-outlined" style={{ fontSize: "18px" }}>home</span></a></div><div className="px-4 pt-4 pb-1"><span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">战略咨询体系</span></div><nav className="flex-1 px-2 py-2 overflow-y-auto space-y-0.5"><div className="nav-group"><button onClick={toggleGroup} className="w-full flex items-center gap-3 px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 rounded-lg transition-colors"><span className="material-symbols-outlined text-xl text-slate-400">search_check</span><span className="flex-1 text-left">研究需求分析</span><span className="material-symbols-outlined text-sm text-slate-400 expand-icon">expand_more</span></button><div className="group-children overflow-hidden" style={{ maxHeight: "0", transition: "max-height .25s ease" }}><a href="/strategy/entity-list.html" onClick={(event) => { event.preventDefault(); navigate("/strategy/entity-list.html"); }} className="flex items-center pl-12 pr-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#0d9488] rounded-lg nav-item" data-file="entity-list.html">科技实体清单</a><a href="/strategy/frontier-tech.html" onClick={(event) => { event.preventDefault(); navigate("/strategy/frontier-tech.html"); }} className="flex items-center pl-12 pr-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#0d9488] rounded-lg nav-item" data-file="frontier-tech.html">颠覆性与前沿技术分析</a><a href="/strategy/media-focus.html" onClick={(event) => { event.preventDefault(); navigate("/strategy/media-focus.html"); }} className="flex items-center pl-12 pr-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#0d9488] rounded-lg nav-item" data-file="media-focus.html">媒体聚焦</a></div></div><div className="nav-group"><button onClick={toggleGroup} className="w-full flex items-center gap-3 px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 rounded-lg transition-colors"><span className="material-symbols-outlined text-xl text-slate-400">hub</span><span className="flex-1 text-left">技术体系分析</span><span className="material-symbols-outlined text-sm text-slate-400 expand-icon">expand_more</span></button><div className="group-children overflow-hidden" style={{ maxHeight: "0", transition: "max-height .25s ease" }}><a href="/strategy/tech-system.html" onClick={(event) => { event.preventDefault(); navigate("/strategy/tech-system.html"); }} className="flex items-center pl-12 pr-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#0d9488] rounded-lg nav-item" data-file="tech-system.html">技术体系</a><a href="/strategy/paper-dashboard.html" onClick={(event) => { event.preventDefault(); navigate("/strategy/paper-dashboard.html"); }} className="flex items-center pl-12 pr-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#0d9488] rounded-lg nav-item" data-file="paper-dashboard.html">论文分析</a><a href="/strategy/patent.html" onClick={(event) => { event.preventDefault(); navigate("/strategy/patent.html"); }} className="flex items-center pl-12 pr-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#0d9488] rounded-lg nav-item" data-file="patent.html">专利分析</a><a href="/strategy/project-stats.html" onClick={(event) => { event.preventDefault(); navigate("/strategy/project-stats.html"); }} className="flex items-center pl-12 pr-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#0d9488] rounded-lg nav-item" data-file="project-stats.html">科研项目分析</a><a href="/strategy/social-network-import.html" onClick={(event) => { event.preventDefault(); navigate("/strategy/social-network-import.html"); }} className="flex items-center pl-12 pr-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#0d9488] rounded-lg nav-item" data-file="social-network-import.html">社会网络分析</a></div></div><div className="nav-group"><button onClick={toggleGroup} className="w-full flex items-center gap-3 px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 rounded-lg transition-colors"><span className="material-symbols-outlined text-xl text-slate-400">trending_up</span><span className="flex-1 text-left">技术趋势分析</span><span className="material-symbols-outlined text-sm text-slate-400 expand-icon">expand_more</span></button><div className="group-children overflow-hidden" style={{ maxHeight: "0", transition: "max-height .25s ease" }}><a href="/strategy/clustering-task.html" onClick={(event) => { event.preventDefault(); navigate("/strategy/clustering-task.html"); }} className="flex items-center pl-12 pr-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#0d9488] rounded-lg nav-item" data-file="clustering-task.html">聚类分析</a><a href="/strategy/common-network-task.html" onClick={(event) => { event.preventDefault(); navigate("/strategy/common-network-task.html"); }} className="flex items-center pl-12 pr-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#0d9488] rounded-lg nav-item" data-file="common-network-task.html">共性网络分析</a><a href="/strategy/tech-trend.html" onClick={(event) => { event.preventDefault(); navigate("/strategy/tech-trend.html"); }} className="flex items-center pl-12 pr-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#0d9488] rounded-lg nav-item" data-file="tech-trend.html">技术趋势分析</a><a href="/strategy/tech-alert.html" onClick={(event) => { event.preventDefault(); navigate("/strategy/tech-alert.html"); }} className="flex items-center pl-12 pr-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#0d9488] rounded-lg nav-item" data-file="tech-alert.html">技术动态预警</a></div></div><div className="nav-group"><button onClick={toggleGroup} className="w-full flex items-center gap-3 px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 rounded-lg transition-colors"><span className="material-symbols-outlined text-xl text-slate-400">route</span><span className="flex-1 text-left">领域技术线路</span><span className="material-symbols-outlined text-sm text-slate-400 expand-icon">expand_more</span></button><div className="group-children overflow-hidden" style={{ maxHeight: "0", transition: "max-height .25s ease" }}><a href="/strategy/delphi.html" onClick={(event) => { event.preventDefault(); navigate("/strategy/delphi.html"); }} className="flex items-center pl-12 pr-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#0d9488] rounded-lg nav-item" data-file="delphi.html">德尔菲问卷</a><a href="/strategy/tech-roadmap.html" onClick={(event) => { event.preventDefault(); navigate("/strategy/tech-roadmap.html"); }} className="flex items-center pl-12 pr-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#0d9488] rounded-lg nav-item" data-file="tech-roadmap.html">技术发展线路</a></div></div><div className="nav-group"><button onClick={toggleGroup} className="w-full flex items-center gap-3 px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 rounded-lg transition-colors"><span className="material-symbols-outlined text-xl text-slate-400">description</span><span className="flex-1 text-left">战略咨询报告</span><span className="material-symbols-outlined text-sm text-slate-400 expand-icon">expand_more</span></button><div className="group-children overflow-hidden" style={{ maxHeight: "0", transition: "max-height .25s ease" }}><a href="/strategy/report-generation.html" onClick={(event) => { event.preventDefault(); navigate("/strategy/report-generation.html"); }} className="flex items-center pl-12 pr-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#0d9488] rounded-lg nav-item" data-file="strategy-shell.html">研究报告管理</a><a href="/strategy/insight-publish.html" onClick={(event) => { event.preventDefault(); navigate("/strategy/insight-publish.html"); }} className="flex items-center pl-12 pr-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#0d9488] rounded-lg nav-item" data-file="insight-publish.html">洞察报告发布</a><a href="/strategy/hot-analysis.html" onClick={(event) => { event.preventDefault(); navigate("/strategy/hot-analysis.html"); }} className="flex items-center pl-12 pr-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#0d9488] rounded-lg nav-item" data-file="hot-analysis.html">热点分析</a><a href="/strategy/report-generation.html" onClick={(event) => { event.preventDefault(); navigate("/strategy/report-generation.html"); }} className="flex items-center pl-12 pr-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#0d9488] rounded-lg nav-item" data-file="report-generation.html">战略咨询报告生成</a></div></div><div className="nav-group"><button onClick={toggleGroup} className="w-full flex items-center gap-3 px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 rounded-lg transition-colors"><span className="material-symbols-outlined text-xl text-slate-400">folder_special</span><span className="flex-1 text-left">战略咨询成果</span><span className="material-symbols-outlined text-sm text-slate-400 expand-icon">expand_more</span></button><div className="group-children overflow-hidden" style={{ maxHeight: "0", transition: "max-height .25s ease" }}><a href="/strategy/strategy-cases.html" onClick={(event) => { event.preventDefault(); navigate("/strategy/strategy-cases.html"); }} className="flex items-center pl-12 pr-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#0d9488] rounded-lg nav-item" data-file="strategy-cases.html">战略咨询案例展示</a></div></div><div className="nav-group"><button onClick={toggleGroup} className="w-full flex items-center gap-3 px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 rounded-lg transition-colors"><span className="material-symbols-outlined text-xl text-slate-400">query_stats</span><span className="flex-1 text-left">智能问数</span><span className="material-symbols-outlined text-sm text-slate-400 expand-icon">expand_more</span></button><div className="group-children overflow-hidden" style={{ maxHeight: "0", transition: "max-height .25s ease" }}><a href="/strategy/analysis-start.html" onClick={(event) => { event.preventDefault(); navigate("/strategy/analysis-start.html"); }} className="flex items-center pl-12 pr-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#0d9488] rounded-lg nav-item" data-file="analysis-start.html">开始分析</a><a href="/strategy/case-share.html" onClick={(event) => { event.preventDefault(); navigate("/strategy/case-share.html"); }} className="flex items-center pl-12 pr-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#0d9488] rounded-lg nav-item" data-file="case-share.html">案例分享</a><a href="/strategy/multi-source-data.html" onClick={(event) => { event.preventDefault(); navigate("/strategy/multi-source-data.html"); }} className="flex items-center pl-12 pr-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#0d9488] rounded-lg nav-item" data-file="multi-source-data.html">多源数据接入</a><a href="/strategy/data-dashboard.html" onClick={(event) => { event.preventDefault(); navigate("/strategy/data-dashboard.html"); }} className="flex items-center pl-12 pr-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#0d9488] rounded-lg nav-item" data-file="data-dashboard.html">数据看板显示</a><a href="/strategy/report-gen-ai.html" onClick={(event) => { event.preventDefault(); navigate("/strategy/report-gen-ai.html"); }} className="flex items-center pl-12 pr-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#0d9488] rounded-lg nav-item" data-file="report-gen-ai.html">一键报告生成</a></div></div></nav><div className="p-4 border-t border-slate-100"><div className="bg-slate-50 rounded-xl p-3 flex items-center gap-3"><div className="w-9 h-9 bg-[#0d9488] rounded-lg flex items-center justify-center"><span className="material-symbols-outlined text-white" style={{ fontSize: "18px" }}>manage_accounts</span></div><div><p className="text-xs font-bold text-slate-800">系统管理员</p><p className="text-[10px] text-slate-500">ID: GKX-0822</p></div></div></div></aside><div className="flex-1 flex flex-col min-w-0 overflow-hidden"><header className="h-14 bg-white border-b border-slate-200 flex items-center justify-between px-6 shrink-0"><div className="flex items-center gap-4"><button onClick={toggleSidebar} className="p-1 text-slate-500 hover:bg-slate-100 rounded-lg"><span className="material-symbols-outlined">menu</span></button><h2 className="text-sm font-bold text-slate-800">战略咨询智能支持</h2></div><div className="flex-1 max-w-md mx-6"><div className="relative"><span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" style={{ fontSize: "18px" }}>search</span><input className="w-full pl-9 pr-4 py-1.5 bg-slate-100 rounded-full text-sm placeholder-slate-400 outline-none border-none" placeholder="搜索功能、报告..." type="text"/></div></div><div className="flex items-center gap-2"><button className="p-2 text-slate-500 hover:bg-slate-100 rounded-full relative"><span className="material-symbols-outlined" style={{ fontSize: "22px" }}>notifications</span><span className="absolute top-2 right-2 w-1.5 h-1.5 bg-red-500 rounded-full"></span></button></div></header><div className="flex-1 overflow-y-auto"><div className="max-w-[1440px] mx-auto p-6 lg:p-10">
      
      <nav className="flex items-center gap-2 mb-6 text-sm font-medium">
      <a className="text-primary hover:underline" href="#">新型高端智库系统</a>
      <span className="text-slate-400 dark:text-slate-500 material-symbols-outlined text-xs">chevron_right</span>
      <a className="text-primary hover:underline" href="#">战略咨询智能支持</a>
      <span className="text-slate-400 dark:text-slate-500 material-symbols-outlined text-xs">chevron_right</span>
      <a className="text-primary hover:underline" href="#">技术体系分析</a>
      <span className="text-slate-400 dark:text-slate-500 material-symbols-outlined text-xs">chevron_right</span>
      <span className="text-slate-600 dark:text-slate-300">论文分析</span>
      </nav>
      
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
      <h1 className="text-3xl font-black tracking-tight text-slate-900 dark:text-slate-50">论文分析</h1>
      <div className="flex flex-wrap gap-3">
      <button className="flex items-center gap-2 px-5 py-2.5 bg-primary text-white rounded-lg font-bold hover:bg-primary/90 transition-colors shadow-sm shadow-primary/20">
      <span className="material-symbols-outlined text-sm">add</span>
      <span>新增分析任务</span>
      </button>
      <button className="flex items-center gap-2 px-5 py-2.5 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 rounded-lg font-bold hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors">
      <span className="material-symbols-outlined text-sm">ios_share</span>
      <span>导出报告</span>
      </button>
      <button className="flex items-center justify-center p-2.5 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors">
      <span className="material-symbols-outlined text-sm">refresh</span>
      </button>
      </div>
      </div>
      
      <div className="border-b border-slate-200 dark:border-slate-800 mb-6">
      <div className="flex gap-8">
      <button className="pb-4 border-b-2 border-primary text-primary font-bold text-base px-1">分析总览</button>
      <button className="pb-4 border-b-2 border-transparent text-slate-500 dark:text-slate-400 font-medium text-base hover:text-slate-700 dark:hover:text-slate-200 px-1">二维交叉分析</button>
      <button className="pb-4 border-b-2 border-transparent text-slate-500 dark:text-slate-400 font-medium text-base hover:text-slate-700 dark:hover:text-slate-200 px-1">任务列表</button>
      </div>
      </div>
      
      <div className="flex flex-wrap gap-3 mb-8">
      <button className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-full text-sm font-medium text-slate-700 dark:text-slate-200 hover:border-primary transition-all">
      <span>发表年份</span>
      <span className="material-symbols-outlined text-sm">keyboard_arrow_down</span>
      </button>
      <button className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-full text-sm font-medium text-slate-700 dark:text-slate-200 hover:border-primary transition-all">
      <span>核心刊物</span>
      <span className="material-symbols-outlined text-sm">keyboard_arrow_down</span>
      </button>
      <button className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-full text-sm font-medium text-slate-700 dark:text-slate-200 hover:border-primary transition-all">
      <span>学科领域</span>
      <span className="material-symbols-outlined text-sm">keyboard_arrow_down</span>
      </button>
      <div className="ml-auto flex items-center gap-2 text-xs text-slate-400 dark:text-slate-500">
      <span className="material-symbols-outlined text-xs">info</span>
                      数据更新于: 2023-12-28 14:30
                  </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
      <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-sm border border-slate-100 dark:border-slate-700">
      <p className="text-sm font-medium text-slate-500 dark:text-slate-400 mb-2">论文收录总数</p>
      <div className="flex items-end gap-2">
      <span className="text-3xl font-black text-slate-900 dark:text-slate-50">12,482</span>
      <span className="text-emerald-500 text-sm font-bold pb-1 flex items-center"><span className="material-symbols-outlined text-xs">trending_up</span> 12%</span>
      </div>
      </div>
      <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-sm border border-slate-100 dark:border-slate-700">
      <p className="text-sm font-medium text-slate-500 dark:text-slate-400 mb-2">核心关键词数</p>
      <div className="flex items-end gap-2">
      <span className="text-3xl font-black text-slate-900 dark:text-slate-50">856</span>
      <span className="text-emerald-500 text-sm font-bold pb-1 flex items-center"><span className="material-symbols-outlined text-xs">trending_up</span> 5.4%</span>
      </div>
      </div>
      <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-sm border border-slate-100 dark:border-slate-700">
      <p className="text-sm font-medium text-slate-500 dark:text-slate-400 mb-2">全球合作机构数</p>
      <div className="flex items-end gap-2">
      <span className="text-3xl font-black text-slate-900 dark:text-slate-50">2,140</span>
      <span className="text-amber-500 text-sm font-bold pb-1 flex items-center"><span className="material-symbols-outlined text-xs">trending_flat</span> 0.8%</span>
      </div>
      </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
      
      <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-sm border border-slate-100 dark:border-slate-700 flex flex-col">
      <div className="flex justify-between items-center mb-6">
      <h3 className="font-bold text-lg">关键词分析</h3>
      <span className="text-xs text-primary font-bold cursor-pointer hover:underline">查看更多</span>
      </div>
      <div className="flex flex-col xl:flex-row gap-6 h-full min-h-[320px]">
      <div className="flex-1 bg-slate-50 dark:bg-slate-900/50 rounded-lg p-4 relative overflow-hidden flex flex-wrap content-center justify-center gap-3">
      
      <span className="text-primary font-black text-3xl">人工智能</span>
      <span className="text-slate-400 font-bold text-xl">大语言模型</span>
      <span className="text-emerald-500 font-bold text-2xl">量子计算</span>
      <span className="text-amber-500 font-medium text-lg">半导体</span>
      <span className="text-rose-500 font-black text-4xl">深度学习</span>
      <span className="text-indigo-400 font-medium text-md">神经网络</span>
      <span className="text-primary/70 font-bold text-xl">自然语言处理</span>
      <span className="text-slate-500 font-medium text-lg">算力优化</span>
      <span className="text-emerald-400 font-bold text-2xl">可持续能源</span>
      <span className="text-amber-600 font-medium text-sm">边际计算</span>
      </div>
      <div className="w-full xl:w-48">
      <p className="text-xs font-bold text-slate-400 dark:text-slate-500 mb-3 uppercase tracking-wider">热度排行榜</p>
      <ul className="space-y-3">
      <li className="flex items-center justify-between">
      <span className="flex items-center gap-2 text-sm"><span className="w-5 h-5 flex items-center justify-center bg-primary text-white text-[10px] rounded-full">1</span> 深度学习</span>
      <span className="text-xs font-bold text-slate-400">2.4k</span>
      </li>
      <li className="flex items-center justify-between">
      <span className="flex items-center gap-2 text-sm"><span className="w-5 h-5 flex items-center justify-center bg-primary/80 text-white text-[10px] rounded-full">2</span> 人工智能</span>
      <span className="text-xs font-bold text-slate-400">1.9k</span>
      </li>
      <li className="flex items-center justify-between">
      <span className="flex items-center gap-2 text-sm"><span className="w-5 h-5 flex items-center justify-center bg-primary/60 text-white text-[10px] rounded-full">3</span> 量子计算</span>
      <span className="text-xs font-bold text-slate-400">1.5k</span>
      </li>
      <li className="flex items-center justify-between">
      <span className="flex items-center gap-2 text-sm"><span className="w-5 h-5 flex items-center justify-center bg-slate-200 dark:bg-slate-700 text-slate-500 text-[10px] rounded-full">4</span> 核心算法</span>
      <span className="text-xs font-bold text-slate-400">1.2k</span>
      </li>
      <li className="flex items-center justify-between">
      <span className="flex items-center gap-2 text-sm"><span className="w-5 h-5 flex items-center justify-center bg-slate-200 dark:bg-slate-700 text-slate-500 text-[10px] rounded-full">5</span> 神经网络</span>
      <span className="text-xs font-bold text-slate-400">0.9k</span>
      </li>
      </ul>
      </div>
      </div>
      </div>
      
      <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-sm border border-slate-100 dark:border-slate-700 flex flex-col">
      <div className="flex justify-between items-center mb-6">
      <h3 className="font-bold text-lg">全球论文分布图</h3>
      <div className="flex items-center gap-2 bg-slate-100 dark:bg-slate-900 px-2 py-1 rounded text-[10px] font-bold text-slate-500">
      <span className="w-2 h-2 rounded-full bg-primary/40"></span> 低
                              <span className="w-2 h-2 rounded-full bg-primary/80"></span> 中
                              <span className="w-2 h-2 rounded-full bg-primary"></span> 高
                          </div>
      </div>
      <div className="flex flex-col xl:flex-row gap-6 h-full min-h-[320px]">
      <div className="flex-1 bg-slate-50 dark:bg-slate-900/50 rounded-lg relative overflow-hidden">
      <img alt="World Map Distribution" className="w-full h-full object-cover opacity-60 mix-blend-multiply dark:mix-blend-overlay" data-alt="Stylized world map showing research paper density with blue bubbles" data-location="Global" src="assets/ff17bfed0051a954.bin"/>
      
      <div className="absolute top-[30%] left-[20%] w-6 h-6 bg-primary/40 rounded-full animate-pulse border border-primary/20"></div>
      <div className="absolute top-[35%] left-[75%] w-10 h-10 bg-primary/60 rounded-full animate-pulse border border-primary/20"></div>
      <div className="absolute top-[45%] left-[82%] w-14 h-14 bg-primary rounded-full animate-pulse border border-primary/20"></div>
      <div className="absolute top-[60%] left-[45%] w-8 h-8 bg-primary/30 rounded-full animate-pulse border border-primary/20"></div>
      </div>
      <div className="w-full xl:w-48">
      <p className="text-xs font-bold text-slate-400 dark:text-slate-500 mb-3 uppercase tracking-wider">贡献度排行</p>
      <div className="space-y-4">
      <div>
      <div className="flex justify-between text-xs mb-1 font-medium">
      <span>中国</span>
      <span className="font-bold">42%</span>
      </div>
      <div className="w-full bg-slate-100 dark:bg-slate-700 h-1.5 rounded-full">
      <div className="bg-primary h-full rounded-full" style={{ width: "42%" }}></div>
      </div>
      </div>
      <div>
      <div className="flex justify-between text-xs mb-1 font-medium">
      <span>美国</span>
      <span className="font-bold">35%</span>
      </div>
      <div className="w-full bg-slate-100 dark:bg-slate-700 h-1.5 rounded-full">
      <div className="bg-primary/80 h-full rounded-full" style={{ width: "35%" }}></div>
      </div>
      </div>
      <div>
      <div className="flex justify-between text-xs mb-1 font-medium">
      <span>欧盟</span>
      <span className="font-bold">18%</span>
      </div>
      <div className="w-full bg-slate-100 dark:bg-slate-700 h-1.5 rounded-full">
      <div className="bg-primary/60 h-full rounded-full" style={{ width: "18%" }}></div>
      </div>
      </div>
      <div>
      <div className="flex justify-between text-xs mb-1 font-medium">
      <span>日本</span>
      <span className="font-bold">5%</span>
      </div>
      <div className="w-full bg-slate-100 dark:bg-slate-700 h-1.5 rounded-full">
      <div className="bg-primary/40 h-full rounded-full" style={{ width: "5%" }}></div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      
      <div className="lg:col-span-2 bg-white dark:bg-slate-800 p-6 rounded-lg shadow-sm border border-slate-100 dark:border-slate-700 flex flex-col">
      <div className="flex justify-between items-center mb-6">
      <h3 className="font-bold text-lg">作者合作关系网络</h3>
      <div className="flex gap-2">
      <button className="p-1 hover:bg-slate-100 dark:hover:bg-slate-700 rounded transition-colors"><span className="material-symbols-outlined text-base">zoom_in</span></button>
      <button className="p-1 hover:bg-slate-100 dark:hover:bg-slate-700 rounded transition-colors"><span className="material-symbols-outlined text-base">zoom_out</span></button>
      <button className="p-1 hover:bg-slate-100 dark:hover:bg-slate-700 rounded transition-colors"><span className="material-symbols-outlined text-base">fullscreen</span></button>
      </div>
      </div>
      <div className="flex-1 min-h-[400px] bg-slate-50 dark:bg-slate-900/50 rounded-lg relative overflow-hidden flex items-center justify-center">
      
      <div className="absolute inset-0 opacity-20 dark:opacity-10">
      <svg height="100%" width="100%" xmlns="http://www.w3.org/2000/svg">
      <line stroke="currentColor" strokeWidth="1" x1="20%" x2="50%" y1="30%" y2="50%"></line>
      <line stroke="currentColor" strokeWidth="1" x1="80%" x2="50%" y1="20%" y2="50%"></line>
      <line stroke="currentColor" strokeWidth="1" x1="10%" x2="50%" y1="80%" y2="50%"></line>
      <line stroke="currentColor" strokeWidth="1" x1="90%" x2="50%" y1="70%" y2="50%"></line>
      <line stroke="currentColor" strokeWidth="1" x1="20%" x2="10%" y1="30%" y2="80%"></line>
      <line stroke="currentColor" strokeWidth="1" x1="80%" x2="90%" y1="20%" y2="70%"></line>
      </svg>
      </div>
      <div className="relative w-full h-full flex flex-wrap items-center justify-center gap-20">
      <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xs text-center p-1 shadow-lg shadow-primary/30 z-10">张教授</div>
      <div className="w-12 h-12 bg-white dark:bg-slate-800 border-2 border-primary/40 rounded-full flex items-center justify-center text-slate-700 dark:text-slate-300 font-bold text-[10px] shadow-md">李博士</div>
      <div className="w-10 h-10 bg-white dark:bg-slate-800 border-2 border-primary/40 rounded-full flex items-center justify-center text-slate-700 dark:text-slate-300 font-bold text-[10px] shadow-md">Wang L.</div>
      <div className="w-14 h-14 bg-white dark:bg-slate-800 border-2 border-primary/40 rounded-full flex items-center justify-center text-slate-700 dark:text-slate-300 font-bold text-[10px] shadow-md">Smith J.</div>
      </div>
      <div className="absolute bottom-4 right-4 text-[10px] bg-white/80 dark:bg-slate-800/80 px-2 py-1 rounded backdrop-blur-sm border border-slate-200 dark:border-slate-700">
                              * 线条粗细代表合作频次
                          </div>
      </div>
      </div>
      
      <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-sm border border-slate-100 dark:border-slate-700 flex flex-col">
      <div className="mb-6">
      <h3 className="font-bold text-lg mb-4">核心作者列表</h3>
      <div className="relative">
      <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-sm">search</span>
      <input className="w-full bg-slate-50 dark:bg-slate-900 border-slate-200 dark:border-slate-700 rounded-lg pl-9 py-2 text-sm focus:ring-primary focus:border-primary" placeholder="搜索作者或机构..." type="text"/>
      </div>
      </div>
      <div className="flex-1 overflow-auto">
      <table className="w-full text-left text-sm">
      <thead className="sticky top-0 bg-white dark:bg-slate-800 z-10 border-b border-slate-100 dark:border-slate-700">
      <tr>
      <th className="pb-3 font-bold text-slate-400 text-xs">姓名/机构</th>
      <th className="pb-3 font-bold text-slate-400 text-xs text-center">论文</th>
      <th className="pb-3 font-bold text-slate-400 text-xs text-right">H-Index</th>
      </tr>
      </thead>
      <tbody className="divide-y divide-slate-50 dark:divide-slate-700/50">
      <tr>
      <td className="py-4">
      <p className="font-bold text-slate-900 dark:text-slate-50">张明远</p>
      <p className="text-[10px] text-slate-400">清华大学人工智能实验室</p>
      </td>
      <td className="py-4 text-center font-bold text-primary">142</td>
      <td className="py-4 text-right font-bold">58</td>
      </tr>
      <tr>
      <td className="py-4">
      <p className="font-bold text-slate-900 dark:text-slate-50">Sarah Jenkins</p>
      <p className="text-[10px] text-slate-400">MIT Computer Science</p>
      </td>
      <td className="py-4 text-center font-bold text-primary">98</td>
      <td className="py-4 text-right font-bold">42</td>
      </tr>
      <tr>
      <td className="py-4">
      <p className="font-bold text-slate-900 dark:text-slate-50">李伟强</p>
      <p className="text-[10px] text-slate-400">中国科学院自动化所</p>
      </td>
      <td className="py-4 text-center font-bold text-primary">85</td>
      <td className="py-4 text-right font-bold">39</td>
      </tr>
      <tr>
      <td className="py-4">
      <p className="font-bold text-slate-900 dark:text-slate-50">David Miller</p>
      <p className="text-[10px] text-slate-400">Stanford University</p>
      </td>
      <td className="py-4 text-center font-bold text-primary">76</td>
      <td className="py-4 text-right font-bold">45</td>
      </tr>
      <tr>
      <td className="py-4">
      <p className="font-bold text-slate-900 dark:text-slate-50">陈思佳</p>
      <p className="text-[10px] text-slate-400">浙江大学计算机学院</p>
      </td>
      <td className="py-4 text-center font-bold text-primary">64</td>
      <td className="py-4 text-right font-bold">31</td>
      </tr>
      </tbody>
      </table>
      </div>
      <button className="mt-4 w-full py-2 text-xs font-bold text-slate-500 dark:text-slate-400 bg-slate-50 dark:bg-slate-900 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors">
                          查看完整列表
                      </button>
      </div>
      </div>
      </div>
      
      </div></div></div>
    </div>
  );
}
