import { useNavigate } from "react-router-dom";

export default function ShenzhenListPage() {
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
      <div className="flex h-screen w-full bg-slate-50 overflow-hidden"><aside id="sidebar" className="w-64 bg-white border-r border-slate-200 flex flex-col z-30 shrink-0" style={{ minWidth: "256px" }}><div className="p-5 flex items-center gap-3 border-b border-slate-100"><div className="w-8 h-8 bg-[#1392ec] rounded-lg flex items-center justify-center"><span className="material-symbols-outlined text-white" style={{ fontSize: "20px" }}>insights</span></div><span className="font-bold text-base text-slate-800">GKX</span><a href="/home" onClick={(event) => { event.preventDefault(); navigate("/home"); }} className="ml-auto text-slate-400 hover:text-slate-600" title="返回首页"><span className="material-symbols-outlined" style={{ fontSize: "18px" }}>home</span></a></div><div className="px-4 pt-4 pb-1"><span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">基础研究决策</span></div><nav className="flex-1 px-2 py-2 overflow-y-auto space-y-0.5"><div className="nav-group"><button onClick={toggleGroup} className="w-full flex items-center gap-3 px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 rounded-lg transition-colors"><span className="material-symbols-outlined text-xl text-slate-400">checklist</span><span className="flex-1 text-left">基础研究问题清单</span><span className="material-symbols-outlined text-sm text-slate-400 expand-icon">expand_more</span></button><div className="group-children overflow-hidden" style={{ maxHeight: "0", transition: "max-height .25s ease" }}><a href="/research/problem-identification.html" onClick={(event) => { event.preventDefault(); navigate("/research/problem-identification.html"); }} className="flex items-center pl-12 pr-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#1392ec] rounded-lg nav-item" data-file="problem-identification.html">问题识别与清单研发</a><a href="/research/problem-trend.html" onClick={(event) => { event.preventDefault(); navigate("/research/problem-trend.html"); }} className="flex items-center pl-12 pr-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#1392ec] rounded-lg nav-item" data-file="problem-trend.html">问题发展趋势分析</a><a href="/research/competition-report.html" onClick={(event) => { event.preventDefault(); navigate("/research/competition-report.html"); }} className="flex items-center pl-12 pr-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#1392ec] rounded-lg nav-item" data-file="competition-report.html">国内外竞争格局报告</a></div></div><div className="nav-group"><button onClick={toggleGroup} className="w-full flex items-center gap-3 px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 rounded-lg transition-colors"><span className="material-symbols-outlined text-xl text-slate-400">location_city</span><span className="flex-1 text-left">基础研究部署清单</span><span className="material-symbols-outlined text-sm text-slate-400 expand-icon">expand_more</span></button><div className="group-children overflow-hidden" style={{ maxHeight: "0", transition: "max-height .25s ease" }}><a href="/research/shenzhen-list.html" onClick={(event) => { event.preventDefault(); navigate("/research/shenzhen-list.html"); }} className="flex items-center pl-12 pr-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#1392ec] rounded-lg nav-item" data-file="shenzhen-list.html">深圳市基础研究部署清单</a></div></div><div className="nav-group"><button onClick={toggleGroup} className="w-full flex items-center gap-3 px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 rounded-lg transition-colors"><span className="material-symbols-outlined text-xl text-slate-400">assessment</span><span className="flex-1 text-left">基础研究成果评估</span><span className="material-symbols-outlined text-sm text-slate-400 expand-icon">expand_more</span></button><div className="group-children overflow-hidden" style={{ maxHeight: "0", transition: "max-height .25s ease" }}></div></div></nav><div className="p-4 border-t border-slate-100"><div className="bg-slate-50 rounded-xl p-3 flex items-center gap-3"><div className="w-9 h-9 bg-[#1392ec] rounded-lg flex items-center justify-center"><span className="material-symbols-outlined text-white" style={{ fontSize: "18px" }}>manage_accounts</span></div><div><p className="text-xs font-bold text-slate-800">系统管理员</p><p className="text-[10px] text-slate-500">ID: GKX-0822</p></div></div></div></aside><div className="flex-1 flex flex-col min-w-0 overflow-hidden"><header className="h-14 bg-white border-b border-slate-200 flex items-center justify-between px-6 shrink-0"><div className="flex items-center gap-4"><button onClick={toggleSidebar} className="p-1 text-slate-500 hover:bg-slate-100 rounded-lg"><span className="material-symbols-outlined">menu</span></button><h2 className="text-sm font-bold text-slate-800">基础研究智能决策</h2></div><div className="flex-1 max-w-md mx-6"><div className="relative"><span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" style={{ fontSize: "18px" }}>search</span><input className="w-full pl-9 pr-4 py-1.5 bg-slate-100 rounded-full text-sm placeholder-slate-400 outline-none border-none" placeholder="搜索功能、报告..." type="text"/></div></div><div className="flex items-center gap-2"><button className="p-2 text-slate-500 hover:bg-slate-100 rounded-full relative"><span className="material-symbols-outlined" style={{ fontSize: "22px" }}>notifications</span><span className="absolute top-2 right-2 w-1.5 h-1.5 bg-red-500 rounded-full"></span></button></div></header><div className="flex-1 overflow-y-auto"><div className="max-w-[1440px] mx-auto px-6 py-8">
      
      <nav className="flex items-center gap-2 mb-6 text-sm">
      <a className="text-accent-teal hover:text-primary transition-colors" href="#">新型高端智库系统</a>
      <span className="text-slate-400 material-symbols-outlined text-xs">chevron_right</span>
      <a className="text-accent-teal hover:text-primary transition-colors" href="#">基础研究智能决策</a>
      <span className="text-slate-400 material-symbols-outlined text-xs">chevron_right</span>
      <a className="text-accent-teal hover:text-primary transition-colors" href="#">基础研究部署清单</a>
      <span className="text-slate-400 material-symbols-outlined text-xs">chevron_right</span>
      <span className="font-medium text-slate-900 dark:text-slate-100">深圳市基础研究部署清单</span>
      </nav>
      
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
      <h1 className="text-3xl font-black tracking-tight text-slate-900 dark:text-slate-100">深圳市基础研究部署清单</h1>
      <div className="flex flex-wrap gap-3">
      <button className="flex items-center gap-2 px-5 py-2.5 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg font-semibold text-slate-700 dark:text-slate-200 hover:bg-slate-50 transition-all">
      <span className="material-symbols-outlined text-lg">description</span>
      <span>生成部署报告</span>
      </button>
      <button className="flex items-center gap-2 px-5 py-2.5 bg-primary text-white rounded-lg font-semibold hover:opacity-90 transition-all shadow-sm">
      <span className="material-symbols-outlined text-lg">add_circle</span>
      <span>新建项目录入</span>
      </button>
      <button className="flex items-center justify-center w-11 h-11 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-50 transition-all">
      <span className="material-symbols-outlined">refresh</span>
      </button>
      </div>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-slate-100 dark:border-slate-700 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-center justify-between mb-2">
      <span className="text-slate-500 dark:text-slate-400 font-medium">项目总数</span>
      <span className="material-symbols-outlined text-primary bg-primary/10 p-1.5 rounded-lg">folder_open</span>
      </div>
      <div className="text-3xl font-bold text-slate-900 dark:text-slate-100">1,284</div>
      <div className="mt-2 text-xs text-emerald-500 font-medium flex items-center gap-1">
      <span className="material-symbols-outlined text-xs">trending_up</span>
      <span>+12% 较上年度</span>
      </div>
      </div>
      <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-slate-100 dark:border-slate-700 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-center justify-between mb-2">
      <span className="text-slate-500 dark:text-slate-400 font-medium">资助总额 (亿元)</span>
      <span className="material-symbols-outlined text-primary bg-primary/10 p-1.5 rounded-lg">payments</span>
      </div>
      <div className="text-3xl font-bold text-slate-900 dark:text-slate-100">45.2</div>
      <div className="mt-2 text-xs text-emerald-500 font-medium flex items-center gap-1">
      <span className="material-symbols-outlined text-xs">trending_up</span>
      <span>+8.4% 同比增长</span>
      </div>
      </div>
      <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-slate-100 dark:border-slate-700 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-center justify-between mb-2">
      <span className="text-slate-500 dark:text-slate-400 font-medium">覆盖领域数</span>
      <span className="material-symbols-outlined text-primary bg-primary/10 p-1.5 rounded-lg">category</span>
      </div>
      <div className="text-3xl font-bold text-slate-900 dark:text-slate-100">32</div>
      <div className="mt-2 text-xs text-slate-400 font-medium flex items-center gap-1">
      <span className="material-symbols-outlined text-xs">horizontal_rule</span>
      <span>与去年持平</span>
      </div>
      </div>
      <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-slate-100 dark:border-slate-700 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-center justify-between mb-2">
      <span className="text-slate-500 dark:text-slate-400 font-medium">重点实验室占比</span>
      <span className="material-symbols-outlined text-primary bg-primary/10 p-1.5 rounded-lg">science</span>
      </div>
      <div className="text-3xl font-bold text-slate-900 dark:text-slate-100">15.8%</div>
      <div className="mt-2 text-xs text-emerald-500 font-medium flex items-center gap-1">
      <span className="material-symbols-outlined text-xs">trending_up</span>
      <span>+2.1% 占比提升</span>
      </div>
      </div>
      </div>
      
      <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-slate-100 dark:border-slate-700 shadow-sm mb-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 items-end">
      <div className="space-y-2">
      <label className="text-sm font-semibold text-slate-700 dark:text-slate-300 ml-1">项目名称/编号</label>
      <div className="relative">
      <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">search</span>
      <input className="w-full pl-10 pr-4 py-2.5 rounded-lg border-slate-200 dark:border-slate-600 dark:bg-slate-900 focus:ring-primary focus:border-primary" placeholder="输入关键字搜索..." type="text"/>
      </div>
      </div>
      <div className="space-y-2">
      <label className="text-sm font-semibold text-slate-700 dark:text-slate-300 ml-1">所属领域</label>
      <select className="w-full py-2.5 rounded-lg border-slate-200 dark:border-slate-600 dark:bg-slate-900 focus:ring-primary focus:border-primary">
      <option>全部领域</option>
      <option>半导体与集成电路</option>
      <option>生物医药</option>
      <option>人工智能</option>
      <option>新能源汽车</option>
      </select>
      </div>
      <div className="space-y-2">
      <label className="text-sm font-semibold text-slate-700 dark:text-slate-300 ml-1">执行部门</label>
      <select className="w-full py-2.5 rounded-lg border-slate-200 dark:border-slate-600 dark:bg-slate-900 focus:ring-primary focus:border-primary">
      <option>全部部门</option>
      <option>科技创新局</option>
      <option>工业和信息化局</option>
      <option>发展和改革委员会</option>
      </select>
      </div>
      <div className="flex gap-3">
      <button className="flex-1 py-2.5 bg-primary text-white rounded-lg font-semibold hover:opacity-90 transition-all">查询</button>
      <button className="px-6 py-2.5 bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 rounded-lg font-semibold hover:bg-slate-200 transition-all">重置</button>
      </div>
      </div>
      </div>
      
      <div className="flex items-center border-b border-slate-200 dark:border-slate-700 mb-6">
      <button className="px-8 py-4 text-sm font-bold text-primary border-b-2 border-primary -mb-px">清单明细列表</button>
      <button className="px-8 py-4 text-sm font-medium text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 transition-colors">统计分析看板</button>
      </div>
      
      <div className="space-y-4">
      
      <div className="flex justify-between items-center bg-white/50 dark:bg-slate-800/50 p-3 rounded-lg">
      <div className="flex gap-3">
      <button className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-slate-700 dark:text-slate-200 hover:bg-white dark:hover:bg-slate-700 rounded-md transition-all">
      <span className="material-symbols-outlined text-lg">upload</span>
      <span>批量导入</span>
      </button>
      <button className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-slate-700 dark:text-slate-200 hover:bg-white dark:hover:bg-slate-700 rounded-md transition-all">
      <span className="material-symbols-outlined text-lg">download</span>
      <span>一键导出</span>
      </button>
      </div>
      <div className="flex bg-slate-200 dark:bg-slate-700 p-1 rounded-lg">
      <button className="flex items-center justify-center p-1.5 bg-white dark:bg-slate-600 rounded shadow-sm">
      <span className="material-symbols-outlined text-primary text-lg">format_list_bulleted</span>
      </button>
      <button className="flex items-center justify-center p-1.5 text-slate-500 dark:text-slate-400">
      <span className="material-symbols-outlined text-lg">grid_view</span>
      </button>
      </div>
      </div>
      
      <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-100 dark:border-slate-700 shadow-sm overflow-hidden">
      <div className="overflow-x-auto">
      <table className="w-full text-left border-collapse">
      <thead>
      <tr className="bg-slate-50 dark:bg-slate-900/50 border-b border-slate-100 dark:border-slate-700">
      <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">项目名称</th>
      <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">所属领域</th>
      <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">承担单位</th>
      <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">资助金额</th>
      <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">起止年份</th>
      <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">状态</th>
      <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider text-right">操作</th>
      </tr>
      </thead>
      <tbody className="divide-y divide-slate-100 dark:divide-slate-700">
      
      <tr className="hover:bg-slate-50 dark:hover:bg-slate-700/30 transition-colors">
      <td className="px-6 py-4 font-medium text-slate-900 dark:text-slate-100">第三代半导体氮化镓外延生长关键技术研究</td>
      <td className="px-6 py-4"><span className="px-2 py-1 rounded-md bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-xs font-medium">半导体</span></td>
      <td className="px-6 py-4 text-slate-600 dark:text-slate-400">鹏城实验室</td>
      <td className="px-6 py-4 font-mono text-slate-900 dark:text-slate-100">¥1,200.00w</td>
      <td className="px-6 py-4 text-slate-500 text-sm">2023 - 2026</td>
      <td className="px-6 py-4">
      <span className="flex items-center gap-1.5 text-xs font-bold text-amber-600 dark:text-amber-400">
      <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                                              进行中
                                          </span>
      </td>
      <td className="px-6 py-4 text-right space-x-3">
      <button className="text-primary hover:underline text-sm font-semibold">详情</button>
      <button className="text-slate-500 hover:text-slate-700 dark:hover:text-slate-300 text-sm font-semibold">编辑</button>
      </td>
      </tr>
      
      <tr className="hover:bg-slate-50 dark:hover:bg-slate-700/30 transition-colors">
      <td className="px-6 py-4 font-medium text-slate-900 dark:text-slate-100">针对阿尔兹海默症的新型小分子药物筛选平台</td>
      <td className="px-6 py-4"><span className="px-2 py-1 rounded-md bg-purple-50 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 text-xs font-medium">生物医药</span></td>
      <td className="px-6 py-4 text-slate-600 dark:text-slate-400">深圳大学</td>
      <td className="px-6 py-4 font-mono text-slate-900 dark:text-slate-100">¥850.00w</td>
      <td className="px-6 py-4 text-slate-500 text-sm">2022 - 2024</td>
      <td className="px-6 py-4">
      <span className="flex items-center gap-1.5 text-xs font-bold text-emerald-600 dark:text-emerald-400">
      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                                              已结题
                                          </span>
      </td>
      <td className="px-6 py-4 text-right space-x-3">
      <button className="text-primary hover:underline text-sm font-semibold">详情</button>
      <button className="text-slate-500 hover:text-slate-700 dark:hover:text-slate-300 text-sm font-semibold">编辑</button>
      </td>
      </tr>
      
      <tr className="hover:bg-slate-50 dark:hover:bg-slate-700/30 transition-colors">
      <td className="px-6 py-4 font-medium text-slate-900 dark:text-slate-100">多模态大规模预训练模型基础算法研究</td>
      <td className="px-6 py-4"><span className="px-2 py-1 rounded-md bg-orange-50 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 text-xs font-medium">人工智能</span></td>
      <td className="px-6 py-4 text-slate-600 dark:text-slate-400">南方科技大学</td>
      <td className="px-6 py-4 font-mono text-slate-900 dark:text-slate-100">¥2,100.00w</td>
      <td className="px-6 py-4 text-slate-500 text-sm">2024 - 2027</td>
      <td className="px-6 py-4">
      <span className="flex items-center gap-1.5 text-xs font-bold text-amber-600 dark:text-amber-400">
      <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                                              进行中
                                          </span>
      </td>
      <td className="px-6 py-4 text-right space-x-3">
      <button className="text-primary hover:underline text-sm font-semibold">详情</button>
      <button className="text-slate-500 hover:text-slate-700 dark:hover:text-slate-300 text-sm font-semibold">编辑</button>
      </td>
      </tr>
      
      <tr className="hover:bg-slate-50 dark:hover:bg-slate-700/30 transition-colors">
      <td className="px-6 py-4 font-medium text-slate-900 dark:text-slate-100">高安全性固态电池关键材料研究</td>
      <td className="px-6 py-4"><span className="px-2 py-1 rounded-md bg-cyan-50 dark:bg-cyan-900/30 text-cyan-600 dark:text-cyan-400 text-xs font-medium">新能源</span></td>
      <td className="px-6 py-4 text-slate-600 dark:text-slate-400">中科院深圳先进院</td>
      <td className="px-6 py-4 font-mono text-slate-900 dark:text-slate-100">¥1,550.00w</td>
      <td className="px-6 py-4 text-slate-500 text-sm">2021 - 2024</td>
      <td className="px-6 py-4">
      <span className="flex items-center gap-1.5 text-xs font-bold text-emerald-600 dark:text-emerald-400">
      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                                              已结题
                                          </span>
      </td>
      <td className="px-6 py-4 text-right space-x-3">
      <button className="text-primary hover:underline text-sm font-semibold">详情</button>
      <button className="text-slate-500 hover:text-slate-700 dark:hover:text-slate-300 text-sm font-semibold">编辑</button>
      </td>
      </tr>
      </tbody>
      </table>
      </div>
      
      <div className="px-6 py-4 bg-slate-50 dark:bg-slate-900/50 flex items-center justify-between">
      <span className="text-sm text-slate-500">显示 1 到 4 共 1,284 条记录</span>
      <div className="flex gap-2">
      <button className="px-3 py-1 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded text-slate-400 cursor-not-allowed">
      <span className="material-symbols-outlined text-base">chevron_left</span>
      </button>
      <button className="px-3 py-1 bg-primary text-white border border-primary rounded font-bold text-sm">1</button>
      <button className="px-3 py-1 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded text-slate-600 dark:text-slate-300 text-sm">2</button>
      <button className="px-3 py-1 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded text-slate-600 dark:text-slate-300 text-sm">3</button>
      <button className="px-3 py-1 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded text-slate-600 dark:text-slate-300">
      <span className="material-symbols-outlined text-base">chevron_right</span>
      </button>
      </div>
      </div>
      </div>
      </div>
      
      <div className="mt-12 opacity-50 pointer-events-none">
      <h3 className="text-lg font-bold mb-4 text-slate-400 border-l-4 border-slate-300 pl-3">统计分析预览 (Analysis View Sample)</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="bg-white dark:bg-slate-800 p-8 rounded-xl border border-dashed border-slate-300 dark:border-slate-700 flex flex-col items-center justify-center min-h-[300px]">
      <div className="w-48 h-48 rounded-full border-[16px] border-slate-100 dark:border-slate-700 relative flex items-center justify-center">
      <div className="absolute inset-0 border-[16px] border-primary rounded-full" style={{ clipPath: "polygon(50% 50%, 50% 0, 100% 0, 100% 100%, 0 100%, 0 60%)" }}></div>
      <div className="text-center">
      <p className="text-xs text-slate-400">资金分布</p>
      <p className="text-xl font-black">领域分布</p>
      </div>
      </div>
      <div className="mt-6 flex gap-4 text-xs font-medium">
      <span className="flex items-center gap-1"><span className="w-3 h-3 bg-primary rounded-sm"></span> 半导体</span>
      <span className="flex items-center gap-1"><span className="w-3 h-3 bg-accent-teal rounded-sm"></span> 生物医药</span>
      <span className="flex items-center gap-1"><span className="w-3 h-3 bg-slate-300 rounded-sm"></span> 其他</span>
      </div>
      </div>
      <div className="bg-white dark:bg-slate-800 p-8 rounded-xl border border-dashed border-slate-300 dark:border-slate-700 flex flex-col justify-end min-h-[300px]">
      <div className="flex items-end gap-4 h-full px-4">
      <div className="bg-primary/20 w-full h-[40%] rounded-t-lg relative group">
      <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-[10px] px-2 py-1 rounded hidden group-hover:block">南山区</div>
      </div>
      <div className="bg-primary w-full h-[85%] rounded-t-lg relative group">
      <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-[10px] px-2 py-1 rounded hidden group-hover:block">福田区</div>
      </div>
      <div className="bg-primary/40 w-full h-[60%] rounded-t-lg"></div>
      <div className="bg-primary/60 w-full h-[75%] rounded-t-lg"></div>
      <div className="bg-primary/30 w-full h-[30%] rounded-t-lg"></div>
      </div>
      <div className="border-t border-slate-200 dark:border-slate-700 mt-4 pt-4 text-center">
      <p className="text-sm font-bold">各区项目数量分布</p>
      </div>
      </div>
      </div>
      </div>
      </div></div></div></div>
    </div>
  );
}
