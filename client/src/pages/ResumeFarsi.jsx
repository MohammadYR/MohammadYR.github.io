import { Mail, MapPin, Github, Linkedin, Globe, ArrowRight } from "lucide-react";
import { Link } from "wouter";
import "../styles/resume.css";

export default function ResumeFarsi() {
  return (
    <div className="rz-stage mx-root" dir="rtl" lang="fa">
      <nav className="rz-topbar">
        <Link href="/">
          <ArrowRight size={15} /> بازگشت به پورتفولیو
        </Link>
        <div className="rz-lang mx-mono" dir="ltr">
          <Link href="/resume-en">EN</Link>
          <span className="is-active">FA</span>
        </div>
      </nav>

      <div className="rz-sheet">
        {/* ---------------- masthead ---------------- */}
        <header className="rz-head">
          <div>
            <h1 className="rz-name">محمد یوسفی</h1>
            <p className="rz-role">
              برنامه‌نویس بک‌اند &nbsp;|&nbsp; Python · Django · DRF
            </p>
          </div>

          <div className="rz-head-meta mx-mono">
            <a href="mailto:m.yousefi.r79@gmail.com">
              <Mail size={13} /> m.yousefi.r79@gmail.com
            </a>
            <span>
              <MapPin size={13} /> Tehran, Iran
            </span>
            <span className="rz-note">نسخهٔ PDF رزومه در صورت درخواست ارسال می‌شود</span>
          </div>
        </header>

        <div className="rz-body">
          {/* ---------------- main column ---------------- */}
          <main className="rz-main">
            <section className="rz-block">
              <h2 className="rz-h rz-h-main">پروفایل حرفه‌ای</h2>
              <p className="rz-summary">
                توسعه‌دهندهٔ بک‌اند با تمرکز ویژه روی Python و Django/DRF، دارای
                پیش‌زمینهٔ مهندسی مکانیک و کارشناسی ارشد MBA بازاریابی. دارای تجربهٔ
                طراحی و پیاده‌سازی معماری‌های ماژولار، REST APIهای استاندارد،
                پایگاه‌های داده (PostgreSQL) و ابزارهای توسعهٔ مدرن (Docker، Redis،
                Celery). علاقه‌مند به حل مسائلی با پیچیدگی فنی بالا و ارتقای کیفیت
                کد با بهره‌گیری از هوش مصنوعی در چرخهٔ توسعه.
              </p>
            </section>

            <section className="rz-block">
              <h2 className="rz-h rz-h-main">پروژه‌های شاخص</h2>

              <article className="rz-entry">
                <div className="rz-entry-top">
                  <h3 className="rz-title">
                    مارکت‌پلیس چندفروشندگی (Custom Shop)
                  </h3>
                  <span className="rz-date">پروژهٔ پایانی بوت‌کمپ</span>
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
                  {[
                    "Django",
                    "DRF",
                    "PostgreSQL",
                    "Celery",
                    "Redis",
                    "Docker",
                  ].map((t) => (
                    <span key={t} className="rz-tag mx-mono">
                      {t}
                    </span>
                  ))}
                </div>
                <ul className="rz-list">
                  <li>
                    معماری ماژولار با تفکیک اپ‌های دامنه‌ای و پیاده‌سازی Soft Delete
                    در اپ پایه.
                  </li>
                  <li>
                    احراز هویت JWT و OTP پیامکی/ایمیلی، با سطح دسترسی مجزا برای
                    فروشنده و خریدار.
                  </li>
                  <li>پیاده‌سازی جریان سبد خرید، ثبت سفارش و تراکنش پرداخت.</li>
                  <li>
                    پنل ادمین اختصاصی برای مدیریت فروشندگان، محصولات و سفارش‌ها.
                  </li>
                  <li>
                    انتقال کارهای زمان‌بر مثل ارسال پیامک به صف Celery روی Redis.
                  </li>
                  <li>
                    اجرا با Docker Compose و مستندسازی خودکار API با Swagger.
                  </li>
                </ul>
              </article>

              <article className="rz-entry">
                <div className="rz-entry-top">
                  <h3 className="rz-title">
                    سیستم سفارش‌گیری کافه
                  </h3>
                  <span className="rz-date">پروژهٔ تیمی (تیم ۳ نفره)</span>
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
                  <li>
                    رابط وب با تمپلیت‌های جنگو، به‌همراه REST API جداگانه روی همان
                    مدل‌ها.
                  </li>
                  <li>
                    پروفایل کاربری، لیست علاقه‌مندی‌ها و ثبت نظر روی محصولات.
                  </li>
                  <li>
                    کاتالوگ محصول با دسته‌بندی و چند تصویر؛ ثبت سفارش با امکان
                    مشاهدهٔ وضعیت و محاسبهٔ مبلغ.
                  </li>
                </ul>
              </article>
            </section>

            <section className="rz-block">
              <h2 className="rz-h rz-h-main">سوابق کاری و آموزشی</h2>

              <article className="rz-entry rz-rail">
                <div className="rz-entry-top">
                  <h3 className="rz-title">بوت‌کمپ برنامه‌نویسی بک‌اند</h3>
                  <span className="rz-date">اسفند ۱۴۰۳ – آبان ۱۴۰۴</span>
                </div>
                <p className="rz-org">مکتب شریف (مکتب ۱۳۰)</p>
                <ul className="rz-list">
                  <li>
                    دورهٔ فشردهٔ ۹ماهه: پایتون، برنامه‌نویسی شیءگرا، جنگو و DRF،
                    دیتابیس، Git و کار تیمی.
                  </li>
                  <li>
                    تمرین‌های هفتگی و ارزیابی دوره‌ای زیر نظر منتور، همراه با بازبینی
                    کد.
                  </li>
                  <li>اجرای یک پروژهٔ تیمی و یک پروژهٔ پایانی فردی.</li>
                </ul>
              </article>

              <article className="rz-entry rz-rail">
                <div className="rz-entry-top">
                  <h3 className="rz-title">توسعه و محتوای سایت‌های فروشگاهی</h3>
                  <span className="rz-date">۴ ماه، ۱۴۰۳</span>
                </div>
                <p className="rz-org">فریلنس</p>
                <ul className="rz-list">
                  <li>
                    به‌روزرسانی محصولات، محتوا و صفحات چند سایت فروشگاهی WordPress و
                    رفع ایرادهای ظاهری و ساختاری.
                  </li>
                </ul>
              </article>

              <article className="rz-entry rz-rail">
                <div className="rz-entry-top">
                  <h3 className="rz-title">مدیریت فنی وب‌سایت‌ها</h3>
                  <span className="rz-date">۳ ماه (تمام‌وقت)، ۱۴۰۳</span>
                </div>
                <p className="rz-org">بنیاد بین‌المللی مطالعات چین</p>
                <ul className="rz-list">
                  <li>
                    دیباگ و رفع اشکالات فنی سایت‌های مجموعه، ساخت صفحات و قالب‌های جدید،
                    طراحی لندینگ‌پیج و بازطراحی صفحهٔ اصلی.
                  </li>
                </ul>
              </article>
            </section>
          </main>

          {/* ---------------- sidebar ---------------- */}
          <aside className="rz-aside">
            <section className="rz-block">
              <h2 className="rz-h">لینک‌ها</h2>
              <div className="rz-links mx-mono">
                <a
                  href="https://github.com/MohammadYR"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github size={13} /> github.com/MohammadYR
                </a>
                <a
                  href="https://linkedin.com/in/mohammadyousefi"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin size={13} /> linkedin.com/in/mohammadyousefi
                </a>
                <a
                  href="https://mohammadyr.github.io"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Globe size={13} /> mohammadyr.github.io
                </a>
              </div>
            </section>

            <section className="rz-block">
              <h2 className="rz-h">مهارت‌های فنی</h2>

              <div className="rz-skill">
                <span className="rz-skill-label">زبان و فریمورک</span>
                <p className="rz-skill-val">
                  Python · Django · Django REST Framework · REST API
                </p>
              </div>

              <div className="rz-skill">
                <span className="rz-skill-label">دیتابیس</span>
                <p className="rz-skill-val">
                  PostgreSQL · SQLite · Django ORM · مدل‌سازی داده و ERD
                </p>
              </div>

              <div className="rz-skill">
                <span className="rz-skill-label">ابزارها</span>
                <p className="rz-skill-val">
                  Git &amp; GitHub · Docker · Docker Compose · Postman · Celery ·
                  Redis · Linux
                </p>
              </div>

              <div className="rz-skill">
                <span className="rz-skill-label">وب</span>
                <p className="rz-skill-val">WordPress · HTML/CSS</p>
              </div>
            </section>

            <section className="rz-block">
              <h2 className="rz-h">تحصیلات</h2>
              <div className="rz-edu">
                <p className="rz-edu-deg">کارشناسی ارشد MBA — گرایش بازاریابی</p>
                <p className="rz-edu-org">دانشگاه تهران · در حال تحصیل</p>
              </div>
              <div className="rz-edu">
                <p className="rz-edu-deg">کارشناسی مهندسی مکانیک</p>
                <p className="rz-edu-org">دانشگاه آزاد، واحد علوم و تحقیقات</p>
              </div>
            </section>

            <section className="rz-block">
              <h2 className="rz-h">مهارت‌های نرم</h2>
              <div className="rz-tags">
                {[
                  "حل مسئله",
                  "کار تیمی",
                  "مسئولیت‌پذیری",
                  "یادگیری سریع",
                ].map((s) => (
                  <span key={s} className="rz-tag">
                    {s}
                  </span>
                ))}
              </div>
            </section>

            <section className="rz-block">
              <h2 className="rz-h">زبان</h2>
              <p className="rz-skill-val">
فارسی (مادری) · انگلیسی (متوسط)
              </p>
            </section>
          </aside>
        </div>
      </div>
    </div>
  );
}
