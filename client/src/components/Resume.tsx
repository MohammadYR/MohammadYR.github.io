import { ArrowLeft, ArrowRight, Github, Globe, Linkedin, Mail, MapPin } from "lucide-react";
import { useEffect } from "react";
import { Link } from "wouter";
import { contact, profile, type Lang } from "@/content/profile";
import "@/styles/resume.css";

const stripScheme = (url: string) => url.replace(/^https?:\/\/(www\.)?/, "");

export default function Resume({ lang }: { lang: Lang }) {
  const r = profile[lang];
  const BackIcon = r.dir === "rtl" ? ArrowRight : ArrowLeft;

  useEffect(() => {
    document.title = lang === "fa" ? "رزومه — محمد یوسفی" : "Resume — Mohammad Yousefi";
  }, [lang]);

  return (
    <div className="rz-stage mx-root" dir={r.dir} lang={lang}>
      <nav className="rz-topbar">
        <Link href="/">
          <BackIcon size={15} /> {r.backLabel}
        </Link>
        <div className="rz-lang mx-mono" dir="ltr">
          {lang === "en" ? <span className="is-active">EN</span> : <Link href="/resume-en">EN</Link>}
          {lang === "fa" ? <span className="is-active">FA</span> : <Link href="/resume-fa">FA</Link>}
        </div>
      </nav>

      <div className="rz-sheet">
        <header className="rz-head">
          <div>
            <h1 className="rz-name">{r.name}</h1>
            <p className="rz-role">{r.role}</p>
          </div>
          <div className="rz-head-meta mx-mono">
            <a href={`mailto:${contact.email}`}>
              <Mail size={13} /> {contact.email}
            </a>
            <span>
              <MapPin size={13} /> {contact.location}
            </span>
            <span className="rz-note">{r.pdfNote}</span>
          </div>
        </header>

        <div className="rz-body">
          <main className="rz-main">
            <section className="rz-block">
              <h2 className="rz-h rz-h-main">{r.headings.summary}</h2>
              <p className="rz-summary">{r.summary}</p>
            </section>

            <section className="rz-block">
              <h2 className="rz-h rz-h-main">{r.headings.projects}</h2>
              {r.projects.map((p) => (
                <article key={p.id} className="rz-entry">
                  <div className="rz-entry-top">
                    <h3 className="rz-title">{p.title}</h3>
                    <span className="rz-date">{p.context}</span>
                  </div>
                  <a className="rz-repo mx-mono" href={p.repo} target="_blank" rel="noopener noreferrer">
                    <Github size={12} /> {stripScheme(p.repo)}
                  </a>
                  <div className="rz-tags">
                    {p.tags.map((t) => (
                      <span key={t} className="rz-tag mx-mono">
                        {t}
                      </span>
                    ))}
                  </div>
                  <ul className="rz-list">
                    {p.bullets.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </section>

            <section className="rz-block">
              <h2 className="rz-h rz-h-main">{r.headings.experience}</h2>
              {r.experience.map((e) => (
                <article key={e.title} className="rz-entry rz-rail">
                  <div className="rz-entry-top">
                    <h3 className="rz-title">{e.title}</h3>
                    <span className="rz-date">{e.date}</span>
                  </div>
                  <p className="rz-org">{e.org}</p>
                  <ul className="rz-list">
                    {e.bullets.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </section>
          </main>

          <aside className="rz-aside">
            <section className="rz-block">
              <h2 className="rz-h">{r.headings.links}</h2>
              <div className="rz-links mx-mono">
                <a href={contact.github} target="_blank" rel="noopener noreferrer">
                  <Github size={13} /> {stripScheme(contact.github)}
                </a>
                <a href={contact.linkedin} target="_blank" rel="noopener noreferrer">
                  <Linkedin size={13} /> {stripScheme(contact.linkedin)}
                </a>
                <a href={contact.site} target="_blank" rel="noopener noreferrer">
                  <Globe size={13} /> {stripScheme(contact.site)}
                </a>
              </div>
            </section>

            <section className="rz-block">
              <h2 className="rz-h">{r.headings.skills}</h2>
              {r.skills.map((s) => (
                <div key={s.label} className="rz-skill">
                  <span className="rz-skill-label">{s.label}</span>
                  <p className="rz-skill-val">{s.value}</p>
                </div>
              ))}
            </section>

            <section className="rz-block">
              <h2 className="rz-h">{r.headings.education}</h2>
              {r.education.map((ed) => (
                <div key={ed.degree} className="rz-edu">
                  <p className="rz-edu-deg">{ed.degree}</p>
                  <p className="rz-edu-org">{ed.school}</p>
                </div>
              ))}
            </section>

            <section className="rz-block">
              <h2 className="rz-h">{r.headings.softSkills}</h2>
              <div className="rz-tags">
                {r.softSkills.map((s) => (
                  <span key={s} className="rz-tag">
                    {s}
                  </span>
                ))}
              </div>
            </section>

            <section className="rz-block">
              <h2 className="rz-h">{r.headings.languages}</h2>
              <p className="rz-skill-val">{r.languages}</p>
            </section>
          </aside>
        </div>
      </div>
    </div>
  );
}
