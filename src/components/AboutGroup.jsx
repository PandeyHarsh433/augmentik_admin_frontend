import React from "react";
import About from "./About";

const AboutGroup = ({ data }) => {
  return (
    <div className=" ">
      {data &&
        data.map((card, index) => {
          return (
            <div
              className="relative left-[40%] top-10 md:left-0 w-[30%] item-center  md:w-[100%]"
              key={index}
            >
              <div className="flex flex-col mt-20">
                <About data={card} />;
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default AboutGroup;
