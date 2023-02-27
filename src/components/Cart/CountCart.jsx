import React from 'react'
import { ChevronDoubleLeftIcon,XMarkIcon} from "@heroicons/react/24/solid"
export default function CountCart({onCartToggle,totalQTY}) {
  return (
    <>
     <div className=' flex items-center justify-between p-2 bg-white '>
        <div className=' flex gap-2'>
            <div className=' cursor-pointer grid items-center ' onClick={onCartToggle}>
                <ChevronDoubleLeftIcon className=' w-5 h-5 text-slate-900  hover:text-orange-500'/>
            </div>
            <div className=''>
                <h4 className=' text-sm font-medium text-slate-900'>Your Cart <span className=' font-normal bg-theme-cart text-slate-100 px-2 py-0.5 rounded-sm shadow shadow-slate-900'>
                  {totalQTY} Items</span></h4>
            </div>
        </div>
        <div className='grid items-center ' onClick={onCartToggle}>
            <button className='bg-theme-cart text-slate-100 p-0.5 rounded-sm shadow shadow-slate-900 active:scale-90'> <XMarkIcon className=' w-5 h-5'></XMarkIcon> </button>
        </div>
     </div>   
    </>
  )
}
