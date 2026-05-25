import Page from "@/lib/assest/page";
import Navbar from "./Components/Global/DockBar";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Hitesh Suthar",
  description: "Founder, Creator, and a Learner.",
  alternates: {
    canonical: "/",
  },
};
export default function Home() {
  return (
    <>
      <div className="flex flex-col overflow-hidden flex-1 relative items-center justify-center font-sans dark:bg-[#09090B] mt-2">
        <div className="w-full border-y z-0 items-center justify-center flex border-neutral-200 dark:border-neutral-900">
          <div className="max-w-2xl w-full relative mx-auto">
            <div className="w-2 h-2 bg-white dark:bg-black border-neutral-200 dark:border-neutral-800 -top-1 -left-1 absolute border" />
            <div className="w-2 h-2 bg-white dark:bg-black border-neutral-200 dark:border-neutral-800 -top-1 -right-1 absolute border" />

            {/* Added w-full, h-[12.5rem], flex, items-center, justify-center here */}
            <div className="dotted-background w-full h-[12.5rem] flex items-center justify-center p-12">
              <p className="font-mono dark:bg-[#09090B] bg-white text-center">
                Designer Soul. <br /> Developer Brain.
              </p>
            </div>
          </div>
        </div>
        <Navbar />
        <Page.Profile />
        <Page.Divider />
        <Page.BioComponent />
        <Page.Divider />
        <Page.About />
        <Page.GithubContribution />
        <Page.Stack />
        <Page.Divider />
        <Page.Experience />
        <Page.Divider />
        <Page.Projects />
        <Page.Divider />
        <Page.Blogs />
        <Page.Quote />
        <Page.Divider />
        <Page.QuoteSection />
        <Page.Divider />
        <Page.Footer />
        <div className="w-full  z-0 items-center justify-center flex border-neutral-200 dark:border-neutral-900">
          <div className="max-w-2xl w-full relative mx-auto">
            <div className="dotted-background w-full h-[12.5rem] flex items-center justify-center p-12"></div>
          </div>
        </div>
      </div>
    </>
  );
}
