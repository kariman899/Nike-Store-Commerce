import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./CartSlice.js";

 let CartStore = configureStore({
  reducer:{
    cart : CartSlice
  }  
});
export default CartStore;
