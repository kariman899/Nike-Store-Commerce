import React from "react";

export default function Footer({ footerAPI: { titles, links } }) {
  return (
    <>
      <footer className="bg-theme text-slate-200 ">
        <div className="nike-container py-4  max-w-4xl m-auto md:max-w-none" >
          <div className=" grid grid-cols-3 " >
            {titles.map((val, i) => (
              <div key={i}>
                <h4 className=" font-semibold mb-1 uppercase text-lg lg:text-base md:text-sm ">{val.title}</h4>
              </div>
            ))}
            {links.map((linksList,l)=>(
                <div>
                    <ul key={l}>
                        {linksList.map((singleLink,i)=>(
                            <li key={i} className="mb-0.5 text-sm sm:text-xs">{singleLink.link}</li>
                        )
                        )}
                    </ul>
                </div>
            ))}
          </div>
        </div>
      </footer>
    </>
  );
}
