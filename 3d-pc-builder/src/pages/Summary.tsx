import { Save, Share2, FileText, ShoppingCart, CheckCircle, Bolt, Layout, Activity } from 'lucide-react';
import Navbar from '../components/Navbar';

const buildParts = [
  { component: 'CPU', name: 'Intel Core i9-14900K', brand: 'Intel', price: '$589.00' },
  { component: 'GPU', name: 'NVIDIA RTX 4080 Super', brand: 'NVIDIA', price: '$999.00' },
  { component: 'Motherboard', name: 'ASUS ROG Strix Z790-E', brand: 'ASUS', price: '$379.00' },
  { component: 'RAM', name: '32GB DDR5-6000 CL30', brand: 'G.Skill', price: '$125.00' },
  { component: 'Storage', name: '2TB NVMe Gen4 SSD', brand: 'Samsung', price: '$160.00' },
  { component: 'PSU', name: '850W 80+ Gold Modular', brand: 'Corsair', price: '$129.00' },
];

export default function Summary() {
  return (
    <div className="min-h-screen flex flex-col bg-black">
      <Navbar />
      <main className="flex-1 px-6 lg:px-20 py-12 max-w-7xl mx-auto w-full">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-gray-500 text-sm">
              <span>My Builds</span>
              <span className="text-gray-700">/</span>
              <span className="text-primary font-bold">Ultimate 4K Rig</span>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-white tracking-tight">Build Summary</h1>
            <p className="text-gray-500 font-medium">Configuration finalized on March 4, 2026 • v2.4.0</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <button className="flex items-center gap-2 px-5 py-2.5 bg-white/5 border border-white/10 text-white rounded-xl font-bold text-sm hover:bg-white/10 transition-all">
              <Save size={18} /> SAVE
            </button>
            <button className="flex items-center gap-2 px-5 py-2.5 bg-white/5 border border-white/10 text-white rounded-xl font-bold text-sm hover:bg-white/10 transition-all">
              <Share2 size={18} /> SHARE
            </button>
            <button className="flex items-center gap-2 px-6 py-2.5 bg-primary text-white rounded-xl font-bold text-sm shadow-lg shadow-primary/20 hover:scale-105 transition-all">
              <ShoppingCart size={18} /> ORDER ALL
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-8 space-y-8">
            <div className="bg-white/5 rounded-2xl border border-white/10 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead>
                    <tr className="border-b border-white/10 bg-white/[0.02]">
                      <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-widest text-gray-500">Component</th>
                      <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-widest text-gray-500">Part Name</th>
                      <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-widest text-gray-500 text-right">Price</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    {buildParts.map((part, i) => (
                      <tr key={i} className="hover:bg-white/[0.02] transition-colors">
                        <td className="px-6 py-5 text-sm font-bold text-primary">{part.component}</td>
                        <td className="px-6 py-5">
                          <p className="text-sm font-bold text-white">{part.name}</p>
                          <p className="text-[10px] text-gray-500 uppercase font-bold">{part.brand}</p>
                        </td>
                        <td className="px-6 py-5 text-sm font-bold text-white text-right">{part.price}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-primary/10 border border-primary/20 p-8 rounded-2xl">
                <span className="text-primary text-[10px] font-bold uppercase tracking-widest mb-2 block">Total Build Cost</span>
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-black text-white">$2,382.00</span>
                  <span className="text-gray-500 text-xs">inc. tax</span>
                </div>
              </div>
              <div className="bg-emerald-500/10 border border-emerald-500/20 p-8 rounded-2xl flex items-center gap-5">
                <div className="size-14 bg-emerald-500/20 rounded-full flex items-center justify-center text-emerald-500">
                  <CheckCircle size={32} />
                </div>
                <div>
                  <h4 className="font-bold text-white text-lg">Ready to Ship</h4>
                  <p className="text-sm text-gray-500">All components in stock.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 space-y-6">
            <div className="bg-white/5 rounded-2xl border border-white/10 p-6">
              <h3 className="text-white font-bold mb-6 flex items-center gap-2">
                <Bolt className="text-primary" size={20} />
                Compatibility Report
              </h3>
              <div className="space-y-6">
                 <div className="space-y-2">
                    <div className="flex justify-between text-xs font-bold text-gray-400">
                       <span>POWER SUPPLY</span>
                       <span className="text-primary">61% LOAD</span>
                    </div>
                    <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                       <div className="h-full bg-primary" style={{ width: '61%' }}></div>
                    </div>
                 </div>
                 {[
                   { label: 'PCIe Clearance', status: 'PASSED' },
                   { label: 'RAM Clearance', status: 'PASSED' },
                   { label: 'Case Dimensions', status: 'PASSED' },
                 ].map(item => (
                   <div key={item.label} className="flex justify-between items-center py-1">
                      <span className="text-sm text-gray-300 font-medium">{item.label}</span>
                      <span className="text-[10px] font-black text-emerald-500 bg-emerald-500/10 px-2 py-0.5 rounded uppercase tracking-tighter">{item.status}</span>
                   </div>
                 ))}
              </div>
            </div>

            <div className="bg-white/5 rounded-2xl border border-white/10 p-6">
               <h3 className="text-white font-bold mb-6 flex items-center gap-2">
                <Activity className="text-primary" size={20} />
                Performance Metrics
              </h3>
              <div className="space-y-5">
                 {[
                   { label: 'Gaming 4K Ultra', value: 94 },
                   { label: 'Content Creation', value: 91 },
                   { label: 'Productivity', value: 88 },
                 ].map(item => (
                   <div key={item.label} className="space-y-2">
                      <div className="flex justify-between text-xs font-bold text-gray-400 uppercase tracking-tighter">
                         <span>{item.label}</span>
                         <span className="text-white">{item.value}</span>
                      </div>
                      <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                         <div className="h-full bg-gradient-to-r from-primary/50 to-primary" style={{ width: `${item.value}%` }}></div>
                      </div>
                   </div>
                 ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
