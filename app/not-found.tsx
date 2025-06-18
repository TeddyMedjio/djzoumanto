import React from "react";
import Container from "./components/container";
import Link from "next/link";

export default function notfound() {
  return (
    <div>
      <Container>
        <div className="h-[400px] w-full flex flex-col items-center justify-center mb-5 md:mb-20 gap-5">
          <div className="h-1 w-16 rounded-full bg-secondary mb-10"></div>
          <h1 className=" text-[33px] lg:text-6xl font-clash uppercase">
            Page not found
          </h1>
          <p className="text-white/75">Page was moved or doesn’t exist.</p>
          <Link
            href="/"
            className="bg-secondary text-black px-8 py-3 rounded-full hover:bg-white transition duration-300 ease-in-out"
          >
            Go to homepage
          </Link>
        </div>
      </Container>
    </div>
  );
}
