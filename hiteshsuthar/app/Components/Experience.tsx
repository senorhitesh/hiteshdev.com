import type { Position, WorkExp } from "@/components/work-experience";
import WorkExperience from "@/components/work-experience";
import { CodeXmlIcon, LightbulbIcon } from "lucide-react";
import softechLogo from "@/public/softech-logo.png";
import { StaticImageData } from "next/image";

const Experience = () => {
  return (
    <div className="w-full border-b border-neutral-200 dark:border-neutral-900">
      <div className="w-2xl border-x flex flex-col p-3  gap-4 border-neutral-200 dark:border-neutral-900 mx-auto">
        {" "}
        <p className="text-2xl font-bold font-[Neue] text-left mt-8">
          Experience
        </p>
        <WorkExperienceDemo />
      </div>
    </div>
  );
};

export default Experience;

function WorkExperienceDemo() {
  return <WorkExperience experience={WORK_EXPERIENCE} />;
}
const WORK_EXPERIENCE: WorkExp[] = [
  {
    id: "softech",
    companyName: "Softech Solutions",
    companyLogo: softechLogo,
    companyWebsite: "https://soft-techsolutions.com/",
    positions: [
      {
        id: "2",
        title: "Frontend Developer",
        employmentPeriod: {
          start: "04.2026",
          end: "04.2026",
        },

        employmentType: "Intenship",
        description: ` Enhanced the user experience and interface of an internal CMS system, improving usability and visual consistency across key workflows.
                       Led the full migration of a legacy PHP website to Next.js, achieving a 10% improvement in overall performance and significantly improving maintainability.
                       Developed and maintained a CMS system for a bank's website, utilizing PostgreSQL for robust and secure data management.`,
        skills: [
          "Next.js",
          "Typescript",
          "React",
          "UI/UX Design",
          "Figma",
          "PostgresQl",
        ],
      },
    ],
    isCurrentEmployer: false,
  },
];
