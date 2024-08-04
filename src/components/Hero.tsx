import React from "react";
import Navbar from "./Navbar";

const Hero: React.FC = () => {
  return (
    <div className="relative bg-banner h-screen bg-cover bg-center ">
      <Navbar />
      <div className="flex justify-center items-center  h-[80vh] text-white">
        <div>
          <h1 className="text-5xl font-semibold tracking-wider w-full text-center mb-6 ">
            EDWIN PADILLA
          </h1>
          <p className="text-center">Web Developer/Designer</p>
        </div>
      </div>
      <div className="absolute bottom-10 w-full flex justify-center">
        <svg
          width="40"
          height="100"
          viewBox="0 0 24 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="animate-bounce"
        >
          <path
            d="M12 0V90"
            stroke="#309F77"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M19 70L12 90L5 70"
            stroke="#309F77"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>
  );
};

export default Hero;
