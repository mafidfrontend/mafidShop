import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartState, ProductIdType } from "@/type/Types";

const initialState: CartState = {
    items: [],
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<ProductIdType>) => {
            const existingItem = state.items.find(
                (item) => item.id === action.payload.id
            );
            if (existingItem) {
                existingItem.count += 1;
            } else {
                state.items.push({ ...action.payload, count: 1 });
            }
        },
        removeFromCart: (state, action: PayloadAction<number>) => {
            const existingItem = state.items.find(
                (item) => item.id === action.payload
            );
            if (existingItem) {
                if (existingItem.count > 1) {
                    existingItem.count -= 1;
                } else {
                    state.items = state.items.filter(
                        (item) => item.id !== action.payload
                    );
                }
            }
        },
        clearCart: (state) => {
            state.items = [];
        },
    },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
