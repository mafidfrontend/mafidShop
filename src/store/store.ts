import { configureStore } from "@reduxjs/toolkit";
import favoritesReducer from "./slices/favoritesSlice";
import cartReducer from "./slices/cartSlice";
import ordersReducer from "./slices/ordersSlice";
import authSlice from "./slices/authSlice";

export const store = configureStore({
    reducer: {
        cart: cartReducer,
        favorites: favoritesReducer,
        orders: ordersReducer,
        authSlice: authSlice,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
