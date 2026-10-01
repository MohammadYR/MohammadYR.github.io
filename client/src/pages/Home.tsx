import { useEffect } from "react";
import { Link } from "wouter";
import { ArrowLeft, ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { contact, glance, homeProjects } from "@/content/profile";
import "@/styles/home.css";

function ContactIcons({ size }: { size: number }) {
  return (
    <>
      <a href={contact.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
        <Github size={size} />
      </a>
      <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
        <Linkedin size={size} />
      </a>
      <a href={`mailto:${contact.email}`} aria-label="Email">
        <Mail size={size} />
      </a>
    </>
  );
}

export default function Home() {
  useEffect(() => {
    document.title = "Mohammad Yousefi — Back-End Developer";
  }, []);

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
              <ContactIcons size={18} />
            </div>
          </nav>
        </div>
      </header>

      <main>
        <section className="hm-hero" id="top">
          <div className="hm-wrap hm-hero-grid">
            <div>
              <p className="hm-eyebrow">Back-End Developer · Tehran</p>
              <h1 className="hm-title">
                Mohammad
                <br />
                Yousefi<span>.</span>
              </h1>
              <p className="hm-lead">
                Back-end developer working with Python, Django and Django REST Framework. I design modular
                services, clean REST APIs and the background jobs behind them — with an engineering background and
                an MBA in progress.
              </p>
              <div className="hm-ctas">
                <Link href="/resume-en" className="hm-btn hm-btn-primary">
                  View Resume <ArrowRight size={16} />
                </Link>
                <Link href="/resume-fa" className="hm-btn hm-btn-ghost" lang="fa">
                  رزومهٔ فارسی
                </Link>
              </div>
            </div>

            <aside className="gl" aria-label="Profile at a glance">
              <div className="gl-head">
                <span className="gl-title">At a glance</span>
                <span className="gl-status">Open to opportunities</span>
              </div>
              <dl className="gl-rows">
                {glance.map((row) => (
                  <div key={row.label} className="gl-row">
                    <dt>{row.label}</dt>
                    <dd>
                      {row.value}
                      {row.note && <small>{row.note}</small>}
                    </dd>
                  </div>
                ))}
                <div className="gl-row">
                  <dt>Contact</dt>
                  <dd>
                    <a href={`mailto:${contact.email}`}>{contact.email}</a>
                  </dd>
                </div>
              </dl>
              <div className="gl-foot">
                <a href={contact.github} target="_blank" rel="noopener noreferrer">
                  <Github size={15} /> GitHub
                </a>
                <a href={contact.linkedin} target="_blank" rel="noopener noreferrer">
                  <Linkedin size={15} /> LinkedIn
                </a>
              </div>
            </aside>
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
              {homeProjects.map((p) => (
                <article key={p.id} className="hm-card">
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
                  <span className="hm-rcard-title">English Resume</span>
                  <span className="hm-rcard-desc">Projects, experience, skills and education on one page.</span>
                </span>
                <ArrowRight className="hm-rcard-go" size={20} />
              </Link>
              <Link href="/resume-fa" className="hm-rcard" dir="rtl" lang="fa">
                <span className="hm-rcard-badge">FA</span>
                <span className="hm-rcard-body">
                  <span className="hm-rcard-title">رزومهٔ فارسی</span>
                  <span className="hm-rcard-desc">پروژه‌ها، سوابق، مهارت‌ها و تحصیلات در یک صفحه.</span>
                </span>
                <ArrowLeft className="hm-rcard-go" size={20} />
              </Link>
            </div>
            <p className="hm-note">
              Need a PDF copy? Email me at <a href={`mailto:${contact.email}`}>{contact.email}</a>
            </p>
          </div>
        </section>
      </main>

      <footer className="hm-foot">
        <div className="hm-wrap">
          <span>© 2026 Mohammad Yousefi · Tehran</span>
          <div className="hm-foot-icons">
            <ContactIcons size={17} />
          </div>
        </div>
      </footer>
    </div>
  );
}
