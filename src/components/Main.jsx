import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { GoMarkGithub } from "react-icons/go";
import { TypeAnimation } from "react-type-animation";
import Bg from "../assets/images/bg-12.png"; /*  background import  */
export const Main = () => {
  return (
    <div id="main">
      <img
        className="w-full h-screen object-cover object-left scale-x-[1]"
        src={Bg}
        alt=""
      />
      <div className="w-full h-screen absolute top-0 left-0 bg-white/50">
        <div className="title max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center">
          <h2 className=" sm:text-2xl float-left text-3xl  text-grey-800">
            Hello! It is
          </h2>
          <h1 className="sm:text-5xl text-4xl font-bold text-grey-800">
            RAFIQUL ISLAM
          </h1>
          <h2 className=" flex sm-text-3xl text-2xl pt-4 text-gray-800">
            I'm a{/* Animated text */}
            <TypeAnimation
              sequence={[
                "Coder",
                2000,
                "Developer",
                2000,
                "Tech Enthusiast",
                2000,
              ]}
              wrapper="div"
              cursor={true}
              repeat={Infinity}
              style={{ fontSize: "2em", paddingLeft: "5px" }}
            />
          </h2>
          <div className="contact-logo flex justify-between pt-6 max-w-[200px] w-full">
            <a href="https://www.facebook.com/ri.shanto.3/">
              <FaFacebookF className="cursor-pointer" size={20} />
            </a>
            <a href="https://www.instagram.com/ri_______shanto/">
              <FaInstagram className="cursor-pointer" size={20} />
            </a>
            <a href="https://www.linkedin.com/in/md-rafiqul-islam-shanto-2152b5186/">
              <FaLinkedinIn className="cursor-pointer" size={20} />
            </a>
            <a href="https://github.com/MDRAFIQULISLAMSHANTO">
              <GoMarkGithub className="cursor-pointer" size={20} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Main;
