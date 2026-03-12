import { useNavigate } from "react-router-dom";

export default function TechAlertPage() {
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
      
      <nav className="flex items-center gap-2 mb-6">
      <a className="text-primary hover:opacity-80 text-sm font-medium" href="#">新型高端智库系统</a>
      <span className="text-slate-400 dark:text-slate-500 text-sm">/</span>
      <a className="text-primary hover:opacity-80 text-sm font-medium" href="#">战略咨询智能支持</a>
      <span className="text-slate-400 dark:text-slate-500 text-sm">/</span>
      <a className="text-primary hover:opacity-80 text-sm font-medium" href="#">技术趋势分析</a>
      <span className="text-slate-400 dark:text-slate-500 text-sm">/</span>
      <span className="text-slate-600 dark:text-slate-400 text-sm font-medium">技术动态预警</span>
      </nav>
      
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
      <h1 className="text-3xl font-black tracking-tight text-slate-900 dark:text-slate-50">技术动态预警</h1>
      <div className="flex items-center gap-3">
      <button className="flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary hover:bg-primary/20 rounded-lg font-bold text-sm transition-colors">
      <span className="material-symbols-outlined text-lg">settings</span>
                          规则配置
                      </button>
      <button className="flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary hover:bg-primary/20 rounded-lg font-bold text-sm transition-colors">
      <span className="material-symbols-outlined text-lg">ios_share</span>
                          一键导出
                      </button>
      <button className="flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary hover:bg-primary/20 rounded-lg font-bold text-sm transition-colors">
      <span className="material-symbols-outlined text-lg">refresh</span>
                          刷新
                      </button>
      </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      <div className="bg-white dark:bg-slate-800 p-6 rounded-lg border border-slate-200 dark:border-slate-700 shadow-sm">
      <p className="text-slate-500 dark:text-slate-400 text-sm font-medium mb-2">今日新增预警</p>
      <div className="flex items-end gap-2">
      <span className="text-3xl font-bold text-slate-900 dark:text-white">12</span>
      <span className="text-emerald-500 text-sm font-medium mb-1">↑ 20%</span>
      </div>
      </div>
      <div className="bg-white dark:bg-slate-800 p-6 rounded-lg border border-slate-200 dark:border-slate-700 shadow-sm">
      <p className="text-slate-500 dark:text-slate-400 text-sm font-medium mb-2">待处理预警</p>
      <div className="flex items-end gap-2">
      <span className="text-3xl font-bold text-slate-900 dark:text-white">28</span>
      <span className="text-amber-500 text-sm font-medium mb-1">需关注</span>
      </div>
      </div>
      <div className="bg-white dark:bg-slate-800 p-6 rounded-lg border border-slate-200 dark:border-slate-700 shadow-sm">
      <p className="text-slate-500 dark:text-slate-400 text-sm font-medium mb-2">本月高危预警数</p>
      <div className="flex items-end gap-2">
      <span className="text-3xl font-bold text-slate-900 dark:text-white">156</span>
      <span className="text-rose-500 text-sm font-medium mb-1">↑ 8.4%</span>
      </div>
      </div>
      </div>
      
      <div className="bg-white dark:bg-slate-800 p-6 rounded-lg border border-slate-200 dark:border-slate-700 shadow-sm mb-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
      <div className="relative">
      <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">search</span>
      <input className="w-full pl-10 pr-4 py-2 bg-background-light dark:bg-slate-900 border-none rounded-full text-sm focus:ring-2 focus:ring-primary/50" placeholder="搜索技术名称..." type="text"/>
      </div>
      <select className="w-full px-4 py-2 bg-background-light dark:bg-slate-900 border-none rounded-full text-sm focus:ring-2 focus:ring-primary/50">
      <option value="">预警级别 (高/中/低)</option>
      <option>高</option>
      <option>中</option>
      <option>低</option>
      </select>
      <select className="w-full px-4 py-2 bg-background-light dark:bg-slate-900 border-none rounded-full text-sm focus:ring-2 focus:ring-primary/50">
      <option value="">预警类型</option>
      <option>增速异常</option>
      <option>突破性成果</option>
      <option>风险预警</option>
      </select>
      <div className="flex gap-2">
      <select className="flex-1 px-4 py-2 bg-background-light dark:bg-slate-900 border-none rounded-full text-sm focus:ring-2 focus:ring-primary/50">
      <option value="">处理状态</option>
      <option>待处理</option>
      <option>处理中</option>
      <option>已完成</option>
      </select>
      <button className="px-6 py-2 bg-primary text-white font-bold rounded-full text-sm hover:opacity-90">查询</button>
      <button className="px-6 py-2 bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-200 font-bold rounded-full text-sm hover:opacity-90">重置</button>
      </div>
      </div>
      </div>
      
      <div className="space-y-8">
      
      <div className="bg-white dark:bg-slate-800 p-6 rounded-lg border border-slate-200 dark:border-slate-700 shadow-sm">
      <div className="flex items-center justify-between mb-6">
      <h3 className="text-lg font-bold text-slate-900 dark:text-white">预警趋势分布图</h3>
      <div className="flex items-center gap-4">
      <span className="flex items-center gap-1 text-xs text-slate-500"><span className="w-3 h-3 rounded-full bg-rose-500"></span> 高危</span>
      <span className="flex items-center gap-1 text-xs text-slate-500"><span className="w-3 h-3 rounded-full bg-amber-500"></span> 中等</span>
      <span className="flex items-center gap-1 text-xs text-slate-500"><span className="w-3 h-3 rounded-full bg-blue-500"></span> 一般</span>
      </div>
      </div>
      <div className="h-64 w-full bg-gradient-to-b from-primary/5 to-transparent rounded-lg relative overflow-hidden flex flex-col justify-end">
      
      <div className="absolute inset-0 flex items-end px-4 gap-2">
      <div className="flex-1 bg-primary/20 rounded-t-sm h-[40%]"></div>
      <div className="flex-1 bg-primary/20 rounded-t-sm h-[55%]"></div>
      <div className="flex-1 bg-primary/40 rounded-t-sm h-[45%]"></div>
      <div className="flex-1 bg-primary/30 rounded-t-sm h-[70%]"></div>
      <div className="flex-1 bg-primary/50 rounded-t-sm h-[60%] border-t-2 border-primary"></div>
      <div className="flex-1 bg-primary/60 rounded-t-sm h-[85%] border-t-2 border-primary"></div>
      <div className="flex-1 bg-primary/40 rounded-t-sm h-[65%]"></div>
      <div className="flex-1 bg-primary/30 rounded-t-sm h-[50%]"></div>
      <div className="flex-1 bg-primary/20 rounded-t-sm h-[40%]"></div>
      <div className="flex-1 bg-primary/10 rounded-t-sm h-[30%]"></div>
      </div>
      
      <div className="flex justify-between px-2 py-2 border-t border-slate-100 dark:border-slate-700 text-[10px] text-slate-400">
      <span>06-01</span><span>06-05</span><span>06-10</span><span>06-15</span><span>06-20</span><span>06-25</span><span>06-30</span>
      </div>
      </div>
      </div>
      
      <div className="bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 shadow-sm overflow-hidden">
      <div className="p-6 border-b border-slate-100 dark:border-slate-700">
      <h3 className="text-lg font-bold text-slate-900 dark:text-white">预警事件列表</h3>
      </div>
      <div className="overflow-x-auto">
      <table className="w-full text-left border-collapse">
      <thead>
      <tr className="bg-slate-50 dark:bg-slate-900/50">
      <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase">预警等级</th>
      <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase">时间</th>
      <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase">技术领域</th>
      <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase">预警内容摘要</th>
      <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase">预警类型</th>
      <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase">状态</th>
      <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase">操作</th>
      </tr>
      </thead>
      <tbody className="divide-y divide-slate-100 dark:divide-slate-700">
      
      <tr className="hover:bg-slate-50 dark:hover:bg-slate-900/30 transition-colors">
      <td className="px-6 py-4">
      <span className="px-2 py-1 rounded bg-rose-100 dark:bg-rose-900/30 text-rose-600 dark:text-rose-400 text-xs font-bold">高</span>
      </td>
      <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-400">2023-10-24 14:20</td>
      <td className="px-6 py-4 text-sm font-medium text-slate-900 dark:text-slate-200">量子计算</td>
      <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-400 max-w-xs truncate">某实验室宣布实现1000位逻辑量子比特纠缠...</td>
      <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-400">突破性成果</td>
      <td className="px-6 py-4">
      <span className="flex items-center gap-1.5 text-xs font-medium text-amber-600">
      <span className="w-1.5 h-1.5 rounded-full bg-amber-600"></span> 待处理
                                          </span>
      </td>
      <td className="px-6 py-4 text-sm">
      <div className="flex gap-3 text-primary font-bold">
      <button className="hover:underline">详情</button>
      <button className="hover:underline">处理</button>
      <button className="text-slate-400 hover:text-slate-600">忽略</button>
      </div>
      </td>
      </tr>
      
      <tr className="hover:bg-slate-50 dark:hover:bg-slate-900/30 transition-colors">
      <td className="px-6 py-4">
      <span className="px-2 py-1 rounded bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400 text-xs font-bold">中</span>
      </td>
      <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-400">2023-10-24 10:05</td>
      <td className="px-6 py-4 text-sm font-medium text-slate-900 dark:text-slate-200">固态电池</td>
      <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-400 max-w-xs truncate">专利申请量环比增长300%，行业热度极速上升...</td>
      <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-400">增速异常</td>
      <td className="px-6 py-4">
      <span className="flex items-center gap-1.5 text-xs font-medium text-blue-600">
      <span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span> 处理中
                                          </span>
      </td>
      <td className="px-6 py-4 text-sm">
      <div className="flex gap-3 text-primary font-bold">
      <button className="hover:underline">详情</button>
      <button className="hover:underline">处理</button>
      <button className="text-slate-400 hover:text-slate-600">忽略</button>
      </div>
      </td>
      </tr>
      
      <tr className="hover:bg-slate-50 dark:hover:bg-slate-900/30 transition-colors">
      <td className="px-6 py-4">
      <span className="px-2 py-1 rounded bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-xs font-bold">低</span>
      </td>
      <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-400">2023-10-23 16:45</td>
      <td className="px-6 py-4 text-sm font-medium text-slate-900 dark:text-slate-200">生成式AI</td>
      <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-400 max-w-xs truncate">开源模型社区活跃度异常，可能存在合规性风险...</td>
      <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-400">风险预警</td>
      <td className="px-6 py-4">
      <span className="flex items-center gap-1.5 text-xs font-medium text-slate-400">
      <span className="w-1.5 h-1.5 rounded-full bg-slate-400"></span> 已完成
                                          </span>
      </td>
      <td className="px-6 py-4 text-sm">
      <div className="flex gap-3 text-primary font-bold">
      <button className="hover:underline">详情</button>
      <span className="text-slate-300">|</span>
      <button className="text-slate-400">已存档</button>
      </div>
      </td>
      </tr>
      </tbody>
      </table>
      </div>
      
      <div className="p-6 border-t border-slate-100 dark:border-slate-700 flex items-center justify-between">
      <p className="text-xs text-slate-500">共 156 条记录，显示第 1-3 条</p>
      <div className="flex gap-2">
      <button className="p-1 rounded hover:bg-slate-100 dark:hover:bg-slate-700"><span className="material-symbols-outlined text-sm">chevron_left</span></button>
      <button className="px-3 py-1 bg-primary text-white text-xs font-bold rounded">1</button>
      <button className="px-3 py-1 hover:bg-slate-100 dark:hover:bg-slate-700 text-xs rounded">2</button>
      <button className="px-3 py-1 hover:bg-slate-100 dark:hover:bg-slate-700 text-xs rounded">3</button>
      <button className="p-1 rounded hover:bg-slate-100 dark:hover:bg-slate-700"><span className="material-symbols-outlined text-sm">chevron_right</span></button>
      </div>
      </div>
      </div>
      </div>
      </div></div></div></div>
    </div>
  );
}
