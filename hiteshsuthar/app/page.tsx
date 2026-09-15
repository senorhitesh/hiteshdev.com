import Page from "@/lib/assest/page";
import type { Metadata } from "next";
import NAVBAR from "./Components2/NAVBAR";
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
      <div className="flex flex-col overflow-hidden flex-1 relative items-center justify-center font-sans dark:bg-[#09090B] ">
        <NAVBAR />
        <Page.Profile />
        <Page.About />
        <Page.GithubContribution />
        <Page.Stack />
        <Page.Experience />
        <Page.Projects />
        <Page.Blogs />
        <Page.Quote />
        <Page.QuoteSection />
        <Page.Footer />
      </div>
    </>
  );
}
