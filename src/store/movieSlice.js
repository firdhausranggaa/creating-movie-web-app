import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const BASE_URL = import.meta.env.VITE_TMDB_BASE_URL;

export const fetchMovies = createAsyncThunk(
    'movies/fetchMovies',
    async ({ category = 'popular', query = '', page = 1 } = {}) => {
        let url = '';
        if (query) {
            url = `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}&page=${page}`;
        } else if (category === 'trending') {
            url = `${BASE_URL}/trending/movie/day?api_key=${API_KEY}&page=${page}`;
        } else {
            url = `${BASE_URL}/movie/${category}?api_key=${API_KEY}&page=${page}`;
        }

        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Gagal mengambil data film dari server.');
        }
        const data = await response.json();
        return { results: data.results || [], page };
    }
);

const initialState = {
    list: [],
    status: 'idle',
    error: null
};

export const movieSlice = createSlice({
    name: 'movies',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchMovies.pending, (state) => {
                state.status = 'loading';
                state.error = null;
            })
            .addCase(fetchMovies.fulfilled, (state, action) => {
                state.status = 'succeeded';
                if (action.payload.page === 1) {
                    state.list = action.payload.results;
                } else {
                    state.list = [...state.list, ...action.payload.results];
                }
            })
            .addCase(fetchMovies.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    }
});

export default movieSlice.reducer;