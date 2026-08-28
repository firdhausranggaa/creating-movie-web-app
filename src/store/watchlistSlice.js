import { createSlice } from '@reduxjs/toolkit';

const loadFromLocalStorage = () => {
    try {
        const serializedState = localStorage.getItem('watchlist');
        return serializedState === null ? [] : JSON.parse(serializedState);
    } catch (e) {
        return [];
    }
};

const initialState = {
    items: loadFromLocalStorage(),
};

export const watchlistSlice = createSlice({
    name: 'watchlist',
    initialState,
    reducers: {
        toggleWatchlist: (state, action) => {
            const movie = action.payload;
            const existingIndex = state.items.findIndex(item => item.id === movie.id);

            if (existingIndex >= 0) {
                state.items.splice(existingIndex, 1);
            } else {
                state.items.push(movie);
            }

            localStorage.setItem('watchlist', JSON.stringify(state.items));
        }
    }
});

export const { toggleWatchlist } = watchlistSlice.actions;
export default watchlistSlice.reducer;