# 🎬 Movie Web App

Aplikasi web penjelajah dan pelacak film yang modern, responsif, dan interaktif, dibangun menggunakan **React**, **Vite**, **Redux Toolkit**, dan **Tailwind CSS**, serta terintegrasi langsung dengan **The Movie Database (TMDB) API**.

---

## ✨ Fitur Utama

- **Katalog Film Lengkap:** Menjelajahi film berdasarkan kategori *Now Playing*, *Popular*, *Top Rated*, dan *Trending*.
- **Pencarian Film (*Search*):** Mencari film favorit berdasarkan judul secara instan.
- **Kartu Film Interaktif:** Tampilan ringkas berisi rating, tanggal rilis, dan sinopsis singkat.
- **Detail Film Lengkap:**
  - Sinopsis mendalam dan informasi rilis film.
  - Pemutar trailer resmi langsung dari **YouTube**.
  - Daftar pemeran utama (*cast*) dan kru film.
- **Daftar Tontonan (*Watchlist* / Favorit):** Simpan film yang ingin ditonton dengan penyimpanan otomatis di browser (`localStorage`).
- **Manajemen State Global:** Pengelolaan state data dan film favorit menggunakan **Redux Toolkit**.
- **Desain Responsif:** Tampilan optimal di layar ponsel, tablet, maupun desktop menggunakan **Tailwind CSS**.

---

## 🛠️ Teknologi yang Digunakan

- **Frontend Framework:** [React](https://react.dev/) + [Vite](https://vitejs.dev/)
- **State Management:** [Redux Toolkit](https://redux-toolkit.js.org/)
- **Routing:** [React Router DOM](https://reactrouter.com/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Sumber Data:** [The Movie Database (TMDB) API](https://www.themoviedb.org/)

---

## 📁 Struktur Folder

```text
movie-app/
├── public/
├── src/
│   ├── assets/          # File gambar & ikon
│   ├── components/      # Komponen UI modular
│   ├── pages/           # Halaman utama (Home, Detail, Favorites)
│   ├── services/        # Konfigurasi pemanggilan TMDB API
│   ├── store/           # Redux Store & Slices
│   ├── App.css
│   ├── App.jsx          # Routing & Layout utama
│   ├── index.css
│   └── main.jsx         # Entry point aplikasi
├── .env.example
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── vite.config.js
└── README.md

```

---

## ⚙️ Panduan Menjalankan Proyek

### 1. Prasyarat

* [Node.js](https://nodejs.org/) (versi 18+)
* [Git](https://git-scm.com/)
* Akun dan API Key dari [The Movie Database (TMDB)](https://www.themoviedb.org/)

### 2. Klon Repositori

```bash
git clone [https://github.com/firdhausranggaa/creating-movie-app.git](https://github.com/firdhausranggaa/creating-movie-app.git)
cd movie-app

```

### 3. Instal Dependensi

```bash
npm install

```

### 4. Konfigurasi Environment Variables

Buat file bernama `.env` di direktori utama proyek, lalu isi:

```env
VITE_TMDB_BASE_URL=[https://api.themoviedb.org/3](https://api.themoviedb.org/3)
VITE_TMDB_API_KEY=masukkan_api_key_tmdb_anda_di_sini

```

> **Catatan:** Jangan membagikan atau mengunggah file `.env` ke GitHub. Pastikan `.env` sudah masuk ke dalam `.gitignore`.

### 5. Jalankan Aplikasi

```bash
npm run dev

```

Buka browser dan kunjungi `http://localhost:5173`.

---

## 📄 Lisensi

Proyek ini dibuat untuk keperluan portofolio dan pembelajaran di bawah lisensi [MIT](https://www.google.com/search?q=LICENSE).