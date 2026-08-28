import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Detail from './pages/Detail';
import Favorites from './pages/Favorites';
import SearchMovies from './components/SearchMovies';

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-teal-700 p-4 flex flex-col md:flex-row justify-between items-center shadow-md gap-4 text-white font-semibold">
        <Link to="/" className="text-2xl font-bold tracking-wider">
          MOVIE WEB APP
        </Link>
        <div className="flex flex-wrap justify-center gap-4 text-sm md:text-base">
          <Link to="/" className="hover:text-teal-200 transition-colors">HOME</Link>
          <Link to="/?category=now_playing" className="hover:text-teal-200 transition-colors">NOW PLAYING</Link>
          <Link to="/?category=popular" className="hover:text-teal-200 transition-colors">POPULAR</Link>
          <Link to="/?category=top_rated" className="hover:text-teal-200 transition-colors">TOP RATED</Link>
          <Link to="/?category=trending" className="hover:text-teal-200 transition-colors">TRENDING</Link>
          <Link to="/favorites" className="text-yellow-400 hover:text-yellow-300 transition-colors">WATCHLIST</Link>
        </div>
        <SearchMovies />
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<Detail />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </div>
  );
}