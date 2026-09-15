# Dokumentasi Project — Portfolio Azmy Ikhwan

Dokumen ini dibuat supaya kerjaan di project ini bisa dilanjutkan di sesi chat baru tanpa kehilangan konteks. **Upload SELURUH FOLDER project ini (atau zip-nya) di awal chat baru** — bukan cuma `index.html` saja, karena sekarang strukturnya sudah dipisah jadi banyak file. Lalu jelaskan apa yang ingin diubah — semua konvensi dan struktur di bawah ini akan jadi acuan.

---

## 1. Apa Project Ini

Portfolio single-page untuk **Azmy Ikhwan (UI/UX Designer)**. HTML/CSS/JS murni (tanpa framework, tanpa build step), **filenya sudah dipisah** jadi `index.html` + `css/style.css` + `js/script.js` + folder `assets/` untuk gambar dan CV PDF. Ada toggle bahasa ID/EN, daftar project yang bisa di-expand, modal detail module dengan galeri gambar, dan modal preview CV.

- **Repo GitHub**: akun `azmyikh98-rgb` (nama repo persis belum dikonfirmasi — cek dari halaman repo)
- **Live URL**: https://portfolio-eta-gilt-35.vercel.app
- **Hosting**: Vercel, auto-deploy setiap `git push` ke branch `main`

> **PENTING — riwayat struktur file:** Project ini AWALNYA satu file `index.html` raksasa (~11MB, semua CSS/JS/gambar/PDF di-embed base64 langsung di dalamnya). Di chat yang lalu, atas permintaan user, file itu **dipecah jadi struktur multi-file** (lihat bagian 2) supaya lebih rapi dan profesional. Kalau ketemu referensi ke "file HTML tunggal" di riwayat chat sebelumnya, itu versi LAMA — struktur yang berlaku SEKARANG adalah yang di bagian 2 di bawah ini.

## 2. Struktur File (BERLAKU SEKARANG — sudah dipisah per jenis)

```
azmy-portfolio/
├── index.html                          # markup halaman saja, tidak ada CSS/JS/base64 inline
├── css/
│   └── style.css                       # seluruh styling
├── js/
│   └── script.js                       # seluruh logic: translations, moduleDetails, projects, modal, animasi canvas, dll
├── assets/
│   ├── images/
│   │   ├── about/
│   │   │   └── profile-photo.jpg
│   │   ├── modules/                    # gambar galeri di dalam moduleDetails (modal detail project)
│   │   │   └── {module-slug}-{index}.jpg|png
│   │   └── cards/                      # thumbnail di moduleCards (card yang muncul saat project di-expand)
│   │       └── {company-slug}-{module-slug}.jpg
│   └── documents/
│       └── Muhammad-Azmy-Ikhwan-CV.pdf
├── vercel.json                         # config minimal: { "cleanUrls": true, "trailingSlash": false }
├── .gitignore
└── README.md                           # instruksi git push & deploy Vercel
```

**Semua path gambar/PDF di dalam `js/script.js` dan `index.html` adalah relative path dari root** (bukan lagi base64), contoh: `"assets/images/modules/mes-1.jpg"`, `"assets/documents/Muhammad-Azmy-Ikhwan-CV.pdf"`. Ini berlaku karena browser me-resolve relative path berdasarkan lokasi `index.html`, BUKAN lokasi file `.js`/`.css` yang me-reference-nya — jadi tidak perlu prefix `../` meskipun path itu ditulis di dalam `js/script.js`.

> **PENTING — status repo GitHub belum dikonfirmasi:** Sebelumnya user diberi panduan untuk mengganti seluruh isi repo GitHub lama (yang strukturnya beda total — ada folder `assets/`, `css/`, `js/` versi lama, plus halaman terpisah per-project) dengan versi single-file. **Belum ada konfirmasi apakah proses itu selesai, dan sekarang perlu di-update LAGI dengan struktur split yang baru ini.** Cek dulu isi repo GitHub / live URL sebelum lanjut kerja.

## 3. Struktur Data di Dalam `js/script.js`

Tiga variabel utama, semua ada di file ini (bukan lagi di dalam tag `<script>` di HTML):

### `translations`
Object berisi teks UI dalam bahasa `en` dan `id` (nav, hero, work, about, contact, **cv**, dll). Setiap key top-level ada persis sama di kedua object `en` dan `id` — kalau nambah string UI baru, tambahkan di KEDUA bahasa supaya `applyLanguage()` tidak error/kosong saat toggle.

### `moduleDetails`
Object yang jadi **sumber konten modal detail project**. Key-nya adalah nama module (string), value-nya:
```js
"NamaModule": {
  title: "...",
  desc: { en: "...", id: "..." },
  images: [
    { src: "assets/images/modules/namamodule-1.jpg", caption: { en: "...", id: "..." } },
    // ...
  ]
}
```
**Sebelumnya** `src` berisi base64 (`data:image/jpeg;base64,...`). **Sekarang** `src` berisi relative path ke file di `assets/images/modules/`.

