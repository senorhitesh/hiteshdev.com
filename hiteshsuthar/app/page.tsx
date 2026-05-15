"use client";
import About from "./Components/About";
import BioComponent from "./Components/BioComponent";
import Divider from "./Components/Divider";
import Navbar from "./Components/HeroPage/Navbar";
import Link from "./Components/Link";
import Profile from "./Components/Profile/Profile";
import GithubContribution from "@/app/Components/Profile/GithubContribution";
import Stack from "@/app/Components/Stack";
import Experience from "@/app/Components/Experience";
import Projects from "./Components/Projects";

export default function Home() {
  return (
    <>
      <div className="flex flex-col flex-1 items-center justify-center font-sans dark:bg-[#09090B] mt-2">
        <Navbar />
        {/* Block */}
        <div className="dotted-background p-12">
          <p className="font-mono bg-white">
            Designer Soul. <br /> Developer Brain.
          </p>
        </div>
        <Profile />
        <Divider />
        <BioComponent />
        <Divider />
        <About />
        <Link />
        <GithubContribution />
        <Stack />
        <Divider />
        <Experience />
        <Divider />
        <Projects />
      </div>
    </>
  );
}
