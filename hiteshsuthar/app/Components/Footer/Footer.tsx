"use client";
import coding from "@/public/Footer/deskbreak-coder-idle.gif";
import waving from "@/public/Footer/deskbreak-coder-waving.gif";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
const Footer = () => {
  const [isHovering, setisHovering] = useState(false);
  const div = useRef<HTMLDivElement>(null);

  return (
    <div className="border-b w-full  dark:border-neutral-900 border-neutral-200">
      <div className="max-w-2xl p-3 relative gap-3 flex justify-between items-center  w-full mx-auto border-x dark:border-neutral-900  border-neutral-200">
        <div className="w-2 h-2 bg-white dark:bg-black border-neutral-200 dark:border-neutral-800 -bottom-1 -left-1 absolute border"></div>
        <div className="w-2 h-2 bg-white  dark:bg-black border-neutral-200 dark:border-neutral-800 -bottom-1 -right-1 absolute border"></div>
        <div>
          <p className="text-xs font-mono text-neutral-900 dark:text-neutral-100 ">
            &copy; Hitesh Suthar
          </p>
          <p className="text-xs font-mono text-neutral-900 dark:text-neutral-100 ">
            Built with Chai & ❤
          </p>
        </div>
        <motion.div
          drag
          onMouseEnter={() => {
            setisHovering(true);
          }}
          onMouseLeave={() => {
            setisHovering(false);
          }}
          ref={div}
          className="h-15 w-15 cursor-grab"
          dragConstraints={{
            top: -10,
            left: -10,
            right: 10,
            bottom: 10,
          }}
        >
          <img
            src={isHovering ? waving.src : coding.src}
            alt={"Coding"}
            className="-scale-x-100 pointer-events-none"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Footer;
