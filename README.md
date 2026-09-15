# Azmy Ikhwan — Portfolio Website

Portfolio single-page untuk Azmy Ikhwan, UI/UX Designer. HTML/CSS/JS murni tanpa framework dan tanpa build step. Mendukung toggle bahasa ID/EN, daftar project yang bisa di-expand, modal detail module dengan galeri gambar, dan modal preview CV.

## Struktur File

```
.
├── index.html                          # markup halaman
├── css/
│   └── style.css                       # semua styling
├── js/
│   └── script.js                       # semua logic (data project, i18n, modal, animasi, dll)
├── assets/
│   ├── images/
│   │   ├── about/                      # foto profil
│   │   ├── modules/                    # galeri gambar tiap modal detail project
│   │   └── cards/                      # thumbnail card di halaman Selected Work
│   └── documents/
│       └── Muhammad-Azmy-Ikhwan-CV.pdf # CV, dipakai di modal preview CV
├── vercel.json                         # konfigurasi minimal untuk Vercel (clean URLs)
└── .gitignore
```

Semua file dirujuk lewat **relative path** dari `index.html` (misalnya `css/style.css`, `assets/images/modules/mes-1.jpg`), jadi struktur folder ini harus tetap dipertahankan apa adanya saat upload — jangan pindahkan file satu-satu secara terpisah.

Karena tidak ada proses build, cukup upload struktur folder ini apa adanya.

## Menjalankan di Lokal

Karena sekarang pakai banyak file terpisah (bukan 1 file HTML lagi), **tidak bisa** langsung dibuka dengan double-click (browser akan memblokir sebagian request `fetch`/relative path karena kebijakan `file://`). Jalankan lewat local server:

```bash
# pakai Python (biasanya sudah ada di macOS/Linux)
python3 -m http.server 3000

# atau pakai Node (kalau sudah install npx)
npx serve .
```

Lalu buka `http://localhost:3000`.

## Deploy ke GitHub

1. Buat repository baru di GitHub (bisa lewat web, tombol **New repository** — jangan centang "Initialize with README" supaya tidak bentrok).
2. Di folder project ini, jalankan:

```bash
git init
git add .
git commit -m "Initial commit: portfolio website (split HTML/CSS/JS/assets)"
git branch -M main
git remote add origin https://github.com/USERNAME/NAMA-REPO.git
git push -u origin main
```

Ganti `USERNAME` dan `NAMA-REPO` sesuai punyamu.

## Deploy ke Vercel

### Opsi A — Lewat Dashboard Vercel (paling gampang)

1. Buka [vercel.com](https://vercel.com) → login (bisa pakai akun GitHub).
2. Klik **Add New... → Project**.
3. Pilih/import repository GitHub yang tadi sudah di-push.
4. Di layar konfigurasi:
   - **Framework Preset**: pilih `Other` (Vercel biasanya otomatis mendeteksi ini sebagai static site).
   - **Build Command**: kosongkan.
   - **Output Directory**: kosongkan / biarkan default (root).
5. Klik **Deploy**. Selesai — Vercel akan langsung serve `index.html` sebagai halaman utama, dan otomatis serve seluruh isi folder `css/`, `js/`, `assets/` apa adanya.

Setiap kali kamu `git push` ke branch `main`, Vercel otomatis re-deploy.

### Opsi B — Lewat Vercel CLI

```bash
npm i -g vercel
vercel login
vercel        # deploy preview
vercel --prod # deploy ke production
```

Ikuti prompt-nya (pilih scope/team, konfirmasi nama project, dsb). Karena tidak ada build step, cukup jawab default di semua pertanyaan setup.

## Update Konten

- **Teks UI** (nav, hero, about, dll dalam 2 bahasa) & **data project/module** (daftar project, deskripsi, path gambar) ada di `js/script.js`, pada variabel `translations`, `moduleDetails`, dan `projects`.
- **Tambah gambar baru**: taruh file gambar di `assets/images/modules/` (untuk galeri modal) atau `assets/images/cards/` (untuk thumbnail card), lalu rujuk path-nya (relatif dari root, misal `"assets/images/modules/nama-file.jpg"`) di `js/script.js`.
- **Ganti CV**: replace file di `assets/documents/Muhammad-Azmy-Ikhwan-CV.pdf` dengan file baru (nama file boleh sama supaya tidak perlu ubah kode).
- Setelah edit, commit & push — Vercel akan otomatis re-deploy.
