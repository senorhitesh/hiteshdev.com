import Page from "@/lib/assest/page";
import Blogs from "../Components/Blogs";
import Components from "../Components/component-page/Components";
const page = () => {
  return (
    <div className="w-full max-w-2xl flex flex-col items-center justify-between h-screen mx-auto">
      <div className="w-full relative  font-mono tracking-tight    ">
        <div className="w-full max-w-2xl mx-auto gap-3 flex flex-col relative">
          <Components />
        </div>
      </div>
      <Page.Footer cn="" />
    </div>
  );
};

export default page;
