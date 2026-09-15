# Azmy Ikhwan — Portfolio Website

Portfolio single-page (HTML/CSS/JS murni, tanpa framework, tanpa build step) untuk Azmy Ikhwan, UI/UX Designer. Mendukung toggle bahasa ID/EN, daftar project yang bisa di-expand, dan modal detail module dengan galeri gambar.

## Struktur File

```
.
├── index.html      # seluruh website (HTML + CSS + JS + gambar ter-embed base64)
├── vercel.json     # konfigurasi minimal untuk Vercel (clean URLs)
├── .gitignore
└── README.md
```

Karena ini website statis murni, **tidak ada proses build**. Semua gambar sudah di-encode langsung ke dalam `index.html` (base64), jadi tidak ada folder `assets/` terpisah — cukup satu file HTML yang bisa langsung dibuka di browser.

> **Catatan ukuran file:** `index.html` berukuran ±9MB karena banyak screenshot produk yang di-embed langsung sebagai base64. Ini aman untuk GitHub (jauh di bawah limit 100MB) dan Vercel (jauh di bawah limit ukuran static asset), tapi kalau nanti ingin dioptimasi lebih lanjut, gambar-gambar itu bisa dipindah ke file terpisah di folder `assets/` dan di-lazy-load. Untuk sekarang, tidak perlu diubah — cukup upload apa adanya.

## Menjalankan di Lokal

Paling gampang: cukup buka `index.html` langsung di browser (double click, atau drag ke tab browser).

Kalau mau lewat local server (opsional, supaya lebih mirip production):

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
git commit -m "Initial commit: portfolio website"
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
5. Klik **Deploy**. Selesai — Vercel akan langsung serve `index.html` sebagai halaman utama.

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

Semua konten (daftar project, deskripsi module, gambar galeri modal) ada di dalam tag `<script>` di `index.html`, pada variabel `translations`, `moduleDetails`, dan `projects`. Edit langsung di situ, lalu commit & push — Vercel akan otomatis re-deploy.
