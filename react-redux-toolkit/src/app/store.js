import { configureStore } from "@reduxjs/toolkit";
import cartSLice from "../features/cart/cartSlice";
import modalSLice from "../features/modal/modalSlice";

export const store = configureStore({
  reducer: {
    cart: cartSLice,
    modal: modalSLice,
  },
});
