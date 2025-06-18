import React from "react";
import Container from "./container";
import Link from "next/link";

const navigations = [
  {
    name: "About",
    link: "#",
  },
  {
    name: "Services",
    link: "#",
  },
  {
    name: "Testimonials",
    link: "#",
  },
  {
    name: "Contact",
    link: "#",
  },
];
const reseaux = [
  {
    name: "Spotify",
    link: "https://open.spotify.com/intl-fr/artist/31LVsorBiAYk7jtM7Hr41a",
  },
  {
    name: "Facebook",
    link: "https://www.facebook.com/djzoumanto",
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/djzoumanto/",
  },
  {
    name: "Snapchat",
    link: "https://snapchat.com/t/8cn9cXdB",
  },
];
export default function Footer() {
  return (
    <footer className="mb-10">
      <Container>
        <div className="w-full h-0.5 bg-gradient-to-r from-transparent via-white/50 mb-20 to-transparent"></div>
        <div className="flex flex-col md:flex-row md:justify-between">
          <div>
            <Link href="/" className="font-clash text-3xl">
              <span className="text-secondary">DJ</span>ZOUMANTO
            </Link>
            <p className="max-w-[300px] text-white/75 text-sm mt-4">
              Let’s keep your club packed with beats that move the crowd all
              night and create an unforgettable vibe.
            </p>
          </div>
          <div className="flex flex-row items-start gap-20 mt-10 md:mt-0">
            <ul className="flex flex-col gap-5">
              {navigations.map((nav, indx) => (
                <li key={indx}>
                  <Link
                    href={nav.link}
                    className="text-white/75 hover:text-secondary transition duration-300 ease-in-out"
                  >
                    {nav.name}
                  </Link>
                </li>
              ))}
            </ul>
            <ul className="flex flex-col gap-5">
              {reseaux.map((reseau, indx) => (
                <li key={indx}>
                  <Link
                    href={reseau.link}
                    className="text-white/75 hover:text-secondary transition duration-300 ease-in-out"
                    target="_blank"
                  >
                    {reseau.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="w-full h-0.5 bg-gradient-to-r from-transparent via-white/50 mt-20 to-transparent "></div>
        <div className="flex justify-between mt-10">
          <p className="text-sm text-white/75">
            © {new Date().getFullYear()} Copyright
          </p>
          <div className="flex items-center gap-1">
            <p className="text-white/75 text-sm">Build by</p>
            <Link
              href="https://www.medjio,me"
              className="underline text-secondary text-sm"
            >
              medjio
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
