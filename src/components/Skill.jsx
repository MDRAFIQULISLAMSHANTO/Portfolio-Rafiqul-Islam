import React from "react";
import backend from "../assets/images/skill-backend.png";
import blockchain from "../assets/images/skill-blockchain.png";
import db from "../assets/images/skill-db.png";
import git from "../assets/images/skill-git.png";
import js from "../assets/images/skill-js.png";
import mysql from "../assets/images/skill-mysql.png";
import react from "../assets/images/skill-nodereact.png";
import php from "../assets/images/skill-php.png";
import solidity from "../assets/images/skill-solidity.png";
import tool from "../assets/images/skill-tool.png";

import SkillItem from "./skillItem";
export const Skill = () => {
  return (
    <div id="skill">
      <div className="max-w-[1080px] m-auto md:pl-20 p-4 py-16">
        <h1 className=" text-4xl font-bold text-center  text-[#001b5e] ">
          Expertise
        </h1>
        {/* </div>
      <div className="max-w-[1080px] m-auto md:pl-20  py-16 "> */}
        <div>
          {/* <div className="lg:max-w-sm  grid  sm:grid-cols-5 gap-42 bg-red-900 m-auto"> */}
          <div className="grid sm:grid-cols-5 gap-20 my-3 py-6 pt-16 text-center max-[600px]:ml-32">
            <SkillItem frontimg={react} backimg={js} />
            <SkillItem frontimg={solidity} backimg={blockchain} />
            <SkillItem frontimg={php} backimg={backend} />
            <SkillItem frontimg={mysql} backimg={db} />

            <SkillItem frontimg={git} backimg={tool} />
          </div>
        </div>
      </div>
    </div>
  );
};
