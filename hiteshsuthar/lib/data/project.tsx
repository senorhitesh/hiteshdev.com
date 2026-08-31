import { projectBackgrounds, projectImages } from "@/lib/assest/project";
import { StaticImageData } from "next/image";
import { RiNextjsFill } from "react-icons/ri";
import {
  SiTypescript,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiRender,
} from "react-icons/si";
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
  users?: string;
}
interface StackProp {
  icon: React.ReactNode;
  label: string;
}
export const Project: ProjectCardProps[] = [
  {
    id: 1,
    name: "Bmarked",
    slug: "bmark",
    type: "Managment Tool",
    description:
      "A simple bookmark management tool that keeps all your favorite links organized in one place.",
    isActive: true,
    backgroundImage: projectBackgrounds.bg4,
    projectImage: projectImages.bmarked,
    stack: [
      { icon: <RiNextjsFill size={18} />, label: "Next.js" },
      { icon: <SiTypescript size={18} color="#017ACB" />, label: "TypeScript" },
      { icon: <SiTailwindcss size={18} color="#06B6D4" />, label: "Tailwind" },
      {
        icon: <SiNodedotjs size={18} color="#3fd600" />,
        label: "Node.js",
      },
      {
        icon: <SiExpress size={18} color="#3fd600" />,
        label: "Express.js",
      },
      {
        icon: <SiMongodb size={18} color="#3fd600" />,
        label: "MongoDB",
      },
      {
        icon: <SiRender size={18} color="#eeeeee" />,
        label: "Render",
      },
    ],
    github: "https://github.com/senorhitesh",
    link: "https://bmarked.vercel.app/",
    video: "/Project/ProjectVideos/bmark.mp4",
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
    name: "Shikai",
    slug: "shikai",
    type: "Extenstion",
    video: "/Project/ProjectVideos/shikai.mp4",
    description:
      "Shikai an Chrome extension that visualizes the time remaining in the current year.",
    isActive: true,
    backgroundImage: projectBackgrounds.bg2,
    projectImage: projectImages.shiklai,
    github: "https://github.com/senorhitesh/Shikai-Chrome-Extension",
    stack: [
      { icon: <FaReact size={18} color="#61DAFB" />, label: "React" },
      { icon: <SiTailwindcss size={18} color="#06B6D4" />, label: "Tailwind" },
      { icon: <SiTypescript size={18} color="#017ACB" />, label: "TypeScript" },
    ],
    link: "https://github.com/senorhitesh/Shikai-Chrome-Extension",
  },
];
