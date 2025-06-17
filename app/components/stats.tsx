import React from "react";
import Container from "./container";

const stats = [
  {
    num: "10+",
    descrip: "Years of experience",
  },
  {
    num: "120+",
    descrip: "Clubs VIsited",
  },
  {
    num: "1k+",
    descrip: "Performances done",
  },
  {
    num: "100k+",
    descrip: "Monthly listeners",
  },
];

export default function Stats() {
  return (
    <div className="my-20 md:my-40">
      <Container>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-20">
          {stats.map((stat, indx) => (
            <div key={indx} className="text-center space-y-2">
              <h1 className="font-clash text-5xl lg:text-6xl">{stat.num}</h1>
              <p className=" text-lg md:text-xl text-white/75">
                {stat.descrip}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}
