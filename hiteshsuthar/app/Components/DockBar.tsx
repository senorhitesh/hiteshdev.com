"use client";
import { motion } from "framer-motion";
import { DotmCircular4 } from "@/components/ui/dotm-circular-4";

import Image from "next/image";
import displayPicture from "@/public/profile.png";
import { useState } from "react";
import { Code, Newspaper } from "lucide-react";
const DockBar = () => {
  const [isHovring, setIsHovring] = useState(true);
  return (
    <motion.div
      onMouseEnter={() => {
        setIsHovring(true);
      }}
      onMouseLeave={() => {
        setIsHovring(false);
      }}
      initial={{
        width: 120,
      }}
      whileHover={{
        width: 200,
      }}
      className="bg-neutral-900 fixed z-9999 justify-between top-4 flex items-center px-2 py-2 rounded-full text-white"
    >
      <div className="w-7 h-7 rounded-full overflow-hidden">
        <Image
          src={displayPicture}
          alt="DIsplayPicture"
          className="object-cover"
        />
      </div>

      {isHovring ? (
        <>
          <div className="flex gap-2">
            <div className="p-2 border-x text-neutral-500 hover:text-neutral-50 transition  rounded-full border-neutral-700 ">
              <Code size={16} />
            </div>
            <div className="p-2 border-x text-neutral-500 hover:text-neutral-50 transition  rounded-full border-neutral-700 ">
              <Newspaper size={16} />
            </div>
          </div>
        </>
      ) : (
        <DotmCircular4
          size={24}
          dotSize={3}
          speed={1.4}
          opacityBase={0.3}
          opacityMid={0.8}
          opacityPeak={1}
        />
      )}
    </motion.div>
  );
};

export default DockBar;
