import { useState } from "react";

// The "MY" monogram, built from eight blocks on an 11×6 grid — one block per
// technology. At rest it reads as a logo; hovered (or tapped) it turns into an
// outline that shows what each block is.

const U = 40; // grid unit in SVG px
const GAP = 5;

type Block = { x: number; y: number; w: number; h: number; label: string };

const blocks: Block[] = [
  // M
  { x: 0, y: 0, w: 5, h: 1, label: "Python" },
  { x: 0, y: 1, w: 1, h: 5, label: "Django" },
  { x: 2, y: 1, w: 1, h: 3, label: "DRF" },
  { x: 4, y: 1, w: 1, h: 5, label: "PostgreSQL" },
  // Y
  { x: 6, y: 0, w: 1, h: 2, label: "Redis" },
  { x: 10, y: 0, w: 1, h: 2, label: "Celery" },
  { x: 6, y: 2, w: 5, h: 1, label: "Docker" },
  { x: 8, y: 3, w: 1, h: 3, label: "Git" },
];

function Blocks({ labels }: { labels: boolean }) {
  return (
    <>
      {blocks.map((b) => {
        const x = b.x * U + GAP / 2;
        const y = b.y * U + GAP / 2;
        const w = b.w * U - GAP;
        const h = b.h * U - GAP;
        const cx = x + w / 2;
        const cy = y + h / 2;
        const vertical = b.h > b.w;
        return (
          <g key={b.label} className={`sm-blk${b.label === "Python" ? " sm-blk-py" : ""}`}>
            <rect x={x} y={y} width={w} height={h} />
            {labels && (
              <text
                x={cx}
                y={cy}
                textAnchor="middle"
                dominantBaseline="central"
                transform={vertical ? `rotate(-90 ${cx} ${cy})` : undefined}
              >
                {b.label}
              </text>
            )}
          </g>
        );
      })}
    </>
  );
}

/** Small, static version for the nav and footer. */
export function StackMarkIcon({ size = 30 }: { size?: number }) {
  return (
    <svg className="sm sm-icon" viewBox={`0 0 ${11 * U} ${6 * U}`} width={size} height={(size * 6) / 11} aria-hidden="true">
      <Blocks labels={false} />
    </svg>
  );
}

/** Large interactive version for the hero. */
export default function StackMark() {
  const [open, setOpen] = useState(false);

  return (
    <figure className="sm-figure">
      <button
        type="button"
        className={`sm-button${open ? " is-open" : ""}`}
        aria-pressed={open}
        aria-label="MY monogram, built from the stack: Python, Django, DRF, PostgreSQL, Redis, Celery, Docker, Git"
        onClick={() => setOpen((v) => !v)}
      >
        <svg className="sm" viewBox={`0 0 ${11 * U} ${6 * U}`} aria-hidden="true">
          <Blocks labels />
        </svg>
      </button>
      <figcaption className="sm-caption">
        <span className="sm-caption-hover">Hover the mark — it’s built from the stack</span>
        <span className="sm-caption-touch">Tap the mark — it’s built from the stack</span>
      </figcaption>
    </figure>
  );
}
