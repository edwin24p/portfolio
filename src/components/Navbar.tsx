import React, { useState } from "react";
import { Menu as MenuIcon, Close as CloseIcon } from "@mui/icons-material";
import { IconButton } from "@mui/material";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="flex justify-between py-6 md:px-10 px-6 absolute top-0 left-0 w-full text-white items-center">
      <div>
        <h3 className="text-xl">
          <span className="text-[#309F77]">&lt;</span>EdwinP
          <span className="text-[#309F77]">/&gt;</span>
        </h3>
      </div>
      <ul className="hidden md:flex list-none  gap-6">
        <li>
          <span className="group relative">
            <a href="#about">
              about me<span className="text-[#309F77]">.</span>
            </a>
            <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-[#309F77] transform scale-x-0 group-hover:scale-x-100  transition-transform duration-300 origin-left"></span>
          </span>
        </li>
        <li>
          <span className="group relative">
            <a href="#skills">
              skills<span className="text-[#309F77]">.</span>
            </a>
            <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-[#309F77] transform scale-x-0 group-hover:scale-x-100  transition-transform duration-300 origin-left"></span>
          </span>
        </li>
        <li>
          <span className="group relative">
            <a href="#projects">
              projects<span className="text-[#309F77]">.</span>
            </a>
            <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-[#309F77] transform scale-x-0 group-hover:scale-x-100  transition-transform duration-300 origin-left"></span>
          </span>
        </li>
        <li>
          <span className="group relative">
            <a href="#contact">
              contact<span className="text-[#309F77]">.</span>
            </a>
            <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-[#309F77] transform scale-x-0 group-hover:scale-x-100  transition-transform duration-300 origin-left"></span>
          </span>
        </li>
      </ul>
      <div className="md:hidden flex ">
        <IconButton onClick={toggleMenu} style={{ color: "white" }}>
          {isOpen ? "" : <MenuIcon sx={{ color: "white", fontSize: 32 }} />}
        </IconButton>
      </div>
      {isOpen && (
        <div className="md:hidden fixed top-0 right-0 h-full w-1/2 bg-black text-white p-10 z-50">
          <div className="flex justify-end mb-4">
            <IconButton onClick={toggleMenu} style={{ color: "white" }}>
              <CloseIcon sx={{ fontSize: 32 }} />
            </IconButton>
          </div>
          <ul className="list-none flex flex-col gap-6">
            <li>
              <a href="#about" onClick={toggleMenu}>
                about me<span className="text-[#309F77]">.</span>
              </a>
            </li>
            <li>
              <a href="#skills" onClick={toggleMenu}>
                skills<span className="text-[#309F77]">.</span>
              </a>
            </li>
            <li>
              <a href="#projects" onClick={toggleMenu}>
                projects<span className="text-[#309F77]">.</span>
              </a>
            </li>
            <li>
              <a href="#contact" onClick={toggleMenu}>
                contact<span className="text-[#309F77]">.</span>
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
