import { useNavigate } from "react-router-dom";

export default function ProjectStatsPage() {
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
      <div className="flex h-screen w-full bg-slate-50 overflow-hidden"><aside id="sidebar" className="w-64 bg-white border-r border-slate-200 flex flex-col z-30 shrink-0" style={{ minWidth: "256px" }}><div className="p-5 flex items-center gap-3 border-b border-slate-100"><div className="w-8 h-8 bg-[#0d9488] rounded-lg flex items-center justify-center"><span className="material-symbols-outlined text-white" style={{ fontSize: "20px" }}>insights</span></div><span className="font-bold text-base text-slate-800">GKX</span><a href="/home" onClick={(event) => { event.preventDefault(); navigate("/home"); }} className="ml-auto text-slate-400 hover:text-slate-600" title="返回首页"><span className="material-symbols-outlined" style={{ fontSize: "18px" }}>home</span></a></div><div className="px-4 pt-4 pb-1"><span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">战略咨询体系</span></div><nav className="flex-1 px-2 py-2 overflow-y-auto space-y-0.5"><div className="nav-group"><button onClick={toggleGroup} className="w-full flex items-center gap-3 px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 rounded-lg transition-colors"><span className="material-symbols-outlined text-xl text-slate-400">search_check</span><span className="flex-1 text-left">研究需求分析</span><span className="material-symbols-outlined text-sm text-slate-400 expand-icon">expand_more</span></button><div className="group-children overflow-hidden" style={{ maxHeight: "0", transition: "max-height .25s ease" }}><a href="/strategy/entity-list.html" onClick={(event) => { event.preventDefault(); navigate("/strategy/entity-list.html"); }} className="flex items-center pl-12 pr-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#0d9488] rounded-lg nav-item" data-file="entity-list.html">科技实体清单</a><a href="/strategy/frontier-tech.html" onClick={(event) => { event.preventDefault(); navigate("/strategy/frontier-tech.html"); }} className="flex items-center pl-12 pr-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#0d9488] rounded-lg nav-item" data-file="frontier-tech.html">颠覆性与前沿技术分析</a><a href="/strategy/media-focus.html" onClick={(event) => { event.preventDefault(); navigate("/strategy/media-focus.html"); }} className="flex items-center pl-12 pr-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#0d9488] rounded-lg nav-item" data-file="media-focus.html">媒体聚焦</a></div></div><div className="nav-group"><button onClick={toggleGroup} className="w-full flex items-center gap-3 px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 rounded-lg transition-colors"><span className="material-symbols-outlined text-xl text-slate-400">hub</span><span className="flex-1 text-left">技术体系分析</span><span className="material-symbols-outlined text-sm text-slate-400 expand-icon">expand_more</span></button><div className="group-children overflow-hidden" style={{ maxHeight: "0", transition: "max-height .25s ease" }}><a href="/strategy/tech-system.html" onClick={(event) => { event.preventDefault(); navigate("/strategy/tech-system.html"); }} className="flex items-center pl-12 pr-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#0d9488] rounded-lg nav-item" data-file="tech-system.html">技术体系</a><a href="/strategy/paper-dashboard.html" onClick={(event) => { event.preventDefault(); navigate("/strategy/paper-dashboard.html"); }} className="flex items-center pl-12 pr-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#0d9488] rounded-lg nav-item" data-file="paper-dashboard.html">论文分析</a><a href="/strategy/patent.html" onClick={(event) => { event.preventDefault(); navigate("/strategy/patent.html"); }} className="flex items-center pl-12 pr-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#0d9488] rounded-lg nav-item" data-file="patent.html">专利分析</a><a href="/strategy/project-stats.html" onClick={(event) => { event.preventDefault(); navigate("/strategy/project-stats.html"); }} className="flex items-center pl-12 pr-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#0d9488] rounded-lg nav-item" data-file="project-stats.html">科研项目分析</a><a href="/strategy/social-network-import.html" onClick={(event) => { event.preventDefault(); navigate("/strategy/social-network-import.html"); }} className="flex items-center pl-12 pr-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#0d9488] rounded-lg nav-item" data-file="social-network-import.html">社会网络分析</a></div></div><div className="nav-group"><button onClick={toggleGroup} className="w-full flex items-center gap-3 px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 rounded-lg transition-colors"><span className="material-symbols-outlined text-xl text-slate-400">trending_up</span><span className="flex-1 text-left">技术趋势分析</span><span className="material-symbols-outlined text-sm text-slate-400 expand-icon">expand_more</span></button><div className="group-children overflow-hidden" style={{ maxHeight: "0", transition: "max-height .25s ease" }}><a href="/strategy/clustering-task.html" onClick={(event) => { event.preventDefault(); navigate("/strategy/clustering-task.html"); }} className="flex items-center pl-12 pr-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#0d9488] rounded-lg nav-item" data-file="clustering-task.html">聚类分析</a><a href="/strategy/common-network-task.html" onClick={(event) => { event.preventDefault(); navigate("/strategy/common-network-task.html"); }} className="flex items-center pl-12 pr-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#0d9488] rounded-lg nav-item" data-file="common-network-task.html">共性网络分析</a><a href="/strategy/tech-trend.html" onClick={(event) => { event.preventDefault(); navigate("/strategy/tech-trend.html"); }} className="flex items-center pl-12 pr-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#0d9488] rounded-lg nav-item" data-file="tech-trend.html">技术趋势分析</a><a href="/strategy/tech-alert.html" onClick={(event) => { event.preventDefault(); navigate("/strategy/tech-alert.html"); }} className="flex items-center pl-12 pr-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#0d9488] rounded-lg nav-item" data-file="tech-alert.html">技术动态预警</a></div></div><div className="nav-group"><button onClick={toggleGroup} className="w-full flex items-center gap-3 px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 rounded-lg transition-colors"><span className="material-symbols-outlined text-xl text-slate-400">route</span><span className="flex-1 text-left">领域技术线路</span><span className="material-symbols-outlined text-sm text-slate-400 expand-icon">expand_more</span></button><div className="group-children overflow-hidden" style={{ maxHeight: "0", transition: "max-height .25s ease" }}><a href="/strategy/delphi.html" onClick={(event) => { event.preventDefault(); navigate("/strategy/delphi.html"); }} className="flex items-center pl-12 pr-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#0d9488] rounded-lg nav-item" data-file="delphi.html">德尔菲问卷</a><a href="/strategy/tech-roadmap.html" onClick={(event) => { event.preventDefault(); navigate("/strategy/tech-roadmap.html"); }} className="flex items-center pl-12 pr-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#0d9488] rounded-lg nav-item" data-file="tech-roadmap.html">技术发展线路</a></div></div><div className="nav-group"><button onClick={toggleGroup} className="w-full flex items-center gap-3 px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 rounded-lg transition-colors"><span className="material-symbols-outlined text-xl text-slate-400">description</span><span className="flex-1 text-left">战略咨询报告</span><span className="material-symbols-outlined text-sm text-slate-400 expand-icon">expand_more</span></button><div className="group-children overflow-hidden" style={{ maxHeight: "0", transition: "max-height .25s ease" }}><a href="/strategy/report-generation.html" onClick={(event) => { event.preventDefault(); navigate("/strategy/report-generation.html"); }} className="flex items-center pl-12 pr-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#0d9488] rounded-lg nav-item" data-file="strategy-shell.html">研究报告管理</a><a href="/strategy/insight-publish.html" onClick={(event) => { event.preventDefault(); navigate("/strategy/insight-publish.html"); }} className="flex items-center pl-12 pr-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#0d9488] rounded-lg nav-item" data-file="insight-publish.html">洞察报告发布</a><a href="/strategy/hot-analysis.html" onClick={(event) => { event.preventDefault(); navigate("/strategy/hot-analysis.html"); }} className="flex items-center pl-12 pr-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#0d9488] rounded-lg nav-item" data-file="hot-analysis.html">热点分析</a><a href="/strategy/report-generation.html" onClick={(event) => { event.preventDefault(); navigate("/strategy/report-generation.html"); }} className="flex items-center pl-12 pr-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#0d9488] rounded-lg nav-item" data-file="report-generation.html">战略咨询报告生成</a></div></div><div className="nav-group"><button onClick={toggleGroup} className="w-full flex items-center gap-3 px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 rounded-lg transition-colors"><span className="material-symbols-outlined text-xl text-slate-400">folder_special</span><span className="flex-1 text-left">战略咨询成果</span><span className="material-symbols-outlined text-sm text-slate-400 expand-icon">expand_more</span></button><div className="group-children overflow-hidden" style={{ maxHeight: "0", transition: "max-height .25s ease" }}><a href="/strategy/strategy-cases.html" onClick={(event) => { event.preventDefault(); navigate("/strategy/strategy-cases.html"); }} className="flex items-center pl-12 pr-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#0d9488] rounded-lg nav-item" data-file="strategy-cases.html">战略咨询案例展示</a></div></div><div className="nav-group"><button onClick={toggleGroup} className="w-full flex items-center gap-3 px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 rounded-lg transition-colors"><span className="material-symbols-outlined text-xl text-slate-400">query_stats</span><span className="flex-1 text-left">智能问数</span><span className="material-symbols-outlined text-sm text-slate-400 expand-icon">expand_more</span></button><div className="group-children overflow-hidden" style={{ maxHeight: "0", transition: "max-height .25s ease" }}><a href="/strategy/analysis-start.html" onClick={(event) => { event.preventDefault(); navigate("/strategy/analysis-start.html"); }} className="flex items-center pl-12 pr-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#0d9488] rounded-lg nav-item" data-file="analysis-start.html">开始分析</a><a href="/strategy/case-share.html" onClick={(event) => { event.preventDefault(); navigate("/strategy/case-share.html"); }} className="flex items-center pl-12 pr-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#0d9488] rounded-lg nav-item" data-file="case-share.html">案例分享</a><a href="/strategy/multi-source-data.html" onClick={(event) => { event.preventDefault(); navigate("/strategy/multi-source-data.html"); }} className="flex items-center pl-12 pr-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#0d9488] rounded-lg nav-item" data-file="multi-source-data.html">多源数据接入</a><a href="/strategy/data-dashboard.html" onClick={(event) => { event.preventDefault(); navigate("/strategy/data-dashboard.html"); }} className="flex items-center pl-12 pr-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#0d9488] rounded-lg nav-item" data-file="data-dashboard.html">数据看板显示</a><a href="/strategy/report-gen-ai.html" onClick={(event) => { event.preventDefault(); navigate("/strategy/report-gen-ai.html"); }} className="flex items-center pl-12 pr-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#0d9488] rounded-lg nav-item" data-file="report-gen-ai.html">一键报告生成</a></div></div></nav><div className="p-4 border-t border-slate-100"><div className="bg-slate-50 rounded-xl p-3 flex items-center gap-3"><div className="w-9 h-9 bg-[#0d9488] rounded-lg flex items-center justify-center"><span className="material-symbols-outlined text-white" style={{ fontSize: "18px" }}>manage_accounts</span></div><div><p className="text-xs font-bold text-slate-800">系统管理员</p><p className="text-[10px] text-slate-500">ID: GKX-0822</p></div></div></div></aside><div className="flex-1 flex flex-col min-w-0 overflow-hidden"><header className="h-14 bg-white border-b border-slate-200 flex items-center justify-between px-6 shrink-0"><div className="flex items-center gap-4"><button onClick={toggleSidebar} className="p-1 text-slate-500 hover:bg-slate-100 rounded-lg"><span className="material-symbols-outlined">menu</span></button><h2 className="text-sm font-bold text-slate-800">战略咨询智能支持</h2></div><div className="flex-1 max-w-md mx-6"><div className="relative"><span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" style={{ fontSize: "18px" }}>search</span><input className="w-full pl-9 pr-4 py-1.5 bg-slate-100 rounded-full text-sm placeholder-slate-400 outline-none border-none" placeholder="搜索功能、报告..." type="text"/></div></div><div className="flex items-center gap-2"><button className="p-2 text-slate-500 hover:bg-slate-100 rounded-full relative"><span className="material-symbols-outlined" style={{ fontSize: "22px" }}>notifications</span><span className="absolute top-2 right-2 w-1.5 h-1.5 bg-red-500 rounded-full"></span></button></div></header><div className="flex-1 overflow-y-auto"><div className="layout-container flex h-full grow flex-col">
      <div className="max-w-[1200px] mx-auto w-full px-6 py-8">
      <nav className="flex items-center gap-2 mb-6 text-sm font-medium">
      <a className="text-primary hover:opacity-80" href="#">新型高端智库系统</a>
      <span className="text-slate-400">/</span>
      <a className="text-primary hover:opacity-80" href="#">战略咨询智能支持</a>
      <span className="text-slate-400">/</span>
      <a className="text-primary hover:opacity-80" href="#">技术体系分析</a>
      <span className="text-slate-400">/</span>
      <span className="text-slate-600">科研项目分析</span>
      </nav>
      <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
      <h1 className="text-2xl font-black tracking-tight text-slate-900">科研项目分析</h1>
      <div className="flex items-center gap-3">
      <button className="flex items-center gap-2 px-5 py-2.5 bg-primary text-white rounded-xl font-bold hover:opacity-90 transition-all shadow-sm">
      <span className="material-symbols-outlined text-[20px]">add</span>
      <span>新增分析任务</span>
      </button>
      <button className="flex items-center gap-2 px-5 py-2.5 bg-white text-slate-700 border border-slate-200 rounded-xl font-bold hover:bg-slate-50 transition-all shadow-sm">
      <span className="material-symbols-outlined text-[20px]">download</span>
      <span>导出数据</span>
      </button>
      <button className="flex items-center justify-center w-11 h-11 bg-white text-slate-700 border border-slate-200 rounded-xl hover:bg-slate-50 transition-all shadow-sm">
      <span className="material-symbols-outlined">refresh</span>
      </button>
      </div>
      </div>
      <div className="border-b border-slate-200 mb-8">
      <div className="flex gap-10">
      <a className="pb-4 text-primary font-bold border-b-2 border-primary relative" href="#">项目检索清单</a>
      <a className="pb-4 text-slate-500 font-bold border-b-2 border-transparent hover:text-primary transition-colors" href="#">统计分析看板</a>
      <a className="pb-4 text-slate-500 font-bold border-b-2 border-transparent hover:text-primary transition-colors" href="#">分析任务管理</a>
      </div>
      </div>
      <div className="bg-white p-6 rounded-xl custom-shadow mb-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-end">
      <div className="lg:col-span-2">
      <label className="block text-xs font-bold text-slate-400 mb-2 uppercase tracking-wider">关键词检索</label>
      <div className="relative">
      <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">search</span>
      <input className="w-full pl-11 pr-4 py-2.5 bg-slate-50 border-none rounded-full focus:ring-2 focus:ring-primary/20 text-sm" placeholder="搜索项目名称、负责人、关键词..." type="text"/>
      </div>
      </div>
      <div>
      <label className="block text-xs font-bold text-slate-400 mb-2 uppercase tracking-wider">技术领域</label>
      <select className="w-full py-2.5 bg-slate-50 border-none rounded-lg focus:ring-2 focus:ring-primary/20 text-sm">
      <option>全部领域</option>
      <option>人工智能</option>
      <option>生物医药</option>
      <option>半导体</option>
      </select>
      </div>
      <div>
      <label className="block text-xs font-bold text-slate-400 mb-2 uppercase tracking-wider">资助来源</label>
      <select className="w-full py-2.5 bg-slate-50 border-none rounded-lg focus:ring-2 focus:ring-primary/20 text-sm">
      <option>全部来源</option>
      <option>国家自然科学基金</option>
      <option>科技部重点研发计划</option>
      </select>
      </div>
      <div>
      <label className="block text-xs font-bold text-slate-400 mb-2 uppercase tracking-wider">项目状态</label>
      <select className="w-full py-2.5 bg-slate-50 border-none rounded-lg focus:ring-2 focus:ring-primary/20 text-sm">
      <option>进行中</option>
      <option>已结题</option>
      <option>启动中</option>
      <option>结项评审</option>
      </select>
      </div>
      <div>
      <label className="block text-xs font-bold text-slate-400 mb-2 uppercase tracking-wider">执行周期</label>
      <input className="w-full py-2.5 bg-slate-50 border-none rounded-lg focus:ring-2 focus:ring-primary/20 text-sm" placeholder="选择日期范围" type="text"/>
      </div>
      <div className="flex gap-2">
      <button className="flex-1 px-6 py-2.5 bg-primary text-white rounded-lg font-bold hover:opacity-90 transition-all">查询</button>
      <button className="flex-1 px-6 py-2.5 bg-slate-100 text-slate-600 rounded-lg font-bold hover:bg-slate-200 transition-all">重置</button>
      </div>
      </div>
      </div>
      <div className="flex items-center justify-between mb-4">
      <div className="flex items-center gap-4">
      <div className="text-sm font-bold text-slate-700">实体数据列表 <span className="text-primary ml-1">1,248</span></div>
      <div className="flex bg-white rounded-lg p-1 border border-slate-200">
      <button className="p-1 text-primary bg-primary/10 rounded"><span className="material-symbols-outlined block text-[20px]">list</span></button>
      <button className="p-1 text-slate-400 hover:text-slate-600"><span className="material-symbols-outlined block text-[20px]">grid_view</span></button>
      </div>
      </div>
      <div className="flex items-center gap-3">
      <button className="flex items-center gap-1.5 px-3 py-1.5 bg-white text-slate-600 border border-slate-200 rounded-lg text-sm font-bold hover:bg-slate-50">
      <span className="material-symbols-outlined text-[18px]">upload</span>
      <span>批量导入</span>
      </button>
      <button className="flex items-center gap-1.5 px-3 py-1.5 bg-white text-slate-600 border border-slate-200 rounded-lg text-sm font-bold hover:bg-slate-50">
      <span className="material-symbols-outlined text-[18px]">download</span>
      <span>导出</span>
      </button>
      </div>
      </div>
      <div className="bg-white rounded-xl custom-shadow overflow-hidden mb-6">
      <div className="overflow-x-auto">
      <table className="w-full text-left">
      <thead>
      <tr className="bg-slate-50/80 border-b border-slate-100">
      <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">项目名称</th>
      <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">所属领域</th>
      <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">负责人</th>
      <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">承担单位</th>
      <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">项目经费</th>
      <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">状态</th>
      <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider text-right">操作</th>
      </tr>
      </thead>
      <tbody className="divide-y divide-slate-50">
      <tr className="hover:bg-slate-50/50 transition-colors">
      <td className="px-6 py-4">
      <div className="flex items-center gap-2">
      <span className="material-symbols-outlined text-primary text-[20px]">description</span>
      <span className="font-bold text-slate-900">生成式AI在药物发现中的应用</span>
      </div>
      </td>
      <td className="px-6 py-4">
      <div className="flex gap-2">
      <span className="px-2 py-0.5 bg-blue-50 text-blue-600 text-[11px] font-bold rounded">人工智能</span>
      <span className="px-2 py-0.5 bg-teal-50 text-teal-600 text-[11px] font-bold rounded">生物医药</span>
      </div>
      </td>
      <td className="px-6 py-4">
      <div className="text-sm">
      <span className="font-bold text-slate-700">张文宏</span>
      <span className="text-slate-400 ml-1">教授</span>
      </div>
      </td>
      <td className="px-6 py-4 text-sm text-slate-600">复旦大学附属华山医院</td>
      <td className="px-6 py-4 font-bold text-slate-900">1,250万</td>
      <td className="px-6 py-4">
      <span className="px-2.5 py-1 text-[11px] font-bold bg-emerald-50 text-emerald-600 rounded-full flex items-center w-fit gap-1">
      <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></span>
                                              进行中
                                          </span>
      </td>
      <td className="px-6 py-4 text-right">
      <div className="flex justify-end gap-4">
      <a className="text-primary text-sm font-bold hover:underline" href="#">查看详情</a>
      <a className="text-primary text-sm font-bold hover:underline" href="#">关联分析</a>
      </div>
      </td>
      </tr>
      <tr className="hover:bg-slate-50/50 transition-colors">
      <td className="px-6 py-4">
      <div className="flex items-center gap-2">
      <span className="material-symbols-outlined text-primary text-[20px]">description</span>
      <span className="font-bold text-slate-900">2nm制程关键设备研发专项</span>
      </div>
      </td>
      <td className="px-6 py-4">
      <div className="flex gap-2">
      <span className="px-2 py-0.5 bg-blue-50 text-blue-600 text-[11px] font-bold rounded">半导体制造</span>
      </div>
      </td>
      <td className="px-6 py-4">
      <div className="text-sm">
      <span className="font-bold text-slate-700">林本坚</span>
      <span className="text-slate-400 ml-1">院士</span>
      </div>
      </td>
      <td className="px-6 py-4 text-sm text-slate-600">清华大学集成电路学院</td>
      <td className="px-6 py-4 font-bold text-slate-900">4,800万</td>
      <td className="px-6 py-4">
      <span className="px-2.5 py-1 text-[11px] font-bold bg-sky-50 text-sky-600 rounded-full flex items-center w-fit gap-1">
      <span className="w-1.5 h-1.5 bg-sky-500 rounded-full"></span>
                                              启动中
                                          </span>
      </td>
      <td className="px-6 py-4 text-right">
      <div className="flex justify-end gap-4">
      <a className="text-primary text-sm font-bold hover:underline" href="#">查看详情</a>
      <a className="text-primary text-sm font-bold hover:underline" href="#">关联分析</a>
      </div>
      </td>
      </tr>
      <tr className="hover:bg-slate-50/50 transition-colors">
      <td className="px-6 py-4">
      <div className="flex items-center gap-2">
      <span className="material-symbols-outlined text-primary text-[20px]">description</span>
      <span className="font-bold text-slate-900">深海自主无人探测系统研究</span>
      </div>
      </td>
      <td className="px-6 py-4">
      <div className="flex gap-2">
      <span className="px-2 py-0.5 bg-blue-50 text-blue-600 text-[11px] font-bold rounded">海洋装备</span>
      <span className="px-2 py-0.5 bg-slate-50 text-slate-600 text-[11px] font-bold rounded">自动化</span>
      </div>
      </td>
      <td className="px-6 py-4">
      <div className="text-sm">
      <span className="font-bold text-slate-700">王海峰</span>
      <span className="text-slate-400 ml-1">研究员</span>
      </div>
      </td>
      <td className="px-6 py-4 text-sm text-slate-600">中船重工第702研究所</td>
      <td className="px-6 py-4 font-bold text-slate-900">850万</td>
      <td className="px-6 py-4">
      <span className="px-2.5 py-1 text-[11px] font-bold bg-amber-50 text-amber-600 rounded-full flex items-center w-fit gap-1">
      <span className="w-1.5 h-1.5 bg-amber-500 rounded-full"></span>
                                              结项评审
                                          </span>
      </td>
      <td className="px-6 py-4 text-right">
      <div className="flex justify-end gap-4">
      <a className="text-primary text-sm font-bold hover:underline" href="#">查看详情</a>
      <a className="text-primary text-sm font-bold hover:underline" href="#">关联分析</a>
      </div>
      </td>
      </tr>
      <tr className="hover:bg-slate-50/50 transition-colors">
      <td className="px-6 py-4">
      <div className="flex items-center gap-2">
      <span className="material-symbols-outlined text-primary text-[20px]">description</span>
      <span className="font-bold text-slate-900">量子通信加密算法安全性演化</span>
      </div>
      </td>
      <td className="px-6 py-4">
      <div className="flex gap-2">
      <span className="px-2 py-0.5 bg-blue-50 text-blue-600 text-[11px] font-bold rounded">量子计算</span>
      </div>
      </td>
      <td className="px-6 py-4">
      <div className="text-sm">
      <span className="font-bold text-slate-700">潘建伟</span>
      <span className="text-slate-400 ml-1">院士</span>
      </div>
      </td>
      <td className="px-6 py-4 text-sm text-slate-600">中国科学技术大学</td>
      <td className="px-6 py-4 font-bold text-slate-900">2,100万</td>
      <td className="px-6 py-4">
      <span className="px-2.5 py-1 text-[11px] font-bold bg-emerald-50 text-emerald-600 rounded-full flex items-center w-fit gap-1">
      <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></span>
                                              进行中
                                          </span>
      </td>
      <td className="px-6 py-4 text-right">
      <div className="flex justify-end gap-4">
      <a className="text-primary text-sm font-bold hover:underline" href="#">查看详情</a>
      <a className="text-primary text-sm font-bold hover:underline" href="#">关联分析</a>
      </div>
      </td>
      </tr>
      </tbody>
      </table>
      </div>
      </div>
      <div className="flex items-center justify-end gap-2 text-sm font-medium">
      <button className="w-8 h-8 flex items-center justify-center rounded border border-slate-200 text-slate-400 hover:border-primary hover:text-primary transition-colors">
      <span className="material-symbols-outlined text-[18px]">chevron_left</span>
      </button>
      <button className="w-8 h-8 flex items-center justify-center rounded bg-primary text-white">1</button>
      <button className="w-8 h-8 flex items-center justify-center rounded border border-slate-200 text-slate-600 hover:border-primary hover:text-primary transition-colors">2</button>
      <button className="w-8 h-8 flex items-center justify-center rounded border border-slate-200 text-slate-600 hover:border-primary hover:text-primary transition-colors">3</button>
      <span className="px-2 text-slate-400">...</span>
      <button className="w-8 h-8 flex items-center justify-center rounded border border-slate-200 text-slate-600 hover:border-primary hover:text-primary transition-colors">12</button>
      <button className="w-8 h-8 flex items-center justify-center rounded border border-slate-200 text-slate-400 hover:border-primary hover:text-primary transition-colors">
      <span className="material-symbols-outlined text-[18px]">chevron_right</span>
      </button>
      </div>
      </div>
      </div></div></div></div>
    </div>
  );
}
