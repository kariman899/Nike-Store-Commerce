import React from "react";

export default function Hero({
  heroapi: { title, subtitle, img, btntext },
}) {
  return (
    <>
      <div className="relative h-auto w-auto flex flex-col">
        <div
          className=" bg-theme clip-path h-[85vh] lg:[75vh] md:h-[65vh]
            sm:h-[55vh] w-auto absolute top-0 left-0 right-0 z-10 opacity-100"></div>
        <div className=" z-20 nike-container grid items-center justify-items-center">
          <div className=" pt-20 md:pt-16 grid justify-items-center ">
            <h1 className=" text-6xl lg:text-5xl md:text-4xl sm:text-3xl xsm:text-2xl  text-center font-extrabold  drop-shadow-sm text-slate-200">{title}</h1>
            <h3 className=" pt-2 text-6xl lg:text-5xl md:text-4xl sm:text-3xl xsm:text-2xl font-extrabold  drop-shadow-sm text-slate-200">{subtitle}</h3>
            <button type="button" className=" button-theme  bg-slate-200 mt-5 mb-8 py-2 px-6">{btntext}</button>
          </div>
         {/**/}
          <div className="">
            <img src={img} alt="hero img" className=" w-auto h-[45vh]  
            md:h-[32vh] sm:h-[25vh] xsm:h-[24vh] transitions-theme rotate-[-25deg] hover:rotate-0  " />
          </div>
        </div>
      </div>
    </>
  );
}
