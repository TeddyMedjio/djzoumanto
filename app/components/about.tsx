import React from "react";
import Container from "./container";
import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <div>
      <Container>
        <div
          id="about"
          className="flex flex-col md:flex-row md:items-center mb-10 md:mb-20 pt-20 pb-[100px]"
        >
          {/* bloc image */}
          <div className="relative h-[350px] md:h-[544px] md:w-[250px] lg:h-[544px] lg:w-[448px] rounded-3xl bg-card md:mt-0 ">
            <div className="absolute h-full w-full md:left-5 top-5 overflow-hidden rounded-3xl">
              <Image
                src="/zoumanto2.jpeg"
                alt="image du dj"
                fill={true}
                className=" h-full w-full right-4 object-cover"
              />
            </div>
          </div>

          {/* partie de droite avec les textes */}
          <div className="flex-1 md:ml-20 lg:ml-30">
            {/* bloc de textes */}
            <div className="space-y-5">
              <div className="h-1 w-16 rounded-full bg-secondary mb-10"></div>
              <h1 className=" text-4xl lg:text-5xl font-clash uppercase">
                Have Been a dj my whole life
              </h1>
              <p className="text-white/75 max-w-md">
                With years of experience behind the decks, I bring a high-energy
                mix that keeps crowds on their feet. <br /> <br /> From deep
                house grooves to the latest club hits, my sets are crafted to
                turn any venue into an electrifying experience. <br /> <br /> My
                passion is creating unforgettable nights that leave people
                talking long after the lights come up.
              </p>
            </div>
            {/* buttons */}
            <div className="mt-8 flex flex-col md:flex-row items-start md:items-center gap-10">
              <Link
                href="/"
                className="border border-white/40 px-8 py-3 rounded-full hidden md:block hover:bg-white hover:text-black transition duration-300 ease-in-out"
              >
                Contact me
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
