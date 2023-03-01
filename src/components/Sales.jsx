import React, { useEffect } from "react";
import Items from "../utils/Items";
import Title from "../utils/Title";

export default function Sales({ifExist, endpoint: { title, items } }) {
  return (
    <>
      <div className="nike-container">
        <Title title={title}/>
        <div className={` grid  gap-x-5 ${ifExist ? `grid-cols-3 lg:grid-cols-2 md:grid-cols-1 
        `:`grid-cols-4 lg:grid-cols-3 md:grid-cols-2 
        sm:grid-cols-1`}`}>
          {items?.map((item, i) => (
            <Items {...item} key={i} ifExist={ifExist} />
          ))}
        </div>
      </div>
    </>
  );
}
