import { useNavigate } from "react-router-dom";

export default function ReportGenerationPage() {
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
      <div className="flex h-screen w-full bg-slate-50 overflow-hidden"><aside id="sidebar" className="w-64 bg-white border-r border-slate-200 flex flex-col z-30 shrink-0" style={{ minWidth: "256px" }}><div className="p-5 flex items-center gap-3 border-b border-slate-100"><div className="w-8 h-8 bg-[#0d9488] rounded-lg flex items-center justify-center"><span className="material-symbols-outlined text-white" style={{ fontSize: "20px" }}>insights</span></div><span className="font-bold text-base text-slate-800">GKX</span><a href="/home" onClick={(event) => { event.preventDefault(); navigate("/home"); }} className="ml-auto text-slate-400 hover:text-slate-600" title="返回首页"><span className="material-symbols-outlined" style={{ fontSize: "18px" }}>home</span></a></div><div className="px-4 pt-4 pb-1"><span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">战略咨询体系</span></div><nav className="flex-1 px-2 py-2 overflow-y-auto space-y-0.5"><div className="nav-group"><button onClick={toggleGroup} className="w-full flex items-center gap-3 px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 rounded-lg transition-colors"><span className="material-symbols-outlined text-xl text-slate-400">search_check</span><span className="flex-1 text-left">研究需求分析</span><span className="material-symbols-outlined text-sm text-slate-400 expand-icon">expand_more</span></button><div className="group-children overflow-hidden" style={{ maxHeight: "0", transition: "max-height .25s ease" }}><a href="/strategy/entity-list.html" onClick={(event) => { event.preventDefault(); navigate("/strategy/entity-list.html"); }} className="flex items-center pl-12 pr-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#0d9488] rounded-lg nav-item" data-file="entity-list.html">科技实体清单</a><a href="/strategy/frontier-tech.html" onClick={(event) => { event.preventDefault(); navigate("/strategy/frontier-tech.html"); }} className="flex items-center pl-12 pr-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#0d9488] rounded-lg nav-item" data-file="frontier-tech.html">颠覆性与前沿技术分析</a><a href="/strategy/media-focus.html" onClick={(event) => { event.preventDefault(); navigate("/strategy/media-focus.html"); }} className="flex items-center pl-12 pr-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#0d9488] rounded-lg nav-item" data-file="media-focus.html">媒体聚焦</a></div></div><div className="nav-group"><button onClick={toggleGroup} className="w-full flex items-center gap-3 px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 rounded-lg transition-colors"><span className="material-symbols-outlined text-xl text-slate-400">hub</span><span className="flex-1 text-left">技术体系分析</span><span className="material-symbols-outlined text-sm text-slate-400 expand-icon">expand_more</span></button><div className="group-children overflow-hidden" style={{ maxHeight: "0", transition: "max-height .25s ease" }}><a href="/strategy/tech-system.html" onClick={(event) => { event.preventDefault(); navigate("/strategy/tech-system.html"); }} className="flex items-center pl-12 pr-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#0d9488] rounded-lg nav-item" data-file="tech-system.html">技术体系</a><a href="/strategy/paper-dashboard.html" onClick={(event) => { event.preventDefault(); navigate("/strategy/paper-dashboard.html"); }} className="flex items-center pl-12 pr-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#0d9488] rounded-lg nav-item" data-file="paper-dashboard.html">论文分析</a><a href="/strategy/patent.html" onClick={(event) => { event.preventDefault(); navigate("/strategy/patent.html"); }} className="flex items-center pl-12 pr-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#0d9488] rounded-lg nav-item" data-file="patent.html">专利分析</a><a href="/strategy/project-stats.html" onClick={(event) => { event.preventDefault(); navigate("/strategy/project-stats.html"); }} className="flex items-center pl-12 pr-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#0d9488] rounded-lg nav-item" data-file="project-stats.html">科研项目分析</a><a href="/strategy/social-network-import.html" onClick={(event) => { event.preventDefault(); navigate("/strategy/social-network-import.html"); }} className="flex items-center pl-12 pr-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#0d9488] rounded-lg nav-item" data-file="social-network-import.html">社会网络分析</a></div></div><div className="nav-group"><button onClick={toggleGroup} className="w-full flex items-center gap-3 px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 rounded-lg transition-colors"><span className="material-symbols-outlined text-xl text-slate-400">trending_up</span><span className="flex-1 text-left">技术趋势分析</span><span className="material-symbols-outlined text-sm text-slate-400 expand-icon">expand_more</span></button><div className="group-children overflow-hidden" style={{ maxHeight: "0", transition: "max-height .25s ease" }}><a href="/strategy/clustering-task.html" onClick={(event) => { event.preventDefault(); navigate("/strategy/clustering-task.html"); }} className="flex items-center pl-12 pr-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#0d9488] rounded-lg nav-item" data-file="clustering-task.html">聚类分析</a><a href="/strategy/common-network-task.html" onClick={(event) => { event.preventDefault(); navigate("/strategy/common-network-task.html"); }} className="flex items-center pl-12 pr-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#0d9488] rounded-lg nav-item" data-file="common-network-task.html">共性网络分析</a><a href="/strategy/tech-trend.html" onClick={(event) => { event.preventDefault(); navigate("/strategy/tech-trend.html"); }} className="flex items-center pl-12 pr-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#0d9488] rounded-lg nav-item" data-file="tech-trend.html">技术趋势分析</a><a href="/strategy/tech-alert.html" onClick={(event) => { event.preventDefault(); navigate("/strategy/tech-alert.html"); }} className="flex items-center pl-12 pr-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#0d9488] rounded-lg nav-item" data-file="tech-alert.html">技术动态预警</a></div></div><div className="nav-group"><button onClick={toggleGroup} className="w-full flex items-center gap-3 px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 rounded-lg transition-colors"><span className="material-symbols-outlined text-xl text-slate-400">route</span><span className="flex-1 text-left">领域技术线路</span><span className="material-symbols-outlined text-sm text-slate-400 expand-icon">expand_more</span></button><div className="group-children overflow-hidden" style={{ maxHeight: "0", transition: "max-height .25s ease" }}><a href="/strategy/delphi.html" onClick={(event) => { event.preventDefault(); navigate("/strategy/delphi.html"); }} className="flex items-center pl-12 pr-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#0d9488] rounded-lg nav-item" data-file="delphi.html">德尔菲问卷</a><a href="/strategy/tech-roadmap.html" onClick={(event) => { event.preventDefault(); navigate("/strategy/tech-roadmap.html"); }} className="flex items-center pl-12 pr-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#0d9488] rounded-lg nav-item" data-file="tech-roadmap.html">技术发展线路</a></div></div><div className="nav-group"><button onClick={toggleGroup} className="w-full flex items-center gap-3 px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 rounded-lg transition-colors"><span className="material-symbols-outlined text-xl text-slate-400">description</span><span className="flex-1 text-left">战略咨询报告</span><span className="material-symbols-outlined text-sm text-slate-400 expand-icon">expand_more</span></button><div className="group-children overflow-hidden" style={{ maxHeight: "0", transition: "max-height .25s ease" }}><a href="/strategy/report-generation.html" onClick={(event) => { event.preventDefault(); navigate("/strategy/report-generation.html"); }} className="flex items-center pl-12 pr-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#0d9488] rounded-lg nav-item" data-file="strategy-shell.html">研究报告管理</a><a href="/strategy/insight-publish.html" onClick={(event) => { event.preventDefault(); navigate("/strategy/insight-publish.html"); }} className="flex items-center pl-12 pr-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#0d9488] rounded-lg nav-item" data-file="insight-publish.html">洞察报告发布</a><a href="/strategy/hot-analysis.html" onClick={(event) => { event.preventDefault(); navigate("/strategy/hot-analysis.html"); }} className="flex items-center pl-12 pr-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#0d9488] rounded-lg nav-item" data-file="hot-analysis.html">热点分析</a><a href="/strategy/report-generation.html" onClick={(event) => { event.preventDefault(); navigate("/strategy/report-generation.html"); }} className="flex items-center pl-12 pr-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#0d9488] rounded-lg nav-item" data-file="report-generation.html">战略咨询报告生成</a></div></div><div className="nav-group"><button onClick={toggleGroup} className="w-full flex items-center gap-3 px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 rounded-lg transition-colors"><span className="material-symbols-outlined text-xl text-slate-400">folder_special</span><span className="flex-1 text-left">战略咨询成果</span><span className="material-symbols-outlined text-sm text-slate-400 expand-icon">expand_more</span></button><div className="group-children overflow-hidden" style={{ maxHeight: "0", transition: "max-height .25s ease" }}><a href="/strategy/strategy-cases.html" onClick={(event) => { event.preventDefault(); navigate("/strategy/strategy-cases.html"); }} className="flex items-center pl-12 pr-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#0d9488] rounded-lg nav-item" data-file="strategy-cases.html">战略咨询案例展示</a></div></div><div className="nav-group"><button onClick={toggleGroup} className="w-full flex items-center gap-3 px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 rounded-lg transition-colors"><span className="material-symbols-outlined text-xl text-slate-400">query_stats</span><span className="flex-1 text-left">智能问数</span><span className="material-symbols-outlined text-sm text-slate-400 expand-icon">expand_more</span></button><div className="group-children overflow-hidden" style={{ maxHeight: "0", transition: "max-height .25s ease" }}><a href="/strategy/analysis-start.html" onClick={(event) => { event.preventDefault(); navigate("/strategy/analysis-start.html"); }} className="flex items-center pl-12 pr-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#0d9488] rounded-lg nav-item" data-file="analysis-start.html">开始分析</a><a href="/strategy/case-share.html" onClick={(event) => { event.preventDefault(); navigate("/strategy/case-share.html"); }} className="flex items-center pl-12 pr-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#0d9488] rounded-lg nav-item" data-file="case-share.html">案例分享</a><a href="/strategy/multi-source-data.html" onClick={(event) => { event.preventDefault(); navigate("/strategy/multi-source-data.html"); }} className="flex items-center pl-12 pr-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#0d9488] rounded-lg nav-item" data-file="multi-source-data.html">多源数据接入</a><a href="/strategy/data-dashboard.html" onClick={(event) => { event.preventDefault(); navigate("/strategy/data-dashboard.html"); }} className="flex items-center pl-12 pr-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#0d9488] rounded-lg nav-item" data-file="data-dashboard.html">数据看板显示</a><a href="/strategy/report-gen-ai.html" onClick={(event) => { event.preventDefault(); navigate("/strategy/report-gen-ai.html"); }} className="flex items-center pl-12 pr-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#0d9488] rounded-lg nav-item" data-file="report-gen-ai.html">一键报告生成</a></div></div></nav><div className="p-4 border-t border-slate-100"><div className="bg-slate-50 rounded-xl p-3 flex items-center gap-3"><div className="w-9 h-9 bg-[#0d9488] rounded-lg flex items-center justify-center"><span className="material-symbols-outlined text-white" style={{ fontSize: "18px" }}>manage_accounts</span></div><div><p className="text-xs font-bold text-slate-800">系统管理员</p><p className="text-[10px] text-slate-500">ID: GKX-0822</p></div></div></div></aside><div className="flex-1 flex flex-col min-w-0 overflow-hidden"><header className="h-14 bg-white border-b border-slate-200 flex items-center justify-between px-6 shrink-0"><div className="flex items-center gap-4"><button onClick={toggleSidebar} className="p-1 text-slate-500 hover:bg-slate-100 rounded-lg"><span className="material-symbols-outlined">menu</span></button><h2 className="text-sm font-bold text-slate-800">战略咨询智能支持</h2></div><div className="flex-1 max-w-md mx-6"><div className="relative"><span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" style={{ fontSize: "18px" }}>search</span><input className="w-full pl-9 pr-4 py-1.5 bg-slate-100 rounded-full text-sm placeholder-slate-400 outline-none border-none" placeholder="搜索功能、报告..." type="text"/></div></div><div className="flex items-center gap-2"><button className="p-2 text-slate-500 hover:bg-slate-100 rounded-full relative"><span className="material-symbols-outlined" style={{ fontSize: "22px" }}>notifications</span><span className="absolute top-2 right-2 w-1.5 h-1.5 bg-red-500 rounded-full"></span></button></div></header><div className="flex-1 overflow-y-auto"><div className="max-w-[1440px] mx-auto px-6 py-6">
      
      <nav className="flex items-center gap-2 mb-6">
      <a className="text-primary/80 hover:text-primary text-sm font-medium" href="#">新型高端智库系统</a>
      <span className="text-slate-400 text-sm">/</span>
      <a className="text-primary/80 hover:text-primary text-sm font-medium" href="#">战略咨询智能支持</a>
      <span className="text-slate-400 text-sm">/</span>
      <a className="text-primary/80 hover:text-primary text-sm font-medium" href="#">战略咨询报告</a>
      <span className="text-slate-400 text-sm">/</span>
      <span className="text-slate-600 dark:text-slate-400 text-sm font-medium">战略咨询报告生成</span>
      </nav>
      
      <header className="flex flex-wrap items-center justify-between gap-4 mb-8">
      <h1 className="text-3xl font-black tracking-tight text-slate-900 dark:text-white">战略咨询报告生成</h1>
      <div className="flex items-center gap-3">
      <button className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 font-bold text-sm transition-all hover:bg-slate-50">
      <span className="material-symbols-outlined text-[20px]">save</span>
                          保存草稿
                      </button>
      <button className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-primary/10 text-primary border border-primary/20 font-bold text-sm transition-all hover:bg-primary/20">
      <span className="material-symbols-outlined text-[20px]">picture_as_pdf</span>
                          导出PDF
                      </button>
      <button className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-primary text-white font-bold text-sm shadow-lg shadow-primary/20 transition-all hover:opacity-90">
      <span className="material-symbols-outlined text-[20px]">description</span>
                          导出Word
                      </button>
      </div>
      </header>
      
      <main className="grid grid-cols-12 gap-6">
      
      <aside className="col-span-12 lg:col-span-4 space-y-6">
      <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm border border-slate-100 dark:border-slate-700">
      <div className="flex items-center gap-2 mb-6">
      <span className="material-symbols-outlined text-primary">auto_awesome</span>
      <h2 className="text-lg font-bold">AI 生成配置</h2>
      </div>
      <div className="space-y-5">
      <div className="flex flex-col gap-2">
      <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">报告主题</label>
      <input className="w-full px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-sm focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-all" placeholder="请输入报告主题，例如：2024全球低空经济发展态势" type="text"/>
      </div>
      <div className="flex flex-col gap-2">
      <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">报告类型</label>
      <select className="w-full px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-sm focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none appearance-none">
      <option>行业深度研究报告</option>
      <option>竞争对手分析报告</option>
      <option>宏观经济预测</option>
      <option>技术路线图</option>
      </select>
      </div>
      <div className="flex flex-col gap-2">
      <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">关联技术领域</label>
      <div className="flex flex-wrap gap-2 p-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900">
      <span className="bg-primary/10 text-primary text-xs font-bold px-2 py-1 rounded flex items-center gap-1">
                                          无人驾驶机 <span className="material-symbols-outlined text-[14px] cursor-pointer">close</span>
      </span>
      <span className="bg-primary/10 text-primary text-xs font-bold px-2 py-1 rounded flex items-center gap-1">
                                          5G/6G通讯 <span className="material-symbols-outlined text-[14px] cursor-pointer">close</span>
      </span>
      <button className="text-slate-400 text-xs font-medium px-2 py-1 border border-dashed border-slate-300 rounded hover:border-primary hover:text-primary">+ 添加领域</button>
      </div>
      </div>
      <div className="flex flex-col gap-2">
      <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">数据时间范围</label>
      <div className="relative">
      <input className="w-full px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-sm outline-none" type="text" value="2023-01-01 至 2024-05-30"/>
      <span className="material-symbols-outlined absolute right-3 top-3 text-slate-400">calendar_month</span>
      </div>
      </div>
      <div className="flex flex-col gap-2">
      <label className="text-sm font-semibold text-slate-700 dark:text-slate-300 flex justify-between">
                                      核心大纲 (AI 自动生成)
                                      <button className="text-primary text-xs hover:underline">重新生成大纲</button>
      </label>
      <div className="bg-slate-50 dark:bg-slate-900 rounded-lg p-4 text-sm text-slate-600 dark:text-slate-400 space-y-3 max-h-60 overflow-y-auto custom-scrollbar">
      <div className="flex gap-2">
      <span className="font-bold text-primary">1.</span>
      <span>行业背景与发展现状分析</span>
      </div>
      <div className="flex gap-2">
      <span className="font-bold text-primary">2.</span>
      <span>关键技术突破与专利布局</span>
      </div>
      <div className="flex gap-2">
      <span className="font-bold text-primary">3.</span>
      <span>全球主要经济体政策对比</span>
      </div>
      <div className="flex gap-2">
      <span className="font-bold text-primary">4.</span>
      <span>市场规模预测与投资建议</span>
      </div>
      </div>
      </div>
      <button className="w-full mt-4 py-4 rounded-xl bg-primary text-white font-bold flex items-center justify-center gap-3 shadow-lg shadow-primary/30 hover:scale-[1.02] transition-transform">
      <span className="material-symbols-outlined">rocket_launch</span>
                                  一键 AI 生成报告
                              </button>
      </div>
      </div>
      </aside>
      
      <section className="col-span-12 lg:col-span-8">
      <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700 flex flex-col h-full min-h-[800px]">
      
      <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 dark:border-slate-700">
      <div className="flex items-center gap-4">
      <h3 className="font-bold text-slate-800 dark:text-slate-100">报告实时预览</h3>
      <div className="flex items-center bg-slate-100 dark:bg-slate-900 rounded-lg p-1">
      <button className="p-1 hover:bg-white dark:hover:bg-slate-800 rounded shadow-sm text-slate-500">
      <span className="material-symbols-outlined text-[18px]">remove</span>
      </button>
      <span className="px-3 text-xs font-bold text-slate-600 dark:text-slate-400">100%</span>
      <button className="p-1 hover:bg-white dark:hover:bg-slate-800 rounded shadow-sm text-slate-500">
      <span className="material-symbols-outlined text-[18px]">add</span>
      </button>
      </div>
      </div>
      <div className="flex items-center gap-3">
      <span className="text-sm text-slate-500">手动编辑模式</span>
      <label className="relative inline-flex items-center cursor-pointer">
      <input className="sr-only peer" type="checkbox"/>
      <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer dark:bg-slate-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
      </label>
      </div>
      </div>
      
      <div className="flex-1 bg-slate-50 dark:bg-slate-900/50 p-10 overflow-y-auto custom-scrollbar">
      <article className="max-w-[800px] mx-auto bg-white dark:bg-slate-800 shadow-xl min-h-[1000px] p-16 rounded-sm border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200">
      
      <div className="text-center mb-12 border-b-2 border-primary/20 pb-8">
      <h2 className="text-3xl font-black mb-4">2024年全球低空经济发展战略研究报告</h2>
      <p className="text-slate-500 font-medium">新型高端智库战略咨询组 · 2024年5月</p>
      </div>
      
      <section className="mb-10">
      <h3 className="text-xl font-bold text-primary mb-4 flex items-center gap-2">
      <span className="w-1 h-6 bg-primary rounded-full"></span>
                                          内容摘要
                                      </h3>
      <div className="bg-primary/5 p-5 rounded-lg border-l-4 border-primary italic text-slate-600 dark:text-slate-300 leading-relaxed">
                                          本报告聚焦全球低空经济的核心驱动力，涵盖基础设施建设、政策监管趋势及未来商业模式分析。AI预测显示，到2026年，低空经济市场规模将实现年复合增长率35%以上的突破性增长。
                                      </div>
      </section>
      
      <section className="mb-10">
      <h3 className="text-xl font-bold text-primary mb-4 flex items-center gap-2">
      <span className="w-1 h-6 bg-primary rounded-full"></span>
                                          一、行业背景与全球增长态势
                                      </h3>
      <p className="leading-relaxed mb-6">
                                          近年来，低空经济（Low-Altitude Economy）已成为全球各国竞相布局的新兴战略领域。依托于低空空域，以各类有人驾驶和无人驾驶航空器的低空飞行活动为牵引，辐射带动相关领域融合发展。
                                      </p>
      
      <div className="my-8 bg-slate-50 dark:bg-slate-900 rounded-xl p-6 border border-slate-100 dark:border-slate-700">
      <div className="flex justify-between items-center mb-4">
      <h4 className="text-sm font-bold text-slate-700 dark:text-slate-300 italic">图1：2020-2024全球低空经济市场规模增长趋势 (亿美元)</h4>
      <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">AI 生成图表</span>
      </div>
      <div className="h-48 w-full flex items-end justify-around gap-4 px-4 pt-4 border-b border-slate-200">
      <div className="bg-primary/40 w-12 h-1/4 rounded-t-sm hover:bg-primary transition-colors relative group">
      <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs font-bold hidden group-hover:block">120</span>
      </div>
      <div className="bg-primary/50 w-12 h-2/5 rounded-t-sm hover:bg-primary transition-colors relative group">
      <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs font-bold hidden group-hover:block">185</span>
      </div>
      <div className="bg-primary/60 w-12 h-3/5 rounded-t-sm hover:bg-primary transition-colors relative group">
      <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs font-bold hidden group-hover:block">290</span>
      </div>
      <div className="bg-primary/80 w-12 h-4/5 rounded-t-sm hover:bg-primary transition-colors relative group">
      <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs font-bold hidden group-hover:block">410</span>
      </div>
      <div className="bg-primary w-12 h-full rounded-t-sm hover:bg-primary transition-colors relative group">
      <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs font-bold hidden group-hover:block">550</span>
      </div>
      </div>
      <div className="flex justify-around mt-2 text-[10px] text-slate-400 font-bold uppercase">
      <span>2020</span>
      <span>2021</span>
      <span>2022</span>
      <span>2023</span>
      <span>2024(E)</span>
      </div>
      </div>
      <p className="leading-relaxed">
                                          基于大数据的深度学习分析显示，政策面的持续利好是市场爆发的核心催化剂。随着空域管理体制改革的深入，商业化应用场景如低空物流、应急救援等已进入实质性试点阶段。
                                      </p>
      </section>
      
      <section>
      <h3 className="text-xl font-bold text-primary mb-4 flex items-center gap-2">
      <span className="w-1 h-6 bg-primary rounded-full"></span>
                                          二、关键技术突破与专利布局
                                      </h3>
      <div className="flex gap-6 items-start">
      <div className="flex-1">
      <p className="leading-relaxed text-sm">
                                                  当前技术突破主要集中在高效能动力电池、高可靠性自主避障算法及5G-A（Advanced）低空通信覆盖。报告监测到，过去18个月内，核心专利申请量增长了210%。
                                              </p>
      </div>
      <div className="w-48 h-48 bg-slate-100 dark:bg-slate-900 rounded-full flex items-center justify-center relative border-4 border-primary/10">
      <div className="absolute inset-0 flex items-center justify-center">
      <div className="w-32 h-32 rounded-full border-[16px] border-primary border-t-transparent border-r-primary/40 -rotate-45"></div>
      </div>
      <div className="text-center z-10">
      <p className="text-[10px] font-bold text-slate-400">技术构成</p>
      <p className="text-sm font-black text-primary">专利占比</p>
      </div>
      </div>
      </div>
      </section>
      
      <div className="mt-12 py-10 border-t border-dashed border-slate-200 dark:border-slate-700 text-center">
      <span className="material-symbols-outlined text-primary/40 text-4xl mb-4 animate-pulse">more_horiz</span>
      <p className="text-slate-400 text-sm italic">AI 正在继续生成后续章节内容...</p>
      </div>
      </article>
      </div>
      </div>
      </section>
      </main>
      </div></div></div></div>
    </div>
  );
}
