export default function StrategyEntityListPage() {
  return (
    <div className="p-8 space-y-6">
<nav className="flex items-center gap-2 text-sm text-slate-400">
<span className="hover:text-primary cursor-pointer">战略咨询智能支持</span>
<span className="material-symbols-outlined text-xs">chevron_right</span>
<span className="hover:text-primary cursor-pointer">研究需求分析</span>
<span className="material-symbols-outlined text-xs">chevron_right</span>
<span className="text-slate-800 font-medium">科技实体清单</span>
</nav>
<div className="flex justify-between items-start">
<div>
<h1 className="text-2xl font-bold text-slate-900">科技实体清单</h1>
<p className="text-sm text-slate-500 mt-1">汇集全球核心科技领域的企业、研究中心及初创实体数据</p>
</div>
<div className="flex gap-3">
<button className="px-4 py-2 bg-white border border-slate-200 rounded-lg text-sm font-medium hover:bg-slate-50 transition-colors flex items-center gap-2">
<span className="material-symbols-outlined text-[18px]">upload</span> 批量导入
                        </button>
<button className="px-4 py-2 bg-white border border-slate-200 rounded-lg text-sm font-medium hover:bg-slate-50 transition-colors flex items-center gap-2">
<span className="material-symbols-outlined text-[18px]">download</span> 导出数据
                        </button>
</div>
</div>
<div className="bg-white rounded-lg p-6 custom-shadow border border-border-light">
<div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-6">
<div className="space-y-2">
<label className="text-xs font-bold text-slate-400 uppercase tracking-wider">技术领域</label>
<select className="w-full border-slate-200 rounded-lg text-sm focus:ring-primary focus:border-primary">
<option>全部领域</option>
<option>半导体与微电子</option>
<option>生成式人工智能</option>
<option>量子通信</option>
<option>新能源汽车</option>
</select>
</div>
<div className="space-y-2">
<label className="text-xs font-bold text-slate-400 uppercase tracking-wider">地区/国家</label>
<select className="w-full border-slate-200 rounded-lg text-sm focus:ring-primary focus:border-primary">
<option>全球范围</option>
<option>北美</option>
<option>东亚</option>
<option>欧盟</option>
</select>
</div>
<div className="space-y-2">
<label className="text-xs font-bold text-slate-400 uppercase tracking-wider">创新指数</label>
<select className="w-full border-slate-200 rounded-lg text-sm focus:ring-primary focus:border-primary">
<option>不限分数</option>
<option>90+ (极高)</option>
<option>80-90 (高)</option>
<option>70-80 (中等)</option>
</select>
</div>
<div className="space-y-2">
<label className="text-xs font-bold text-slate-400 uppercase tracking-wider">标签搜索</label>
<input className="w-full border-slate-200 rounded-lg text-sm focus:ring-primary focus:border-primary" placeholder="输入标签，回车搜索..." type="text" />
</div>
<div className="flex items-end gap-2">
<button className="flex-1 bg-primary hover:bg-primary/90 text-white font-semibold py-2 rounded-lg transition-all shadow-sm">查询</button>
<button className="flex-1 bg-slate-100 hover:bg-slate-200 text-slate-600 font-semibold py-2 rounded-lg transition-all">重置</button>
</div>
</div>
</div>
<div className="bg-white rounded-lg custom-shadow border border-border-light overflow-hidden">
<div className="p-6 border-b border-border-light flex justify-between items-center">
<h3 className="font-bold text-slate-800">实体数据列表</h3>
<div className="flex items-center gap-2">
<span className="text-xs text-slate-400">共计 1,248 个匹配项</span>
</div>
</div>
<div className="overflow-x-auto">
<table className="w-full text-left">
<thead className="bg-slate-50 border-b border-border-light">
<tr>
<th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase">名称</th>
<th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase">主攻领域</th>
<th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase">创新指数</th>
<th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase">核心标签</th>
<th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase">更新时间</th>
<th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase text-right">操作</th>
</tr>
</thead>
<tbody className="divide-y divide-slate-100">
<tr className="hover:bg-slate-50/80 transition-colors group">
<td className="px-6 py-4">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded bg-blue-50 flex items-center justify-center font-bold text-primary">N</div>
<div>
<p className="font-bold text-slate-900">NVIDIA Corporation</p>
<p className="text-xs text-slate-400">美国 · 加州圣克拉拉</p>
</div>
</div>
</td>
<td className="px-6 py-4">
<span className="text-sm font-medium text-slate-700">GPU / 并行计算</span>
</td>
<td className="px-6 py-4">
<div className="flex items-center gap-2">
<span className="text-sm font-bold text-primary">98.5</span>
<div className="flex-1 min-w-[60px] h-1.5 bg-slate-100 rounded-full">
<div className="h-full bg-primary rounded-full" style={{width: '98%'}}></div>
</div>
</div>
</td>
<td className="px-6 py-4">
<div className="flex flex-wrap gap-2">
<span className="px-2 py-1 rounded-full bg-blue-50 text-blue-600 text-[10px] font-bold">半导体霸主</span>
<span className="px-2 py-1 rounded-full bg-teal-50 text-teal-600 text-[10px] font-bold">AI基础</span>
</div>
</td>
<td className="px-6 py-4 text-sm text-slate-500">2023-11-22</td>
<td className="px-6 py-4 text-right">
<div className="flex justify-end gap-4">
<button className="text-primary hover:text-primary/80 text-sm font-medium">详情</button>
<button className="text-slate-400 hover:text-slate-600 text-sm font-medium">编辑</button>
<button className="text-red-400 hover:text-red-500 text-sm font-medium">删除</button>
</div>
</td>
</tr>
<tr className="hover:bg-slate-50/80 transition-colors group">
<td className="px-6 py-4">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded bg-teal-50 flex items-center justify-center font-bold text-teal-600">D</div>
<div>
<p className="font-bold text-slate-900">阿里巴巴达摩院</p>
<p className="text-xs text-slate-400">中国 · 浙江杭州</p>
</div>
</div>
</td>
<td className="px-6 py-4">
<span className="text-sm font-medium text-slate-700">多模态大模型</span>
</td>
<td className="px-6 py-4">
<div className="flex items-center gap-2">
<span className="text-sm font-bold text-primary">94.2</span>
<div className="flex-1 min-w-[60px] h-1.5 bg-slate-100 rounded-full">
<div className="h-full bg-primary rounded-full" style={{width: '94%'}}></div>
</div>
</div>
</td>
<td className="px-6 py-4">
<div className="flex flex-wrap gap-2">
<span className="px-2 py-1 rounded-full bg-blue-50 text-blue-600 text-[10px] font-bold">通义千问</span>
<span className="px-2 py-1 rounded-full bg-teal-50 text-teal-600 text-[10px] font-bold">研发中心</span>
</div>
</td>
<td className="px-6 py-4 text-sm text-slate-500">2023-11-20</td>
<td className="px-6 py-4 text-right">
<div className="flex justify-end gap-4">
<button className="text-primary hover:text-primary/80 text-sm font-medium">详情</button>
<button className="text-slate-400 hover:text-slate-600 text-sm font-medium">编辑</button>
<button className="text-red-400 hover:text-red-500 text-sm font-medium">删除</button>
</div>
</td>
</tr>
<tr className="hover:bg-slate-50/80 transition-colors group">
<td className="px-6 py-4">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded bg-indigo-50 flex items-center justify-center font-bold text-indigo-600">S</div>
<div>
<p className="font-bold text-slate-900">SpaceX</p>
<p className="text-xs text-slate-400">美国 · 德克萨斯州</p>
</div>
</div>
</td>
<td className="px-6 py-4">
<span className="text-sm font-medium text-slate-700">航空航天 / 星链</span>
</td>
<td className="px-6 py-4">
<div className="flex items-center gap-2">
<span className="text-sm font-bold text-primary">96.8</span>
<div className="flex-1 min-w-[60px] h-1.5 bg-slate-100 rounded-full">
<div className="h-full bg-primary rounded-full" style={{width: '96%'}}></div>
</div>
</div>
</td>
<td className="px-6 py-4">
<div className="flex flex-wrap gap-2">
<span className="px-2 py-1 rounded-full bg-blue-50 text-blue-600 text-[10px] font-bold">火箭回收</span>
<span className="px-2 py-1 rounded-full bg-teal-50 text-teal-600 text-[10px] font-bold">低轨卫星</span>
</div>
</td>
<td className="px-6 py-4 text-sm text-slate-500">2023-11-15</td>
<td className="px-6 py-4 text-right">
<div className="flex justify-end gap-4">
<button className="text-primary hover:text-primary/80 text-sm font-medium">详情</button>
<button className="text-slate-400 hover:text-slate-600 text-sm font-medium">编辑</button>
<button className="text-red-400 hover:text-red-500 text-sm font-medium">删除</button>
</div>
</td>
</tr>
</tbody>
</table>
</div>
<div className="px-6 py-4 border-t border-border-light flex items-center justify-between bg-slate-50/50">
<span className="text-sm text-slate-500">显示第 1-10 条，共 1,248 条</span>
<div className="flex gap-2">
<button className="w-9 h-9 flex items-center justify-center rounded-lg border border-slate-200 bg-white hover:bg-slate-50 transition-colors">
<span className="material-symbols-outlined text-lg">chevron_left</span>
</button>
<button className="w-9 h-9 flex items-center justify-center rounded-lg bg-primary text-white font-bold text-sm shadow-sm shadow-primary/20">1</button>
<button className="w-9 h-9 flex items-center justify-center rounded-lg border border-slate-200 bg-white hover:bg-slate-50 transition-colors text-sm text-slate-600 font-medium">2</button>
<button className="w-9 h-9 flex items-center justify-center rounded-lg border border-slate-200 bg-white hover:bg-slate-50 transition-colors text-sm text-slate-600 font-medium">3</button>
<span className="w-9 h-9 flex items-center justify-center text-slate-400">...</span>
<button className="w-9 h-9 flex items-center justify-center rounded-lg border border-slate-200 bg-white hover:bg-slate-50 transition-colors text-sm text-slate-600 font-medium">125</button>
<button className="w-9 h-9 flex items-center justify-center rounded-lg border border-slate-200 bg-white hover:bg-slate-50 transition-colors">
<span className="material-symbols-outlined text-lg">chevron_right</span>
</button>
</div>
</div>
</div>
    </div>
  )
}
