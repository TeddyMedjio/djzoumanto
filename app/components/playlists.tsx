import React from "react";
import Container from "./container";
import Link from "next/link";
import { StepForward } from "lucide-react";

const playlists = [
  {
    name: "house",
    descp:
      "Crafting smooth, groovy house vibes to set the perfect mood and keep the dance floor packed.",
    link: "#",
  },
  {
    name: "Amapiano",
    descp:
      "Explosive AMAPIANO sets filled with crowd-favorite anthems to fuel the party and elevate the energy.",
    link: "#",
  },
  {
    name: "Techno",
    descp:
      "Delivering deep, pulsating techno tracks that create an intense, immersive dance experience.",
    link: "#",
  },
  {
    name: "Electro",
    descp:
      "Bringing high-energy electro beats that electrify the atmosphere and keep the crowd moving till dawn.",
    link: "#",
  },
];

export default function Playlists() {
  return (
    <div id="services" className="pt-20 pb-[100px]">
      <Container>
        {/* titre */}
        <div className="grid place-items-center mb-5 md:mb-20">
          <div className="h-1 w-16 rounded-full bg-secondary mb-10"></div>
          <h1 className=" text-[33px] lg:text-5xl font-clash uppercase">
            This is what I play
          </h1>
        </div>
        {/* playlists */}
        {playlists.map((playlist, indx) => (
          <Link
            key={indx}
            href={playlist.link}
            className="group grid grid-cols-1 md:grid-cols-6 grid-rows-1 border-b border-white/20 py-10 w-full"
          >
            <div className="flex items-center md:items-start justify-between md:col-span-2">
              <h2 className="text-3xl font-clash uppercase ">
                {playlist.name}
              </h2>
              <div className="md:hidden bg-white group-hover:bg-secondary p-2 rounded-full transition duration-300 ease-in-out w-fit">
                <StepForward size={20} className="text-background" />
              </div>
            </div>
            <p className="text-white/75 col-span-3 mr-8 mt-5 md:mt-0">
              {playlist.descp}
            </p>
            <div className="hidden col-span-1 md:flex justify-end ">
              <div className="bg-white  p-2 rounded-full transition duration-300 ease-in-out size-12 overflow-">
                <div className="flex gap-1 -translate-x-9 group-hover:-translate-x-0 transition duration-300 ease-in-out">
                  <StepForward size={32} className="text-background shrink-0" />
                  <StepForward size={32} className="text-background shrink-0" />
                </div>
              </div>
            </div>
          </Link>
        ))}
      </Container>
    </div>
  );
}
