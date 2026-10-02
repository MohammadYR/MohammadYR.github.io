// Single source of truth for everything the site says about Mohammad.
// The resume pages render `profile[lang]`; the home page reads `projects` and `contact`.

export type Lang = "en" | "fa";

export const contact = {
  email: "m.yousefi.r79@gmail.com",
  github: "https://github.com/MohammadYR",
  linkedin: "https://www.linkedin.com/in/mohammadyousefi",
  site: "https://mohammadyr.github.io",
  location: "Tehran, Iran",
};

export type Project = {
  id: "custom-shop" | "coffee-shop";
  title: string;
  context: string;
  repo: string;
  tags: string[];
  bullets: string[];
};

export type Entry = {
  title: string;
  org: string;
  date: string;
  bullets: string[];
};

export type ResumeContent = {
  dir: "ltr" | "rtl";
  name: string;
  role: string;
  pdfNote: string;
  backLabel: string;
  headings: {
    summary: string;
    projects: string;
    experience: string;
    links: string;
    skills: string;
    education: string;
    softSkills: string;
    languages: string;
  };
  summary: string;
  projects: Project[];
  experience: Entry[];
  skills: { label: string; value: string }[];
  education: { degree: string; school: string }[];
  softSkills: string[];
  languages: string;
};

const projectMeta = {
  "custom-shop": {
    repo: "https://github.com/MohammadYR/Custom-Shop-Project",
    tags: ["Django", "DRF", "PostgreSQL", "Celery", "Redis", "Docker"],
  },
  "coffee-shop": {
    repo: "https://github.com/mohammadsafarpour/coffee-shop",
    tags: ["Django", "DRF", "PostgreSQL", "JWT + OTP"],
  },
} as const;

// Short versions of the projects for the home page cards.
export const homeProjects = [
  {
    id: "custom-shop",
    kicker: "Bootcamp capstone · Solo",
    title: "Multi-Vendor Marketplace",
    desc: "Back-end for a marketplace where many sellers list products and buyers order from them.",
    repoLabel: "Custom-Shop-Project",
    ...projectMeta["custom-shop"],
    bullets: [
      "Modular domain apps on a shared base with soft delete",
      "JWT auth with SMS/email OTP and separate seller/buyer permissions",
      "Cart → order → payment flow; SMS offloaded to Celery on Redis",
      "Custom admin panel, Docker Compose setup and Swagger API docs",
    ],
  },
  {
    id: "coffee-shop",
    kicker: "Team project · 3 people",
    title: "Cafe Ordering System",
    desc: "Ordering system for a cafe with a server-rendered web UI and a REST API over the same models.",
    repoLabel: "coffee-shop",
    ...projectMeta["coffee-shop"],
    bullets: [
      "Django-template web interface plus a separate REST API",
      "User profiles, wishlists and product reviews",
      "Catalog with categories and multiple images",
      "Orders with status tracking and total calculation",
    ],
  },
] as const;

const skillValues = {
  frameworks: "Python · Django · Django REST Framework · REST API",
  tools: "Git & GitHub · Docker · Docker Compose · Postman · Celery · Redis · Linux",
  web: "WordPress · HTML/CSS",
};

