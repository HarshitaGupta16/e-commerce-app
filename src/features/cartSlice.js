import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    addToCart: (state, action) => {
      state.cartItems = [
        ...state.cartItems,
        { id: action.payload.productId, quantity: 1, showGoToBag: true },
      ];
    },
    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload.id
      );
    },
    displayGoToBag: (state, action) => {
      state.cartItems = state.cartItems.map((item) => {
        if (item.id === action.payload.id) {
          item.showGoToBag = action.payload.showGoToBag;
        }
      });
    },
    changeQuantity: (state, action) => {
      let idToBeDeleted;
      state.cartItems = state.cartItems.map((item) => {
        if (item.id === action.payload.id) {
          if (action.payload.type === "INCREMENT") {
            return { ...item, quantity: item.quantity + 1 };
          } else if (action.payload.type === "DECREMENT") {
            if (item.quantity !== 1) {
              return { ...item, quantity: item.quantity - 1 };
            } else {
              idToBeDeleted = item.id;
              return item;
            }
          }
        }
      });
      idToBeDeleted
        ? (state.cartItems = state.cartItems.filter(
            (item) => item.id !== idToBeDeleted
          ))
        : state.cartItems;
    },
  },
});

export const { addToCart, removeFromCart, displayGoToBag, changeQuantity } =
  cartSlice.actions;

export default cartSlice.reducer;
