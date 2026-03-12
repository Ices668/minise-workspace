import { useNavigate } from "react-router-dom";

export default function CommonNetworkPage() {
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
      
      <div className="mb-8">
      <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-100">共性网络分析</h1>
      <p className="mt-2 text-slate-600 dark:text-slate-400">深入分析技术术语关联及核心研究者贡献度</p>
      </div>
      
      <div className="mb-8 border-b border-slate-200 dark:border-slate-800">
      <div className="flex gap-8">
      <button className="flex flex-col items-center justify-center border-b-2 border-primary pb-4 pt-2 group">
      <div className="flex items-center gap-2">
      <span className="material-symbols-outlined text-primary">hub</span>
      <p className="text-sm font-bold text-slate-900 dark:text-slate-100">关系矩阵</p>
      </div>
      </button>
      <button className="flex flex-col items-center justify-center border-b-2 border-transparent pb-4 pt-2 text-slate-500 hover:text-primary transition-colors">
      <div className="flex items-center gap-2">
      <span className="material-symbols-outlined">groups</span>
      <p className="text-sm font-bold">核心研究者</p>
      </div>
      </button>
      </div>
      </div>
      
      <section className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
                      术语关系矩阵
                      <span className="px-2 py-0.5 rounded bg-primary/10 text-primary text-xs font-medium uppercase tracking-wider">实时分析</span>
      </h2>
      
      <div className="relative w-full md:w-80">
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
      <span className="material-symbols-outlined text-slate-400 text-xl">search</span>
      </div>
      <input className="block w-full pl-10 pr-4 py-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-full text-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all" placeholder="搜索特定术语或关键词..." type="text"/>
      </div>
      </div>
      
      <div className="overflow-hidden rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm">
      <div className="overflow-x-auto">
      <table className="w-full text-left border-collapse">
      <thead>
      <tr className="bg-slate-50 dark:bg-slate-800/50">
      <th className="px-6 py-4 text-sm font-semibold text-slate-700 dark:text-slate-300">术语对</th>
      <th className="px-6 py-4 text-sm font-semibold text-slate-700 dark:text-slate-300 text-center">共现频次</th>
      <th className="px-6 py-4 text-sm font-semibold text-slate-700 dark:text-slate-300 text-center">语义相似度</th>
      <th className="px-6 py-4 text-sm font-semibold text-slate-700 dark:text-slate-300 text-center">上下文相关度</th>
      <th className="px-6 py-4 text-sm font-semibold text-slate-700 dark:text-slate-300">综合强度</th>
      </tr>
      </thead>
      <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
      <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors">
      <td className="px-6 py-5 text-sm font-medium text-slate-900 dark:text-slate-100">人工智能 - 机器学习</td>
      <td className="px-6 py-5 text-sm text-slate-600 dark:text-slate-400 text-center">1,240</td>
      <td className="px-6 py-5 text-sm text-slate-600 dark:text-slate-400 text-center">0.89</td>
      <td className="px-6 py-5 text-sm text-slate-600 dark:text-slate-400 text-center">0.82</td>
      <td className="px-6 py-5">
      <div className="flex items-center gap-3">
      <div className="flex-1 h-1.5 rounded-full bg-slate-200 dark:bg-slate-700 overflow-hidden">
      <div className="h-full bg-primary rounded-full" style={{ width: "85%" }}></div>
      </div>
      <span className="text-sm font-bold text-primary">85</span>
      </div>
      </td>
      </tr>
      <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors">
      <td className="px-6 py-5 text-sm font-medium text-slate-900 dark:text-slate-100">神经网络 - 深度学习</td>
      <td className="px-6 py-5 text-sm text-slate-600 dark:text-slate-400 text-center">980</td>
      <td className="px-6 py-5 text-sm text-slate-600 dark:text-slate-400 text-center">0.95</td>
      <td className="px-6 py-5 text-sm text-slate-600 dark:text-slate-400 text-center">0.91</td>
      <td className="px-6 py-5">
      <div className="flex items-center gap-3">
      <div className="flex-1 h-1.5 rounded-full bg-slate-200 dark:bg-slate-700 overflow-hidden">
      <div className="h-full bg-primary rounded-full" style={{ width: "93%" }}></div>
      </div>
      <span className="text-sm font-bold text-primary">93</span>
      </div>
      </td>
      </tr>
      <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors">
      <td className="px-6 py-5 text-sm font-medium text-slate-900 dark:text-slate-100">大数据 - 云计算</td>
      <td className="px-6 py-5 text-sm text-slate-600 dark:text-slate-400 text-center">850</td>
      <td className="px-6 py-5 text-sm text-slate-600 dark:text-slate-400 text-center">0.76</td>
      <td className="px-6 py-5 text-sm text-slate-600 dark:text-slate-400 text-center">0.70</td>
      <td className="px-6 py-5">
      <div className="flex items-center gap-3">
      <div className="flex-1 h-1.5 rounded-full bg-slate-200 dark:bg-slate-700 overflow-hidden">
      <div className="h-full bg-primary rounded-full" style={{ width: "72%" }}></div>
      </div>
      <span className="text-sm font-bold text-primary">72</span>
      </div>
      </td>
      </tr>
      <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors">
      <td className="px-6 py-5 text-sm font-medium text-slate-900 dark:text-slate-100">边缘计算 - 物联网</td>
      <td className="px-6 py-5 text-sm text-slate-600 dark:text-slate-400 text-center">620</td>
      <td className="px-6 py-5 text-sm text-slate-600 dark:text-slate-400 text-center">0.82</td>
      <td className="px-6 py-5 text-sm text-slate-600 dark:text-slate-400 text-center">0.78</td>
      <td className="px-6 py-5">
      <div className="flex items-center gap-3">
      <div className="flex-1 h-1.5 rounded-full bg-slate-200 dark:bg-slate-700 overflow-hidden">
      <div className="h-full bg-primary rounded-full" style={{ width: "79%" }}></div>
      </div>
      <span className="text-sm font-bold text-primary">79</span>
      </div>
      </td>
      </tr>
      </tbody>
      </table>
      </div>
      </div>
      </section>
      
      <section className="mt-12 space-y-6">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
                  核心研究者识别
                  <span className="text-slate-400 font-normal text-sm">(共 24 位核心研究者)</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      
      <div className="p-6 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between mb-4">
      <div className="flex items-center gap-4">
      <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center border-2 border-primary/20">
      <span className="material-symbols-outlined text-3xl text-primary">account_circle</span>
      </div>
      <div>
      <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">张明远 教授</h3>
      <p className="text-sm text-slate-500">清华大学 · 计算机科学与技术系</p>
      </div>
      </div>
      <div className="text-right">
      <div className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-1">贡献值</div>
      <div className="text-2xl font-black text-primary">98.4</div>
      </div>
      </div>
      <div className="space-y-4">
      <div className="flex flex-wrap gap-2">
      <span className="px-2 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-xs rounded-md">自然语言处理</span>
      <span className="px-2 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-xs rounded-md">大模型架构</span>
      <span className="px-2 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-xs rounded-md">知识图谱</span>
      </div>
      <div className="border-t border-slate-100 dark:border-slate-800 pt-4">
      <h4 className="text-xs font-bold text-slate-400 uppercase mb-3 flex items-center gap-2">
      <span className="material-symbols-outlined text-sm">stars</span> 代表性成果
                              </h4>
      <ul className="space-y-2">
      <li className="text-sm text-slate-700 dark:text-slate-300 flex items-start gap-2">
      <span className="material-symbols-outlined text-primary text-xs mt-1">description</span>
      <span>《下一代认知智能架构：从感知到认知的跨越》 (2023)</span>
      </li>
      <li className="text-sm text-slate-700 dark:text-slate-300 flex items-start gap-2">
      <span className="material-symbols-outlined text-primary text-xs mt-1">description</span>
      <span>一种多模态深度学习处理系统及其优化方法 [专利]</span>
      </li>
      </ul>
      </div>
      </div>
      </div>
      
      <div className="p-6 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between mb-4">
      <div className="flex items-center gap-4">
      <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center border-2 border-primary/20">
      <span className="material-symbols-outlined text-3xl text-primary">account_circle</span>
      </div>
      <div>
      <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">李华 研究员</h3>
      <p className="text-sm text-slate-500">中国科学院 · 软件研究所</p>
      </div>
      </div>
      <div className="text-right">
      <div className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-1">贡献值</div>
      <div className="text-2xl font-black text-primary">95.2</div>
      </div>
      </div>
      <div className="space-y-4">
      <div className="flex flex-wrap gap-2">
      <span className="px-2 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-xs rounded-md">异构计算</span>
      <span className="px-2 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-xs rounded-md">分布式存储</span>
      <span className="px-2 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-xs rounded-md">云原生</span>
      </div>
      <div className="border-t border-slate-100 dark:border-slate-800 pt-4">
      <h4 className="text-xs font-bold text-slate-400 uppercase mb-3 flex items-center gap-2">
      <span className="material-symbols-outlined text-sm">stars</span> 代表性成果
                              </h4>
      <ul className="space-y-2">
      <li className="text-sm text-slate-700 dark:text-slate-300 flex items-start gap-2">
      <span className="material-symbols-outlined text-primary text-xs mt-1">description</span>
      <span>《大规模分布式异构系统的调度优化研究》 (2024)</span>
      </li>
      <li className="text-sm text-slate-700 dark:text-slate-300 flex items-start gap-2">
      <span className="material-symbols-outlined text-primary text-xs mt-1">description</span>
      <span>开源框架 "NebulaCloud" 核心贡献者 (GitHub 12k+)</span>
      </li>
      </ul>
      </div>
      </div>
      </div>
      </div>
      
      <div className="flex justify-center pt-4">
      <button className="px-6 py-2.5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-full text-sm font-medium text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all flex items-center gap-2">
                      加载更多研究者
                      <span className="material-symbols-outlined text-lg">expand_more</span>
      </button>
      </div>
      </section>
      </div></div></div></div>
    </div>
  );
}
