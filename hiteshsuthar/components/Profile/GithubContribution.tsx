"use client";
import { GitHubCalendar } from "react-github-calendar";
import { useTheme } from "next-themes";
import GitHubActivity from "@/components/ui/github-activity";
export default function GithubContribution() {
  const { theme } = useTheme();
  const explicitTheme = {
    light: ["#ffffff", "#d8ecff", "#a4d3ff", "#6ab7ff", "#1b91ff"],
    dark: ["#161616", "#2a2a2a", "#525252", "#8a8a8a", "#d4d4d4"],
  };
  return (
    <div className="w-full overflow-hidden ">
      <div className="flex flex-col mx-auto overflow-hidden w-full max-w-2xl relative flex-1 items-center justify-center bg-zinc-50 dark:bg-neutral-900">
        <main className="flex flex-1   w-full max-w-3xl flex-col items-center justify-center py-4 px-2 bg-white dark:bg-[#09090B] sm:items-start">
          <GitHubActivity
            showMonths={true}
            year={2026}
            username="senorhitesh"
          />
        </main>
      </div>
    </div>
  );
}
