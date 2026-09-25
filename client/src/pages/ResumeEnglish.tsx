import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Github, Linkedin, Globe, Download } from "lucide-react";

const sectionClass = "mb-8 rounded-xl border border-emerald-50 bg-white/80 shadow-sm p-5";
const headingClass = "text-2xl font-bold text-emerald-700 mb-4 pb-2 border-b-2 border-emerald-200";

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
                <p className="text-emerald-100 text-xl font-semibold">
                  Back-End Developer · Python · Django · DRF
                </p>
              </div>
              <div className="flex flex-col gap-3 text-sm">
                <div className="flex items-center gap-2">
                  <MapPin size={18} />
                  <span>Tehran, Iran</span>
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

            <section className={sectionClass}>
              <h2 className={headingClass}>Professional Summary</h2>
              <p className="text-gray-700 leading-relaxed text-justify">
                Back-end developer with a strong focus on <span className="font-semibold">Python</span> and{" "}
                <span className="font-semibold">Django/DRF</span>, with a background in mechanical engineering and
                an MBA in marketing in progress. Experienced in designing and implementing modular architectures,
                standard <span className="font-semibold">REST API</span>s, relational databases (
                <span className="font-semibold">PostgreSQL</span>) and modern development tooling (Docker, Redis,
                Celery). Enjoys solving technically complex problems and raising code quality by bringing AI into the
                development workflow.
              </p>
            </section>

            <section className={sectionClass}>
              <h2 className={headingClass}>Technical Skills</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-emerald-50 p-4 rounded-lg shadow-sm">
                  <h3 className="font-bold text-emerald-700 mb-2">Languages & Frameworks</h3>
                  <p className="text-gray-700 text-sm">Python · Django · Django REST Framework · REST API</p>
                </div>
                <div className="bg-emerald-50 p-4 rounded-lg shadow-sm">
                  <h3 className="font-bold text-emerald-700 mb-2">Databases</h3>
                  <p className="text-gray-700 text-sm">PostgreSQL · SQLite · Django ORM · Data modelling & ERD</p>
                </div>
                <div className="bg-emerald-50 p-4 rounded-lg shadow-sm">
                  <h3 className="font-bold text-emerald-700 mb-2">Tools</h3>
                  <p className="text-gray-700 text-sm">
                    Git & GitHub · Docker · Docker Compose · Postman · Celery · Redis · Linux
                  </p>
                </div>
                <div className="bg-emerald-50 p-4 rounded-lg shadow-sm">
                  <h3 className="font-bold text-emerald-700 mb-2">Web</h3>
                  <p className="text-gray-700 text-sm">WordPress · HTML/CSS</p>
                </div>
              </div>
            </section>

            <section className={sectionClass}>
              <h2 className={headingClass}>Key Projects</h2>

              <div className="mb-6 bg-gradient-to-r from-emerald-50 to-teal-50 p-4 rounded-lg border-l-4 border-emerald-600">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-bold text-gray-800">Multi-Vendor Marketplace (Custom Shop)</h3>
                  <a
                    href="https://github.com/MohammadYR/Custom-Shop-Project"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-emerald-600 hover:text-emerald-800 text-sm"
                  >
                    View
                  </a>
                </div>
                <p className="text-sm text-gray-600 mb-2">Django, DRF, PostgreSQL, Celery, Redis, Docker</p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                  <li>Modular architecture with separate domain apps and Soft Delete implemented in a shared base app</li>
                  <li>JWT authentication with SMS/email OTP, and separate permission levels for sellers and buyers</li>
                  <li>Implemented the shopping cart, order placement and payment transaction flow</li>
                  <li>Custom admin panel for managing sellers, products and orders</li>
                  <li>Moved slow tasks such as sending SMS to a Celery queue backed by Redis</li>
                  <li>Runs with Docker Compose; API documented automatically with Swagger</li>
                </ul>
              </div>

              <div className="bg-gradient-to-r from-teal-50 to-cyan-50 p-4 rounded-lg border-l-4 border-teal-600">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-bold text-gray-800">Cafe Ordering System (3-person team)</h3>
                  <a
                    href="https://github.com/mohammadsafarpour/coffee-shop"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-emerald-600 hover:text-emerald-800 text-sm"
                  >
                    View
                  </a>
                </div>
                <p className="text-sm text-gray-600 mb-2">Django, DRF, PostgreSQL, JWT + OTP</p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                  <li>Web interface built with Django templates, plus a separate REST API on the same models</li>
                  <li>User profiles, wishlists and product reviews</li>
                  <li>
                    Product catalog with categories and multiple images; order placement with status tracking and
                    total calculation
                  </li>
                </ul>
              </div>
            </section>

            <section className={sectionClass}>
              <h2 className={headingClass}>Experience & Training</h2>

              <div className="mb-6">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-2">
                  <h3 className="text-lg font-bold text-gray-800">Back-End Programming Bootcamp</h3>
                  <span className="text-sm text-gray-500 mt-1 md:mt-0">Feb 2025 – Nov 2025</span>
                </div>
                <p className="text-emerald-600 font-semibold mb-2">Maktab Sharif (Maktab 130)</p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                  <li>Intensive 9-month program: Python, OOP, Django and DRF, databases, Git and teamwork</li>
                  <li>Weekly assignments and periodic assessments under a mentor, with code reviews</li>
                  <li>Delivered one team project and one individual capstone project</li>
                </ul>
              </div>

              <div className="mb-6">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-2">
                  <h3 className="text-lg font-bold text-gray-800">E-commerce Website Development & Content</h3>
                  <span className="text-sm text-gray-500 mt-1 md:mt-0">4 months, 2024</span>
                </div>
                <p className="text-emerald-600 font-semibold mb-2">Freelance</p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                  <li>
                    Updated products, content and pages across several WordPress online stores and fixed visual and
                    structural issues
                  </li>
                </ul>
              </div>

              <div>
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-2">
                  <h3 className="text-lg font-bold text-gray-800">Website Technical Management</h3>
                  <span className="text-sm text-gray-500 mt-1 md:mt-0">3 months (full-time), 2024</span>
                </div>
                <p className="text-emerald-600 font-semibold mb-2">International Foundation for China Studies</p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                  <li>
                    Debugged and fixed technical issues across the organization's websites, built new pages and
                    templates, designed a landing page and redesigned the home page
                  </li>
                </ul>
              </div>
            </section>

            <section className={sectionClass}>
              <h2 className={headingClass}>Education</h2>
              <div className="mb-4">
                <h3 className="text-lg font-bold text-gray-800">MBA — Marketing</h3>
                <p className="text-emerald-600 font-semibold">University of Tehran · In progress</p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-800">B.Sc., Mechanical Engineering</h3>
                <p className="text-emerald-600 font-semibold">Islamic Azad University, Science and Research Branch</p>
              </div>
            </section>

            <section className="rounded-xl border border-emerald-50 bg-white/80 shadow-sm p-5">
              <h2 className={headingClass}>Languages & Soft Skills</h2>
              <p className="text-gray-700 mb-4">
                <span className="font-semibold">Languages:</span> Persian (native) · English (intermediate)
              </p>
              <div className="flex flex-wrap gap-2">
                {["Problem Solving", "Teamwork", "Accountability", "Fast Learner"].map((skill) => (
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
