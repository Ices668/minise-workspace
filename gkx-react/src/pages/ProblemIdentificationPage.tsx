import { useNavigate } from "react-router-dom";

export default function ProblemIdentificationPage() {
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
      <div className="flex h-screen w-full bg-slate-50 overflow-hidden"><aside id="sidebar" className="w-64 bg-white border-r border-slate-200 flex flex-col z-30 shrink-0" style={{ minWidth: "256px" }}><div className="p-5 flex items-center gap-3 border-b border-slate-100"><div className="w-8 h-8 bg-[#1392ec] rounded-lg flex items-center justify-center"><span className="material-symbols-outlined text-white" style={{ fontSize: "20px" }}>insights</span></div><span className="font-bold text-base text-slate-800">GKX</span><a href="/home" onClick={(event) => { event.preventDefault(); navigate("/home"); }} className="ml-auto text-slate-400 hover:text-slate-600" title="返回首页"><span className="material-symbols-outlined" style={{ fontSize: "18px" }}>home</span></a></div><div className="px-4 pt-4 pb-1"><span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">基础研究决策</span></div><nav className="flex-1 px-2 py-2 overflow-y-auto space-y-0.5"><div className="nav-group"><button onClick={toggleGroup} className="w-full flex items-center gap-3 px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 rounded-lg transition-colors"><span className="material-symbols-outlined text-xl text-slate-400">checklist</span><span className="flex-1 text-left">基础研究问题清单</span><span className="material-symbols-outlined text-sm text-slate-400 expand-icon">expand_more</span></button><div className="group-children overflow-hidden" style={{ maxHeight: "0", transition: "max-height .25s ease" }}><a href="/research/problem-identification.html" onClick={(event) => { event.preventDefault(); navigate("/research/problem-identification.html"); }} className="flex items-center pl-12 pr-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#1392ec] rounded-lg nav-item" data-file="problem-identification.html">问题识别与清单研发</a><a href="/research/problem-trend.html" onClick={(event) => { event.preventDefault(); navigate("/research/problem-trend.html"); }} className="flex items-center pl-12 pr-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#1392ec] rounded-lg nav-item" data-file="problem-trend.html">问题发展趋势分析</a><a href="/research/competition-report.html" onClick={(event) => { event.preventDefault(); navigate("/research/competition-report.html"); }} className="flex items-center pl-12 pr-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#1392ec] rounded-lg nav-item" data-file="competition-report.html">国内外竞争格局报告</a></div></div><div className="nav-group"><button onClick={toggleGroup} className="w-full flex items-center gap-3 px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 rounded-lg transition-colors"><span className="material-symbols-outlined text-xl text-slate-400">location_city</span><span className="flex-1 text-left">基础研究部署清单</span><span className="material-symbols-outlined text-sm text-slate-400 expand-icon">expand_more</span></button><div className="group-children overflow-hidden" style={{ maxHeight: "0", transition: "max-height .25s ease" }}><a href="/research/shenzhen-list.html" onClick={(event) => { event.preventDefault(); navigate("/research/shenzhen-list.html"); }} className="flex items-center pl-12 pr-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#1392ec] rounded-lg nav-item" data-file="shenzhen-list.html">深圳市基础研究部署清单</a></div></div><div className="nav-group"><button onClick={toggleGroup} className="w-full flex items-center gap-3 px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 rounded-lg transition-colors"><span className="material-symbols-outlined text-xl text-slate-400">assessment</span><span className="flex-1 text-left">基础研究成果评估</span><span className="material-symbols-outlined text-sm text-slate-400 expand-icon">expand_more</span></button><div className="group-children overflow-hidden" style={{ maxHeight: "0", transition: "max-height .25s ease" }}></div></div></nav><div className="p-4 border-t border-slate-100"><div className="bg-slate-50 rounded-xl p-3 flex items-center gap-3"><div className="w-9 h-9 bg-[#1392ec] rounded-lg flex items-center justify-center"><span className="material-symbols-outlined text-white" style={{ fontSize: "18px" }}>manage_accounts</span></div><div><p className="text-xs font-bold text-slate-800">系统管理员</p><p className="text-[10px] text-slate-500">ID: GKX-0822</p></div></div></div></aside><div className="flex-1 flex flex-col min-w-0 overflow-hidden"><header className="h-14 bg-white border-b border-slate-200 flex items-center justify-between px-6 shrink-0"><div className="flex items-center gap-4"><button onClick={toggleSidebar} className="p-1 text-slate-500 hover:bg-slate-100 rounded-lg"><span className="material-symbols-outlined">menu</span></button><h2 className="text-sm font-bold text-slate-800">基础研究智能决策</h2></div><div className="flex-1 max-w-md mx-6"><div className="relative"><span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" style={{ fontSize: "18px" }}>search</span><input className="w-full pl-9 pr-4 py-1.5 bg-slate-100 rounded-full text-sm placeholder-slate-400 outline-none border-none" placeholder="搜索功能、报告..." type="text"/></div></div><div className="flex items-center gap-2"><button className="p-2 text-slate-500 hover:bg-slate-100 rounded-full relative"><span className="material-symbols-outlined" style={{ fontSize: "22px" }}>notifications</span><span className="absolute top-2 right-2 w-1.5 h-1.5 bg-red-500 rounded-full"></span></button></div></header><div className="flex-1 overflow-y-auto"><main className="max-w-7xl mx-auto px-6 py-8">
      
      <nav className="flex items-center gap-2 mb-6 text-sm font-medium">
      <a className="text-primary hover:opacity-80" href="#">新型高端智库系统</a>
      <span className="text-slate-400 dark:text-slate-600 material-symbols-outlined text-sm">chevron_right</span>
      <a className="text-primary hover:opacity-80" href="#">基础研究智能决策</a>
      <span className="text-slate-400 dark:text-slate-600 material-symbols-outlined text-sm">chevron_right</span>
      <a className="text-primary hover:opacity-80" href="#">基础研究问题清单</a>
      <span className="text-slate-400 dark:text-slate-600 material-symbols-outlined text-sm">chevron_right</span>
      <span className="text-slate-600 dark:text-slate-400">问题识别与清单研发</span>
      </nav>
      
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
      <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">问题识别与清单研发</h1>
      <div className="flex items-center gap-3">
      <button className="flex items-center gap-2 bg-primary text-white px-5 py-2.5 rounded-lg font-semibold hover:opacity-90 transition-all">
      <span className="material-symbols-outlined text-[20px]">add</span>
      <span>新建问题清单</span>
      </button>
      <button className="flex items-center gap-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 px-5 py-2.5 rounded-lg font-semibold hover:bg-slate-50 dark:hover:bg-slate-700 transition-all">
      <span className="material-symbols-outlined text-[20px]">ios_share</span>
      <span>批量导出</span>
      </button>
      <button className="p-2.5 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-600 dark:text-slate-300 hover:text-primary transition-all">
      <span className="material-symbols-outlined block">refresh</span>
      </button>
      </div>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
      <div className="bg-white dark:bg-slate-800 p-5 rounded-xl border border-slate-100 dark:border-slate-700 custom-shadow">
      <p className="text-sm text-slate-500 dark:text-slate-400 mb-2">识别问题总数</p>
      <div className="flex items-end justify-between">
      <span className="text-3xl font-bold text-slate-900 dark:text-white">1,280</span>
      <span className="text-xs font-medium text-emerald-500 bg-emerald-50 dark:bg-emerald-500/10 px-2 py-1 rounded-full">+12%</span>
      </div>
      </div>
      <div className="bg-white dark:bg-slate-800 p-5 rounded-xl border border-slate-100 dark:border-slate-700 custom-shadow">
      <p className="text-sm text-slate-500 dark:text-slate-400 mb-2">待研制问题</p>
      <div className="flex items-end justify-between">
      <span className="text-3xl font-bold text-slate-900 dark:text-white">45</span>
      <span className="text-xs font-medium text-amber-500 bg-amber-50 dark:bg-amber-500/10 px-2 py-1 rounded-full">需加速</span>
      </div>
      </div>
      <div className="bg-white dark:bg-slate-800 p-5 rounded-xl border border-slate-100 dark:border-slate-700 custom-shadow">
      <p className="text-sm text-slate-500 dark:text-slate-400 mb-2">高优先级问题</p>
      <div className="flex items-end justify-between">
      <span className="text-3xl font-bold text-slate-900 dark:text-white">12</span>
      <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded-full">重点关注</span>
      </div>
      </div>
      <div className="bg-white dark:bg-slate-800 p-5 rounded-xl border border-slate-100 dark:border-slate-700 custom-shadow">
      <p className="text-sm text-slate-500 dark:text-slate-400 mb-2">已发布清单数</p>
      <div className="flex items-end justify-between">
      <span className="text-3xl font-bold text-slate-900 dark:text-white">86</span>
      <span className="text-xs font-medium text-slate-400 bg-slate-100 dark:bg-slate-700 px-2 py-1 rounded-full">年度目标86%</span>
      </div>
      </div>
      </div>
      
      <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-slate-100 dark:border-slate-700 custom-shadow mb-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end">
      <div className="lg:col-span-3">
      <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">问题关键词</label>
      <div className="relative">
      <span className="absolute left-3 top-1/2 -translate-y-1/2 material-symbols-outlined text-slate-400">search</span>
      <input className="w-full pl-10 pr-4 py-2 bg-slate-50 dark:bg-slate-900 border-none rounded-lg focus:ring-2 focus:ring-primary text-sm" placeholder="输入关键字搜索..." type="text"/>
      </div>
      </div>
      <div className="lg:col-span-2">
      <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">学科分类</label>
      <select className="w-full py-2 bg-slate-50 dark:bg-slate-900 border-none rounded-lg focus:ring-2 focus:ring-primary text-sm">
      <option>全部学科</option>
      <option>数学</option>
      <option>物理</option>
      <option>生命科学</option>
      </select>
      </div>
      <div className="lg:col-span-2">
      <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">问题级别</label>
      <select className="w-full py-2 bg-slate-50 dark:bg-slate-900 border-none rounded-lg focus:ring-2 focus:ring-primary text-sm">
      <option>全部级别</option>
      <option>重大科学问题</option>
      <option>前沿技术问题</option>
      </select>
      </div>
      <div className="lg:col-span-2">
      <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">优先级</label>
      <select className="w-full py-2 bg-slate-50 dark:bg-slate-900 border-none rounded-lg focus:ring-2 focus:ring-primary text-sm">
      <option>全部</option>
      <option>高</option>
      <option>中</option>
      <option>低</option>
      </select>
      </div>
      <div className="lg:col-span-3 flex gap-2">
      <button className="flex-1 bg-primary text-white py-2 rounded-lg font-medium hover:opacity-90">查询</button>
      <button className="flex-1 bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 py-2 rounded-lg font-medium hover:bg-slate-200 dark:hover:bg-slate-600">重置</button>
      </div>
      </div>
      </div>
      
      <div className="flex flex-col gap-6">
      <div className="flex items-center border-b border-slate-200 dark:border-slate-700">
      <button className="px-6 py-3 border-b-2 border-primary text-primary font-bold transition-all">问题识别清单</button>
      <button className="px-6 py-3 text-slate-500 dark:text-slate-400 font-medium hover:text-slate-700 transition-all">关联分布看板</button>
      </div>
      
      <div className="space-y-4">
      
      <div className="flex justify-between items-center">
      <div className="flex items-center gap-2">
      <button className="px-3 py-1.5 bg-primary/10 text-primary rounded-md text-sm font-medium">批量操作</button>
      <span className="text-xs text-slate-400">已选择 0 项</span>
      </div>
      <div className="flex items-center bg-slate-100 dark:bg-slate-800 p-1 rounded-lg">
      <button className="p-1.5 rounded-md bg-white dark:bg-slate-700 shadow-sm text-primary">
      <span className="material-symbols-outlined block">list</span>
      </button>
      <button className="p-1.5 rounded-md text-slate-400">
      <span className="material-symbols-outlined block">grid_view</span>
      </button>
      </div>
      </div>
      
      <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-100 dark:border-slate-700 custom-shadow overflow-hidden">
      <div className="overflow-x-auto">
      <table className="w-full text-left border-collapse">
      <thead>
      <tr className="bg-slate-50 dark:bg-slate-900/50 border-b border-slate-100 dark:border-slate-700">
      <th className="p-4 text-xs font-bold text-slate-500 uppercase tracking-wider w-10">
      <input className="rounded text-primary focus:ring-primary bg-transparent border-slate-300" type="checkbox"/>
      </th>
      <th className="p-4 text-xs font-bold text-slate-500 uppercase tracking-wider">问题名称</th>
      <th className="p-4 text-xs font-bold text-slate-500 uppercase tracking-wider">所属领域</th>
      <th className="p-4 text-xs font-bold text-slate-500 uppercase tracking-wider">识别来源</th>
      <th className="p-4 text-xs font-bold text-slate-500 uppercase tracking-wider w-40">成熟度</th>
      <th className="p-4 text-xs font-bold text-slate-500 uppercase tracking-wider">优先级</th>
      <th className="p-4 text-xs font-bold text-slate-500 uppercase tracking-wider text-right">操作</th>
      </tr>
      </thead>
      <tbody className="divide-y divide-slate-100 dark:divide-slate-700">
      
      <tr className="hover:bg-slate-50 dark:hover:bg-slate-900/40 transition-colors">
      <td className="p-4"><input className="rounded text-primary focus:ring-primary bg-transparent border-slate-300" type="checkbox"/></td>
      <td className="p-4 font-medium text-slate-900 dark:text-white">高维拓扑结构的动力学演化机理</td>
      <td className="p-4 text-slate-600 dark:text-slate-400 text-sm">数学 / 拓扑学</td>
      <td className="p-4 text-slate-600 dark:text-slate-400 text-sm">Nature 期刊综述</td>
      <td className="p-4">
      <div className="w-full bg-slate-100 dark:bg-slate-700 h-1.5 rounded-full overflow-hidden">
      <div className="bg-primary h-full w-[75%]"></div>
      </div>
      <span className="text-[10px] text-slate-400 mt-1 block">75% 完成度</span>
      </td>
      <td className="p-4">
      <span className="px-2 py-0.5 rounded text-[11px] font-bold bg-rose-100 text-rose-600 dark:bg-rose-500/20 dark:text-rose-400">高</span>
      </td>
      <td className="p-4 text-right">
      <div className="flex justify-end gap-3">
      <button className="text-primary hover:underline text-sm font-medium">详情</button>
      <button className="text-primary hover:underline text-sm font-medium">加入清单</button>
      <button className="text-slate-400 hover:text-rose-500 text-sm font-medium">删除</button>
      </div>
      </td>
      </tr>
      
      <tr className="hover:bg-slate-50 dark:hover:bg-slate-900/40 transition-colors">
      <td className="p-4"><input className="rounded text-primary focus:ring-primary bg-transparent border-slate-300" type="checkbox"/></td>
      <td className="p-4 font-medium text-slate-900 dark:text-white">常温超导材料的微观量子态研究</td>
      <td className="p-4 text-slate-600 dark:text-slate-400 text-sm">物理 / 凝聚态</td>
      <td className="p-4 text-slate-600 dark:text-slate-400 text-sm">专利情报挖掘</td>
      <td className="p-4">
      <div className="w-full bg-slate-100 dark:bg-slate-700 h-1.5 rounded-full overflow-hidden">
      <div className="bg-primary h-full w-[40%]"></div>
      </div>
      <span className="text-[10px] text-slate-400 mt-1 block">40% 完成度</span>
      </td>
      <td className="p-4">
      <span className="px-2 py-0.5 rounded text-[11px] font-bold bg-amber-100 text-amber-600 dark:bg-amber-500/20 dark:text-amber-400">中</span>
      </td>
      <td className="p-4 text-right">
      <div className="flex justify-end gap-3">
      <button className="text-primary hover:underline text-sm font-medium">详情</button>
      <button className="text-primary hover:underline text-sm font-medium">加入清单</button>
      <button className="text-slate-400 hover:text-rose-500 text-sm font-medium">删除</button>
      </div>
      </td>
      </tr>
      
      <tr className="hover:bg-slate-50 dark:hover:bg-slate-900/40 transition-colors">
      <td className="p-4"><input className="rounded text-primary focus:ring-primary bg-transparent border-slate-300" type="checkbox"/></td>
      <td className="p-4 font-medium text-slate-900 dark:text-white">人工多肽链的精准折叠与功能模拟</td>
      <td className="p-4 text-slate-600 dark:text-slate-400 text-sm">生命科学 / 生物物理</td>
      <td className="p-4 text-slate-600 dark:text-slate-400 text-sm">专家推荐系统</td>
      <td className="p-4">
      <div className="w-full bg-slate-100 dark:bg-slate-700 h-1.5 rounded-full overflow-hidden">
      <div className="bg-primary h-full w-[90%]"></div>
      </div>
      <span className="text-[10px] text-slate-400 mt-1 block">90% 完成度</span>
      </td>
      <td className="p-4">
      <span className="px-2 py-0.5 rounded text-[11px] font-bold bg-rose-100 text-rose-600 dark:bg-rose-500/20 dark:text-rose-400">高</span>
      </td>
      <td className="p-4 text-right">
      <div className="flex justify-end gap-3">
      <button className="text-primary hover:underline text-sm font-medium">详情</button>
      <button className="text-primary hover:underline text-sm font-medium">加入清单</button>
      <button className="text-slate-400 hover:text-rose-500 text-sm font-medium">删除</button>
      </div>
      </td>
      </tr>
      </tbody>
      </table>
      </div>
      
      <div className="px-4 py-3 bg-slate-50/50 dark:bg-slate-900/20 border-t border-slate-100 dark:border-slate-700 flex items-center justify-between text-sm text-slate-500">
      <span>共 128 条记录</span>
      <div className="flex gap-1">
      <button className="p-1.5 rounded border border-slate-200 dark:border-slate-700 hover:bg-white dark:hover:bg-slate-800"><span className="material-symbols-outlined block text-sm">chevron_left</span></button>
      <button className="px-3 py-1.5 rounded bg-primary text-white font-bold">1</button>
      <button className="px-3 py-1.5 rounded border border-slate-200 dark:border-slate-700 hover:bg-white dark:hover:bg-slate-800">2</button>
      <button className="px-3 py-1.5 rounded border border-slate-200 dark:border-slate-700 hover:bg-white dark:hover:bg-slate-800">3</button>
      <button className="p-1.5 rounded border border-slate-200 dark:border-slate-700 hover:bg-white dark:hover:bg-slate-800"><span className="material-symbols-outlined block text-sm">chevron_right</span></button>
      </div>
      </div>
      </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-4">
      <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-slate-100 dark:border-slate-700 custom-shadow min-h-[400px]">
      <div className="flex items-center justify-between mb-6">
      <h3 className="font-bold text-slate-900 dark:text-white flex items-center gap-2">
      <span className="material-symbols-outlined text-primary">hub</span>
                                  领域关联网络图
                              </h3>
      <button className="text-xs text-primary font-medium">全屏查看</button>
      </div>
      <div className="h-64 flex items-center justify-center bg-slate-50 dark:bg-slate-900 rounded-lg relative overflow-hidden">
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary via-transparent to-transparent"></div>
      <div className="relative w-48 h-48 border-2 border-primary/20 rounded-full flex items-center justify-center">
      <div className="w-24 h-24 bg-primary/20 rounded-full flex items-center justify-center">
      <div className="w-8 h-8 bg-primary rounded-full animate-pulse shadow-[0_0_15px_rgba(19,182,236,0.5)]"></div>
      </div>
      
      <div className="absolute -top-4 -left-4 w-4 h-4 bg-primary/60 rounded-full"></div>
      <div className="absolute top-1/2 -right-6 w-6 h-6 bg-primary/40 rounded-full"></div>
      <div className="absolute -bottom-2 left-1/4 w-5 h-5 bg-primary/50 rounded-full"></div>
      </div>
      <span className="absolute bottom-4 text-[10px] text-slate-400 italic">知识图谱动态生成中...</span>
      </div>
      </div>
      <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-slate-100 dark:border-slate-700 custom-shadow min-h-[400px]">
      <div className="flex items-center justify-between mb-6">
      <h3 className="font-bold text-slate-900 dark:text-white flex items-center gap-2">
      <span className="material-symbols-outlined text-primary">trending_up</span>
                                  问题热度趋势
                              </h3>
      <div className="flex gap-2">
      <button className="px-2 py-1 text-[10px] bg-slate-100 dark:bg-slate-700 rounded">周</button>
      <button className="px-2 py-1 text-[10px] bg-primary text-white rounded">月</button>
      </div>
      </div>
      <div className="h-64 bg-slate-50 dark:bg-slate-900 rounded-lg p-4 flex flex-col justify-end">
      <div className="flex items-end gap-2 h-full px-4">
      <div className="w-full bg-primary/20 h-[30%] rounded-t-sm"></div>
      <div className="w-full bg-primary/30 h-[45%] rounded-t-sm"></div>
      <div className="w-full bg-primary/40 h-[25%] rounded-t-sm"></div>
      <div className="w-full bg-primary/50 h-[60%] rounded-t-sm"></div>
      <div className="w-full bg-primary/60 h-[85%] rounded-t-sm"></div>
      <div className="w-full bg-primary/70 h-[70%] rounded-t-sm"></div>
      <div className="w-full bg-primary h-[95%] rounded-t-sm"></div>
      </div>
      <div className="flex justify-between mt-4 px-2">
      <span className="text-[10px] text-slate-400">01-01</span>
      <span className="text-[10px] text-slate-400">01-15</span>
      <span className="text-[10px] text-slate-400">01-30</span>
      </div>
      </div>
      </div>
      </div>
      </div>
      </main></div></div></div>
    </div>
  );
}
