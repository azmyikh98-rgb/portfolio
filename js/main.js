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
      "a11y.backToTop":"Kembali ke atas",

      "nav.home":"Beranda","nav.about":"Tentang","nav.experience":"Pengalaman",
      "nav.projects":"Proyek","nav.exploration":"Eksplorasi","nav.skills":"Keahlian","nav.contact":"Kontak",

      "hero.headline":"Muhammad Azmy Ikhwan",
      "hero.lede":"4+ tahun menciptakan solusi digital melalui UI/UX design, dari eksplorasi kebutuhan pengguna hingga menghasilkan desain yang fungsional dan siap dikembangkan.",
      "hero.ctaProjects":"Lihat proyek",
      "hero.ctaContact":"Kontak sekarang",
      "hero.locationVal":"Malang, Indonesia",
      "hero.stat1":"Tahun pengalaman UI/UX",
      "hero.stat2":"Sistem enterprise dirancang",
      "hero.stat3":"Perusahaan & klien",
      "hero.stat4":"Sektor industri",
      "hero.photoAlt":"Foto Muhammad Azmy Ikhwan",

      "about.title":"Tentang saya",
      "about.p1":"Saya UI/UX Designer dengan lebih dari 4 tahun pengalaman merancang antarmuka untuk sistem enterprise, mulai dari lini produksi manufaktur, manajemen perawatan aset, hingga akses keluar-masuk perusahaan. Sebagian besar pekerjaan saya berputar di satu masalah yang sama: mengubah proses operasional yang rumit menjadi antarmuka yang bisa langsung dipahami oleh operator, teknisi, dan manajer di lapangan.",
      "about.p2":"Saya bekerja dekat dengan Business Analyst dan tim developer sejak tahap riset kebutuhan, bukan hanya di tahap visual. Setiap wireframe dan prototype dirancang agar mudah dieksekusi oleh tim engineering tanpa banyak revisi bolak-balik.",
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
      "skills.s7":"Riset Pengguna",
      "skills.group2":"Tools",

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
      "contact.text":"Terbuka untuk peran UI/UX Designer, proyek freelance, maupun diskusi seputar desain sistem enterprise. Hubungi saya lewat email atau media sosial di samping.",
      "contact.ctaEmail":"Kirim email",
      "contact.ctaCv":"Unduh CV",

      "pd.backToProjects":"Kembali ke proyek",
      "pd.moreProjects":"Lihat proyek lainnya",
      "pd.electraMesTitle":"MES — Manufacturing Execution System",
      "pd.electraMesDesc":"MES dirancang untuk memantau proses produksi secara real-time di lini perakitan motor listrik ALVA — mulai dari OEE, target produksi, ketersediaan mesin, hingga performa dan kualitas per stasiun kerja. Operator dan supervisor dapat memantau timeline produksi dan membandingkan target dengan hasil aktual per jam.",
      "pd.electraPrtsTitle":"PRTS — Problem Resolution Tracking System",
      "pd.electraPrtsDesc":"PRTS membantu tim mencatat, mengelompokkan, dan menindaklanjuti setiap masalah produksi yang ditemukan di lini — dari root cause analysis hingga corrective action — lengkap dengan ringkasan performa penyelesaian masalah (7 Diamond) dan analisis tren isu per kategori.",
      "pd.electraTraceTitle":"Traceability System",
      "pd.electraTraceDesc":"Sistem traceability melacak status material dan produk jadi di setiap tahap produksi, memetakan alokasi material per varian produk, serta memberikan gambaran menyeluruh atas seluruh unit yang sedang diproses maupun telah selesai.",
      "pd.paragonCmmsTitle":"CMMS — Computerized Maintenance Management System",
      "pd.paragonCmmsDesc":"CMMS memusatkan pengelolaan work order pemeliharaan — mulai dari pengajuan, persetujuan, hingga pemantauan status pekerjaan yang berisiko, tertunda, maupun selesai. Approval Center memudahkan supervisor menyetujui permintaan cuti maupun pekerjaan maintenance dalam satu tampilan.",
      "pd.zekindoDmsTitle":"DMS — Daily Management System",
      "pd.zekindoDmsDesc":"Daily Management System menampilkan ringkasan sales order, rencana pengiriman, dan transfer inventaris harian dalam satu dashboard, sehingga tim operasional dapat memantau status pesanan dan menyiapkan rencana pengiriman tanpa berpindah aplikasi.",
      "pd.panasonicGpTitle":"Gate Pass Management System",
      "pd.panasonicGpDesc":"Sistem Gate Pass mendigitalisasi proses pengajuan hingga verifikasi akses keluar-masuk barang dan personel — termasuk pemindaian kode QR di titik keamanan dan pencatatan pengembalian barang — untuk menggantikan proses manual berbasis kertas.",
      "pd.sumbermasDmsTitle":"DMS — Daily Management System",
      "pd.sumbermasDmsDesc":"DMS di PT Sumber Mas Autorindo memberikan ringkasan kinerja penjualan harian — total revenue, jumlah sales order, dan status pesanan — agar tim dapat mengevaluasi capaian operasional secara cepat dan terstruktur.",
      "pd.sumbermasPrtsTitle":"PRTS — Problem Resolution Tracking System",
      "pd.sumbermasPrtsDesc":"PRTS mengelola pelaporan dan penyelesaian isu operasional lintas departemen, lengkap dengan status tiket, tingkat urgensi, dan analisis jumlah isu per departemen untuk membantu prioritas tindak lanjut.",

      "footer.credit":"© <span id=\"year\"></span> Muhammad Azmy Ikhwan."
    },

    en: {
      "meta.desc":"Portfolio of Muhammad Azmy Ikhwan, a UI/UX Designer who builds dashboards and enterprise systems for manufacturing, maintenance, and daily operations.",
      "a11y.skip":"Skip to content",
      "a11y.backToTop":"Back to top",

      "nav.home":"Home","nav.about":"About","nav.experience":"Experience",
      "nav.projects":"Projects","nav.exploration":"Exploration","nav.skills":"Skills","nav.contact":"Contact",

      "hero.headline":"Muhammad Azmy Ikhwan",
      "hero.lede":"4+ years creating digital solutions through UI/UX design, from exploring user needs to delivering functional, build-ready designs.",
      "hero.ctaProjects":"View projects",
      "hero.ctaContact":"Contact now",
      "hero.locationVal":"Malang, Indonesia",
      "hero.stat1":"Years of UI/UX experience",
      "hero.stat2":"Enterprise systems designed",
      "hero.stat3":"Companies & clients",
      "hero.stat4":"Industry sectors",
      "hero.photoAlt":"Photo of Muhammad Azmy Ikhwan",

      "about.title":"About me",
      "about.p1":"I'm a UI/UX Designer with 4+ years of experience designing interfaces for enterprise systems, from manufacturing production lines and asset maintenance to company access control. Most of my work circles one problem: turning complex operational processes into interfaces that operators, technicians, and floor managers can understand at a glance.",
      "about.p2":"I work closely with Business Analysts and developers from the research stage onward, not just at the visual stage. Every wireframe and prototype is built so engineering teams can implement it without endless back-and-forth revisions.",
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
      "skills.s7":"User Research",
      "skills.group2":"Tools",

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
      "contact.text":"Open to UI/UX Designer roles, freelance projects, and conversations about enterprise system design. Reach me by email or the social links alongside.",
      "contact.ctaEmail":"Send an email",
      "contact.ctaCv":"Download CV",

      "pd.backToProjects":"Back to projects",
      "pd.moreProjects":"View more projects",
      "pd.electraMesTitle":"MES — Manufacturing Execution System",
      "pd.electraMesDesc":"The MES monitors ALVA's electric-motorcycle assembly line in real time — tracking OEE, production targets, machine availability, and per-station performance and quality. Operators and supervisors can follow the production timeline and compare hourly targets against actual output.",
      "pd.electraPrtsTitle":"PRTS — Problem Resolution Tracking System",
      "pd.electraPrtsDesc":"PRTS lets the team log, categorize, and follow up on every production issue found on the line — from root-cause analysis to corrective action — complete with a resolution-performance summary (7 Diamond) and issue-trend analysis by category.",
      "pd.electraTraceTitle":"Traceability System",
      "pd.electraTraceDesc":"The traceability system tracks material and finished-product status at every production stage, maps material allocation per product variant, and gives a complete overview of units in progress and completed.",
      "pd.paragonCmmsTitle":"CMMS — Computerized Maintenance Management System",
      "pd.paragonCmmsDesc":"The CMMS centralizes maintenance work-order management — from submission and approval to tracking at-risk, overdue, and completed work. The Approval Center lets supervisors approve leave and maintenance requests from a single view.",
      "pd.zekindoDmsTitle":"DMS — Daily Management System",
      "pd.zekindoDmsDesc":"The Daily Management System shows a daily summary of sales orders, delivery plans, and inventory transfers in one dashboard, so the operations team can track order status and prepare delivery plans without switching apps.",
      "pd.panasonicGpTitle":"Gate Pass Management System",
      "pd.panasonicGpDesc":"The Gate Pass system digitizes the process from submission to verification of goods and personnel access — including QR-code scanning at security checkpoints and return logging — replacing the previous paper-based process.",
      "pd.sumbermasDmsTitle":"DMS — Daily Management System",
      "pd.sumbermasDmsDesc":"The DMS at PT Sumber Mas Autorindo provides a daily sales-performance summary — total revenue, order volume, and order status — so the team can evaluate operational results quickly and consistently.",
      "pd.sumbermasPrtsTitle":"PRTS — Problem Resolution Tracking System",
      "pd.sumbermasPrtsDesc":"PRTS manages cross-department issue reporting and resolution, complete with ticket status, severity, and issue-count analysis per department to help prioritize follow-up action.",

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
    document.querySelectorAll("[data-i18n-aria]").forEach(function(el){
      const key = el.getAttribute("data-i18n-aria");
      if(dict[key] !== undefined){ el.setAttribute("aria-label", dict[key]); }
    });

    document.getElementById("langId").classList.toggle("active", lang === "id");
    document.getElementById("langEn").classList.toggle("active", lang === "en");

    document.title = lang === "en"
      ? "Muhammad Azmy Ikhwan — UI/UX Designer"
      : "Muhammad Azmy Ikhwan — UI/UX Designer";

    stampYear();
    localStorage.setItem("azmy-lang", lang);
    state.lang = lang;
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
    .map(function(a){
      const href = a.getAttribute("href");
      if(!href || !href.startsWith("#")) return null;
      try{ return document.querySelector(href); } catch(e){ return null; }
    })
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
     6b. Scroll progress bar + back-to-top
     --------------------------------------------------------- */
  const scrollProgress = document.getElementById("scrollProgress");
  const backToTop = document.getElementById("backToTop");
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  let ticking = false;

  function onScroll(){
    const scrollY = window.scrollY || window.pageYOffset;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const pct = docHeight > 0 ? (scrollY / docHeight) * 100 : 0;
    scrollProgress.style.width = pct + "%";

    backToTop.classList.toggle("is-visible", scrollY > window.innerHeight * 0.7);
    ticking = false;
  }
  window.addEventListener("scroll", function(){
    if(!ticking){
      requestAnimationFrame(onScroll);
      ticking = true;
    }
  }, { passive: true });
  onScroll();

  backToTop.addEventListener("click", function(){
    window.scrollTo({ top: 0, behavior: prefersReducedMotion ? "auto" : "smooth" });
  });

  /* ---------------------------------------------------------
     7. Module image carousels (project detail pages)
     --------------------------------------------------------- */
  document.querySelectorAll("[data-carousel]").forEach(function(car){
    const track = car.querySelector(".carousel-track");
    if(!track) return;
    const slides = Array.from(track.children);
    if(slides.length <= 1) return;
    const prevBtn = car.querySelector(".carousel-btn.prev");
    const nextBtn = car.querySelector(".carousel-btn.next");
    const dots = Array.from(car.querySelectorAll(".carousel-dot"));
    let idx = 0;
    function update(){
      track.style.transform = "translateX(-" + (idx * 100) + "%)";
      dots.forEach(function(d, i){ d.classList.toggle("active", i === idx); });
    }
    if(prevBtn) prevBtn.addEventListener("click", function(){ idx = (idx - 1 + slides.length) % slides.length; update(); });
    if(nextBtn) nextBtn.addEventListener("click", function(){ idx = (idx + 1) % slides.length; update(); });
    dots.forEach(function(d, i){ d.addEventListener("click", function(){ idx = i; update(); }); });
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
