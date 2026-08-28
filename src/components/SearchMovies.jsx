import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function SearchMovies() {
    const [searchText, setSearchText] = useState('');
    const navigate = useNavigate();

    const handleSearch = (e) => {
        e.preventDefault();
        navigate(searchText ? `/?search=${searchText}` : `/`);
    };

    return (
        <form onSubmit={handleSearch} className="flex gap-2">
            <input
                type="text"
                placeholder="Cari atau tanya AI..."
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                className="px-3 py-2 rounded text-black outline-none w-48 md:w-64 focus:ring-2 focus:ring-purple-400"
            />
            <button type="submit" className="bg-yellow-400 text-black px-4 py-2 rounded font-bold hover:bg-yellow-500">
                Cari
            </button>
        </form>
    );
}