import { motion, useMotionValue, useTransform } from "framer-motion";
import React from "react";

const SkillItem = ({ backimg, frontimg }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [30, -30]);
  const rotateY = useTransform(x, [-100, 100], [-30, 30]);

  return (
    <div>
      <div style={{ perspective: 2000 }}>
        {/* card */}
        <motion.div
          style={{ x, y, rotateX, rotateY, z: 100 }}
          drag
          dragElastic={0.18}
          dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
          whileTap={{ cursor: "grabbing" }}
          className="w-[80px] min-h-[40px] bg-[#ffffff]  cover cursor-grab relative"
        >
          {/* card logo */}
          <div className=" object-cover ">
            <img src={backimg} alt="" />
          </div>

          {/* colors */}
          {/* <ul className="flex gap-x-[10px]">
            {colors.map((color, index) => {
              return (
                <li
                  key={index}
                  style={{ backgroundColor: color.value }}
                  className="w-8 h-8 rounded-full cursor-pointer"
                ></li>
              );
            })}
          </ul> */}
          {/* card image */}
          <motion.div
            style={{ x, y, rotateX, rotateY, z: 100000 }}
            className="absolute top-12 -right-20 w-[150px]"
          >
            <img src={frontimg} alt="" draggable="false" />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};
export default SkillItem;
