import { createSlice } from "@reduxjs/toolkit";

const orderSlice = createSlice({
  name: "order",
  initialState: {},
  orderDetails: null,
  reducers: {
    setOrderDetails(state, action) {
      state.orderDetails = action.payload;
    },
  },
});

export const { setOrderDetails } = orderSlice.actions;
export default orderSlice.reducer;