**Key yang sudah ada saat ini** (8 total):
| Key | Dipakai oleh | Prefix file di `assets/images/modules/` |
|---|---|---|
| `MES` | PT Electra Mobilitas Indonesia (ALVA) | `mes-1.jpg` s/d `mes-3.jpg` |
| `PRTS` | PT Electra Mobilitas Indonesia (ALVA) | `prts-1.png` s/d `prts-3.png` (format PNG, bukan JPG) |
| `Traceability` | PT Electra Mobilitas Indonesia (ALVA) | `traceability-1.jpg` s/d `traceability-3.jpg` |
| `CMMS` | PT Paragon Technology and Innovation | `cmms-1.jpg` s/d `cmms-4.jpg` |
| `DMS` | PT Zekindo Kimiatama Indonesia | `dms-1.jpg` s/d `dms-6.jpg` |
| `Gate Pass` | PT Panasonic Industrial Devices Batam | `gate-pass-1.jpg` s/d `gate-pass-3.jpg` |
| `DMS-SumberMas` | PT Sumber Mas Autorindo (dedicated) | `dms-sumbermas-1.jpg` s/d `dms-sumbermas-3.jpg` |
| `PRTS-SumberMas` | PT Sumber Mas Autorindo (dedicated) | `prts-sumbermas-1.jpg` s/d `prts-sumbermas-3.jpg` |

### `projects`
Array of object, satu object per perusahaan/client:
```js
{
  company: "...",
  modules: ["ModuleName", ...],      // badge yang tampil di header (TIDAK clickable)
  field: "...",
  period: "...",
  desc: { en: "...", id: "..." },
  role: "...",
  tools: ["...", ...],
  moduleCards: [                      // opsional — card yang muncul saat project di-expand
    {
      title: "...",
      sub: { en: "...", id: "..." },
      key: "NamaKeyModuleDetails",    // WAJIB diisi kalau mau card ini clickable
      image: "assets/images/cards/company-module.jpg",  // opsional — relative path thumbnail
      icon: "chart" | "list" | ...    // fallback kalau tidak ada `image`
    },
    ...
  ]
}
```

**Daftar project saat ini** (urutan sesuai array, PT Alva/Enterprise Analytics sudah DIHAPUS total dari sini):
1. PT Electra Mobilitas Indonesia (ALVA) — modules: MES, PRTS, Traceability → thumbnail: `assets/images/cards/alva-mes.jpg`, `alva-prts.jpg`, `alva-traceability.jpg`
2. PT Paragon Technology and Innovation — modules: CMMS → `assets/images/cards/paragon-cmms.jpg`
3. PT Zekindo Kimiatama Indonesia — modules: DMS → `assets/images/cards/zekindo-dms.jpg`
4. PT Panasonic Industrial Devices Batam — modules: Gate Pass → `assets/images/cards/panasonic-gate-pass.jpg`
5. PT Sumber Mas Autorindo — modules: DMS, PRTS, Dashboard Monitoring → `sumbermas-dms.jpg`, `sumbermas-prts.jpg`, `sumbermas-dashboard-monitoring.jpg` (module terakhir **tidak** clickable, belum ada moduleDetails-nya)
6. PT Bank Tabungan Negara (BTN) — modules: Digital Banking (tidak punya `moduleCards` sama sekali, expand hanya tampil desc + meta)

## 4. Struktur Halaman & Nav (urutan section di `index.html`)

```
<head>                          — <link rel="stylesheet" href="css/style.css">
<nav>                            — logo, nav-links (About, Work, Contact, Download CV), lang toggle, hamburger (mobile)
<section class="hero">
<section id="about">             — di atas section "work"
<section id="work">              — "Selected work" — daftar project, di-render JS dari array `projects`
<section id="contact">           — form kontak + ikon Instagram/Dribbble
<footer>
<div class="module-modal">       — modal detail project (dipakai moduleDetails)
<div class="cv-modal">           — modal preview CV
<script src="js/script.js">      — di akhir body
```

**Nav link order**: About → Work → Contact → Download CV (menyatu di dalam `.nav-links`, disamakan dengan urutan section). Kalau urutan section diubah lagi, sebaiknya urutan nav-links ikut disesuaikan.

## 5. Konvensi Penting yang HARUS Diikuti

