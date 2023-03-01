import React from "react";
import Title from "./../utils/Title";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { ClockIcon, HashtagIcon, HeartIcon } from "@heroicons/react/24/solid";
import { truncate } from "lodash";

export default function Stories({ story: { title, news } }) {
  const splideOptions = {
    perPage: 4,
    perMove: 1,
    type: "loop",
    rewind: true,
    keyboard: "global",
    gap: "1rem",
    pagination: false,
    padding: "2rem",
    breakpoints: {
      1200: { perPage: 3 },
      991: { perPage: 2.3 },
      768: { perPage: 2 },
      500: { perPage: 1.3 },
      425: { perPage: 1 },
    },
  };
  return (
    <>
      <div className="nike-container">
        <Title title={title} />
        <div>
          <Splide options={splideOptions}>
            {news.map((val, i) => (
              <SplideSlide key={i} className="mb-0.5 ">
                <div className=" relative grid  items-center gap-4 xsm:gap-2 pb-2 rounded-lg shadow shadow-slate-200 ring-1 ring-slate-200">
                  <div>
                    <img
                      src={val.img}
                      alt=""
                      className=" object-cover w-full h-auto rounded-tr-lg rounded-tl-lg"
                    />
                  </div>
                  <div className=" flex  xsm:block items-center justify-between px-4">
                    <div className="flex gap-6 sm:gap-2 xsm:justify-between">
                      <div className="flex gap-0.5 items-center">
                        <HeartIcon className="icon-style text-red-600 w-5  h-5 "></HeartIcon>
                        <span className=" font-bold text-xs xsm:text-[12px] ">
                          {val.like}
                        </span>
                      </div>
                      <div className="flex gap-0.5 items-center ">
                        <ClockIcon className="icon-style  text-black w-5  h-5 "></ClockIcon>
                        <span className=" font-bold text-xs xsm:text-[12px] ">
                          {val.time}
                        </span>
                      </div>
                    </div>
                    <div className="flex  gap-0.5 items-center xsm:mt-2 ">
                      <HashtagIcon className="icon-style text-blue-600 w-5 h-5 "></HashtagIcon>
                      <span className=" font-bold text-xs text-blue-600 xsm:text-[12px]">
                        {val.by}
                      </span>
                    </div>
                  </div>
                  <div className="px-4">
                    <h3 className=" font-semibold text-base lg:text-sm">
                      {val.title}
                    </h3>
                    <p className=" text-sm lg:text-xs mt-1">
                      {truncate(val.text, { length: 160 })}
                    </p>
                  </div>
                  <div className="px-4 flex items-center justify-center w-full">
                    <a
                      href={val.url}
                      target="_blank"
                      role={"button"}
                      className="className=' text-center w-full button-theme bg-slate-900 shadow-slate-900 text-slate-100 py-1.5'"
                    >
                      {val.btn}
                    </a>
                  </div>
                </div>
              </SplideSlide>
            ))}
          </Splide>
        </div>
      </div>
    </>
  );
}
