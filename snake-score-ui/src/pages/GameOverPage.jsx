import { useLocation, useNavigate } from "react-router-dom";

function GameOverPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const score = location.state?.score ?? 1840;
  const highScore = location.state?.highScore ?? 2450;

  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-hidden bg-background-dark font-display text-slate-100 antialiased">
      <header className="flex items-center justify-between border-b border-primary/20 px-6 py-4 md:px-10 lg:px-40">
        <div className="flex items-center gap-3 text-primary">
          <span className="material-symbols-outlined text-3xl">sports_esports</span>
          <h2 className="text-xl font-bold tracking-tight text-slate-100">Snake Pro</h2>
        </div>

        <div className="flex flex-1 items-center justify-end gap-6">
          <nav className="hidden items-center gap-8 md:flex">
            <a className="text-sm font-medium text-slate-300 transition-colors hover:text-primary" href="#">
              How to Play
            </a>
            <a className="text-sm font-medium text-slate-300 transition-colors hover:text-primary" href="#">
              Leaderboard
            </a>
            <a className="text-sm font-medium text-slate-300 transition-colors hover:text-primary" href="#">
              Settings
            </a>
          </nav>
          <button
            type="button"
            className="flex size-10 items-center justify-center rounded-full bg-primary/10 text-primary transition-all hover:bg-primary/20"
          >
            <span className="material-symbols-outlined">account_circle</span>
          </button>
        </div>
      </header>

      <main className="relative z-10 flex flex-1 flex-col items-center justify-center p-6 text-center">
        <div className="pointer-events-none absolute inset-0 z-0 opacity-10">
          <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary blur-[120px]" />
        </div>

        <div className="z-10 flex w-full max-w-2xl flex-col items-center rounded-xl border border-primary/10 bg-slate-900/40 p-8 shadow-2xl backdrop-blur-sm md:p-16">
          <div className="mb-6 rounded-full border border-red-500/20 bg-red-500/10 px-4 py-1">
            <span className="text-xs font-bold uppercase tracking-widest text-red-500">Session Ended</span>
          </div>

          <h1 className="mb-4 text-5xl font-black uppercase italic leading-none tracking-tighter text-white md:text-7xl">
            GAME OVER
          </h1>

          <div className="mb-4 mt-8">
            <p className="mb-2 text-sm font-bold uppercase tracking-[0.2em] text-primary/60">Final Score</p>
            <p className="text-7xl font-black leading-none tracking-tighter text-primary drop-shadow-[0_0_20px_rgba(19,236,128,0.4)] md:text-9xl">
              {score.toLocaleString("en-US")}
            </p>
          </div>

          <div className="mb-12 flex items-center gap-2">
            <span className="material-symbols-outlined text-xl text-primary">emoji_events</span>
            <h2 className="text-lg font-medium text-slate-300">
              High Score: <span className="font-bold text-white">{highScore.toLocaleString("en-US")}</span>
            </h2>
          </div>

          <div className="flex w-full max-w-md flex-col gap-4 sm:flex-row">
            <button
              type="button"
              onClick={() => navigate("/game")}
              className="flex h-14 flex-1 items-center justify-center rounded-full bg-primary px-8 text-lg font-bold text-background-dark shadow-[0_0_15px_rgba(19,236,128,0.3)] transition-all hover:scale-105 active:scale-95"
            >
              <span className="material-symbols-outlined mr-2">replay</span>
              PLAY AGAIN
            </button>
            <button
              type="button"
              onClick={() => navigate("/")}
              className="flex h-14 flex-1 items-center justify-center rounded-full border-2 border-primary/30 px-8 text-lg font-bold text-primary transition-all hover:bg-primary/10 active:scale-95"
            >
              <span className="material-symbols-outlined mr-2">home</span>
              MAIN MENU
            </button>
          </div>

          <div className="mt-8 flex gap-4">
            <button type="button" className="text-slate-500 transition-colors hover:text-primary">
              <span className="material-symbols-outlined">share</span>
            </button>
            <button type="button" className="text-slate-500 transition-colors hover:text-primary">
              <span className="material-symbols-outlined">save</span>
            </button>
          </div>
        </div>
      </main>

      <footer className="p-6 text-center">
        <p className="text-xs font-medium uppercase tracking-widest text-slate-500 opacity-50">
          © 2024 Snake Pro Engine • v2.0.4
        </p>
      </footer>

      <div className="pointer-events-none fixed left-0 top-0 m-4 h-32 w-32 rounded-tl-xl border-l-2 border-t-2 border-primary/10" />
      <div className="pointer-events-none fixed bottom-0 right-0 m-4 h-32 w-32 rounded-br-xl border-b-2 border-r-2 border-primary/10" />
    </div>
  );
}

export default GameOverPage;
