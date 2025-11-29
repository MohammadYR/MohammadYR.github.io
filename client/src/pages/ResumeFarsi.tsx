import { Button } from "@/components/ui/button";
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Globe,
  Printer,
  ExternalLink,
} from "lucide-react";

export default function ResumeFarsi() {
  const handlePrint = () => window.print();

  return (
    <div
      className="min-h-screen bg-gray-100 p-4 print:p-0 print:bg-white flex justify-center"
      dir="rtl"
      style={{ fontFamily: "'Vazirmatn', 'Segoe UI', Tahoma, sans-serif" }}
    >
      {/* دکمه پرینت/دانلود - فقط در نمایشگر */}
      <div className="fixed top-4 left-4 z-50 print:hidden">
        <Button
          onClick={handlePrint}
          className="bg-emerald-600 hover:bg-emerald-700 text-white shadow-lg gap-2"
        >
          <Printer size={18} />
          دانلود PDF / پرینت
        </Button>
      </div>

      {/* کانتینر اصلی به اندازه A4 */}
      <div className="bg-white shadow-2xl w-full max-w-[210mm] min-h-[297mm] print:shadow-none print:w-full print:max-w-none flex flex-col">
        {/* هدر */}
        <header className="bg-slate-800 text-white p-8 print:p-6">
          <div className="flex justify-between items-end">
            <div>
              <h1 className="text-4xl font-bold mb-2 tracking-tight">محمد یوسفی</h1>
              <p className="text-emerald-400 text-lg font-medium">برنامه‌نویس بک‌اند (Python/Django)</p>
            </div>
          
          </div>
        </header>

        {/* بدنه دو ستونه */}
        <div className="flex flex-col md:flex-row print:flex-row flex-1 text-sm leading-relaxed text-slate-700">
          {/* ستون راست */}
          <aside className="w-full md:w-[32%] print:w-[32%] bg-slate-50 p-6 border-l border-slate-200 space-y-6">
            <section>
              <h3 className="font-bold text-slate-800 border-b-2 border-emerald-500 pb-1 mb-3">اطلاعات تماس</h3>
              <div className="flex flex-col gap-3 text-slate-600">
                <div className="flex items-center gap-2">
                  <Phone size={16} className="text-emerald-600" />
                  <a href="tel:+989108758382" dir="ltr" className="hover:text-emerald-700">
                    +98 910 875 8382
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Mail size={16} className="text-emerald-600" />
                  <a href="mailto:m.yousefi.r79@gmail.com" className="hover:text-emerald-700 break-all">
                    m.yousefi.r79@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin size={16} className="text-emerald-600" />
                  <span>تهران، ایران</span>
                </div>
              </div>
            </section>

            <section>
              <h3 className="font-bold text-slate-800 border-b-2 border-emerald-500 pb-1 mb-3">لینک‌ها</h3>
              <div className="flex flex-col gap-2 text-slate-600">
                <a
                  href="https://linkedin.com/in/mohammadyousefi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-blue-600"
                >
                  <Linkedin size={16} /> لینکدین
                </a>
                <a
                  href="https://github.com/MohammadYR"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-black"
                >
                  <Github size={16} /> گیت‌هاب
                </a>
                <a
                  href="https://mohammadyr.github.io"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-emerald-600"
                >
                  <Globe size={16} />Portfolio
                </a>
              </div>
            </section>

            <section>
              <h3 className="font-bold text-slate-800 border-b-2 border-emerald-500 pb-1 mb-3">مهارت‌های فنی</h3>
              <div className="space-y-3 text-slate-600">
                <div>
                  <span className="font-semibold text-slate-700 block mb-1">زبان‌ها و فریم‌ورک‌ها</span>
                  <p>Python, Django, DRF, JavaScript, SQL</p>
                </div>
                <div>
                  <span className="font-semibold text-slate-700 block mb-1">ابزارها و دیتابیس</span>
                  <p>PostgreSQL, Redis, Celery, Docker, Git, Linux</p>
                </div>
                <div>
                  <span className="font-semibold text-slate-700 block mb-1">سایر</span>
                  <p>REST API, OOP, WordPress, SEO</p>
                </div>
              </div>
            </section>

            <section>
              <h3 className="font-bold text-slate-800 border-b-2 border-emerald-500 pb-1 mb-3">تحصیلات</h3>
              <div className="space-y-3 text-slate-600">
                <div>
                  <p className="font-bold text-slate-700">کارشناسی ارشد MBA</p>
                  <p className="text-slate-500 text-xs">دانشگاه تهران | در حال تحصیل</p>
                  <p className="text-slate-500 text-xs">گرایش بازاریابی</p>
                </div>
                <div>
                  <p className="font-bold text-slate-700">کارشناسی مهندسی مکانیک</p>
                  <p className="text-slate-500 text-xs">دانشگاه آزاد علوم تحقیقات</p>
                </div>
              </div>
            </section>

            <section>
              <h3 className="font-bold text-slate-800 border-b-2 border-emerald-500 pb-1 mb-3">مهارت‌های نرم</h3>
              <div className="flex flex-wrap gap-1">
                {["حل مسئله", "کار تیمی", "مسئولیت‌پذیری", "یادگیری سریع"].map((s) => (
                  <span key={s} className="bg-slate-200 text-slate-700 px-2 py-0.5 rounded text-xs">
                    {s}
                  </span>
                ))}
              </div>
            </section>
          </aside>

          {/* ستون چپ */}
          <main className="w-full md:w-[68%] print:w-[68%] p-6 pt-6 text-sm">
            <section className="mb-5">
              <h2 className="text-xl font-bold text-slate-800 mb-2 flex items-center gap-2">
                <span className="w-2 h-2 bg-emerald-500 rounded-full inline-block" />
                خلاصه حرفه‌ای
              </h2>
              <p className="text-slate-700 leading-6 text-justify">
                برنامه‌نویس بک‌اند مسلط به <span className="font-bold text-slate-900">Python</span> و{" "}
                <span className="font-bold text-slate-900">Django</span> با پیش‌زمینه مهندسی و MBA. تجربه در طراحی و
                پیاده‌سازی معماری RESTful، کار با دیتابیس‌های رابطه‌ای و ابزارهای مدرن توسعه (Docker، Git، Redis).
                تمرکز روی بهینه‌سازی عملکرد و حل چالش‌های فنی پیچیده.
              </p>
            </section>

            <section className="mb-5">
              <h2 className="text-xl font-bold text-slate-800 mb-3 flex items-center gap-2">
                <span className="w-2 h-2 bg-emerald-500 rounded-full inline-block" />
                سوابق کاری و اجرایی
              </h2>

              <div className="mb-4 relative border-r-2 border-slate-200 pr-4">
                <div className="absolute -right-[5px] top-1.5 w-2 h-2 rounded-full bg-slate-300" />
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="font-bold text-slate-800 text-base">برنامه‌نویس بک‌اند (بوت‌کمپ مکتب شریف)</h3>
                  <span className="text-xs text-slate-500 font-mono">اسفند ۱۴۰۳ - آبان ۱۴۰۴</span>
                </div>
                <ul className="list-disc list-outside mr-4 text-slate-700 space-y-1 text-[12px]">
                  <li>طراحی و توسعه REST API مقیاس‌پذیر با Django REST Framework.</li>
                  <li>پیاده‌سازی احراز هویت JWT و مجوز نقش‌محور.</li>
                  <li>بهینه‌سازی پرس‌وجوهای دیتابیس و کاهش زمان پاسخ‌دهی.</li>
                </ul>
              </div>

              <div className="relative border-r-2 border-slate-200 pr-4">
                <div className="absolute -right-[5px] top-1.5 w-2 h-2 rounded-full bg-slate-300" />
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="font-bold text-slate-800 text-base">مدیر وب‌سایت و سئو</h3>
                  <span className="text-xs text-slate-500 font-mono">تابستان ۱۴۰۳</span>
                </div>
                <p className="text-slate-600 text-xs mb-1">بنیاد بین المللی مطالعات چین</p>
                <ul className="list-disc list-outside mr-4 text-slate-700 space-y-1 text-[12px]">
                  <li>مدیریت محتوا، بهبود سرعت و پیاده‌سازی استراتژی‌های SEO.</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-800 mb-3 flex items-center gap-2">
                <span className="w-2 h-2 bg-emerald-500 rounded-full inline-block" />
                پروژه‌های شاخص
              </h2>

              <div className="grid grid-cols-1 gap-4">
                <div className="bg-slate-50 p-3 rounded border border-slate-100">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="font-bold text-emerald-700">پلتفرم فروشگاهی چند فروشنده (E-commerce API)</h3>
                    <a
                      href="https://github.com/MohammadYR/Custom-Shop-Project"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-slate-400 hover:text-emerald-600 flex items-center gap-1"
                    >
                      سورس کد <ExternalLink size={12} />
                    </a>
                  </div>
                  <div className="flex flex-wrap gap-1 mb-2">
                    {["Django", "DRF", "Celery", "Docker"].map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] bg-white border px-1.5 py-0.5 rounded text-slate-500"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <ul className="list-disc list-outside mr-4 text-slate-700 space-y-1 text-[12px] sm:text-sm">
                    <li>طراحی معماری ماژولار برای کاتالوگ، سفارش و فروشندگان.</li>
                    <li>صف‌های آسنکرون با Celery/Redis برای ایمیل و پردازش سفارش.</li>
                    <li>Dockerize کامل و خط CI برای تست و استقرار سریع.</li>
                  </ul>
                </div>

                <div className="bg-slate-50 p-3 rounded border border-slate-100">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="font-bold text-emerald-700">سیستم سفارش‌گیری کافه (Coffee Shop Manager)</h3>
                    <a
                      href="https://github.com/MohammadYR/coffee-shop"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-slate-400 hover:text-indigo-600 flex items-center gap-1"
                    >
                      سورس کد <ExternalLink size={12} />
                    </a>
                  </div>
                  <div className="flex flex-wrap gap-1 mb-2">
                    {["Django ORM", "PostgreSQL", "Redis"].map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] bg-white border px-1.5 py-0.5 rounded text-slate-500"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <ul className="list-disc list-outside mr-4 text-slate-700 space-y-1 text-[12px] sm:text-sm">
                    <li>مدل‌سازی دیتابیس برای مدیریت منو، سبد خرید و ردیابی سفارش.</li>
                    <li>استفاده از Redis برای کش منو و تسریع رسیدگی به سفارش‌ها.</li>
                  </ul>
                </div>
              </div>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
}
