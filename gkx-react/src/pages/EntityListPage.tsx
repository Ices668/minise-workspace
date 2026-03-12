import { useNavigate } from "react-router-dom";

export default function EntityListPage() {
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
      <div className="flex h-screen w-full bg-slate-50 overflow-hidden"><aside id="sidebar" className="w-64 bg-white border-r border-slate-200 flex flex-col z-30 shrink-0" style={{ minWidth: "256px" }}><div className="p-5 flex items-center gap-3 border-b border-slate-100"><div className="w-8 h-8 bg-[#0d9488] rounded-lg flex items-center justify-center"><span className="material-symbols-outlined text-white" style={{ fontSize: "20px" }}>insights</span></div><span className="font-bold text-base text-slate-800">GKX</span><a href="/home" onClick={(event) => { event.preventDefault(); navigate("/home"); }} className="ml-auto text-slate-400 hover:text-slate-600" title="返回首页"><span className="material-symbols-outlined" style={{ fontSize: "18px" }}>home</span></a></div><div className="px-4 pt-4 pb-1"><span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">战略咨询体系</span></div><nav className="flex-1 px-2 py-2 overflow-y-auto space-y-0.5"><div className="nav-group"><button onClick={toggleGroup} className="w-full flex items-center gap-3 px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 rounded-lg transition-colors"><span className="material-symbols-outlined text-xl text-slate-400">search_check</span><span className="flex-1 text-left">研究需求分析</span><span className="material-symbols-outlined text-sm text-slate-400 expand-icon">expand_more</span></button><div className="group-children overflow-hidden" style={{ maxHeight: "0", transition: "max-height .25s ease" }}><a href="/strategy/entity-list.html" onClick={(event) => { event.preventDefault(); navigate("/strategy/entity-list.html"); }} className="flex items-center pl-12 pr-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#0d9488] rounded-lg nav-item" data-file="entity-list.html">科技实体清单</a><a href="/strategy/frontier-tech.html" onClick={(event) => { event.preventDefault(); navigate("/strategy/frontier-tech.html"); }} className="flex items-center pl-12 pr-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#0d9488] rounded-lg nav-item" data-file="frontier-tech.html">颠覆性与前沿技术分析</a><a href="/strategy/media-focus.html" onClick={(event) => { event.preventDefault(); navigate("/strategy/media-focus.html"); }} className="flex items-center pl-12 pr-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#0d9488] rounded-lg nav-item" data-file="media-focus.html">媒体聚焦</a></div></div><div className="nav-group"><button onClick={toggleGroup} className="w-full flex items-center gap-3 px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 rounded-lg transition-colors"><span className="material-symbols-outlined text-xl text-slate-400">hub</span><span className="flex-1 text-left">技术体系分析</span><span className="material-symbols-outlined text-sm text-slate-400 expand-icon">expand_more</span></button><div className="group-children overflow-hidden" style={{ maxHeight: "0", transition: "max-height .25s ease" }}><a href="/strategy/tech-system.html" onClick={(event) => { event.preventDefault(); navigate("/strategy/tech-system.html"); }} className="flex items-center pl-12 pr-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#0d9488] rounded-lg nav-item" data-file="tech-system.html">技术体系</a><a href="/strategy/paper-dashboard.html" onClick={(event) => { event.preventDefault(); navigate("/strategy/paper-dashboard.html"); }} className="flex items-center pl-12 pr-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#0d9488] rounded-lg nav-item" data-file="paper-dashboard.html">论文分析</a><a href="/strategy/patent.html" onClick={(event) => { event.preventDefault(); navigate("/strategy/patent.html"); }} className="flex items-center pl-12 pr-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#0d9488] rounded-lg nav-item" data-file="patent.html">专利分析</a><a href="/strategy/project-stats.html" onClick={(event) => { event.preventDefault(); navigate("/strategy/project-stats.html"); }} className="flex items-center pl-12 pr-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#0d9488] rounded-lg nav-item" data-file="project-stats.html">科研项目分析</a><a href="/strategy/social-network-import.html" onClick={(event) => { event.preventDefault(); navigate("/strategy/social-network-import.html"); }} className="flex items-center pl-12 pr-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#0d9488] rounded-lg nav-item" data-file="social-network-import.html">社会网络分析</a></div></div><div className="nav-group"><button onClick={toggleGroup} className="w-full flex items-center gap-3 px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 rounded-lg transition-colors"><span className="material-symbols-outlined text-xl text-slate-400">trending_up</span><span className="flex-1 text-left">技术趋势分析</span><span className="material-symbols-outlined text-sm text-slate-400 expand-icon">expand_more</span></button><div className="group-children overflow-hidden" style={{ maxHeight: "0", transition: "max-height .25s ease" }}><a href="/strategy/clustering-task.html" onClick={(event) => { event.preventDefault(); navigate("/strategy/clustering-task.html"); }} className="flex items-center pl-12 pr-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#0d9488] rounded-lg nav-item" data-file="clustering-task.html">聚类分析</a><a href="/strategy/common-network-task.html" onClick={(event) => { event.preventDefault(); navigate("/strategy/common-network-task.html"); }} className="flex items-center pl-12 pr-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#0d9488] rounded-lg nav-item" data-file="common-network-task.html">共性网络分析</a><a href="/strategy/tech-trend.html" onClick={(event) => { event.preventDefault(); navigate("/strategy/tech-trend.html"); }} className="flex items-center pl-12 pr-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#0d9488] rounded-lg nav-item" data-file="tech-trend.html">技术趋势分析</a><a href="/strategy/tech-alert.html" onClick={(event) => { event.preventDefault(); navigate("/strategy/tech-alert.html"); }} className="flex items-center pl-12 pr-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#0d9488] rounded-lg nav-item" data-file="tech-alert.html">技术动态预警</a></div></div><div className="nav-group"><button onClick={toggleGroup} className="w-full flex items-center gap-3 px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 rounded-lg transition-colors"><span className="material-symbols-outlined text-xl text-slate-400">route</span><span className="flex-1 text-left">领域技术线路</span><span className="material-symbols-outlined text-sm text-slate-400 expand-icon">expand_more</span></button><div className="group-children overflow-hidden" style={{ maxHeight: "0", transition: "max-height .25s ease" }}><a href="/strategy/delphi.html" onClick={(event) => { event.preventDefault(); navigate("/strategy/delphi.html"); }} className="flex items-center pl-12 pr-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#0d9488] rounded-lg nav-item" data-file="delphi.html">德尔菲问卷</a><a href="/strategy/tech-roadmap.html" onClick={(event) => { event.preventDefault(); navigate("/strategy/tech-roadmap.html"); }} className="flex items-center pl-12 pr-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#0d9488] rounded-lg nav-item" data-file="tech-roadmap.html">技术发展线路</a></div></div><div className="nav-group"><button onClick={toggleGroup} className="w-full flex items-center gap-3 px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 rounded-lg transition-colors"><span className="material-symbols-outlined text-xl text-slate-400">description</span><span className="flex-1 text-left">战略咨询报告</span><span className="material-symbols-outlined text-sm text-slate-400 expand-icon">expand_more</span></button><div className="group-children overflow-hidden" style={{ maxHeight: "0", transition: "max-height .25s ease" }}><a href="/strategy/report-generation.html" onClick={(event) => { event.preventDefault(); navigate("/strategy/report-generation.html"); }} className="flex items-center pl-12 pr-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#0d9488] rounded-lg nav-item" data-file="strategy-shell.html">研究报告管理</a><a href="/strategy/insight-publish.html" onClick={(event) => { event.preventDefault(); navigate("/strategy/insight-publish.html"); }} className="flex items-center pl-12 pr-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#0d9488] rounded-lg nav-item" data-file="insight-publish.html">洞察报告发布</a><a href="/strategy/hot-analysis.html" onClick={(event) => { event.preventDefault(); navigate("/strategy/hot-analysis.html"); }} className="flex items-center pl-12 pr-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#0d9488] rounded-lg nav-item" data-file="hot-analysis.html">热点分析</a><a href="/strategy/report-generation.html" onClick={(event) => { event.preventDefault(); navigate("/strategy/report-generation.html"); }} className="flex items-center pl-12 pr-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#0d9488] rounded-lg nav-item" data-file="report-generation.html">战略咨询报告生成</a></div></div><div className="nav-group"><button onClick={toggleGroup} className="w-full flex items-center gap-3 px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 rounded-lg transition-colors"><span className="material-symbols-outlined text-xl text-slate-400">folder_special</span><span className="flex-1 text-left">战略咨询成果</span><span className="material-symbols-outlined text-sm text-slate-400 expand-icon">expand_more</span></button><div className="group-children overflow-hidden" style={{ maxHeight: "0", transition: "max-height .25s ease" }}><a href="/strategy/strategy-cases.html" onClick={(event) => { event.preventDefault(); navigate("/strategy/strategy-cases.html"); }} className="flex items-center pl-12 pr-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#0d9488] rounded-lg nav-item" data-file="strategy-cases.html">战略咨询案例展示</a></div></div><div className="nav-group"><button onClick={toggleGroup} className="w-full flex items-center gap-3 px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 rounded-lg transition-colors"><span className="material-symbols-outlined text-xl text-slate-400">query_stats</span><span className="flex-1 text-left">智能问数</span><span className="material-symbols-outlined text-sm text-slate-400 expand-icon">expand_more</span></button><div className="group-children overflow-hidden" style={{ maxHeight: "0", transition: "max-height .25s ease" }}><a href="/strategy/analysis-start.html" onClick={(event) => { event.preventDefault(); navigate("/strategy/analysis-start.html"); }} className="flex items-center pl-12 pr-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#0d9488] rounded-lg nav-item" data-file="analysis-start.html">开始分析</a><a href="/strategy/case-share.html" onClick={(event) => { event.preventDefault(); navigate("/strategy/case-share.html"); }} className="flex items-center pl-12 pr-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#0d9488] rounded-lg nav-item" data-file="case-share.html">案例分享</a><a href="/strategy/multi-source-data.html" onClick={(event) => { event.preventDefault(); navigate("/strategy/multi-source-data.html"); }} className="flex items-center pl-12 pr-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#0d9488] rounded-lg nav-item" data-file="multi-source-data.html">多源数据接入</a><a href="/strategy/data-dashboard.html" onClick={(event) => { event.preventDefault(); navigate("/strategy/data-dashboard.html"); }} className="flex items-center pl-12 pr-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#0d9488] rounded-lg nav-item" data-file="data-dashboard.html">数据看板显示</a><a href="/strategy/report-gen-ai.html" onClick={(event) => { event.preventDefault(); navigate("/strategy/report-gen-ai.html"); }} className="flex items-center pl-12 pr-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#0d9488] rounded-lg nav-item" data-file="report-gen-ai.html">一键报告生成</a></div></div></nav><div className="p-4 border-t border-slate-100"><div className="bg-slate-50 rounded-xl p-3 flex items-center gap-3"><div className="w-9 h-9 bg-[#0d9488] rounded-lg flex items-center justify-center"><span className="material-symbols-outlined text-white" style={{ fontSize: "18px" }}>manage_accounts</span></div><div><p className="text-xs font-bold text-slate-800">系统管理员</p><p className="text-[10px] text-slate-500">ID: GKX-0822</p></div></div></div></aside><div className="flex-1 flex flex-col min-w-0 overflow-hidden"><header className="h-14 bg-white border-b border-slate-200 flex items-center justify-between px-6 shrink-0"><div className="flex items-center gap-4"><button onClick={toggleSidebar} className="p-1 text-slate-500 hover:bg-slate-100 rounded-lg"><span className="material-symbols-outlined">menu</span></button><h2 className="text-sm font-bold text-slate-800">战略咨询智能支持</h2></div><div className="flex-1 max-w-md mx-6"><div className="relative"><span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" style={{ fontSize: "18px" }}>search</span><input className="w-full pl-9 pr-4 py-1.5 bg-slate-100 rounded-full text-sm placeholder-slate-400 outline-none border-none" placeholder="搜索功能、报告..." type="text"/></div></div><div className="flex items-center gap-2"><button className="p-2 text-slate-500 hover:bg-slate-100 rounded-full relative"><span className="material-symbols-outlined" style={{ fontSize: "22px" }}>notifications</span><span className="absolute top-2 right-2 w-1.5 h-1.5 bg-red-500 rounded-full"></span></button></div></header><div className="flex-1 overflow-y-auto"><div className="max-w-[1200px] mx-auto px-6 py-8">
      
      <nav className="flex items-center gap-2 mb-6 text-sm font-medium">
      <a className="text-primary hover:opacity-80" href="#">新型高端智库系统</a>
      <span className="text-slate-400 dark:text-slate-500 material-symbols-outlined text-sm">chevron_right</span>
      <a className="text-primary hover:opacity-80" href="#">战略咨询智能支持</a>
      <span className="text-slate-400 dark:text-slate-500 material-symbols-outlined text-sm">chevron_right</span>
      <a className="text-primary hover:opacity-80" href="#">研究需求分析</a>
      <span className="text-slate-400 dark:text-slate-500 material-symbols-outlined text-sm">chevron_right</span>
      <span className="text-slate-600 dark:text-slate-400">科技实体清单</span>
      </nav>
      
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
      <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-50">科技实体清单</h1>
      <div className="flex items-center gap-3">
      <button className="flex items-center gap-2 px-5 py-2.5 bg-primary/10 text-primary hover:bg-primary/20 transition-colors rounded-lg font-semibold text-sm">
      <span className="material-symbols-outlined text-[20px]">file_download</span>
                          一键导出报告
                      </button>
      <button className="flex items-center gap-2 px-5 py-2.5 bg-primary text-white hover:opacity-90 transition-opacity rounded-lg font-semibold text-sm">
      <span className="material-symbols-outlined text-[20px]">add</span>
                          新建实体
                      </button>
      <button className="p-2.5 bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-300 dark:hover:bg-slate-700 rounded-lg transition-colors">
      <span className="material-symbols-outlined text-[20px]">refresh</span>
      </button>
      </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      <div className="bg-white dark:bg-slate-900 p-6 rounded-xl shadow-sm border border-slate-200/60 dark:border-slate-800">
      <p className="text-sm font-medium text-slate-500 dark:text-slate-400 mb-1">实体总数</p>
      <div className="flex items-end gap-2">
      <span className="text-3xl font-bold text-slate-900 dark:text-white leading-none">1,284</span>
      <span className="text-xs text-green-500 font-medium mb-1">+12%</span>
      </div>
      </div>
      <div className="bg-white dark:bg-slate-900 p-6 rounded-xl shadow-sm border border-slate-200/60 dark:border-slate-800">
      <p className="text-sm font-medium text-slate-500 dark:text-slate-400 mb-1">本月新增</p>
      <div className="flex items-end gap-2">
      <span className="text-3xl font-bold text-slate-900 dark:text-white leading-none">56</span>
      <span className="text-xs text-primary font-medium mb-1">活跃</span>
      </div>
      </div>
      <div className="bg-white dark:bg-slate-900 p-6 rounded-xl shadow-sm border border-slate-200/60 dark:border-slate-800">
      <p className="text-sm font-medium text-slate-500 dark:text-slate-400 mb-1">高创新指数占比</p>
      <div className="flex items-end gap-2">
      <span className="text-3xl font-bold text-slate-900 dark:text-white leading-none">32.4%</span>
      <div className="w-24 h-2 bg-slate-100 dark:bg-slate-800 rounded-full mb-2 overflow-hidden">
      <div className="bg-primary h-full w-[32.4%]"></div>
      </div>
      </div>
      </div>
      </div>
      
      <div className="bg-white dark:bg-slate-900 p-6 rounded-xl shadow-sm border border-slate-200/60 dark:border-slate-800 mb-8">
      <div className="flex flex-col gap-5">
      
      <div className="relative group">
      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary material-symbols-outlined">search</span>
      <input className="w-full pl-12 pr-4 py-3 bg-slate-50 dark:bg-slate-800/50 border-none rounded-full focus:ring-2 focus:ring-primary/50 text-slate-900 dark:text-slate-100 placeholder:text-slate-400" placeholder="关键词模糊搜索（实体名称、简介、技术关键词）" type="text"/>
      </div>
      
      <div className="flex flex-wrap items-center justify-between gap-4">
      <div className="flex flex-wrap items-center gap-3">
      <button className="flex items-center gap-2 px-4 py-2 bg-slate-100 dark:bg-slate-800 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors text-sm font-medium">
                                  技术领域 <span className="material-symbols-outlined text-sm">expand_more</span>
      </button>
      <button className="flex items-center gap-2 px-4 py-2 bg-slate-100 dark:bg-slate-800 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors text-sm font-medium">
                                  所属地区 <span className="material-symbols-outlined text-sm">expand_more</span>
      </button>
      <button className="flex items-center gap-2 px-4 py-2 bg-slate-100 dark:bg-slate-800 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors text-sm font-medium">
                                  创新指数 <span className="material-symbols-outlined text-sm">expand_more</span>
      </button>
      <button className="flex items-center gap-2 px-4 py-2 bg-slate-100 dark:bg-slate-800 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors text-sm font-medium">
                                  实体标签 <span className="material-symbols-outlined text-sm">expand_more</span>
      </button>
      </div>
      <div className="flex items-center gap-2">
      <button className="px-6 py-2 bg-primary text-white rounded-lg font-semibold text-sm hover:opacity-90">查询</button>
      <button className="px-6 py-2 bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-400 rounded-lg font-semibold text-sm hover:bg-slate-300 dark:hover:bg-slate-700">重置</button>
      </div>
      </div>
      </div>
      </div>
      
      <div className="flex items-center justify-between mb-4 px-2">
      <div className="flex items-center bg-slate-200/50 dark:bg-slate-800 p-1 rounded-lg">
      <button className="p-1.5 rounded-md bg-white dark:bg-slate-700 shadow-sm text-primary">
      <span className="material-symbols-outlined block">format_list_bulleted</span>
      </button>
      <button className="p-1.5 rounded-md text-slate-500 hover:text-slate-700 dark:hover:text-slate-300">
      <span className="material-symbols-outlined block">grid_view</span>
      </button>
      </div>
      <div className="flex items-center gap-3">
      <button className="flex items-center gap-2 text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-primary transition-colors">
      <span className="material-symbols-outlined text-[18px]">upload_file</span>
                          批量导入 (Excel)
                      </button>
      <button className="flex items-center gap-2 text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-primary transition-colors">
      <span className="material-symbols-outlined text-[18px]">download</span>
                          导出
                      </button>
      </div>
      </div>
      
      <div className="bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-200/60 dark:border-slate-800 overflow-hidden mb-6">
      <div className="overflow-x-auto">
      <table className="w-full text-left border-collapse">
      <thead>
      <tr className="bg-slate-50 dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-800">
      <th className="px-6 py-4 text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">实体名称</th>
      <th className="px-6 py-4 text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">技术领域</th>
      <th className="px-6 py-4 text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">创新指数</th>
      <th className="px-6 py-4 text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">标签</th>
      <th className="px-6 py-4 text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">更新时间</th>
      <th className="px-6 py-4 text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider text-right">操作</th>
      </tr>
      </thead>
      <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
      
      <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors">
      <td className="px-6 py-4 whitespace-nowrap">
      <div className="flex items-center gap-3">
      <div className="w-8 h-8 rounded bg-primary/10 flex items-center justify-center text-primary font-bold text-xs">A</div>
      <span className="font-semibold text-slate-900 dark:text-slate-100">先导微电子研究所</span>
      </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-600 dark:text-slate-400">半导体装备</td>
      <td className="px-6 py-4 whitespace-nowrap">
      <div className="flex items-center gap-3">
      <div className="flex-1 w-24 h-1.5 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
      <div className="bg-green-500 h-full w-[88%]"></div>
      </div>
      <span className="text-xs font-bold text-slate-700 dark:text-slate-300">88.5</span>
      </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
      <div className="flex gap-1.5">
      <span className="px-2 py-0.5 bg-primary/10 text-primary text-[10px] font-bold rounded">核心实验室</span>
      <span className="px-2 py-0.5 bg-slate-100 dark:bg-slate-800 text-slate-500 text-[10px] font-bold rounded">高新企业</span>
      </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-500 dark:text-slate-400">2023-11-20</td>
      <td className="px-6 py-4 whitespace-nowrap text-right text-sm">
      <div className="flex items-center justify-end gap-3">
      <button className="text-primary hover:underline font-medium">详情</button>
      <button className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 material-symbols-outlined text-[18px]">edit</button>
      <button className="text-slate-400 hover:text-red-500 material-symbols-outlined text-[18px]">delete</button>
      </div>
      </td>
      </tr>
      
      <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors">
      <td className="px-6 py-4 whitespace-nowrap">
      <div className="flex items-center gap-3">
      <div className="w-8 h-8 rounded bg-primary/10 flex items-center justify-center text-primary font-bold text-xs">B</div>
      <span className="font-semibold text-slate-900 dark:text-slate-100">量子信息科技实验室</span>
      </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-600 dark:text-slate-400">量子通信</td>
      <td className="px-6 py-4 whitespace-nowrap">
      <div className="flex items-center gap-3">
      <div className="flex-1 w-24 h-1.5 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
      <div className="bg-primary h-full w-[94%]"></div>
      </div>
      <span className="text-xs font-bold text-slate-700 dark:text-slate-300">94.2</span>
      </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
      <div className="flex gap-1.5">
      <span className="px-2 py-0.5 bg-primary/10 text-primary text-[10px] font-bold rounded">国家级</span>
      <span className="px-2 py-0.5 bg-slate-100 dark:bg-slate-800 text-slate-500 text-[10px] font-bold rounded">独角兽</span>
      </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-500 dark:text-slate-400">2023-11-18</td>
      <td className="px-6 py-4 whitespace-nowrap text-right text-sm">
      <div className="flex items-center justify-end gap-3">
      <button className="text-primary hover:underline font-medium">详情</button>
      <button className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 material-symbols-outlined text-[18px]">edit</button>
      <button className="text-slate-400 hover:text-red-500 material-symbols-outlined text-[18px]">delete</button>
      </div>
      </td>
      </tr>
      
      <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors">
      <td className="px-6 py-4 whitespace-nowrap">
      <div className="flex items-center gap-3">
      <div className="w-8 h-8 rounded bg-primary/10 flex items-center justify-center text-primary font-bold text-xs">C</div>
      <span className="font-semibold text-slate-900 dark:text-slate-100">深海深地探测工程院</span>
      </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-600 dark:text-slate-400">能源科技</td>
      <td className="px-6 py-4 whitespace-nowrap">
      <div className="flex items-center gap-3">
      <div className="flex-1 w-24 h-1.5 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
      <div className="bg-yellow-500 h-full w-[72%]"></div>
      </div>
      <span className="text-xs font-bold text-slate-700 dark:text-slate-300">72.0</span>
      </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
      <div className="flex gap-1.5">
      <span className="px-2 py-0.5 bg-slate-100 dark:bg-slate-800 text-slate-500 text-[10px] font-bold rounded">重点工程</span>
      </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-500 dark:text-slate-400">2023-11-15</td>
      <td className="px-6 py-4 whitespace-nowrap text-right text-sm">
      <div className="flex items-center justify-end gap-3">
      <button className="text-primary hover:underline font-medium">详情</button>
      <button className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 material-symbols-outlined text-[18px]">edit</button>
      <button className="text-slate-400 hover:text-red-500 material-symbols-outlined text-[18px]">delete</button>
      </div>
      </td>
      </tr>
      
      <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors">
      <td className="px-6 py-4 whitespace-nowrap">
      <div className="flex items-center gap-3">
      <div className="w-8 h-8 rounded bg-primary/10 flex items-center justify-center text-primary font-bold text-xs">D</div>
      <span className="font-semibold text-slate-900 dark:text-slate-100">神经形态计算中心</span>
      </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-600 dark:text-slate-400">人工智能</td>
      <td className="px-6 py-4 whitespace-nowrap">
      <div className="flex items-center gap-3">
      <div className="flex-1 w-24 h-1.5 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
      <div className="bg-green-500 h-full w-[85%]"></div>
      </div>
      <span className="text-xs font-bold text-slate-700 dark:text-slate-300">85.9</span>
      </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
      <div className="flex gap-1.5">
      <span className="px-2 py-0.5 bg-primary/10 text-primary text-[10px] font-bold rounded">前沿领域</span>
      <span className="px-2 py-0.5 bg-slate-100 dark:bg-slate-800 text-slate-500 text-[10px] font-bold rounded">校企合作</span>
      </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-500 dark:text-slate-400">2023-11-12</td>
      <td className="px-6 py-4 whitespace-nowrap text-right text-sm">
      <div className="flex items-center justify-end gap-3">
      <button className="text-primary hover:underline font-medium">详情</button>
      <button className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 material-symbols-outlined text-[18px]">edit</button>
      <button className="text-slate-400 hover:text-red-500 material-symbols-outlined text-[18px]">delete</button>
      </div>
      </td>
      </tr>
      </tbody>
      </table>
      </div>
      </div>
      
      <div className="flex items-center justify-end gap-2 text-sm">
      <span className="text-slate-500 dark:text-slate-400 mr-4">共 1,284 条数据</span>
      <button className="w-8 h-8 flex items-center justify-center rounded-lg border border-slate-200 dark:border-slate-800 text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
      <span className="material-symbols-outlined text-[18px]">chevron_left</span>
      </button>
      <button className="w-8 h-8 flex items-center justify-center rounded-lg bg-primary text-white font-bold">1</button>
      <button className="w-8 h-8 flex items-center justify-center rounded-lg border border-slate-200 dark:border-slate-800 text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">2</button>
      <button className="w-8 h-8 flex items-center justify-center rounded-lg border border-slate-200 dark:border-slate-800 text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">3</button>
      <span className="px-2 text-slate-400">...</span>
      <button className="w-8 h-8 flex items-center justify-center rounded-lg border border-slate-200 dark:border-slate-800 text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">129</button>
      <button className="w-8 h-8 flex items-center justify-center rounded-lg border border-slate-200 dark:border-slate-800 text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
      <span className="material-symbols-outlined text-[18px]">chevron_right</span>
      </button>
      </div>
      </div></div></div></div>
    </div>
  );
}
