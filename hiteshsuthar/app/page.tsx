import Page from "@/lib/assest/page";

export default function Home() {
  return (
    <>
      <div className="flex flex-col flex-1 items-center justify-center font-sans dark:bg-[#09090B] mt-2">
        <Page.Navbar />
        {/* Block */}
        <div className="dotted-background p-12">
          <p className="font-mono bg-white">
            Designer Soul. <br /> Developer Brain.
          </p>
        </div>
        <Page.Profile />
        <Page.Divider />
        <Page.BioComponent />
        <Page.Divider />
        <Page.About />
        <Page.Link />
        <Page.GithubContribution />
        <Page.Stack />
        <Page.Divider />
        <Page.Experience />
        <Page.Divider />
        <Page.Projects />
      </div>
    </>
  );
}
