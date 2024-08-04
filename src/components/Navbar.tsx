import React from "react";

const Navbar: React.FC = () => {
  return (
    <div className="flex justify-between py-6 px-10 absolute top-0 left-0 w-full text-white">
      <div className="">
        <h3>
          <span className="text-[#309F77]">&lt;</span>EdwinP
          <span className="text-[#309F77]">/&gt;</span>
        </h3>
      </div>
      <ul className="list-none flex gap-6">
        <li>
          <a href="">
            about me<span className="text-[#309F77]">.</span>
          </a>
        </li>
        <li>
          <a href="">
            skills<span className="text-[#309F77]">.</span>
          </a>
        </li>
        <li>
          <a href="">
            projects<span className="text-[#309F77]">.</span>
          </a>
        </li>
        <li>
          <a href="">
            contact<span className="text-[#309F77]">.</span>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
