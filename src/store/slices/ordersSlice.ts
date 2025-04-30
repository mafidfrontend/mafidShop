import { Order } from "@/type/Types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface OrdersState {
  list: Order[];
}

const initialState: OrdersState = {
  list: [],
};

const ordersSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {
    addOrder: (state, action: PayloadAction<Order>) => {
      state.list.push(action.payload);
    },
    setOrders: (state, action: PayloadAction<Order[]>) => {
      state.list = action.payload;
    },
  },
});

export const { addOrder, setOrders } = ordersSlice.actions;
export default ordersSlice.reducer;