1. **Satu `moduleDetails` key = satu konten modal.** Kalau dua project punya module dengan nama sama tapi kontennya beda per project — **jangan pakai key yang sama**. Buat key baru yang unik, format: `{NamaModule}-{NamaSingkatClient}` (contoh: `"DMS-SumberMas"`). Card `key` di `moduleCards` di-set ke key baru itu, bukan ke nama module generiknya.
2. **Badge module** (pill kecil di sebelah nama company, sumber dari array `modules`) **sengaja dibuat tidak bisa diklik** — permintaan eksplisit user, jangan dikembalikan clickable kecuali diminta ulang.
3. **Card module** (di dalam panel yang muncul saat project di-expand) **clickable** kalau punya property `key` yang match dengan salah satu key di `moduleDetails`. Tanpa `key`, card tetap tampil tapi tidak bisa diklik.
4. **Menambah gambar baru** (module baru atau card baru):
   1. Resize ke lebar **1100px** (tinggi menyesuaikan aspect ratio asli), compress **JPEG quality ~76-78**:
      ```python
      from PIL import Image
      im = Image.open(path).convert("RGB")
      target_w = 1100
      w, h = im.size
      new_h = int(h * target_w / w)
      im.resize((target_w, new_h), Image.LANCZOS).save(out_path, "JPEG", quality=77, optimize=True)
      ```
   2. **Simpan sebagai file JPG biasa** ke `assets/images/modules/` (untuk galeri modal) atau `assets/images/cards/` (untuk thumbnail card) — **JANGAN di-base64 / di-embed lagi**, itu konvensi versi lama sebelum split.
   3. Pakai naming pattern yang konsisten: `{module-slug}-{index}.jpg` untuk galeri modal, `{company-slug}-{module-slug}.jpg` untuk card thumbnail (lihat tabel di bagian 3 untuk slug yang sudah dipakai).
   4. Rujuk file itu di `js/script.js` sebagai relative path string, contoh: `src: "assets/images/modules/cmms-5.jpg"`.
5. **Urutan gambar di galeri modal** selalu disusun mengikuti alur kerja/narasi produk (misalnya: dashboard overview → list → detail → aksi), bukan sekadar urutan upload.
6. **Semua ikon UI (nav, download, close modal, social link, dsb.) pakai gaya outline/stroke** konsisten: `viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6-1.8" stroke-linecap="round" stroke-linejoin="round"`, supaya warnanya otomatis ikut `color`/hover parent lewat `currentColor`. Ikon-ikon ini ditulis inline di `index.html` (bukan file gambar terpisah). Jangan pakai ikon filled/brand-color kecuali diminta.
7. **Asset PDF baru (ganti CV, dsb)**: cukup replace file di `assets/documents/`, atau tambah file baru lalu update `href` di `index.html` (elemen `#resumeBtn`). Kalau file besar, optimasi dulu (CV pernah dioptimasi pakai `qpdf --compress-streams=y --object-streams=generate --recompress-flate --compression-level=9`). **Tidak perlu base64 lagi** — taruh sebagai file biasa di `assets/documents/` dan rujuk sebagai relative path.
8. **Objek di dalam array `projects` dan `moduleDetails` dipisah dengan koma di barisnya sendiri** (gaya: `}\n    ,\n    {`), bukan koma di akhir baris `}`. Ikuti gaya yang sudah ada saat menambah entry baru.
9. **Setiap kali selesai edit `js/script.js`, validasi sintaks** sebelum dianggap final (sekarang lebih simpel karena sudah file `.js` murni, tidak perlu ekstrak dari HTML lagi):
   ```bash
   node --check js/script.js && echo "SYNTAX OK"
   ```
10. **File-file sekarang berukuran kecil dan mudah dibaca langsung** (`index.html` ~10KB, `css/style.css` ~22KB, `js/script.js` ~40KB) — beda dari versi lama yang satu file 11MB. Aman pakai `cat`, `grep`, `view` langsung ke file-file ini tanpa risiko output raksasa. **Kekhawatiran lama soal base64 raksasa di terminal sudah tidak relevan lagi** untuk `index.html`/`css`/`js` — tapi tetap jangan `cat` isi file di `assets/images/` atau `assets/documents/` (itu binary, bukan teks).
11. **Total ukuran project ~8MB** (vs ~11MB versi single-file lama) karena base64 punya overhead ~33% dibanding file binary asli. Aman untuk GitHub (limit 100MB) dan Vercel.

## 6. Sistem Nav & Modal CV Preview

