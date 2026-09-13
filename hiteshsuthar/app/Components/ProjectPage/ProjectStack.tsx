import { StaticImageData } from "next/image";
import ProjectCard from "@/app/Components/Project/ProjectCard";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowLeft01Icon } from "@hugeicons/core-free-icons";
import { Project } from "@/lib/data/project";
import Link from "next/link";

const Projects = () => {
  return (
    <div className="w-full">
      <div className="max-w-2xl mx-auto px-3  -x    -900 py-6">
        <div className="flex items-center gap-2 mb-5">
          <Link href={"/"}>
            <div className="text-neutral-700 hover:dark:bg-neutral-900  rounded-md  hover:bg-neutral-50">
              <HugeiconsIcon icon={ArrowLeft01Icon} />
            </div>
          </Link>
          <h2 className="relative font-Neue text-2xl inline-block font-semibold text-neutral-900 dark:text-neutral-100 ">
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
                link={p.link}
                slug={p.slug}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default Projects;
