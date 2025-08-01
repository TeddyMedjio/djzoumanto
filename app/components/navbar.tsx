import Link from "next/link";
import React from "react";
import Container from "./container";
import { NavMobile } from "./nav-mobile";

const navigation = [
  {
    name: "About",
    link: "#about",
  },
  {
    name: "Services",
    link: "#services",
  },
  {
    name: "testimonials",
    link: "#testimonials",
  },
  {
    name: "Contact",
    link: "#contact",
  },
];

export default function Navbar() {
  return (
    <Container>
      <nav className="flex items-center h-24">
        <Link href="/" className="font-clash flex-1/3 text-2xl">
          <span className="text-secondary">DJ</span>ZOUMANTO
        </Link>
        <ul className="flex-2/3 md:flex items-center gap-10 text-white/75 hidden ">
          {navigation.map((nav, index) => (
            <li key={index}>
              <Link
                href={nav.link}
                className="hover:text-secondary transition duration-300 ease-in-out"
              >
                {nav.name}
              </Link>
            </li>
          ))}
        </ul>
        <Link
          href="https://wa.me/676336034"
          className="border border-white/40 px-8 py-2 rounded-full hidden md:block hover:bg-secondary hover:text-black transition duration-300 ease-in-out"
          target="_blank"
        >
          Booking
        </Link>
        <NavMobile />
      </nav>
    </Container>
  );
}
