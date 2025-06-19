"use client";

import Slider from "react-infinite-logo-slider";

export default function InfiniteSlider() {
  return (
    <Slider
      width="370px"
      duration={10}
      pauseOnHover={false}
      blurBorders={true}
      blurBorderColor={"rgb(8, 8, 7)"}
    >
      <Slider.Slide>
        <p className="text-5xl font-clash stroke-1 text-nowrap text-white/5">
          TRUSTED DJFOR YOUR EVENT
        </p>
      </Slider.Slide>
      <Slider.Slide> </Slider.Slide>
      <Slider.Slide>
        <p className=" text-5xl text-nowrap font-clash text-white/10">
          DJ ZOUMANTO
        </p>
      </Slider.Slide>
    </Slider>
  );
}
