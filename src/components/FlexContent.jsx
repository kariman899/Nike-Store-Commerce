import React from 'react'

export default function FlexContent({ ifExist,endpoint : {heading,title,text,btn,url,img}}) {
  return (
    <>
    <div className={`nike-container flex  justify-between items-center lg:flex-col lg:justify-center
    ${ifExist ? `flex-row-reverse`: `flex-row`}`}>
    <div className=' max-w-lg lg:max-w-none md:text-center'>
        <h2 className=' text-4xl sm:text-3xl font-bold text-gradient'>{heading}</h2>
        <h4 className='text-5xl
       md:text-3xl font-bold drop-shadow-lg text-slate-800'>{title}</h4>
        <p className=' xl:text-sm my-5 text-slate-900'>{text}</p>
        <a href={url} target={'_blank'} role="button">
            <button className=' button-theme bg-slate-900 shadow-slate-900 text-slate-100 py-1.5'>{btn}</button>
        </a>
    </div>
    <div className=' max-w-xl lg:max-w-none w-full flex justify-center'>
        <img src={img} alt="" className={` h-60 lg:h-56 md:h-52 sm:h-44 w-auto object-fill transitions-theme ${ifExist ? ` rotate-6 hover:-rotate-12 md:mt-4 `:` rotate-[20deg] sm:rotate-[10deg] hover:rotate-12`} `} />
    </div>
    </div>
    
    </>
  )
}
