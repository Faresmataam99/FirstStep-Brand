import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  orders: [],
  isValid: {}, // This should be an object to track validation for each order
};

export const ordersSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    // Create an order and initialize validation status for each order
    createOrder(state, action) {
      state.orders = action.payload;
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
