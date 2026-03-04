function ScoreDisplay({ score }) {
  return (
    <div className="mb-2 flex flex-col items-center">
      <span className="mb-4 text-sm font-bold uppercase tracking-[0.3em] text-slate-400">
        Current Score
      </span>
      <div className="relative">
        <h1 className="neon-glow text-[120px] font-bold leading-none tracking-tighter text-primary md:text-[180px]">
          {score}
        </h1>
      </div>
    </div>
  );
}

export default ScoreDisplay;
