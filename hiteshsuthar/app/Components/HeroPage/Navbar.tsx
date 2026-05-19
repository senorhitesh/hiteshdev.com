"use client";
import Image from "next/image";
import DP from "@/public/icons/L-DAY.svg";
import Link from "next/link";
import { useState } from "react";
import { MoonIcon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
const Navbar = () => {
  const [isDay, setisDay] = useState<boolean>(false);
  const { setTheme } = useTheme();
  return (
    <div className="flex flex-1 w-full  flex-col items-center  border-t border-b  border-neutral-100 dark:border-neutral-800 dark:bg-[#09090B] sm:items-start">
      {/* Container */}
      <div className="mx-auto relative w-2xl border-neutral-200 dark:border-neutral-900   border-r border-l">
        {" "}
        <div className="w-2 h-2 bg-white dark:bg-black border-neutral-200 dark:border-neutral-800 -top-1 -left-1 absolute border"></div>
        <div className="w-2 h-2 bg-white dark:bg-black border-neutral-200 dark:border-neutral-800 -top-1 -right-1 absolute border"></div>
        <div className="flex realtive items-center w-full  px-3 justify-between">
          {" "}
          <Image
            src={DP}
            alt="Dp"
            height={40}
            className="rounded-full "
            width={40}
          />
          {/* Links */}
          <div className="font-mono flex gap-2 items-center text-neutral-600   text-[12px]">
            <Link
              className="hover:text-neutral-800 group relative text-neutral-500 dark:text-neutral-400 hover:dark:text-neutral-200 transtion   underline-offset-3"
              href={"/projects"}
            >
              {" "}
              <p>Projects</p>
              <div className="h-0.5 w-0 transition-all duration-700  group-hover:w-full absolute  bg-neutral-800"></div>
            </Link>
            <Link
              className="hover:text-neutral-800 group relative text-neutral-500 dark:text-neutral-400 hover:dark:text-neutral-200 transtion   underline-offset-3"
              href={"/blogs"}
            >
              {" "}
              <p>Blogs</p>
              <div className="h-0.5 w-0 transition-all duration-700 dark:bg-neutral-50  group-hover:w-full absolute bg-neutral-800"></div>
            </Link>
            <button
              onClick={() => {
                setisDay(!isDay);
                setTheme("light");
              }}
              className={`${isDay ? "rotate-180 " : "rotate-10  "} transition duration-300 dark:text-neutral-400 ease-in-out`}
            >
              {isDay ? <Sun size={14} /> : <MoonIcon size={14} />}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
