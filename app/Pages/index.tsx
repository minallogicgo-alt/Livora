import React from "react";
import Hero from "./Hero/page";
import MarqueSlider1 from "./MarqueeSlider/page";
import About from "./About/page";
import WorkBanner from "./Work-Banner/page";

export default function Index(){
    return (
       <>
       <Hero/>
       <MarqueSlider1/>
       <About/>
       <WorkBanner/>
       </>

    )
}