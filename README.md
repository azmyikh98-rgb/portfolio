# Muhammad Azmy Ikhwan — Portfolio

Situs portofolio pribadi untuk **Muhammad Azmy Ikhwan**, UI/UX Designer.
Dibangun sebagai HTML/CSS/JS statis murni — tanpa framework, tanpa proses
build — supaya bisa langsung di-deploy ke GitHub Pages maupun Vercel.

## Fitur

- Mode terang & gelap (tersimpan di `localStorage`, mengikuti preferensi
  sistem saat pertama kali dibuka).
- Dwibahasa Indonesia / English, bisa diganti tanpa reload halaman.
- Studi kasus proyek nyata (MES, CMMS, DMS, PRTS, Gate Pass) lengkap
  dengan screenshot asli dari portofolio, dibuka lewat lightbox.
- Widget "status sistem" di hero yang meniru gaya dashboard asli —
  lengkap dengan jam realtime.
- Navigasi mobile, aksesibilitas dasar (skip link, fokus terlihat,
  `prefers-reduced-motion`), dan tombol salin email/telepon.

## Struktur folder

```
├── index.html
├── css/
│   └── style.css
├── js/
│   └── main.js
├── assets/
│   ├── img/          # screenshot proyek & foto profil
│   └── cv/           # CV yang bisa diunduh pengunjung
└── README.md
```

## Menjalankan secara lokal

Karena situs ini statis, cukup buka `index.html` langsung di browser,
atau jalankan server lokal sederhana supaya path aset lebih konsisten:

```bash
python3 -m http.server 8080
# lalu buka http://localhost:8080
```

## Deploy ke GitHub Pages

1. Buat repository baru di GitHub, lalu push seluruh isi folder ini
   (pastikan `index.html` berada di root repo).
2. Buka **Settings → Pages**.
3. Pada **Source**, pilih branch `main` dan folder `/ (root)`.
4. Simpan — situs akan tersedia di
   `https://<username>.github.io/<nama-repo>/` dalam beberapa menit.

## Deploy ke Vercel

1. Push repo ini ke GitHub (lihat langkah di atas).
2. Login ke [vercel.com](https://vercel.com) → **Add New… → Project**.
3. Pilih repository ini. Vercel otomatis mendeteksinya sebagai situs
   statis — biarkan *Build Command* dan *Output Directory* kosong.
4. Klik **Deploy**. Selesai dalam waktu singkat, lengkap dengan URL
   `https://<nama-proyek>.vercel.app`.

## Mengubah konten

- **Teks & terjemahan** — semua string ada di satu tempat: objek
  `translations` di `js/main.js` (kunci `id` dan `en`). Elemen HTML
  menandai teks yang bisa diganti lewat atribut `data-i18n="kunci"`.
- **Proyek** — tambah/ubah kartu proyek di `index.html` bagian
  `#projects`, lalu taruh screenshot baru di `assets/img/`.
- **CV** — ganti file di `assets/cv/CV_Muhammad_Azmy_Ikhwan.pdf` dengan
  versi terbaru (nama file boleh sama supaya tautan unduh tidak perlu
  diubah).
- **Warna & tipografi** — semua token desain ada di bagian `:root` dan
  `[data-theme="dark"]` pada `css/style.css`.

## Setelah deploy

Beberapa hal kecil yang sebaiknya diperbarui setelah situs punya URL asli
(dari GitHub Pages / Vercel):

- Di `index.html`, ganti komentar `TODO ganti dengan URL asli...` dan
  tambahkan `<link rel="canonical" href="https://url-asli-kamu">`.
- Ubah `og:image` dan `twitter:image` menjadi URL absolut
  (mis. `https://url-asli-kamu/assets/img/profile.jpg`) supaya thumbnail
  muncul dengan benar saat link dibagikan di WhatsApp/LinkedIn/X.

## Kredit

Screenshot proyek diambil dari materi portofolio pribadi (dribbble.com/muhazmyikh).
Font: Space Grotesk, Inter, IBM Plex Mono (Google Fonts).
