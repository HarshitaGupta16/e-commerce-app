import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  filterBy: "all",
  searchText: "",
  sortBy: "none",
};

export const productSlice = createSlice({
  name: "products",
  initialState: initialState,
  reducers: {
    getProducts: (state, action) => {
      state.products = action.payload.products;
    },
    filterProductsBy: (state, action) => {
      state.filterBy = action.payload.category.toLowerCase();
    },
    searchProducts: (state, action) => {
      state.searchText = action.payload.searchText;
    },
    sortProducts: (state, action) => {
      state.sortBy = action.payload.sortBy;
    },
  },
});

export const { getProducts, filterProductsBy, searchProducts, sortProducts } =
  productSlice.actions;

export default productSlice.reducer;
