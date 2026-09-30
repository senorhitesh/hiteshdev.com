"use client";

import React, { useState } from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  UnfoldMoreIcon,
  Cancel01Icon,
  SourceCodeIcon,
  JavaScriptIcon,
  ReactIcon,
  PaintBoardIcon,
  FigmaIcon,
  Database01Icon,
} from "@hugeicons/core-free-icons";

export interface ExperienceItem {
  id: string;
  year: string;
  role: string;
  company: string;
  companyUrl?: string;
  period: string;
  isCurrent?: boolean;
  bullets: string[];
  skills: {
    name: string;
    icon: any;
  }[];
}

const EXPERIENCES: ExperienceItem[] = [
  {
    id: "softech",
    year: "2026",
    role: "Frontend Intern Developer",
    company: "Softech Solutions",
    companyUrl: "https://soft-techsolutions.com/",
    period: "Apr '26 – June '26",
    isCurrent: false,
    bullets: [
      "Enhanced UI/UX of internal CMS system, improving workflow usability and visual consistency.",
      "Led full migration of legacy PHP website to Next.js, boosting overall performance by 10%.",
      "Developed and maintained bank CMS platform utilizing PostgreSQL for robust and secure data management.",
    ],
    skills: [
      {
        name: "Next.js",
        icon: SourceCodeIcon,
      },
      {
        name: "TypeScript",
        icon: JavaScriptIcon,
      },
      {
        name: "React",
        icon: ReactIcon,
      },
      {
        name: "UI/UX Design",
        icon: PaintBoardIcon,
      },
      {
        name: "Figma",
        icon: FigmaIcon,
      },
      {
        name: "PostgreSQL",
        icon: Database01Icon,
      },
    ],
  },
];

const Experience = () => {
  const [expandedId, setExpandedId] = useState<string | null>("softech");

  const toggleExpand = (id: string) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="w-full max-w-2xl mx-auto py-6 font-sans">
      {/* Section Header */}
      <div className="flex items-center justify-between pb-2 mb-2">
        <div className="flex items-center gap-3 flex-1 min-w-0">
          <h2 className="text-[13px] font-medium text-neutral-500 dark:text-neutral-400">
            # Experience
          </h2>
          <div className="flex-1 h-[0.5px] bg-neutral-200/90 dark:bg-neutral-800" />
        </div>
      </div>

      {/* Experience List */}
      <div className="flex flex-col gap-2">
        {EXPERIENCES.map((item) => {
          const isExpanded = expandedId === item.id;

          return (
            <div key={item.id} className="flex items-start">
              {/* Year Label */}
              <div className="w-20 sm:w-28 text-[13px] text-neutral-400 dark:text-neutral-500 pt-2 shrink-0 select-none font-medium">
                {item.year}
              </div>

              {/* Main Content Card Container with Smooth CSS Grid Animation */}
              <div
                className={`flex-1 min-w-0 rounded-2xl border transition-all duration-300 ease-out ${
                  isExpanded
                    ? "hover:bg-neutral-50/70 border-transparent  dark:bg-neutral-900/70 px-4 py-3 shadow-xs"
                    : "border-transparent hover:bg-neutral-50/70 dark:hover:bg-neutral-900/60 p-2  cursor-pointer"
                }`}
                onClick={!isExpanded ? () => toggleExpand(item.id) : undefined}
              >
                {/* Header Row */}
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center flex-wrap gap-x-1.5 text-[13.5px] sm:text-[14px]">
                    <span className="font-medium text-neutral-900 dark:text-neutral-100">
                      {item.role}
                    </span>
                    <span className="text-neutral-400 dark:text-neutral-500 font-normal">
                      at
                    </span>
                    {item.companyUrl && isExpanded ? (
                      <a
                        href={item.companyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="font-medium text-neutral-900 dark:text-neutral-100 hover:underline decoration-neutral-400 underline-offset-2"
                      >
                        {item.company}
                      </a>
                    ) : (
                      <span className="font-medium text-neutral-900 dark:text-neutral-100">
                        {item.company}
                      </span>
                    )}
                  </div>

                  {/* Right Meta & Toggle Button */}
                  <div className="flex items-center gap-2 text-[12.5px] text-neutral-400 dark:text-neutral-500 shrink-0 ml-2">
                    {item.isCurrent && (
                      <span
                        className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]"
                        aria-label="Current role"
                      />
                    )}
                    <span className="tabular-nums font-normal">
                      {item.period}
                    </span>

                    {/* Toggle Button */}
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleExpand(item.id);
                      }}
                      className="w-5 h-5 flex items-center justify-center rounded hover:bg-neutral-200/80 dark:hover:bg-neutral-800 text-neutral-400 hover:text-neutral-800 dark:hover:text-neutral-200 transition-colors ml-1"
                      title={isExpanded ? "Collapse" : "Expand"}
                      aria-label={isExpanded ? "Collapse details" : "Expand details"}
                    >
                      <HugeiconsIcon
                        icon={isExpanded ? Cancel01Icon : UnfoldMoreIcon}
                        size={15}
                      />
                    </button>
                  </div>
                </div>

                {/* Smooth Expandable Body using CSS Grid Animation */}
                <div
                  className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out ${
                    isExpanded
                      ? "grid-rows-[1fr] opacity-100 mt-3.5"
                      : "grid-rows-[0fr] opacity-0 pointer-events-none mt-0"
                  }`}
                >
                  <div className="overflow-hidden min-h-0">
                    {/* Small Bullet Points */}
                    <ul className="space-y-1.5 mb-4 list-none p-0 m-0">
                      {item.bullets.map((bullet, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-2 text-[12px] sm:text-[12.5px] leading-relaxed text-neutral-600 dark:text-neutral-400 font-normal"
                        >
                          <span className="w-1 h-1 rounded-full bg-neutral-400 dark:bg-neutral-500 mt-2 shrink-0 select-none" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Skills Badges */}
                    <div className="flex flex-wrap items-center gap-2">
                      {item.skills.map((skill) => (
                        <span
                          key={skill.name}
                          className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11.5px] font-medium bg-neutral-100/50 dark:bg-neutral-800/80 text-neutral-700 dark:text-neutral-200 border border-neutral-300/50 dark:border-neutral-700/50 hover:bg-neutral-200 dark:hover:bg-neutral-800 transition-colors"
                        >
                          <HugeiconsIcon icon={skill.icon} size={14} />
                          <span>{skill.name}</span>
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Experience;
