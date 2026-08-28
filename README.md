# 🎬 Movie Web App

Aplikasi web penjelajah dan pelacak film yang modern, responsif, dan kaya fitur, dibangun menggunakan **React**, **Vite**, **Redux Toolkit**, dan **Tailwind CSS**, serta terintegrasi langsung dengan **The Movie Database (TMDB) API**.

---

## ✨ Fitur Utama

- **Kategori Film Dinamis:** Jelajahi film berdasarkan kategori *Now Playing*, *Popular*, *Top Rated*, dan *Trending*.
- **Pencarian Cepat:** Temukan film secara instan melalui pencarian kata kunci yang terintegrasi dengan parameter URL.
- **Kartu Film Interaktif:** Efek *hover* untuk melihat sinopsis singkat, tanggal rilis, dan lencana rating visual khusus.
- **Detail Film Lengkap:**
  - Sinopsis lengkap dan informasi rilis film.
  - Pemutar trailer resmi dari **YouTube** yang tersemat langsung.
  - Daftar pemeran utama (*top cast*) dan kru beserta foto profil.
- **Sistem Daftar Tontonan (*Watchlist* / Favorit):** Simpan film favorit dengan penyimpanan otomatis menggunakan `localStorage` peramban.
- **Manajemen State & Operasi Asinkron:** Pengelolaan *state* terpusat menggunakan **Redux Toolkit** dan `createAsyncThunk`.
- **Paginasi (*Load More*):** Navigasi mulus untuk memuat lebih banyak film tanpa kehilangan *state* sebelumnya.
- **Tampilan Responsif Penuh:** Didesain dengan **Tailwind CSS** agar nyaman diakses melalui perangkat ponsel, tablet, maupun desktop.

---

## 🛠️ Teknologi yang Digunakan

- **Frontend Framework / Bundler:** [React](https://react.dev/) + [Vite](https://vitejs.dev/)
- **State Management:** [Redux Toolkit](https://redux-toolkit.js.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Routing:** [React Router](https://reactrouter.com/)
- **Sumber Data:** [The Movie Database (TMDB) API](https://www.themoviedb.org/documentation/api)

---

## 📁 Struktur Folder

movie-app/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── Movie.jsx
│   │   └── SearchMovies.jsx
│   ├── pages/
│   │   ├── Detail.jsx
│   │   ├── Favorites.jsx
│   │   └── Home.jsx
│   ├── services/
│   ├── store/
│   │   ├── movieSlice.js
│   │   ├── store.js
│   │   └── watchlistSlice.js
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── .env.example
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
└── README.md

```

## ⚙️ Panduan Menjalankan Proyek

Ikuti langkah-langkah di bawah ini untuk menjalankan proyek ini di komputer lokal Anda:

### 1. Prasyarat
Pastikan Anda telah menginstal perangkat lunak berikut:
- [Node.js](https://nodejs.org/) (versi 18 atau lebih baru disarankan)
- [Git](https://git-scm.com/)
- Akun dan API Key dari [The Movie Database (TMDB)](https://www.themoviedb.org/)

### 2. Klon Repositori
Buka terminal dan jalankan perintah:
git clone [https://github.com/firdhausranggaa/creating-movie-app.git](https://github.com/firdhausranggaa/creating-movie-app.git)
cd movie-app

### 3. Instal Dependensi
npm install

### 4. Konfigurasi Environment Variables
1. Buat file baru bernama `.env` di direktori utama (*root*) proyek.
2. Tambahkan konfigurasi berikut dan masukkan API Key TMDB Anda:
VITE_TMDB_BASE_URL=[https://api.themoviedb.org/3](https://api.themoviedb.org/3)
VITE_TMDB_API_KEY=masukkan_api_key_tmdb_anda_di_sini

💡 **Cara mendapatkan API Key TMDB:**
1. Masuk ke akun [TMDB](https://www.themoviedb.org/).
2. Buka menu **Settings** > **API**.
3. Ajukan pembuatan API Key (pilih opsi *Developer*), lalu salin **API Key (v3 auth)** yang diberikan.

### 5. Jalankan Server Pengembangan
npm run dev

Buka peramban (*browser*) dan akses:
http://localhost:5173

### 6. Build untuk Produksi
# Membuat file kompilasi produksi di folder dist/
npm run build

# Menjalankan pratinjau hasil build
npm run preview

---

## 📄 Lisensi

Proyek ini dibuat untuk keperluan pembelajaran dan portofolio di bawah lisensi [MIT](https://www.google.com/search?q=LICENSE).