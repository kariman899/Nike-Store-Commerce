import React from 'react'
import { ArrowLeftIcon } from '@heroicons/react/24/outline'
import emptybag from "../../assets/emptybag.png"

export default function EmptyCart({onCartToggle}) {
  return (
    <>
    <div className=' flex flex-col justify-center items-center h-full gap-8'>
        <img src={emptybag} alt="" className=' w-40 lg:w-36 sm:w-28 transition-all duration-300 hover:scale-110' />
        <button onClick={onCartToggle} className=' flex items-center justify-center button-theme bg-gradient-to-b from-amber-500 to-orange-500 shadow-lg shadow-orange-500 py-2 gap-3 text-sm font-medium'>
            <ArrowLeftIcon className=' w-5 h-5 transition-all duration-300 active:scale-110'></ArrowLeftIcon>
            <span>Back To Nike Store</span>
        </button>
    </div>
    </>
  )
}
