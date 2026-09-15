import type { WorkExp } from "@/components/work-experience";
import WorkExperience from "@/components/work-experience";
import softechLogo from "@/public/softech-logo.png";

const Experience = () => {
  return (
    <div className="w-full mt-6 max-w-2xl flex flex-col gap-1   mx-auto">
      <p className="text-md text-neutral-500  uppercase">Experience</p>
      <WorkExperienceDemo />
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
        title: "Frontend Intern Developer",
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
