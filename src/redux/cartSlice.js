import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addToCart(state, action) {
      const alreadyInCart = state.find((item) => item.id === action.payload.id);
      if (alreadyInCart) {
        alreadyInCart.qty = alreadyInCart.qty + 1;
      } else {
        state.push(action.payload);
      }
    },
    removeFromCart(state, action) {
      const itemIndex = state.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex !== -1) {
        if (state[itemIndex].qty > 1) {
          state[itemIndex].qty -= 1;
        } else {
          state.splice(itemIndex, 1);
        }
      }
    },
    incrementQty(state, action) {
      const item = state.find((item) => item.id === action.payload.id);
      if (item) {
        item.qty += 1;
      }
    },
    decrementQty(state, action) {
      const itemIndex = state.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex !== -1) {
        if (state[itemIndex].qty > 1) {
          state[itemIndex].qty -= 1;
        } else {
          state.splice(itemIndex, 1);
        }
      }
    },
    emptyCart(state, action){
      return [];
    }
  },
});

const { reducer, actions } = cartSlice;
export const {
  addToCart,
  removeFromCart,
  incrementQty,
  decrementQty,
  updateQty,
  emptyCart
} = actions;

export default reducer;
