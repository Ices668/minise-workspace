function ActionPanel() {
  return (
    <div className="mt-16 flex flex-col items-center gap-4">
      <button className="flex h-16 min-w-[240px] cursor-pointer items-center justify-center gap-3 overflow-hidden rounded-full bg-primary px-10 text-background-dark transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(19,236,128,0.3)] active:scale-95">
        <span className="material-symbols-outlined text-2xl font-bold">play_arrow</span>
        <span className="text-lg font-bold tracking-wider">PLAY AGAIN</span>
      </button>
      <button className="mt-2 flex items-center gap-2 text-sm font-medium text-slate-500 transition-colors hover:text-slate-300">
        <span className="material-symbols-outlined text-base">share</span>
        Share your score
      </button>
    </div>
  );
}

export default ActionPanel;
