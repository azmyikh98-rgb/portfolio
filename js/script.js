  // ---- i18n translations ----
  const translations = {
    en: {
      nav: { work: "Work", about: "About", contact: "Contact" },
      hero: {
        kicker: "UI/UX Designer — Malang, Indonesia",
        line1: "Hi, I'm",
        line2: "Muhammad Azmy",
        line3: "Ikhwan.",
        sub: "4+ years creating digital solutions through UI/UX design, from exploring user needs to delivering functional, build-ready designs.",
        cta1: "View my work",
        cta2: "Get in touch",
        scroll: "Scroll"
      },
      work: {
        heading: "Selected work",
        desc: "Six case studies across manufacturing, mobility, industrial and digital banking. Click a project to expand.",
        role: "UI/UX Designer",
        now: "Now"
      },
      about: {
        heading: "About",
        p1: "I'm a UI/UX designer based in Malang, Indonesia, working at the intersection of enterprise systems, industrial operations and digital banking. Since 2023 I've been at PT Lanius Inovasi Indonesia, designing systems that help manufacturing and mobility teams manage daily operations — from gate access to production tracking.",
        p2: "Before that, I spent over a year at PT Infosys Solusi Terpadu designing digital banking products for Bank BTN, including internet banking and mobile banking apps. Across both, my process starts with the system, not the screen — understanding how information actually moves through a business before deciding how it should look.",
        eduLabel: "Education",
        eduValue: "Universitas Teknologi Yogyakarta — B.S. in Informatics (2016–2021)",
        skillsHeading: "Skills",
        toolsHeading: "Tools"
      },
      skills: {
        d1: "Research through to validated user flows",
        d2: "Interfaces for enterprise and mobile apps",
        d3: "Structuring flows before visual design",
        d4: "Interactive prototypes for concept validation",
        d5: "Atomic design for consistency at scale",
        toolsName: "Tools"
      },
      contact: {
        heading: "Have a project in mind?",
        cta: "Let's talk →"
      },
      cv: {
        title: "CV Preview",
        download: "Download"
      }
    },
    id: {
      nav: { work: "Karya", about: "Tentang", contact: "Kontak" },
      hero: {
        kicker: "Desainer UI/UX — Malang, Indonesia",
        line1: "Hai, saya",
        line2: "Muhammad Azmy",
        line3: "Ikhwan.",
        sub: "Pengalaman 4+ tahun menciptakan solusi digital melalui desain UI/UX, mulai dari menggali kebutuhan pengguna hingga menghasilkan desain fungsional yang siap dibangun.",
        cta1: "Lihat karya saya",
        cta2: "Hubungi saya",
        scroll: "Gulir"
      },
      work: {
        heading: "Karya Pilihan",
        desc: "Enam studi kasus di bidang manufaktur, mobilitas, industri, dan perbankan digital. Klik salah satu proyek untuk melihat detailnya.",
        role: "Desainer UI/UX",
        now: "Sekarang"
      },
      about: {
        heading: "Tentang Saya",
        p1: "Saya seorang desainer UI/UX yang berbasis di Malang, Indonesia, bekerja di persimpangan sistem enterprise, operasional industri, dan perbankan digital. Sejak 2023 saya bergabung dengan PT Lanius Inovasi Indonesia, merancang sistem yang membantu tim manufaktur dan mobilitas mengelola operasional harian — mulai dari akses gerbang hingga pelacakan produksi.",
        p2: "Sebelumnya, saya menghabiskan lebih dari satu tahun di PT Infosys Solusi Terpadu merancang produk perbankan digital untuk Bank BTN, termasuk aplikasi internet banking dan mobile banking. Di keduanya, proses saya selalu dimulai dari sistem, bukan dari tampilan — memahami bagaimana informasi benar-benar mengalir dalam sebuah bisnis sebelum menentukan bagaimana seharusnya tampil.",
        eduLabel: "Pendidikan",
        eduValue: "Universitas Teknologi Yogyakarta — S1 Informatika (2016–2021)",
        skillsHeading: "Skills",
        toolsHeading: "Tools"
      },
      skills: {
        d1: "Riset hingga alur pengguna yang tervalidasi",
        d2: "Antarmuka untuk aplikasi enterprise dan mobile",
        d3: "Menyusun alur sebelum masuk ke desain visual",
        d4: "Prototipe interaktif untuk validasi konsep",
        d5: "Atomic design untuk konsistensi dalam skala besar",
        toolsName: "Alat"
      },
      contact: {
        heading: "Punya proyek yang ingin didiskusikan?",
        cta: "Ayo ngobrol →"
      },
      cv: {
        title: "Pratinjau CV",
        download: "Unduh"
      }
    }
  };

  function getPath(obj, path){
    return path.split('.').reduce((o, k) => (o ? o[k] : undefined), obj);
  }

  let currentLang = localStorage.getItem('site-lang') || 'en';

  function applyLanguage(lang){
    currentLang = lang;
    document.documentElement.lang = lang;
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const val = getPath(translations[lang], el.getAttribute('data-i18n'));
      if (val !== undefined) el.textContent = val;
    });
    document.querySelectorAll('.lang-opt').forEach(el => {
      el.classList.toggle('active', el.getAttribute('data-lang') === lang);
    });
    renderWork(lang);
    if (typeof renderModuleModal === 'function') renderModuleModal();
    try { localStorage.setItem('site-lang', lang); } catch (e) {}
  }

  const langToggle = document.getElementById('langToggle');
  langToggle.addEventListener('click', () => {
    applyLanguage(currentLang === 'en' ? 'id' : 'en');
  });

  // ---- Mobile nav toggle ----
  const navToggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');
  navToggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    navToggle.classList.toggle('open', isOpen);
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });
  navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    navLinks.classList.remove('open');
    navToggle.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
  }));

  // ---- Work data — sourced from CV ----
  function icon(name){
    const icons = {
      alert: '<svg viewBox="0 0 24 24" fill="none" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 9v4"/><path d="M12 17h.01"/><path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0Z"/></svg>',
      route: '<svg viewBox="0 0 24 24" fill="none" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><circle cx="6" cy="19" r="2"/><circle cx="18" cy="5" r="2"/><path d="M18 7v3a4 4 0 0 1-4 4H8a4 4 0 0 0-4 4"/></svg>'
    };
    return icons[name] || icons.route;
  }

  const moduleDetails = {
    'MES': {
      title: 'MES — Manufacturing Execution System',
      desc: {
        en: "The MES module gives ALVA's production floor a single source of truth for what's being built and how it's performing. Production Planning schedules batches through a Kanban-style flow — Draft, Queue, On Going, Pause, Done — so supervisors always know what's next on the line. One Point Lesson keeps quality standards visible at the station, pairing a short instruction with side-by-side \"Not Ok / Ok\" reference photos operators can check before assembling a part. And the realtime line detail view (EMI-TV) surfaces OEE, availability, performance and quality live, with an hourly target-vs-actual chart so issues surface long before end of shift.",
        id: "Modul MES memberi lini produksi ALVA satu sumber kebenaran soal apa yang sedang dikerjakan dan seberapa baik performanya. Production Planning menjadwalkan batch lewat alur ala Kanban — Draft, Queue, On Going, Pause, Done — supaya supervisor selalu tahu urutan kerja berikutnya. One Point Lesson menjaga standar kualitas tetap terlihat di tiap stasiun kerja, memasangkan instruksi singkat dengan foto referensi \"Not Ok / Ok\" berdampingan yang bisa dicek operator sebelum merakit komponen. Dan tampilan detail lini realtime (EMI-TV) menampilkan OEE, availability, performance, dan quality secara langsung, lengkap dengan grafik target-vs-aktual per jam supaya masalah terlihat jauh sebelum akhir shift."
      },
      images: [
        {
          src: 'assets/images/modules/mes-1.jpg',
          caption: { en: 'Batch scheduling with a Kanban-style production flow', id: 'Penjadwalan batch dengan alur produksi ala Kanban' }
        },
        {
          src: 'assets/images/modules/mes-2.jpg',
          caption: { en: 'Station-level quality reference with Not Ok / Ok comparisons', id: 'Referensi kualitas di level stasiun dengan perbandingan Not Ok / Ok' }
        },
        {
          src: 'assets/images/modules/mes-3.jpg',
          caption: { en: 'Realtime line monitoring — OEE, availability, performance and quality', id: 'Monitoring lini realtime — OEE, availability, performance, dan quality' }
        }
      ]
    }
    ,
    "PRTS": {
      title: "PRTS — Performance Reporting & Tracking System",
      desc: {
        en: "Comprehensive enterprise dashboard system featuring multi-tab analytics interface with performance metrics, real-time data visualization, and issue tracking. The system provides administrators with actionable insights through portal analytics, weekly summaries, and detailed issue management.",
        id: "Sistem dashboard enterprise komprehensif dengan antarmuka analitik multi-tab yang menampilkan metrik performa, visualisasi data real-time, dan pelacakan masalah. Sistem ini memberikan admin wawasan yang dapat ditindaklanjuti melalui analitik portal, ringkasan mingguan, dan manajemen masalah yang detail."
      },
      images: [
        { 
          src: "assets/images/modules/prts-1.png",
          caption: { en: "Portal Tab - Card-based analytics grid layout", id: "Tab Portal - Tata letak grid analitik berbasis kartu" } 
        },
        { 
          src: "assets/images/modules/prts-2.png",
          caption: { en: "Weekly Summary - Data visualization with charts and KPI cards", id: "Ringkasan Mingguan - Visualisasi data dengan chart dan kartu KPI" } 
        },
        { 
          src: "assets/images/modules/prts-3.png",
          caption: { en: "Issue & Action Plan - Table with status tracking and filtering", id: "Rencana Masalah & Tindakan - Tabel dengan pelacakan status dan penyaringan" } 
        }
      ]
    }
    ,
    "Traceability": {
      title: "Traceability System",
      desc: {
        en: "The Traceability module gives ALVA end-to-end visibility from finished product down to the smallest sub-part. A hierarchical dashboard breaks every product family into SKU variants, components, parts and sub-parts, with a treemap view and a live pie chart showing how much material has been assigned across the line. A breakdown-defect screen lets QC pick any product family and drill into its components to see where issues originate, while a quality-status board tracks every unit through QC Pass, Reject, Repairing and Pass Repaired so nothing slips through without a clear, traceable history.",
        id: "Modul Traceability memberi ALVA visibilitas menyeluruh dari produk jadi hingga ke sub-part terkecil. Dasbor hierarkis memecah setiap product family menjadi varian SKU, component, part, dan sub-part, lengkap dengan tampilan treemap dan pie chart realtime yang menunjukkan seberapa banyak material yang sudah di-assign di lini produksi. Layar breakdown defect memungkinkan tim QC memilih product family lalu masuk ke level komponen untuk melihat sumber masalah, sementara papan status kualitas melacak setiap unit melalui QC Pass, Reject, Repairing, dan Pass Repaired sehingga tidak ada yang terlewat tanpa riwayat yang jelas dan tertelusur."
      },
      images: [
        {
          src: "assets/images/modules/traceability-1.jpg",
          caption: { en: "Dashboard overview — product family breakdown, material assignment status and product analytics", id: "Ringkasan dasbor — breakdown product family, status assignment material, dan analitik produk" }
        },
        {
          src: "assets/images/modules/traceability-2.jpg",
          caption: { en: "Breakdown Defect — select a product family to drill into its component-level defects", id: "Breakdown Defect — pilih product family untuk menelusuri masalah hingga level komponen" }
        },
        {
          src: "assets/images/modules/traceability-3.jpg",
          caption: { en: "Quality Statuses — tracking units through QC Pass, Reject, Repairing and Pass Repaired", id: "Quality Statuses — melacak unit melalui QC Pass, Reject, Repairing, dan Pass Repaired" }
        }
      ]
    }
    ,
    "CMMS": {
      title: "CMMS — Computerized Maintenance Management System",
      desc: {
        en: "The CMMS module helps Paragon's maintenance team plan, schedule and track equipment work orders end to end. A work order dashboard flags critical, overdue, at-risk and unassigned jobs at a glance, alongside a status donut and a searchable work order list. Supervisors plan technician schedules on a daily Gantt-style calendar per work order, while technicians execute the job step by step on mobile — Pre-Exec, Execution and Post-Exec — uploading required safety documents like a Permit to Work before starting, and checking off maintenance operations and instructions as they go. Any issue raised from the field becomes a ticket that a reviewer can validate or reject, complete with priority, containment action and repair instructions.",
        id: "Modul CMMS membantu tim maintenance Paragon merencanakan, menjadwalkan, dan melacak work order peralatan dari ujung ke ujung. Dashboard work order menampilkan pekerjaan critical, overdue, at risk, dan unassigned sekilas pandang, dilengkapi donut status dan daftar work order yang bisa dicari. Supervisor menjadwalkan teknisi lewat kalender ala Gantt harian per work order, sementara teknisi mengeksekusi pekerjaan langkah demi langkah lewat mobile — Pre-Exec, Execution, dan Post-Exec — mengunggah dokumen keselamatan seperti Permit to Work sebelum mulai bekerja, serta mencentang maintenance operation dan instruksi satu per satu. Setiap masalah yang dilaporkan dari lapangan menjadi tiket yang bisa divalidasi atau ditolak reviewer, lengkap dengan prioritas, containment action, dan instruksi perbaikan."
      },
      images: [
        {
          src: "assets/images/modules/cmms-1.jpg",
          caption: { en: "Work Order dashboard — critical, overdue, at-risk and unassigned conflicts with status overview", id: "Dasbor Work Order — konflik critical, overdue, at risk, dan unassigned lengkap dengan ringkasan status" }
        },
        {
          src: "assets/images/modules/cmms-2.jpg",
          caption: { en: "Work Order detail — daily planning & technician scheduling per operation", id: "Detail Work Order — perencanaan harian & penjadwalan teknisi per operasi" }
        },
        {
          src: "assets/images/modules/cmms-3.jpg",
          caption: { en: "Mobile execution flow — Pre-Exec document upload, Execution checklist and daily progress", id: "Alur eksekusi mobile — unggah dokumen Pre-Exec, checklist Execution, dan progres harian" }
        },
        {
          src: "assets/images/modules/cmms-4.jpg",
          caption: { en: "Issue ticket detail — priority, containment action and validation by the reviewer", id: "Detail issue ticket — prioritas, containment action, dan validasi oleh reviewer" }
        }
      ]
    }
    ,
    "DMS": {
      title: "DMS — Daily Management System",
      desc: {
        en: "The DMS module gives Zekindo's operations team one dashboard for daily sales, production and delivery activity. A sales order dashboard tracks status, order volume and top materials/customers, with a filterable list split into Not on Intacs, Outstanding, Completed and Archive. From there, a delivery plan pulls sales order items and confirms dates across the supply chain — production and delivery. On the shop floor, a Kanban-style work order board moves batches through Material Staging, IPC Adjustment, Approved QC and FG Placed, while the work order detail view shows production requests, formula and stock in one place. Once goods are ready, an inventory transfer flow walks the team from Scheduled through Transport Ready, Stuffing and Delivering to Delivered, with required documents and vehicle photos captured along the way.",
        id: "Modul DMS memberi tim operasional Zekindo satu dasbor untuk aktivitas sales, produksi, dan pengiriman harian. Dasbor sales order melacak status, volume order, serta material/customer teratas, dengan daftar yang bisa difilter menjadi Not on Intacs, Outstanding, Completed, dan Archive. Dari situ, delivery plan menarik item dari sales order dan mengonfirmasi tanggal di sepanjang supply chain — produksi hingga pengiriman. Di lini produksi, papan work order ala Kanban memindahkan batch melalui Material Staging, IPC Adjustment, Approved QC, hingga FG Placed, sementara tampilan detail work order menunjukkan production request, formula, dan stok dalam satu layar. Setelah barang siap, alur inventory transfer memandu tim dari Scheduled, Transport Ready, Stuffing, Delivering, hingga Delivered, lengkap dengan dokumen wajib dan foto kendaraan yang direkam di setiap tahap."
      },
      images: [
        {
          src: "assets/images/modules/dms-1.jpg",
          caption: { en: "Sales Order dashboard — status breakdown, order trend and top materials/customers", id: "Dasbor Sales Order — breakdown status, tren order, dan material/customer teratas" }
        },
        {
          src: "assets/images/modules/dms-2.jpg",
          caption: { en: "Sales Order list — tracked by status: Not on Intacs, Outstanding, Completed and Archive", id: "Daftar Sales Order — dilacak berdasarkan status: Not on Intacs, Outstanding, Completed, dan Archive" }
        },
        {
          src: "assets/images/modules/dms-3.jpg",
          caption: { en: "Manage Delivery Plan — sales order details, item list and supply-chain date confirmation", id: "Manage Delivery Plan — detail sales order, daftar item, dan konfirmasi tanggal supply chain" }
        },
        {
          src: "assets/images/modules/dms-4.jpg",
          caption: { en: "Work Order board — from Material Staging and IPC Adjustment to Approved QC and FG Placed", id: "Papan Work Order — dari Material Staging dan IPC Adjustment hingga Approved QC dan FG Placed" }
        },
        {
          src: "assets/images/modules/dms-5.jpg",
          caption: { en: "Detail Work Order — production information, request list and stock", id: "Detail Work Order — informasi produksi, daftar request, dan stok" }
        },
        {
          src: "assets/images/modules/dms-6.jpg",
          caption: { en: "Manage Inventory Transfer — step-by-step delivery from Scheduled to Delivered, with document checklist", id: "Manage Inventory Transfer — pengiriman bertahap dari Scheduled hingga Delivered, lengkap dengan checklist dokumen" }
        }
      ]
    }
    ,
    "Gate Pass": {
      title: "Gate Pass Management",
      desc: {
        en: "The Gate Pass module gives Panasonic's security and admin teams full control over item and personnel access. An analytical dashboard tracks approvals, rejections and verifications alongside weekly inbound/outbound trends and the average time each gate pass spends in review, approval and verification. Admins manage every gate pass — general, hazardous and waste — from a filterable, exportable list showing its full status history. At the gate, security scans a QR code or enters the gate pass code to pull up the full detail — items, quantities, approver and submission history — before verifying or rejecting entry.",
        id: "Modul Gate Pass memberi tim security dan admin Panasonic kendali penuh atas akses barang dan personel. Dasbor analitik melacak approval, rejection, dan verifikasi, dilengkapi tren inbound/outbound mingguan serta rata-rata waktu tiap gate pass berada di tahap review, approval, dan verifikasi. Admin mengelola setiap gate pass — general, hazardous, dan waste — lewat daftar yang bisa difilter dan diekspor, lengkap dengan riwayat statusnya. Di gerbang, security memindai kode QR atau memasukkan kode gate pass untuk menampilkan detail lengkap — item, jumlah, approver, dan riwayat submission — sebelum memverifikasi atau menolak akses masuk."
      },
      images: [
        {
          src: "assets/images/modules/gate-pass-1.jpg",
          caption: { en: "Analytical dashboard — approval/verification counts, weekly gate pass trend, and average processing time per stage", id: "Dasbor analitik — jumlah approve/verified, tren gate pass mingguan, dan rata-rata waktu proses tiap tahap" }
        },
        {
          src: "assets/images/modules/gate-pass-2.jpg",
          caption: { en: "Gate Pass list — filterable by date, type and status, with export to Excel", id: "Daftar Gate Pass — bisa difilter berdasarkan tanggal, tipe, dan status, lengkap dengan ekspor ke Excel" }
        },
        {
          src: "assets/images/modules/gate-pass-3.jpg",
          caption: { en: "Security verification — scan a QR code or enter the code to review, then approve or reject a gate pass", id: "Verifikasi keamanan — pindai kode QR atau masukkan kode untuk meninjau, lalu menyetujui atau menolak gate pass" }
        }
      ]
    }
    ,
    "DMS-SumberMas": {
      title: "DMS — Daily Management System",
      desc: {
        en: "This DMS implementation for Sumber Mas Autorindo connects directly to Infor, syncing sales order data automatically while still allowing a manual sync when needed. A sales order dashboard tracks every stage — Open, Finish Plan, DO Created, In Process, Close and more — across a searchable, date-filterable list of up to a hundred orders. Drilling into a single order shows its material request line by line with live progress, plus the document checklist (Surat Jalan, Manifest, DN, DT) required to close it out. An Issue Management view rolls sales order status, revenue and the most-ordered materials into one dashboard, letting the team monitor and act on reported issues by department, ownership or approval status.",
        id: "Implementasi DMS untuk Sumber Mas Autorindo ini terhubung langsung ke Infor, menyinkronkan data sales order secara otomatis sekaligus tetap bisa disinkron manual bila diperlukan. Dasbor sales order melacak setiap tahap — Open, Finish Plan, DO Created, In Process, Close, dan lainnya — lewat daftar yang bisa dicari dan difilter tanggal hingga seratus order. Masuk ke satu order menampilkan material request beserta progres per baris, ditambah checklist dokumen (Surat Jalan, Manifest, DN, DT) yang diperlukan untuk menutupnya. Tampilan Issue Management merangkum status sales order, revenue, dan material yang paling banyak dipesan dalam satu dasbor, sehingga tim bisa memantau dan menindaklanjuti masalah yang dilaporkan berdasarkan departemen, kepemilikan, atau status approval."
      },
      images: [
        {
          src: "assets/images/modules/dms-sumbermas-1.jpg",
          caption: { en: "Sales Order — status overview (Open, Finish Plan, DO Created, In Process, Close) synced automatically with Infor", id: "Sales Order — ringkasan status (Open, Finish Plan, DO Created, In Process, Close) yang tersinkron otomatis dengan Infor" }
        },
        {
          src: "assets/images/modules/dms-sumbermas-2.jpg",
          caption: { en: "Detail Sales Order — order information, material request progress and document checklist", id: "Detail Sales Order — informasi order, progres material request, dan checklist dokumen" }
        },
        {
          src: "assets/images/modules/dms-sumbermas-3.jpg",
          caption: { en: "Issue Management dashboard — sales order status, revenue trend and top ordered materials", id: "Dasbor Issue Management — status sales order, tren revenue, dan material paling banyak dipesan" }
        }
      ]
    }
    ,
    "PRTS-SumberMas": {
      title: "PRTS — Problem Reporting & Tracking System",
      desc: {
        en: "This PRTS implementation for Sumber Mas Autorindo gives the team a full problem-management workflow. A dashboard summarizes total issues, close rate, critical count, status and severity breakdowns, plus trend by department over time. Issue Management lists every ticket — filterable by severity, category and status, viewed as a list or Kanban board — scoped to My Department, My Issue, My Action Plan, My Approval or My Favorite. Opening a ticket in Issue Explorer walks through the full problem-solving cycle: Issue Information, Root Cause Analysis, Corrective action, Preventive action and Closure, so every reported issue is tracked from report to resolution.",
        id: "Implementasi PRTS untuk Sumber Mas Autorindo ini memberi tim alur kerja manajemen masalah yang lengkap. Dashboard merangkum total issue, rasio close, jumlah critical, breakdown status dan tingkat keparahan, ditambah tren per departemen dari waktu ke waktu. Issue Management menampilkan setiap tiket — bisa difilter berdasarkan tingkat keparahan, kategori, dan status, ditampilkan sebagai list atau papan Kanban — dengan cakupan My Department, My Issue, My Action Plan, My Approval, atau My Favorite. Membuka tiket di Issue Explorer memandu seluruh siklus penyelesaian masalah: Issue Information, Root Cause Analysis, Corrective action, Preventive action, hingga Closure, sehingga setiap masalah yang dilaporkan terlacak dari pelaporan sampai penyelesaian."
      },
      images: [
        {
          src: "assets/images/modules/prts-sumbermas-1.jpg",
          caption: { en: "Dashboard — total issues, close rate, status breakdown, severity and trend by department", id: "Dashboard — total issue, rasio close, breakdown status, tingkat keparahan, dan tren per departemen" }
        },
        {
          src: "assets/images/modules/prts-sumbermas-2.jpg",
          caption: { en: "Issue Management — filterable list by severity, category and status, viewable as List or Kanban", id: "Issue Management — daftar yang bisa difilter berdasarkan tingkat keparahan, kategori, dan status, bisa ditampilkan List atau Kanban" }
        },
        {
          src: "assets/images/modules/prts-sumbermas-3.jpg",
          caption: { en: "Issue Explorer — full ticket detail across Issue Information, RCA, Corrective, Preventive and Closure", id: "Issue Explorer — detail tiket lengkap mulai dari Issue Information, RCA, Corrective, Preventive, hingga Closure" }
        }
      ]
    }
  };

  const projects = [
    {
      company: "PT Electra Mobilitas Indonesia (ALVA)",
      modules: ["MES", "PRTS", "Traceability"],
      field: "Electric Mobility",
      period: "PT Lanius Inovasi Indonesia · 2023–{now}",
      desc: { en: "Designed interfaces across ALVA's production operations — from execution tracking and issue resolution to end-to-end traceability — supporting the electric motorbike line from requirement research through interactive prototyping.", id: "Merancang antarmuka untuk operasional produksi ALVA — mulai dari pelacakan eksekusi produksi dan penyelesaian masalah hingga traceability menyeluruh — mendukung lini motor listrik mulai dari riset kebutuhan hingga prototipe interaktif." },
      role: "UI/UX Designer",
      tools: ["Figma", "Prototyping", "User Research"],
      moduleCards: [
        {
          title: "MES — Manufacturing Execution System",
          key: "MES",
          sub: { en: "Realtime line detail dashboard", id: "Dasbor detail lini secara realtime" },
          image: "assets/images/cards/alva-mes.jpg"
        },
        {
          title: "PRTS — Problem Reporting & Tracking System",
          sub: { en: "Issue analysis & tracking dashboard", id: "Dasbor analisis & pelacakan masalah" },
          key: "PRTS",
          image: "assets/images/cards/alva-prts.jpg"
        },
        {
          title: "Traceability System",
          sub: { en: "Product & material tracking dashboard", id: "Dasbor pelacakan produk & material" },
          key: "Traceability",
          image: "assets/images/cards/alva-traceability.jpg"
        }
      ]
    },
    {
      company: "PT Paragon Technology and Innovation",
      modules: ["CMMS"],
      field: "Beauty & Manufacturing",
      period: "PT Lanius Inovasi Indonesia · 2023–{now}",
      desc: { en: "Designed the user experience for a Computerized Maintenance Management System, helping technical teams plan, schedule and track equipment maintenance.", id: "Merancang pengalaman pengguna untuk Computerized Maintenance Management System, membantu tim teknis merencanakan, menjadwalkan, dan memantau pemeliharaan peralatan." },
      role: "UI/UX Designer",
      tools: ["Figma", "Prototyping"],
      moduleCards: [
        {
          title: "CMMS — Computerized Maintenance Management System",
          sub: { en: "Work order & approval center dashboard", id: "Dasbor work order & pusat persetujuan" },
          key: "CMMS",
          image: "assets/images/cards/paragon-cmms.jpg"
        }
      ]
    },
    {
      company: "PT Zekindo Kimiatama Indonesia",
      modules: ["DMS"],
      field: "Chemical Industry",
      period: "PT Lanius Inovasi Indonesia · 2023–{now}",
      desc: { en: "Designed a Daily Management System, shaping dashboard requirements and data visibility for day-to-day operational reporting.", id: "Merancang Daily Management System, membentuk kebutuhan dasbor dan visibilitas data untuk pelaporan operasional harian." },
      role: "UI/UX Designer",
      tools: ["Figma", "Dashboard Design", "Miro"],
      moduleCards: [
        {
          title: "DMS — Daily Management System",
          sub: { en: "Sales order & delivery plan dashboard", id: "Dasbor sales order & rencana pengiriman" },
          key: "DMS",
          image: "assets/images/cards/zekindo-dms.jpg"
        }
      ]
    },
    {
      company: "PT Panasonic Industrial Devices Batam",
      modules: ["Gate Pass"],
      field: "Manufacturing & Security",
      period: "PT Lanius Inovasi Indonesia · 2023–{now}",
      desc: { en: "Designed the user flow and interface for a gate pass access management system, working with the business analyst team to translate operational security requirements into a clear, enterprise-ready interface.", id: "Merancang alur pengguna dan antarmuka untuk sistem manajemen akses gate pass, bekerja sama dengan tim business analyst untuk menerjemahkan kebutuhan keamanan operasional menjadi antarmuka yang jelas dan siap pakai untuk enterprise." },
      role: "UI/UX Designer",
      tools: ["Figma", "Wireframing", "User Research"],
      moduleCards: [
        {
          title: "Gate Pass Management",
          sub: { en: "Gate pass list, verification & dashboard", id: "Daftar gate pass, verifikasi & dasbor" },
          key: "Gate Pass",
          image: "assets/images/cards/panasonic-gate-pass.jpg"
        }
      ]
    },
    {
      company: "PT Sumber Mas Autorindo",
      modules: ["DMS", "PRTS", "Dashboard Monitoring"],
      field: "Automotive",
      period: "PT Lanius Inovasi Indonesia · 2023–{now}",
      desc: { en: "Designed a Daily Management System, a Problem Reporting & Tracking System, and dashboard monitoring tools — giving operational teams a clear view of daily activity and open issues.", id: "Merancang Daily Management System, Problem Reporting & Tracking System, dan alat monitoring dasbor — memberi tim operasional gambaran jelas atas aktivitas harian dan masalah yang masih terbuka." },
      role: "UI/UX Designer",
      tools: ["Figma", "Dashboard Design", "Wireframing"],
      moduleCards: [
        {
          title: "DMS — Daily Management System",
          sub: { en: "Sales order dashboard & detail view", id: "Dasbor sales order & tampilan detail" },
          key: "DMS-SumberMas",
          image: "assets/images/cards/sumbermas-dms.jpg"
        },
        {
          title: "PRTS — Problem Reporting & Tracking System",
          sub: { en: "Issue explorer & dashboard", id: "Eksplorasi & dasbor masalah" },
          key: "PRTS-SumberMas",
          image: "assets/images/cards/sumbermas-prts.jpg"
        },
        {
          title: "Dashboard Monitoring",
          sub: { en: "Production line assignment board", id: "Papan penugasan lini produksi" },
          image: "assets/images/cards/sumbermas-dashboard-monitoring.jpg"
        }
      ]
    },
    {
      company: "PT Bank Tabungan Negara (BTN)",
      modules: ["Digital Banking"],
      field: "Digital Banking",
      period: "PT Infosys Solusi Terpadu · 2021–2023",
      desc: { en: "Designed interfaces across four digital banking products — an internet banking business portal and app, a property mobile app, and a mobile banking app — contributing to an Atomic Design system that kept the experience consistent across all four.", id: "Merancang antarmuka untuk empat produk perbankan digital — portal dan aplikasi internet banking bisnis, aplikasi mobile properti, dan aplikasi mobile banking — turut membangun sistem Atomic Design yang menjaga konsistensi pengalaman di keempatnya." },
      role: "UI/UX Designer",
      tools: ["Figma", "Design System", "Atomic Design"]
    }
  ];

  const list = document.getElementById('work-list');
  function renderWork(lang){
    const t = translations[lang];
    list.innerHTML = '';
    projects.forEach((p, i) => {
      const item = document.createElement('div');
      item.className = 'work-item';
      const periodText = p.period.replace('{now}', t.work.now);
      item.innerHTML = `
        <button class="work-trigger" aria-expanded="false">
          <span class="work-index">0${i+1}</span>
          <span class="work-name-wrap">
            <span class="work-name">${p.company}</span>
            <span class="work-badges">${p.modules.map(m => `<span class="work-badge">${m}</span>`).join('')}</span>
          </span>
          <span class="work-plus"></span>
        </button>
        <div class="work-panel">
          <div class="work-panel-inner">
            <div></div>
            <div class="work-desc">${p.desc[lang]}</div>
            <div class="work-meta">
              <div><span class="k">${t.work.role}</span> — ${periodText}</div>
              <div class="work-tags">${p.tools.map(tag => `<span>${tag}</span>`).join('')}</div>
            </div>
          </div>
          ${p.moduleCards ? `<div class="module-cards">${p.moduleCards.map(mc => `
            <div class="module-card${mc.key && moduleDetails[mc.key] ? ' clickable' : ''}"${mc.key && moduleDetails[mc.key] ? ` data-module="${mc.key}"` : ''}>
              ${mc.image
                ? `<img class="shot" src="${mc.image}" alt="${mc.title} screenshot">`
                : `<div class="placeholder">${icon(mc.icon)}</div>`}
              <div class="body">
                <div class="title">${mc.title}</div>
                <div class="sub">${mc.sub[lang]}</div>
              </div>
            </div>
          `).join('')}</div>` : ''}
        </div>
      `;
      list.appendChild(item);

      const trigger = item.querySelector('.work-trigger');
      const panel = item.querySelector('.work-panel');
      trigger.addEventListener('click', () => {
        const isOpen = item.classList.contains('open');
        document.querySelectorAll('.work-item.open').forEach(o => {
          if (o !== item){
            o.classList.remove('open');
            o.querySelector('.work-panel').style.maxHeight = null;
            o.querySelector('.work-trigger').setAttribute('aria-expanded','false');
          }
        });
        if (isOpen){
          item.classList.remove('open');
          panel.style.maxHeight = null;
          trigger.setAttribute('aria-expanded','false');
        } else {
          item.classList.add('open');
          panel.style.maxHeight = panel.scrollHeight + 'px';
          trigger.setAttribute('aria-expanded','true');
        }
      });
    });
  }

  // ---- Module detail modal ----
  const moduleModal = document.getElementById('moduleModal');
  const moduleModalTitle = moduleModal.querySelector('.module-modal-title');
  const moduleModalDesc = moduleModal.querySelector('.module-modal-desc');
  const moduleModalGallery = moduleModal.querySelector('.module-modal-gallery');
  let openModuleKey = null;

  function renderModuleModal(){
    if (!openModuleKey) return;
    const detail = moduleDetails[openModuleKey];
    if (!detail) return;
    moduleModalTitle.textContent = detail.title;
    moduleModalDesc.textContent = detail.desc[currentLang];
    moduleModalGallery.innerHTML = detail.images.map(img => `
      <figure class="module-modal-shot">
        <img src="${img.src}" alt="${img.caption[currentLang]}">
        <figcaption>${img.caption[currentLang]}</figcaption>
      </figure>
    `).join('');
  }

  function openModuleModal(key){
    if (!moduleDetails[key]) return;
    openModuleKey = key;
    renderModuleModal();
    moduleModal.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeModuleModal(){
    openModuleKey = null;
    moduleModal.classList.remove('open');
    document.body.style.overflow = '';
  }

  list.addEventListener('click', (e) => {
    const trigger = e.target.closest('.module-card.clickable');
    if (!trigger) return;
    e.stopPropagation();
    openModuleModal(trigger.getAttribute('data-module'));
  });

  moduleModal.querySelector('.module-modal-close').addEventListener('click', closeModuleModal);
  moduleModal.querySelector('.module-modal-backdrop').addEventListener('click', closeModuleModal);
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && moduleModal.classList.contains('open')) closeModuleModal();
  });

  // ---- CV preview modal ----
  const cvModal = document.getElementById('cvModal');
  const cvFrame = document.getElementById('cvFrame');
  const cvDownloadBtn = document.getElementById('cvDownloadBtn');
  const resumeBtn = document.getElementById('resumeBtn');
  const cvDataUrl = resumeBtn.getAttribute('href');
  cvDownloadBtn.setAttribute('href', cvDataUrl);

  function openCvModal(){
    if (!cvFrame.getAttribute('src')) cvFrame.setAttribute('src', cvDataUrl);
    cvModal.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeCvModal(){
    cvModal.classList.remove('open');
    document.body.style.overflow = '';
  }

  resumeBtn.addEventListener('click', (e) => {
    e.preventDefault();
    openCvModal();
  });
  cvModal.querySelector('.cv-modal-close').addEventListener('click', closeCvModal);
  cvModal.querySelector('.cv-modal-backdrop').addEventListener('click', closeCvModal);
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && cvModal.classList.contains('open')) closeCvModal();
  });

  applyLanguage(currentLang);

  // ---- Interactive particle network (hero) ----
  const canvas = document.getElementById('network');
  const ctx = canvas.getContext('2d');
  const heroEl = document.querySelector('.hero');
  let W, H, nodes = [];
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function resize(){
    W = canvas.width = heroEl.offsetWidth;
    H = canvas.height = heroEl.offsetHeight;
    const count = Math.min(70, Math.floor((W * H) / 18000));
    nodes = Array.from({length: count}, () => ({
      x: Math.random() * W,
      y: Math.random() * H,
      vx: (Math.random() - 0.5) * 0.25,
      vy: (Math.random() - 0.5) * 0.25,
    }));
  }

  const mouse = { x: -9999, y: -9999 };
  heroEl.addEventListener('mousemove', e => {
    const r = heroEl.getBoundingClientRect();
    mouse.x = e.clientX - r.left;
    mouse.y = e.clientY - r.top;
  });
  heroEl.addEventListener('mouseleave', () => { mouse.x = -9999; mouse.y = -9999; });

  function step(){
    ctx.clearRect(0, 0, W, H);
    const linkDist = 130;
    const mouseDist = 180;

    for (const n of nodes){
      n.x += n.vx; n.y += n.vy;
      if (n.x < 0 || n.x > W) n.vx *= -1;
      if (n.y < 0 || n.y > H) n.vy *= -1;
    }

    for (let i = 0; i < nodes.length; i++){
      for (let j = i + 1; j < nodes.length; j++){
        const a = nodes[i], b = nodes[j];
        const d = Math.hypot(a.x - b.x, a.y - b.y);
        if (d < linkDist){
          const nearMouse = Math.min(
            Math.hypot(a.x - mouse.x, a.y - mouse.y),
            Math.hypot(b.x - mouse.x, b.y - mouse.y)
          );
          const glow = nearMouse < mouseDist ? (1 - nearMouse / mouseDist) : 0;
          const alpha = (1 - d / linkDist) * 0.16 + glow * 0.5;
          ctx.strokeStyle = glow > 0.05
            ? `rgba(124, 92, 255, ${alpha})`
            : `rgba(140, 150, 190, ${alpha})`;
          ctx.lineWidth = glow > 0.3 ? 1.2 : 0.6;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.stroke();
        }
      }
    }

    for (const n of nodes){
      const dMouse = Math.hypot(n.x - mouse.x, n.y - mouse.y);
      const glow = dMouse < mouseDist ? (1 - dMouse / mouseDist) : 0;
      ctx.beginPath();
      ctx.arc(n.x, n.y, 1.4 + glow * 1.8, 0, Math.PI * 2);
      ctx.fillStyle = glow > 0.1 ? `rgba(53, 231, 199, ${0.4 + glow * 0.6})` : 'rgba(160, 168, 200, 0.45)';
      ctx.fill();
    }

    if (!prefersReduced) requestAnimationFrame(step);
  }

  window.addEventListener('resize', resize);
  resize();
  step();
