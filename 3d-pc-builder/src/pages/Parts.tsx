import { Search, Filter, Plus, ChevronLeft, ChevronRight, CheckCircle2, AlertCircle } from 'lucide-react';
import Navbar from '../components/Navbar';

const categories = ['All', 'CPU', 'GPU', 'Motherboard', 'Memory', 'Storage', 'Case', 'Cooling', 'Power Supply'];

const parts = [
  { id: 1, category: 'CPU', name: 'Intel Core i9-14900K', price: 589.00, brand: 'Intel', socket: 'LGA1700', cores: '24 Cores', compatible: true, img: 'https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?auto=format&fit=crop&q=80&w=400' },
  { id: 2, category: 'GPU', name: 'NVIDIA RTX 4090 Founders Edition', price: 1649.00, brand: 'NVIDIA', memory: '24GB GDDR6X', clock: '2.52 GHz', compatible: true, img: 'https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&q=80&w=400' },
  { id: 3, category: 'Motherboard', name: 'ROG Maximus Z790 Dark Hero', price: 659.99, brand: 'ASUS', socket: 'LGA1700', ram: 'DDR5', compatible: true, img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=400' },
  { id: 4, category: 'CPU', name: 'AMD Ryzen 9 7950X', price: 549.00, brand: 'AMD', socket: 'AM5', cores: '16 Cores', compatible: false, img: 'https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?auto=format&fit=crop&q=80&w=400' },
];

export default function Parts() {
  return (
    <div className="min-h-screen flex flex-col bg-black">
      <Navbar />
      <main className="flex-1 flex overflow-hidden">
        {/* Main Content */}
        <div className="flex-1 overflow-y-auto px-6 lg:px-12 py-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-8">
            <div>
              <h1 className="text-white text-3xl font-bold mb-2">Component Gallery</h1>
              <p className="text-gray-500 text-sm">Browse 5,000+ PC parts with real-time compatibility checks.</p>
            </div>
            <div className="flex items-center gap-3">
               <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white text-sm font-bold hover:bg-white/10 transition-colors">
                  <Filter size={18} className="text-primary" />
                  FILTERS
               </button>
               <div className="relative">
                  <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
                  <input className="bg-white/5 border border-white/10 rounded-lg pl-10 pr-4 py-2 text-white text-sm focus:ring-1 focus:ring-primary outline-none w-64" placeholder="Search parts..." />
               </div>
            </div>
          </div>

          <div className="flex gap-2 mb-8 overflow-x-auto pb-2 scrollbar-hide">
            {categories.map(cat => (
              <button key={cat} className={`px-5 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all ${cat === 'All' ? 'bg-primary text-white shadow-lg shadow-primary/20' : 'bg-white/5 text-gray-400 hover:text-white border border-white/10 hover:border-white/20'}`}>
                {cat.toUpperCase()}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-6">
            {parts.map(part => (
              <div key={part.id} className={`group flex flex-col bg-white/5 rounded-2xl border border-white/5 overflow-hidden transition-all hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/5 ${!part.compatible && 'opacity-60 grayscale-[0.5]'}`}>
                <div className="relative aspect-square bg-black flex items-center justify-center p-8 overflow-hidden">
                  <img src={part.img} alt={part.name} className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute top-4 left-4">
                    {part.compatible ? (
                      <span className="flex items-center gap-1.5 px-2 py-1 rounded bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 text-[10px] font-bold">
                        <CheckCircle2 size={12} /> COMPATIBLE
                      </span>
                    ) : (
                      <span className="flex items-center gap-1.5 px-2 py-1 rounded bg-red-500/10 border border-red-500/20 text-red-500 text-[10px] font-bold">
                        <AlertCircle size={12} /> INCOMPATIBLE
                      </span>
                    )}
                  </div>
                </div>
                
                <div className="p-5 flex flex-col flex-1">
                  <p className="text-[10px] font-bold text-primary tracking-widest uppercase mb-1">{part.brand}</p>
                  <h3 className="text-white font-bold leading-tight mb-4 group-hover:text-primary transition-colors">{part.name}</h3>
                  
                  <div className="grid grid-cols-2 gap-3 mb-6">
                     <div className="bg-white/5 rounded-lg px-3 py-2">
                        <p className="text-[9px] text-gray-500 font-bold uppercase">Socket</p>
                        <p className="text-xs text-white font-bold">{part.socket || 'N/A'}</p>
                     </div>
                     <div className="bg-white/5 rounded-lg px-3 py-2">
                        <p className="text-[9px] text-gray-500 font-bold uppercase">Spec</p>
                        <p className="text-xs text-white font-bold">{part.cores || part.ram || part.memory || 'N/A'}</p>
                     </div>
                  </div>

                  <div className="mt-auto flex items-center justify-between">
                    <p className="text-xl font-bold text-white">${part.price.toFixed(2)}</p>
                    <button className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all ${part.compatible ? 'bg-primary hover:bg-primary/90 text-white' : 'bg-white/10 text-gray-500 cursor-not-allowed'}`}>
                      <Plus size={16} /> ADD TO BUILD
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 flex items-center justify-center gap-2 pb-12">
            <button className="p-2 rounded-lg bg-white/5 border border-white/10 text-gray-500 hover:text-white transition-colors"><ChevronLeft size={20} /></button>
            <button className="w-10 h-10 rounded-lg bg-primary text-white font-bold text-sm">1</button>
            <button className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 text-gray-400 font-bold text-sm hover:border-primary transition-colors">2</button>
            <button className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 text-gray-400 font-bold text-sm hover:border-primary transition-colors">3</button>
            <span className="text-gray-600 px-2">...</span>
            <button className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 text-gray-400 font-bold text-sm hover:border-primary transition-colors">12</button>
            <button className="p-2 rounded-lg bg-white/5 border border-white/10 text-gray-500 hover:text-white transition-colors"><ChevronRight size={20} /></button>
          </div>
        </div>

        {/* Mini Build Summary */}
        <aside className="hidden lg:flex w-[320px] bg-[#0d0d0d] border-l border-white/10 flex-col p-6">
           <h2 className="text-white font-bold mb-6">Build Summary</h2>
           <div className="bg-white/5 rounded-2xl p-5 border border-white/10 mb-6">
              <p className="text-xs text-gray-500 font-bold uppercase mb-1">Total Cost</p>
              <p className="text-3xl font-bold text-primary">$2,238.99</p>
           </div>
           
           <div className="flex-1 space-y-3 overflow-y-auto">
              {['CPU', 'GPU', 'RAM'].map(item => (
                <div key={item} className="p-3 rounded-lg bg-white/5 border border-white/5 flex items-center gap-3">
                   <div className="size-10 rounded bg-black border border-white/10 flex items-center justify-center text-primary/50 text-xs font-bold">{item[0]}</div>
                   <div className="flex-1 overflow-hidden">
                      <p className="text-[10px] text-primary font-bold">{item}</p>
                      <p className="text-xs text-white font-bold truncate">Component Name...</p>
                   </div>
                </div>
              ))}
           </div>
           
           <button className="w-full bg-white/5 hover:bg-white/10 text-white font-bold py-3 rounded-xl border border-white/10 mt-6 transition-colors">VIEW WORKBENCH</button>
        </aside>
      </main>
    </div>
  );
}
