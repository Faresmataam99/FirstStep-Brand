import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
};
export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const index = state.products.findIndex(
        (product) => product.product.id == action.payload.id,
        (product) =>product.product.size == action.payload.id,
      );
      if (index != -1) {
        state.products[index].stock++;
      } else {
        state.products.push({
          product: action.payload,
          stock: 1,
        });
      }
      updateLocalStorage(state.products);
    },

    removeFromCart: (state, action) => {
      if (state.products[action.payload].stock > 1) {
        state.products[action.payload].stock--;
      } else {
        state.products.splice(action.payload, 1);
      }
      updateLocalStorage(state.products);
    },
    emptyCart: (state) => {
      (state.products = []), updateLocalStorage(state.products);
    },
    setProducts: (state, action) => {
      state.products = action.payload;
    },
    addTowishList: (state, action) => {
      const index = state.products.findIndex(
        (product) => product.product.id === action.payload.id,
        state.products.push({
          product: action.payload,
          stock: 1,
        })
      );
      updateLocalStorage(state.products);
    },

    cartCount: (state, action) => {
      updateLocalStorage(state.products);
    },

    setProducts: (state, action) => {
      state.products = action.payload;
    },
  },
});

const updateLocalStorage = (products) => {
  localStorage.removeItem("products"),
    localStorage.setItem("products", JSON.stringify(products));
};

export const {
  addToCart,
  removeFromCart,
  emptyCart,
  reduceQuantity,
  setProducts,
} = cartSlice.actions;
export default cartSlice.reducer;
