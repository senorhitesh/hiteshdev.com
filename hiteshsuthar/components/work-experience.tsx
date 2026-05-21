"use client";
import { ChevronDown, Code2 } from "lucide-react";
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
  const duration = isCurrent ? "~6mos" : "~1 month";
  return { range: `${start} – ${label}`, duration };
}

const WorkExperience = ({ experience }: { experience: WorkExp[] }) => {
  return (
    <div className="flex w-full flex-col gap-2">
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
              className="w-full focus:ring-1 ring-offset-2 ring-blue-100 overflow-hidden rounded-xl border border-zinc-200 dark:border-zinc-800 "
              transition={{ type: "spring", stiffness: 120, damping: 20 }}
              variants={{
                expanded: { opacity: 1, y: 0 },
                collapsed: { opacity: 0, y: 18 },
              }}
            >
              <AccordionItem value={pos.id} className="">
                <AccordionTrigger className="w-full  rounded-2xl px-3.5 py-3 flex items-center justify-between hover:bg-zinc-50 dark:hover:bg-zinc-900/50 transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg border border-zinc-200 dark:border-zinc-900 overflow-hidden flex items-center justify-center bg-zinc-100 dark:bg-zinc-800 shrink-0">
                      <Image
                        src={job.companyLogo}
                        alt={`${job.companyName} logo`}
                        className="object-contain w-7 h-7"
                      />
                    </div>
                    <div className="text-left">
                      <Link target="_black" href={job.companyWebsite}>
                        <p className="text-sm w-fit  relative font-medium text-zinc-900 dark:text-zinc-50 leading-tight">
                          {job.companyName}
                        </p>
                      </Link>
                      <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-0.5">
                        {pos.title} ({duration})
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5 ml-4 shrink-0">
                    <span className="text-xs text-zinc-500 dark:text-zinc-400 whitespace-nowrap">
                      {range}
                    </span>
                    <ChevronDown className="w-3.5 h-3.5 text-zinc-400 transition-transform duration-200 group-data-expanded:rotate-180" />
                  </div>
                </AccordionTrigger>
                <AccordionContent className="origin-top">
                  <div className="px-3.5 pb-3.5 pt-3 ">
                    <ul className="space-y-1.5 list-disc list-outside ml-4">
                      {pos.description
                        .split("\n")
                        .map((line) => line.replace(/^- /, "").trim())
                        .filter(Boolean)
                        .map((line, i) => (
                          <li
                            key={i}
                            className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed"
                          >
                            {line}
                          </li>
                        ))}
                    </ul>
                    <div className="flex flex-wrap gap-1.5 mt-3">
                      {pos.skills.map((skill) => (
                        <span
                          key={skill}
                          className="text-[11px] px-2 py-0.5 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 border border-zinc-200 dark:border-zinc-700"
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
