import { Link } from "wouter";
import { ArrowLeft, ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import "../styles/home.css";

const EMAIL = "m.yousefi.r79@gmail.com";
const GITHUB = "https://github.com/MohammadYR";
const LINKEDIN = "https://www.linkedin.com/in/mohammadyousefi";

const projects = [
  {
    kicker: "Bootcamp capstone · Solo",
    title: "Multi-Vendor Marketplace",
    desc: "Back-end for a marketplace where many sellers list products and buyers order from them.",
    repo: "https://github.com/MohammadYR/Custom-Shop-Project",
    repoLabel: "Custom-Shop-Project",
    bullets: [
      "Modular domain apps on a shared base with soft delete",
      "JWT auth with SMS/email OTP and separate seller/buyer permissions",
      "Cart → order → payment flow; SMS offloaded to Celery on Redis",
      "Custom admin panel, Docker Compose setup and Swagger API docs",
    ],
    tags: ["Django", "DRF", "PostgreSQL", "Celery", "Redis", "Docker"],
  },
  {
    kicker: "Team project · 3 people",
    title: "Cafe Ordering System",
    desc: "Ordering system for a cafe with a server-rendered web UI and a REST API over the same models.",
    repo: "https://github.com/mohammadsafarpour/coffee-shop",
    repoLabel: "coffee-shop",
    bullets: [
      "Django-template web interface plus a separate REST API",
      "User profiles, wishlists and product reviews",
      "Catalog with categories and multiple images",
      "Orders with status tracking and total calculation",
    ],
    tags: ["Django", "DRF", "PostgreSQL", "JWT + OTP"],
  },
];

function Terminal() {
  return (
    <div className="hm-term" aria-label="Profile summary as an API response">
      <div className="hm-term-bar" aria-hidden="true">
        <i />
        <i />
        <i />
        <b>~/mohammad — zsh</b>
      </div>
      <pre>
        <span className="t-prompt">$</span> curl /api/v1/developers/mohammad-yousefi{"\n"}
        <span className="t-ok">HTTP/1.1 200 OK</span>
        {"\n"}
        <span className="t-dim">content-type: application/json</span>
        {"\n\n"}
        {"{\n"}
        {"  "}<span className="t-key">"role"</span>: <span className="t-str">"Back-End Developer"</span>,{"\n"}
        {"  "}<span className="t-key">"stack"</span>: [<span className="t-str">"Python"</span>, <span className="t-str">"Django"</span>, <span className="t-str">"DRF"</span>],{"\n"}
        {"  "}<span className="t-key">"database"</span>: <span className="t-str">"PostgreSQL"</span>,{"\n"}
        {"  "}<span className="t-key">"async"</span>: [<span className="t-str">"Celery"</span>, <span className="t-str">"Redis"</span>],{"\n"}
        {"  "}<span className="t-key">"ships_with"</span>: <span className="t-str">"Docker Compose"</span>,{"\n"}
        {"  "}<span className="t-key">"background"</span>: [<span className="t-str">"Mech. Eng."</span>, <span className="t-str">"MBA"</span>],{"\n"}
        {"  "}<span className="t-key">"location"</span>: <span className="t-str">"Tehran, Iran"</span>,{"\n"}
        {"  "}<span className="t-key">"open_to_work"</span>: <span className="t-bool">true</span>{"\n"}
        {"}\n"}
        <span className="t-prompt">$</span> <span className="t-cursor" aria-hidden="true" />
      </pre>
    </div>
  );
}

export default function Home() {
  return (
    <div className="hm mx-root" lang="en">
      <header className="hm-nav">
        <div className="hm-wrap">
          <a href="#top" className="hm-brand">
            <span className="hm-mono-mark">MY</span>
            Mohammad Yousefi
          </a>
          <nav className="hm-nav-links">
            <a href="#projects">Projects</a>
            <a href="#resume">Resume</a>
            <div className="hm-nav-icons">
              <a href={GITHUB} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <Github size={18} />
              </a>
              <a href={LINKEDIN} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Linkedin size={18} />
              </a>
              <a href={`mailto:${EMAIL}`} aria-label="Email">
                <Mail size={18} />
              </a>
            </div>
          </nav>
        </div>
      </header>

      <main>
        <section className="hm-hero" id="top">
          <div className="hm-wrap hm-hero-grid">
            <div>
              <p className="hm-eyebrow">// back-end developer · tehran</p>
              <h1 className="hm-title">
                Mohammad
                <br />
                Yousefi<span>.</span>
              </h1>
              <p className="hm-lead">
                I build the part users never see: modular Django back-ends, clean REST APIs, and the queues and
                containers that keep them running.
              </p>
              <div className="hm-chips">
                {["Python", "Django", "DRF", "PostgreSQL", "Celery", "Redis", "Docker"].map((t) => (
                  <span key={t} className="hm-chip">
                    {t}
                  </span>
                ))}
              </div>
              <div className="hm-ctas">
                <Link href="/resume-en" className="hm-btn hm-btn-primary">
                  View Resume <ArrowRight size={16} />
                </Link>
                <Link href="/resume-fa" className="hm-btn hm-btn-ghost" lang="fa">
                  رزومهٔ فارسی
                </Link>
                <a href={`mailto:${EMAIL}`} className="hm-mail">
                  <Mail size={15} /> {EMAIL}
                </a>
              </div>
            </div>
            <Terminal />
          </div>

          <div className="hm-strip">
            <div className="hm-wrap hm-strip-grid">
              <div className="hm-strip-item">
                <span className="hm-strip-k">Training</span>
                <span className="hm-strip-v">Back-end bootcamp</span>
                <br />
                <span className="hm-strip-s">Maktab Sharif · 9 months, 2025</span>
              </div>
              <div className="hm-strip-item">
                <span className="hm-strip-k">Studying</span>
                <span className="hm-strip-v">MBA, Marketing</span>
                <br />
                <span className="hm-strip-s">University of Tehran</span>
              </div>
              <div className="hm-strip-item">
                <span className="hm-strip-k">Degree</span>
                <span className="hm-strip-v">B.Sc. Mechanical Engineering</span>
                <br />
                <span className="hm-strip-s">IAU, Science and Research Branch</span>
              </div>
            </div>
          </div>
        </section>

        <section className="hm-section hm-section-mist" id="projects">
          <div className="hm-wrap">
            <div className="hm-sec-head">
              <span className="hm-sec-num">01</span>
              <h2 className="hm-sec-title">Selected projects</h2>
              <span className="hm-sec-line" />
            </div>
            <div className="hm-projects">
              {projects.map((p) => (
                <article key={p.title} className="hm-card">
                  <div className="hm-card-top">
                    <div>
                      <span className="hm-card-kicker">{p.kicker}</span>
                      <h3 className="hm-card-title">{p.title}</h3>
                    </div>
                    <a className="hm-card-repo" href={p.repo} target="_blank" rel="noopener noreferrer">
                      <Github size={14} /> {p.repoLabel}
                    </a>
                  </div>
                  <p className="hm-card-desc">{p.desc}</p>
                  <ul className="hm-bullets">
                    {p.bullets.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                  <div className="hm-tags">
                    {p.tags.map((t) => (
                      <span key={t} className="hm-tag">
                        {t}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="hm-section" id="resume">
          <div className="hm-wrap">
            <div className="hm-sec-head">
              <span className="hm-sec-num">02</span>
              <h2 className="hm-sec-title">Resume</h2>
              <span className="hm-sec-line" />
            </div>
            <div className="hm-resumes">
              <Link href="/resume-en" className="hm-rcard" dir="ltr">
                <span className="hm-rcard-badge">EN</span>
                <span className="hm-rcard-body">
                  <span className="hm-rcard-title" style={{ display: "block" }}>
                    English Resume
                  </span>
                  <span className="hm-rcard-desc">Projects, experience, skills and education on one page.</span>
                </span>
                <ArrowRight className="hm-rcard-go" size={20} />
              </Link>
              <Link href="/resume-fa" className="hm-rcard" dir="rtl" lang="fa">
                <span className="hm-rcard-badge">FA</span>
                <span className="hm-rcard-body">
                  <span className="hm-rcard-title" style={{ display: "block" }}>
                    رزومهٔ فارسی
                  </span>
                  <span className="hm-rcard-desc">پروژه‌ها، سوابق، مهارت‌ها و تحصیلات در یک صفحه.</span>
                </span>
                <ArrowLeft className="hm-rcard-go" size={20} />
              </Link>
            </div>
            <p className="hm-note">
              Need a PDF copy? Email me at <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
            </p>
          </div>
        </section>
      </main>

      <footer className="hm-foot">
        <div className="hm-wrap">
          <span>© 2026 Mohammad Yousefi · Tehran</span>
          <div className="hm-foot-icons">
            <a href={GITHUB} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <Github size={17} />
            </a>
            <a href={LINKEDIN} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <Linkedin size={17} />
            </a>
            <a href={`mailto:${EMAIL}`} aria-label="Email">
              <Mail size={17} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
