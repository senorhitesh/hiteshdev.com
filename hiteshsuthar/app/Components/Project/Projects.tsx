import { projectBackgrounds, projectImages } from "@/lib/assest/project";
import { StaticImageData } from "next/image";
import { ArrowUpRight } from "lucide-react";
import ProjectCard from "./ProjectCard";
import Link from "next/link";
import { Project } from "@/lib/data/project";

const Projects = () => {
  return (
    <div className="w-full">
      <div className="w-full max-w-2xl mx-auto px-3 border-x border-neutral-200 dark:border-neutral-900 py-6">
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
                stack={p.stack}
                link={p.link || "https://github.com/senorhitesh"}
                slug={p.slug}
              />
            );
          })}
        </div>
        <div className="flex mt-5 w-full items-center justify-center">
          {" "}
          <Link href="/projects">
            {" "}
            <button className="group flex inset-shadow-2xs items-center gap-2 rounded-lg ring-2 active:scale-95 ring-neutral-200   dark:ring-neutral-800 dark:bg-linear-to-b  from-neutral-900 to-neutral-950 px-4 py-1.5 dark:text-white font-medium text-neutral-800 dark:shadow-lg">
              More{" "}
              <ArrowUpRight
                size={18}
                className="group-hover:rotate-45 transtion duration-300"
              />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Projects;
