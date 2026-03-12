import { useNavigate } from "react-router-dom";

export default function FrontierTechPage() {
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
      
      <nav className="flex items-center gap-2 mb-6 text-sm font-medium text-slate-500 dark:text-slate-400">
      <a className="hover:text-primary transition-colors" href="#">新型高端智库系统</a>
      <span className="material-symbols-outlined text-sm">chevron_right</span>
      <a className="hover:text-primary transition-colors" href="#">战略咨询智能支持</a>
      <span className="material-symbols-outlined text-sm">chevron_right</span>
      <a className="hover:text-primary transition-colors" href="#">研究需求分析</a>
      <span className="material-symbols-outlined text-sm">chevron_right</span>
      <span className="text-slate-900 dark:text-slate-100">颠覆性与前沿技术分析</span>
      </nav>
      
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
      <h1 className="text-3xl font-black tracking-tight text-slate-900 dark:text-white">颠覆性与前沿技术分析</h1>
      <div className="flex items-center gap-3">
      <button className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-sm font-bold text-slate-700 dark:text-slate-200 hover:bg-slate-50 transition-all shadow-sm">
      <span className="material-symbols-outlined text-lg">refresh</span>
      <span>刷新数据</span>
      </button>
      <button className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-sm font-bold text-slate-700 dark:text-slate-200 hover:bg-slate-50 transition-all shadow-sm">
      <span className="material-symbols-outlined text-lg">ios_share</span>
      <span>导出报告</span>
      </button>
      <button className="flex items-center gap-2 px-5 py-2 bg-primary text-white rounded-lg text-sm font-bold hover:opacity-90 transition-all shadow-md shadow-primary/20">
      <span className="material-symbols-outlined text-lg">add</span>
      <span>新建技术识别</span>
      </button>
      </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
      <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-slate-100 dark:border-slate-700 shadow-sm">
      <div className="flex items-center justify-between mb-2">
      <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">识别技术总数</p>
      <span className="material-symbols-outlined text-primary/40">rocket_launch</span>
      </div>
      <div className="flex items-baseline gap-2">
      <p className="text-2xl font-bold text-slate-900 dark:text-white">1,284</p>
      <p className="text-emerald-500 text-xs font-bold">+5.2%</p>
      </div>
      </div>
      <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-slate-100 dark:border-slate-700 shadow-sm">
      <div className="flex items-center justify-between mb-2">
      <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">颠覆性指数均值</p>
      <span className="material-symbols-outlined text-primary/40">trending_up</span>
      </div>
      <div className="flex items-baseline gap-2">
      <p className="text-2xl font-bold text-slate-900 dark:text-white">85.2</p>
      <p className="text-emerald-500 text-xs font-bold">+1.2%</p>
      </div>
      </div>
      <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-slate-100 dark:border-slate-700 shadow-sm">
      <div className="flex items-center justify-between mb-2">
      <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">本月新增趋势</p>
      <span className="material-symbols-outlined text-primary/40">new_releases</span>
      </div>
      <div className="flex items-baseline gap-2">
      <p className="text-2xl font-bold text-slate-900 dark:text-white">12.5%</p>
      <p className="text-emerald-500 text-xs font-bold">↑ 提升</p>
      </div>
      </div>
      <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-slate-100 dark:border-slate-700 shadow-sm">
      <div className="flex items-center justify-between mb-2">
      <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">重点关注领域</p>
      <span className="material-symbols-outlined text-primary/40">center_focus_strong</span>
      </div>
      <div className="flex items-baseline gap-2">
      <p className="text-2xl font-bold text-slate-900 dark:text-white">人工智能</p>
      <p className="text-slate-400 text-xs font-medium">Top 1</p>
      </div>
      </div>
      </div>
      
      <div className="mb-6 border-b border-slate-200 dark:border-slate-700">
      <nav className="flex gap-8">
      <button className="pb-4 text-sm font-bold border-b-2 border-primary text-primary transition-all">
                          技术识别清单
                      </button>
      <button className="pb-4 text-sm font-bold border-b-2 border-transparent text-slate-500 dark:text-slate-400 hover:text-primary transition-all">
                          关联分析网络
                      </button>
      <button className="pb-4 text-sm font-bold border-b-2 border-transparent text-slate-500 dark:text-slate-400 hover:text-primary transition-all">
                          趋势洞察
                      </button>
      </nav>
      </div>
      
      <div className="bg-white dark:bg-slate-800 rounded-xl p-6 mb-6 shadow-sm border border-slate-100 dark:border-slate-700">
      <div className="flex flex-wrap items-center gap-4">
      <div className="flex-1 min-w-[300px] relative">
      <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">search</span>
      <input className="w-full pl-10 pr-4 py-2 bg-slate-50 dark:bg-slate-900 border-none rounded-full text-sm focus:ring-2 focus:ring-primary/50 transition-all" placeholder="搜索技术名称、关键词或参与方..." type="text"/>
      </div>
      <div className="flex items-center gap-3">
      <select className="bg-slate-50 dark:bg-slate-900 border-none rounded-lg text-sm px-4 py-2 focus:ring-2 focus:ring-primary/50">
      <option>所属领域</option>
      <option>人工智能</option>
      <option>量子计算</option>
      <option>生物工程</option>
      </select>
      <select className="bg-slate-50 dark:bg-slate-900 border-none rounded-lg text-sm px-4 py-2 focus:ring-2 focus:ring-primary/50">
      <option>成熟度</option>
      <option>基础研究</option>
      <option>应用原型</option>
      <option>商业化</option>
      </select>
      <select className="bg-slate-50 dark:bg-slate-900 border-none rounded-lg text-sm px-4 py-2 focus:ring-2 focus:ring-primary/50">
      <option>热度等级</option>
      <option>极高</option>
      <option>高</option>
      <option>中</option>
      </select>
      <button className="px-6 py-2 bg-primary text-white rounded-lg text-sm font-bold hover:opacity-90">查询</button>
      <button className="px-6 py-2 bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-200 rounded-lg text-sm font-bold hover:bg-slate-200">重置</button>
      </div>
      </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
      
      <div className="lg:col-span-2 bg-white dark:bg-slate-800 rounded-xl p-6 border border-slate-100 dark:border-slate-700 shadow-sm flex flex-col">
      <div className="flex items-center justify-between mb-4">
      <h3 className="font-bold text-slate-800 dark:text-white flex items-center gap-2">
      <span className="material-symbols-outlined text-primary">analytics</span>
                              技术维度综合评估
                          </h3>
      <div className="flex gap-2">
      <span className="flex items-center gap-1 text-xs text-slate-500"><span className="w-2 h-2 rounded-full bg-primary"></span> 颠覆性</span>
      <span className="flex items-center gap-1 text-xs text-slate-500"><span className="w-2 h-2 rounded-full bg-slate-300"></span> 平均水平</span>
      </div>
      </div>
      <div className="flex-1 flex items-center justify-center min-h-[300px] relative">
      <div className="w-64 h-64 rounded-full border-[12px] border-primary/10 relative flex items-center justify-center">
      <div className="w-48 h-48 rounded-full border-[1px] border-primary/20 flex items-center justify-center">
      <div className="w-32 h-32 rounded-full border-[1px] border-primary/40 flex items-center justify-center">
      <div className="w-4 h-4 bg-primary rounded-full shadow-lg shadow-primary/50"></div>
      </div>
      </div>
      
      <div className="absolute inset-0 flex items-center justify-center">
      <div className="w-full h-px bg-slate-100 dark:bg-slate-700 rotate-45"></div>
      <div className="w-full h-px bg-slate-100 dark:bg-slate-700 -rotate-45"></div>
      <div className="w-px h-full bg-slate-100 dark:bg-slate-700"></div>
      </div>
      <span className="absolute -top-6 text-[10px] font-bold text-slate-400">技术热度</span>
      <span className="absolute -bottom-6 text-[10px] font-bold text-slate-400">资源投入</span>
      <span className="absolute -right-8 text-[10px] font-bold text-slate-400">市场潜力</span>
      <span className="absolute -left-8 text-[10px] font-bold text-slate-400">成熟度</span>
      </div>
      <div className="absolute bottom-4 right-4 text-xs text-slate-400 italic">可视化分析引擎生成的雷达图</div>
      </div>
      </div>
      
      <div className="bg-white dark:bg-slate-800 rounded-xl p-6 border border-slate-100 dark:border-slate-700 shadow-sm">
      <h3 className="font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-2">
      <span className="material-symbols-outlined text-amber-500">local_fire_department</span>
                          Top 5 热点技术
                      </h3>
      <div className="space-y-5">
      <div className="flex items-center gap-4">
      <span className="w-6 h-6 flex items-center justify-center rounded bg-primary text-white text-xs font-bold italic">1</span>
      <div className="flex-1">
      <p className="text-sm font-bold text-slate-800 dark:text-slate-100">生成式大模型</p>
      <div className="w-full bg-slate-100 dark:bg-slate-700 h-1 rounded-full mt-1">
      <div className="bg-primary h-1 rounded-full w-[94%]"></div>
      </div>
      </div>
      <span className="text-xs font-bold text-slate-400">94.8</span>
      </div>
      <div className="flex items-center gap-4">
      <span className="w-6 h-6 flex items-center justify-center rounded bg-primary/60 text-white text-xs font-bold italic">2</span>
      <div className="flex-1">
      <p className="text-sm font-bold text-slate-800 dark:text-slate-100">光子计算芯片</p>
      <div className="w-full bg-slate-100 dark:bg-slate-700 h-1 rounded-full mt-1">
      <div className="bg-primary/80 h-1 rounded-full w-[88%]"></div>
      </div>
      </div>
      <span className="text-xs font-bold text-slate-400">88.2</span>
      </div>
      <div className="flex items-center gap-4">
      <span className="w-6 h-6 flex items-center justify-center rounded bg-primary/40 text-white text-xs font-bold italic">3</span>
      <div className="flex-1">
      <p className="text-sm font-bold text-slate-800 dark:text-slate-100">CRISPR基因编辑</p>
      <div className="w-full bg-slate-100 dark:bg-slate-700 h-1 rounded-full mt-1">
      <div className="bg-primary/60 h-1 rounded-full w-[82%]"></div>
      </div>
      </div>
      <span className="text-xs font-bold text-slate-400">82.5</span>
      </div>
      <div className="flex items-center gap-4">
      <span className="w-6 h-6 flex items-center justify-center rounded bg-slate-100 dark:bg-slate-700 text-slate-400 text-xs font-bold italic">4</span>
      <div className="flex-1">
      <p className="text-sm font-bold text-slate-800 dark:text-slate-100">固态电池技术</p>
      <div className="w-full bg-slate-100 dark:bg-slate-700 h-1 rounded-full mt-1">
      <div className="bg-primary/40 h-1 rounded-full w-[76%]"></div>
      </div>
      </div>
      <span className="text-xs font-bold text-slate-400">76.1</span>
      </div>
      <div className="flex items-center gap-4">
      <span className="w-6 h-6 flex items-center justify-center rounded bg-slate-100 dark:bg-slate-700 text-slate-400 text-xs font-bold italic">5</span>
      <div className="flex-1">
      <p className="text-sm font-bold text-slate-800 dark:text-slate-100">边缘智能计算</p>
      <div className="w-full bg-slate-100 dark:bg-slate-700 h-1 rounded-full mt-1">
      <div className="bg-primary/30 h-1 rounded-full w-[65%]"></div>
      </div>
      </div>
      <span className="text-xs font-bold text-slate-400">65.4</span>
      </div>
      </div>
      </div>
      </div>
      
      <div className="flex items-center justify-between mb-4">
      <div className="flex items-center gap-2">
      <button className="p-2 bg-white dark:bg-slate-800 rounded border border-slate-200 dark:border-slate-700 text-primary">
      <span className="material-symbols-outlined text-xl">view_list</span>
      </button>
      <button className="p-2 bg-white dark:bg-slate-800 rounded border border-slate-200 dark:border-slate-700 text-slate-400">
      <span className="material-symbols-outlined text-xl">grid_view</span>
      </button>
      <span className="text-sm text-slate-500 ml-4">共找到 1,284 条相关技术</span>
      </div>
      <div className="flex items-center gap-2">
      <button className="flex items-center gap-1 px-3 py-1.5 text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-primary transition-all">
      <span className="material-symbols-outlined text-lg">upload</span>
                          批量导入
                      </button>
      <button className="flex items-center gap-1 px-3 py-1.5 text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-primary transition-all">
      <span className="material-symbols-outlined text-lg">download</span>
                          导出
                      </button>
      </div>
      </div>
      
      <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700 overflow-hidden">
      <div className="overflow-x-auto">
      <table className="w-full text-left border-collapse">
      <thead>
      <tr className="bg-slate-50 dark:bg-slate-900/50 border-b border-slate-100 dark:border-slate-700">
      <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">技术名称</th>
      <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">所属领域</th>
      <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">颠覆性指标</th>
      <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">成熟度</th>
      <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">活跃参与方</th>
      <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">更新时间</th>
      <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider text-right">操作</th>
      </tr>
      </thead>
      <tbody className="divide-y divide-slate-100 dark:divide-slate-700">
      <tr className="hover:bg-slate-50 dark:hover:bg-slate-900/30 transition-colors">
      <td className="px-6 py-4">
      <div className="flex items-center gap-3">
      <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
      <span className="material-symbols-outlined text-primary text-sm">neurology</span>
      </div>
      <span className="text-sm font-bold text-slate-800 dark:text-slate-100">生成式预训练 Transformer</span>
      </div>
      </td>
      <td className="px-6 py-4">
      <span className="px-2 py-1 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 text-xs font-bold rounded">人工智能</span>
      </td>
      <td className="px-6 py-4">
      <div className="flex items-center gap-2">
      <span className="text-sm font-bold text-slate-800 dark:text-slate-100">95.2</span>
      <div className="w-12 bg-slate-100 dark:bg-slate-700 h-1 rounded-full">
      <div className="bg-emerald-500 h-1 rounded-full w-[95%]"></div>
      </div>
      </div>
      </td>
      <td className="px-6 py-4">
      <span className="text-sm text-slate-600 dark:text-slate-400">应用原型阶段</span>
      </td>
      <td className="px-6 py-4">
      <div className="flex -space-x-2 overflow-hidden">
      <div className="w-6 h-6 rounded-full bg-slate-200 border-2 border-white dark:border-slate-800 flex items-center justify-center text-[10px] font-bold">O</div>
      <div className="w-6 h-6 rounded-full bg-slate-300 border-2 border-white dark:border-slate-800 flex items-center justify-center text-[10px] font-bold">G</div>
      <div className="w-6 h-6 rounded-full bg-slate-400 border-2 border-white dark:border-slate-800 flex items-center justify-center text-[10px] font-bold">M</div>
      </div>
      </td>
      <td className="px-6 py-4 text-sm text-slate-500">2023-11-24</td>
      <td className="px-6 py-4 text-right">
      <div className="flex justify-end gap-3">
      <button className="text-primary hover:underline text-sm font-bold">查看详情</button>
      <button className="text-slate-400 hover:text-primary transition-colors">
      <span className="material-symbols-outlined text-lg">share</span>
      </button>
      </div>
      </td>
      </tr>
      <tr className="hover:bg-slate-50 dark:hover:bg-slate-900/30 transition-colors">
      <td className="px-6 py-4">
      <div className="flex items-center gap-3">
      <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
      <span className="material-symbols-outlined text-primary text-sm">fluorescent</span>
      </div>
      <span className="text-sm font-bold text-slate-800 dark:text-slate-100">可调控超构透镜</span>
      </div>
      </td>
      <td className="px-6 py-4">
      <span className="px-2 py-1 bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400 text-xs font-bold rounded">先进光学</span>
      </td>
      <td className="px-6 py-4">
      <div className="flex items-center gap-2">
      <span className="text-sm font-bold text-slate-800 dark:text-slate-100">82.1</span>
      <div className="w-12 bg-slate-100 dark:bg-slate-700 h-1 rounded-full">
      <div className="bg-amber-500 h-1 rounded-full w-[82%]"></div>
      </div>
      </div>
      </td>
      <td className="px-6 py-4">
      <span className="text-sm text-slate-600 dark:text-slate-400">基础研究阶段</span>
      </td>
      <td className="px-6 py-4">
      <div className="flex -space-x-2 overflow-hidden">
      <div className="w-6 h-6 rounded-full bg-slate-200 border-2 border-white dark:border-slate-800 flex items-center justify-center text-[10px] font-bold">H</div>
      <div className="w-6 h-6 rounded-full bg-slate-300 border-2 border-white dark:border-slate-800 flex items-center justify-center text-[10px] font-bold">S</div>
      </div>
      </td>
      <td className="px-6 py-4 text-sm text-slate-500">2023-11-20</td>
      <td className="px-6 py-4 text-right">
      <div className="flex justify-end gap-3">
      <button className="text-primary hover:underline text-sm font-bold">查看详情</button>
      <button className="text-slate-400 hover:text-primary transition-colors">
      <span className="material-symbols-outlined text-lg">share</span>
      </button>
      </div>
      </td>
      </tr>
      <tr className="hover:bg-slate-50 dark:hover:bg-slate-900/30 transition-colors">
      <td className="px-6 py-4">
      <div className="flex items-center gap-3">
      <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
      <span className="material-symbols-outlined text-primary text-sm">battery_charging_full</span>
      </div>
      <span className="text-sm font-bold text-slate-800 dark:text-slate-100">无负极全固态电池</span>
      </div>
      </td>
      <td className="px-6 py-4">
      <span className="px-2 py-1 bg-orange-50 dark:bg-orange-900/20 text-orange-600 dark:text-orange-400 text-xs font-bold rounded">能源科技</span>
      </td>
      <td className="px-6 py-4">
      <div className="flex items-center gap-2">
      <span className="text-sm font-bold text-slate-800 dark:text-slate-100">78.4</span>
      <div className="w-12 bg-slate-100 dark:bg-slate-700 h-1 rounded-full">
      <div className="bg-amber-400 h-1 rounded-full w-[78%]"></div>
      </div>
      </div>
      </td>
      <td className="px-6 py-4">
      <span className="text-sm text-slate-600 dark:text-slate-400">工程示范阶段</span>
      </td>
      <td className="px-6 py-4">
      <div className="flex -space-x-2 overflow-hidden">
      <div className="w-6 h-6 rounded-full bg-slate-200 border-2 border-white dark:border-slate-800 flex items-center justify-center text-[10px] font-bold">T</div>
      <div className="w-6 h-6 rounded-full bg-slate-300 border-2 border-white dark:border-slate-800 flex items-center justify-center text-[10px] font-bold">B</div>
      <div className="w-6 h-6 rounded-full bg-slate-400 border-2 border-white dark:border-slate-800 flex items-center justify-center text-[10px] font-bold">P</div>
      </div>
      </td>
      <td className="px-6 py-4 text-sm text-slate-500">2023-11-18</td>
      <td className="px-6 py-4 text-right">
      <div className="flex justify-end gap-3">
      <button className="text-primary hover:underline text-sm font-bold">查看详情</button>
      <button className="text-slate-400 hover:text-primary transition-colors">
      <span className="material-symbols-outlined text-lg">share</span>
      </button>
      </div>
      </td>
      </tr>
      </tbody>
      </table>
      </div>
      
      <div className="px-6 py-4 bg-slate-50 dark:bg-slate-900/50 flex items-center justify-between">
      <p className="text-sm text-slate-500">显示第 1 至 10 条，共 1,284 条数据</p>
      <div className="flex gap-1">
      <button className="w-8 h-8 rounded flex items-center justify-center border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-400">
      <span className="material-symbols-outlined text-base">chevron_left</span>
      </button>
      <button className="w-8 h-8 rounded flex items-center justify-center border border-primary bg-primary text-white text-sm font-bold">1</button>
      <button className="w-8 h-8 rounded flex items-center justify-center border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-sm hover:bg-slate-50">2</button>
      <button className="w-8 h-8 rounded flex items-center justify-center border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-sm hover:bg-slate-50">3</button>
      <span className="px-2 flex items-end">...</span>
      <button className="w-8 h-8 rounded flex items-center justify-center border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-sm hover:bg-slate-50">129</button>
      <button className="w-8 h-8 rounded flex items-center justify-center border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-400">
      <span className="material-symbols-outlined text-base">chevron_right</span>
      </button>
      </div>
      </div>
      </div>
      </div></div></div></div>
    </div>
  );
}
