import Page from "@/lib/assest/page";
import Navbar from "@/app/Components/Global/DockBar";
import Blogs from "../Components/Blogs";

const page = () => {
  return (
    <div className="flex flex-col flex-1 items-center justify-center font-sans dark:bg-[#09090B] mt-2">
      {/* Block */}
      <div className="w-2xl mx-auto border-x border-neutral-200 dark:border-neutral-900  p-12" />
      <div className="w-full relative border-b border-t font-mono tracking-tight dark:border-neutral-900 border-neutral-200">
        <div className="mx-auto gap-3 flex flex-col max-w-2xl   relative">
          <div className="w-2 h-2 bg-white dark:bg-black border-neutral-200 dark:border-neutral-800 -top-1 -left-1 absolute border"></div>
          <div className="w-2 h-2 bg-white dark:bg-black border-neutral-200 dark:border-neutral-800 -top-1 -right-1 absolute border"></div>
          <Blogs />
        </div>
      </div>
      <Page.Footer />
      <Page.ScrollTop />
      <Navbar />

      <div className="dotted-background p-12"></div>
    </div>
  );
};
export default page;
