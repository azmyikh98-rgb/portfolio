/* =========================================================
   Muhammad Azmy Ikhwan — Portfolio
   main.js
   ========================================================= */
(function(){
  "use strict";

  /* ---------------------------------------------------------
     1. Translations
     --------------------------------------------------------- */
  const translations = {
    id: {
      "meta.desc":"Portofolio Muhammad Azmy Ikhwan, UI/UX Designer yang merancang dashboard dan sistem enterprise untuk manufaktur, maintenance, dan operasional harian.",
      "a11y.skip":"Langsung ke isi",

      "nav.home":"Beranda","nav.about":"Tentang","nav.experience":"Pengalaman",
      "nav.projects":"Proyek","nav.exploration":"Eksplorasi","nav.skills":"Keahlian","nav.contact":"Kontak",

      "hero.headline":"Desain antarmuka yang membuat sistem rumit terasa sederhana.",
      "hero.lede":"4+ tahun merancang dashboard, wireframe, dan prototype untuk sistem manufaktur, maintenance, dan operasional harian di skala enterprise — mulai dari riset kebutuhan pengguna sampai desain yang siap dibangun tim developer.",
      "hero.ctaProjects":"Lihat proyek",
      "hero.ctaContact":"Kontak sekarang",
      "hero.locationVal":"Malang, Indonesia",
      "hero.stat1":"Tahun pengalaman UI/UX",
      "hero.stat2":"Sistem enterprise dirancang",
      "hero.stat3":"Perusahaan & klien",
      "hero.stat4":"Sektor industri",
      "hero.photoAlt":"Foto Muhammad Azmy Ikhwan",

      "about.title":"Tentang saya",
      "about.p1":"Saya UI/UX Designer dengan lebih dari 4 tahun pengalaman merancang antarmuka untuk sistem enterprise — mulai dari lini produksi manufaktur, manajemen perawatan aset, hingga akses keluar-masuk perusahaan. Sebagian besar pekerjaan saya berputar di satu masalah yang sama: mengubah proses operasional yang rumit menjadi antarmuka yang bisa langsung dipahami oleh operator, teknisi, dan manajer di lapangan.",
      "about.p2":"Saya bekerja dekat dengan Business Analyst dan tim developer sejak tahap riset kebutuhan, bukan hanya di tahap visual. Setiap wireframe dan prototype dirancang agar mudah dieksekusi oleh tim engineering tanpa banyak revisi bolak-balik — dan situs ini sendiri saya bangun dari nol untuk membuktikannya.",
      "about.p1Title":"Riset sebelum desain",
      "about.p1Text":"Setiap alur dimulai dari kebutuhan pengguna dan proses bisnis nyata, bukan asumsi.",
      "about.p2Title":"Desain siap-bangun",
      "about.p2Text":"Wireframe dan prototype disusun agar mudah diterjemahkan developer menjadi produk nyata.",
      "about.p3Title":"Komunikasi lintas tim",
      "about.p3Text":"Selalu terlibat bersama Business Analyst dan Developer dari kickoff sampai rilis.",

      "exp.title":"Pengalaman kerja",
      "exp.job1Role":"UI/UX Designer",
      "exp.job1Period":"Jul 2023 — Sekarang",
      "exp.job1Org":"PT. Lanius Inovasi Indonesia (Machine Vision), Malang",
      "exp.job1Bullet1":"Berkolaborasi dengan Business Analyst merancang alur sistem sesuai kebutuhan bisnis dan objektif proyek.",
      "exp.job1Bullet2":"Melakukan riset kebutuhan pengguna dan analisis requirement, termasuk kebutuhan data dan perancangan dashboard.",
      "exp.job1Bullet3":"Mengembangkan prototype interaktif untuk validasi konsep sebelum tahap pengembangan.",
      "exp.job1Bullet4":"Berkontribusi menyempurnakan design system untuk konsistensi dan efisiensi proses desain.",
      "exp.job1Bullet5":"Merancang alur pengguna dan antarmuka untuk lima sistem enterprise di lima perusahaan berbeda.",
      "exp.job2Role":"UI/UX Designer",
      "exp.job2Period":"Nov 2021 — Jan 2023",
      "exp.job2Org":"PT. Infosys Solusi Terpadu, Yogyakarta",
      "exp.job2Bullet1":"Berkontribusi mengembangkan design system dengan pendekatan Atomic Design untuk konsistensi dan skalabilitas antarmuka.",
      "exp.job2Bullet2":"Berkolaborasi dengan Business Analyst memvalidasi kebutuhan sistem sebelum proses desain UI dimulai.",
      "exp.job2Bullet3":"Membuat wireframe dan struktur alur pengguna untuk meminimalkan revisi pada fase pengembangan.",
      "exp.job2Bullet4":"Merancang antarmuka berfokus pada usability untuk aplikasi perbankan digital.",

      "proj.title":"Proyek pilihan",
      "proj.viewDetail":"Lihat detail",
      "proj.p1Title":"Digitalisasi lini produksi motor listrik",
      "proj.p1Text":"Merancang MES untuk monitoring produksi real-time, PRTS untuk pelacakan penyelesaian masalah, dan sistem traceability material serta produk pada lini manufaktur ALVA.",
      "proj.p1ImgAlt":"Dashboard MES, PRTS, dan Traceability System untuk PT Electra Mobilitas Indonesia",
      "proj.p1Caption":"MES — Line Detail Realtime, PT Electra Mobilitas Indonesia",
      "proj.p2Title":"Digitalisasi manajemen perawatan aset",
      "proj.p2Text":"Merancang CMMS untuk mengelola work order, penjadwalan maintenance, dan pelaporan kondisi aset serta fasilitas secara terpusat.",
      "proj.p2ImgAlt":"Dashboard CMMS untuk PT Paragon Technology and Innovation",
      "proj.p2Caption":"CMMS — Work Order & Approval Center, PT Paragon Technology and Innovation",
      "proj.p3Title":"Monitoring operasional harian",
      "proj.p3Text":"Daily Management System untuk memantau dan mengevaluasi aktivitas operasional harian secara real-time dan terstruktur di lingkungan produksi kimia.",
      "proj.p3ImgAlt":"Dashboard Daily Management System untuk PT Zekindo Kimiatama",
      "proj.p3Caption":"DMS — Manage Delivery Plan, PT Zekindo Kimiatama",
      "proj.p4Title":"Digitalisasi akses keluar-masuk pabrik",
      "proj.p4Text":"Sistem Gate Pass untuk mendigitalisasi pengajuan, persetujuan, verifikasi, dan pelacakan akses keluar-masuk barang dan personel di lingkungan perusahaan.",
      "proj.p4ImgAlt":"Dashboard Gate Pass Management System untuk PT Panasonic Device Batam",
      "proj.p4Caption":"Gate Pass — Verify & Return, PT Panasonic Device Batam",
      "proj.p5Title":"Kinerja harian & manajemen masalah",
      "proj.p5Text":"Kombinasi DMS dan PRTS untuk memantau kinerja operasional harian dan mengelola penyelesaian masalah lintas departemen secara terstruktur.",
      "proj.p5ImgAlt":"Dashboard DMS dan PRTS untuk PT Sumber Mas Autorindo",
      "proj.p5Caption":"PRTS — Issue Dashboard, PT Sumber Mas Autorindo",

      "explore.title":"Eksplorasi desain",
      "explore.dribbbleTitle":"Studi kasus & konsep di Dribbble",
      "explore.dribbbleText":"Kumpulan eksplorasi dashboard, mobile app, dan latihan visual bebas di luar pekerjaan klien.",
      "explore.viewProfile":"Lihat profil Dribbble",

      "skills.title":"Keahlian",
      "skills.group1":"Spesialisasi",
      "skills.s1":"User Experience","skills.s2":"Web UI Design","skills.s3":"Mobile UI Design",
      "skills.s4":"Wireframing","skills.s5":"Prototyping","skills.s6":"Design System",
      "skills.s7":"Riset Pengguna","skills.s8":"Kolaborasi lintas fungsi",
      "skills.group2":"Tools",
      "skills.t1":"HTML & CSS","skills.t2":"Atomic Design",

      "edu.title":"Pendidikan",
      "edu.uniName":"Universitas Teknologi Yogyakarta",
      "edu.uniProgram":"S1 Informatika · 2016 — 2021",
      "edu.uniText":"Menyelesaikan pendidikan sarjana Informatika sebagai dasar teknis dalam memahami sistem dan proses pengembangan produk digital.",
      "courses.title":"Kursus",
      "edu.course1Title":"Skilvul — UI/UX Design Mastery",
      "edu.course1Period":"Sep — Okt 2021",
      "edu.course1Text":"Studi kasus aplikasi mobile kelas online: Design Thinking, User Flow, Wireframe, UI Style Guide, hingga Prototype.",
      "edu.course2Title":"Sanbercode — UI/UX Design",
      "edu.course2Period":"Agu — Nov 2021",
      "edu.course2Text":"Riset pengguna, strategi dan ruang lingkup produk, arsitektur informasi, wireframe, dan mockup menggunakan Figma.",

      "contact.title":"Mari berkolaborasi",
      "contact.text":"Terbuka untuk peran UI/UX Designer, proyek freelance, maupun diskusi seputar desain sistem enterprise. Hubungi saya lewat email, telepon, atau media sosial di samping.",
      "contact.ctaEmail":"Kirim email",
      "contact.ctaCv":"Unduh CV",
      "contact.copy":"Salin",
      "contact.copied":"Tersalin",

      "footer.credit":"© <span id=\"year\"></span> Muhammad Azmy Ikhwan."
    },

    en: {
      "meta.desc":"Portfolio of Muhammad Azmy Ikhwan, a UI/UX Designer who builds dashboards and enterprise systems for manufacturing, maintenance, and daily operations.",
      "a11y.skip":"Skip to content",

      "nav.home":"Home","nav.about":"About","nav.experience":"Experience",
      "nav.projects":"Projects","nav.exploration":"Exploration","nav.skills":"Skills","nav.contact":"Contact",

      "hero.headline":"Interfaces that make complex systems feel simple.",
      "hero.lede":"4+ years designing dashboards, wireframes, and prototypes for manufacturing, maintenance, and daily-operations systems at enterprise scale — from user research to build-ready design.",
      "hero.ctaProjects":"View projects",
      "hero.ctaContact":"Contact now",
      "hero.locationVal":"Malang, Indonesia",
      "hero.stat1":"Years of UI/UX experience",
      "hero.stat2":"Enterprise systems designed",
      "hero.stat3":"Companies & clients",
      "hero.stat4":"Industry sectors",
      "hero.photoAlt":"Photo of Muhammad Azmy Ikhwan",

      "about.title":"About me",
      "about.p1":"I'm a UI/UX Designer with 4+ years of experience designing interfaces for enterprise systems — from manufacturing production lines and asset maintenance to company access control. Most of my work circles one problem: turning complex operational processes into interfaces that operators, technicians, and floor managers can understand at a glance.",
      "about.p2":"I work closely with Business Analysts and developers from the research stage onward, not just at the visual stage. Every wireframe and prototype is built so engineering teams can implement it without endless back-and-forth revisions — and I built this site itself from scratch to prove it.",
      "about.p1Title":"Research before design",
      "about.p1Text":"Every flow starts from real user needs and business processes, not assumptions.",
      "about.p2Title":"Build-ready design",
      "about.p2Text":"Wireframes and prototypes are structured so developers can turn them into real products.",
      "about.p3Title":"Cross-team communication",
      "about.p3Text":"Always aligned with Business Analysts and developers from kickoff to release.",

      "exp.title":"Work experience",
      "exp.job1Role":"UI/UX Designer",
      "exp.job1Period":"Jul 2023 — Present",
      "exp.job1Org":"PT. Lanius Inovasi Indonesia (Machine Vision), Malang",
      "exp.job1Bullet1":"Collaborated with Business Analysts to design system flows aligned with business needs and project goals.",
      "exp.job1Bullet2":"Conducted user needs research and requirement analysis, including data needs and dashboard design.",
      "exp.job1Bullet3":"Developed interactive prototypes to validate concepts before development.",
      "exp.job1Bullet4":"Contributed to refining the design system for consistency and efficiency.",
      "exp.job1Bullet5":"Designed user flows and interfaces for five enterprise systems across five different companies.",
      "exp.job2Role":"UI/UX Designer",
      "exp.job2Period":"Nov 2021 — Jan 2023",
      "exp.job2Org":"PT. Infosys Solusi Terpadu, Yogyakarta",
      "exp.job2Bullet1":"Contributed to a design system built with an Atomic Design approach for interface consistency and scalability.",
      "exp.job2Bullet2":"Collaborated with Business Analysts to validate system requirements before UI design began.",
      "exp.job2Bullet3":"Created wireframes and user-flow structures to minimize revisions during development.",
      "exp.job2Bullet4":"Designed interfaces focused on usability for digital banking applications.",

      "proj.title":"Selected projects",
      "proj.viewDetail":"View detail",
      "proj.p1Title":"Digitizing an electric-motorcycle production line",
      "proj.p1Text":"Designed an MES for real-time production monitoring, a PRTS for issue-resolution tracking, and a material & product traceability system for ALVA's manufacturing line.",
      "proj.p1ImgAlt":"MES, PRTS, and Traceability System dashboard for PT Electra Mobilitas Indonesia",
      "proj.p1Caption":"MES — Line Detail Realtime, PT Electra Mobilitas Indonesia",
      "proj.p2Title":"Digitizing asset maintenance management",
      "proj.p2Text":"Designed a CMMS to manage work orders, maintenance scheduling, and centralized asset & facility condition reporting.",
      "proj.p2ImgAlt":"CMMS dashboard for PT Paragon Technology and Innovation",
      "proj.p2Caption":"CMMS — Work Order & Approval Center, PT Paragon Technology and Innovation",
      "proj.p3Title":"Monitoring daily operations",
      "proj.p3Text":"A Daily Management System for real-time, structured monitoring and evaluation of daily operations in a chemical production environment.",
      "proj.p3ImgAlt":"Daily Management System dashboard for PT Zekindo Kimiatama",
      "proj.p3Caption":"DMS — Manage Delivery Plan, PT Zekindo Kimiatama",
      "proj.p4Title":"Digitizing plant access control",
      "proj.p4Text":"A Gate Pass system digitizing submission, approval, verification, and tracking of goods and personnel access at the company site.",
      "proj.p4ImgAlt":"Gate Pass Management System dashboard for PT Panasonic Device Batam",
      "proj.p4Caption":"Gate Pass — Verify & Return, PT Panasonic Device Batam",
      "proj.p5Title":"Daily performance & issue management",
      "proj.p5Text":"A combined DMS and PRTS for monitoring daily operational performance and managing structured, cross-department issue resolution.",
      "proj.p5ImgAlt":"DMS and PRTS dashboard for PT Sumber Mas Autorindo",
      "proj.p5Caption":"PRTS — Issue Dashboard, PT Sumber Mas Autorindo",

      "explore.title":"Design exploration",
      "explore.dribbbleTitle":"Case studies & concepts on Dribbble",
      "explore.dribbbleText":"A collection of dashboard explorations, mobile app concepts, and free-form visual practice outside client work.",
      "explore.viewProfile":"View Dribbble profile",

      "skills.title":"Skills",
      "skills.group1":"Specialization",
      "skills.s1":"User Experience","skills.s2":"Web UI Design","skills.s3":"Mobile UI Design",
      "skills.s4":"Wireframing","skills.s5":"Prototyping","skills.s6":"Design System",
      "skills.s7":"User Research","skills.s8":"Cross-functional collaboration",
      "skills.group2":"Tools",
      "skills.t1":"HTML & CSS","skills.t2":"Atomic Design",

      "edu.title":"Education",
      "edu.uniName":"Yogyakarta University of Technology",
      "edu.uniProgram":"B.S. Informatics · 2016 — 2021",
      "edu.uniText":"Completed a bachelor's degree in Informatics, forming a technical foundation for understanding systems and digital product development.",
      "courses.title":"Courses",
      "edu.course1Title":"Skilvul — UI/UX Design Mastery",
      "edu.course1Period":"Sep — Oct 2021",
      "edu.course1Text":"An online-class mobile app case study covering Design Thinking, User Flow, Wireframe, UI Style Guide, and Prototype.",
      "edu.course2Title":"Sanbercode — UI/UX Design",
      "edu.course2Period":"Aug — Nov 2021",
      "edu.course2Text":"User research, product strategy and scope, information architecture, wireframes, and mockups using Figma.",

      "contact.title":"Let's work together",
      "contact.text":"Open to UI/UX Designer roles, freelance projects, and conversations about enterprise system design. Reach me by email, phone, or the social links alongside.",
      "contact.ctaEmail":"Send an email",
      "contact.ctaCv":"Download CV",
      "contact.copy":"Copy",
      "contact.copied":"Copied",

      "footer.credit":"© <span id=\"year\"></span> Muhammad Azmy Ikhwan."
    }
  };

  const state = {
    lang: localStorage.getItem("azmy-lang") || "id"
  };

  /* ---------------------------------------------------------
     2. i18n apply
     --------------------------------------------------------- */
  function applyLanguage(lang){
    const dict = translations[lang] || translations.id;
    document.documentElement.setAttribute("lang", lang);

    document.querySelectorAll("[data-i18n]").forEach(function(el){
      const key = el.getAttribute("data-i18n");
      if(dict[key] !== undefined){ el.innerHTML = dict[key]; }
    });
    document.querySelectorAll("[data-i18n-alt]").forEach(function(el){
      const key = el.getAttribute("data-i18n-alt");
      if(dict[key] !== undefined){ el.setAttribute("alt", dict[key]); }
    });

    document.getElementById("langId").classList.toggle("active", lang === "id");
    document.getElementById("langEn").classList.toggle("active", lang === "en");

    document.title = lang === "en"
      ? "Muhammad Azmy Ikhwan — UI/UX Designer"
      : "Muhammad Azmy Ikhwan — UI/UX Designer";

    stampYear();
    localStorage.setItem("azmy-lang", lang);
    state.lang = lang;

    if(typeof lightbox !== "undefined" && lightbox.classList.contains("is-open") && lastFocusedCard){
      openProjectModal(lastFocusedCard);
    }
  }

  document.getElementById("langId").addEventListener("click", function(){ applyLanguage("id"); });
  document.getElementById("langEn").addEventListener("click", function(){ applyLanguage("en"); });

  /* ---------------------------------------------------------
     3. Theme (dark / light) with persistence
     --------------------------------------------------------- */
  const themeToggle = document.getElementById("themeToggle");
  function getInitialTheme(){
    const saved = localStorage.getItem("azmy-theme");
    if(saved) return saved;
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }
  function applyTheme(theme){
    document.documentElement.setAttribute("data-theme", theme);
    themeToggle.setAttribute("aria-pressed", theme === "dark");
    localStorage.setItem("azmy-theme", theme);
  }
  applyTheme(getInitialTheme());
  themeToggle.addEventListener("click", function(){
    const current = document.documentElement.getAttribute("data-theme");
    applyTheme(current === "dark" ? "light" : "dark");
  });

  /* ---------------------------------------------------------
     4. Mobile nav toggle
     --------------------------------------------------------- */
  const navToggle = document.getElementById("navToggle");
  const mainNav = document.getElementById("mainNav");
  navToggle.addEventListener("click", function(){
    const isOpen = mainNav.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", isOpen);
  });
  mainNav.querySelectorAll("a").forEach(function(a){
    a.addEventListener("click", function(){
      mainNav.classList.remove("is-open");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });

  /* ---------------------------------------------------------
     5. Active nav link on scroll
     --------------------------------------------------------- */
  const navLinks = Array.from(mainNav.querySelectorAll("a"));
  const sections = navLinks
    .map(function(a){ return document.querySelector(a.getAttribute("href")); })
    .filter(Boolean);

  const navObserver = new IntersectionObserver(function(entries){
    entries.forEach(function(entry){
      const id = "#" + entry.target.id;
      const link = navLinks.find(function(a){ return a.getAttribute("href") === id; });
      if(!link) return;
      if(entry.isIntersecting){
        navLinks.forEach(function(l){ l.classList.remove("active"); });
        link.classList.add("active");
      }
    });
  }, { rootMargin: "-45% 0px -50% 0px", threshold: 0 });
  sections.forEach(function(s){ navObserver.observe(s); });

  /* ---------------------------------------------------------
     6. Scroll reveal (single restrained treatment)
     --------------------------------------------------------- */
  const revealObserver = new IntersectionObserver(function(entries){
    entries.forEach(function(entry){
      if(entry.isIntersecting){
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  document.querySelectorAll(".reveal").forEach(function(el){ revealObserver.observe(el); });

  /* ---------------------------------------------------------
     7. Project detail modal (click any project card)
     --------------------------------------------------------- */
  const lightbox = document.getElementById("lightbox");
  const lightboxClose = document.getElementById("lightboxClose");
  const pmImg1 = document.getElementById("pmImg1");
  const pmOrg = document.getElementById("pmOrg");
  const pmTitle = document.getElementById("pmTitle");
  const pmText = document.getElementById("pmText");
  const pmTags = document.getElementById("pmTags");
  let lastFocusedCard = null;

  function openProjectModal(card){
    const dict = translations[state.lang] || translations.id;
    const org = card.getAttribute("data-org");
    const title = dict[card.getAttribute("data-title-key")] || "";
    const text = dict[card.getAttribute("data-text-key")] || "";
    const tags = (card.getAttribute("data-tags") || "").split(",").filter(Boolean);
    const detailImg = card.getAttribute("data-detail-img");
    const cardImg = card.querySelector("img");

    pmOrg.textContent = org;
    pmTitle.textContent = title;
    pmText.textContent = text;
    pmImg1.src = detailImg;
    pmImg1.alt = cardImg ? cardImg.alt : title;
    pmTags.innerHTML = tags.map(function(t){ return '<span class="tag">' + t + '</span>'; }).join("");

    lastFocusedCard = card;
    lightbox.classList.add("is-open");
    lightboxClose.focus();
  }
  function closeLightbox(){
    lightbox.classList.remove("is-open");
    pmImg1.src = "";
    if(lastFocusedCard) lastFocusedCard.focus();
  }
  document.querySelectorAll(".project-card").forEach(function(card){
    card.addEventListener("click", function(){ openProjectModal(card); });
  });
  lightboxClose.addEventListener("click", closeLightbox);
  lightbox.addEventListener("click", function(e){ if(e.target === lightbox) closeLightbox(); });
  document.addEventListener("keydown", function(e){ if(e.key === "Escape") closeLightbox(); });

  /* ---------------------------------------------------------
     8. Copy-to-clipboard buttons (contact section)
     --------------------------------------------------------- */
  document.querySelectorAll(".copy-btn").forEach(function(btn){
    const originalKey = "contact.copy";
    btn.addEventListener("click", function(){
      const value = btn.getAttribute("data-copy");
      navigator.clipboard.writeText(value).then(function(){
        const dict = translations[state.lang] || translations.id;
        btn.textContent = dict["contact.copied"] || "Copied";
        setTimeout(function(){
          btn.textContent = dict[originalKey] || "Copy";
        }, 1600);
      });
    });
  });

  /* ---------------------------------------------------------
     9. Footer year
     --------------------------------------------------------- */
  function stampYear(){
    const y = document.getElementById("year");
    if(y) y.textContent = new Date().getFullYear();
  }

  /* ---------------------------------------------------------
     Init
     --------------------------------------------------------- */
  applyLanguage(state.lang);
})();
