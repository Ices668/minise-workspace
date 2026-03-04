import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

const GRID_SIZE = 20;
const CELL_SIZE = 24;
const CANVAS_SIZE = GRID_SIZE * CELL_SIZE;

const demoSnake = [
  { x: 10, y: 10, alpha: 1 },
  { x: 9, y: 10, alpha: 0.9 },
  { x: 8, y: 10, alpha: 0.8 },
  { x: 7, y: 10, alpha: 0.7 },
  { x: 7, y: 11, alpha: 0.6 },
  { x: 7, y: 12, alpha: 0.5 },
  { x: 6, y: 12, alpha: 0.4 },
];

const food = { x: 15, y: 5 };

function drawCell(ctx, x, y, size, color, radius = 6) {
  const px = x * size;
  const py = y * size;

  ctx.beginPath();
  ctx.moveTo(px + radius, py);
  ctx.arcTo(px + size, py, px + size, py + size, radius);
  ctx.arcTo(px + size, py + size, px, py + size, radius);
  ctx.arcTo(px, py + size, px, py, radius);
  ctx.arcTo(px, py, px + size, py, radius);
  ctx.closePath();
  ctx.fillStyle = color;
  ctx.fill();
}

function GamePage() {
  const navigate = useNavigate();
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) {
      return;
    }

    const ctx = canvas.getContext("2d");
    if (!ctx) {
      return;
    }

    ctx.clearRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);
    ctx.fillStyle = "#0a1410";
    ctx.fillRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);

    ctx.strokeStyle = "rgba(19, 236, 128, 0.08)";
    ctx.lineWidth = 1;
    for (let index = 0; index <= GRID_SIZE; index += 1) {
      const pos = index * CELL_SIZE;
      ctx.beginPath();
      ctx.moveTo(pos, 0);
      ctx.lineTo(pos, CANVAS_SIZE);
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(0, pos);
      ctx.lineTo(CANVAS_SIZE, pos);
      ctx.stroke();
    }

    ctx.save();
    ctx.shadowColor = "rgba(239, 68, 68, 0.6)";
    ctx.shadowBlur = 16;
    ctx.fillStyle = "#ef4444";
    ctx.beginPath();
    ctx.arc(
      food.x * CELL_SIZE + CELL_SIZE / 2,
      food.y * CELL_SIZE + CELL_SIZE / 2,
      CELL_SIZE * 0.35,
      0,
      Math.PI * 2,
    );
    ctx.fill();
    ctx.restore();

    demoSnake.forEach((segment, idx) => {
      drawCell(ctx, segment.x, segment.y, CELL_SIZE, `rgba(19, 236, 128, ${segment.alpha})`);
      if (idx === 0) {
        ctx.save();
        ctx.shadowColor = "rgba(19, 236, 128, 0.45)";
        ctx.shadowBlur = 14;
        drawCell(ctx, segment.x, segment.y, CELL_SIZE, "#13ec80", 8);

        const eyeY = segment.y * CELL_SIZE + CELL_SIZE * 0.4;
        ctx.fillStyle = "#102219";
        ctx.beginPath();
        ctx.arc(segment.x * CELL_SIZE + CELL_SIZE * 0.38, eyeY, 1.8, 0, Math.PI * 2);
        ctx.arc(segment.x * CELL_SIZE + CELL_SIZE * 0.62, eyeY, 1.8, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }
    });
  }, []);

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === "Escape" || event.key === " ") {
        event.preventDefault();
        navigate("/");
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [navigate]);

  return (
    <div className="flex min-h-screen w-full flex-col items-center overflow-x-hidden bg-background-dark font-display text-slate-100">
      <header className="flex w-full max-w-4xl items-center justify-between border-b border-primary/10 px-6 py-8">
        <div className="flex items-center gap-6">
          <div className="flex flex-col">
            <span className="text-xs font-bold uppercase tracking-widest text-primary">Score</span>
            <span className="text-3xl font-bold leading-none tracking-tight">120</span>
          </div>
          <div className="h-10 w-px bg-primary/20" />
          <div className="flex flex-col">
            <span className="text-xs font-bold uppercase tracking-widest text-primary">Level</span>
            <span className="text-3xl font-bold leading-none tracking-tight">04</span>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <button
            type="button"
            onClick={() => navigate("/")}
            className="flex items-center justify-center rounded-full border border-primary/20 bg-primary/10 p-3 text-primary transition-colors hover:bg-primary/20"
            aria-label="Pause and return"
          >
            <span className="material-symbols-outlined">pause</span>
          </button>
          <button
            type="button"
            onClick={() => navigate("/")}
            className="flex size-12 items-center justify-center rounded-full border-2 border-primary text-primary transition-colors hover:bg-primary/20"
            aria-label="Return to menu"
          >
            <span className="material-symbols-outlined">home</span>
          </button>
        </div>
      </header>

      <main className="flex w-full flex-1 flex-col items-center justify-center gap-8 p-4">
        <div className="relative flex aspect-square w-full max-w-[600px] items-center justify-center overflow-hidden rounded-xl border border-primary/20 bg-game-board shadow-2xl">
          <div className="grid-board absolute inset-0 opacity-50" />
          <canvas
            ref={canvasRef}
            width={CANVAS_SIZE}
            height={CANVAS_SIZE}
            className="relative z-10 h-full w-full max-w-[480px] max-h-[480px]"
          />
        </div>

        <div className="flex flex-wrap items-center justify-center gap-6 text-sm font-medium text-primary/60">
          <div className="flex items-center gap-2">
            <kbd className="rounded border border-primary/30 bg-primary/10 px-2 py-1 text-primary">ESC</kbd>
            <span>Pause / Main Menu</span>
          </div>
          <div className="flex items-center gap-2">
            <kbd className="rounded border border-primary/30 bg-primary/10 px-2 py-1 text-primary">SPACE</kbd>
            <span>Pause / Main Menu</span>
          </div>
          <div className="flex items-center gap-2">
            <span>Arrow Keys Move (placeholder)</span>
          </div>
        </div>

        <button
          type="button"
          onClick={() => navigate("/gameover", { state: { score: 1840, highScore: 2450 } })}
          className="rounded-full border border-red-400/60 bg-red-500/10 px-6 py-3 text-sm font-bold uppercase tracking-widest text-red-300 transition-colors hover:bg-red-500/20"
        >
          Trigger Game Over
        </button>
      </main>

      <footer className="flex w-full max-w-4xl justify-between px-6 py-8 text-xs uppercase tracking-[0.2em] text-primary/30">
        <div>Session ID: SNK-9921-X</div>
        <div>Engine v2.0.4 - Optimized for Web</div>
      </footer>
    </div>
  );
}

export default GamePage;
