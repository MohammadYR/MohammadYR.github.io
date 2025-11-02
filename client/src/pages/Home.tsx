import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { FileText, Github, Linkedin, Globe, Download, ExternalLink } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Navigation */}
      <nav className="bg-white/10 backdrop-blur-md border-b border-white/10 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 md:px-8 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-white">Mohammad Yousefi</h1>
          <div className="flex gap-4">
            <a
              href="https://github.com/MohammadYR"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/70 hover:text-white transition"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/mohammadyousefi"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/70 hover:text-white transition"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="max-w-6xl mx-auto px-4 md:px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Mohammad Yousefi
          </h2>
          <p className="text-xl text-blue-300 font-semibold mb-4">Python/Django Back-End Developer</p>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8">
            Building scalable web applications with Python and Django. MBA candidate at University of Tehran. Based in Tehran.
          </p>
        </div>

        {/* Resume Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Persian Resume Card */}
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-400 rounded-xl blur-xl opacity-25 group-hover:opacity-40 transition duration-300"></div>
            <div className="relative bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-8 hover:border-white/40 transition">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-blue-500/20 rounded-lg">
                  <FileText className="text-blue-400" size={24} />
                </div>
                <h3 className="text-2xl font-bold text-white">رزومه فارسی</h3>
              </div>
              <p className="text-gray-300 mb-6">
                رزومه حرفه‌ای به زبان فارسی با طراحی مدرن. قابل دانلود به صورت PDF.
              </p>
              <Link href="/resume-fa">
                <Button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white gap-2 group/btn">
                  مشاهده رزومه
                  <ExternalLink size={18} className="group-hover/btn:translate-x-1 transition" />
                </Button>
              </Link>
            </div>
          </div>

          {/* English Resume Card */}
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-emerald-400 rounded-xl blur-xl opacity-25 group-hover:opacity-40 transition duration-300"></div>
            <div className="relative bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-8 hover:border-white/40 transition">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-emerald-500/20 rounded-lg">
                  <FileText className="text-emerald-400" size={24} />
                </div>
                <h3 className="text-2xl font-bold text-white">English Resume</h3>
              </div>
              <p className="text-gray-300 mb-6">
                Professional resume in English with modern design. Download as PDF.
              </p>
              <Link href="/resume-en">
                <Button className="w-full bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white gap-2 group/btn">
                  View Resume
                  <ExternalLink size={18} className="group-hover/btn:translate-x-1 transition" />
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* About Section */}
        <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-8 md:p-12 mb-16">
          <h3 className="text-3xl font-bold text-white mb-6">About Me</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-xl font-semibold text-blue-300 mb-3">Professional</h4>
              <p className="text-gray-300 leading-relaxed">
                I'm a back-end developer focused on Python and Django. I build scalable, maintainable web applications with clean code and best practices. My experience includes REST API design, database optimization, and asynchronous task processing.
              </p>
            </div>
            <div>
              <h4 className="text-xl font-semibold text-emerald-300 mb-3">Education</h4>
              <p className="text-gray-300 leading-relaxed">
                Currently pursuing an MBA in Business Administration (Marketing) at University of Tehran. Bachelor's degree in Mechanical Engineering. Completed intensive bootcamp in Python and Django development at Maktab Sharif.
              </p>
            </div>
            <div>
              <h4 className="text-xl font-semibold text-purple-300 mb-3">Skills</h4>
              <p className="text-gray-300 leading-relaxed">
                Python, Django, Django REST Framework, PostgreSQL, Redis, Celery, Docker, Git, HTML/CSS, WordPress, and more. Strong problem-solving abilities and passion for learning new technologies.
              </p>
            </div>
            <div>
              <h4 className="text-xl font-semibold text-pink-300 mb-3">Interests</h4>
              <p className="text-gray-300 leading-relaxed">
                Web development, software architecture, digital marketing, and entrepreneurship. I enjoy working on challenging projects and collaborating with talented teams.
              </p>
            </div>
          </div>
        </div>

        {/* Links Section */}
        <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-8 md:p-12 mb-16">
          <h3 className="text-3xl font-bold text-white mb-8 text-center">Connect With Me</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Portfolio */}
            <a
              href="https://mohammadyr.github.io/"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-400 rounded-lg blur opacity-25 group-hover:opacity-40 transition duration-300"></div>
              <div className="relative bg-white/10 backdrop-blur-md border border-white/20 rounded-lg p-6 hover:border-white/40 transition text-center">
                <Globe className="text-blue-400 mx-auto mb-3" size={32} />
                <h4 className="text-xl font-semibold text-white mb-2">Portfolio</h4>
                <p className="text-gray-300 text-sm mb-4">Check out my projects and work</p>
                <span className="inline-flex items-center gap-2 text-blue-300 hover:text-blue-200 transition">
                  Visit Portfolio
                  <ExternalLink size={16} />
                </span>
              </div>
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/mohammadyousefi"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-lg blur opacity-25 group-hover:opacity-40 transition duration-300"></div>
              <div className="relative bg-white/10 backdrop-blur-md border border-white/20 rounded-lg p-6 hover:border-white/40 transition text-center">
                <Linkedin className="text-cyan-400 mx-auto mb-3" size={32} />
                <h4 className="text-xl font-semibold text-white mb-2">LinkedIn</h4>
                <p className="text-gray-300 text-sm mb-4">Professional network & experience</p>
                <span className="inline-flex items-center gap-2 text-cyan-300 hover:text-cyan-200 transition">
                  View Profile
                  <ExternalLink size={16} />
                </span>
              </div>
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/MohammadYR"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-400 rounded-lg blur opacity-25 group-hover:opacity-40 transition duration-300"></div>
              <div className="relative bg-white/10 backdrop-blur-md border border-white/20 rounded-lg p-6 hover:border-white/40 transition text-center">
                <Github className="text-purple-400 mx-auto mb-3" size={32} />
                <h4 className="text-xl font-semibold text-white mb-2">GitHub</h4>
                <p className="text-gray-300 text-sm mb-4">Open source projects & code</p>
                <span className="inline-flex items-center gap-2 text-purple-300 hover:text-purple-200 transition">
                  View Code
                  <ExternalLink size={16} />
                </span>
              </div>
            </a>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center text-gray-400">
          <p>
            Built with <span className="text-red-400">❤</span> using React, TypeScript & Tailwind CSS
          </p>
          <p className="text-sm mt-2">© 2025 Mohammad Yousefi. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}
