import Page from "@/lib/assest/page";

export default function Home() {
  return (
    <>
      <div className="flex flex-col flex-1 items-center justify-center font-sans dark:bg-[#09090B] mt-2">
        <Page.Navbar />
        {/* Block */}
        <div className="w-full border-b border-neutral-200 dark:border-neutral-900">
          <div className="max-w-2xl mx-auto">
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
        <Page.Divider />
        <Page.Quote />
        <Page.Divider />
        <Page.QuoteSection />
        <Page.Footer />
        <div className="dotted-background p-12"></div>
        <Page.ScrollTop />
      </div>
    </>
  );
}
