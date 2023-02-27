import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

const initialState = {
  cartState: false,
  cartItems: localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart"))
    : [],
  cartTotalAmount: 0,
  cartTotalQTY:0
};
const CartSlice = createSlice({
  initialState,
  name: "cart",
  reducers: {
    setOpenCart: (state, action) => {
      state.cartState = action.payload;
    },
    setCloseCart: (state, action) => {
      state.cartState = action.payload;
    },
    setAddToCart: (state, action) => {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex >= 0) {
        state.cartItems[itemIndex].cartQuantity += 1;
        toast.success(`Item QTY for ${action.payload.title} increased`);
      } else {
        const temp = { ...action.payload, cartQuantity: 1 };
        state.cartItems.push(temp);
        toast.success(`${action.payload.title} added to cart`);
      }
      localStorage.setItem("cart", JSON.stringify(state.cartItems));
    },
    setRemoveItemsFromCart: (state, action) => {
      const cartAfterRemoveItem = state.cartItems.filter(
        (item) => item.id !== action.payload.id
      );
      state.cartItems = cartAfterRemoveItem;
      localStorage.setItem("cart", JSON.stringify(state.cartItems));
      toast.success(`${action.payload.title} Removed from cart`);
    },
    setIncreaseItemQTY: (state, action) => {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex >= 0) {
        state.cartItems[itemIndex].cartQuantity += 1;
        toast.success(`Item QTY for ${action.payload.title} increased`);
      }
      localStorage.setItem("cart", JSON.stringify(state.cartItems));
    },
    setDecreaseItemQTY: (state, action) => {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      if (state.cartItems[itemIndex].cartQuantity > 1) {
        state.cartItems[itemIndex].cartQuantity -= 1;
        toast.success(`Item QTY for ${action.payload.title} decreased`);
      }

      localStorage.setItem("cart", JSON.stringify(state.cartItems));
    },
    setClearCart: (state, action) => {
      (state.cartItems = []), toast.success(`Cart cleared`);

      localStorage.setItem("cart", JSON.stringify(state.cartItems));
    },

    // setGetTotals: (state, action) => {
    //   let { totalAmount, totalQTY } = state.cartItems.reduce((cartTotal, cartItem)=> {
    //     const { price, cartQuantity } = cartItem;
    //     const totalPrice = price * cartQuantity;

    //     cartTotal.totalAmount += totalPrice;
    //     cartTotal.totalQTY += cartQuantity;

    //     return cartTotal;
    //   }, {
    //     totalAmount: 0,
    //     totalQTY: 0,
    //   });

    //   state.cartTotalAmount = totalAmount;
    //   state.cartTotalQantity = totalQTY;
    // },

    setGetTotalPrice: (state, action) => {
      let totalAmount = state.cartItems.reduce((cartTotal, cartItem) => {
        const itemTotalPrice = cartItem.price * cartItem.cartQuantity
        let TotalPrice = Number(cartTotal) + Number(itemTotalPrice);
        return TotalPrice;
      }, 0);
      state.cartTotalAmount = totalAmount;
    },
    setGetTotalQTY: (state, action) => {
      let totalQTY = state.cartItems.reduce((cartTotal, cartItem) => {
      
        return Number(cartTotal)+Number(cartItem.cartQuantity);
      }, 0);
      state.cartTotalQTY = totalQTY;

    }
  },
});

export const {
  setOpenCart,
  setCloseCart,
  setAddToCart,
  setRemoveItemsFromCart,
  setIncreaseItemQTY,
  setDecreaseItemQTY,
  setClearCart,
  setGetTotalPrice,
  setGetTotalQTY
} = CartSlice.actions;
export const selectCartState = (state) => state.cart.cartState;
export const selectCartItems = (state) => state.cart.cartItems;
export const selectCartTotalAmount = (state) => state.cart.cartTotalAmount;
export const selectCartTotalQTY = (state) => state.cart.cartTotalQTY;

export default CartSlice.reducer;
