import React from "react";
import Container from "./container";
import Headphone from "./icons/headphone";
import Link from "next/link";
import Image from "next/image";
import RotateText from "./icons/rotate-text";

export default function HeroSection() {
  return (
    <div className="md:pt-20 pb-[100px] relative overflow-hidden">
      <span className="hidden md:block absolute top-30 -left-10 h-[500px] w-[500px] bg-secondary/5 rounded-full blur-[100px] -z-50"></span>
      <span className="hidden md:block absolute top-60 -right-10 h-[500px] w-[500px] bg-secondary/5 rounded-full blur-[100px] -z-50"></span>
      <Container>
        <div className="flex flex-col md:flex-row md:items-center">
          {/* partie de gauche avec les textes */}
          <div className="flex-1 md:mr-10">
            {/* icon ecouteur */}
            <div className="hidden md:block relative w-fit border-white/20 border rounded-full p-3">
              <span className="absolute inset-1.5 border border-white/40 rounded-full"></span>
              <span className="absolute inset-3.5 border border-white/70 rounded-full"></span>
              <Headphone />
            </div>
            {/* bloc de textes */}
            <div className="space-y-5 mt-8">
              <p className="">Dj Zoumanto, Club Dj</p>
              <h1 className=" text-[38px] leading-[44px] md:leading-none md:text-5xl lg:text-6xl font-clash uppercase">
                Dj that keeps your club full all night long
              </h1>
              <p className="text-white/75 max-w-md">
                Let&apos;s keep your club packed with beats that move the crowd
                all night and create an unforgettable vibe.
              </p>
            </div>
            {/* buttons */}
            <div className="mt-8  flex flex-col md:flex-row items-start md:items-center gap-10">
              <Link
                href="#contact"
                className="bg-secondary text-black px-8 py-3 rounded-full hover:bg-white transition duration-300 ease-in-out"
              >
                Contact me
              </Link>
            </div>
          </div>

          {/* bloc image */}
          <div className="relative h-[350px] md:h-[544px] md:w-[250px] lg:h-[544px] lg:w-[448px] rounded-3xl bg-card mt-10 md:mt-0">
            {/* button play animate */}
            <Link
              href="https://open.spotify.com/intl-fr/artist/31LVsorBiAYk7jtM7Hr41a"
              className="absolute top-10 left-10 md:-left-10 size-20 rounded-full bg-white/4 z-10 hover:scale-120 transition duration-300 ease-in-out"
              target="_blank"
            >
              <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  fill="none"
                >
                  <path
                    fill="#fff"
                    d="M0 2.236A2 2 0 0 1 2.894.447l17.528 8.764c1.474.737 1.474 2.84 0 3.578L2.894 21.553A2 2 0 0 1 0 19.763V2.237Z"
                  />
                </svg>
              </span>
              <div className="absolute inset-0 -top-2 -left-2">
                <RotateText />
              </div>
            </Link>
            <div className="absolute h-full w-full md:right-5 top-5 overflow-hidden rounded-3xl">
              <Image
                src="/zoumanto.jpeg"
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
