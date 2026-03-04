import { useNavigate } from "react-router-dom";

function MenuPage() {
  const navigate = useNavigate();

  return (
    <div className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-background-dark px-6 py-12 text-slate-100 bg-grid-dots">
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute left-10 top-10 h-64 w-64 rounded-full bg-primary/20 blur-[120px]" />
        <div className="absolute bottom-10 right-10 h-96 w-96 rounded-full bg-primary/10 blur-[150px]" />
      </div>

      <div className="relative flex min-h-[85vh] w-full max-w-4xl flex-col items-center justify-center">
        <header className="mb-16 text-center">
          <div className="mb-4 flex items-center justify-center">
            <div className="flex size-16 items-center justify-center text-primary">
              <span className="material-symbols-outlined text-6xl">videogame_asset</span>
            </div>
          </div>
          <h1 className="neon-glow font-display text-7xl font-bold tracking-tighter text-primary md:text-9xl">
            SNAKE
          </h1>
          <p className="mt-2 text-sm font-medium uppercase tracking-[0.5em] text-primary/60">
            Modern Edition
          </p>
        </header>

        <div className="mb-20 flex w-full max-w-sm flex-col gap-4">
          <button
            type="button"
            onClick={() => navigate("/game")}
            className="flex h-16 w-full items-center justify-center rounded-full bg-primary text-xl font-bold tracking-widest text-background-dark shadow-[0_0_20px_rgba(19,236,128,0.4)] transition-all hover:scale-105 active:scale-95"
          >
            <span className="material-symbols-outlined mr-2">play_arrow</span>
            START GAME
          </button>
          <button
            type="button"
            className="flex h-16 w-full items-center justify-center rounded-full border-2 border-primary/40 bg-transparent text-lg font-bold tracking-widest text-primary transition-all hover:border-primary hover:bg-primary/10 active:scale-95"
          >
            <span className="material-symbols-outlined mr-2">settings</span>
            SETTINGS
          </button>
          <button
            type="button"
            className="flex h-16 w-full items-center justify-center rounded-full border-2 border-primary/40 bg-transparent text-lg font-bold tracking-widest text-primary transition-all hover:border-primary hover:bg-primary/10 active:scale-95"
          >
            <span className="material-symbols-outlined mr-2">leaderboard</span>
            LEADERBOARD
          </button>
        </div>

        <div className="flex w-full max-w-md items-center justify-center gap-12 border-t border-primary/20 pt-8">
          <div className="flex flex-col items-center gap-1">
            <p className="text-xs font-bold uppercase tracking-widest text-primary/50">High Score</p>
            <p className="font-display text-2xl font-bold tracking-tight text-slate-100">12,450</p>
          </div>
          <div className="h-10 w-px bg-primary/30" />
          <div className="flex flex-col items-center gap-1">
            <p className="text-xs font-bold uppercase tracking-widest text-primary/50">Best Level</p>
            <p className="font-display text-2xl font-bold tracking-tight text-slate-100">Level 15</p>
          </div>
        </div>

        <footer className="absolute bottom-8 hidden w-full items-center justify-between px-10 text-xs font-medium uppercase tracking-widest text-primary/30 md:flex">
          <span>v2.0.4-stable</span>
          <div className="flex gap-6">
            <a className="transition-colors hover:text-primary" href="#">Privacy</a>
            <a className="transition-colors hover:text-primary" href="#">Credits</a>
          </div>
          <span>© 2024</span>
        </footer>
      </div>
    </div>
  );
}

export default MenuPage;
