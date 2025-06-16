import Link from "next/link";
import React from "react";

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
    <nav className="mx-auto sm:px-5 lg:px-0 lg:max-w-[1120px] flex items-center h-24">
      <Link href="/" className="font-clash flex-1/3 text-2xl">
        <span className="text-secondary">DJ</span>ZOUMANTO
      </Link>
      <ul className="flex-2/3 flex items-center gap-10 text-white/75">
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
  );
}
