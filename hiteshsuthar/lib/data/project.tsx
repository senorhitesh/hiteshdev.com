import { projectBackgrounds, projectImages } from "@/lib/assest/project";
import { StaticImageData } from "next/image";
import { RiNextjsFill } from "react-icons/ri";
import { SiTypescript, SiTailwindcss } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { BiLogoJavascript } from "react-icons/bi";

interface ProjectCardProps {
  id: number;
  name: string;
  slug: string;
  type: string;
  description: string;
  isActive: boolean;
  backgroundImage: StaticImageData;
  projectImage: StaticImageData;
  link: string;
  video?: any;
  longDescription?: string;
  github?: string;
  stack: StackProp[]; // ← change from ReactNode[] to StackProp[]
}
interface StackProp {
  icon: React.ReactNode;
  label: string;
}
export const Project: ProjectCardProps[] = [
  {
    id: 1,
    name: "Fypped",
    slug: "fyyped",
    type: "Meme Gallery",
    description:
      "Fyyped is a meme culture hub where internet users discover and sharethe latest memes, viral edits, and popular formats — all in one place",
    isActive: false,
    backgroundImage: projectBackgrounds.bg4,
    projectImage: projectImages.flyyped,
    stack: [
      { icon: <RiNextjsFill size={18} />, label: "Next.js" },
      { icon: <SiTypescript size={18} color="#017ACB" />, label: "TypeScript" },
      { icon: <SiTailwindcss size={18} color="#06B6D4" />, label: "Tailwind" },
    ],
    link: "https://fyyped.vercel.app/",
    video: "/Project/ProjectVideos/waiting.mp4",
  },
  {
    id: 2,
    name: "Task Tracker",
    slug: "task-tracker",
    type: "Tracker",
    video: "/Project/ProjectVideos/tt.mp4",
    description:
      "A modern productivity app that helps users manage tasks and goals through a GitHub-style visual tracking system.",
    isActive: true,
    backgroundImage: projectBackgrounds.bg1,
    projectImage: projectImages.taskTracker,
    github: "https://github.com/senorhitesh/TaskTraker",
    stack: [
      {
        icon: <BiLogoJavascript size={18} color="#F7DF1E" />,
        label: "JavaScript",
      },
      { icon: <FaReact size={18} color="#61DAFB" />, label: "React" },
      { icon: <SiTailwindcss size={18} color="#06B6D4" />, label: "Tailwind" },
    ],
    link: "https://tasktraker-seven.vercel.app/",
  },
  {
    id: 3,
    name: "Softtech Solution",
    slug: "sofftech-solutions",
    type: "Redesign",
    video: "/Project/ProjectVideos/stecg.mp4",
    github: "https://github.com/senorhitesh/softtechsolution-rewamp",
    description:
      "A redesigned telecom startup website with modern visuals, smooth interactions, and an improved user experience.",
    isActive: true,
    backgroundImage: projectBackgrounds.bg3,
    projectImage: projectImages.softtech,
    stack: [
      { icon: <RiNextjsFill size={18} />, label: "Next.js" },
      { icon: <SiTypescript size={18} color="#017ACB" />, label: "TypeScript" },
      { icon: <SiTailwindcss size={18} color="#06B6D4" />, label: "Tailwind" },
    ],
    link: "https://softtechsolution-rewamp.vercel.app",
  },
  {
    id: 4,
    name: "Shushiman",
    slug: "shushiman",
    type: "Shushi Website",
    video: "/Project/ProjectVideos/sw.mp4",
    description:
      "A Japanese-theme sushi restaurant website featuring clean visuals, smooth animations, and a fully responsive design.",
    isActive: true,
    backgroundImage: projectBackgrounds.bg2,
    projectImage: projectImages.shushiman,
    github: "https://github.com/senorhitesh/hiteshsuthar.portfolio.git",
    stack: [
      { icon: <FaReact size={18} color="#61DAFB" />, label: "React" },
      { icon: <SiTailwindcss size={18} color="#06B6D4" />, label: "Tailwind" },
      { icon: <SiTypescript size={18} color="#017ACB" />, label: "TypeScript" },
    ],
    link: "https://shushiwebsite.vercel.app/",
  },
];
