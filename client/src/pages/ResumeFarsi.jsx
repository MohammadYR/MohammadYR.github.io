import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Globe,
  Printer,
} from "lucide-react";

export default function ResumeFarsi() {
  const handlePrint = () => window.print();

  return (
    <div className="rz-stage" dir="rtl">
      <style>{`
@import url('https://fonts.googleapis.com/css2?family=Vazirmatn:wght@300;400;500;600;700;800&display=swap');

:root {
  --ink:      #142238;
  --ink-soft: #2C3E56;
  --accent:   #0E7C6B;
  --accent-2: #64D8C6;
  --mist:     #F3F6F8;
  --rule:     #DCE3EA;
  --muted:    #5C6874;
  --paper:    #FFFFFF;
}

.rz-stage {
  min-height: 100vh;
  background: #E8ECF0;
  display: flex;
  justify-content: center;
  padding: 24px 12px;
  font-family: 'Vazirmatn', 'Segoe UI', Tahoma, sans-serif;
  color: var(--ink);
  -webkit-font-smoothing: antialiased;
}

.rz-mono {
  font-family: ui-monospace, SFMono-Regular, 'SF Mono', Menlo, Consolas, monospace;
  font-size: 10.5px;
  letter-spacing: 0.01em;
}

/* ---------- print control ---------- */
.rz-print-btn {
  position: fixed; top: 20px; left: 20px; z-index: 50;
  display: inline-flex; align-items: center; gap: 8px;
  background: var(--ink); color: #fff; border: 0;
  padding: 10px 16px; border-radius: 2px; cursor: pointer;
  font-family: inherit; font-size: 13px; font-weight: 500;
  box-shadow: 0 6px 20px rgba(20,34,56,.25);
  transition: background .18s ease, transform .18s ease;
}
.rz-print-btn:hover { background: var(--accent); transform: translateY(-1px); }
.rz-print-btn:focus-visible { outline: 2px solid var(--accent-2); outline-offset: 3px; }

/* ---------- sheet ---------- */
.rz-sheet {
  width: 210mm; max-width: 100%;
  min-height: 297mm;
  background: var(--paper);
  box-shadow: 0 18px 50px rgba(20,34,56,.18);
  display: flex; flex-direction: column;
}

/* ---------- masthead ---------- */
.rz-head {
  background: var(--ink); color: #fff;
  padding: 26px 30px 22px;
  display: flex; justify-content: space-between; align-items: flex-end; gap: 24px;
  border-bottom: 3px solid var(--accent);
}
.rz-name { font-size: 32px; font-weight: 800; letter-spacing: -0.02em; line-height: 1.1; margin: 0 0 6px; }
.rz-role { color: var(--accent-2); font-size: 14.5px; font-weight: 500; margin: 0; }
.rz-head-meta { text-align: left; display: flex; flex-direction: column; gap: 5px; color: #C7D2DE; }
.rz-head-meta a, .rz-head-meta span { display: inline-flex; align-items: center; gap: 6px; color: inherit; text-decoration: none; direction: ltr; }
.rz-head-meta a:hover { color: var(--accent-2); }
.rz-head-meta svg { color: var(--accent-2); flex: none; }

/* ---------- body grid ---------- */
.rz-body { display: flex; flex: 1; align-items: stretch; }
.rz-aside {
  width: 33%;
  background: var(--mist);
  border-inline-start: 1px solid var(--rule);
  padding: 20px 22px;
}
.rz-main { width: 67%; padding: 20px 26px 24px; }

/* ---------- section headings ---------- */
.rz-h { font-size: 12.5px; font-weight: 700; color: var(--ink); margin: 0 0 9px; display: flex; align-items: center; gap: 8px; }
.rz-h::after { content: ""; flex: 1; height: 1px; background: var(--rule); }
.rz-h-main { font-size: 14px; }
.rz-h-main::before { content: ""; width: 12px; height: 3px; background: var(--accent); flex: none; }

.rz-block { margin-bottom: 17px; }
.rz-block:last-child { margin-bottom: 0; }

/* ---------- aside content ---------- */
.rz-links { display: flex; flex-direction: column; gap: 7px; }
.rz-links a { display: flex; align-items: center; gap: 7px; color: var(--ink-soft); text-decoration: none; }
.rz-links a:hover { color: var(--accent); }
.rz-links svg { color: var(--accent); flex: none; }

.rz-skill { margin-bottom: 10px; }
.rz-skill:last-child { margin-bottom: 0; }
.rz-skill-label {
  display: block; font-size: 10.5px; font-weight: 700; color: var(--accent);
  margin-bottom: 3px;
}
.rz-skill-val { color: var(--ink-soft); font-size: 11.5px; line-height: 1.7; margin: 0; }

.rz-edu { margin-bottom: 10px; }
.rz-edu:last-child { margin-bottom: 0; }
.rz-edu-deg { font-size: 12px; font-weight: 700; margin: 0 0 1px; }
.rz-edu-org { font-size: 10.5px; color: var(--muted); margin: 0; }

.rz-tags { display: flex; flex-wrap: wrap; gap: 5px; }
.rz-tag {
  background: #fff; border: 1px solid var(--rule); color: var(--ink-soft);
  padding: 2px 7px; font-size: 10.5px; border-radius: 2px;
}

/* ---------- main content ---------- */
.rz-summary { font-size: 12px; line-height: 1.85; color: var(--ink-soft); margin: 0; text-align: justify; }

.rz-entry { margin-bottom: 13px; break-inside: avoid; }
.rz-entry:last-child { margin-bottom: 0; }

.rz-entry-top { display: flex; justify-content: space-between; align-items: baseline; gap: 12px; }
.rz-title { font-size: 12.8px; font-weight: 700; color: var(--ink); margin: 0; }
.rz-date { font-size: 10.5px; color: var(--muted); white-space: nowrap; }
.rz-org { font-size: 11px; color: var(--muted); margin: 1px 0 0; }

.rz-repo {
  display: inline-flex; align-items: center; gap: 5px;
  color: var(--accent); text-decoration: none; margin: 3px 0 5px;
  direction: ltr;
}
.rz-repo:hover { text-decoration: underline; }

.rz-list { list-style: none; padding: 0; margin: 4px 0 0; }
.rz-list li {
  position: relative; padding-inline-start: 13px;
  font-size: 11.5px; line-height: 1.75; color: var(--ink-soft); margin-bottom: 3px;
}
.rz-list li::before {
  content: ""; position: absolute; inset-inline-start: 0; top: 8px;
  width: 4px; height: 4px; background: var(--accent);
}

/* timeline rail for work history */
.rz-rail { border-inline-start: 1px solid var(--rule); padding-inline-start: 14px; position: relative; }
.rz-rail::before {
  content: ""; position: absolute; inset-inline-start: -3.5px; top: 6px;
  width: 6px; height: 6px; background: var(--accent);
}


/* ---------- responsive ---------- */
@media (max-width: 800px) {
  .rz-body { flex-direction: column; }
  .rz-aside, .rz-main { width: 100%; }
  .rz-aside { border-inline-start: 0; border-top: 1px solid var(--rule); }
  .rz-sheet { min-height: 0; }
  .rz-head { flex-direction: column; align-items: flex-start; }
  .rz-head-meta { text-align: right; }
}

/* ---------- print ---------- */
@page { size: A4; margin: 0; }

@media print {
  .rz-stage { background: #fff; padding: 0; display: block; min-height: 0; }
  .rz-sheet { width: 100%; min-height: 0; box-shadow: none; }
  .rz-print-btn { display: none !important; }
  .rz-body { flex-direction: row; }
  .rz-aside { width: 33%; }
  .rz-main { width: 67%; }
  .rz-head, .rz-aside, .rz-tag, .rz-list li::before, .rz-rail::before, .rz-h-main::before {
    -webkit-print-color-adjust: exact; print-color-adjust: exact;
  }
  a { text-decoration: none; }
}

@media (prefers-reduced-motion: reduce) {
  .rz-print-btn { transition: none; }
}
      `}</style>

      <button className="rz-print-btn" onClick={handlePrint}>
        <Printer size={16} />
        دانلود PDF / پرینت
      </button>

      <div className="rz-sheet">
        {/* ---------------- masthead ---------------- */}
        <header className="rz-head">
          <div>
            <h1 className="rz-name">محمد یوسفی</h1>
            <p className="rz-role">
              برنامه‌نویس بک‌اند &nbsp;|&nbsp; Python · Django · DRF
            </p>
          </div>

          <div className="rz-head-meta rz-mono">
            <a href="tel:+989108758382">
              <Phone size={13} /> +98 910 875 8382
            </a>
            <a href="mailto:m.yousefi.r79@gmail.com">
              <Mail size={13} /> m.yousefi.r79@gmail.com
            </a>
            <span>
              <MapPin size={13} /> Tehran, Iran
            </span>
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
                  className="rz-repo rz-mono"
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
                    <span key={t} className="rz-tag rz-mono">
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
                  className="rz-repo rz-mono"
                  href="https://github.com/mohammadsafarpour/coffee-shop"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github size={12} /> github.com/mohammadsafarpour/coffee-shop
                </a>
                <div className="rz-tags">
                  {["Django", "DRF", "PostgreSQL", "JWT + OTP"].map((t) => (
                    <span key={t} className="rz-tag rz-mono">
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
              <div className="rz-links rz-mono">
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
