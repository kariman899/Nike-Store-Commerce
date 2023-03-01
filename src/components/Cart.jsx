import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectCartState,
  setCloseCart,
  selectCartItems,
  setClearCart,
  selectCartTotalAmount,setGetTotalPrice, selectCartTotalQTY, setGetTotalQTY
} from "../app/CartSlice.js";
import CountCart from "./Cart/CountCart";
import EmptyCart from "./Cart/EmptyCart";
import ItemsCart from "./Cart/ItemsCart";
import TotalCart from "./Cart/TotalCart";


export default function () {
  const dispatch = useDispatch();
  const ifCartState = useSelector(selectCartState);
  const cartItems = useSelector(selectCartItems);
  const cartAmout = useSelector(selectCartTotalAmount);
  const totalQTY = useSelector(selectCartTotalQTY)


  useEffect(()=>{
    dispatch(setGetTotalPrice())
    dispatch(setGetTotalQTY())
  },[cartItems,dispatch])

  function onCartToggle() {
    dispatch(setCloseCart(false));
  }
  function clearCart()
  {
    dispatch(setClearCart())
  }
  return (
    <>
      <div
        className={`fixed top-0 right-0 left-0 bottom-0 blur-effect-theme w-full h-full
     ${ifCartState ? " opacity-100 visible" : " opacity-0 invisible"}`}
      >
        <div
          className={`blur-effect-theme absolute right-0 max-w-xl w-full h-full`}
        >
          <CountCart totalQTY={totalQTY} onCartToggle={onCartToggle}></CountCart>
          {cartItems.length === 0 ? <EmptyCart onCartToggle={onCartToggle}></EmptyCart> : <div></div>}
          <div className="pb-5 overflow-y-scroll h-[80vh] scroll-smooth scroll-hidden">
            {cartItems?.map((item, i) => (
              <ItemsCart key={i} item={item}></ItemsCart>
            ))}
          </div>
          {cartItems.length!==0 ? <TotalCart clearCart={clearCart} cartAmout={cartAmout}></TotalCart> :""}

        </div>
      </div>
    </>
  );
}