- Tombol **"Download CV"** (`<a id="resumeBtn" class="resume-btn">` di `index.html`) ada **di dalam** `.nav-links`, item terakhir setelah Contact. Style-nya ikut `.nav-links a` (teks polos), dan di mode tablet/mobile otomatis ikut masuk ke dropdown hamburger menu.
- **Klik "Download CV" TIDAK langsung download.** `href` anchor ini berisi relative path ke `assets/documents/Muhammad-Azmy-Ikhwan-CV.pdf` (dipakai sebagai sumber data), atribut `download` sudah dihapus dan klik-nya di-`preventDefault()` lewat JS di `js/script.js` — yang jalan adalah `openCvModal()`.
- **Modal preview CV** (`<div class="cv-modal" id="cvModal">` di `index.html`): isinya `<iframe id="cvFrame">` yang menampilkan PDF (src di-set ke path yang sama saat modal pertama dibuka). Tombol **Download** terpisah di dalam modal (`<a id="cvDownloadBtn" download="Muhammad-Azmy-Ikhwan-CV.pdf">`) yang `href`-nya di-set dari `resumeBtn.getAttribute('href')` lewat JS saat load.
- Modal ditutup lewat tombol close (✕), klik backdrop, atau tombol Escape (pola JS sama dengan `module-modal`: `openCvModal`/`closeCvModal` mirroring `openModuleModal`/`closeModuleModal`).
- Translation: `translations.en.cv` dan `translations.id.cv` (masing-masing `title` dan `download`), ada di `js/script.js`.
- **Belum sempat dites**: rendering PDF lewat `<iframe>` di Safari (desktop/iOS) — ada kemungkinan Safari memblokir/langsung download alih-alih preview inline.

## 7. Riwayat Perubahan (ringkas, urut waktu)

1. Card module **PRTS** (2 lokasi) → `key: "PRTS"` supaya clickable.
2. Modul **Traceability** (ALVA): `moduleDetails.Traceability` baru (3 gambar) + `key`.
3. Modul **CMMS** (Paragon): `moduleDetails.CMMS` baru (4 gambar) + `key`.
4. Modul **DMS** (Zekindo): `moduleDetails.DMS` baru (6 gambar) + `key` khusus card Zekindo.
5. Modul **Gate Pass** (Panasonic): `moduleDetails["Gate Pass"]` baru (3 gambar) + `key`.
6. Modul **DMS-SumberMas**: key baru karena `"DMS"` sudah dipakai Zekindo (3 gambar).
7. Modul **PRTS-SumberMas**: key baru karena beda konten dari PRTS generik ALVA (3 gambar).
8. **Project "PT Alva" (Enterprise Analytics)** dihapus total dari array `projects`.
9. **Badge module** di header tiap project dimatikan permanen jadi tidak clickable.
10. Paket deployment single-file pertama dibuat (`index.html` + `README.md` + `vercel.json` + `.gitignore`).
11. Panduan git CLI/GitHub web UI diberikan untuk mengganti isi repo lama — **status belum dikonfirmasi**.
12. Tombol **"Download CV"** pertama ditambahkan (versi awal: pill violet + ikon + label, base64 embed).
13. Style tombol Download CV diubah jadi teks polos, disamakan dengan Work/About/Contact.
14. Section **About dipindah ke atas Selected Work**, urutan `.nav-links` disesuaikan.
15. **Download CV dipindahkan ke dalam `.nav-links`** untuk merapikan spacing header & otomatis masuk menu hamburger di mobile/tablet.
16. **Modal preview CV** dibuat (`#cvModal`) — klik Download CV membuka preview dulu, download terpisah di dalam modal.
17. Link **Instagram & Dribbble**: teks diganti jadi ikon SVG outline.
18. **File dipecah dari 1 file HTML (~11MB, semua base64) jadi struktur multi-file**: `index.html` + `css/style.css` + `js/script.js` + `assets/images/{about,modules,cards}/` + `assets/documents/`. Semua 39 data URI (1 PDF + 38 gambar) di-decode balik jadi file binary asli dengan nama deskriptif, lalu semua reference-nya di kode diganti dari base64 jadi relative path. Total ukuran turun dari ~11.2MB ke ~8MB. `README.md` & dokumen ini diperbarui total untuk struktur baru.

## 8. Yang Masih Perlu Dicek / Belum Selesai

- [ ] Konfirmasi status repo GitHub — apakah sudah pernah di-push versi single-file lama, dan sekarang perlu di-update LAGI dengan struktur split yang baru ini.
- [ ] Konfirmasi deployment terbaru di Vercel sudah live dan sesuai ekspektasi.
- [ ] Tes preview PDF di `.cv-modal` pada Safari desktop & iOS.
- [ ] Card **"Dashboard Monitoring"** di project Sumber Mas Autorindo belum punya `moduleDetails`.
- [ ] Project **PT Bank Tabungan Negara (BTN)** belum punya `moduleCards` sama sekali.

## 9. Cara Melanjutkan di Chat Baru

1. Upload **seluruh folder project ini** (atau zip-nya) — bukan cuma satu file, karena sekarang strukturnya sudah dipisah — plus dokumen ini.
2. Jelaskan perubahan yang diinginkan seperti biasa.
3. Claude akan mengikuti konvensi di bagian 5 & 6 secara otomatis kalau dokumen ini sudah dibaca — termasuk cara menambah gambar sebagai file biasa (bukan base64), naming convention, dan validasi sintaks `js/script.js` langsung dengan `node --check`.
