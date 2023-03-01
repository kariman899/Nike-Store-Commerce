import React from 'react'

export default function TotalCart({clearCart,cartAmout}) {
   
  return (
    <>
    <div className=" fixed bottom-0 bg-white w-full px-5 py-2 grid items-center">
            <div className="my-2 flex justify-between items-center">
              <h5 className=" font-medium">SubTotal</h5>
              <span
                className="bg-theme-cart text-slate-100 px-1 rounded-sm shadow 
              shadow-slate-900 "
              >
                ${cartAmout}
              </span>
            </div>
            <div className="mt-2 text-center">
              <div className="flex justify-between gap-2">
                <button onClick={clearCart} className="bg-theme-cart text-slate-100 px-1 rounded-sm shadow shadow-slate-900 w-full py-1">
                  Clear Cart
                </button>
              </div>
            </div>
          </div>
    </>
  )
}
