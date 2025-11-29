import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Github, Linkedin, Globe, Download } from "lucide-react";

export default function ResumeFarsi() {
  const handleDownloadPDF = () => {
    window.print();
  };

  return (
    <div
      className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900 p-4 md:p-8 print:bg-white print:p-0"
      dir="rtl"
      style={{
        fontFamily:
          "'Vazirmatn', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
      }}
    >
      <div className="max-w-5xl mx-auto">
        <div className="mb-6 flex justify-end print:hidden">
          <Button
            onClick={handleDownloadPDF}
            className="bg-emerald-500 hover:bg-emerald-600 text-white gap-2 shadow-lg shadow-emerald-500/30"
          >
            <Download size={18} />
            دانلود PDF
          </Button>
        </div>

        <div className="bg-white/95 border border-emerald-50 rounded-2xl shadow-2xl overflow-hidden print:shadow-none print:w-full">
          <div className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white p-8">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold mb-2">محمد یوسفی</h1>
                <p className="text-emerald-100 text-xl font-semibold">برنامه‌نویس بک‌اند Python/Django</p>
              </div>
              <div className="flex flex-col gap-3 text-sm">
                <div className="flex items-center gap-2">
                  <MapPin size={18} />
                  <span>تهران</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone size={18} />
                  <a href="tel:+989108758382" dir="ltr" className="hover:underline">
                    +98 910 875 8382
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Mail size={18} />
                  <a href="mailto:m.yousefi.r79@gmail.com" dir="ltr" className="hover:underline">
                    m.yousefi.r79@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="p-8 space-y-8 bg-white">
            <div className="flex flex-wrap gap-4 mb-8 justify-end">
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
                خلاصه حرفه‌ای
              </h2>
              <p className="text-gray-700 leading-relaxed text-justify">
                برنامه‌نویس بک‌اند با تمرکز بر <span className="font-semibold">Python</span> و{" "}
                <span className="font-semibold">Django</span>، دانشجوی MBA گرایش بازاریابی در دانشگاه تهران و
                فارغ‌التحصیل مهندسی مکانیک. تجربه عملی در طراحی RESTful API، استقرار سرویس‌های چندفروشنده و
                مدیریت صف‌ها با <span className="font-semibold">Redis</span> و{" "}
                <span className="font-semibold">Celery</span>. توسعه‌دهنده‌ای نتیجه‌گرا با تسلط بر{" "}
                <span className="font-semibold">Docker</span>، کنترل نسخه و بهینه‌سازی عملکرد سرویس‌ها.
              </p>
            </section>

            <section className="mb-8 rounded-xl border border-emerald-50 bg-white/80 shadow-sm p-5">
              <h2 className="text-2xl font-bold text-emerald-700 mb-4 pb-2 border-b-2 border-emerald-200">
                سوابق حرفه‌ای
              </h2>

              <div className="mb-6">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-2">
                  <h3 className="text-lg font-bold text-gray-800">بوت‌کمپ بک‌اند Python/Django</h3>
                  <span className="text-sm text-gray-500 mt-1 md:mt-0">اسفند ۱۴۰۳ - آبان ۱۴۰۴</span>
                </div>
                <p className="text-emerald-600 font-semibold mb-2">مکتب شریف، تهران</p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                  <li>طراحی و پیاده‌سازی REST API با الگوهای احراز هویت و مجوز پیشرفته</li>
                  <li>استفاده از Redis و Celery برای مدیریت صف‌های آسنکرون و ارسال اعلان‌های سیستمی</li>
                  <li>توسعه و استقرار سرویس‌ها داخل محیط‌های Docker و مدیریت آن‌ها با Git</li>
                </ul>
              </div>

              <div>
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-2">
                  <h3 className="text-lg font-bold text-gray-800">مدیر وب‌سایت WordPress</h3>
                  <span className="text-sm text-gray-500 mt-1 md:mt-0">تیر ۱۴۰۳ - شهریور ۱۴۰۳</span>
                </div>
                <p className="text-emerald-600 font-semibold mb-2">بنیاد بین‌المللی مطالعات چین، تهران</p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                  <li>مدیریت زیرساخت و امنیت وب‌سایت، بهینه‌سازی سرعت و SEO</li>
                  <li>هماهنگی انتشار محتوای چندزبانه و مدیریت افزونه‌های کلیدی</li>
                </ul>
              </div>
            </section>

            <section className="mb-8 rounded-xl border border-emerald-50 bg-white/80 shadow-sm p-5">
              <h2 className="text-2xl font-bold text-emerald-700 mb-4 pb-2 border-b-2 border-emerald-200">
                پروژه‌های کلیدی
              </h2>

              <div className="mb-6 bg-gradient-to-r from-emerald-50 to-teal-50 p-4 rounded-lg border-r-4 border-emerald-600">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-bold text-gray-800">پلتفرم فروشگاهی آنلاین (E-commerce Platform)</h3>
                  <a
                    href="https://github.com/MohammadYR/Custom-Shop-Project"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 text-sm"
                  >
                    مشاهده
                  </a>
                </div>
                <p className="text-sm text-gray-600 mb-2">Python، Django، DRF، PostgreSQL، Docker، Celery</p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                  <li>طراحی و پیاده‌سازی معماری RESTful برای مدیریت محصولات و سفارش‌های چندفروشنده</li>
                  <li>اتوماسیون فرآیندهای پس‌زمینه (ایمیل تراکنشی و گزارش‌ها) با Celery و Redis</li>
                  <li>استقرار سرویس در محیط Docker و تنظیم CI برای اجرای تست‌ها و استقرار سریع</li>
                </ul>
              </div>

              <div className="bg-gradient-to-r from-indigo-50 to-purple-50 p-4 rounded-lg border-r-4 border-indigo-600">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-bold text-gray-800">سامانه سفارش‌گیری کافه</h3>
                  <a
                    href="https://github.com/MohammadYR/coffee-shop"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 text-sm"
                  >
                    مشاهده
                  </a>
                </div>
                <p className="text-sm text-gray-600 mb-2">Python، Django، Django ORM، Redis</p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                  <li>پیاده‌سازی مدیریت منو، سبد خرید، احراز هویت و ردیابی سفارش‌ها</li>
                  <li>به‌کارگیری Redis برای کش‌کردن منو و مدیریت صف سفارش، بهبود پاسخ‌گویی</li>
                </ul>
              </div>
            </section>

            <section className="mb-8 rounded-xl border border-emerald-50 bg-white/80 shadow-sm p-5">
              <h2 className="text-2xl font-bold text-emerald-700 mb-4 pb-2 border-b-2 border-emerald-200">
                مهارت‌های فنی
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-emerald-50 p-4 rounded-lg shadow-sm">
                  <h3 className="font-bold text-emerald-700 mb-2">زبان‌های برنامه‌نویسی</h3>
                  <p className="text-gray-700 text-sm">Python، JavaScript</p>
                </div>
                <div className="bg-emerald-50 p-4 rounded-lg shadow-sm">
                  <h3 className="font-bold text-emerald-700 mb-2">فریم‌ورک‌ها و کتابخانه‌ها</h3>
                  <p className="text-gray-700 text-sm">Django، Django REST Framework، Celery</p>
                </div>
                <div className="bg-emerald-50 p-4 rounded-lg shadow-sm">
                  <h3 className="font-bold text-emerald-700 mb-2">پایگاه‌داده</h3>
                  <p className="text-gray-700 text-sm">PostgreSQL، SQLite</p>
                </div>
                <div className="bg-emerald-50 p-4 rounded-lg shadow-sm">
                  <h3 className="font-bold text-emerald-700 mb-2">ابزارها و زیرساخت</h3>
                  <p className="text-gray-700 text-sm">Git/GitHub، Docker، Redis، Postman، Swagger، Linux</p>
                </div>
                <div className="bg-emerald-50 p-4 rounded-lg shadow-sm md:col-span-2">
                  <h3 className="font-bold text-emerald-700 mb-2">وب و CMS</h3>
                  <p className="text-gray-700 text-sm">HTML/CSS، WordPress، WooCommerce، Elementor، SEO</p>
                </div>
              </div>
            </section>

            <section className="mb-8 rounded-xl border border-emerald-50 bg-white/80 shadow-sm p-5">
              <h2 className="text-2xl font-bold text-emerald-700 mb-4 pb-2 border-b-2 border-emerald-200">
                تحصیلات
              </h2>
              <div className="mb-4">
                <h3 className="text-lg font-bold text-gray-800">کارشناسی ارشد مدیریت کسب‌وکار (MBA)</h3>
                <p className="text-emerald-600 font-semibold">دانشگاه تهران | در حال تحصیل</p>
                <p className="text-gray-600 text-sm">گرایش: بازاریابی</p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-800">کارشناسی مهندسی مکانیک</h3>
                <p className="text-emerald-600 font-semibold">دانشگاه آزاد اسلامی واحد علوم و تحقیقات | فارغ‌التحصیل</p>
              </div>
            </section>

            <section className="mb-8 rounded-xl border border-emerald-50 bg-white/80 shadow-sm p-5">
              <h2 className="text-2xl font-bold text-emerald-700 mb-4 pb-2 border-b-2 border-emerald-200">
                گواهی‌نامه‌ها
              </h2>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-emerald-600 font-bold mt-1">•</span>
                  <span className="text-gray-700">
                    <span className="font-semibold">Python & Django Bootcamp</span> — مکتب شریف (۱۴۰۴)
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-600 font-bold mt-1">•</span>
                  <span className="text-gray-700">
                    <span className="font-semibold">Programming with Python</span> — مجتمع فنی (۱۳۹۸)
                  </span>
                </li>
              </ul>
            </section>

            <section className="rounded-xl border border-emerald-50 bg-white/80 shadow-sm p-5">
              <h2 className="text-2xl font-bold text-emerald-700 mb-4 pb-2 border-b-2 border-emerald-200">
                مهارت‌های رفتاری
              </h2>
              <div className="flex flex-wrap gap-2">
                {[
                  "تفکر انتقادی",
                  "حل مسئله",
                  "مسئولیت‌پذیری",
                  "پشتکار",
                  "انعطاف‌پذیری",
                  "خلاقیت",
                  "گوش‌دادن فعال",
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
