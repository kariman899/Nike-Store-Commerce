import React from 'react'

export default function TotalCart({clearCart,cartAmout}) {
   
  return (
    <>
    <div className=" fixed bottom-0 bg-white w-full px-5 py-2 grid items-center">
            <div className=" flex justify-between items-center">
              <h5 className=" font-medium">SubTotal</h5>
              <span
                className="bg-theme-cart text-slate-100 px-1 rounded-sm shadow 
              shadow-slate-900 "
              >
                ${cartAmout}
              </span>
            </div>
            <div className=" text-center">
              <p className="my-1 text-sm ">
                Taxes and Shipping Will Calculate At Shipping
              </p>
              <div className=" flex justify-between gap-2">
                <button onClick={clearCart} className="bg-theme-cart text-slate-100 px-1 rounded-sm shadow shadow-slate-900 w-3/5 py-1">
                  Clear Cart
                </button>

                <button className="bg-theme-cart text-slate-100 px-1 rounded-sm shadow shadow-slate-900 w-3/5 py-1">
                  Check Out
                </button>
              </div>
            </div>
          </div>
    </>
  )
}
