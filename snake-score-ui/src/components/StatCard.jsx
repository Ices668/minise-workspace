function StatCard({ title, icon, value }) {
  return (
    <div className="group flex flex-col items-center justify-center gap-2 rounded-xl border border-primary/20 bg-primary/5 p-8 backdrop-blur-sm transition-all hover:border-primary/40">
      <p className="text-xs font-bold uppercase tracking-widest text-slate-400">{title}</p>
      <div className="flex items-center gap-3">
        <span className="material-symbols-outlined text-xl text-primary">{icon}</span>
        <p className="text-4xl font-bold tracking-tight text-slate-100">{value}</p>
      </div>
    </div>
  );
}

export default StatCard;
