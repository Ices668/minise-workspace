import { useNavigate } from "react-router-dom";

export default function TechRoadmapPage() {
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
      <div className="flex h-screen w-full bg-slate-50 overflow-hidden"><aside id="sidebar" className="w-64 bg-white border-r border-slate-200 flex flex-col z-30 shrink-0" style={{ minWidth: "256px" }}><div className="p-5 flex items-center gap-3 border-b border-slate-100"><div className="w-8 h-8 bg-[#0d9488] rounded-lg flex items-center justify-center"><span className="material-symbols-outlined text-white" style={{ fontSize: "20px" }}>insights</span></div><span className="font-bold text-base text-slate-800">GKX</span><a href="/home" onClick={(event) => { event.preventDefault(); navigate("/home"); }} className="ml-auto text-slate-400 hover:text-slate-600" title="返回首页"><span className="material-symbols-outlined" style={{ fontSize: "18px" }}>home</span></a></div><div className="px-4 pt-4 pb-1"><span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">战略咨询体系</span></div><nav className="flex-1 px-2 py-2 overflow-y-auto space-y-0.5"><div className="nav-group"><button onClick={toggleGroup} className="w-full flex items-center gap-3 px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 rounded-lg transition-colors"><span className="material-symbols-outlined text-xl text-slate-400">search_check</span><span className="flex-1 text-left">研究需求分析</span><span className="material-symbols-outlined text-sm text-slate-400 expand-icon">expand_more</span></button><div className="group-children overflow-hidden" style={{ maxHeight: "0", transition: "max-height .25s ease" }}><a href="/strategy/entity-list.html" onClick={(event) => { event.preventDefault(); navigate("/strategy/entity-list.html"); }} className="flex items-center pl-12 pr-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#0d9488] rounded-lg nav-item" data-file="entity-list.html">科技实体清单</a><a href="/strategy/frontier-tech.html" onClick={(event) => { event.preventDefault(); navigate("/strategy/frontier-tech.html"); }} className="flex items-center pl-12 pr-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#0d9488] rounded-lg nav-item" data-file="frontier-tech.html">颠覆性与前沿技术分析</a><a href="/strategy/media-focus.html" onClick={(event) => { event.preventDefault(); navigate("/strategy/media-focus.html"); }} className="flex items-center pl-12 pr-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#0d9488] rounded-lg nav-item" data-file="media-focus.html">媒体聚焦</a></div></div><div className="nav-group"><button onClick={toggleGroup} className="w-full flex items-center gap-3 px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 rounded-lg transition-colors"><span className="material-symbols-outlined text-xl text-slate-400">hub</span><span className="flex-1 text-left">技术体系分析</span><span className="material-symbols-outlined text-sm text-slate-400 expand-icon">expand_more</span></button><div className="group-children overflow-hidden" style={{ maxHeight: "0", transition: "max-height .25s ease" }}><a href="/strategy/tech-system.html" onClick={(event) => { event.preventDefault(); navigate("/strategy/tech-system.html"); }} className="flex items-center pl-12 pr-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#0d9488] rounded-lg nav-item" data-file="tech-system.html">技术体系</a><a href="/strategy/paper-dashboard.html" onClick={(event) => { event.preventDefault(); navigate("/strategy/paper-dashboard.html"); }} className="flex items-center pl-12 pr-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#0d9488] rounded-lg nav-item" data-file="paper-dashboard.html">论文分析</a><a href="/strategy/patent.html" onClick={(event) => { event.preventDefault(); navigate("/strategy/patent.html"); }} className="flex items-center pl-12 pr-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#0d9488] rounded-lg nav-item" data-file="patent.html">专利分析</a><a href="/strategy/project-stats.html" onClick={(event) => { event.preventDefault(); navigate("/strategy/project-stats.html"); }} className="flex items-center pl-12 pr-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#0d9488] rounded-lg nav-item" data-file="project-stats.html">科研项目分析</a><a href="/strategy/social-network-import.html" onClick={(event) => { event.preventDefault(); navigate("/strategy/social-network-import.html"); }} className="flex items-center pl-12 pr-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#0d9488] rounded-lg nav-item" data-file="social-network-import.html">社会网络分析</a></div></div><div className="nav-group"><button onClick={toggleGroup} className="w-full flex items-center gap-3 px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 rounded-lg transition-colors"><span className="material-symbols-outlined text-xl text-slate-400">trending_up</span><span className="flex-1 text-left">技术趋势分析</span><span className="material-symbols-outlined text-sm text-slate-400 expand-icon">expand_more</span></button><div className="group-children overflow-hidden" style={{ maxHeight: "0", transition: "max-height .25s ease" }}><a href="/strategy/clustering-task.html" onClick={(event) => { event.preventDefault(); navigate("/strategy/clustering-task.html"); }} className="flex items-center pl-12 pr-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#0d9488] rounded-lg nav-item" data-file="clustering-task.html">聚类分析</a><a href="/strategy/common-network-task.html" onClick={(event) => { event.preventDefault(); navigate("/strategy/common-network-task.html"); }} className="flex items-center pl-12 pr-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#0d9488] rounded-lg nav-item" data-file="common-network-task.html">共性网络分析</a><a href="/strategy/tech-trend.html" onClick={(event) => { event.preventDefault(); navigate("/strategy/tech-trend.html"); }} className="flex items-center pl-12 pr-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#0d9488] rounded-lg nav-item" data-file="tech-trend.html">技术趋势分析</a><a href="/strategy/tech-alert.html" onClick={(event) => { event.preventDefault(); navigate("/strategy/tech-alert.html"); }} className="flex items-center pl-12 pr-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#0d9488] rounded-lg nav-item" data-file="tech-alert.html">技术动态预警</a></div></div><div className="nav-group"><button onClick={toggleGroup} className="w-full flex items-center gap-3 px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 rounded-lg transition-colors"><span className="material-symbols-outlined text-xl text-slate-400">route</span><span className="flex-1 text-left">领域技术线路</span><span className="material-symbols-outlined text-sm text-slate-400 expand-icon">expand_more</span></button><div className="group-children overflow-hidden" style={{ maxHeight: "0", transition: "max-height .25s ease" }}><a href="/strategy/delphi.html" onClick={(event) => { event.preventDefault(); navigate("/strategy/delphi.html"); }} className="flex items-center pl-12 pr-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#0d9488] rounded-lg nav-item" data-file="delphi.html">德尔菲问卷</a><a href="/strategy/tech-roadmap.html" onClick={(event) => { event.preventDefault(); navigate("/strategy/tech-roadmap.html"); }} className="flex items-center pl-12 pr-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#0d9488] rounded-lg nav-item" data-file="tech-roadmap.html">技术发展线路</a></div></div><div className="nav-group"><button onClick={toggleGroup} className="w-full flex items-center gap-3 px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 rounded-lg transition-colors"><span className="material-symbols-outlined text-xl text-slate-400">description</span><span className="flex-1 text-left">战略咨询报告</span><span className="material-symbols-outlined text-sm text-slate-400 expand-icon">expand_more</span></button><div className="group-children overflow-hidden" style={{ maxHeight: "0", transition: "max-height .25s ease" }}><a href="/strategy/report-generation.html" onClick={(event) => { event.preventDefault(); navigate("/strategy/report-generation.html"); }} className="flex items-center pl-12 pr-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#0d9488] rounded-lg nav-item" data-file="strategy-shell.html">研究报告管理</a><a href="/strategy/insight-publish.html" onClick={(event) => { event.preventDefault(); navigate("/strategy/insight-publish.html"); }} className="flex items-center pl-12 pr-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#0d9488] rounded-lg nav-item" data-file="insight-publish.html">洞察报告发布</a><a href="/strategy/hot-analysis.html" onClick={(event) => { event.preventDefault(); navigate("/strategy/hot-analysis.html"); }} className="flex items-center pl-12 pr-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#0d9488] rounded-lg nav-item" data-file="hot-analysis.html">热点分析</a><a href="/strategy/report-generation.html" onClick={(event) => { event.preventDefault(); navigate("/strategy/report-generation.html"); }} className="flex items-center pl-12 pr-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#0d9488] rounded-lg nav-item" data-file="report-generation.html">战略咨询报告生成</a></div></div><div className="nav-group"><button onClick={toggleGroup} className="w-full flex items-center gap-3 px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 rounded-lg transition-colors"><span className="material-symbols-outlined text-xl text-slate-400">folder_special</span><span className="flex-1 text-left">战略咨询成果</span><span className="material-symbols-outlined text-sm text-slate-400 expand-icon">expand_more</span></button><div className="group-children overflow-hidden" style={{ maxHeight: "0", transition: "max-height .25s ease" }}><a href="/strategy/strategy-cases.html" onClick={(event) => { event.preventDefault(); navigate("/strategy/strategy-cases.html"); }} className="flex items-center pl-12 pr-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#0d9488] rounded-lg nav-item" data-file="strategy-cases.html">战略咨询案例展示</a></div></div><div className="nav-group"><button onClick={toggleGroup} className="w-full flex items-center gap-3 px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 rounded-lg transition-colors"><span className="material-symbols-outlined text-xl text-slate-400">query_stats</span><span className="flex-1 text-left">智能问数</span><span className="material-symbols-outlined text-sm text-slate-400 expand-icon">expand_more</span></button><div className="group-children overflow-hidden" style={{ maxHeight: "0", transition: "max-height .25s ease" }}><a href="/strategy/analysis-start.html" onClick={(event) => { event.preventDefault(); navigate("/strategy/analysis-start.html"); }} className="flex items-center pl-12 pr-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#0d9488] rounded-lg nav-item" data-file="analysis-start.html">开始分析</a><a href="/strategy/case-share.html" onClick={(event) => { event.preventDefault(); navigate("/strategy/case-share.html"); }} className="flex items-center pl-12 pr-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#0d9488] rounded-lg nav-item" data-file="case-share.html">案例分享</a><a href="/strategy/multi-source-data.html" onClick={(event) => { event.preventDefault(); navigate("/strategy/multi-source-data.html"); }} className="flex items-center pl-12 pr-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#0d9488] rounded-lg nav-item" data-file="multi-source-data.html">多源数据接入</a><a href="/strategy/data-dashboard.html" onClick={(event) => { event.preventDefault(); navigate("/strategy/data-dashboard.html"); }} className="flex items-center pl-12 pr-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#0d9488] rounded-lg nav-item" data-file="data-dashboard.html">数据看板显示</a><a href="/strategy/report-gen-ai.html" onClick={(event) => { event.preventDefault(); navigate("/strategy/report-gen-ai.html"); }} className="flex items-center pl-12 pr-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#0d9488] rounded-lg nav-item" data-file="report-gen-ai.html">一键报告生成</a></div></div></nav><div className="p-4 border-t border-slate-100"><div className="bg-slate-50 rounded-xl p-3 flex items-center gap-3"><div className="w-9 h-9 bg-[#0d9488] rounded-lg flex items-center justify-center"><span className="material-symbols-outlined text-white" style={{ fontSize: "18px" }}>manage_accounts</span></div><div><p className="text-xs font-bold text-slate-800">系统管理员</p><p className="text-[10px] text-slate-500">ID: GKX-0822</p></div></div></div></aside><div className="flex-1 flex flex-col min-w-0 overflow-hidden"><header className="h-14 bg-white border-b border-slate-200 flex items-center justify-between px-6 shrink-0"><div className="flex items-center gap-4"><button onClick={toggleSidebar} className="p-1 text-slate-500 hover:bg-slate-100 rounded-lg"><span className="material-symbols-outlined">menu</span></button><h2 className="text-sm font-bold text-slate-800">战略咨询智能支持</h2></div><div className="flex-1 max-w-md mx-6"><div className="relative"><span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" style={{ fontSize: "18px" }}>search</span><input className="w-full pl-9 pr-4 py-1.5 bg-slate-100 rounded-full text-sm placeholder-slate-400 outline-none border-none" placeholder="搜索功能、报告..." type="text"/></div></div><div className="flex items-center gap-2"><button className="p-2 text-slate-500 hover:bg-slate-100 rounded-full relative"><span className="material-symbols-outlined" style={{ fontSize: "22px" }}>notifications</span><span className="absolute top-2 right-2 w-1.5 h-1.5 bg-red-500 rounded-full"></span></button></div></header><div className="flex-1 overflow-y-auto">
      <main className="flex flex-1 overflow-hidden">
      
      <aside className="w-72 bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 flex flex-col">
      <div className="p-4 border-b border-slate-100 dark:border-slate-800">
      <h3 className="text-sm font-bold text-slate-900 dark:text-slate-100 mb-3 flex items-center gap-2">
      <span className="material-symbols-outlined text-primary text-lg">account_tree</span>
                              技术节点清单
                          </h3>
      <div className="relative">
      <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-lg">search</span>
      <input className="w-full pl-10 pr-4 py-2 bg-slate-50 dark:bg-slate-800 border-none rounded-lg text-sm focus:ring-2 focus:ring-primary/50" placeholder="搜索技术节点..." type="text"/>
      </div>
      </div>
      <div className="flex-1 overflow-y-auto p-2 space-y-1">
      
      <div className="mb-4">
      <div className="flex items-center gap-2 p-2 text-xs font-bold text-slate-400 uppercase tracking-wider">基础前沿</div>
      <div className="space-y-1">
      <div className="flex items-center gap-2 p-2 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-lg cursor-grab active:cursor-grabbing border border-transparent hover:border-slate-200 dark:hover:border-slate-700 group">
      <span className="material-symbols-outlined text-primary text-lg">drag_indicator</span>
      <span className="text-sm text-slate-700 dark:text-slate-300">量子芯片架构</span>
      </div>
      <div className="flex items-center gap-2 p-2 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-lg cursor-grab border border-transparent group">
      <span className="material-symbols-outlined text-primary text-lg">drag_indicator</span>
      <span className="text-sm text-slate-700 dark:text-slate-300">超导材料制备</span>
      </div>
      </div>
      </div>
      <div className="mb-4">
      <div className="flex items-center gap-2 p-2 text-xs font-bold text-slate-400 uppercase tracking-wider">核心技术</div>
      <div className="space-y-1">
      <div className="flex items-center gap-2 p-2 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-lg cursor-grab border border-transparent">
      <span className="material-symbols-outlined text-primary text-lg">drag_indicator</span>
      <span className="text-sm text-slate-700 dark:text-slate-300">高密度封装工艺</span>
      </div>
      <div className="flex items-center gap-2 p-2 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-lg cursor-grab border border-transparent">
      <span className="material-symbols-outlined text-primary text-lg">drag_indicator</span>
      <span className="text-sm text-slate-700 dark:text-slate-300">三维异构集成</span>
      </div>
      <div className="flex items-center gap-2 p-2 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-lg cursor-grab border border-transparent">
      <span className="material-symbols-outlined text-primary text-lg">drag_indicator</span>
      <span className="text-sm text-slate-700 dark:text-slate-300">低功耗互连协议</span>
      </div>
      </div>
      </div>
      </div>
      </aside>
      
      <section className="flex-1 overflow-auto bg-slate-50 dark:bg-background-dark p-8">
      <div className="min-w-[1200px] bg-white dark:bg-slate-900 rounded-xl shadow-lg border border-slate-200 dark:border-slate-800 overflow-hidden">
      
      <table className="w-full border-collapse">
      <thead>
      <tr className="bg-slate-50 dark:bg-slate-800/50">
      <th className="w-48 p-4 border-b border-r border-slate-200 dark:border-slate-800">
      <div className="flex flex-col items-center justify-center text-xs text-slate-400 font-medium">
      <span>研发阶段 \ 时间</span>
      </div>
      </th>
      <th className="p-4 border-b border-r border-slate-200 dark:border-slate-800 text-sm font-bold">2025-2027</th>
      <th className="p-4 border-b border-r border-slate-200 dark:border-slate-800 text-sm font-bold">2028-2030</th>
      <th className="p-4 border-b border-slate-200 dark:border-slate-800 text-sm font-bold">2031-2035</th>
      </tr>
      </thead>
      <tbody>
      
      <tr className="h-48">
      <td className="p-4 border-b border-r border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/20 align-middle">
      <div className="flex items-center gap-2 font-bold text-sm text-primary">
      <span className="material-symbols-outlined">science</span>
                                              前沿探索
                                          </div>
      </td>
      <td className="p-4 border-b border-r border-slate-200 dark:border-slate-800 relative">
      <div className="absolute inset-0 grid grid-cols-4 grid-rows-4 opacity-10 pointer-events-none">
      <div className="border-b border-r border-slate-300"></div>
      <div className="border-b border-r border-slate-300"></div>
      </div>
      
      <div className="relative z-10 p-3 bg-white dark:bg-slate-800 border-2 border-primary rounded-lg shadow-sm w-44">
      <div className="text-xs font-bold text-primary mb-1">节点 A-1</div>
      <div className="text-sm font-medium">量子位逻辑验证</div>
      <div className="mt-2 h-1 bg-slate-100 dark:bg-slate-700 rounded-full overflow-hidden">
      <div className="bg-primary h-full w-2/3"></div>
      </div>
      </div>
      </td>
      <td className="p-4 border-b border-r border-slate-200 dark:border-slate-800"></td>
      <td className="p-4 border-b border-slate-200 dark:border-slate-800"></td>
      </tr>
      
      <tr className="h-48">
      <td className="p-4 border-b border-r border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/20 align-middle">
      <div className="flex items-center gap-2 font-bold text-sm text-primary">
      <span className="material-symbols-outlined">engineering</span>
                                              技术突破
                                          </div>
      </td>
      <td className="p-4 border-b border-r border-slate-200 dark:border-slate-800"></td>
      <td className="p-4 border-b border-r border-slate-200 dark:border-slate-800 relative">
      <div className="p-3 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg shadow-sm w-44 mb-4">
      <div className="text-xs font-bold text-slate-400 mb-1">节点 B-2</div>
      <div className="text-sm font-medium">100比特相干控制</div>
      </div>
      
      <div className="absolute left-[-20px] top-1/2 w-10 h-px bg-primary/30"></div>
      </td>
      <td className="p-4 border-b border-slate-200 dark:border-slate-800"></td>
      </tr>
      
      <tr className="h-48">
      <td className="p-4 border-r border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/20 align-middle">
      <div className="flex items-center gap-2 font-bold text-sm text-primary">
      <span className="material-symbols-outlined">factory</span>
                                              产业化应用
                                          </div>
      </td>
      <td className="p-4 border-r border-slate-200 dark:border-slate-800"></td>
      <td className="p-4 border-r border-slate-200 dark:border-slate-800"></td>
      <td className="p-4 relative">
      <div className="p-3 bg-primary text-white rounded-lg shadow-md w-44">
      <div className="text-xs font-bold opacity-80 mb-1">节点 C-1</div>
      <div className="text-sm font-bold">通用量子计算机原型</div>
      <div className="flex justify-between items-center mt-2 text-[10px]">
      <span>完成度 10%</span>
      <span>TRL-7</span>
      </div>
      </div>
      </td>
      </tr>
      </tbody>
      </table>
      </div>
      </section>
      
      <aside className="w-80 bg-white dark:bg-slate-900 border-l border-slate-200 dark:border-slate-800 flex flex-col">
      <div className="p-4 border-b border-slate-100 dark:border-slate-800">
      <h3 className="text-sm font-bold text-slate-900 dark:text-slate-100">节点详情配置</h3>
      </div>
      <div className="flex-1 overflow-y-auto p-5 space-y-4">
      <div className="bg-slate-50 dark:bg-slate-800 rounded-lg p-4">
      <p className="text-xs text-slate-500">选择路线图节点后，在此查看和编辑节点属性。</p>
      </div>
      <button className="w-full py-2.5 bg-primary text-white rounded-xl text-sm font-bold shadow-sm hover:shadow-md transition-all active:scale-[0.98]">应用配置</button>
      </div>
      </aside>
      </main>
      </div>
      
      </div></div>
    </div>
  );
}
