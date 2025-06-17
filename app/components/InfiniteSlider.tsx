"use client";

import { StarIcon } from "lucide-react";
import Slider from "react-infinite-logo-slider";

export default function InfiniteSlider() {
  return (
    <Slider
      width="280px"
      duration={10}
      pauseOnHover={false}
      blurBorders={true}
      blurBorderColor={"rgb(8, 8, 7)"}
    >
      <Slider.Slide>
        <p className="text-4xl font-clash text- stroke-1 text-nowrap text-white/5">
          TRUSTED DJFOR YOUR EVENT
        </p>
      </Slider.Slide>
      <Slider.Slide> </Slider.Slide>
      <Slider.Slide>
        <p className=" text-4xl text-nowrap font-clash text-white/10">
          DJ ZOUMANTO
        </p>
      </Slider.Slide>
    </Slider>
  );
}
