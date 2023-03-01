import React from "react";
import {
  Navbar,
  Hero,
  Sales,
  FlexContent,
  Stories,
  Footer,
  Cart,
} from "./components";
import {
  heroapi,
  popularsales,
  toprateslaes,
  highlight,
  sneaker,
  story,
  footerAPI,
} from "./data/data.js";

export default function App() {
  return (
    <>
      {" "}
      <Navbar></Navbar>
      <Cart></Cart>
      <main className=" flex flex-col gap-16 ">
        <Hero heroapi={heroapi}></Hero>
        <Sales endpoint={popularsales} ifExist></Sales>
        <FlexContent endpoint={highlight} ifExist></FlexContent>
        <Sales endpoint={toprateslaes}></Sales>
        <FlexContent endpoint={sneaker}></FlexContent>
        <Stories story={story}></Stories>
        <Footer footerAPI={footerAPI}></Footer>
      </main>
    </>
  );
}
