import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

const page = () => {
  return (
    <div className="flex flex-col flex-1 items-center font-sans dark:bg-black mt-2">
      {/* Header */}
      <div className="flex flex-1 w-full justify-center relative  flex-col items-center  border-t border-b  border-neutral-100 dark:bg-black sm:items-start">
        {/* Container */}
        <div className="mx-auto relative bg-amber-100 w-2xl flex justify-center items-center border-yellow-200 border-r border-l">
          <div className="w-2 h-2 bg-yellow-100 -top-1 -left-1 absolute border border-yellow-500 "></div>
          <div className="w-2 h-2 bg-yellow-100 -top-1 -right-1 absolute border border-yellow-500 "></div>{" "}
          <div className="w-2 h-2 bg-yellow-100 -bottom-1 -left-1 absolute border border-yellow-500 "></div>
          <div className="w-2 h-2 bg-yellow-100 -bottom-1 -right-1 absolute border border-yellow-500 "></div>{" "}
          <p className="text-7xl font-sans tracking-tighter text-neutral-800 font-bold">
            Work in Progress
          </p>
        </div>
      </div>
      <div className="flex flex-1 w-full  relative  flex-col items-center  border-t border-b  border-neutral-100 dark:bg-black sm:items-start">
        {/* Container */}
        <div className="flex justify-center items-center flex-col min-h-screen min-w-screen">
          <div className="mx-auto  h-fit  w-fit px-4 flex justify-center items-center border-neutral-200  ">
            <Link href="/">
              <button className="flex gap-2 justofy-center items-center cursor-pointer">
                {" "}
                <ArrowLeft />
                <p className=" font-sans text-neutral-800 font-italic">
                  Back to Home
                </p>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
