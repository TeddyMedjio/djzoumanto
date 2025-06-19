import React from "react";
import Container from "./container";
import Caroussel from "./caroussel";

export default function Testimonials() {
  return (
    <div id="testimonials" className="pt-20 pb-[100px]">
      <Container>
        {" "}
        {/* titre */}
        <div className="flex flex-col md:flex-row gap-20">
          <div className="space-y-5 flex-1/3">
            <div className="h-1 w-16 rounded-full bg-secondary mb-10"></div>
            <h1 className=" text-[33px] lg:text-5xl font-clash uppercase">
              testimonials
            </h1>
            <Caroussel autoSlide={true} />
          </div>
        </div>
      </Container>
    </div>
  );
}
