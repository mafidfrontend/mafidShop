import { createSlice } from "@reduxjs/toolkit";
import { FavoritesState } from "@/type/Types";

const initialState: FavoritesState = {
    items: [],
};

const favoritesSlice = createSlice({
    name: "favorites",
    initialState,
    reducers: {
        toggleFavorite: (state, action) => {
            const found = state.items.find(
                (item) => item.id === action.payload.id
            );
            if (found) {
                state.items = state.items.filter(
                    (item) => item.id !== action.payload.id
                );
            } else {
                state.items.push(action.payload);
            }
        },
    },
});

export const { toggleFavorite } = favoritesSlice.actions;
export default favoritesSlice.reducer;