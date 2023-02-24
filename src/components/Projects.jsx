import React from "react";
import hotel from "../assets/images/project-hotel.png";
import mblbank from "../assets/images/project-mblbank.png";
import pharmacy from "../assets/images/project-pharmacy.png";
import webistic from "../assets/images/project-webistic.png";
import ProjectItem from "./ProjectItem";
export const Projects = () => {
  return (
    <div>
      <div
        className="projects max-w-[1080px] m-auto md:pl-20 p-4 py-16  "
        id="projects"
      >
        <h1 className="text-4xl font-bold text-center text-[#001b5e] ">
          Projects
        </h1>

        <div className="grid sm:grid-cols-2 gap-20 my-3 py-6 pt-16 ">
          <ProjectItem
            img={hotel}
            title="Hotel Management System"
            language="C#"
            address="https://github.com/MDRAFIQULISLAMSHANTO/Hotel-Management-System"
          />
          <ProjectItem
            img={pharmacy}
            title="Pharmacy Management System"
            language="C#"
            address="https://github.com/MDRAFIQULISLAMSHANTO/Pharmacy-Management-System"
          />
          <ProjectItem
            img={mblbank}
            title="Online Banking System"
            language="PHP, MySQL"
            address="https://github.com/MDRAFIQULISLAMSHANTO/Online-Banking-System"
          />
          <ProjectItem
            img={webistic}
            title="A Portfolio Website"
            language="ReactJS, Bootstrap5"
            address="https://github.com/MDRAFIQULISLAMSHANTO/Webistic-Portfolio"
          />
        </div>
      </div>
    </div>
  );
};
export default Projects;
