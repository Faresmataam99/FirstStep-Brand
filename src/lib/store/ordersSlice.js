import { createSlice } from "@reduxjs/toolkit";
import { addToCart } from "./cartSlice";

const initialState = {
  orders: [],
  isValid: {}, // This should be an object to track validation for each order
  products:{}
};

export const ordersSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    // Create an order and initialize validation status for each order
    createOrder:(state, action)=> {
      state.orders = action.payload;
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
      // Initialize the validation status for each order
      action.payload.forEach((order) => {
        state.isValid[order._id] = false; // Initially set each order as not valid
      });
    },

    // Update the validation status of specific orders
    validateOrder(state, action) {
      const { orderId, isValid } = action.payload;
      state.isValid[orderId] = isValid; // Update validation for the given order
    },
  },
});

export const { createOrder, validateOrder } = ordersSlice.actions;
export default ordersSlice.reducer;

