import Link from "next/link";
import React from "react";
import Container from "./container";

const navigation = [
  {
    name: "About",
    link: "/",
  },
  {
    name: "Services",
    link: "/",
  },
  {
    name: "testimonials",
    link: "/",
  },
  {
    name: "Contact",
    link: "/",
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
                className="hover:text-white transition duration-300 ease-in-out"
              >
                {nav.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </Container>
  );
}
