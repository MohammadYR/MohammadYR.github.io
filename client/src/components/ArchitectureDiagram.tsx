// System overview of the Custom Shop project, drawn from its docker-compose.yml:
// services web / db / redis / celery / celery-beat, Django apps inside web.
// The accent path is the mechanism worth seeing: slow work leaves the request
// and goes through Redis to a Celery worker.

const apps = [
  ["accounts", "catalog", "marketplace"],
  ["sales", "payments", "reviews"],
];

export default function ArchitectureDiagram({ repo }: { repo: string }) {
  return (
    <figure className="ad">
      <p className="ad-hint" aria-hidden="true">
        Swipe to see the async path →
      </p>
      <div className="ad-canvas">
        <svg
          viewBox="0 0 520 392"
          role="img"
          aria-label="Custom Shop architecture: a client calls the Django REST API over HTTPS with a JWT; the API reads and writes PostgreSQL and enqueues slow jobs in Redis, which a Celery worker consumes to send SMS and email; Celery Beat schedules periodic jobs. All services run under Docker Compose."
        >
          <defs>
            <marker
              id="ad-arrow"
              viewBox="0 0 8 8"
              refX="7"
              refY="4"
              markerWidth="7"
              markerHeight="7"
              orient="auto-start-reverse"
            >
              <path d="M0,0 L8,4 L0,8 z" fill="currentColor" />
            </marker>
            <marker
              id="ad-arrow-hi"
              viewBox="0 0 8 8"
              refX="7"
              refY="4"
              markerWidth="7"
              markerHeight="7"
              orient="auto-start-reverse"
            >
              <path d="M0,0 L8,4 L0,8 z" className="ad-hi-fill" />
            </marker>
          </defs>

          {/* external actors */}
          <rect
            className="ad-box ad-ext"
            x="30"
            y="16"
            width="280"
            height="44"
          />
          <text className="ad-title" x="170" y="43" textAnchor="middle">
            Client · buyer / seller
          </text>

          <rect
            className="ad-box ad-ext"
            x="370"
            y="16"
            width="120"
            height="44"
          />
          <text className="ad-title" x="430" y="43" textAnchor="middle">
            SMS · Email
          </text>

          {/* docker compose boundary */}
          <rect
            className="ad-boundary"
            x="12"
            y="88"
            width="496"
            height="292"
          />
          <text className="ad-caption" x="24" y="376">
            docker compose
          </text>

          {/* web */}
          <rect
            className="ad-box ad-web"
            x="30"
            y="108"
            width="280"
            height="164"
          />
          <text className="ad-label" x="46" y="130">
            web · :8000
          </text>
          <text className="ad-title ad-strong" x="46" y="150">
            Django 5 + DRF
          </text>
          {apps.map((row, ri) =>
            row.map((name, ci) => (
              <g key={name}>
                <rect
                  className="ad-chip"
                  x={46 + ci * 84}
                  y={164 + ri * 30}
                  width="80"
                  height="22"
                />
                <text
                  className="ad-chip-t"
                  x={86 + ci * 84}
                  y={179 + ri * 30}
                  textAnchor="middle"
                >
                  {name}
                </text>
              </g>
            ))
          )}
          <rect
            className="ad-chip ad-chip-core"
            x="46"
            y="228"
            width="248"
            height="26"
          />
          <text className="ad-chip-t" x="170" y="245" textAnchor="middle">
            core · soft-delete base models
          </text>

          {/* db */}
          <rect className="ad-box" x="30" y="300" width="280" height="52" />
          <text className="ad-label" x="46" y="321">
            db
          </text>
          <text className="ad-title ad-strong" x="46" y="340">
            PostgreSQL 15
          </text>

          {/* right column */}
          <rect
            className="ad-box ad-hi"
            x="370"
            y="108"
            width="120"
            height="52"
          />
          <text className="ad-label" x="382" y="129">
            celery
          </text>
          <text className="ad-title ad-strong" x="382" y="148">
            worker
          </text>

          <rect
            className="ad-box ad-hi"
            x="370"
            y="196"
            width="120"
            height="52"
          />
          <text className="ad-label" x="382" y="217">
            redis
          </text>
          <text className="ad-title ad-strong" x="382" y="236">
            Redis 7 · broker
          </text>

          <rect className="ad-box" x="370" y="300" width="120" height="52" />
          <text className="ad-label" x="382" y="321">
            celery-beat
          </text>
          <text className="ad-title ad-strong" x="382" y="340">
            scheduler
          </text>

          {/* synchronous path */}
          <line
            className="ad-edge"
            x1="170"
            y1="60"
            x2="170"
            y2="106"
            markerEnd="url(#ad-arrow)"
          />
          <text className="ad-edge-t" x="178" y="80">
            HTTPS · JWT
          </text>

          <line
            className="ad-edge"
            x1="170"
            y1="272"
            x2="170"
            y2="298"
            markerEnd="url(#ad-arrow)"
          />
          <text className="ad-edge-t" x="178" y="290">
            ORM
          </text>

          <line
            className="ad-edge"
            x1="430"
            y1="300"
            x2="430"
            y2="250"
            markerEnd="url(#ad-arrow)"
          />
          <text className="ad-edge-t" x="438" y="280">
            schedules
          </text>

          {/* asynchronous path */}
          <line
            className="ad-edge ad-edge-hi ad-flow"
            x1="310"
            y1="222"
            x2="368"
            y2="222"
            markerEnd="url(#ad-arrow-hi)"
          />
          <text
            className="ad-edge-t ad-hi-text"
            x="339"
            y="214"
            textAnchor="middle"
          >
            enqueue
          </text>

          <line
            className="ad-edge ad-edge-hi ad-flow"
            x1="430"
            y1="196"
            x2="430"
            y2="162"
            markerEnd="url(#ad-arrow-hi)"
          />
          <text className="ad-edge-t ad-hi-text" x="438" y="183">
            consume
          </text>

          <line
            className="ad-edge ad-edge-hi ad-flow"
            x1="430"
            y1="108"
            x2="430"
            y2="62"
            markerEnd="url(#ad-arrow-hi)"
          />
          <text className="ad-edge-t ad-hi-text" x="438" y="90">
            send
          </text>
        </svg>
      </div>
      <figcaption>
        <span>
          <b>Custom Shop</b> — requests are answered by the API; slow work (SMS,
          email, scheduled jobs) goes through Redis to Celery.
        </span>
        <a href={repo} target="_blank" rel="noopener noreferrer">
          View repo →
        </a>
      </figcaption>
    </figure>
  );
}
