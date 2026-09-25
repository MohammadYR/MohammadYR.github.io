import { Mail, MapPin, Github, Linkedin, Globe, ArrowLeft } from "lucide-react";
import { Link } from "wouter";
import "../styles/resume.css";

export default function ResumeEnglish() {
  return (
    <div className="rz-stage mx-root" dir="ltr" lang="en">
      <nav className="rz-topbar">
        <Link href="/">
          <ArrowLeft size={15} /> Back to portfolio
        </Link>
        <div className="rz-lang mx-mono">
          <span className="is-active">EN</span>
          <Link href="/resume-fa">FA</Link>
        </div>
      </nav>

      <div className="rz-sheet">
        {/* ---------------- masthead ---------------- */}
        <header className="rz-head">
          <div>
            <h1 className="rz-name">Mohammad Yousefi</h1>
            <p className="rz-role">Back-End Developer &nbsp;|&nbsp; Python · Django · DRF</p>
          </div>

          <div className="rz-head-meta mx-mono">
            <a href="mailto:m.yousefi.r79@gmail.com">
              <Mail size={13} /> m.yousefi.r79@gmail.com
            </a>
            <span>
              <MapPin size={13} /> Tehran, Iran
            </span>
            <span className="rz-note">Full PDF resume available on request</span>
          </div>
        </header>

        <div className="rz-body">
          {/* ---------------- main column ---------------- */}
          <main className="rz-main">
            <section className="rz-block">
              <h2 className="rz-h rz-h-main">Professional Summary</h2>
              <p className="rz-summary">
                Back-end developer with a strong focus on Python and Django/DRF, with a background in mechanical
                engineering and an MBA in marketing in progress. Experienced in designing and implementing modular
                architectures, standard REST APIs, relational databases (PostgreSQL) and modern development tooling
                (Docker, Redis, Celery). Enjoys solving technically complex problems and raising code quality by
                bringing AI into the development workflow.
              </p>
            </section>

            <section className="rz-block">
              <h2 className="rz-h rz-h-main">Key Projects</h2>

              <article className="rz-entry">
                <div className="rz-entry-top">
                  <h3 className="rz-title">Multi-Vendor Marketplace (Custom Shop)</h3>
                  <span className="rz-date">Bootcamp capstone</span>
                </div>
                <a
                  className="rz-repo mx-mono"
                  href="https://github.com/MohammadYR/Custom-Shop-Project"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github size={12} /> github.com/MohammadYR/Custom-Shop-Project
                </a>
                <div className="rz-tags">
                  {["Django", "DRF", "PostgreSQL", "Celery", "Redis", "Docker"].map((t) => (
                    <span key={t} className="rz-tag mx-mono">
                      {t}
                    </span>
                  ))}
                </div>
                <ul className="rz-list">
                  <li>Modular architecture with separate domain apps and Soft Delete implemented in a shared base app.</li>
                  <li>JWT authentication with SMS/email OTP, and separate permission levels for sellers and buyers.</li>
                  <li>Implemented the shopping cart, order placement and payment transaction flow.</li>
                  <li>Custom admin panel for managing sellers, products and orders.</li>
                  <li>Moved slow tasks such as sending SMS to a Celery queue backed by Redis.</li>
                  <li>Runs with Docker Compose; API documented automatically with Swagger.</li>
                </ul>
              </article>

              <article className="rz-entry">
                <div className="rz-entry-top">
                  <h3 className="rz-title">Cafe Ordering System</h3>
                  <span className="rz-date">Team project (3 people)</span>
                </div>
                <a
                  className="rz-repo mx-mono"
                  href="https://github.com/mohammadsafarpour/coffee-shop"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github size={12} /> github.com/mohammadsafarpour/coffee-shop
                </a>
                <div className="rz-tags">
                  {["Django", "DRF", "PostgreSQL", "JWT + OTP"].map((t) => (
                    <span key={t} className="rz-tag mx-mono">
                      {t}
                    </span>
                  ))}
                </div>
                <ul className="rz-list">
                  <li>Web interface built with Django templates, plus a separate REST API on the same models.</li>
                  <li>User profiles, wishlists and product reviews.</li>
                  <li>
                    Product catalog with categories and multiple images; order placement with status tracking and total
                    calculation.
                  </li>
                </ul>
              </article>
            </section>

            <section className="rz-block">
              <h2 className="rz-h rz-h-main">Experience &amp; Training</h2>

              <article className="rz-entry rz-rail">
                <div className="rz-entry-top">
                  <h3 className="rz-title">Back-End Programming Bootcamp</h3>
                  <span className="rz-date">Feb 2025 – Nov 2025</span>
                </div>
                <p className="rz-org">Maktab Sharif (Maktab 130)</p>
                <ul className="rz-list">
                  <li>Intensive 9-month program: Python, OOP, Django and DRF, databases, Git and teamwork.</li>
                  <li>Weekly assignments and periodic assessments under a mentor, with code reviews.</li>
                  <li>Delivered one team project and one individual capstone project.</li>
                </ul>
              </article>

              <article className="rz-entry rz-rail">
                <div className="rz-entry-top">
                  <h3 className="rz-title">E-commerce Website Development &amp; Content</h3>
                  <span className="rz-date">4 months, 2024</span>
                </div>
                <p className="rz-org">Freelance</p>
                <ul className="rz-list">
                  <li>
                    Updated products, content and pages across several WordPress online stores and fixed visual and
                    structural issues.
                  </li>
                </ul>
              </article>

              <article className="rz-entry rz-rail">
                <div className="rz-entry-top">
                  <h3 className="rz-title">Website Technical Management</h3>
                  <span className="rz-date">3 months (full-time), 2024</span>
                </div>
                <p className="rz-org">International Foundation for China Studies</p>
                <ul className="rz-list">
                  <li>
                    Debugged and fixed technical issues across the organization's websites, built new pages and
                    templates, designed a landing page and redesigned the home page.
                  </li>
                </ul>
              </article>
            </section>
          </main>

          {/* ---------------- sidebar ---------------- */}
          <aside className="rz-aside">
            <section className="rz-block">
              <h2 className="rz-h">Links</h2>
              <div className="rz-links mx-mono">
                <a href="https://github.com/MohammadYR" target="_blank" rel="noopener noreferrer">
                  <Github size={13} /> github.com/MohammadYR
                </a>
                <a href="https://linkedin.com/in/mohammadyousefi" target="_blank" rel="noopener noreferrer">
                  <Linkedin size={13} /> linkedin.com/in/mohammadyousefi
                </a>
                <a href="https://mohammadyr.github.io" target="_blank" rel="noopener noreferrer">
                  <Globe size={13} /> mohammadyr.github.io
                </a>
              </div>
            </section>

            <section className="rz-block">
              <h2 className="rz-h">Technical Skills</h2>
              <div className="rz-skill">
                <span className="rz-skill-label">Languages &amp; Frameworks</span>
                <p className="rz-skill-val">Python · Django · Django REST Framework · REST API</p>
              </div>
              <div className="rz-skill">
                <span className="rz-skill-label">Databases</span>
                <p className="rz-skill-val">PostgreSQL · SQLite · Django ORM · Data modelling &amp; ERD</p>
              </div>
              <div className="rz-skill">
                <span className="rz-skill-label">Tools</span>
                <p className="rz-skill-val">
                  Git &amp; GitHub · Docker · Docker Compose · Postman · Celery · Redis · Linux
                </p>
              </div>
              <div className="rz-skill">
                <span className="rz-skill-label">Web</span>
                <p className="rz-skill-val">WordPress · HTML/CSS</p>
              </div>
            </section>

            <section className="rz-block">
              <h2 className="rz-h">Education</h2>
              <div className="rz-edu">
                <p className="rz-edu-deg">MBA — Marketing</p>
                <p className="rz-edu-org">University of Tehran · In progress</p>
              </div>
              <div className="rz-edu">
                <p className="rz-edu-deg">B.Sc. Mechanical Engineering</p>
                <p className="rz-edu-org">Islamic Azad University, Science and Research Branch</p>
              </div>
            </section>

            <section className="rz-block">
              <h2 className="rz-h">Soft Skills</h2>
              <div className="rz-tags">
                {["Problem Solving", "Teamwork", "Accountability", "Fast Learner"].map((s) => (
                  <span key={s} className="rz-tag">
                    {s}
                  </span>
                ))}
              </div>
            </section>

            <section className="rz-block">
              <h2 className="rz-h">Languages</h2>
              <p className="rz-skill-val">Persian (native) · English (intermediate)</p>
            </section>
          </aside>
        </div>
      </div>
    </div>
  );
}
