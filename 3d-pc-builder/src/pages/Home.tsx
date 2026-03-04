import { Link } from 'react-router-dom';
import { ArrowRight, Box, Shield, Zap, Cpu } from 'lucide-react';
import Navbar from '../components/Navbar';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative px-6 lg:px-20 py-20 lg:py-32 max-w-7xl mx-auto overflow-hidden">
          <div className="absolute top-0 right-0 -z-10 w-1/2 h-full opacity-20">
             <div className="absolute inset-0 bg-gradient-to-l from-primary/50 to-transparent blur-3xl"></div>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="flex flex-col gap-8 z-10">
              <div className="flex flex-col gap-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest w-fit">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                  </span>
                  v2.0 Live Now
                </div>
                <h1 className="text-white text-5xl lg:text-7xl font-bold leading-[1.1] tracking-tight">
                  Build Your <span className="text-primary glow-blue">Dream PC</span> in 3D
                </h1>
                <p className="text-gray-400 text-lg lg:text-xl max-w-lg leading-relaxed">
                  Experience high-end interactive assembly with real-time 3D visualization, physics-based cable routing, and glowing RGB customization.
                </p>
              </div>
              
              <div className="flex flex-wrap gap-4">
                <Link to="/workbench" className="flex min-w-[160px] items-center justify-center rounded-lg h-14 px-8 bg-primary text-white text-lg font-bold shadow-[0_0_20px_rgba(0,170,255,0.4)] hover:scale-105 transition-transform">
                  Start Building
                </Link>
                <Link to="/parts" className="flex min-w-[160px] items-center justify-center rounded-lg h-14 px-8 bg-white/5 border border-white/10 text-white text-lg font-bold hover:bg-white/10 transition-colors">
                  View Components
                </Link>
              </div>
              
              <div className="flex items-center gap-6 mt-4">
                <div className="flex -space-x-3">
                  {[1, 2, 3].map(i => (
                    <div key={i} className="size-10 rounded-full border-2 border-black bg-gray-800 flex items-center justify-center text-[10px] font-bold">U{i}</div>
                  ))}
                  <div className="flex items-center justify-center size-10 rounded-full bg-white/10 border-2 border-black text-[10px] font-bold">+2k</div>
                </div>
                <p className="text-gray-500 text-sm italic">Joined by 12,000+ PC enthusiasts this month</p>
              </div>
            </div>
            
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-purple-600 rounded-xl blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
              <div className="relative aspect-square lg:aspect-[4/3] rounded-xl overflow-hidden bg-white/5 border border-white/10 shadow-2xl flex items-center justify-center p-8">
                 <div className="w-full h-full bg-black/40 rounded-lg flex flex-col items-center justify-center border border-white/10 group-hover:border-primary/50 transition-colors">
                    <Box className="w-24 h-24 text-primary opacity-50 mb-4" />
                    <span className="text-white/30 text-sm font-mono tracking-widest">3D ENGINE ACTIVE</span>
                 </div>
                 <div className="absolute bottom-6 left-6 z-20 flex flex-col gap-1">
                  <span className="text-primary text-xs font-bold uppercase">Featured Case</span>
                  <span className="text-white text-lg font-bold">Lian Li O11 Dynamic EVO</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="px-6 lg:px-20 py-20 bg-white/5">
          <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
            <div className="p-8 rounded-xl bg-black/40 border border-white/10 hover:border-primary/30 transition-colors">
              <Cpu className="text-primary w-10 h-10 mb-6" />
              <h3 className="text-xl font-bold text-white mb-3">Real-time Compatibility</h3>
              <p className="text-gray-400">Our advanced engine checks every part for physical and technical compatibility in real-time.</p>
            </div>
            <div className="p-8 rounded-xl bg-black/40 border border-white/10 hover:border-primary/30 transition-colors">
              <Zap className="text-primary w-10 h-10 mb-6" />
              <h3 className="text-xl font-bold text-white mb-3">Performance Prediction</h3>
              <p className="text-gray-400">Get instant FPS estimates and bottleneck analysis for your specific hardware configuration.</p>
            </div>
            <div className="p-8 rounded-xl bg-black/40 border border-white/10 hover:border-primary/30 transition-colors">
              <Shield className="text-primary w-10 h-10 mb-6" />
              <h3 className="text-xl font-bold text-white mb-3">Expert Verification</h3>
              <p className="text-gray-400">Community and AI-driven build reviews to ensure your dream machine runs flawlessly.</p>
            </div>
          </div>
        </section>
      </main>
      
      <footer className="px-6 lg:px-20 py-12 border-t border-white/10 text-center">
        <p className="text-gray-500 text-sm">© 2026 PCBuilder3D. All rights reserved.</p>
      </footer>
    </div>
  );
}
