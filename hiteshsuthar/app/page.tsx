import Page from "@/lib/assest/page";
import NAVBAR from "@/components/NAVBAR";
export default function Home() {
  return (
    <>
      <div className="flex flex-col px-3 overflow-hidden flex-1 relative items-center justify-center font-sans ">
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
