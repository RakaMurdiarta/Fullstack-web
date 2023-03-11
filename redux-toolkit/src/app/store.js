import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "../features/cart/cartSlice";
import modal from "../features/cart/modal";

export const store = configureStore({
  reducer: {
    cart: cartSlice,
    modal: modal,
  },
});
