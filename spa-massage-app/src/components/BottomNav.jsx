import { Link, useLocation } from 'react-router-dom';

const BottomNav = () => {
  const location = useLocation();
  const isActive = (path) => location.pathname === path;

  return (
    <nav className="fixed bottom-0 left-0 right-0 flex items-center justify-around bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border-t border-primary/10 px-4 pb-8 pt-4 z-50 max-w-[430px] mx-auto">
      <Link to="/" className={`flex flex-col items-center gap-1 ${isActive('/') ? 'text-primary' : 'text-slate-400 dark:text-slate-500'}`}>
        <span className="material-symbols-outlined" style={{ fontVariationSettings: isActive('/') ? "'FILL' 1" : "'FILL' 0" }}>home</span>
        <span className="text-[10px] font-bold uppercase tracking-widest">Home</span>
      </Link>
      <Link to="/" className="flex flex-col items-center gap-1 text-slate-400 dark:text-slate-500">
        <span className="material-symbols-outlined">spa</span>
        <span className="text-[10px] font-bold uppercase tracking-widest">Treatments</span>
      </Link>
      <Link to="/booking" className={`flex flex-col items-center gap-1 ${isActive('/booking') ? 'text-primary' : 'text-slate-400 dark:text-slate-500'}`}>
        <span className="material-symbols-outlined" style={{ fontVariationSettings: isActive('/booking') ? "'FILL' 1" : "'FILL' 0" }}>calendar_today</span>
        <span className="text-[10px] font-bold uppercase tracking-widest">Bookings</span>
      </Link>
      <Link to="/profile" className={`flex flex-col items-center gap-1 ${isActive('/profile') ? 'text-primary' : 'text-slate-400 dark:text-slate-500'}`}>
        <span className="material-symbols-outlined" style={{ fontVariationSettings: isActive('/profile') ? "'FILL' 1" : "'FILL' 0" }}>person</span>
        <span className="text-[10px] font-bold uppercase tracking-widest">Profile</span>
      </Link>
    </nav>
  );
};

export default BottomNav;
