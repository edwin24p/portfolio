import React from "react";
import Skill from "./Skill";

const Skills: React.FC = () => {
  return (
    <div className="bg-[#202020] text-white" id="skills">
      <h2 className="text-center font-medium text-3xl py-12 md:py-8">
        Technologies I Work With
      </h2>
      <div className="flex flex-wrap md:px-20 md:py-10 justify-center gap-8 md:gap-16 px-6 pb-12">
        <Skill
          img="/figma.png"
          title="Figma"
          desc="I use Figma for web design because it provides a streamlined and collaborative environment for creating high-quality user interfaces. "
        />
        <Skill
          img="/webtech.png"
          title="HTML,CSS,JS"
          desc="With a keen eye for detail and aesthetics I am able to develop everything from the most simple and efficient websites to complex animations to bring your website to life."
        />
        <Skill
          img="/react.png"
          title="React"
          desc="When static websites are not enough I am able to create complex web applications thanks to react which provides me with state management, reusable UI components and everything else I need for an amazing UI experience."
        />
        <Skill
          img="/tailwind.png"
          title="Tailwind"
          desc="I use Tailwind CSS for styling because it offers a utility-first approach that allows for rapid development and easy customization."
        />
        <Skill
          img="/c++.png"
          title="C++"
          desc="C++ is a versatile object oriented programming language that I use for developing high-performance applications that require efficient memory management and real-time processing."
        />
        <Skill
          img="/python.png"
          title="Python"
          desc="I have utilized Python for data analysis and working with data structures due to its powerful libraries like Pandas and NumPy. "
        />
      </div>
    </div>
  );
};

export default Skills;
