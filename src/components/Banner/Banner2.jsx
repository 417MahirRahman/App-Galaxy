import React from "react";
import banner from "../../assets/hero.png"

const Banner2 = () => {
  return (
    <div className="py-5">
      <div className="">
        <img className="w-4/5 lg:w-1/3 mx-auto" src={banner} alt="" />
      </div>

      <div className="mx-5 md:mx-0 bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-[#FFFFFF] text-center lg:px-10 lg:py-5">

        <h1 className="p-7 text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold">Trusted by Millions, Built for You</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 p-5">

          <div className="lg:space-y-5">
            <p className="font-light text-[#FFFFFF]/70 text-lg">Total Downloads</p>
            <h1 className="font-bold text-4xl lg:text-4xl xl:text-7xl">29.6M</h1>
            <p className="font-light text-[#FFFFFF]/70 text-lg">21% more than last month</p>
          </div>

          <div className="lg:space-y-5">
            <p className="font-light text-[#FFFFFF]/70 text-lg">Total Reviews</p>
            <h1 className="font-bold text-4xl lg:text-4xl xl:text-7xl">906K</h1>
            <p className="font-light text-[#FFFFFF]/70 text-lg">46% more than last month</p>
          </div>

          <div className="lg:space-y-5">
            <p className="font-light text-[#FFFFFF]/70 text-lg">Active Apps</p>
            <h1 className="font-bold text-4xl lg:text-4xl xl:text-7xl">132+</h1>
            <p className="font-light text-[#FFFFFF]/70 text-lg">31 more will Launch</p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Banner2;