export const profile: Record<Lang, ResumeContent> = {
  en: {
    dir: "ltr",
    name: "Mohammad Yousefi",
    role: "Back-End Developer | Python · Django · DRF",
    pdfNote: "Full PDF resume available on request",
    backLabel: "Back to portfolio",
    headings: {
      summary: "Professional Summary",
      projects: "Key Projects",
      experience: "Experience & Training",
      links: "Links",
      skills: "Technical Skills",
      education: "Education",
      softSkills: "Soft Skills",
      languages: "Languages",
    },
    summary:
      "Back-end developer with a strong focus on Python and Django/DRF, with a background in mechanical engineering and an MBA in marketing in progress. Experienced in designing and implementing modular architectures, standard REST APIs, relational databases (PostgreSQL) and modern development tooling (Docker, Redis, Celery). Enjoys solving technically complex problems and raising code quality by bringing AI into the development workflow.",
    projects: [
      {
        id: "custom-shop",
        title: "Multi-Vendor Marketplace (Custom Shop)",
        context: "Bootcamp capstone",
        ...projectMeta["custom-shop"],
        tags: [...projectMeta["custom-shop"].tags],
        bullets: [
          "Modular architecture with separate domain apps and Soft Delete implemented in a shared base app.",
          "JWT authentication with SMS/email OTP, and separate permission levels for sellers and buyers.",
          "Implemented the shopping cart, order placement and payment transaction flow.",
          "Custom admin panel for managing sellers, products and orders.",
          "Moved slow tasks such as sending SMS to a Celery queue backed by Redis.",
          "Runs with Docker Compose; API documented automatically with Swagger.",
        ],
      },
      {
        id: "coffee-shop",
        title: "Cafe Ordering System",
        context: "Team project (3 people)",
        ...projectMeta["coffee-shop"],
        tags: [...projectMeta["coffee-shop"].tags],
        bullets: [
          "Web interface built with Django templates, plus a separate REST API on the same models.",
          "User profiles, wishlists and product reviews.",
          "Product catalog with categories and multiple images; order placement with status tracking and total calculation.",
        ],
      },
    ],
    experience: [
      {
        title: "Back-End Programming Bootcamp",
        org: "Maktab Sharif (Maktab 130)",
        date: "Feb 2025 – Nov 2025",
        bullets: [
          "Intensive 9-month program: Python, OOP, Django and DRF, databases, Git and teamwork.",
          "Weekly assignments and periodic assessments under a mentor, with code reviews.",
          "Delivered one team project and one individual capstone project.",
        ],
      },
      {
        title: "E-commerce Website Development & Content",
        org: "Freelance",
        date: "4 months, 2024",
        bullets: [
          "Updated products, content and pages across several WordPress online stores and fixed visual and structural issues.",
        ],
      },
      {
        title: "Website Technical Management",
        org: "International Foundation for China Studies",
        date: "3 months (full-time), 2024",
        bullets: [
          "Debugged and fixed technical issues across the organization's websites, built new pages and templates, designed a landing page and redesigned the home page.",
        ],
      },
    ],
    skills: [
      { label: "Languages & Frameworks", value: skillValues.frameworks },
      { label: "Databases", value: "PostgreSQL · SQLite · Django ORM · Data modelling & ERD" },
      { label: "Tools", value: skillValues.tools },
      { label: "Web", value: skillValues.web },
    ],
    education: [
      { degree: "MBA — Marketing", school: "University of Tehran · In progress" },
      { degree: "B.Sc. Mechanical Engineering", school: "Islamic Azad University, Science and Research Branch" },
    ],
    softSkills: ["Problem Solving", "Teamwork", "Accountability", "Fast Learner"],
    languages: "Persian (native) · English (intermediate)",
  },

  fa: {
    dir: "rtl",
    name: "محمد یوسفی",
    role: "برنامه‌نویس بک‌اند | Python · Django · DRF",
    pdfNote: "نسخهٔ PDF رزومه در صورت درخواست ارسال می‌شود",
    backLabel: "بازگشت به پورتفولیو",
    headings: {
      summary: "پروفایل حرفه‌ای",
      projects: "پروژه‌های شاخص",
      experience: "سوابق کاری و آموزشی",
      links: "لینک‌ها",
      skills: "مهارت‌های فنی",
      education: "تحصیلات",
      softSkills: "مهارت‌های نرم",
      languages: "زبان",
    },
    summary:
      "توسعه‌دهندهٔ بک‌اند با تمرکز ویژه روی Python و Django/DRF، دارای پیش‌زمینهٔ مهندسی مکانیک و کارشناسی ارشد MBA بازاریابی. دارای تجربهٔ طراحی و پیاده‌سازی معماری‌های ماژولار، REST APIهای استاندارد، پایگاه‌های داده (PostgreSQL) و ابزارهای توسعهٔ مدرن (Docker، Redis، Celery). علاقه‌مند به حل مسائلی با پیچیدگی فنی بالا و ارتقای کیفیت کد با بهره‌گیری از هوش مصنوعی در چرخهٔ توسعه.",
    projects: [
      {
        id: "custom-shop",
        title: "مارکت‌پلیس چندفروشندگی (Custom Shop)",
        context: "پروژهٔ پایانی بوت‌کمپ",
        ...projectMeta["custom-shop"],
        tags: [...projectMeta["custom-shop"].tags],
        bullets: [
          "معماری ماژولار با تفکیک اپ‌های دامنه‌ای و پیاده‌سازی Soft Delete در اپ پایه.",
          "احراز هویت JWT و OTP پیامکی/ایمیلی، با سطح دسترسی مجزا برای فروشنده و خریدار.",
          "پیاده‌سازی جریان سبد خرید، ثبت سفارش و تراکنش پرداخت.",
          "پنل ادمین اختصاصی برای مدیریت فروشندگان، محصولات و سفارش‌ها.",
          "انتقال کارهای زمان‌بر مثل ارسال پیامک به صف Celery روی Redis.",
          "اجرا با Docker Compose و مستندسازی خودکار API با Swagger.",
        ],
      },
      {
        id: "coffee-shop",
        title: "سیستم سفارش‌گیری کافه",
        context: "پروژهٔ تیمی (تیم ۳ نفره)",
        ...projectMeta["coffee-shop"],
        tags: [...projectMeta["coffee-shop"].tags],
        bullets: [
          "رابط وب با تمپلیت‌های جنگو، به‌همراه REST API جداگانه روی همان مدل‌ها.",
          "پروفایل کاربری، لیست علاقه‌مندی‌ها و ثبت نظر روی محصولات.",
          "کاتالوگ محصول با دسته‌بندی و چند تصویر؛ ثبت سفارش با امکان مشاهدهٔ وضعیت و محاسبهٔ مبلغ.",
        ],
      },
    ],
    experience: [
      {
        title: "بوت‌کمپ برنامه‌نویسی بک‌اند",
        org: "مکتب شریف (مکتب ۱۳۰)",
        date: "اسفند ۱۴۰۳ – آبان ۱۴۰۴",
        bullets: [
          "دورهٔ فشردهٔ ۹ماهه: پایتون، برنامه‌نویسی شیءگرا، جنگو و DRF، دیتابیس، Git و کار تیمی.",
          "تمرین‌های هفتگی و ارزیابی دوره‌ای زیر نظر منتور، همراه با بازبینی کد.",
          "اجرای یک پروژهٔ تیمی و یک پروژهٔ پایانی فردی.",
        ],
      },
      {
        title: "توسعه و محتوای سایت‌های فروشگاهی",
        org: "فریلنس",
        date: "۴ ماه، ۱۴۰۳",
        bullets: [
          "به‌روزرسانی محصولات، محتوا و صفحات چند سایت فروشگاهی WordPress و رفع ایرادهای ظاهری و ساختاری.",
        ],
      },
      {
        title: "مدیریت فنی وب‌سایت‌ها",
        org: "بنیاد بین‌المللی مطالعات چین",
        date: "۳ ماه (تمام‌وقت)، ۱۴۰۳",
        bullets: [
          "دیباگ و رفع اشکالات فنی سایت‌های مجموعه، ساخت صفحات و قالب‌های جدید، طراحی لندینگ‌پیج و بازطراحی صفحهٔ اصلی.",
        ],
      },
    ],
    skills: [
      { label: "زبان و فریمورک", value: skillValues.frameworks },
      { label: "دیتابیس", value: "PostgreSQL · SQLite · Django ORM · مدل‌سازی داده و ERD" },
      { label: "ابزارها", value: skillValues.tools },
      { label: "وب", value: skillValues.web },
    ],
    education: [
      { degree: "کارشناسی ارشد MBA — گرایش بازاریابی", school: "دانشگاه تهران · در حال تحصیل" },
      { degree: "کارشناسی مهندسی مکانیک", school: "دانشگاه آزاد، واحد علوم و تحقیقات" },
    ],
    softSkills: ["حل مسئله", "کار تیمی", "مسئولیت‌پذیری", "یادگیری سریع"],
    languages: "فارسی (مادری) · انگلیسی (متوسط)",
  },
};
