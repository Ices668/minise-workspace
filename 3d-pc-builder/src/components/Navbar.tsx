import { Link } from 'react-router-dom';
import { Box, Search, User, Menu } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-black/80 backdrop-blur-md px-6 lg:px-20 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-12">
          <Link to="/" className="flex items-center gap-3 text-primary group">
            <Box className="w-8 h-8 font-bold group-hover:scale-110 transition-transform" />
            <h2 className="text-white text-xl font-bold uppercase tracking-tighter">PCBuilder3D</h2>
          </Link>
          <nav className="hidden md:flex items-center gap-8">
            <Link to="/parts" className="text-gray-400 hover:text-primary text-sm font-medium transition-colors">Parts</Link>
            <Link to="/workbench" className="text-gray-400 hover:text-primary text-sm font-medium transition-colors">Workbench</Link>
            <Link to="/summary" className="text-gray-400 hover:text-primary text-sm font-medium transition-colors">Summary</Link>
          </nav>
        </div>

        <div className="flex items-center gap-6">
          <div className="hidden sm:flex items-center bg-white/5 border border-white/10 rounded-lg px-3 py-1.5 focus-within:border-primary/50 transition-colors">
            <Search className="text-gray-400 w-4 h-4" />
            <input 
              className="bg-transparent border-none focus:ring-0 text-sm text-white placeholder:text-gray-500 w-32 lg:w-48 ml-2" 
              placeholder="Search parts..."
            />
          </div>
          <button className="hidden md:flex items-center justify-center rounded-lg h-10 px-5 bg-primary text-white text-sm font-bold shadow-[0_0_15px_rgba(0,170,255,0.4)] hover:brightness-110 transition-all">
            Sign In
          </button>
          <Menu className="md:hidden text-white w-6 h-6" />
        </div>
      </div>
    </header>
  );
}
