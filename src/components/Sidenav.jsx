/* Importing Libary starts */
import React, { useState } from "react";
import {
  AiOutlineHome,
  AiOutlineMail,
  AiOutlineMenu,
  AiOutlineProject,
} from "react-icons/ai";
import { BsFillFileEarmarkArrowDownFill } from "react-icons/bs";
import { GiSkills } from "react-icons/gi";
import cv from "../Md_Rafiqul_Islam_Shanto.pdf";

/* Importing Libary end */

const Sidenav = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div>
      <AiOutlineMenu
        onClick={handleNav}
        className="absolute top-4 right-4 z-[99] md:hidden"
      />

      {/* HOme button  */}
      {nav ? (
        <div className="fixed w-full h-screen bg-white/90 flex flex-col justify-center items-center z-20">
          <a
            onClick={handleNav}
            href="#main"
            className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
          >
            <AiOutlineHome size={20} /> <span className="pl-4">Home</span>
          </a>
          <a
            onClick={handleNav}
            href="#skill"
            className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
          >
            <GiSkills size={20} /> <span className="pl-4">Expertise</span>
          </a>

          <a
            onClick={handleNav}
            href="#projects"
            className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
          >
            <AiOutlineProject size={20} />{" "}
            <span className="pl-4">Projects</span>
          </a>
          <a
            onClick={handleNav}
            download={cv}
            href="cv"
            className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
          >
            <BsFillFileEarmarkArrowDownFill size={20} />{" "}
            <span className="pl-4">Resume</span>
          </a>
          <a
            onClick={handleNav}
            href="#contact"
            className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
          >
            <AiOutlineMail size={20} /> <span className="pl-4">Contact</span>
          </a>
        </div>
      ) : (
        " " //show nothing
      )}
      {/* for large screen  */}
      <div className="md:block hidden fixed top-[25%] z-10 ">
        <div className=" flex flex-col">
          <a
            href="#main"
            className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300 "
          >
            <AiOutlineHome size={20} />
          </a>
          <a
            href="#skill"
            className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300 "
          >
            <GiSkills size={20} />
          </a>
          <a
            href="#projects"
            className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300 "
          >
            <AiOutlineProject size={20} />
          </a>
          <a
            href="cv"
            download={cv}
            className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300 "
          >
            <BsFillFileEarmarkArrowDownFill size={20} />
          </a>
          <a
            href="#contact"
            className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300 "
          >
            <AiOutlineMail size={20} />
          </a>
        </div>
      </div>
    </div>
  );
};
export default Sidenav;
