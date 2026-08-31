"use client";
import { GitHubCalendar } from "react-github-calendar";
import { useTheme } from "next-themes";
export default function GithubContribution() {
  const { theme } = useTheme();
  const explicitTheme = {
    light: ["#ffffff", "#d8ecff", "#a4d3ff", "#6ab7ff", "#1b91ff"],
    dark: ["#161616", "#2a2a2a", "#525252", "#8a8a8a", "#d4d4d4"],
  };
  return (
    <div className="w-full overflow-hidden border-b dark:border-neutral-900 border-neutral-200  ">
      <div className="flex flex-col mx-auto  overflow-hidden border-x dark:border-neutral-900 border-neutral-200 w-full max-w-2xl relative flex-1 items-center justify-center bg-zinc-50 dark:bg-neutral-900">
        <main className="flex flex-1   w-full max-w-3xl flex-col items-center justify-center py-8 px-8 bg-white dark:bg-[#09090B] sm:items-start">
          <GitHubCalendar
            className="font-mono   react-activity-calendar "
            tooltips={{
              activity: {
                text: (activity) =>
                  `${activity.count} activities on ${activity.date}`,
              },
              colorLegend: {
                text: (level) => `Activity level ${level + 2}`,
              },
            }}
            year={2026}
            blockSize={10}
            username="senorhitesh"
            theme={explicitTheme}
            colorScheme={theme === "dark" ? "dark" : "light"}
          />
        </main>
      </div>
    </div>
  );
}
