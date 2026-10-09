"use client";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowRight01Icon } from "@hugeicons/core-free-icons";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/motion-primitives/accordion";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

export type Position = {
  id: string;
  title: string;
  employmentPeriod: { start: string; end: string };
  employmentType: string;
  description: string;
  skills: string[];
};

export type WorkExp = {
  id: string;
  companyName: string;
  companyLogo: StaticImageData;
  companyWebsite: string;
  positions: Position[];
  isCurrentEmployer: boolean;
};

function formatPeriod(start: string, end: string, isCurrent: boolean) {
  const label = isCurrent ? "Present" : end;
  // Dynamic duration logic could go here
  const duration = isCurrent ? "~6mos" : "~1 month";
  return { range: `${start} – ${label}`, duration };
}

const WorkExperience = ({ experience }: { experience: WorkExp[] }) => {
  return (
    <div className="flex w-full flex-col gap-3">
      {experience.map((job) =>
        job.positions.map((pos) => {
          const { range, duration } = formatPeriod(
            pos.employmentPeriod.start,
            pos.employmentPeriod.end,
            job.isCurrentEmployer,
          );

          return (
            <Accordion
              key={pos.id}
              className="w-full focus-within:ring-1 ring-blue-500/20 overflow-hidden rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950"
              transition={{ type: "spring", stiffness: 120, damping: 20 }}
              variants={{
                expanded: { opacity: 1, height: "auto" },
                collapsed: { opacity: 0, height: 0 },
              }}
            >
              <AccordionItem value={pos.id} className="group">
                <AccordionTrigger className="w-full px-3 py-3 sm:px-4 flex flex-row items-center justify-between gap-3 hover:bg-neutral-50 dark:hover:bg-neutral-900/50 transition-colors">
                  <div className="flex items-center gap-3 min-w-0 flex-1">
                    {/* Company Logo */}
                    <div className="w-9 h-9 rounded-lg border border-neutral-200 dark:border-neutral-800 overflow-hidden flex items-center justify-center bg-neutral-50 dark:bg-neutral-900 shrink-0">
                      <Image
                        loading="lazy"
                        src={job.companyLogo}
                        alt={`${job.companyName} logo`}
                        className="object-contain w-6 h-6 sm:w-7 sm:h-7"
                      />
                    </div>

                    {/* Role & Company Details */}
                    <div className="text-left min-w-0 flex-1 flex flex-col">
                      <Link
                        target="_blank"
                        href={job.companyWebsite}
                        className="hover:underline decoration-neutral-400 underline-offset-2 block w-fit"
                      >
                        <p className="text-sm font-semibold text-neutral-900 dark:text-neutral-100 leading-none truncate">
                          {job.companyName}
                        </p>
                      </Link>

                      <div className="flex flex-wrap items-center gap-x-2 gap-y-0.5 mt-1">
                        <span className="text-xs font-medium text-neutral-600 dark:text-neutral-400 truncate">
                          {pos.title}
                        </span>
                        <span className="text-[10px] text-neutral-300 dark:text-neutral-700">
                          •
                        </span>
                        <span className="text-[11px] text-neutral-500 dark:text-neutral-400 font-medium shrink-0">
                          {duration}
                        </span>
                      </div>

                      {/* Mobile-only Date Range */}
                      <span className="text-[11px] text-neutral-400 dark:text-neutral-500 mt-0.5 sm:hidden shrink-0">
                        {range}
                      </span>
                    </div>
                  </div>

                  {/* Desktop Date Range & Chevron */}
                  <div className="flex items-center gap-3 shrink-0 sm:ml-4">
                    <span className="hidden sm:inline text-[11px] font-medium text-neutral-400 dark:text-neutral-500 tabular-nums">
                      {range}
                    </span>
                  </div>
                </AccordionTrigger>

                <AccordionContent>
                  <div className="px-4 pb-4 pt-1 sm:pl-12">
                    <ul className="space-y-2 list-none">
                      {pos.description
                        .split("\n")
                        .map((line) => line.replace(/^- /, "").trim())
                        .filter(Boolean)
                        .map((line, i) => (
                          <li
                            key={i}
                            className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed flex gap-2"
                          >
                            <span className="text-neutral-300 dark:text-neutral-700 mt-1.5 block h-1 w-1 shrink-0 rounded-full bg-current" />
                            {line}
                          </li>
                        ))}
                    </ul>

                    {/* Skills Tags */}
                    <div className="flex flex-wrap gap-1.5 mt-5">
                      {pos.skills.map((skill) => (
                        <span
                          key={skill}
                          className="text-[10px] font-medium px-2 py-0.5 rounded-md bg-neutral-50 dark:bg-neutral-900 text-neutral-600 dark:text-neutral-400 border border-neutral-200 dark:border-neutral-800"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          );
        }),
      )}
    </div>
  );
};

export default WorkExperience;
