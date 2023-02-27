import React from 'react'

export default function Title({title}) {
  return (
    <div className=' grid items-center mb-6 '>
       <h1 className=' text-5xl
       md:text-3xl font-bold drop-shadow-lg text-slate-800 '>{title}</h1> 
    </div>
  )
}
