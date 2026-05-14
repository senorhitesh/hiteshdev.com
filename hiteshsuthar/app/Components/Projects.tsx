import { ArrowUpRight } from "lucide-react";
import bg1 from "@/public/Project/ProjectSection-BGS/Im1.png";
import bg2 from "@/public/Project/ProjectSection-BGS/Im2.png";
import bg3 from "@/public/Project/ProjectSection-BGS/Im3.png";
import bg5 from "@/public/Project/ProjectSection-BGS/Im4.png";
import flyyped from "@/public/Project/ProjectImages/image.png";
import Image from "next/image";
interface ProjectProp {
  id: number;
  name: string;
  type: string;
  description: string;
  isActive: boolean;
  backgroundImage: any;
  projectImage: any;
}
const Project: ProjectProp[] = [
  {
    id: 1,
    name: "Fypped",
    type: "Meme Gallery",
    description:
      "Fyyped is a meme culture hub where internet users discover and sharethe latest memes, viral edits, and popular formats — all in one place",
    isActive: false,
    backgroundImage: bg1,
    projectImage: flyyped,
  },
];
const Projects = () => {
  return (
    <div className="w-full">
      <div className="max-w-2xl mx-auto px-3 border-x border-neutral-200 dark:border-neutral-900 py-6">
        <div className="flex items-baseline justify-between mb-5">
          <h2 className="relative font-[Neue] text-2xl inline-block font-semibold text-neutral-900 dark:text-neutral-100 ">
            Projects
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {Project.map((p, i) => {
            return (
              <ProjectCard
                key={i}
                name={p.name}
                description={p.description}
                isActive={p.isActive}
                type={p.type}
                bgImage={p.backgroundImage}
                projectImage={p.projectImage}
              />
            );
          })}
        </div>
        <div className="flex mt-5 w-full items-center justify-center">
          {" "}
          <button className="flex font-mono ring-1 ring-neutral-400 hover:scale-97 cursor-pointer ring-offset-2 hover:ring-offset-1 transition duration-200 hover:bg-neutral-800 text-sm items-center  bg-neutral-700 dark:bg-neutral-50 dark:text-white text-white rounded-md px-3 py-1 border gap-1  justify-center">
            More <ArrowUpRight size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};
export default Projects;

const ProjectCard = ({
  name,
  type,
  description,
  isActive,
  bgImage,
  projectImage,
}: {
  name: string;
  type: string;
  description: string;
  isActive: boolean;
  bgImage: any;
  projectImage: any;
}) => {
  const active = isActive;

  return (
    <div className="w-full flex flex-col items-start group dark:bg-neutral-900 cursor-pointer   transition-all duration-200">
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
        <span className="absolute top-2.5 left-2.5 group-hover:left-1/2 group-hover:-translate-x-1/2 transition-all duration-300 text-xs text-neutral-500 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 rounded-md px-2.5 py-1 whitespace-nowrap">
          {type}
        </span>
      </div>

      {/* Body */}
      <div className="px-2 pt-3.5 pb-4 w-full">
        <div className="flex items-center justify-between mb-1">
          <p className="text-lg font-semibold text-neutral-900 dark:text-neutral-100">
            {name}
          </p>
          <span
            className={`text-[11px] flex items-center gap-1 justify-center  rounded-full ${isActive ? "dark:bg-emerald-950 text-emerald-700  dark:text-emerald-400" : "text-orange-500"}`}
          >
            <div className="w-3 h-3 relative">
              <div
                className={`w-3 h-3 animate-ping rounded-full  ${isActive ? "bg-green-300" : "bg-orange-200"}`}
              ></div>{" "}
              <div
                className={`absolute w-2 h-2 -translate-y-1/2 left-1/2 top-1/2 ${isActive ? "bg-green-500 " : "bg-orange-400"} rounded-full   -translate-x-1/2`}
              />
            </div>
            {active ? "Avrive" : "In Progress"}
          </span>
        </div>
        <p className="text-xs text-neutral-400 mb-1">{description}</p>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between px-4 py-2  w-full">
        <div className="flex">
          {["AK", "JM", "+4"].map((initials, i) => (
            <div
              key={initials}
              className="w-6 h-6 rounded-full border-2 border-white dark:border-neutral-900 bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center text-[10px] font-medium text-neutral-500"
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
