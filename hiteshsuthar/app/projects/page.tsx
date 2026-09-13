import Page from "@/lib/assest/page";
import ProjectCard from "@/app/Components/ProjectPage/ProjectStack";
import Link from "next/link";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Projects - Hitesh Suthar",
  description:
    "Projects I’ve built along the way, shaped by curiosity, AI, and a focus on building things that actually work and mean something.",
  alternates: {
    canonical: "/projects",
  },
};

const page = () => {
  return (
    <div className="flex flex-col flex-1 items-center justify-center font-sans dark:bg-[#09090B] mt-2">
      {/* Block */}
      <div className="w-full  -y z-0 items-center justify-center flex    -900">
        <div className="max-w-2xl w-full relative mx-auto">
          <div className="dotted-background w-full h-[12.5rem] flex items-center justify-center p-12"></div>
        </div>
      </div>
      <div className="w-full relative  -b  font-mono tracking-tight  -900  ">
        <div className="mx-auto gap-3 flex flex-col max-w-2xl   relative">
          <div className="w-2 h-2 bg-white dark:bg-black    -800 -top-1 -left-1 absolute  "></div>
          <div className="w-2 h-2 bg-white dark:bg-black    -800 -top-1 -right-1 absolute  "></div>
          <ProjectCard />
          <div className="p-4 -mt-3 font-sans    -900 items-center justify-center flex  -x  -t">
            <p className="text-sm text-neutral-600">
              For more cool projects, visit my{" "}
              <Link
                href={"https://github.com/senorhitesh"}
                target={"_blank"}
                className="text-neutral-900 dark:text-neutral-300 font-semibold"
              >
                Github.
              </Link>
            </p>
          </div>
        </div>
      </div>
      <Page.Footer />
      <div className="w-full  z-0 items-center justify-center flex ">
        <div className="max-w-2xl w-full relative mx-auto">
          <div className="dotted-background w-full h-[12.5rem] flex items-center justify-center p-12"></div>
        </div>
      </div>
    </div>
  );
};

export default page;
