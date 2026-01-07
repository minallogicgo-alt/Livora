import Image from "next/image";
import MarqueeSlider from "./Pages/MarqueeSlider/page";
import About from "./Pages/About/page";

export default function Home() {
  return (
    <>
      <MarqueeSlider />
      <About />
    </>
  );
}
