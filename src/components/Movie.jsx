import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toggleWatchlist } from '../store/watchlistSlice';

export default function Movie({ movie }) {
    const dispatch = useDispatch();
    const watchlist = useSelector(state => state.watchlist.items);
    const isFavorite = watchlist.some(item => item.id === movie.id);

    const handleToggle = (e) => {
        e.preventDefault();
        dispatch(toggleWatchlist(movie));
    };

    return (
        <Link to={`/movie/${movie.id}`} className="group relative bg-teal-600 rounded-lg overflow-hidden shadow-lg h-full flex flex-col">
            <div className="relative overflow-hidden aspect-2/3">
                <img
                    src={movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : 'https://via.placeholder.com/500x750?text=No+Image'}
                    alt={movie.title}
                    className="w-full h-full object-cover"
                />

                <div className="absolute inset-0 bg-teal-700/95 text-white p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 overflow-y-auto">
                    <h3 className="font-bold mb-2 border-b border-teal-500 pb-1">Overview</h3>
                    <p className="text-sm text-teal-50 leading-relaxed">{movie.overview || 'No overview available.'}</p>
                </div>

                <div className="absolute bottom-2 left-2 bg-gray-900 border-2 border-teal-400 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-sm shadow-md">
                    {movie.vote_average?.toFixed(1)}
                </div>

                <button
                    onClick={handleToggle}
                    className={`absolute top-2 right-2 w-10 h-10 rounded-full flex items-center justify-center shadow-lg transition-colors border-2 text-lg z-10 ${isFavorite ? 'bg-yellow-400 border-yellow-500 text-black' : 'bg-gray-900/60 border-gray-500 text-white hover:bg-teal-500'}`}
                    title="Watchlist"
                >
                    {isFavorite ? '♥' : '♡'}
                </button>
            </div>

            <div className="p-3 text-white flex-1 flex flex-col justify-center">
                <h2 className="font-bold text-base truncate">{movie.title}</h2>
                <p className="text-teal-200 text-xs mt-1">Release: {movie.release_date}</p>
            </div>
        </Link>
    );
}