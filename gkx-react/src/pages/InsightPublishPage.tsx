import { useNavigate } from "react-router-dom";

export default function InsightPublishPage() {
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
      <div className="flex h-screen w-full bg-slate-50 overflow-hidden"><aside id="sidebar" className="w-64 bg-white border-r border-slate-200 flex flex-col z-30 shrink-0" style={{ minWidth: "256px" }}><div className="p-5 flex items-center gap-3 border-b border-slate-100"><div className="w-8 h-8 bg-[#0d9488] rounded-lg flex items-center justify-center"><span className="material-symbols-outlined text-white" style={{ fontSize: "20px" }}>insights</span></div><span className="font-bold text-base text-slate-800">GKX</span><a href="/home" onClick={(event) => { event.preventDefault(); navigate("/home"); }} className="ml-auto text-slate-400 hover:text-slate-600" title="返回首页"><span className="material-symbols-outlined" style={{ fontSize: "18px" }}>home</span></a></div><div className="px-4 pt-4 pb-1"><span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">战略咨询体系</span></div><nav className="flex-1 px-2 py-2 overflow-y-auto space-y-0.5"><div className="nav-group"><button onClick={toggleGroup} className="w-full flex items-center gap-3 px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 rounded-lg transition-colors"><span className="material-symbols-outlined text-xl text-slate-400">search_check</span><span className="flex-1 text-left">研究需求分析</span><span className="material-symbols-outlined text-sm text-slate-400 expand-icon">expand_more</span></button><div className="group-children overflow-hidden" style={{ maxHeight: "0", transition: "max-height .25s ease" }}><a href="/strategy/entity-list.html" onClick={(event) => { event.preventDefault(); navigate("/strategy/entity-list.html"); }} className="flex items-center pl-12 pr-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#0d9488] rounded-lg nav-item" data-file="entity-list.html">科技实体清单</a><a href="/strategy/frontier-tech.html" onClick={(event) => { event.preventDefault(); navigate("/strategy/frontier-tech.html"); }} className="flex items-center pl-12 pr-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#0d9488] rounded-lg nav-item" data-file="frontier-tech.html">颠覆性与前沿技术分析</a><a href="/strategy/media-focus.html" onClick={(event) => { event.preventDefault(); navigate("/strategy/media-focus.html"); }} className="flex items-center pl-12 pr-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#0d9488] rounded-lg nav-item" data-file="media-focus.html">媒体聚焦</a></div></div><div className="nav-group"><button onClick={toggleGroup} className="w-full flex items-center gap-3 px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 rounded-lg transition-colors"><span className="material-symbols-outlined text-xl text-slate-400">hub</span><span className="flex-1 text-left">技术体系分析</span><span className="material-symbols-outlined text-sm text-slate-400 expand-icon">expand_more</span></button><div className="group-children overflow-hidden" style={{ maxHeight: "0", transition: "max-height .25s ease" }}><a href="/strategy/tech-system.html" onClick={(event) => { event.preventDefault(); navigate("/strategy/tech-system.html"); }} className="flex items-center pl-12 pr-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#0d9488] rounded-lg nav-item" data-file="tech-system.html">技术体系</a><a href="/strategy/paper-dashboard.html" onClick={(event) => { event.preventDefault(); navigate("/strategy/paper-dashboard.html"); }} className="flex items-center pl-12 pr-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#0d9488] rounded-lg nav-item" data-file="paper-dashboard.html">论文分析</a><a href="/strategy/patent.html" onClick={(event) => { event.preventDefault(); navigate("/strategy/patent.html"); }} className="flex items-center pl-12 pr-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#0d9488] rounded-lg nav-item" data-file="patent.html">专利分析</a><a href="/strategy/project-stats.html" onClick={(event) => { event.preventDefault(); navigate("/strategy/project-stats.html"); }} className="flex items-center pl-12 pr-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#0d9488] rounded-lg nav-item" data-file="project-stats.html">科研项目分析</a><a href="/strategy/social-network-import.html" onClick={(event) => { event.preventDefault(); navigate("/strategy/social-network-import.html"); }} className="flex items-center pl-12 pr-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#0d9488] rounded-lg nav-item" data-file="social-network-import.html">社会网络分析</a></div></div><div className="nav-group"><button onClick={toggleGroup} className="w-full flex items-center gap-3 px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 rounded-lg transition-colors"><span className="material-symbols-outlined text-xl text-slate-400">trending_up</span><span className="flex-1 text-left">技术趋势分析</span><span className="material-symbols-outlined text-sm text-slate-400 expand-icon">expand_more</span></button><div className="group-children overflow-hidden" style={{ maxHeight: "0", transition: "max-height .25s ease" }}><a href="/strategy/clustering-task.html" onClick={(event) => { event.preventDefault(); navigate("/strategy/clustering-task.html"); }} className="flex items-center pl-12 pr-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#0d9488] rounded-lg nav-item" data-file="clustering-task.html">聚类分析</a><a href="/strategy/common-network-task.html" onClick={(event) => { event.preventDefault(); navigate("/strategy/common-network-task.html"); }} className="flex items-center pl-12 pr-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#0d9488] rounded-lg nav-item" data-file="common-network-task.html">共性网络分析</a><a href="/strategy/tech-trend.html" onClick={(event) => { event.preventDefault(); navigate("/strategy/tech-trend.html"); }} className="flex items-center pl-12 pr-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#0d9488] rounded-lg nav-item" data-file="tech-trend.html">技术趋势分析</a><a href="/strategy/tech-alert.html" onClick={(event) => { event.preventDefault(); navigate("/strategy/tech-alert.html"); }} className="flex items-center pl-12 pr-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#0d9488] rounded-lg nav-item" data-file="tech-alert.html">技术动态预警</a></div></div><div className="nav-group"><button onClick={toggleGroup} className="w-full flex items-center gap-3 px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 rounded-lg transition-colors"><span className="material-symbols-outlined text-xl text-slate-400">route</span><span className="flex-1 text-left">领域技术线路</span><span className="material-symbols-outlined text-sm text-slate-400 expand-icon">expand_more</span></button><div className="group-children overflow-hidden" style={{ maxHeight: "0", transition: "max-height .25s ease" }}><a href="/strategy/delphi.html" onClick={(event) => { event.preventDefault(); navigate("/strategy/delphi.html"); }} className="flex items-center pl-12 pr-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#0d9488] rounded-lg nav-item" data-file="delphi.html">德尔菲问卷</a><a href="/strategy/tech-roadmap.html" onClick={(event) => { event.preventDefault(); navigate("/strategy/tech-roadmap.html"); }} className="flex items-center pl-12 pr-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#0d9488] rounded-lg nav-item" data-file="tech-roadmap.html">技术发展线路</a></div></div><div className="nav-group"><button onClick={toggleGroup} className="w-full flex items-center gap-3 px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 rounded-lg transition-colors"><span className="material-symbols-outlined text-xl text-slate-400">description</span><span className="flex-1 text-left">战略咨询报告</span><span className="material-symbols-outlined text-sm text-slate-400 expand-icon">expand_more</span></button><div className="group-children overflow-hidden" style={{ maxHeight: "0", transition: "max-height .25s ease" }}><a href="/strategy/report-generation.html" onClick={(event) => { event.preventDefault(); navigate("/strategy/report-generation.html"); }} className="flex items-center pl-12 pr-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#0d9488] rounded-lg nav-item" data-file="strategy-shell.html">研究报告管理</a><a href="/strategy/insight-publish.html" onClick={(event) => { event.preventDefault(); navigate("/strategy/insight-publish.html"); }} className="flex items-center pl-12 pr-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#0d9488] rounded-lg nav-item" data-file="insight-publish.html">洞察报告发布</a><a href="/strategy/hot-analysis.html" onClick={(event) => { event.preventDefault(); navigate("/strategy/hot-analysis.html"); }} className="flex items-center pl-12 pr-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#0d9488] rounded-lg nav-item" data-file="hot-analysis.html">热点分析</a><a href="/strategy/report-generation.html" onClick={(event) => { event.preventDefault(); navigate("/strategy/report-generation.html"); }} className="flex items-center pl-12 pr-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#0d9488] rounded-lg nav-item" data-file="report-generation.html">战略咨询报告生成</a></div></div><div className="nav-group"><button onClick={toggleGroup} className="w-full flex items-center gap-3 px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 rounded-lg transition-colors"><span className="material-symbols-outlined text-xl text-slate-400">folder_special</span><span className="flex-1 text-left">战略咨询成果</span><span className="material-symbols-outlined text-sm text-slate-400 expand-icon">expand_more</span></button><div className="group-children overflow-hidden" style={{ maxHeight: "0", transition: "max-height .25s ease" }}><a href="/strategy/strategy-cases.html" onClick={(event) => { event.preventDefault(); navigate("/strategy/strategy-cases.html"); }} className="flex items-center pl-12 pr-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#0d9488] rounded-lg nav-item" data-file="strategy-cases.html">战略咨询案例展示</a></div></div><div className="nav-group"><button onClick={toggleGroup} className="w-full flex items-center gap-3 px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 rounded-lg transition-colors"><span className="material-symbols-outlined text-xl text-slate-400">query_stats</span><span className="flex-1 text-left">智能问数</span><span className="material-symbols-outlined text-sm text-slate-400 expand-icon">expand_more</span></button><div className="group-children overflow-hidden" style={{ maxHeight: "0", transition: "max-height .25s ease" }}><a href="/strategy/analysis-start.html" onClick={(event) => { event.preventDefault(); navigate("/strategy/analysis-start.html"); }} className="flex items-center pl-12 pr-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#0d9488] rounded-lg nav-item" data-file="analysis-start.html">开始分析</a><a href="/strategy/case-share.html" onClick={(event) => { event.preventDefault(); navigate("/strategy/case-share.html"); }} className="flex items-center pl-12 pr-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#0d9488] rounded-lg nav-item" data-file="case-share.html">案例分享</a><a href="/strategy/multi-source-data.html" onClick={(event) => { event.preventDefault(); navigate("/strategy/multi-source-data.html"); }} className="flex items-center pl-12 pr-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#0d9488] rounded-lg nav-item" data-file="multi-source-data.html">多源数据接入</a><a href="/strategy/data-dashboard.html" onClick={(event) => { event.preventDefault(); navigate("/strategy/data-dashboard.html"); }} className="flex items-center pl-12 pr-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#0d9488] rounded-lg nav-item" data-file="data-dashboard.html">数据看板显示</a><a href="/strategy/report-gen-ai.html" onClick={(event) => { event.preventDefault(); navigate("/strategy/report-gen-ai.html"); }} className="flex items-center pl-12 pr-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#0d9488] rounded-lg nav-item" data-file="report-gen-ai.html">一键报告生成</a></div></div></nav><div className="p-4 border-t border-slate-100"><div className="bg-slate-50 rounded-xl p-3 flex items-center gap-3"><div className="w-9 h-9 bg-[#0d9488] rounded-lg flex items-center justify-center"><span className="material-symbols-outlined text-white" style={{ fontSize: "18px" }}>manage_accounts</span></div><div><p className="text-xs font-bold text-slate-800">系统管理员</p><p className="text-[10px] text-slate-500">ID: GKX-0822</p></div></div></div></aside><div className="flex-1 flex flex-col min-w-0 overflow-hidden"><header className="h-14 bg-white border-b border-slate-200 flex items-center justify-between px-6 shrink-0"><div className="flex items-center gap-4"><button onClick={toggleSidebar} className="p-1 text-slate-500 hover:bg-slate-100 rounded-lg"><span className="material-symbols-outlined">menu</span></button><h2 className="text-sm font-bold text-slate-800">战略咨询智能支持</h2></div><div className="flex-1 max-w-md mx-6"><div className="relative"><span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" style={{ fontSize: "18px" }}>search</span><input className="w-full pl-9 pr-4 py-1.5 bg-slate-100 rounded-full text-sm placeholder-slate-400 outline-none border-none" placeholder="搜索功能、报告..." type="text"/></div></div><div className="flex items-center gap-2"><button className="p-2 text-slate-500 hover:bg-slate-100 rounded-full relative"><span className="material-symbols-outlined" style={{ fontSize: "22px" }}>notifications</span><span className="absolute top-2 right-2 w-1.5 h-1.5 bg-red-500 rounded-full"></span></button></div></header><div className="flex-1 overflow-y-auto"><div className="max-w-[1440px] mx-auto px-6 py-8">
      
      <nav className="flex items-center gap-2 mb-6">
      <a className="text-primary/80 hover:text-primary text-sm font-medium" href="#">新型高端智库系统</a>
      <span className="text-slate-400 text-sm">/</span>
      <a className="text-primary/80 hover:text-primary text-sm font-medium" href="#">战略咨询智能支持</a>
      <span className="text-slate-400 text-sm">/</span>
      <a className="text-primary/80 hover:text-primary text-sm font-medium" href="#">战略咨询报告</a>
      <span className="text-slate-400 text-sm">/</span>
      <span className="text-slate-600 dark:text-slate-400 text-sm font-medium">洞察报告发布</span>
      </nav>
      
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
      <h1 className="text-3xl font-black tracking-tight">洞察报告发布</h1>
      <div className="flex items-center gap-3">
      <button className="flex items-center justify-center gap-2 px-6 py-2.5 bg-primary text-white rounded-lg font-bold hover:bg-primary/90 transition-colors shadow-sm">
      <span className="material-symbols-outlined text-[20px]">add</span>
      <span>新建报告</span>
      </button>
      <button className="flex items-center justify-center gap-2 px-4 py-2.5 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 rounded-lg font-bold hover:bg-slate-50 transition-colors">
      <span className="material-symbols-outlined text-[20px]">category</span>
      <span>分类管理</span>
      </button>
      <button className="flex items-center justify-center w-11 h-11 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 rounded-lg hover:bg-slate-50 transition-colors">
      <span className="material-symbols-outlined">refresh</span>
      </button>
      </div>
      </div>
      
      <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-sm border border-slate-100 dark:border-slate-700 mb-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
      <div className="lg:col-span-2">
      <div className="relative">
      <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">search</span>
      <input className="w-full pl-12 pr-4 py-2.5 bg-slate-50 dark:bg-slate-900 border-none rounded-full focus:ring-2 focus:ring-primary/20 text-sm" placeholder="搜索报告标题..." type="text"/>
      </div>
      </div>
      <div className="relative">
      <select className="w-full pl-4 pr-10 py-2.5 bg-slate-50 dark:bg-slate-900 border-none rounded-lg focus:ring-2 focus:ring-primary/20 text-sm appearance-none">
      <option>报告分类</option>
      <option>宏观经济</option>
      <option>产业研究</option>
      <option>科技创新</option>
      </select>
      <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none">expand_more</span>
      </div>
      <div className="relative">
      <select className="w-full pl-4 pr-10 py-2.5 bg-slate-50 dark:bg-slate-900 border-none rounded-lg focus:ring-2 focus:ring-primary/20 text-sm appearance-none">
      <option>保密等级</option>
      <option>公开</option>
      <option>内部</option>
      <option>绝密</option>
      </select>
      <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none">expand_more</span>
      </div>
      <div className="relative">
      <select className="w-full pl-4 pr-10 py-2.5 bg-slate-50 dark:bg-slate-900 border-none rounded-lg focus:ring-2 focus:ring-primary/20 text-sm appearance-none">
      <option>发布状态</option>
      <option>已发布</option>
      <option>草稿</option>
      <option>审核中</option>
      </select>
      <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none">expand_more</span>
      </div>
      </div>
      <div className="mt-4 flex items-center gap-4">
      <span className="text-sm text-slate-500 min-w-max">发布时间:</span>
      <div className="flex items-center gap-2 bg-slate-50 dark:bg-slate-900 px-4 py-2 rounded-lg border-none w-full max-w-md">
      <span className="material-symbols-outlined text-slate-400 text-sm">calendar_today</span>
      <input className="bg-transparent border-none text-sm p-0 focus:ring-0 w-full" placeholder="开始日期" type="text"/>
      <span className="text-slate-300">-</span>
      <input className="bg-transparent border-none text-sm p-0 focus:ring-0 w-full" placeholder="结束日期" type="text"/>
      </div>
      </div>
      </div>
      
      <div className="flex items-center justify-between mb-6">
      <div className="flex items-center bg-white dark:bg-slate-800 p-1 rounded-lg border border-slate-200 dark:border-slate-700">
      <button className="flex items-center justify-center w-9 h-9 bg-primary/10 text-primary rounded-md">
      <span className="material-symbols-outlined">grid_view</span>
      </button>
      <button className="flex items-center justify-center w-9 h-9 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200">
      <span className="material-symbols-outlined">format_list_bulleted</span>
      </button>
      </div>
      <div className="flex items-center gap-3">
      <button className="flex items-center gap-2 px-4 py-2 text-slate-600 dark:text-slate-300 hover:bg-white dark:hover:bg-slate-800 rounded-lg transition-all">
      <span className="material-symbols-outlined text-[20px]">checklist</span>
      <span className="text-sm font-medium">批量操作</span>
      </button>
      <button className="flex items-center gap-2 px-4 py-2 text-slate-600 dark:text-slate-300 hover:bg-white dark:hover:bg-slate-800 rounded-lg transition-all">
      <span className="material-symbols-outlined text-[20px]">ios_share</span>
      <span className="text-sm font-medium">导出</span>
      </button>
      </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-6 mb-10">
      
      <div className="bg-white dark:bg-slate-800 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-slate-100 dark:border-slate-700 flex flex-col">
      <div className="aspect-[16/9] bg-slate-100 dark:bg-slate-900 relative group">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center">
      <span className="material-symbols-outlined text-primary/30 text-5xl">description</span>
      </div>
      <div className="absolute top-3 right-3 px-2 py-1 bg-green-500 text-white text-[10px] font-bold rounded uppercase">已发布</div>
      </div>
      <div className="p-5 flex-1 flex flex-col">
      <div className="flex gap-2 mb-3">
      <span className="px-2 py-0.5 bg-primary/10 text-primary text-[11px] font-bold rounded">宏观经济</span>
      <span className="px-2 py-0.5 bg-slate-100 dark:bg-slate-700 text-slate-500 dark:text-slate-400 text-[11px] font-bold rounded">2024趋势</span>
      </div>
      <h3 className="text-lg font-bold mb-4 line-clamp-2 leading-tight">2024年度全球人工智能治理与发展战略洞察报告</h3>
      <div className="space-y-2 mb-6">
      <div className="flex items-center justify-between text-sm">
      <span className="text-slate-500">发布人:</span>
      <span className="font-medium">张建国 (首席研究员)</span>
      </div>
      <div className="flex items-center justify-between text-sm">
      <span className="text-slate-500">阅读量:</span>
      <span className="font-medium">1,284 次</span>
      </div>
      <div className="flex items-center justify-between text-sm">
      <span className="text-slate-500">权限范围:</span>
      <span className="px-2 py-0.5 bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400 rounded text-xs font-bold">内部可见</span>
      </div>
      </div>
      <div className="pt-4 border-t border-slate-100 dark:border-slate-700 flex items-center justify-between">
      <div className="flex gap-1">
      <button className="p-2 text-slate-400 hover:text-primary transition-colors" title="预览">
      <span className="material-symbols-outlined">visibility</span>
      </button>
      <button className="p-2 text-slate-400 hover:text-primary transition-colors" title="设置">
      <span className="material-symbols-outlined">settings</span>
      </button>
      <button className="p-2 text-slate-400 hover:text-primary transition-colors" title="下载">
      <span className="material-symbols-outlined">download</span>
      </button>
      </div>
      <button className="p-2 text-slate-300 hover:text-red-500 transition-colors" title="删除">
      <span className="material-symbols-outlined">delete</span>
      </button>
      </div>
      </div>
      </div>
      
      <div className="bg-white dark:bg-slate-800 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-slate-100 dark:border-slate-700 flex flex-col">
      <div className="aspect-[16/9] bg-slate-100 dark:bg-slate-900 relative">
      <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 to-slate-200 dark:to-slate-700 flex items-center justify-center">
      <span className="material-symbols-outlined text-slate-300 text-5xl">article</span>
      </div>
      <div className="absolute top-3 right-3 px-2 py-1 bg-red-500 text-white text-[10px] font-bold rounded uppercase">绝密</div>
      </div>
      <div className="p-5 flex-1 flex flex-col">
      <div className="flex gap-2 mb-3">
      <span className="px-2 py-0.5 bg-primary/10 text-primary text-[11px] font-bold rounded">国防安全</span>
      <span className="px-2 py-0.5 bg-slate-100 dark:bg-slate-700 text-slate-500 dark:text-slate-400 text-[11px] font-bold rounded">区域冲突</span>
      </div>
      <h3 className="text-lg font-bold mb-4 line-clamp-2 leading-tight">亚太地区海上战略通道风险评估与对策研究</h3>
      <div className="space-y-2 mb-6">
      <div className="flex items-center justify-between text-sm">
      <span className="text-slate-500">发布人:</span>
      <span className="font-medium">李晓明 </span>
      </div>
      <div className="flex items-center justify-between text-sm">
      <span className="text-slate-500">阅读量:</span>
      <span className="font-medium">45 次</span>
      </div>
      <div className="flex items-center justify-between text-sm">
      <span className="text-slate-500">权限范围:</span>
      <span className="px-2 py-0.5 bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400 rounded text-xs font-bold">绝密</span>
      </div>
      </div>
      <div className="pt-4 border-t border-slate-100 dark:border-slate-700 flex items-center justify-between">
      <div className="flex gap-1">
      <button className="p-2 text-slate-400 hover:text-primary transition-colors"><span className="material-symbols-outlined">visibility</span></button>
      <button className="p-2 text-slate-400 hover:text-primary transition-colors"><span className="material-symbols-outlined">settings</span></button>
      <button className="p-2 text-slate-400 hover:text-primary transition-colors"><span className="material-symbols-outlined">download</span></button>
      </div>
      <button className="p-2 text-slate-300 hover:text-red-500 transition-colors"><span className="material-symbols-outlined">delete</span></button>
      </div>
      </div>
      </div>
      
      <div className="bg-white dark:bg-slate-800 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-slate-100 dark:border-slate-700 flex flex-col">
      <div className="aspect-[16/9] bg-slate-100 dark:bg-slate-900 relative">
      <div className="absolute inset-0 bg-gradient-to-bl from-cyan-100 to-primary/20 flex items-center justify-center">
      <span className="material-symbols-outlined text-primary/30 text-5xl">monitoring</span>
      </div>
      <div className="absolute top-3 right-3 px-2 py-1 bg-blue-500 text-white text-[10px] font-bold rounded uppercase">公开</div>
      </div>
      <div className="p-5 flex-1 flex flex-col">
      <div className="flex gap-2 mb-3">
      <span className="px-2 py-0.5 bg-primary/10 text-primary text-[11px] font-bold rounded">科技前沿</span>
      <span className="px-2 py-0.5 bg-slate-100 dark:bg-slate-700 text-slate-500 dark:text-slate-400 text-[11px] font-bold rounded">芯片半导体</span>
      </div>
      <h3 className="text-lg font-bold mb-4 line-clamp-2 leading-tight">全球半导体供应链重构对我国电子信息产业的影响</h3>
      <div className="space-y-2 mb-6">
      <div className="flex items-center justify-between text-sm">
      <span className="text-slate-500">发布人:</span>
      <span className="font-medium">王卓 博士</span>
      </div>
      <div className="flex items-center justify-between text-sm">
      <span className="text-slate-500">阅读量:</span>
      <span className="font-medium">3,590 次</span>
      </div>
      <div className="flex items-center justify-between text-sm">
      <span className="text-slate-500">权限范围:</span>
      <span className="px-2 py-0.5 bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 rounded text-xs font-bold">完全公开</span>
      </div>
      </div>
      <div className="pt-4 border-t border-slate-100 dark:border-slate-700 flex items-center justify-between">
      <div className="flex gap-1">
      <button className="p-2 text-slate-400 hover:text-primary transition-colors"><span className="material-symbols-outlined">visibility</span></button>
      <button className="p-2 text-slate-400 hover:text-primary transition-colors"><span className="material-symbols-outlined">settings</span></button>
      <button className="p-2 text-slate-400 hover:text-primary transition-colors"><span className="material-symbols-outlined">download</span></button>
      </div>
      <button className="p-2 text-slate-300 hover:text-red-500 transition-colors"><span className="material-symbols-outlined">delete</span></button>
      </div>
      </div>
      </div>
      
      <div className="bg-white dark:bg-slate-800 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-slate-100 dark:border-slate-700 flex flex-col opacity-80">
      <div className="aspect-[16/9] bg-slate-50 dark:bg-slate-900 relative grayscale">
      <div className="absolute inset-0 flex items-center justify-center">
      <span className="material-symbols-outlined text-slate-300 text-5xl">edit_note</span>
      </div>
      <div className="absolute top-3 right-3 px-2 py-1 bg-slate-400 text-white text-[10px] font-bold rounded uppercase">草稿</div>
      </div>
      <div className="p-5 flex-1 flex flex-col">
      <div className="flex gap-2 mb-3">
      <span className="px-2 py-0.5 bg-slate-100 dark:bg-slate-700 text-slate-500 text-[11px] font-bold rounded">能源战略</span>
      </div>
      <h3 className="text-lg font-bold mb-4 line-clamp-2 leading-tight">2025年氢能产业商业化路径及政策建议内参</h3>
      <div className="space-y-2 mb-6 text-slate-400">
      <div className="flex items-center justify-between text-sm">
      <span>编辑中...</span>
      </div>
      </div>
      <div className="pt-4 border-t border-slate-100 dark:border-slate-700 flex items-center justify-between">
      <div className="flex gap-1">
      <button className="p-2 text-primary hover:bg-primary/5 rounded-md"><span className="material-symbols-outlined">edit</span></button>
      </div>
      <button className="p-2 text-slate-300 hover:text-red-500 transition-colors"><span className="material-symbols-outlined">delete</span></button>
      </div>
      </div>
      </div>
      </div>
      
      <div className="flex items-center justify-between mt-8 pb-12">
      <span className="text-sm text-slate-500">显示 1 到 4 共 24 条报告</span>
      <div className="flex items-center gap-1">
      <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-slate-200 dark:border-slate-700 text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800">
      <span className="material-symbols-outlined">chevron_left</span>
      </button>
      <button className="w-10 h-10 flex items-center justify-center rounded-lg bg-primary text-white font-bold">1</button>
      <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800">2</button>
      <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800">3</button>
      <span className="px-2 text-slate-400">...</span>
      <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800">6</button>
      <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-slate-200 dark:border-slate-700 text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800">
      <span className="material-symbols-outlined">chevron_right</span>
      </button>
      </div>
      </div>
      </div></div></div></div>
    </div>
  );
}
