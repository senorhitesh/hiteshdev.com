import Page from "@/lib/assest/page";
import Blogs from "@/components/Blogs";

const page = () => {
  return (
    <div className="w-full max-w-2xl flex flex-col  px-3 items-center justify-between h-screen mx-auto">
      <div className="w-full relative  font-mono tracking-tight">
        <div className="w-full max-w-2xl mx-auto gap-3 flex flex-col relative">
          <Blogs />
        </div>
      </div>
      <Page.Footer />
    </div>
  );
};

export default page;
