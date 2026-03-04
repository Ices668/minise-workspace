function Header() {
  return (
    <header className="sticky top-0 z-50 flex items-center justify-between border-b border-primary/10 bg-background-dark/80 px-6 py-4 backdrop-blur-md md:px-20 lg:px-40">
      <div className="flex items-center gap-3">
        <div className="flex size-8 items-center justify-center rounded bg-primary">
          <span className="material-symbols-outlined font-bold text-background-dark">
            keyboard_command_key
          </span>
        </div>
        <h2 className="text-xl font-bold tracking-tight text-slate-100">
          SNAKE <span className="text-primary">MODERN</span>
        </h2>
      </div>
      <div className="flex flex-1 justify-end gap-6 md:gap-12">
        <nav className="hidden items-center gap-8 md:flex">
          <a
            href="#"
            className="text-sm font-medium text-slate-400 transition-colors hover:text-primary"
          >
            Home
          </a>
          <a
            href="#"
            className="text-sm font-medium text-slate-400 transition-colors hover:text-primary"
          >
            Leaderboard
          </a>
          <a
            href="#"
            className="text-sm font-medium text-slate-400 transition-colors hover:text-primary"
          >
            Settings
          </a>
        </nav>
        <button className="flex size-10 items-center justify-center rounded-full border border-primary/20 bg-primary/10 text-primary transition-all hover:bg-primary/20">
          <span className="material-symbols-outlined">person</span>
        </button>
      </div>
    </header>
  );
}

export default Header;
