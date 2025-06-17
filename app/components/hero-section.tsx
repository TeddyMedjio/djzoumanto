import React from "react";
import Container from "./container";
import Headphone from "./icons/headphone";
import Link from "next/link";
import Image from "next/image";

export default function HeroSection() {
  return (
    <div className="mt-5 md:mt-20">
      <Container>
        <div className="flex flex-col md:flex-row md:items-center">
          {/* partie de gauche avec les textes */}
          <div className="flex-1 md:mr-10">
            {/* icon ecouteur */}
            <div className="relative w-fit border-white/20 border rounded-full p-3">
              <span className="absolute inset-1.5 border border-white/40 rounded-full"></span>
              <span className="absolute inset-3.5 border border-white/70 rounded-full"></span>
              <Headphone />
            </div>
            {/* bloc de textes */}
            <div className="space-y-5 mt-5">
              <p className="">Dj Zoumanto, Club Dj</p>
              <h1 className=" text-5xl lg:text-6xl font-clash uppercase">
                Dj that keeps your club full all night long
              </h1>
              <p className="text-white/75 max-w-md">
                Let’s keep your club packed with beats that move the crowd all
                night and create an unforgettable vibe.
              </p>
            </div>
            {/* buttons */}
            <div className="mt-8  flex flex-col md:flex-row items-start md:items-center gap-10">
              <Link
                href="/"
                className="bg-secondary text-black px-8 py-3 rounded-full hover:bg-white transition duration-300 ease-in-out"
              >
                Contact me
              </Link>
              <Link
                href="/"
                className="border border-white/40 px-8 py-3 rounded-full hidden md:block hover:bg-white hover:text-black transition duration-300 ease-in-out"
              >
                Watch video
              </Link>
            </div>
          </div>

          {/* bloc image */}
          <div className="relative h-[350px] md:h-[544px] md:w-[250px] lg:h-[544px] lg:w-[448px] rounded-3xl bg-card mt-10 md:mt-0">
            <div className="absolute h-full w-full md:right-5 top-5 overflow-hidden rounded-3xl">
              <Image
                src="https://framerusercontent.com/images/77pASphUGg97ObRS40Yx3JUNmo.jpg?scale-down-to=1024"
                alt="image du dj"
                fill={true}
                className=" h-full w-full right-4 object-cover"
              />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
