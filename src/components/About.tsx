import React from "react";
import "./About.css";

const About: React.FC = () => {
  return (
    <div
      className="bg-[#0F0F0F] flex text-white flex-col md:flex-row px-8 md:px-0"
      id="about"
    >
      <div className="md:w-1/2 p-8 md:p-20 ">
        <h2 className="text-3xl font-bold text-center mb-5 md:hidden">
          About Me
        </h2>
        <div className=" relative about-image-container ">
          <img src="/code2.jpg" alt="About Me" className="relative z-10 " />
        </div>
      </div>
      <div className="md:w-1/2 md:p-20 p-8">
        <h2 className="text-3xl mb-5 font-bold hidden md:block">About Me</h2>
        <p className="font-light leading-loose text-center md:text-justify">
          Hello! My name is Edwin Padilla, a computer science student currently
          pursuing my Bachelor's at University of Michigan. Most of my interests
          revolve around topics such as web development but I have also gained
          interest for topics such as software engineering, data structures and
          data analysis. Over the years I have been able to learn new and modern
          technologies that go hand in hand with the ever evolving field of
          software engineering. My main goal is to learn as much as I can and
          perfect my coding habilties by working on new projects :).
        </p>
      </div>
    </div>
  );
};

export default About;
