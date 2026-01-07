import Image from "next/image";
import MarqueeSlider from "./Pages/MarqueeSlider/page";
import About from "./Pages/About/page";
import WorkBanner from "./Pages/Work-Banner/page";
import Expertise from "./Pages/Our-Expertise/page";

export default function Home() {
  return (
    <>
      <MarqueeSlider />
      <About />
      <WorkBanner />
      <Expertise/>
    </>
  );
}
