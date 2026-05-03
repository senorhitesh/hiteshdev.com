"use client";
import { GitHubCalendar } from "react-github-calendar";
export default function GithubContribution() {
  const explicitTheme = {
    light: ["#f2f2f2", "#cccccc", "#b0b0b0", "#878787", "#636363"],
    dark: ["#383838", "#4D455D", "#7DB9B6", "#F5E9CF", "#E96479"],
  };

  return (
    <div className="w-full border-b dark:border-neutral-900 border-neutral-200  ">
      <div className="flex flex-col mx-auto  border-x dark:border-neutral-900 border-neutral-200 max-w-2xl relative flex-1 items-center justify-center bg-zinc-50 dark:bg-black">
        <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-center py-8 px-8 bg-white dark:bg-black sm:items-start">
          <GitHubCalendar
            className="font-mono overflow-hidden"
            tooltips={{
              activity: {
                text: (activity) =>
                  `${activity.level} activities on ${activity.date}`,
              },
              colorLegend: {
                text: (level) => `Activity level ${level + 1}`,
              },
            }}
            year={2026}
            blockSize={10}
            username="senorhitesh"
            theme={explicitTheme}
          />
        </main>
      </div>
    </div>
  );
}
