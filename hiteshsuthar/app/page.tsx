import Page from "@/lib/assest/page";
import DynamicIsland from "./Components/DockBar";
export default function Home() {
  return (
    <>
      <div className="flex flex-col overflow-hidden flex-1 relative items-center justify-center font-sans dark:bg-[#09090B] mt-2">
        <DynamicIsland />
        <div className="w-full border-y z-0 border-neutral-200 dark:border-neutral-900">
          <div className="max-w-2xl relative mx-auto">
            <div className="w-2 h-2 bg-white dark:bg-black border-neutral-200 dark:border-neutral-800 -top-1 -left-1 absolute border" />
            <div className="w-2 h-2 bg-white dark:bg-black border-neutral-200 dark:border-neutral-800 -top-1 -right-1 absolute border" />
            <div className="dotted-background  p-12">
              <p className="font-mono dark:bg-[#09090B] bg-white">
                Designer Soul. <br /> Developer Brain.
              </p>
            </div>
          </div>
        </div>
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
        <Page.Quote />
        <Page.Divider />
        <Page.QuoteSection />
        <Page.Divider />
        <Page.Footer />
        <div className="dotted-background p-12"></div>
        <Page.GradualBlur
          target="page"
          position="bottom"
          height="3rem"
          strength={2.5}
          divCount={2}
          curve="bezier"
          exponential
          opacity={0.5}
          className="z-99"
        />
        <Page.ScrollTop />
      </div>
    </>
  );
}
