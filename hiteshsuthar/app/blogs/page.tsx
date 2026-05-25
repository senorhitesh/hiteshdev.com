import Page from "@/lib/assest/page";
import Navbar from "@/app/Components/Global/DockBar";
import Blogs from "../Components/Blogs";

const page = () => {
  return (
    <div className="flex flex-col flex-1 items-center justify-center font-sans dark:bg-[#09090B] mt-2 overflow-x-hidden">
      {/* Block - Fixed: Swapped w-2xl for w-full max-w-2xl */}
      <div className="w-full max-w-2xl mx-auto border-x border-neutral-200 dark:border-neutral-900 p-12" />

      <div className="w-full relative border-b border-t font-mono tracking-tight dark:border-neutral-900 border-neutral-200">
        {/* Added w-full here to ensure the inner container stretches properly */}
        <div className="w-full max-w-2xl mx-auto gap-3 flex flex-col relative">
          <div className="w-2 h-2 bg-white dark:bg-black border-neutral-200 dark:border-neutral-800 -top-1 -left-1 absolute border"></div>
          <div className="w-2 h-2 bg-white dark:bg-black border-neutral-200 dark:border-neutral-800 -top-1 -right-1 absolute border"></div>
          <Blogs />
        </div>
      </div>

      <Page.Footer />
      <Page.ScrollTop />
      <Navbar />

      <div className="w-full z-0 items-center justify-center flex border-neutral-200 dark:border-neutral-900">
        <div className="max-w-2xl w-full relative mx-auto">
          <div className="dotted-background w-full h-[12.5rem] flex items-center justify-center p-12"></div>
        </div>
      </div>
    </div>
  );
};

export default page;
