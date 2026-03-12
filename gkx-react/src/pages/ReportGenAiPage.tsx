import { useNavigate } from "react-router-dom";

export default function ReportGenAiPage() {
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
      <div className="flex h-screen w-full bg-slate-50 overflow-hidden"><aside id="sidebar" className="w-64 bg-white border-r border-slate-200 flex flex-col z-30 shrink-0" style={{ minWidth: "256px" }}><div className="p-5 flex items-center gap-3 border-b border-slate-100"><div className="w-8 h-8 bg-[#0d9488] rounded-lg flex items-center justify-center"><span className="material-symbols-outlined text-white" style={{ fontSize: "20px" }}>insights</span></div><span className="font-bold text-base text-slate-800">GKX</span><a href="/home" onClick={(event) => { event.preventDefault(); navigate("/home"); }} className="ml-auto text-slate-400 hover:text-slate-600" title="返回首页"><span className="material-symbols-outlined" style={{ fontSize: "18px" }}>home</span></a></div><div className="px-4 pt-4 pb-1"><span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">战略咨询体系</span></div><nav className="flex-1 px-2 py-2 overflow-y-auto space-y-0.5"><div className="nav-group"><button onClick={toggleGroup} className="w-full flex items-center gap-3 px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 rounded-lg transition-colors"><span className="material-symbols-outlined text-xl text-slate-400">search_check</span><span className="flex-1 text-left">研究需求分析</span><span className="material-symbols-outlined text-sm text-slate-400 expand-icon">expand_more</span></button><div className="group-children overflow-hidden" style={{ maxHeight: "0", transition: "max-height .25s ease" }}><a href="/strategy/entity-list.html" onClick={(event) => { event.preventDefault(); navigate("/strategy/entity-list.html"); }} className="flex items-center pl-12 pr-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#0d9488] rounded-lg nav-item" data-file="entity-list.html">科技实体清单</a><a href="/strategy/frontier-tech.html" onClick={(event) => { event.preventDefault(); navigate("/strategy/frontier-tech.html"); }} className="flex items-center pl-12 pr-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#0d9488] rounded-lg nav-item" data-file="frontier-tech.html">颠覆性与前沿技术分析</a><a href="/strategy/media-focus.html" onClick={(event) => { event.preventDefault(); navigate("/strategy/media-focus.html"); }} className="flex items-center pl-12 pr-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#0d9488] rounded-lg nav-item" data-file="media-focus.html">媒体聚焦</a></div></div><div className="nav-group"><button onClick={toggleGroup} className="w-full flex items-center gap-3 px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 rounded-lg transition-colors"><span className="material-symbols-outlined text-xl text-slate-400">hub</span><span className="flex-1 text-left">技术体系分析</span><span className="material-symbols-outlined text-sm text-slate-400 expand-icon">expand_more</span></button><div className="group-children overflow-hidden" style={{ maxHeight: "0", transition: "max-height .25s ease" }}><a href="/strategy/tech-system.html" onClick={(event) => { event.preventDefault(); navigate("/strategy/tech-system.html"); }} className="flex items-center pl-12 pr-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#0d9488] rounded-lg nav-item" data-file="tech-system.html">技术体系</a><a href="/strategy/paper-dashboard.html" onClick={(event) => { event.preventDefault(); navigate("/strategy/paper-dashboard.html"); }} className="flex items-center pl-12 pr-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#0d9488] rounded-lg nav-item" data-file="paper-dashboard.html">论文分析</a><a href="/strategy/patent.html" onClick={(event) => { event.preventDefault(); navigate("/strategy/patent.html"); }} className="flex items-center pl-12 pr-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#0d9488] rounded-lg nav-item" data-file="patent.html">专利分析</a><a href="/strategy/project-stats.html" onClick={(event) => { event.preventDefault(); navigate("/strategy/project-stats.html"); }} className="flex items-center pl-12 pr-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#0d9488] rounded-lg nav-item" data-file="project-stats.html">科研项目分析</a><a href="/strategy/social-network-import.html" onClick={(event) => { event.preventDefault(); navigate("/strategy/social-network-import.html"); }} className="flex items-center pl-12 pr-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#0d9488] rounded-lg nav-item" data-file="social-network-import.html">社会网络分析</a></div></div><div className="nav-group"><button onClick={toggleGroup} className="w-full flex items-center gap-3 px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 rounded-lg transition-colors"><span className="material-symbols-outlined text-xl text-slate-400">trending_up</span><span className="flex-1 text-left">技术趋势分析</span><span className="material-symbols-outlined text-sm text-slate-400 expand-icon">expand_more</span></button><div className="group-children overflow-hidden" style={{ maxHeight: "0", transition: "max-height .25s ease" }}><a href="/strategy/clustering-task.html" onClick={(event) => { event.preventDefault(); navigate("/strategy/clustering-task.html"); }} className="flex items-center pl-12 pr-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#0d9488] rounded-lg nav-item" data-file="clustering-task.html">聚类分析</a><a href="/strategy/common-network-task.html" onClick={(event) => { event.preventDefault(); navigate("/strategy/common-network-task.html"); }} className="flex items-center pl-12 pr-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#0d9488] rounded-lg nav-item" data-file="common-network-task.html">共性网络分析</a><a href="/strategy/tech-trend.html" onClick={(event) => { event.preventDefault(); navigate("/strategy/tech-trend.html"); }} className="flex items-center pl-12 pr-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#0d9488] rounded-lg nav-item" data-file="tech-trend.html">技术趋势分析</a><a href="/strategy/tech-alert.html" onClick={(event) => { event.preventDefault(); navigate("/strategy/tech-alert.html"); }} className="flex items-center pl-12 pr-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#0d9488] rounded-lg nav-item" data-file="tech-alert.html">技术动态预警</a></div></div><div className="nav-group"><button onClick={toggleGroup} className="w-full flex items-center gap-3 px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 rounded-lg transition-colors"><span className="material-symbols-outlined text-xl text-slate-400">route</span><span className="flex-1 text-left">领域技术线路</span><span className="material-symbols-outlined text-sm text-slate-400 expand-icon">expand_more</span></button><div className="group-children overflow-hidden" style={{ maxHeight: "0", transition: "max-height .25s ease" }}><a href="/strategy/delphi.html" onClick={(event) => { event.preventDefault(); navigate("/strategy/delphi.html"); }} className="flex items-center pl-12 pr-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#0d9488] rounded-lg nav-item" data-file="delphi.html">德尔菲问卷</a><a href="/strategy/tech-roadmap.html" onClick={(event) => { event.preventDefault(); navigate("/strategy/tech-roadmap.html"); }} className="flex items-center pl-12 pr-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#0d9488] rounded-lg nav-item" data-file="tech-roadmap.html">技术发展线路</a></div></div><div className="nav-group"><button onClick={toggleGroup} className="w-full flex items-center gap-3 px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 rounded-lg transition-colors"><span className="material-symbols-outlined text-xl text-slate-400">description</span><span className="flex-1 text-left">战略咨询报告</span><span className="material-symbols-outlined text-sm text-slate-400 expand-icon">expand_more</span></button><div className="group-children overflow-hidden" style={{ maxHeight: "0", transition: "max-height .25s ease" }}><a href="/strategy/report-generation.html" onClick={(event) => { event.preventDefault(); navigate("/strategy/report-generation.html"); }} className="flex items-center pl-12 pr-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#0d9488] rounded-lg nav-item" data-file="strategy-shell.html">研究报告管理</a><a href="/strategy/insight-publish.html" onClick={(event) => { event.preventDefault(); navigate("/strategy/insight-publish.html"); }} className="flex items-center pl-12 pr-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#0d9488] rounded-lg nav-item" data-file="insight-publish.html">洞察报告发布</a><a href="/strategy/hot-analysis.html" onClick={(event) => { event.preventDefault(); navigate("/strategy/hot-analysis.html"); }} className="flex items-center pl-12 pr-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#0d9488] rounded-lg nav-item" data-file="hot-analysis.html">热点分析</a><a href="/strategy/report-generation.html" onClick={(event) => { event.preventDefault(); navigate("/strategy/report-generation.html"); }} className="flex items-center pl-12 pr-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#0d9488] rounded-lg nav-item" data-file="report-generation.html">战略咨询报告生成</a></div></div><div className="nav-group"><button onClick={toggleGroup} className="w-full flex items-center gap-3 px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 rounded-lg transition-colors"><span className="material-symbols-outlined text-xl text-slate-400">folder_special</span><span className="flex-1 text-left">战略咨询成果</span><span className="material-symbols-outlined text-sm text-slate-400 expand-icon">expand_more</span></button><div className="group-children overflow-hidden" style={{ maxHeight: "0", transition: "max-height .25s ease" }}><a href="/strategy/strategy-cases.html" onClick={(event) => { event.preventDefault(); navigate("/strategy/strategy-cases.html"); }} className="flex items-center pl-12 pr-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#0d9488] rounded-lg nav-item" data-file="strategy-cases.html">战略咨询案例展示</a></div></div><div className="nav-group"><button onClick={toggleGroup} className="w-full flex items-center gap-3 px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 rounded-lg transition-colors"><span className="material-symbols-outlined text-xl text-slate-400">query_stats</span><span className="flex-1 text-left">智能问数</span><span className="material-symbols-outlined text-sm text-slate-400 expand-icon">expand_more</span></button><div className="group-children overflow-hidden" style={{ maxHeight: "0", transition: "max-height .25s ease" }}><a href="/strategy/analysis-start.html" onClick={(event) => { event.preventDefault(); navigate("/strategy/analysis-start.html"); }} className="flex items-center pl-12 pr-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#0d9488] rounded-lg nav-item" data-file="analysis-start.html">开始分析</a><a href="/strategy/case-share.html" onClick={(event) => { event.preventDefault(); navigate("/strategy/case-share.html"); }} className="flex items-center pl-12 pr-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#0d9488] rounded-lg nav-item" data-file="case-share.html">案例分享</a><a href="/strategy/multi-source-data.html" onClick={(event) => { event.preventDefault(); navigate("/strategy/multi-source-data.html"); }} className="flex items-center pl-12 pr-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#0d9488] rounded-lg nav-item" data-file="multi-source-data.html">多源数据接入</a><a href="/strategy/data-dashboard.html" onClick={(event) => { event.preventDefault(); navigate("/strategy/data-dashboard.html"); }} className="flex items-center pl-12 pr-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#0d9488] rounded-lg nav-item" data-file="data-dashboard.html">数据看板显示</a><a href="/strategy/report-gen-ai.html" onClick={(event) => { event.preventDefault(); navigate("/strategy/report-gen-ai.html"); }} className="flex items-center pl-12 pr-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#0d9488] rounded-lg nav-item" data-file="report-gen-ai.html">一键报告生成</a></div></div></nav><div className="p-4 border-t border-slate-100"><div className="bg-slate-50 rounded-xl p-3 flex items-center gap-3"><div className="w-9 h-9 bg-[#0d9488] rounded-lg flex items-center justify-center"><span className="material-symbols-outlined text-white" style={{ fontSize: "18px" }}>manage_accounts</span></div><div><p className="text-xs font-bold text-slate-800">系统管理员</p><p className="text-[10px] text-slate-500">ID: GKX-0822</p></div></div></div></aside><div className="flex-1 flex flex-col min-w-0 overflow-hidden"><header className="h-14 bg-white border-b border-slate-200 flex items-center justify-between px-6 shrink-0"><div className="flex items-center gap-4"><button onClick={toggleSidebar} className="p-1 text-slate-500 hover:bg-slate-100 rounded-lg"><span className="material-symbols-outlined">menu</span></button><h2 className="text-sm font-bold text-slate-800">战略咨询智能支持</h2></div><div className="flex-1 max-w-md mx-6"><div className="relative"><span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" style={{ fontSize: "18px" }}>search</span><input className="w-full pl-9 pr-4 py-1.5 bg-slate-100 rounded-full text-sm placeholder-slate-400 outline-none border-none" placeholder="搜索功能、报告..." type="text"/></div></div><div className="flex items-center gap-2"><button className="p-2 text-slate-500 hover:bg-slate-100 rounded-full relative"><span className="material-symbols-outlined" style={{ fontSize: "22px" }}>notifications</span><span className="absolute top-2 right-2 w-1.5 h-1.5 bg-red-500 rounded-full"></span></button></div></header><div className="flex-1 overflow-y-auto"><div className="relative flex h-auto min-h-screen w-full flex-col overflow-x-hidden">
      <div className="layout-container flex h-full grow flex-col">
      
      <main className="px-6 md:px-12 lg:px-40 flex flex-1 justify-center py-8">
      <div className="layout-content-container flex flex-col max-w-[1200px] flex-1 gap-6">
      
      <nav className="flex flex-wrap gap-2 px-2">
      <a className="text-primary text-sm font-medium hover:underline" href="#">新型高端智库系统</a>
      <span className="text-primary text-sm font-medium">/</span>
      <a className="text-primary text-sm font-medium hover:underline" href="#">战略咨询智能支持</a>
      <span className="text-primary text-sm font-medium">/</span>
      <a className="text-primary text-sm font-medium hover:underline" href="#">智能问数</a>
      <span className="text-primary text-sm font-medium">/</span>
      <span className="text-slate-500 dark:text-slate-400 text-sm font-medium">一键报告生成</span>
      </nav>
      
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 px-2">
      <h1 className="text-slate-900 dark:text-slate-100 text-3xl font-black tracking-tight">一键报告生成</h1>
      <div className="flex flex-wrap gap-3">
      <button className="flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-lg font-bold text-sm transition-all hover:bg-primary/20">
      <span className="material-symbols-outlined text-lg">history</span>
                                  查看历史报告
                              </button>
      <button className="flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-lg font-bold text-sm transition-all hover:bg-primary/20">
      <span className="material-symbols-outlined text-lg">download</span>
                                  下载报告
                              </button>
      <button className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg font-bold text-sm transition-all hover:opacity-90 shadow-lg shadow-primary/20">
      <span className="material-symbols-outlined text-lg">share</span>
                                  一键分享
                              </button>
      </div>
      </div>
      
      <div className="bg-white dark:bg-slate-800 p-8 rounded-xl shadow-sm border border-slate-200/50 dark:border-slate-700/50">
      <div className="max-w-3xl mx-auto space-y-6">
      <div className="relative group">
      <input className="w-full h-16 pl-6 pr-32 rounded-full border-2 border-primary/20 focus:border-primary focus:ring-0 bg-background-light dark:bg-slate-900 text-lg transition-all" placeholder="请输入您的研究问题或报告主题..." type="text"/>
      <button className="absolute right-2 top-2 bottom-2 px-6 bg-primary text-white rounded-full font-bold flex items-center gap-2 hover:opacity-90 transition-all">
      <span className="material-symbols-outlined">auto_awesome</span>
                                      开始生成
                                  </button>
      </div>
      <div className="space-y-3">
      <p className="text-sm font-bold text-slate-500 flex items-center gap-2">
      <span className="material-symbols-outlined text-base">recommend</span>
                                      推荐模板
                                  </p>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
      <button className="flex items-center gap-3 p-4 bg-background-light dark:bg-slate-900 rounded-lg border border-transparent hover:border-primary transition-all text-left">
      <span className="material-symbols-outlined text-primary">analytics</span>
      <div>
      <p className="font-bold text-sm">行业概览</p>
      <p className="text-xs text-slate-400">洞察全行业动态</p>
      </div>
      </button>
      <button className="flex items-center gap-3 p-4 bg-background-light dark:bg-slate-900 rounded-lg border border-transparent hover:border-primary transition-all text-left">
      <span className="material-symbols-outlined text-primary">query_stats</span>
      <div>
      <p className="font-bold text-sm">竞争分析</p>
      <p className="text-xs text-slate-400">对手优劣势对比</p>
      </div>
      </button>
      <button className="flex items-center gap-3 p-4 bg-background-light dark:bg-slate-900 rounded-lg border border-transparent hover:border-primary transition-all text-left">
      <span className="material-symbols-outlined text-primary">biotech</span>
      <div>
      <p className="font-bold text-sm">技术趋势</p>
      <p className="text-xs text-slate-400">前沿科技演进路线</p>
      </div>
      </button>
      </div>
      </div>
      </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      
      <div className="lg:col-span-1 flex flex-col gap-6">
      <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm border border-slate-200/50 dark:border-slate-700/50 h-fit">
      <div className="flex items-center justify-between mb-6">
      <h3 className="font-bold text-lg">生成进度与大纲</h3>
      <span className="text-primary font-bold text-sm px-2 py-1 bg-primary/10 rounded">65%</span>
      </div>
      
      <div className="w-full h-2 bg-slate-100 dark:bg-slate-700 rounded-full mb-8 overflow-hidden">
      <div className="h-full bg-primary rounded-full" style={{ width: "65%" }}></div>
      </div>
      
      <ul className="space-y-4">
      <li className="flex items-start gap-3">
      <span className="material-symbols-outlined text-green-500">check_circle</span>
      <div>
      <p className="text-sm font-bold">1. 行业宏观背景</p>
      <p className="text-xs text-slate-400">数据检索完成</p>
      </div>
      </li>
      <li className="flex items-start gap-3">
      <span className="material-symbols-outlined text-green-500">check_circle</span>
      <div>
      <p className="text-sm font-bold">2. 核心竞争要素</p>
      <p className="text-xs text-slate-400">分析生成完成</p>
      </div>
      </li>
      <li className="flex items-start gap-3">
      <div className="w-5 h-5 flex items-center justify-center">
      <div className="w-4 h-4 border-2 border-primary border-t-transparent rounded-full animate-spin"></div>
      </div>
      <div>
      <p className="text-sm font-bold text-primary">3. 未来趋势预测</p>
      <p className="text-xs text-slate-400">正在生成深度分析...</p>
      </div>
      </li>
      <li className="flex items-start gap-3 opacity-50">
      <span className="material-symbols-outlined">radio_button_unchecked</span>
      <div>
      <p className="text-sm font-bold">4. 策略性建议</p>
      <p className="text-xs text-slate-400">等待生成</p>
      </div>
      </li>
      </ul>
      </div>
      </div>
      
      <div className="lg:col-span-2 flex flex-col gap-6">
      <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200/50 dark:border-slate-700/50 overflow-hidden">
      <div className="border-b border-slate-100 dark:border-slate-700 px-6 py-4 flex items-center justify-between">
      <div className="flex items-center gap-2">
      <span className="material-symbols-outlined text-slate-400">description</span>
      <span className="font-bold">报告实时预览</span>
      </div>
      <div className="flex gap-2">
      <div className="w-3 h-3 rounded-full bg-red-400"></div>
      <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
      <div className="w-3 h-3 rounded-full bg-green-400"></div>
      </div>
      </div>
      
      <div className="p-10 space-y-8 bg-slate-50/30 dark:bg-slate-900/30">
      <div className="text-center space-y-4">
      <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-100">2024年人工智能驱动下的产业升级研究报告</h2>
      <p className="text-sm text-slate-500">新型高端智库系统 · 智能生成中心</p>
      <div className="h-1 w-24 bg-primary mx-auto rounded-full"></div>
      </div>
      <div className="space-y-4">
      <h4 className="text-xl font-bold border-l-4 border-primary pl-4">执行摘要</h4>
      <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                                              本报告旨在探讨2024年全球及中国市场在人工智能技术推动下的产业转型趋势。通过对多维数据的深度检索，我们发现生成式AI正在从实验阶段转向大规模应用阶段，特别是在智能制造、战略咨询以及科研教育领域表现尤为突出...
                                          </p>
      </div>
      <div className="space-y-4">
      <h4 className="text-xl font-bold border-l-4 border-primary pl-4">行业概览与市场占有率</h4>
      <div className="grid grid-cols-2 gap-4">
      <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border border-slate-100 dark:border-slate-700 aspect-video flex flex-col items-center justify-center relative">
      <div className="absolute inset-4 flex items-end gap-2">
      <div className="bg-primary/20 w-full h-[40%] rounded-t"></div>
      <div className="bg-primary/40 w-full h-[60%] rounded-t"></div>
      <div className="bg-primary/60 w-full h-[85%] rounded-t animate-pulse"></div>
      <div className="bg-primary/30 w-full h-[55%] rounded-t"></div>
      <div className="bg-primary/50 w-full h-[70%] rounded-t"></div>
      </div>
      <p className="text-xs text-slate-400 mt-auto z-10 font-medium">市场增长趋势柱状图 (实时渲染中)</p>
      </div>
      <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border border-slate-100 dark:border-slate-700 aspect-video flex flex-col items-center justify-center relative">
      <div className="w-24 h-24 rounded-full border-[12px] border-primary/20 relative">
      <div className="absolute inset-[-12px] rounded-full border-[12px] border-primary border-t-transparent border-l-transparent rotate-45"></div>
      </div>
      <p className="text-xs text-slate-400 mt-4 font-medium">竞争力分布环形图</p>
      </div>
      </div>
      </div>
      <div className="space-y-4">
      <h4 className="text-xl font-bold border-l-4 border-primary pl-4">核心竞争要素分析</h4>
      <div className="space-y-4">
      <div className="h-4 w-full bg-slate-200 dark:bg-slate-700 rounded-full animate-pulse"></div>
      <div className="h-4 w-[90%] bg-slate-200 dark:bg-slate-700 rounded-full animate-pulse"></div>
      <div className="h-4 w-[95%] bg-slate-200 dark:bg-slate-700 rounded-full animate-pulse"></div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </main>
      </div>
      </div></div></div></div>
    </div>
  );
}
