import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMovies } from '../store/movieSlice';
import Movie from '../components/Movie';

export default function Home() {
    const [searchParams] = useSearchParams();
    const query = searchParams.get('search') || '';
    const category = searchParams.get('category') || 'popular';

    const [page, setPage] = useState(1);
    const dispatch = useDispatch();
    const movies = useSelector((state) => state.movies.list);
    const movieStatus = useSelector((state) => state.movies.status);
    const movieError = useSelector((state) => state.movies.error);

    useEffect(() => {
        setPage(1);
    }, [category, query]);

    useEffect(() => {
        dispatch(fetchMovies({ category, query, page }));
    }, [category, query, page, dispatch]);

    return (
        <div className="p-6 max-w-7xl mx-auto min-h-screen">
            <h2 className="text-2xl font-bold mb-6 text-gray-800 uppercase border-b-2 border-teal-500 pb-2 inline-block">
                {query ? `Search Results for "${query}"` : category.replace('_', ' ')}
            </h2>

            {movieStatus === 'failed' && <div className="text-center text-xl text-red-500">Error loading movies.</div>}

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
                {movies.map((movie, index) => (
                    <Movie key={`${movie.id}-${index}`} movie={movie} />
                ))}
            </div>

            {movieStatus === 'loading' && <div className="text-center text-xl text-teal-700 mt-8 font-bold">Memuat...</div>}

            {movieStatus !== 'loading' && movies.length > 0 && (
                <div className="flex justify-center mt-10 mb-8">
                    <button
                        onClick={() => setPage(prev => prev + 1)}
                        className="bg-teal-700 text-white px-10 py-3 rounded-full font-bold hover:bg-teal-600 transition-colors shadow-lg hover:shadow-teal-500/50"
                    >
                        Load More Movies
                    </button>
                </div>
            )}
        </div>
    );
}