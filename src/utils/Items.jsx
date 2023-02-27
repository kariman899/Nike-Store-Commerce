import React from "react";
import { useDispatch } from "react-redux";
import { StarIcon, ShoppingBagIcon } from "@heroicons/react/24/solid";
import { setAddToCart } from "../app/CartSlice";

export default function Items({
  id,
  color,
  title,
  shadow,
  text,
  img,
  btn,
  rating,
  price,
  ifExist,
}) {
  const dispatch = useDispatch();

  function onAddToCart() {
    const item = { id, color, title, shadow, text, img, price };
    dispatch(setAddToCart(item));
  }

  return (
    <>
      <div
        className={`px-4 relative items-center ${
          ifExist ? `justify-items-start flex lg:mb-4 ` : `justify-items-center`
        }
      rounded-xl py-3 my-5  bg-gradient-to-b ${color} ${shadow}  text-slate-200 transition-all duration-700 w-full ease-in-out hover:scale-105`}
      >
        {/* content */}
        <div
          className={`grid items-center ${
            ifExist ? `justify-items-start` : `justify-items-center`
          } `}
        >
          <h2 className=" text-xl font-semibold drop-shadow-lg">{title}</h2>
          <p className=" text-base mb-1">{text}</p>

          <div className=" flex items-center justify-between w-32 mt-1">
            <div className=" bg-slate-200  px-1 rounded text-slate-900 shadow">
              {" "}
              <h3>{price} $</h3>{" "}
            </div>
            <div className="flex items-center">
              {" "}
              <StarIcon className=" icon-style  mr-1" />
              <span className=" font-normal">{rating}</span>{" "}
            </div>
          </div>

          <div className=" shadow rounded bg-slate-200 px-2 py-1 flex items-center mt-3 text-sm"  onClick={onAddToCart}>
            <button type="button">
              <ShoppingBagIcon className=" icon-style text-slate-900 mr-1" />
            </button>
            <button className="text-slate-900">{btn}</button>
          </div>
        </div>
        {/* img */}
        <div
          className={`mt-3 flex items-center justify-center mx-1 ${
            ifExist ? `absolute top-0 right-1` : ``
          }`}
        >
          <img
            src={img}
            alt={`img/item-img/${id}`}
            className={` ${
              ifExist ? ` w-60 h-auto -rotate-[35deg] ` : ` w-65 h-36  `
            } transitions-theme hover:-rotate-12 `}
          />
        </div>
      </div>
    </>
  );
}
