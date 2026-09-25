import{c as i,j as e}from"./index-qR9Kqbo8.js";import{P as n,M as l,a as t}from"./phone-CsnO3wm_.js";import{a as s,L as o,G as c}from"./linkedin-CkMMxXOM.js";/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d=i("Printer",[["path",{d:"M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2",key:"143wyd"}],["path",{d:"M6 9V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6",key:"1itne7"}],["rect",{x:"6",y:"14",width:"12",height:"8",rx:"1",key:"1ue0tg"}]]);function p(){const a=()=>window.print();return e.jsxs("div",{className:"rz-stage",dir:"rtl",children:[e.jsx("style",{children:`
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
      `}),e.jsxs("button",{className:"rz-print-btn",onClick:a,children:[e.jsx(d,{size:16}),"دانلود PDF / پرینت"]}),e.jsxs("div",{className:"rz-sheet",children:[e.jsxs("header",{className:"rz-head",children:[e.jsxs("div",{children:[e.jsx("h1",{className:"rz-name",children:"محمد یوسفی"}),e.jsx("p",{className:"rz-role",children:"برنامه‌نویس بک‌اند  |  Python · Django · DRF"})]}),e.jsxs("div",{className:"rz-head-meta rz-mono",children:[e.jsxs("a",{href:"tel:+989108758382",children:[e.jsx(n,{size:13})," +98 910 875 8382"]}),e.jsxs("a",{href:"mailto:m.yousefi.r79@gmail.com",children:[e.jsx(l,{size:13})," m.yousefi.r79@gmail.com"]}),e.jsxs("span",{children:[e.jsx(t,{size:13})," Tehran, Iran"]})]})]}),e.jsxs("div",{className:"rz-body",children:[e.jsxs("main",{className:"rz-main",children:[e.jsxs("section",{className:"rz-block",children:[e.jsx("h2",{className:"rz-h rz-h-main",children:"پروفایل حرفه‌ای"}),e.jsx("p",{className:"rz-summary",children:"توسعه‌دهندهٔ بک‌اند با تمرکز ویژه روی Python و Django/DRF، دارای پیش‌زمینهٔ مهندسی مکانیک و کارشناسی ارشد MBA بازاریابی. دارای تجربهٔ طراحی و پیاده‌سازی معماری‌های ماژولار، REST APIهای استاندارد، پایگاه‌های داده (PostgreSQL) و ابزارهای توسعهٔ مدرن (Docker، Redis، Celery). علاقه‌مند به حل مسائلی با پیچیدگی فنی بالا و ارتقای کیفیت کد با بهره‌گیری از هوش مصنوعی در چرخهٔ توسعه."})]}),e.jsxs("section",{className:"rz-block",children:[e.jsx("h2",{className:"rz-h rz-h-main",children:"پروژه‌های شاخص"}),e.jsxs("article",{className:"rz-entry",children:[e.jsxs("div",{className:"rz-entry-top",children:[e.jsx("h3",{className:"rz-title",children:"مارکت‌پلیس چندفروشندگی (Custom Shop)"}),e.jsx("span",{className:"rz-date",children:"پروژهٔ پایانی بوت‌کمپ"})]}),e.jsxs("a",{className:"rz-repo rz-mono",href:"https://github.com/MohammadYR/Custom-Shop-Project",target:"_blank",rel:"noopener noreferrer",children:[e.jsx(s,{size:12})," github.com/MohammadYR/Custom-Shop-Project"]}),e.jsx("div",{className:"rz-tags",children:["Django","DRF","PostgreSQL","Celery","Redis","Docker"].map(r=>e.jsx("span",{className:"rz-tag rz-mono",children:r},r))}),e.jsxs("ul",{className:"rz-list",children:[e.jsx("li",{children:"معماری ماژولار با تفکیک اپ‌های دامنه‌ای و پیاده‌سازی Soft Delete در اپ پایه."}),e.jsx("li",{children:"احراز هویت JWT و OTP پیامکی/ایمیلی، با سطح دسترسی مجزا برای فروشنده و خریدار."}),e.jsx("li",{children:"پیاده‌سازی جریان سبد خرید، ثبت سفارش و تراکنش پرداخت."}),e.jsx("li",{children:"پنل ادمین اختصاصی برای مدیریت فروشندگان، محصولات و سفارش‌ها."}),e.jsx("li",{children:"انتقال کارهای زمان‌بر مثل ارسال پیامک به صف Celery روی Redis."}),e.jsx("li",{children:"اجرا با Docker Compose و مستندسازی خودکار API با Swagger."})]})]}),e.jsxs("article",{className:"rz-entry",children:[e.jsxs("div",{className:"rz-entry-top",children:[e.jsx("h3",{className:"rz-title",children:"سیستم سفارش‌گیری کافه"}),e.jsx("span",{className:"rz-date",children:"پروژهٔ تیمی (تیم ۳ نفره)"})]}),e.jsxs("a",{className:"rz-repo rz-mono",href:"https://github.com/mohammadsafarpour/coffee-shop",target:"_blank",rel:"noopener noreferrer",children:[e.jsx(s,{size:12})," github.com/mohammadsafarpour/coffee-shop"]}),e.jsx("div",{className:"rz-tags",children:["Django","DRF","PostgreSQL","JWT + OTP"].map(r=>e.jsx("span",{className:"rz-tag rz-mono",children:r},r))}),e.jsxs("ul",{className:"rz-list",children:[e.jsx("li",{children:"رابط وب با تمپلیت‌های جنگو، به‌همراه REST API جداگانه روی همان مدل‌ها."}),e.jsx("li",{children:"پروفایل کاربری، لیست علاقه‌مندی‌ها و ثبت نظر روی محصولات."}),e.jsx("li",{children:"کاتالوگ محصول با دسته‌بندی و چند تصویر؛ ثبت سفارش با امکان مشاهدهٔ وضعیت و محاسبهٔ مبلغ."})]})]})]}),e.jsxs("section",{className:"rz-block",children:[e.jsx("h2",{className:"rz-h rz-h-main",children:"سوابق کاری و آموزشی"}),e.jsxs("article",{className:"rz-entry rz-rail",children:[e.jsxs("div",{className:"rz-entry-top",children:[e.jsx("h3",{className:"rz-title",children:"بوت‌کمپ برنامه‌نویسی بک‌اند"}),e.jsx("span",{className:"rz-date",children:"اسفند ۱۴۰۳ – آبان ۱۴۰۴"})]}),e.jsx("p",{className:"rz-org",children:"مکتب شریف (مکتب ۱۳۰)"}),e.jsxs("ul",{className:"rz-list",children:[e.jsx("li",{children:"دورهٔ فشردهٔ ۹ماهه: پایتون، برنامه‌نویسی شیءگرا، جنگو و DRF، دیتابیس، Git و کار تیمی."}),e.jsx("li",{children:"تمرین‌های هفتگی و ارزیابی دوره‌ای زیر نظر منتور، همراه با بازبینی کد."}),e.jsx("li",{children:"اجرای یک پروژهٔ تیمی و یک پروژهٔ پایانی فردی."})]})]}),e.jsxs("article",{className:"rz-entry rz-rail",children:[e.jsxs("div",{className:"rz-entry-top",children:[e.jsx("h3",{className:"rz-title",children:"توسعه و محتوای سایت‌های فروشگاهی"}),e.jsx("span",{className:"rz-date",children:"۴ ماه، ۱۴۰۳"})]}),e.jsx("p",{className:"rz-org",children:"فریلنس"}),e.jsx("ul",{className:"rz-list",children:e.jsx("li",{children:"به‌روزرسانی محصولات، محتوا و صفحات چند سایت فروشگاهی WordPress و رفع ایرادهای ظاهری و ساختاری."})})]}),e.jsxs("article",{className:"rz-entry rz-rail",children:[e.jsxs("div",{className:"rz-entry-top",children:[e.jsx("h3",{className:"rz-title",children:"مدیریت فنی وب‌سایت‌ها"}),e.jsx("span",{className:"rz-date",children:"۳ ماه (تمام‌وقت)، ۱۴۰۳"})]}),e.jsx("p",{className:"rz-org",children:"بنیاد بین‌المللی مطالعات چین"}),e.jsx("ul",{className:"rz-list",children:e.jsx("li",{children:"دیباگ و رفع اشکالات فنی سایت‌های مجموعه، ساخت صفحات و قالب‌های جدید، طراحی لندینگ‌پیج و بازطراحی صفحهٔ اصلی."})})]})]})]}),e.jsxs("aside",{className:"rz-aside",children:[e.jsxs("section",{className:"rz-block",children:[e.jsx("h2",{className:"rz-h",children:"لینک‌ها"}),e.jsxs("div",{className:"rz-links rz-mono",children:[e.jsxs("a",{href:"https://github.com/MohammadYR",target:"_blank",rel:"noopener noreferrer",children:[e.jsx(s,{size:13})," github.com/MohammadYR"]}),e.jsxs("a",{href:"https://linkedin.com/in/mohammadyousefi",target:"_blank",rel:"noopener noreferrer",children:[e.jsx(o,{size:13})," linkedin.com/in/mohammadyousefi"]}),e.jsxs("a",{href:"https://mohammadyr.github.io",target:"_blank",rel:"noopener noreferrer",children:[e.jsx(c,{size:13})," mohammadyr.github.io"]})]})]}),e.jsxs("section",{className:"rz-block",children:[e.jsx("h2",{className:"rz-h",children:"مهارت‌های فنی"}),e.jsxs("div",{className:"rz-skill",children:[e.jsx("span",{className:"rz-skill-label",children:"زبان و فریمورک"}),e.jsx("p",{className:"rz-skill-val",children:"Python · Django · Django REST Framework · REST API"})]}),e.jsxs("div",{className:"rz-skill",children:[e.jsx("span",{className:"rz-skill-label",children:"دیتابیس"}),e.jsx("p",{className:"rz-skill-val",children:"PostgreSQL · SQLite · Django ORM · مدل‌سازی داده و ERD"})]}),e.jsxs("div",{className:"rz-skill",children:[e.jsx("span",{className:"rz-skill-label",children:"ابزارها"}),e.jsx("p",{className:"rz-skill-val",children:"Git & GitHub · Docker · Docker Compose · Postman · Celery · Redis · Linux"})]}),e.jsxs("div",{className:"rz-skill",children:[e.jsx("span",{className:"rz-skill-label",children:"وب"}),e.jsx("p",{className:"rz-skill-val",children:"WordPress · HTML/CSS"})]})]}),e.jsxs("section",{className:"rz-block",children:[e.jsx("h2",{className:"rz-h",children:"تحصیلات"}),e.jsxs("div",{className:"rz-edu",children:[e.jsx("p",{className:"rz-edu-deg",children:"کارشناسی ارشد MBA — گرایش بازاریابی"}),e.jsx("p",{className:"rz-edu-org",children:"دانشگاه تهران · در حال تحصیل"})]}),e.jsxs("div",{className:"rz-edu",children:[e.jsx("p",{className:"rz-edu-deg",children:"کارشناسی مهندسی مکانیک"}),e.jsx("p",{className:"rz-edu-org",children:"دانشگاه آزاد، واحد علوم و تحقیقات"})]})]}),e.jsxs("section",{className:"rz-block",children:[e.jsx("h2",{className:"rz-h",children:"مهارت‌های نرم"}),e.jsx("div",{className:"rz-tags",children:["حل مسئله","کار تیمی","مسئولیت‌پذیری","یادگیری سریع"].map(r=>e.jsx("span",{className:"rz-tag",children:r},r))})]}),e.jsxs("section",{className:"rz-block",children:[e.jsx("h2",{className:"rz-h",children:"زبان"}),e.jsx("p",{className:"rz-skill-val",children:"فارسی (مادری) · انگلیسی (متوسط)"})]})]})]})]})]})}export{p as default};
