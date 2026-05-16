import Image from "next/image";
import { ArrowUpRight, Link2 } from "lucide-react";
import Link from "next/link";
import { StaticImageData } from "next/image";

const ProjectCard = ({
  name,
  type,
  description,
  isActive,
  bgImage,
  projectImage,
  stack,
  link,
}: {
  name: string;
  type: string;
  description: string;
  isActive: boolean;
  bgImage: StaticImageData;
  projectImage: StaticImageData;
  stack: React.ReactNode[];
  link: string;
}) => {
  const active = isActive;

  return (
    <div className="w-full  justify-between  flex flex-col items-start group dark:bg-neutral-900 cursor-pointer   transition-all duration-200">
      {/* Thumbnail */}
      <div className="relative h-36 w-full bg-neutral-50 dark:bg-neutral-800 rounded-xl border-neutral-200 border overflow-hidden ">
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-50"
          style={{
            backgroundImage:
              "linear-gradient(#e5e5e5 1px, transparent 1px), linear-gradient(90deg, #e5e5e5 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />
        <div className="absolute opacity-0 translate-y-5 scale-70 group-hover:scale-100 group-hover:blur-none  group-hover:opacity-100 group-hover:translate-y-0  transition duration-200 top-0 right-0 inset-0">
          <Image src={bgImage} alt={"Background1"} className="object-cover" />
        </div>
        <div className="absolute overflow-hidden transition duration-500 bg-gray-50 rounded-md bottom-0 translate-y-14 group-hover:translate-y-5 w-[75%]  border border-neutral-300 h-30 left-1/2 -translate-x-1/2">
          <Image src={projectImage} alt="fyyped" className="object-cover" />
        </div>
        {/* Animated label */}
        <span className="absolute top-2.5 left-2.5 group-hover:left-1/2 group-hover:-translate-x-1/2 transition-all duration-300 text-xs text-neutral-500 group-hover:text-neutral-800 group-hover:bg-white group-hover:dark:bg-neutral-900 border border-transparent group-hover:border-neutral-200 group-hover:dark:border-neutral-700 rounded-md group-hover:px-2.5 py-1 whitespace-nowrap">
          {type}
        </span>
      </div>

      {/* Body */}
      <div className="px-2 pt-3.5 pb-4 w-full">
        <div className="flex items-center justify-between mb-1">
          <div className="flex  items-center gap-3">
            {" "}
            <p className="text-lg relative  items-center flex gap-2 font-semibold text-neutral-900 dark:text-neutral-100">
              {name}
              <span className="h-0.5 left-0.4 bottom-0.5 w-0 transition-all duration-700  group-hover:w-full absolute  bg-neutral-500" />
            </p>
            {isActive ? (
              <Link target="_blank" href={link}>
                <span>
                  <Link2
                    size={16}
                    className="text-neutral-600 hover:text-blue-500 transition duration-200 scale-0 group-hover:scale-100"
                  />
                </span>
              </Link>
            ) : null}
          </div>
          <span
            className={`text-[11px] flex items-center gap-1 justify-center  rounded-full ${isActive ? "dark:bg-emerald-950 text-emerald-700  dark:text-emerald-400" : "text-red-500"}`}
          >
            <div className="w-3 h-3 relative">
              <div
                className={`w-3 h-3 animate-ping rounded-full  ${isActive ? "bg-green-300" : "bg-red-200"}`}
              ></div>{" "}
              <div
                className={`absolute w-2 h-2 -translate-y-1/2 left-1/2 top-1/2 ${isActive ? "bg-green-500 " : "bg-red-400"} rounded-full   -translate-x-1/2`}
              />
            </div>
            {active ? "Live" : "Building.."}
          </span>
        </div>
        <p className="text-xs text-neutral-400 group-hover:text-neutral-700 transition  mb-1">
          {description}
        </p>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between px-4 py-2  w-full">
        <div className="flex ">
          {stack.map((initials, i) => (
            <div
              key={i}
              className="w-6 h-6  rounded-full border-2 border-white dark:border-neutral-900 bg-neutral-100 dark:bg-neutral-800 flex items-center  justify-center text-[10px] font-medium text-neutral-500"
              style={{ marginLeft: i === 0 ? 0 : -6 }}
            >
              {initials}
            </div>
          ))}
        </div>
        <button className="flex group cursor-pointer items-center gap-1 text-xs text-neutral-400 group-hover:text-neutral-700 dark:group-hover:text-neutral-200 transition duration-200 group/btn">
          View Project
          <ArrowUpRight className="size-0 scale-0  group-hover:scale-100  group-hover:size-4 transition " />
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;
