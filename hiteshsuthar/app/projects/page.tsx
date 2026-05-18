import Page from "@/lib/assest/page";
import ProjectCard from "@/app/Components/ProjectPage/ProjectStack";
const page = () => {
  return (
    <div className="flex flex-col flex-1 items-center justify-center font-sans dark:bg-[#09090B] mt-2">
      {/* Block */}
      <div className="dotted-background dark:border-neutral-900  p-12" />
      <div className="w-full relative border-b border-t font-mono tracking-tight dark:border-neutral-900 border-neutral-200">
        <div className="mx-auto gap-3 flex flex-col max-w-2xl   relative">
          <div className="w-2 h-2 bg-white dark:bg-black border-neutral-200 dark:border-neutral-800 -top-1 -left-1 absolute border"></div>
          <div className="w-2 h-2 bg-white dark:bg-black border-neutral-200 dark:border-neutral-800 -top-1 -right-1 absolute border"></div>
          <ProjectCard />
        </div>
      </div>
      <Page.ScrollTop />
    </div>
  );
};

export default page;
