"use client";
import { ArrowBigUp } from "lucide-react";
import React, { useCallback, useEffect, useState } from "react";

const Button = () => {
  const [height, setHeight] = useState<number>(0);
  const [scrollY, setScrollY] = useState<number>(0);
  const [clientWindow, setClientWindow] = useState<Window>();

  const handleEvent = useCallback(() => {
    setHeight(window.innerHeight);
    setScrollY(window.scrollY);
    setClientWindow(window);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleEvent);
    handleEvent();
    return () => {
      window.removeEventListener("scroll", handleEvent);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const showArrowTop = scrollY > height ? true : false;
  const handleClick = () => {
    clientWindow?.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={handleClick}
      className={`${
        showArrowTop
          ? "fixed text-black bottom-0 right-0 bg-secondary hover:bg-secondary z-50 rounded-full h-10 w-10 mb-10 me-1 grid place-items-center cursor-pointer"
          : "hidden"
      }`}
    >
      <span>
        <ArrowBigUp />
      </span>
    </button>
  );
};

export default Button;
