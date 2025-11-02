import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Github, Linkedin, Globe, Download } from "lucide-react";
import html2pdf from "html2pdf.js";
import { useRef } from "react";

export default function ResumeFarsi() {
  const resumeRef = useRef<HTMLDivElement>(null);

  const handleDownloadPDF = () => {
    if (!resumeRef.current) return;

    const element = resumeRef.current;
    const opt: any = {
      margin: 10,
      filename: "MohammadYousefi_Resume_FA.pdf",
      image: { type: "jpeg" as const, quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { orientation: "portrait", unit: "mm", format: "a4" },
    };

    html2pdf().set(opt).from(element).save();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-4 md:p-8" dir="rtl">
      <div className="max-w-4xl mx-auto">
        {/* Download Button */}
        <div className="mb-6 flex justify-end">
          <Button
            onClick={handleDownloadPDF}
            className="bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white gap-2"
          >
            <Download size={18} />
            دانلود PDF
          </Button>
        </div>

        {/* Resume Container */}
        <div
          ref={resumeRef}
          className="bg-white rounded-lg shadow-2xl overflow-hidden"
        >
          {/* Header Section */}
          <div className="bg-gradient-to-r from-emerald-600 to-emerald-800 text-white p-8" style={{fontFamily: "'Segoe UI', 'Vazirmatn', sans-serif"}}>
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold mb-2">محمد یوسفی</h1>
                <p className="text-emerald-100 text-xl font-semibold">برنامه‌نویس بک‌اند پایتون/جنگو</p>
              </div>
              <div className="flex flex-col gap-3 text-sm">
                <div className="flex items-center gap-2">
                  <MapPin size={18} />
                  <span>تهران</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone size={18} />
                  <span dir="ltr">+98 910 875 8382</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail size={18} />
                  <span dir="ltr">m.yousefi.r79@gmail.com</span>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="p-8">
            {/* Links */}
            <div className="flex flex-wrap gap-4 mb-8 justify-end">
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
              <h2 className="text-2xl font-bold text-emerald-700 mb-4 pb-2 border-b-2 border-emerald-200">خلاصه حرفه‌ای</h2>
              <p className="text-gray-700 leading-relaxed text-justify">
                برنامه‌نویس بک‌اند با تمرکز بر <span className="font-semibold">پایتون</span> و <span className="font-semibold">جنگو</span>. دانشجوی کارشناسی ارشد مدیریت کسب‌وکار (MBA) گرایش بازاریابی در دانشگاه تهران و فارغ‌التحصیل مهندسی مکانیک. دارای تجربه عملی در توسعه پروژه‌های Django شامل فروشگاه چندفروشنده و سایت سفارش‌گیری کافی‌شاپ. مسلط به طراحی <span className="font-semibold">REST API</span>، کار با <span className="font-semibold">ORM</span>، <span className="font-semibold">Redis</span>، <span className="font-semibold">Celery</span> و محیط‌های توسعه مبتنی بر <span className="font-semibold">Docker</span>.
              </p>
            </section>

            {/* Skills Section */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-emerald-700 mb-4 pb-2 border-b-2 border-emerald-200">مهارت‌های فنی</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-emerald-50 p-4 rounded-lg">
                  <h3 className="font-bold text-emerald-700 mb-2">زبان‌های برنامه‌نویسی</h3>
                  <p className="text-gray-700 text-sm">Python، JavaScript basic</p>
                </div>
                <div className="bg-emerald-50 p-4 rounded-lg">
                  <h3 className="font-bold text-emerald-700 mb-2">فریم‌ورک‌ها</h3>
                  <p className="text-gray-700 text-sm">Django، Django REST Framework، Celery</p>
                </div>
                <div className="bg-emerald-50 p-4 rounded-lg">
                  <h3 className="font-bold text-emerald-700 mb-2">پایگاه داده</h3>
                  <p className="text-gray-700 text-sm">PostgreSQL، SQLite</p>
                </div>
                <div className="bg-emerald-50 p-4 rounded-lg">
                  <h3 className="font-bold text-emerald-700 mb-2">ابزارها و زیرساخت</h3>
                  <p className="text-gray-700 text-sm">Git/GitHub، Docker، Redis، Postman، Swagger، Linux</p>
                </div>
                <div className="bg-emerald-50 p-4 rounded-lg md:col-span-2">
                  <h3 className="font-bold text-emerald-700 mb-2">وب و CMS</h3>
                  <p className="text-gray-700 text-sm">HTML/CSS، WordPress، WooCommerce، Elementor، SEO</p>
                </div>
              </div>
            </section>

            {/* Experience Section */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-emerald-700 mb-4 pb-2 border-b-2 border-emerald-200">سوابق حرفه‌ای</h2>
              
              <div className="mb-6">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-2">
                  <h3 className="text-lg font-bold text-gray-800">بوت‌کمپ بک‌اند پایتون و جنگو</h3>
                  <span className="text-sm text-gray-500 mt-1 md:mt-0">بهمن ۱۴۰۳ - آبان ۱۴۰۴</span>
                </div>
                <p className="text-emerald-600 font-semibold mb-2">مکتب شریف، تهران</p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                  <li>اجرای پروژه‌های عملی با تمرکز بر طراحی REST API و احراز هویت</li>
                  <li>استفاده از Redis/Celery برای مدیریت صف‌های آسنکرون</li>
                  <li>استفاده از Git برای کنترل نسخه و توسعه در محیط‌های Docker</li>
                </ul>
              </div>

              <div>
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-2">
                  <h3 className="text-lg font-bold text-gray-800">مدیر وب‌سایت وردپرسی</h3>
                  <span className="text-sm text-gray-500 mt-1 md:mt-0">تیر ۱۴۰۳ - شهریور ۱۴۰۳</span>
                </div>
                <p className="text-emerald-600 font-semibold mb-2">بنیاد بین‌المللی مطالعات چین، تهران</p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                  <li>نگهداری و بهینه‌سازی وب‌سایت وردپرسی و بهبود SEO</li>
                  <li>همکاری با تیم محتوا برای انتشار چندزبانه</li>
                </ul>
              </div>
            </section>

            {/* Projects Section */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-emerald-700 mb-4 pb-2 border-b-2 border-emerald-200">پروژه‌های کلیدی</h2>
              
              <div className="mb-6 bg-gradient-to-r from-emerald-50 to-teal-50 p-4 rounded-lg border-r-4 border-emerald-600">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-bold text-gray-800">Custom-Shop-Project (متن‌باز)</h3>
                  <a
                    href="https://github.com/MohammadYR/Custom-Shop-Project"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 text-sm"
                  >
                    مشاهده
                  </a>
                </div>
                <p className="text-sm text-gray-600 mb-2">Django، DRF، PostgreSQL، Dockerfile، Celery</p>
                <p className="text-sm text-gray-700 mb-2"><strong>درباره Django:</strong> استفاده از Django برای ساخت API‌های RESTful، مدیریت دیتابیس با ORM، و پردازش وظایف آسنکرون با Celery.</p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                  <li>پیاده‌سازی فروشگاه آنلاین چندبخشی (API-first)</li>
                  <li>قابلیت پردازش وظایف آسنکرون (ارسال ایمیل) با Celery</li>
                </ul>
              </div>

              <div className="bg-gradient-to-r from-indigo-50 to-purple-50 p-4 rounded-lg border-r-4 border-indigo-600">
                <h3 className="text-lg font-bold text-gray-800 mb-2">وب‌سایت سفارش‌گیری کافی‌شاپ</h3>
                <p className="text-sm text-gray-600 mb-2">Django، Django ORM</p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                  <li>سیستم مدیریت منو، سفارش‌گیری و احراز هویت کاربر</li>
                  <li>استفاده آزمایشی از Redis و Docker در محیط توسعه</li>
                </ul>
              </div>
            </section>

            {/* Education Section */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-emerald-700 mb-4 pb-2 border-b-2 border-emerald-200">تحصیلات</h2>
              
              <div className="mb-4">
                <h3 className="text-lg font-bold text-gray-800">کارشناسی ارشد مدیریت کسب‌وکار (MBA)</h3>
                <p className="text-blue-600 font-semibold">دانشگاه تهران | در حال تحصیل</p>
                <p className="text-gray-600 text-sm">گرایش: بازاریابی</p>
              </div>

              <div>
                <h3 className="text-lg font-bold text-gray-800">کارشناسی مهندسی مکانیک</h3>
                <p className="text-blue-600 font-semibold">دانشگاه آزاد اسلامی واحد علوم و تحقیقات | فارغ‌التحصیل</p>
              </div>
            </section>

            {/* Certifications Section */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-emerald-700 mb-4 pb-2 border-b-2 border-emerald-200">گواهی‌نامه‌ها</h2>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold mt-1">•</span>
                  <span className="text-gray-700"><span className="font-semibold">بوت‌کمپ پایتون و جنگو</span> — مکتب شریف (۱۴۰۴)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold mt-1">•</span>
                  <span className="text-gray-700"><span className="font-semibold">Programming with Python</span> — مجتمع فنی (۱۳۹۸)</span>
                </li>
              </ul>
            </section>

            {/* Soft Skills Section */}
            <section>
              <h2 className="text-2xl font-bold text-emerald-700 mb-4 pb-2 border-b-2 border-emerald-200">مهارت‌های نرم</h2>
              <div className="flex flex-wrap gap-2">
                {[
                  "حل مسئله",
                  "مسئولیت‌پذیری",
                  "پشتکار",
                  "انعطاف‌پذیری",
                  "خلاقیت",
                  "خودآگاهی",
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
