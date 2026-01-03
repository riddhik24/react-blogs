import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../utils/slices/cartSlice";
const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export default store;
