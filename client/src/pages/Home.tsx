import { useEffect } from "react";
import { Link } from "wouter";
import { ArrowLeft, ArrowRight, Github, Linkedin, Mail, MapPin } from "lucide-react";
import StackMark, { StackMarkIcon } from "@/components/StackMark";
import { contact, homeProjects } from "@/content/profile";
import "@/styles/home.css";

function ContactIcons({ size }: { size: number }) {
  return (
    <div className="hm-icons">
      <a href={contact.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
        <Github size={size} />
      </a>
      <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
        <Linkedin size={size} />
      </a>
      <a href={`mailto:${contact.email}`} aria-label="Email">
        <Mail size={size} />
      </a>
    </div>
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
          <a href="#top" className="hm-brand" aria-label="Mohammad Yousefi — home">
            <StackMarkIcon size={34} />
            <span className="hm-brand-name">Mohammad Yousefi</span>
          </a>
          <nav className="hm-nav-links">
            <a href="#projects">Projects</a>
            <a href="#resume">Resume</a>
            <ContactIcons size={18} />
          </nav>
        </div>
      </header>

      <main>
        <section className="hm-hero" id="top">
          <div className="hm-wrap hm-hero-grid">
            <div>
              <h1 className="hm-title">
                Mohammad
                <br />
                Yousefi<span>.</span>
              </h1>
              <p className="hm-tagline">Back-end developer — Python&nbsp;&amp;&nbsp;Django</p>
              <p className="hm-lead">I build clean REST APIs, solid data models and the background jobs behind them.</p>
              <p className="hm-meta">
                <MapPin size={15} /> {contact.location}
              </p>
              <div className="hm-ctas">
                <Link href="/resume-en" className="hm-btn hm-btn-primary">
                  Resume <ArrowRight size={16} />
                </Link>
                <Link href="/resume-fa" className="hm-btn hm-btn-ghost" lang="fa">
                  رزومهٔ فارسی
                </Link>
              </div>
              <div className="hm-find">
                <span>Find me</span>
                <ContactIcons size={18} />
              </div>
            </div>

            <StackMark />
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
          <ContactIcons size={17} />
        </div>
      </footer>
    </div>
  );
}
