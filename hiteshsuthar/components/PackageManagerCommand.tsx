"use client";

import {
  CodeIcon,
  NpmIcon,
  PackageIcon,
  TerminalIcon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { useMemo, useState } from "react";
import CopyButton from "@/components/CopyBtn";

const managers = ["pnpm", "yarn", "npm", "bun"] as const;
const managerIcons = {
  pnpm: PackageIcon,
  yarn: TerminalIcon,
  npm: NpmIcon,
  bun: CodeIcon,
} as const;

interface DependencyMap {
  npm: string;
  pnpm: string;
  bun: string;
  yarn: string;
}

interface PackageManagerCommandProps {
  dependency?: DependencyMap;
}

export default function PackageManagerCommand({
  dependency,
}: PackageManagerCommandProps) {
  const [selected, setSelected] = useState<(typeof managers)[number]>("pnpm");

  const command = useMemo(() => {
    if (!dependency) return "pnpm add motion";

    const packageName = dependency[selected];

    if (!packageName) return "pnpm add motion";

    switch (selected) {
      case "pnpm":
        return `pnpm add ${packageName}`;
      case "yarn":
        return `yarn add ${packageName}`;
      case "npm":
        return `npm install ${packageName}`;
      case "bun":
        return `bun add ${packageName}`;
      default:
        return `pnpm add ${packageName}`;
    }
  }, [dependency, selected]);

  return (
    <div className="mt-2 w-full rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-neutral-100 dark:bg-neutral-900 p-0.5 shadow-sm">
      <div className="flex items-center justify-between rounded-xl px-2 py-2">
        <div className="flex items-center gap-3 text-sm text-neutral-500 dark:text-neutral-400">
          {managers.map((pkgManager) => {
            const icon = managerIcons[pkgManager];
            const isActive = selected === pkgManager;
            return (
              <button
                key={pkgManager}
                type="button"
                onClick={() => setSelected(pkgManager)}
                className={[
                  "relative flex items-center gap-1 rounded-md px-1.5 py-1 text-sm transition-colors",
                  isActive
                    ? "font-medium text-neutral-900 dark:text-neutral-100"
                    : "text-neutral-500 dark:text-neutral-400 hover:text-neutral-700 dark:hover:text-neutral-200",
                ].join(" ")}
                aria-label={pkgManager}
              >
                <HugeiconsIcon
                  icon={icon}
                  size={15}
                  className={isActive ? "text-neutral-900 dark:text-neutral-100" : "text-neutral-500 dark:text-neutral-400"}
                />
                <span>{pkgManager}</span>
                {isActive && (
                  <span className="absolute -bottom-1 left-0 h-0.5 w-full rounded-full bg-neutral-900 dark:bg-neutral-100" />
                )}
              </button>
            );
          })}
        </div>

        <CopyButton code={command} />
      </div>

      <div className="mx-[2px] mb-[2px] mt-1 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 px-3 py-3 font-mono text-sm text-neutral-700 dark:text-neutral-300">
        {command}
      </div>
    </div>
  );
}
