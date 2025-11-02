import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Github, Linkedin, Globe, Download } from "lucide-react";
import html2pdf from "html2pdf.js";
import { useRef } from "react";

export default function ResumeEnglish() {
  const resumeRef = useRef<HTMLDivElement>(null);

  const handleDownloadPDF = () => {
    if (!resumeRef.current) return;

    const element = resumeRef.current;
    const opt: any = {
      margin: 10,
      filename: "MohammadYousefi_Resume_EN.pdf",
      image: { type: "jpeg" as const, quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { orientation: "portrait", unit: "mm", format: "a4" },
    };

    html2pdf().set(opt).from(element).save();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        {/* Download Button */}
        <div className="mb-6 flex justify-start">
          <Button
            onClick={handleDownloadPDF}
            className="bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white gap-2"
          >
            <Download size={18} />
            Download PDF
          </Button>
        </div>

        {/* Resume Container */}
        <div
          ref={resumeRef}
          className="bg-white rounded-lg shadow-2xl overflow-hidden"
        >
          {/* Header Section */}
          <div className="bg-gradient-to-r from-emerald-600 to-emerald-800 text-white p-8">
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
                  <span>+98 910 875 8382</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail size={18} />
                  <span>m.yousefi.r79@gmail.com</span>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="p-8">
            {/* Links */}
            <div className="flex flex-wrap gap-4 mb-8">
              <a
                href="https://github.com/MohammadYR"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-emerald-600 hover:text-emerald-800 transition"
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

            {/* Profile Section */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-emerald-700 mb-4 pb-2 border-b-2 border-emerald-200">Professional Summary</h2>
              <p className="text-gray-700 leading-relaxed text-justify">
                <span className="font-semibold">Python</span> and <span className="font-semibold">Django</span> Back-End Developer with a focus on building scalable web applications. MBA (Marketing) candidate at the University of Tehran, with a B.Sc. in Mechanical Engineering. Possesses hands-on experience in developing Django projects, including a multi-seller e-commerce platform and a café ordering website. Proficient in <span className="font-semibold">REST API</span> design, <span className="font-semibold">ORM</span>, <span className="font-semibold">Redis</span>, <span className="font-semibold">Celery</span>, and <span className="font-semibold">Docker</span>-based development environments. A disciplined, highly effective problem-solver with a strong desire to learn new technologies.
              </p>
            </section>

            {/* Skills Section */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-emerald-700 mb-4 pb-2 border-b-2 border-emerald-200">Technical Skills</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-emerald-50 p-4 rounded-lg">
                  <h3 className="font-bold text-emerald-700 mb-2">Programming Languages</h3>
                  <p className="text-gray-700 text-sm">Python, JavaScript (Basic)</p>
                </div>
                <div className="bg-emerald-50 p-4 rounded-lg">
                  <h3 className="font-bold text-emerald-700 mb-2">Frameworks & Libraries</h3>
                  <p className="text-gray-700 text-sm">Django, Django REST Framework, Celery</p>
                </div>
                <div className="bg-emerald-50 p-4 rounded-lg">
                  <h3 className="font-bold text-emerald-700 mb-2">Databases</h3>
                  <p className="text-gray-700 text-sm">PostgreSQL, SQLite</p>
                </div>
                <div className="bg-emerald-50 p-4 rounded-lg">
                  <h3 className="font-bold text-emerald-700 mb-2">Tools & Infrastructure</h3>
                  <p className="text-gray-700 text-sm">Git/GitHub, Docker, Redis, Postman, Swagger, Linux</p>
                </div>
                <div className="bg-emerald-50 p-4 rounded-lg md:col-span-2">
                  <h3 className="font-bold text-emerald-700 mb-2">Web & CMS</h3>
                  <p className="text-gray-700 text-sm">HTML/CSS, WordPress, WooCommerce, Elementor, SEO</p>
                </div>
              </div>
            </section>

            {/* Experience Section */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-emerald-700 mb-4 pb-2 border-b-2 border-emerald-200">Professional Experience</h2>
              
              <div className="mb-6">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-2">
                  <h3 className="text-lg font-bold text-gray-800">Back-End Python/Django Bootcamp</h3>
                  <span className="text-sm text-gray-500 mt-1 md:mt-0">Feb 2025 – Nov 2025</span>
                </div>
                <p className="text-emerald-600 font-semibold mb-2">Maktab Sharif, Tehran</p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                  <li>Executed practical projects focusing on REST API design and authentication implementation</li>
                  <li>Utilized Redis/Celery for asynchronous task management and queue processing</li>
                  <li>Employed Git for version control and developed within isolated Docker environments</li>
                </ul>
              </div>

              <div>
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-2">
                  <h3 className="text-lg font-bold text-gray-800">WordPress Webmaster</h3>
                  <span className="text-sm text-gray-500 mt-1 md:mt-0">Jul 2024 – Sep 2024</span>
                </div>
                <p className="text-emerald-600 font-semibold mb-2">Chinese Studies Foundation, Tehran</p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                  <li>Maintained and optimized the organization's WordPress website and SEO</li>
                  <li>Coordinated with the content team for multilingual publishing and key plugin management</li>
                </ul>
              </div>
            </section>

            {/* Projects Section */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-emerald-700 mb-4 pb-2 border-b-2 border-emerald-200">Key Projects</h2>
              
              <div className="mb-6 bg-gradient-to-r from-emerald-50 to-teal-50 p-4 rounded-lg border-l-4 border-emerald-600">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-bold text-gray-800">Custom-Shop-Project (Open Source)</h3>
                  <a
                    href="https://github.com/MohammadYR/Custom-Shop-Project"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-emerald-600 hover:text-emerald-800 text-sm"
                  >
                    View
                  </a>
                </div>
                <p className="text-sm text-gray-600 mb-2">Django, DRF, PostgreSQL, Dockerfile, Celery</p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                  <li>Developed an API-first, multi-section online shop with asynchronous task processing</li>
                  <li>Implemented email sending and other background tasks via Celery workers</li>
                </ul>
              </div>

              <div className="bg-gradient-to-r from-teal-50 to-cyan-50 p-4 rounded-lg border-l-4 border-teal-600">
                <h3 className="text-lg font-bold text-gray-800 mb-2">Café Ordering Website</h3>
                <p className="text-sm text-gray-600 mb-2">Django, Django ORM</p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                  <li>Implemented menu management, order placement, and user authentication system</li>
                  <li>Experimentally utilized Redis and Docker in the development environment for performance enhancement</li>
                </ul>
              </div>
            </section>

            {/* Education Section */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-emerald-700 mb-4 pb-2 border-b-2 border-emerald-200">Education</h2>
              
              <div className="mb-4">
                <h3 className="text-lg font-bold text-gray-800">MBA, Business Administration (Marketing)</h3>
                <p className="text-emerald-600 font-semibold">University of Tehran | Ongoing</p>
              </div>

              <div>
                <h3 className="text-lg font-bold text-gray-800">B.Sc., Mechanical Engineering</h3>
                <p className="text-emerald-600 font-semibold">IAU, Science & Research Branch | Graduated</p>
              </div>
            </section>

            {/* Certifications Section */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-emerald-700 mb-4 pb-2 border-b-2 border-emerald-200">Certifications</h2>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-emerald-600 font-bold mt-1">•</span>
                  <span className="text-gray-700"><span className="font-semibold">Python & Django Bootcamp</span> — Maktab Sharif (2025)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-600 font-bold mt-1">•</span>
                  <span className="text-gray-700"><span className="font-semibold">Programming with Python</span> — Technical Complex (2019)</span>
                </li>
              </ul>
            </section>

            {/* Soft Skills Section */}
            <section>
              <h2 className="text-2xl font-bold text-emerald-700 mb-4 pb-2 border-b-2 border-emerald-200">Soft Skills</h2>
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
