import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

export default function Detail() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [movie, setMovie] = useState(null);

    useEffect(() => {
        const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&append_to_response=videos,credits`)
            .then(res => res.json())
            .then(data => setMovie(data));
    }, [id]);

    if (!movie) return <div className="text-center p-20 text-teal-700 text-xl font-bold">Memuat Data...</div>;

    const trailer = movie.videos?.results.find(vid => vid.type === 'Trailer' && vid.site === 'YouTube');
    const casts = movie.credits?.cast.slice(0, 6);

    return (
        <div className="p-6 max-w-6xl mx-auto text-gray-800 font-sans">
            <button onClick={() => navigate(-1)} className="mb-6 bg-teal-700 text-white px-5 py-2 rounded-lg hover:bg-teal-600 font-semibold shadow-md transition-colors">
                ⬅ Kembali
            </button>

            <div className="flex flex-col md:flex-row gap-8 bg-white p-6 rounded-2xl shadow-lg border border-gray-100 mb-8">
                <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} className="w-full md:w-80 rounded-xl shadow-md" />
                <div>
                    <h1 className="text-4xl font-extrabold mb-2 text-teal-900">{movie.title}</h1>
                    <p className="text-gray-500 mb-6 font-medium tracking-wide">{movie.release_date} • ⭐ {movie.vote_average?.toFixed(1)}</p>
                    <h3 className="text-xl font-bold mb-3 border-b-2 border-teal-400 pb-1 inline-block">Sinopsis</h3>
                    <p className="text-gray-700 leading-relaxed text-lg">{movie.overview}</p>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {trailer && (
                    <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                        <h3 className="text-xl font-bold mb-4 border-b-2 border-teal-400 pb-1 inline-block">Official Trailer</h3>
                        <div className="aspect-video w-full rounded-xl overflow-hidden shadow-sm border border-gray-200">
                            <iframe
                                className="w-full h-full"
                                src={`https://www.youtube.com/embed/${trailer.key}`}
                                title="YouTube Trailer"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </div>
                )}

                <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                    <h3 className="text-xl font-bold mb-4 border-b-2 border-teal-400 pb-1 inline-block">Top Cast</h3>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        {casts?.map(actor => (
                            <div key={actor.id} className="text-center bg-gray-50 p-3 rounded-xl border border-gray-100 hover:shadow-md transition-shadow">
                                <img
                                    src={actor.profile_path ? `https://image.tmdb.org/t/p/w185${actor.profile_path}` : 'https://via.placeholder.com/185x278?text=No+Photo'}
                                    alt={actor.name}
                                    className="w-20 h-20 object-cover rounded-full mx-auto mb-3 shadow-sm border-2 border-teal-200"
                                />
                                <p className="font-bold text-sm text-gray-800 leading-tight">{actor.name}</p>
                                <p className="text-xs text-teal-600 mt-1 truncate">{actor.character}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}