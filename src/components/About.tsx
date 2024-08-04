import React from "react";
import "./About.css";

const About: React.FC = () => {
  return (
    <div className="bg-[#0F0F0F] flex text-white flex-col md:flex-row">
      <div className="md:w-1/2 p-8 md:p-20 ">
        <h2 className="text-3xl font-bold text-center mb-5 md:hidden">
          About Me
        </h2>
        <div className=" relative about-image-container ">
          <img src="/about.jpg" alt="About Me" className="relative z-10 " />
        </div>
      </div>
      <div className="md:w-1/2 md:p-20 p-8">
        <h2 className="text-3xl mb-5 font-bold hidden md:block">About Me</h2>
        <p className="font-light leading-loose text-center md:text-justify">
          Lorem ipsum dolor sit amet consectetur. Ipsum bibendum id amet aliquam
          ante lectus. Habitasse urna faucibus cras metus facilisis integer
          tellus cursus risus. Sed etiam scelerisque tellus velit dignissim
          porttitor. Nec nulla suscipit urna orci diam. Donec tempor dictumst
          urna ullamcorper. Adipiscing id egestas placerat quis lectus nunc. Nam
          tincidunt sodales convallis amet donec senectus tortor pulvinar arcu.
        </p>
      </div>
    </div>
  );
};

export default About;
