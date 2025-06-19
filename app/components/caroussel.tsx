"use client";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

const items = [
  {
    img: "https://framerusercontent.com/images/x6TJyaGK2GXqIh1FbXTgGoaymE.png?scale-down-to=512",
    title: "Expert at Reading the Crowd and Elevating the Night",
    descrip:
      "An absolute game-changer for our venue! He knows how to read the crowd and keep the energy high all night. Our guests were raving about his set, and we saw a significant boost in attendance.",
    author: "Sonic Lounge",
  },
  {
    img: "https://framerusercontent.com/images/0y5CmE12IRnG5tdRcEjMLrv1s2A.jpg?scale-down-to=512",
    title: "Unforgettable Vibes and Packed Dance Floors",
    descrip:
      "Booking this DJ was the best decision we made. His energy and track selection kept our club packed till closing time. The crowd couldn't get enough, and we’ve already had requests to bring him back!",
    author: "Pulse Nightclub",
  },
  {
    img: "https://framerusercontent.com/images/x6TJyaGK2GXqIh1FbXTgGoaymE.png?scale-down-to=512",
    title: "Expert at Reading the Crowd and Elevating the Night",
    descrip:
      "An absolute game-changer for our venue! He knows how to read the crowd and keep the energy high all night. Our guests were raving about his set, and we saw a significant boost in attendance.",
    author: "Sonic Lounge",
  },
  {
    img: "https://framerusercontent.com/images/0y5CmE12IRnG5tdRcEjMLrv1s2A.jpg?scale-down-to=512",
    title: "Unforgettable Vibes and Packed Dance Floors",
    descrip:
      "Booking this DJ was the best decision we made. His energy and track selection kept our club packed till closing time. The crowd couldn't get enough, and we’ve already had requests to bring him back!",
    author: "Pulse Nightclub",
  },
];

export default function Caroussel({
  autoSlide = false,
  autoSlideInterval = 5000,
}) {
  const [curr, setCurr] = useState(0);

  // autoplay
  useEffect(() => {
    if (!autoSlide) return;
    const slideInterval = setInterval(next, autoSlideInterval);
    return () => clearInterval(slideInterval);
  }, []);

  // button sliders function
  const prev = () =>
    setCurr((curr) => (curr === 0 ? items.length - 1 : curr - 1));
  const next = () =>
    setCurr((curr) => (curr === items.length - 1 ? 0 : curr + 1));

  return (
    <div className="relative mt-10 overflow-hidden">
      <div className="w-full flex">
        {items.map((item, idx) => (
          <div
            key={idx}
            className="flex h-[352px] w-full max-w-[1120px] shrink-0 gap-10 transition duration-500 ease-in-out"
            style={{ transform: `translateX(-${curr * 100}%)` }}
          >
            <Image
              src={item.img}
              height={352}
              width={352}
              alt="image club"
              className=" hidden lg:block rounded-3xl"
            />
            <div className="bg-card p-10 flex items-center justify-center rounded-3xl relative">
              <div className="absolute inset-0">
                <Image
                  src={item.img}
                  fill={true}
                  alt="image club"
                  className="lg:hidden rounded-3xl opacity-5 -z-1"
                />
              </div>
              <div className="space-y-7">
                <p className="text-2xl">{item.title}</p>
                <p className="text-white/75">{item.descrip}</p>
                <div className="flex items-center">
                  <div className="w-8 h-[2px] bg-secondary rounded-full mr-5"></div>
                  <p className="text-white/75">{item.author}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-end mt-5 gap-5">
        <button onClick={prev} className="cursor-pointer">
          <ArrowLeft size={40} />
        </button>
        <button onClick={next} className="cursor-pointer">
          <ArrowRight size={40} />
        </button>
      </div>
    </div>
  );
}
