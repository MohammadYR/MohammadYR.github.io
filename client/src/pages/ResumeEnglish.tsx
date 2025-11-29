import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Github, Linkedin, Globe, Download } from "lucide-react";

export default function ResumeEnglish() {
  const handleDownloadPDF = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900 p-4 md:p-8">
      <div className="max-w-5xl mx-auto">
        <div className="mb-6 flex justify-start print:hidden">
          <Button
            onClick={handleDownloadPDF}
            className="bg-emerald-500 hover:bg-emerald-600 text-white gap-2 shadow-lg shadow-emerald-500/30"
          >
            <Download size={18} />
            Download PDF
          </Button>
        </div>

        <div className="bg-white/95 border border-emerald-50 rounded-2xl shadow-2xl overflow-hidden print:shadow-none print:w-full">
          <div className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white p-8">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold mb-2">Mohammad Yousefi</h1>
                <p className="text-emerald-100 text-xl font-semibold">Python/Django Back-End Developer</p>
              </div>
              <div className="flex flex-col gap-3 text-sm">
                <div className="flex items-center gap-2">
                  <MapPin size={18} />
                  <span>Tehran</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone size={18} />
                  <a href="tel:+989108758382" className="hover:underline">
                    +98 910 875 8382
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Mail size={18} />
                  <a href="mailto:m.yousefi.r79@gmail.com" className="hover:underline">
                    m.yousefi.r79@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="p-8 space-y-8 bg-white">
            <div className="flex flex-wrap gap-4 mb-8">
              <a
                href="https://github.com/MohammadYR"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-emerald-700 hover:text-emerald-900 transition"
              >
                <Github size={18} />
                <span>GitHub</span>
              </a>
              <a
                href="https://linkedin.com/in/mohammadyousefi"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-emerald-600 hover:text-emerald-800 transition"
              >
                <Linkedin size={18} />
                <span>LinkedIn</span>
              </a>
              <a
                href="https://mohammadyr.github.io"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-emerald-600 hover:text-emerald-800 transition"
              >
                <Globe size={18} />
                <span>Portfolio</span>
              </a>
            </div>

            <section className="mb-8 rounded-xl border border-emerald-50 bg-white/80 shadow-sm p-5">
              <h2 className="text-2xl font-bold text-emerald-700 mb-4 pb-2 border-b-2 border-emerald-200">
                Professional Summary
              </h2>
              <p className="text-gray-700 leading-relaxed text-justify">
                Back-end engineer focused on <span className="font-semibold">Python</span> and{" "}
                <span className="font-semibold">Django</span>, MBA (Marketing) candidate at the University of Tehran,
                with hands-on experience building multi-seller commerce products and ordering systems. Skilled in
                designing <span className="font-semibold">REST API</span>s, modelling data with ORM, orchestrating
                background workloads via <span className="font-semibold">Redis</span>/<span className="font-semibold">
                  Celery
                </span>
                , and delivering containerized services with <span className="font-semibold">Docker</span>.
              </p>
            </section>

            <section className="mb-8 rounded-xl border border-emerald-50 bg-white/80 shadow-sm p-5">
              <h2 className="text-2xl font-bold text-emerald-700 mb-4 pb-2 border-b-2 border-emerald-200">
                Professional Experience
              </h2>

              <div className="mb-6">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-2">
                  <h3 className="text-lg font-bold text-gray-800">Back-End Python/Django Bootcamp</h3>
                  <span className="text-sm text-gray-500 mt-1 md:mt-0">Feb 2025 – Nov 2025</span>
                </div>
                <p className="text-emerald-600 font-semibold mb-2">Maktab Sharif, Tehran</p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                  <li>Delivered REST APIs with token-based authentication and granular authorization policies</li>
                  <li>Queued asynchronous jobs (notifications, report generation) with Redis and Celery</li>
                  <li>Maintained Git-driven workflows and shipped services inside isolated Docker environments</li>
                </ul>
              </div>

              <div>
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-2">
                  <h3 className="text-lg font-bold text-gray-800">WordPress Webmaster</h3>
                  <span className="text-sm text-gray-500 mt-1 md:mt-0">Jul 2024 – Sep 2024</span>
                </div>
                <p className="text-emerald-600 font-semibold mb-2">Chinese Studies Foundation, Tehran</p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                  <li>Optimized site performance, SEO, and plugin stack for a multilingual newsroom</li>
                  <li>Collaborated with the content team to manage releases and protect uptime/security</li>
                </ul>
              </div>
            </section>

            <section className="mb-8 rounded-xl border border-emerald-50 bg-white/80 shadow-sm p-5">
              <h2 className="text-2xl font-bold text-emerald-700 mb-4 pb-2 border-b-2 border-emerald-200">
                Key Projects
              </h2>

              <div className="mb-6 bg-gradient-to-r from-emerald-50 to-teal-50 p-4 rounded-lg border-l-4 border-emerald-600">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-bold text-gray-800">Online Retail Platform (E-commerce)</h3>
                  <a
                    href="https://github.com/MohammadYR/Custom-Shop-Project"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-emerald-600 hover:text-emerald-800 text-sm"
                  >
                    View
                  </a>
                </div>
                <p className="text-sm text-gray-600 mb-2">Python, Django, DRF, PostgreSQL, Docker, Celery</p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                  <li>Designed RESTful architecture covering catalog, inventory, multi-seller pricing, and orders</li>
                  <li>Automated transactional notifications and reconciliation reports with Celery workers</li>
                  <li>Containerized the stack with Docker and scripted CI tasks for linting/tests</li>
                </ul>
              </div>

              <div className="bg-gradient-to-r from-teal-50 to-cyan-50 p-4 rounded-lg border-l-4 border-teal-600">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-bold text-gray-800">Cafe Ordering System</h3>
                  <a
                    href="https://github.com/MohammadYR/coffee-shop"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-emerald-600 hover:text-emerald-800 text-sm"
                  >
                    View
                  </a>
                </div>
                <p className="text-sm text-gray-600 mb-2">Python, Django, Django ORM, Redis</p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                  <li>Implemented menu management, cart flow, user onboarding, and order tracking</li>
                  <li>Leveraged Redis for caching and queueing to reduce response time during rush hours</li>
                </ul>
              </div>
            </section>

            <section className="mb-8 rounded-xl border border-emerald-50 bg-white/80 shadow-sm p-5">
              <h2 className="text-2xl font-bold text-emerald-700 mb-4 pb-2 border-b-2 border-emerald-200">
                Technical Skills
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-emerald-50 p-4 rounded-lg shadow-sm">
                  <h3 className="font-bold text-emerald-700 mb-2">Programming Languages</h3>
                  <p className="text-gray-700 text-sm">Python, JavaScript</p>
                </div>
                <div className="bg-emerald-50 p-4 rounded-lg shadow-sm">
                  <h3 className="font-bold text-emerald-700 mb-2">Frameworks & Libraries</h3>
                  <p className="text-gray-700 text-sm">Django, Django REST Framework, Celery</p>
                </div>
                <div className="bg-emerald-50 p-4 rounded-lg shadow-sm">
                  <h3 className="font-bold text-emerald-700 mb-2">Databases</h3>
                  <p className="text-gray-700 text-sm">PostgreSQL, SQLite</p>
                </div>
                <div className="bg-emerald-50 p-4 rounded-lg shadow-sm">
                  <h3 className="font-bold text-emerald-700 mb-2">Tools & Infrastructure</h3>
                  <p className="text-gray-700 text-sm">Git/GitHub, Docker, Redis, Postman, Swagger, Linux</p>
                </div>
                <div className="bg-emerald-50 p-4 rounded-lg shadow-sm md:col-span-2">
                  <h3 className="font-bold text-emerald-700 mb-2">Web & CMS</h3>
                  <p className="text-gray-700 text-sm">HTML/CSS, WordPress, WooCommerce, Elementor, SEO</p>
                </div>
              </div>
            </section>

            <section className="mb-8 rounded-xl border border-emerald-50 bg-white/80 shadow-sm p-5">
              <h2 className="text-2xl font-bold text-emerald-700 mb-4 pb-2 border-b-2 border-emerald-200">
                Education
              </h2>
              <div className="mb-4">
                <h3 className="text-lg font-bold text-gray-800">MBA, Business Administration (Marketing)</h3>
                <p className="text-emerald-600 font-semibold">University of Tehran | Ongoing</p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-800">B.Sc., Mechanical Engineering</h3>
                <p className="text-emerald-600 font-semibold">IAU, Science & Research Branch | Graduated</p>
              </div>
            </section>

            <section className="mb-8 rounded-xl border border-emerald-50 bg-white/80 shadow-sm p-5">
              <h2 className="text-2xl font-bold text-emerald-700 mb-4 pb-2 border-b-2 border-emerald-200">
                Certifications
              </h2>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-emerald-600 font-bold mt-1">•</span>
                  <span className="text-gray-700">
                    <span className="font-semibold">Python & Django Bootcamp</span> — Maktab Sharif (2025)
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-600 font-bold mt-1">•</span>
                  <span className="text-gray-700">
                    <span className="font-semibold">Programming with Python</span> — Technical Complex (2019)
                  </span>
                </li>
              </ul>
            </section>

            <section className="rounded-xl border border-emerald-50 bg-white/80 shadow-sm p-5">
              <h2 className="text-2xl font-bold text-emerald-700 mb-4 pb-2 border-b-2 border-emerald-200">
                Soft Skills
              </h2>
              <div className="flex flex-wrap gap-2">
                {[
                  "Critical Thinking",
                  "Problem Solving",
                  "Accountability",
                  "Persistence",
                  "Adaptability",
                  "Creativity",
                  "Active Listening",
                  "Self-Awareness",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
