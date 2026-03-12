import { useNavigate } from "react-router-dom";

export default function SocialNetworkImportPage() {
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
      <div className="px-6 md:px-20 lg:px-40 flex flex-1 justify-center py-8">
      <div className="layout-content-container flex flex-col max-w-[1200px] flex-1 gap-8">
      
      <div className="flex flex-wrap justify-between gap-3 p-4">
      <div className="flex min-w-72 flex-col gap-2">
      <h1 className="text-slate-900 dark:text-slate-100 text-3xl font-black leading-tight tracking-tight">数据导入与任务管理</h1>
      <p className="text-primary text-base font-normal leading-normal">管理您的社交网络分析任务、上传数据集并监控分析进度</p>
      </div>
      </div>
      
      <div className="bg-white dark:bg-slate-800/50 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 overflow-hidden">
      <div className="p-6 border-b border-slate-100 dark:border-slate-700">
      <h2 className="text-xl font-bold leading-tight tracking-tight flex items-center gap-2">
      <span className="material-symbols-outlined text-primary">cloud_upload</span>
                              数据上传
                          </h2>
      </div>
      <div className="p-6 space-y-6">
      
      <div className="flex">
      <div className="flex h-11 w-full max-w-sm items-center justify-center rounded-xl bg-slate-100 dark:bg-slate-900/50 p-1">
      <label className="flex cursor-pointer h-full grow items-center justify-center overflow-hidden rounded-lg px-4 has-[:checked]:bg-white dark:has-[:checked]:bg-slate-800 has-[:checked]:shadow-sm has-[:checked]:text-primary text-slate-500 text-sm font-semibold transition-all">
      <span className="truncate">文件上传</span>
      <input checked className="hidden" name="upload_method" type="radio" value="file"/>
      </label>
      <label className="flex cursor-pointer h-full grow items-center justify-center overflow-hidden rounded-lg px-4 has-[:checked]:bg-white dark:has-[:checked]:bg-slate-800 has-[:checked]:shadow-sm has-[:checked]:text-primary text-slate-500 text-sm font-semibold transition-all">
      <span className="truncate">API导入</span>
      <input className="hidden" name="upload_method" type="radio" value="api"/>
      </label>
      </div>
      </div>
      
      <div className="flex flex-col items-center gap-4 rounded-xl border-2 border-dashed border-primary/30 bg-primary/5 px-6 py-12 transition-colors hover:border-primary/50">
      <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
      <span className="material-symbols-outlined text-primary text-3xl">upload_file</span>
      </div>
      <div className="flex flex-col items-center gap-1">
      <p className="text-slate-900 dark:text-slate-100 text-lg font-bold">点击或拖拽文件至此区域上传</p>
      <p className="text-slate-500 text-sm font-normal">支持 JSON, CSV 格式文件 (最大 50MB)</p>
      </div>
      <button className="flex min-w-[120px] cursor-pointer items-center justify-center rounded-lg h-10 px-6 bg-primary text-white text-sm font-bold shadow-md hover:bg-primary/90 transition-all">
                                  选择文件
                              </button>
      </div>
      <div className="flex justify-between items-center">
      <a className="text-primary text-sm font-medium hover:underline flex items-center gap-1" href="#">
      <span className="material-symbols-outlined text-sm">download</span>下载数据模板
                              </a>
      </div>
      
      <div className="mt-8">
      <div className="flex items-center justify-between mb-3 px-1">
      <h3 className="text-sm font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider">数据预览与验证</h3>
      <span className="text-xs font-medium text-emerald-500 bg-emerald-50 dark:bg-emerald-500/10 px-2 py-1 rounded-full flex items-center gap-1">
      <span className="material-symbols-outlined text-xs">check_circle</span> 格式验证通过
                                  </span>
      </div>
      <div className="overflow-x-auto rounded-lg border border-slate-200 dark:border-slate-700">
      <table className="w-full text-left border-collapse">
      <thead>
      <tr className="bg-slate-50 dark:bg-slate-800/80 text-slate-600 dark:text-slate-400 text-xs font-bold uppercase">
      <th className="px-4 py-3">Source_ID</th>
      <th className="px-4 py-3">Target_ID</th>
      <th className="px-4 py-3">Weight</th>
      <th className="px-4 py-3">Timestamp</th>
      <th className="px-4 py-3">Type</th>
      </tr>
      </thead>
      <tbody className="text-sm divide-y divide-slate-100 dark:divide-slate-700">
      <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-800/30">
      <td className="px-4 py-3">User_1024</td>
      <td className="px-4 py-3">User_2048</td>
      <td className="px-4 py-3 font-mono">0.85</td>
      <td className="px-4 py-3">2023-11-01 10:22</td>
      <td className="px-4 py-3"><span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-700">Retweet</span></td>
      </tr>
      <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-800/30">
      <td className="px-4 py-3">User_3091</td>
      <td className="px-4 py-3">User_1024</td>
      <td className="px-4 py-3 font-mono">0.92</td>
      <td className="px-4 py-3">2023-11-01 10:25</td>
      <td className="px-4 py-3"><span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-700">Comment</span></td>
      </tr>
      </tbody>
      </table>
      </div>
      </div>
      </div>
      </div>
      
      <div className="bg-white dark:bg-slate-800/50 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 overflow-hidden">
      <div className="p-6 border-b border-slate-100 dark:border-slate-700">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
      <h2 className="text-xl font-bold leading-tight tracking-tight flex items-center gap-2">
      <span className="material-symbols-outlined text-primary">assessment</span>
                                  任务管理
                              </h2>
      
      <div className="flex flex-wrap items-center gap-3">
      <div className="relative">
      <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-sm">search</span>
      <input className="pl-9 pr-4 py-1.5 rounded-full border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-sm focus:ring-primary focus:border-primary w-48 transition-all" placeholder="搜索任务..." type="text"/>
      </div>
      <div className="flex bg-slate-100 dark:bg-slate-900 rounded-full p-1">
      <button className="px-3 py-1 text-xs font-semibold rounded-full bg-white dark:bg-slate-800 shadow-sm text-primary">全部</button>
      <button className="px-3 py-1 text-xs font-semibold rounded-full text-slate-500 hover:text-slate-700">进行中</button>
      <button className="px-3 py-1 text-xs font-semibold rounded-full text-slate-500 hover:text-slate-700">已完成</button>
      </div>
      </div>
      </div>
      </div>
      
      <div className="overflow-x-auto">
      <table className="w-full text-left border-collapse">
      <thead>
      <tr className="bg-slate-50/50 dark:bg-slate-800/40 text-slate-600 dark:text-slate-400 text-xs font-bold uppercase">
      <th className="px-6 py-4">任务名称</th>
      <th className="px-6 py-4">数据源</th>
      <th className="px-6 py-4">分析状态</th>
      <th className="px-6 py-4">创建时间</th>
      <th className="px-6 py-4 text-right">操作</th>
      </tr>
      </thead>
      <tbody className="divide-y divide-slate-100 dark:divide-slate-700">
      
      <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors">
      <td className="px-6 py-4">
      <div className="font-bold text-slate-900 dark:text-slate-100">核心社区发现_Q4</div>
      <div className="text-xs text-slate-500">ID: TASK-8821</div>
      </td>
      <td className="px-6 py-4">
      <div className="flex items-center gap-2">
      <span className="material-symbols-outlined text-sm text-slate-400">description</span>
      <span className="text-sm">twitter_dataset_nov.csv</span>
      </div>
      </td>
      <td className="px-6 py-4">
      <div className="w-full max-w-[120px]">
      <div className="flex items-center justify-between mb-1">
      <span className="text-[10px] font-bold text-primary uppercase">分析中</span>
      <span className="text-[10px] font-bold text-slate-500">75%</span>
      </div>
      <div className="h-1.5 w-full bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
      <div className="h-full bg-primary rounded-full" style={{ width: "75%" }}></div>
      </div>
      </div>
      </td>
      <td className="px-6 py-4 text-sm text-slate-500">2023-11-24 14:30</td>
      <td className="px-6 py-4 text-right space-x-1">
      <button className="p-2 text-slate-400 hover:text-primary transition-colors disabled:opacity-30" disabled title="查看结果">
      <span className="material-symbols-outlined text-lg">visibility</span>
      </button>
      <button className="p-2 text-slate-400 hover:text-primary transition-colors" title="重新分析">
      <span className="material-symbols-outlined text-lg">refresh</span>
      </button>
      <button className="p-2 text-slate-400 hover:text-rose-500 transition-colors" title="删除">
      <span className="material-symbols-outlined text-lg">delete</span>
      </button>
      </td>
      </tr>
      
      <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors">
      <td className="px-6 py-4">
      <div className="font-bold text-slate-900 dark:text-slate-100">KOL影响力权重评估</div>
      <div className="text-xs text-slate-500">ID: TASK-8790</div>
      </td>
      <td className="px-6 py-4">
      <div className="flex items-center gap-2">
      <span className="material-symbols-outlined text-sm text-slate-400">api</span>
      <span className="text-sm">Weibo_API_Streaming</span>
      </div>
      </td>
      <td className="px-6 py-4">
      <div className="flex items-center gap-2">
      <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
      <span className="text-sm font-medium text-emerald-500">已完成</span>
      </div>
      </td>
      <td className="px-6 py-4 text-sm text-slate-500">2023-11-20 09:15</td>
      <td className="px-6 py-4 text-right space-x-1">
      <button className="p-2 text-primary hover:bg-primary/10 rounded transition-colors" title="查看结果">
      <span className="material-symbols-outlined text-lg">visibility</span>
      </button>
      <button className="p-2 text-slate-400 hover:text-primary transition-colors" title="导出数据">
      <span className="material-symbols-outlined text-lg">download</span>
      </button>
      <button className="p-2 text-slate-400 hover:text-rose-500 transition-colors" title="删除">
      <span className="material-symbols-outlined text-lg">delete</span>
      </button>
      </td>
      </tr>
      
      <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors">
      <td className="px-6 py-4">
      <div className="font-bold text-slate-900 dark:text-slate-100">社交关系演化路径</div>
      <div className="text-xs text-slate-500">ID: TASK-8655</div>
      </td>
      <td className="px-6 py-4">
      <div className="flex items-center gap-2">
      <span className="material-symbols-outlined text-sm text-slate-400">description</span>
      <span className="text-sm">historical_nodes_2022.json</span>
      </div>
      </td>
      <td className="px-6 py-4">
      <div className="flex items-center gap-2 text-rose-500">
      <span className="material-symbols-outlined text-sm">error</span>
      <span className="text-sm font-medium">分析失败</span>
      </div>
      </td>
      <td className="px-6 py-4 text-sm text-slate-500">2023-11-18 18:40</td>
      <td className="px-6 py-4 text-right space-x-1">
      <button className="p-2 text-slate-400 hover:text-primary transition-colors disabled:opacity-30" disabled title="查看结果">
      <span className="material-symbols-outlined text-lg">visibility</span>
      </button>
      <button className="p-2 text-primary hover:bg-primary/10 rounded transition-colors" title="重新分析">
      <span className="material-symbols-outlined text-lg">refresh</span>
      </button>
      <button className="p-2 text-slate-400 hover:text-rose-500 transition-colors" title="删除">
      <span className="material-symbols-outlined text-lg">delete</span>
      </button>
      </td>
      </tr>
      </tbody>
      </table>
      </div>
      
      <div className="p-4 border-t border-slate-100 dark:border-slate-700 flex items-center justify-between">
      <p className="text-xs text-slate-500">显示第 1-3 条，共 24 条记录</p>
      <div className="flex gap-2">
      <button className="px-3 py-1 rounded border border-slate-200 dark:border-slate-700 text-xs font-semibold disabled:opacity-50">上一页</button>
      <button className="px-3 py-1 rounded bg-primary text-white text-xs font-semibold">1</button>
      <button className="px-3 py-1 rounded border border-slate-200 dark:border-slate-700 text-xs font-semibold">2</button>
      <button className="px-3 py-1 rounded border border-slate-200 dark:border-slate-700 text-xs font-semibold">下一页</button>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div></div></div></div>
    </div>
  );
}
