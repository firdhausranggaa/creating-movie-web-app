import { useSelector } from 'react-redux';
import Movie from '../components/Movie';

export default function Favorites() {
    const watchlist = useSelector((state) => state.watchlist.items);

    return (
        <div className="p-6 max-w-7xl mx-auto min-h-screen">
            <h2 className="text-2xl font-bold mb-6 text-gray-800 uppercase border-b-2 border-teal-500 pb-2 inline-block">
                ⭐ My Watchlist
            </h2>

            {watchlist.length === 0 ? (
                <div className="text-center text-xl text-gray-500 mt-20 font-semibold">
                    Belum ada film di Watchlist Anda. Mulai tambahkan!
                </div>
            ) : (
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
                    {watchlist.map((movie) => (
                        <Movie key={movie.id} movie={movie} />
                    ))}
                </div>
            )}
        </div>
    );
}