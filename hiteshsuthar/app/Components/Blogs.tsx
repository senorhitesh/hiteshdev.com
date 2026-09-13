import { HugeiconsIcon } from "@hugeicons/react";
import {
  ArrowRight02Icon,
  ArrowRight01Icon,
  CalendarRangeIcon,
} from "@hugeicons/core-free-icons";
import Link from "next/link";

export interface BlogDataProps {
  title: string;
  description: string;
  link: string;
  date: string;
}

const BlogMetaData: BlogDataProps[] = [
  {
    title: "How did I got my first client",
    description: "If you were an beginner here is honest guide for you.",
    link: "/blogs/how-to-get-first-client",
    date: "11-10-2026",
  },
];

const Blogs = () => {
  return (
    <div className=" -x flex flex-col  -900     p-4">
      {" "}
      <div className="flex items-center gap-2 ">
        <Link href={"/"}>
          <div className="text-neutral-700 hover:dark:bg-neutral-900 hover: -800 rounded-md    -transparent hover:  hover:bg-neutral-50">
            <HugeiconsIcon className="rotate-180" icon={ArrowRight01Icon} />
          </div>
        </Link>
        <h2 className="relative font-Neue text-2xl inline-block font-semibold text-neutral-900 dark:text-neutral-100 ">
          Blogs
        </h2>
      </div>
      <p className="font-mono ml-2 text-sm mt-2 mb-4 text-neutral-400">
        Thoughts, tutorials, and insights on programming and life
      </p>
      <div className="flex  flex-col items-center gap-4">
        {BlogMetaData.map((blog, i) => {
          return (
            <BlogCard
              key={i}
              title={blog.title}
              link={blog.link}
              description={blog.description}
              date={blog.date}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Blogs;

export const BlogCard = ({ title, link, description, date }: BlogDataProps) => {
  return (
    <div className="w-full cursor-pointer px-2 py-3 flex justify-between items-center hover:bg-neutral-50 dark:hover:bg-neutral-950 rounded-2xl">
      <Link className="flex justify-between w-full items-center" href={link}>
        <div className="flex items-start flex-col ">
          <div className="flex flex-col">
            <h2 className="font-sans font-semibold  text-xl md:text-md sm:text-md">
              {title}
            </h2>
            <p className="text-sm text-neutral-600">{description}</p>
          </div>
          <div className="flex mt-2 gap-2">
            <button
              aria-label="date-shower"
              className="flex items-center text-neutral-400 text-[14px] gap-2"
            >
              <HugeiconsIcon icon={CalendarRangeIcon} /> {date}
            </button>
          </div>
        </div>
        <div className="mr-2 cursor-pointer flex gap-1 group items-center">
          <p className="text-neutral-500 dark:group-hover:text-neutral-500 group-hover:text-neutral-700">
            Read
          </p>{" "}
          <HugeiconsIcon
            icon={ArrowRight02Icon}
            size={18}
            className="text-neutral-500 group-hover:text-neutral-700 dark:group-hover:text-neutral-500"
          />
        </div>
      </Link>
    </div>
  );
};
