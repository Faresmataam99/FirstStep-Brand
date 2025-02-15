import { createSlice } from "@reduxjs/toolkit";

// Initial state with an empty array of products
const initialState = {
  products: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // Add product to the cart
    addToCart: (state, action) => {
      const { product, selectedSize,selectedQuantity } = action.payload; // Get product and selected size from the payload
      
      // Check if the product with the selected size already exists in the cart
      const index = state.products.findIndex(
        (item) =>
          item.product.id === product.id &&
          item.selectedSize === selectedSize &&
          item.selectedQuantity === selectedQuantity
      );
      

      // If the product with the selected size is found, increase the stock
      if (index !== -1) {
        state.products[index].stock++;
      } else {
        // Otherwise, add the new product with the selected size to the cart
        state.products.push({
          product,
          selectedSize,
          selectedQuantity,
          stock: 1, 
        });
      }

      // Update the local storage whenever the cart changes
      updateLocalStorage(state.products);
    },

    // Remove product from the cart
    removeFromCart: (state, action) => {
      const index = action.payload;
      if (state.products[index].stock > 1) {
        state.products[index].stock--;
      } else {
        state.products.splice(index, 1);
      }

      // Update local storage after removal
      updateLocalStorage(state.products);
    },

    // Empty the entire cart
    emptyCart: (state) => {
      state.products = [];
      updateLocalStorage(state.products);
    },

    // Set the cart products from local storage or any other source
    setProducts: (state, action) => {
      state.products = action.payload;
    },

    // This action doesn't seem to be used anywhere, so we can remove it.
    // cartCount: (state, action) => {
    //   updateLocalStorage(state.products);
    // },
  },
});

// Update the local storage with the current cart state
const updateLocalStorage = (products) => {
  localStorage.setItem("products", JSON.stringify(products));
};

export const {
  addToCart,
  removeFromCart,
  emptyCart,
  setProducts,
} = cartSlice.actions;

export default cartSlice.reducer;
