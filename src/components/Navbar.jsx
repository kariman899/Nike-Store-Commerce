import React, { useState } from "react";
import {
  MagnifyingGlassCircleIcon,
  HeartIcon,
  ShoppingBagIcon,
} from "@heroicons/react/24/outline";
import logo from '../assets/logo.png';
import { useDispatch, useSelector } from "react-redux";
import { selectCartTotalQTY, setOpenCart } from "../app/CartSlice.js";


export default function Navbar() {
    const [navState,setNaveState]= useState(false);
    const totalQTY = useSelector(selectCartTotalQTY)

    function onNavScroll()
    {
        if(window.scrollY >30)
        {
            setNaveState(true)
        }
        else
        {
            setNaveState(false)
        }
    }
    window.addEventListener('scroll',onNavScroll);

    const dispatch = useDispatch();
    function onCartToggle()
    {
      dispatch(
      //   setOpenCart({
      //   cartState : true
      // })
      setOpenCart(true)
      )
    }
  return (
    <>
      <header className={!navState ? `absolute top-4 right-0 left-0 opacity-100 z-50` : `fixed 
      top-0 left-0 right-0 h-[9vh]  md:h-[8vh] opacity-100 z-50 blur-effect-theme flex justify-center`}>
        <nav className=" nike-container flex justify-between items-center">
          <div>
            <img src={logo} alt="" className={`w-14 ${navState && "brightness-0"}`}/>
          </div>
          <div className="">
              <button onClick={onCartToggle} className=" relative transition-all duration-300 active:scale-110 border-none outline-none">
                <ShoppingBagIcon className={`icon-style sm:h-6 sm:w-6 ${navState && " text-slate-900 transition-all duration-300"}`} />
                <div className={`absolute top-4 sm:top-3 -right-1 w-5 h-5 sm:w-4 sm:h-4 rounded-full 
                 text-[0.75rem] sm:text-[0.65rem] flex items-center justify-center cursor-pointer transition-all duration-300 hover:scale-110  ${navState ? ` bg-slate-900 text-slate-100 shadow-slate-900 `:
                 ` bg-slate-100 text-slate-900 shadow-slate-100`} `}>{totalQTY}</div>
              </button>
            
          </div>
        </nav>
      </header>
    </>
  );
}
