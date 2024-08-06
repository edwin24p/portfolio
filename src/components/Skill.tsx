import React from "react";

interface SkillProps {
  img: string;
  title: string;
  desc: string;
}
const Skill: React.FC<SkillProps> = ({ img, title, desc }) => {
  return (
    <div className="border-2 border-white p-5 md:px-10 md:py-8 rounded-md w-40 md:w-56  group relative">
      <img src={img} alt="" className="mx-auto h-36" />
      <h3 className="text-center my-4">{title}</h3>
      <p className="hidden group-hover:block absolute inset-0 bg-black bg-opacity-70 text-white items-center justify-center p-4 rounded-md text-center">
        {desc}
      </p>
    </div>
  );
};

export default Skill;
