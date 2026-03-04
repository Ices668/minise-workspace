import { useState } from 'react';
import { Cpu, Database, MemoryStick as Memory, Fan, Settings, Trash2, PlusCircle, ShoppingCart, Share2 } from 'lucide-react';
import Navbar from '../components/Navbar';
import Chassis3D from '../components/Chassis3D';

export default function Workbench() {
  const [selectedParts, setSelectedParts] = useState([
    { id: 1, type: 'CPU', name: 'Intel Core i9-14900K', price: 589, icon: <Cpu size={16} /> },
    { id: 2, type: 'GPU', name: 'RTX 4090 Founders Edition', price: 1649, icon: <Settings size={16} /> },
  ]);

  const total = selectedParts.reduce((acc, part) => acc + part.price, 0);

  return (
    <div className="min-h-screen flex flex-col bg-black">
      <Navbar />
      <main className="flex-1 flex overflow-hidden">
        {/* 3D Viewport */}
        <div className="flex-1 relative bg-gradient-to-b from-gray-900 to-black">
          <div className="absolute top-6 left-6 z-10">
             <div className="bg-black/50 backdrop-blur-md border border-white/10 p-4 rounded-xl">
                <h1 className="text-white font-bold text-xl mb-1">Interactive Workbench</h1>
                <p className="text-gray-400 text-xs uppercase tracking-widest">3D Assembly Active</p>
             </div>
          </div>
          
          <div className="absolute top-6 right-6 z-10 flex flex-col gap-2">
             <button className="bg-white/10 hover:bg-white/20 p-2 rounded-lg border border-white/10 text-white transition-colors">
                <Settings size={20} />
             </button>
             <button className="bg-white/10 hover:bg-white/20 p-2 rounded-lg border border-white/10 text-white transition-colors">
                <Share2 size={20} />
             </button>
          </div>

          <Chassis3D />

          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10">
             <div className="flex gap-4 bg-black/60 backdrop-blur-xl border border-white/10 p-2 rounded-full">
                <button className="px-6 py-2 rounded-full bg-primary text-white font-bold text-sm shadow-lg shadow-primary/20">ASSEMBLE</button>
                <button className="px-6 py-2 rounded-full text-gray-400 font-medium text-sm hover:text-white transition-colors">RGB SYNC</button>
                <button className="px-6 py-2 rounded-full text-gray-400 font-medium text-sm hover:text-white transition-colors">STRESS TEST</button>
             </div>
          </div>
        </div>

        {/* Sidebar */}
        <aside className="w-[400px] border-l border-white/10 bg-[#0d0d0d] flex flex-col">
          <div className="p-6 border-b border-white/10">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-white text-lg font-bold">Current Build</h2>
              <button className="text-primary text-xs font-bold hover:underline tracking-widest">CLEAR ALL</button>
            </div>
            
            <div className="bg-primary/5 rounded-2xl p-6 border border-primary/20">
              <p className="text-xs text-gray-400 font-bold uppercase tracking-widest mb-1">Estimated Total</p>
              <p className="text-4xl font-bold text-primary glow-blue">${total.toLocaleString()}</p>
              <div className="flex items-center gap-2 mt-3">
                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
                <span className="text-xs font-medium text-emerald-500 uppercase tracking-tighter">Compatibility Passed</span>
              </div>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {selectedParts.map(part => (
              <div key={part.id} className="group flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/5 hover:border-primary/30 transition-all">
                <div className="size-12 rounded-lg bg-black border border-white/10 flex items-center justify-center text-primary">
                  {part.icon}
                </div>
                <div className="flex-1">
                  <p className="text-[10px] font-bold text-primary uppercase">{part.type}</p>
                  <p className="text-sm font-bold text-white truncate">{part.name}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-bold text-white">${part.price}</p>
                  <button className="text-gray-500 hover:text-red-500 transition-colors">
                    <Trash2 size={16} />
                  </button>
                </div>
              </div>
            ))}

            {/* Empty Slots */}
            {['Memory', 'Storage', 'Power Supply', 'Cooling'].map(type => (
              <div key={type} className="flex items-center gap-4 p-4 rounded-xl border border-dashed border-white/10 hover:border-primary/30 transition-all cursor-pointer group">
                <div className="size-12 rounded-lg border border-dashed border-white/10 flex items-center justify-center text-gray-600 group-hover:text-primary transition-colors">
                  <PlusCircle size={20} />
                </div>
                <div className="flex-1">
                  <p className="text-[10px] font-bold text-gray-500 uppercase">{type}</p>
                  <p className="text-sm font-bold text-gray-600 group-hover:text-primary transition-colors">Add Component</p>
                </div>
              </div>
            ))}
          </div>

          <div className="p-6 bg-black/40 border-t border-white/10 flex flex-col gap-3">
            <button className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-4 rounded-xl shadow-lg shadow-primary/30 flex items-center justify-center gap-3 transition-transform active:scale-[0.98]">
              <ShoppingCart size={20} />
              CHECKOUT BUILD
            </button>
          </div>
        </aside>
      </main>
    </div>
  );
}
