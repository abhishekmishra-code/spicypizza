import React from "react";
import Specials from "./Specials";
import Promise from "./Promise";
import Location from "./Location";
import Footer from "./Footer";
import Hero from "./Hero";

export default function Home() {
  return (
    <>
      <Hero />
      <Specials />
      <Promise />
      <Location />
      <Footer />
    </>
  );
}
