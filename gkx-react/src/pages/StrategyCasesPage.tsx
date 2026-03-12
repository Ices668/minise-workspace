import { useNavigate } from "react-router-dom";

export default function StrategyCasesPage() {
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
      <div className="flex h-screen w-full bg-slate-50 overflow-hidden"><aside id="sidebar" className="w-64 bg-white border-r border-slate-200 flex flex-col z-30 shrink-0" style={{ minWidth: "256px" }}><div className="p-5 flex items-center gap-3 border-b border-slate-100"><div className="w-8 h-8 bg-[#0d9488] rounded-lg flex items-center justify-center"><span className="material-symbols-outlined text-white" style={{ fontSize: "20px" }}>insights</span></div><span className="font-bold text-base text-slate-800">GKX</span><a href="/home" onClick={(event) => { event.preventDefault(); navigate("/home"); }} className="ml-auto text-slate-400 hover:text-slate-600" title="返回首页"><span className="material-symbols-outlined" style={{ fontSize: "18px" }}>home</span></a></div><div className="px-4 pt-4 pb-1"><span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">战略咨询体系</span></div><nav className="flex-1 px-2 py-2 overflow-y-auto space-y-0.5"><div className="nav-group"><button onClick={toggleGroup} className="w-full flex items-center gap-3 px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 rounded-lg transition-colors"><span className="material-symbols-outlined text-xl text-slate-400">search_check</span><span className="flex-1 text-left">研究需求分析</span><span className="material-symbols-outlined text-sm text-slate-400 expand-icon">expand_more</span></button><div className="group-children overflow-hidden" style={{ maxHeight: "0", transition: "max-height .25s ease" }}><a href="/strategy/entity-list.html" onClick={(event) => { event.preventDefault(); navigate("/strategy/entity-list.html"); }} className="flex items-center pl-12 pr-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#0d9488] rounded-lg nav-item" data-file="entity-list.html">科技实体清单</a><a href="/strategy/frontier-tech.html" onClick={(event) => { event.preventDefault(); navigate("/strategy/frontier-tech.html"); }} className="flex items-center pl-12 pr-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#0d9488] rounded-lg nav-item" data-file="frontier-tech.html">颠覆性与前沿技术分析</a><a href="/strategy/media-focus.html" onClick={(event) => { event.preventDefault(); navigate("/strategy/media-focus.html"); }} className="flex items-center pl-12 pr-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#0d9488] rounded-lg nav-item" data-file="media-focus.html">媒体聚焦</a></div></div><div className="nav-group"><button onClick={toggleGroup} className="w-full flex items-center gap-3 px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 rounded-lg transition-colors"><span className="material-symbols-outlined text-xl text-slate-400">hub</span><span className="flex-1 text-left">技术体系分析</span><span className="material-symbols-outlined text-sm text-slate-400 expand-icon">expand_more</span></button><div className="group-children overflow-hidden" style={{ maxHeight: "0", transition: "max-height .25s ease" }}><a href="/strategy/tech-system.html" onClick={(event) => { event.preventDefault(); navigate("/strategy/tech-system.html"); }} className="flex items-center pl-12 pr-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#0d9488] rounded-lg nav-item" data-file="tech-system.html">技术体系</a><a href="/strategy/paper-dashboard.html" onClick={(event) => { event.preventDefault(); navigate("/strategy/paper-dashboard.html"); }} className="flex items-center pl-12 pr-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#0d9488] rounded-lg nav-item" data-file="paper-dashboard.html">论文分析</a><a href="/strategy/patent.html" onClick={(event) => { event.preventDefault(); navigate("/strategy/patent.html"); }} className="flex items-center pl-12 pr-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#0d9488] rounded-lg nav-item" data-file="patent.html">专利分析</a><a href="/strategy/project-stats.html" onClick={(event) => { event.preventDefault(); navigate("/strategy/project-stats.html"); }} className="flex items-center pl-12 pr-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#0d9488] rounded-lg nav-item" data-file="project-stats.html">科研项目分析</a><a href="/strategy/social-network-import.html" onClick={(event) => { event.preventDefault(); navigate("/strategy/social-network-import.html"); }} className="flex items-center pl-12 pr-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#0d9488] rounded-lg nav-item" data-file="social-network-import.html">社会网络分析</a></div></div><div className="nav-group"><button onClick={toggleGroup} className="w-full flex items-center gap-3 px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 rounded-lg transition-colors"><span className="material-symbols-outlined text-xl text-slate-400">trending_up</span><span className="flex-1 text-left">技术趋势分析</span><span className="material-symbols-outlined text-sm text-slate-400 expand-icon">expand_more</span></button><div className="group-children overflow-hidden" style={{ maxHeight: "0", transition: "max-height .25s ease" }}><a href="/strategy/clustering-task.html" onClick={(event) => { event.preventDefault(); navigate("/strategy/clustering-task.html"); }} className="flex items-center pl-12 pr-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#0d9488] rounded-lg nav-item" data-file="clustering-task.html">聚类分析</a><a href="/strategy/common-network-task.html" onClick={(event) => { event.preventDefault(); navigate("/strategy/common-network-task.html"); }} className="flex items-center pl-12 pr-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#0d9488] rounded-lg nav-item" data-file="common-network-task.html">共性网络分析</a><a href="/strategy/tech-trend.html" onClick={(event) => { event.preventDefault(); navigate("/strategy/tech-trend.html"); }} className="flex items-center pl-12 pr-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#0d9488] rounded-lg nav-item" data-file="tech-trend.html">技术趋势分析</a><a href="/strategy/tech-alert.html" onClick={(event) => { event.preventDefault(); navigate("/strategy/tech-alert.html"); }} className="flex items-center pl-12 pr-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#0d9488] rounded-lg nav-item" data-file="tech-alert.html">技术动态预警</a></div></div><div className="nav-group"><button onClick={toggleGroup} className="w-full flex items-center gap-3 px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 rounded-lg transition-colors"><span className="material-symbols-outlined text-xl text-slate-400">route</span><span className="flex-1 text-left">领域技术线路</span><span className="material-symbols-outlined text-sm text-slate-400 expand-icon">expand_more</span></button><div className="group-children overflow-hidden" style={{ maxHeight: "0", transition: "max-height .25s ease" }}><a href="/strategy/delphi.html" onClick={(event) => { event.preventDefault(); navigate("/strategy/delphi.html"); }} className="flex items-center pl-12 pr-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#0d9488] rounded-lg nav-item" data-file="delphi.html">德尔菲问卷</a><a href="/strategy/tech-roadmap.html" onClick={(event) => { event.preventDefault(); navigate("/strategy/tech-roadmap.html"); }} className="flex items-center pl-12 pr-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#0d9488] rounded-lg nav-item" data-file="tech-roadmap.html">技术发展线路</a></div></div><div className="nav-group"><button onClick={toggleGroup} className="w-full flex items-center gap-3 px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 rounded-lg transition-colors"><span className="material-symbols-outlined text-xl text-slate-400">description</span><span className="flex-1 text-left">战略咨询报告</span><span className="material-symbols-outlined text-sm text-slate-400 expand-icon">expand_more</span></button><div className="group-children overflow-hidden" style={{ maxHeight: "0", transition: "max-height .25s ease" }}><a href="/strategy/report-generation.html" onClick={(event) => { event.preventDefault(); navigate("/strategy/report-generation.html"); }} className="flex items-center pl-12 pr-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#0d9488] rounded-lg nav-item" data-file="strategy-shell.html">研究报告管理</a><a href="/strategy/insight-publish.html" onClick={(event) => { event.preventDefault(); navigate("/strategy/insight-publish.html"); }} className="flex items-center pl-12 pr-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#0d9488] rounded-lg nav-item" data-file="insight-publish.html">洞察报告发布</a><a href="/strategy/hot-analysis.html" onClick={(event) => { event.preventDefault(); navigate("/strategy/hot-analysis.html"); }} className="flex items-center pl-12 pr-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#0d9488] rounded-lg nav-item" data-file="hot-analysis.html">热点分析</a><a href="/strategy/report-generation.html" onClick={(event) => { event.preventDefault(); navigate("/strategy/report-generation.html"); }} className="flex items-center pl-12 pr-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#0d9488] rounded-lg nav-item" data-file="report-generation.html">战略咨询报告生成</a></div></div><div className="nav-group"><button onClick={toggleGroup} className="w-full flex items-center gap-3 px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 rounded-lg transition-colors"><span className="material-symbols-outlined text-xl text-slate-400">folder_special</span><span className="flex-1 text-left">战略咨询成果</span><span className="material-symbols-outlined text-sm text-slate-400 expand-icon">expand_more</span></button><div className="group-children overflow-hidden" style={{ maxHeight: "0", transition: "max-height .25s ease" }}><a href="/strategy/strategy-cases.html" onClick={(event) => { event.preventDefault(); navigate("/strategy/strategy-cases.html"); }} className="flex items-center pl-12 pr-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#0d9488] rounded-lg nav-item" data-file="strategy-cases.html">战略咨询案例展示</a></div></div><div className="nav-group"><button onClick={toggleGroup} className="w-full flex items-center gap-3 px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 rounded-lg transition-colors"><span className="material-symbols-outlined text-xl text-slate-400">query_stats</span><span className="flex-1 text-left">智能问数</span><span className="material-symbols-outlined text-sm text-slate-400 expand-icon">expand_more</span></button><div className="group-children overflow-hidden" style={{ maxHeight: "0", transition: "max-height .25s ease" }}><a href="/strategy/analysis-start.html" onClick={(event) => { event.preventDefault(); navigate("/strategy/analysis-start.html"); }} className="flex items-center pl-12 pr-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#0d9488] rounded-lg nav-item" data-file="analysis-start.html">开始分析</a><a href="/strategy/case-share.html" onClick={(event) => { event.preventDefault(); navigate("/strategy/case-share.html"); }} className="flex items-center pl-12 pr-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#0d9488] rounded-lg nav-item" data-file="case-share.html">案例分享</a><a href="/strategy/multi-source-data.html" onClick={(event) => { event.preventDefault(); navigate("/strategy/multi-source-data.html"); }} className="flex items-center pl-12 pr-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#0d9488] rounded-lg nav-item" data-file="multi-source-data.html">多源数据接入</a><a href="/strategy/data-dashboard.html" onClick={(event) => { event.preventDefault(); navigate("/strategy/data-dashboard.html"); }} className="flex items-center pl-12 pr-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#0d9488] rounded-lg nav-item" data-file="data-dashboard.html">数据看板显示</a><a href="/strategy/report-gen-ai.html" onClick={(event) => { event.preventDefault(); navigate("/strategy/report-gen-ai.html"); }} className="flex items-center pl-12 pr-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#0d9488] rounded-lg nav-item" data-file="report-gen-ai.html">一键报告生成</a></div></div></nav><div className="p-4 border-t border-slate-100"><div className="bg-slate-50 rounded-xl p-3 flex items-center gap-3"><div className="w-9 h-9 bg-[#0d9488] rounded-lg flex items-center justify-center"><span className="material-symbols-outlined text-white" style={{ fontSize: "18px" }}>manage_accounts</span></div><div><p className="text-xs font-bold text-slate-800">系统管理员</p><p className="text-[10px] text-slate-500">ID: GKX-0822</p></div></div></div></aside><div className="flex-1 flex flex-col min-w-0 overflow-hidden"><header className="h-14 bg-white border-b border-slate-200 flex items-center justify-between px-6 shrink-0"><div className="flex items-center gap-4"><button onClick={toggleSidebar} className="p-1 text-slate-500 hover:bg-slate-100 rounded-lg"><span className="material-symbols-outlined">menu</span></button><h2 className="text-sm font-bold text-slate-800">战略咨询智能支持</h2></div><div className="flex-1 max-w-md mx-6"><div className="relative"><span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" style={{ fontSize: "18px" }}>search</span><input className="w-full pl-9 pr-4 py-1.5 bg-slate-100 rounded-full text-sm placeholder-slate-400 outline-none border-none" placeholder="搜索功能、报告..." type="text"/></div></div><div className="flex items-center gap-2"><button className="p-2 text-slate-500 hover:bg-slate-100 rounded-full relative"><span className="material-symbols-outlined" style={{ fontSize: "22px" }}>notifications</span><span className="absolute top-2 right-2 w-1.5 h-1.5 bg-red-500 rounded-full"></span></button></div></header><div className="flex-1 overflow-y-auto"><div className="max-w-[1280px] mx-auto px-6 py-8">
      
      <nav className="flex items-center gap-2 text-sm font-medium mb-6">
      <a className="text-primary hover:opacity-80" href="#">新型高端智库系统</a>
      <span className="text-slate-400">/</span>
      <a className="text-primary hover:opacity-80" href="#">战略咨询智能支持</a>
      <span className="text-slate-400">/</span>
      <a className="text-primary hover:opacity-80" href="#">战略咨询成果</a>
      <span className="text-slate-400">/</span>
      <span className="text-slate-600">战略咨询案例展示</span>
      </nav>
      
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
      <h1 className="text-3xl font-black tracking-tight text-slate-900">战略咨询案例展示</h1>
      <div className="flex items-center gap-3">
      <button className="flex items-center gap-2 px-5 py-2.5 bg-primary text-white font-bold rounded-lg hover:bg-primary/90 transition-all shadow-sm">
      <span className="material-symbols-outlined text-sm">add</span>
      <span>新建案例</span>
      </button>
      <button className="flex items-center gap-2 px-5 py-2.5 bg-white border border-slate-200 text-slate-700 font-bold rounded-lg hover:bg-slate-50 transition-all shadow-sm">
      <span className="material-symbols-outlined text-sm">ios_share</span>
      <span>导出报表</span>
      </button>
      <button className="flex items-center justify-center p-2.5 bg-white border border-slate-200 text-slate-700 rounded-lg hover:bg-slate-50 transition-all shadow-sm">
      <span className="material-symbols-outlined">refresh</span>
      </button>
      </div>
      </div>
      
      <div className="bg-white rounded-lg p-6 shadow-sm border border-slate-100 mb-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 items-end">
      <div className="space-y-2 lg:col-span-1">
      <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">关键词检索</label>
      <div className="relative flex items-center">
      <span className="material-symbols-outlined absolute left-3 text-slate-400">search</span>
      <input className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border-none rounded-full text-sm focus:ring-2 focus:ring-primary/20" placeholder="案例标题/关键词" type="text"/>
      </div>
      </div>
      <div className="space-y-2">
      <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">成果类型</label>
      <div className="relative">
      <select className="w-full appearance-none pl-4 pr-10 py-2.5 bg-slate-50 border-none rounded-lg text-sm focus:ring-2 focus:ring-primary/20">
      <option>全部类型</option>
      <option>典型案例</option>
      <option>决策建议</option>
      <option>行业报告</option>
      </select>
      <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none">expand_more</span>
      </div>
      </div>
      <div className="space-y-2">
      <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">所属领域</label>
      <div className="relative">
      <select className="w-full appearance-none pl-4 pr-10 py-2.5 bg-slate-50 border-none rounded-lg text-sm focus:ring-2 focus:ring-primary/20">
      <option>全部领域</option>
      <option>人工智能</option>
      <option>数字经济</option>
      <option>双碳战略</option>
      </select>
      <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none">expand_more</span>
      </div>
      </div>
      <div className="flex items-center gap-2">
      <button className="flex-1 py-2.5 bg-primary text-white font-bold rounded-lg hover:bg-primary/90 transition-all">查询</button>
      <button className="flex-1 py-2.5 bg-slate-100 text-slate-600 font-bold rounded-lg hover:bg-slate-200 transition-all">重置</button>
      </div>
      </div>
      <div className="mt-4 flex items-center gap-4">
      <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">评价等级</label>
      <div className="flex gap-2">
      <button className="px-3 py-1 bg-primary/10 text-primary text-xs font-bold rounded-full">全部</button>
      <button className="px-3 py-1 bg-slate-50 text-slate-600 text-xs font-medium rounded-full hover:bg-slate-100">5星</button>
      <button className="px-3 py-1 bg-slate-50 text-slate-600 text-xs font-medium rounded-full hover:bg-slate-100">4星</button>
      <button className="px-3 py-1 bg-slate-50 text-slate-600 text-xs font-medium rounded-full hover:bg-slate-100">3星及以下</button>
      </div>
      </div>
      </div>
      
      <div className="flex items-center justify-between mb-6">
      <div className="flex items-center gap-1 bg-slate-200/50 p-1 rounded-lg">
      <button className="p-1.5 bg-white text-primary rounded shadow-sm">
      <span className="material-symbols-outlined">grid_view</span>
      </button>
      <button className="p-1.5 text-slate-500 hover:text-slate-700">
      <span className="material-symbols-outlined">format_list_bulleted</span>
      </button>
      </div>
      <div className="flex items-center gap-4">
      <button className="flex items-center gap-2 text-slate-600 hover:text-primary transition-colors">
      <span className="material-symbols-outlined">download</span>
      <span className="text-sm font-bold">批量下载</span>
      </button>
      <div className="h-4 w-px bg-slate-300"></div>
      <div className="flex items-center gap-2">
      <span className="text-sm text-slate-500">排序方式:</span>
      <select className="bg-transparent border-none text-sm font-bold text-slate-700 focus:ring-0 cursor-pointer">
      <option>最新发布</option>
      <option>最热下载</option>
      <option>评分最高</option>
      </select>
      </div>
      </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
      
      <div className="bg-white rounded-lg border border-slate-100 shadow-sm hover:shadow-md transition-all overflow-hidden group">
      <div className="p-5">
      <div className="flex justify-between items-start mb-4">
      <div className="w-12 h-12 flex items-center justify-center bg-red-50 text-red-500 rounded-lg">
      <span className="material-symbols-outlined text-3xl">description</span>
      </div>
      <span className="px-2 py-1 bg-primary/10 text-primary text-[10px] font-bold rounded-sm uppercase tracking-wide">典型案例</span>
      </div>
      <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-primary transition-colors">2024全球人工智能治理框架研究报告</h3>
      <p className="text-sm text-slate-500 line-clamp-2 mb-4">本报告深入探讨了人工智能在全球范围内的监管现状与未来趋势，为智库决策提供核心战略支撑。</p>
      <div className="flex flex-wrap gap-2 mb-6">
      <span className="text-xs text-slate-400">#人工智能</span>
      <span className="text-xs text-slate-400">#政策研究</span>
      <span className="text-xs text-slate-400">#治理架构</span>
      </div>
      <div className="flex items-center justify-between py-3 border-y border-slate-50 text-xs text-slate-500">
      <div className="flex items-center gap-1">
      <span className="material-symbols-outlined text-yellow-400 text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
      <span className="font-bold text-slate-700">4.9</span>
      </div>
      <div className="flex items-center gap-3">
      <span className="flex items-center gap-1"><span className="material-symbols-outlined text-sm">download</span> 1,280</span>
      <span className="flex items-center gap-1"><span className="material-symbols-outlined text-sm">attachment</span> 12.5MB</span>
      </div>
      </div>
      </div>
      <div className="flex divide-x divide-slate-50 bg-slate-50/50">
      <button className="flex-1 py-3 text-xs font-bold text-slate-600 hover:text-primary hover:bg-white transition-all flex items-center justify-center gap-1">
      <span className="material-symbols-outlined text-sm">visibility</span> 在线查看
                          </button>
      <button className="flex-1 py-3 text-xs font-bold text-slate-600 hover:text-primary hover:bg-white transition-all flex items-center justify-center gap-1">
      <span className="material-symbols-outlined text-sm">download</span> 立即下载
                          </button>
      <button className="flex-1 py-3 text-xs font-bold text-slate-600 hover:text-primary hover:bg-white transition-all flex items-center justify-center gap-1">
      <span className="material-symbols-outlined text-sm">share</span> 生成分享
                          </button>
      </div>
      </div>
      
      <div className="bg-white rounded-lg border border-slate-100 shadow-sm hover:shadow-md transition-all overflow-hidden group">
      <div className="p-5">
      <div className="flex justify-between items-start mb-4">
      <div className="w-12 h-12 flex items-center justify-center bg-blue-50 text-blue-500 rounded-lg">
      <span className="material-symbols-outlined text-3xl">article</span>
      </div>
      <span className="px-2 py-1 bg-emerald-50 text-emerald-600 text-[10px] font-bold rounded-sm uppercase tracking-wide">决策建议</span>
      </div>
      <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-primary transition-colors">关于数字经济与实体经济融合发展的建议案</h3>
      <p className="text-sm text-slate-500 line-clamp-2 mb-4">针对当前数实融合面临的瓶颈，提出一系列可落地的政策支持方向，助力区域经济高质量转型。</p>
      <div className="flex flex-wrap gap-2 mb-6">
      <span className="text-xs text-slate-400">#数字经济</span>
      <span className="text-xs text-slate-400">#产业融合</span>
      </div>
      <div className="flex items-center justify-between py-3 border-y border-slate-50 text-xs text-slate-500">
      <div className="flex items-center gap-1">
      <span className="material-symbols-outlined text-yellow-400 text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
      <span className="font-bold text-slate-700">4.8</span>
      </div>
      <div className="flex items-center gap-3">
      <span className="flex items-center gap-1"><span className="material-symbols-outlined text-sm">download</span> 856</span>
      <span className="flex items-center gap-1"><span className="material-symbols-outlined text-sm">attachment</span> 4.2MB</span>
      </div>
      </div>
      </div>
      <div className="flex divide-x divide-slate-50 bg-slate-50/50">
      <button className="flex-1 py-3 text-xs font-bold text-slate-600 hover:text-primary hover:bg-white transition-all flex items-center justify-center gap-1">
      <span className="material-symbols-outlined text-sm">visibility</span> 在线查看
                          </button>
      <button className="flex-1 py-3 text-xs font-bold text-slate-600 hover:text-primary hover:bg-white transition-all flex items-center justify-center gap-1">
      <span className="material-symbols-outlined text-sm">download</span> 立即下载
                          </button>
      <button className="flex-1 py-3 text-xs font-bold text-slate-600 hover:text-primary hover:bg-white transition-all flex items-center justify-center gap-1">
      <span className="material-symbols-outlined text-sm">share</span> 生成分享
                          </button>
      </div>
      </div>
      
      <div className="bg-white rounded-lg border border-slate-100 shadow-sm hover:shadow-md transition-all overflow-hidden group">
      <div className="p-5">
      <div className="flex justify-between items-start mb-4">
      <div className="w-12 h-12 flex items-center justify-center bg-orange-50 text-orange-500 rounded-lg">
      <span className="material-symbols-outlined text-3xl">analytics</span>
      </div>
      <span className="px-2 py-1 bg-amber-50 text-amber-600 text-[10px] font-bold rounded-sm uppercase tracking-wide">行业报告</span>
      </div>
      <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-primary transition-colors">2023年度能源领域碳中和战略执行评估</h3>
      <p className="text-sm text-slate-500 line-clamp-2 mb-4">全面盘点国内重点能源企业在过去一年的碳减排成效，分析各细分领域的战略执行深度。</p>
      <div className="flex flex-wrap gap-2 mb-6">
      <span className="text-xs text-slate-400">#双碳</span>
      <span className="text-xs text-slate-400">#能源转型</span>
      </div>
      <div className="flex items-center justify-between py-3 border-y border-slate-50 text-xs text-slate-500">
      <div className="flex items-center gap-1">
      <span className="material-symbols-outlined text-yellow-400 text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
      <span className="font-bold text-slate-700">4.7</span>
      </div>
      <div className="flex items-center gap-3">
      <span className="flex items-center gap-1"><span className="material-symbols-outlined text-sm">download</span> 2,104</span>
      <span className="flex items-center gap-1"><span className="material-symbols-outlined text-sm">attachment</span> 28.1MB</span>
      </div>
      </div>
      </div>
      <div className="flex divide-x divide-slate-50 bg-slate-50/50">
      <button className="flex-1 py-3 text-xs font-bold text-slate-600 hover:text-primary hover:bg-white transition-all flex items-center justify-center gap-1">
      <span className="material-symbols-outlined text-sm">visibility</span> 在线查看
                          </button>
      <button className="flex-1 py-3 text-xs font-bold text-slate-600 hover:text-primary hover:bg-white transition-all flex items-center justify-center gap-1">
      <span className="material-symbols-outlined text-sm">download</span> 立即下载
                          </button>
      <button className="flex-1 py-3 text-xs font-bold text-slate-600 hover:text-primary hover:bg-white transition-all flex items-center justify-center gap-1">
      <span className="material-symbols-outlined text-sm">share</span> 生成分享
                          </button>
      </div>
      </div>
      
      <div className="bg-white rounded-lg border border-slate-100 shadow-sm hover:shadow-md transition-all overflow-hidden group">
      <div className="p-5">
      <div className="flex justify-between items-start mb-4">
      <div className="w-12 h-12 flex items-center justify-center bg-purple-50 text-purple-500 rounded-lg">
      <span className="material-symbols-outlined text-3xl">description</span>
      </div>
      <span className="px-2 py-1 bg-primary/10 text-primary text-[10px] font-bold rounded-sm uppercase tracking-wide">典型案例</span>
      </div>
      <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-primary transition-colors">新型城镇化中的智慧城市集群建设路径</h3>
      <p className="text-sm text-slate-500 line-clamp-2 mb-4">基于多地试点经验，总结出一套可复制的智慧城市集群治理模型与数据共享机制。</p>
      <div className="flex flex-wrap gap-2 mb-6">
      <span className="text-xs text-slate-400">#智慧城市</span>
      <span className="text-xs text-slate-400">#城镇化</span>
      </div>
      <div className="flex items-center justify-between py-3 border-y border-slate-50 text-xs text-slate-500">
      <div className="flex items-center gap-1">
      <span className="material-symbols-outlined text-yellow-400 text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
      <span className="font-bold text-slate-700">4.6</span>
      </div>
      <div className="flex items-center gap-3">
      <span className="flex items-center gap-1"><span className="material-symbols-outlined text-sm">download</span> 642</span>
      <span className="flex items-center gap-1"><span className="material-symbols-outlined text-sm">attachment</span> 15.7MB</span>
      </div>
      </div>
      </div>
      <div className="flex divide-x divide-slate-50 bg-slate-50/50">
      <button className="flex-1 py-3 text-xs font-bold text-slate-600 hover:text-primary hover:bg-white transition-all flex items-center justify-center gap-1">
      <span className="material-symbols-outlined text-sm">visibility</span> 在线查看
                          </button>
      <button className="flex-1 py-3 text-xs font-bold text-slate-600 hover:text-primary hover:bg-white transition-all flex items-center justify-center gap-1">
      <span className="material-symbols-outlined text-sm">download</span> 立即下载
                          </button>
      <button className="flex-1 py-3 text-xs font-bold text-slate-600 hover:text-primary hover:bg-white transition-all flex items-center justify-center gap-1">
      <span className="material-symbols-outlined text-sm">share</span> 生成分享
                          </button>
      </div>
      </div>
      
      <div className="bg-white rounded-lg border border-slate-100 shadow-sm hover:shadow-md transition-all overflow-hidden group">
      <div className="p-5">
      <div className="flex justify-between items-start mb-4">
      <div className="w-12 h-12 flex items-center justify-center bg-emerald-50 text-emerald-500 rounded-lg">
      <span className="material-symbols-outlined text-3xl">article</span>
      </div>
      <span className="px-2 py-1 bg-emerald-50 text-emerald-600 text-[10px] font-bold rounded-sm uppercase tracking-wide">决策建议</span>
      </div>
      <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-primary transition-colors">全球产业链重构下的供应链安全预警方案</h3>
      <p className="text-sm text-slate-500 line-clamp-2 mb-4">针对当前国际贸易环境变化，建立关键原材料与零部件的供应链风险监测体系建议。</p>
      <div className="flex flex-wrap gap-2 mb-6">
      <span className="text-xs text-slate-400">#国际贸易</span>
      <span className="text-xs text-slate-400">#供应链</span>
      </div>
      <div className="flex items-center justify-between py-3 border-y border-slate-50 text-xs text-slate-500">
      <div className="flex items-center gap-1">
      <span className="material-symbols-outlined text-yellow-400 text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
      <span className="font-bold text-slate-700">5.0</span>
      </div>
      <div className="flex items-center gap-3">
      <span className="flex items-center gap-1"><span className="material-symbols-outlined text-sm">download</span> 3,450</span>
      <span className="flex items-center gap-1"><span className="material-symbols-outlined text-sm">attachment</span> 8.9MB</span>
      </div>
      </div>
      </div>
      <div className="flex divide-x divide-slate-50 bg-slate-50/50">
      <button className="flex-1 py-3 text-xs font-bold text-slate-600 hover:text-primary hover:bg-white transition-all flex items-center justify-center gap-1">
      <span className="material-symbols-outlined text-sm">visibility</span> 在线查看
                          </button>
      <button className="flex-1 py-3 text-xs font-bold text-slate-600 hover:text-primary hover:bg-white transition-all flex items-center justify-center gap-1">
      <span className="material-symbols-outlined text-sm">download</span> 立即下载
                          </button>
      <button className="flex-1 py-3 text-xs font-bold text-slate-600 hover:text-primary hover:bg-white transition-all flex items-center justify-center gap-1">
      <span className="material-symbols-outlined text-sm">share</span> 生成分享
                          </button>
      </div>
      </div>
      
      <div className="bg-white rounded-lg border border-slate-100 shadow-sm hover:shadow-md transition-all overflow-hidden group">
      <div className="p-5">
      <div className="flex justify-between items-start mb-4">
      <div className="w-12 h-12 flex items-center justify-center bg-cyan-50 text-cyan-500 rounded-lg">
      <span className="material-symbols-outlined text-3xl">analytics</span>
      </div>
      <span className="px-2 py-1 bg-amber-50 text-amber-600 text-[10px] font-bold rounded-sm uppercase tracking-wide">行业报告</span>
      </div>
      <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-primary transition-colors">2024年量子计算商业化进程季度观察报告</h3>
      <p className="text-sm text-slate-500 line-clamp-2 mb-4">追踪全球顶尖科技公司在量子算力商用化方面的最新突破，预测产业爆发的关键时间节点。</p>
      <div className="flex flex-wrap gap-2 mb-6">
      <span className="text-xs text-slate-400">#前沿技术</span>
      <span className="text-xs text-slate-400">#量子计算</span>
      </div>
      <div className="flex items-center justify-between py-3 border-y border-slate-50 text-xs text-slate-500">
      <div className="flex items-center gap-1">
      <span className="material-symbols-outlined text-yellow-400 text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
      <span className="font-bold text-slate-700">4.5</span>
      </div>
      <div className="flex items-center gap-3">
      <span className="flex items-center gap-1"><span className="material-symbols-outlined text-sm">download</span> 438</span>
      <span className="flex items-center gap-1"><span className="material-symbols-outlined text-sm">attachment</span> 5.4MB</span>
      </div>
      </div>
      </div>
      <div className="flex divide-x divide-slate-50 bg-slate-50/50">
      <button className="flex-1 py-3 text-xs font-bold text-slate-600 hover:text-primary hover:bg-white transition-all flex items-center justify-center gap-1">
      <span className="material-symbols-outlined text-sm">visibility</span> 在线查看
                          </button>
      <button className="flex-1 py-3 text-xs font-bold text-slate-600 hover:text-primary hover:bg-white transition-all flex items-center justify-center gap-1">
      <span className="material-symbols-outlined text-sm">download</span> 立即下载
                          </button>
      <button className="flex-1 py-3 text-xs font-bold text-slate-600 hover:text-primary hover:bg-white transition-all flex items-center justify-center gap-1">
      <span className="material-symbols-outlined text-sm">share</span> 生成分享
                          </button>
      </div>
      </div>
      </div>
      
      <div className="flex items-center justify-end gap-2 mt-8">
      <button className="flex items-center justify-center w-8 h-8 rounded border border-slate-200 text-slate-400 hover:border-primary hover:text-primary transition-all">
      <span className="material-symbols-outlined text-sm">chevron_left</span>
      </button>
      <button className="flex items-center justify-center w-8 h-8 rounded bg-primary text-white text-xs font-bold">1</button>
      <button className="flex items-center justify-center w-8 h-8 rounded border border-transparent text-slate-600 hover:bg-slate-100 text-xs font-bold">2</button>
      <button className="flex items-center justify-center w-8 h-8 rounded border border-transparent text-slate-600 hover:bg-slate-100 text-xs font-bold">3</button>
      <span className="text-slate-400 text-xs font-bold px-2">...</span>
      <button className="flex items-center justify-center w-8 h-8 rounded border border-transparent text-slate-600 hover:bg-slate-100 text-xs font-bold">12</button>
      <button className="flex items-center justify-center w-8 h-8 rounded border border-slate-200 text-slate-400 hover:border-primary hover:text-primary transition-all">
      <span className="material-symbols-outlined text-sm">chevron_right</span>
      </button>
      <div className="flex items-center gap-2 ml-4">
      <span className="text-xs text-slate-500">跳至</span>
      <input className="w-10 h-8 border border-slate-200 rounded text-center text-xs focus:ring-1 focus:ring-primary focus:border-primary outline-none" type="text" value="1"/>
      <span className="text-xs text-slate-500">页</span>
      </div>
      </div>
      </div></div></div></div>
    </div>
  );
}
