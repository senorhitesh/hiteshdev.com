import { ArrowUpRight, ChevronLeft, CalendarRange } from "lucide-react";
import Link from "next/link";

interface BlogDataProps {
  title: string;
  description: string;
  link: string;
  date: string;
}

const BlogMetaData: BlogDataProps[] = [
  {
    title: "Skip the Backend: Supabase Setup",
    description: "How I connected my contact form with supabse",
    link: "blogs/SupabaseBlog",
    date: "23-05-2026",
  },
];

const Blogs = () => {
  return (
    <div className="border-x flex flex-col   border-neutral-200 p-4">
      {" "}
      <div className="flex items-center gap-2 ">
        <Link href={"/"}>
          <div className="text-neutral-700  rounded-md border border-transparent hover:border-neutral-200 hover:bg-neutral-50">
            <ChevronLeft />
          </div>
        </Link>
        <h2 className="relative font-[Neue] text-2xl inline-block font-semibold text-neutral-900 dark:text-neutral-100 ">
          Blogs
        </h2>
      </div>
      <p className="font-mono ml-2 text-sm mt-2 mb-4 text-neutral-400">
        Thoughts, tutorials, and insights on programming and life
      </p>
      <div className="flex  flex-col items-center gap-4">
        {BlogMetaData.map((blog, i) => {
          return (
            <div
              key={i}
              className="w-full px-2 py-3 flex justify-between items-center hover:border-neutral-400 border border-dashed border-neutral-200"
            >
              <div className="flex items-start flex-col ">
                <div className="flex flex-col">
                  <h1 className="font-sans font-semibold  text-xl md:text-md sm:text-md">
                    {blog.title}
                  </h1>
                  <p className="text-sm text-neutral-600">{blog.description}</p>
                </div>
                <div className="flex mt-2 gap-2">
                  <button className="flex items-center text-neutral-400 text-[14px] gap-2">
                    <CalendarRange size={16} className="text-neutral-400" />{" "}
                    {blog.date}
                  </button>
                </div>
              </div>
              <Link href={blog.link}>
                <div className="mr-2 cursor-pointer flex gap-1 group items-center">
                  <p className="text-neutral-500 group-hover:text-neutral-700">
                    Read
                  </p>{" "}
                  <ArrowUpRight
                    size={18}
                    className="text-neutral-500 group-hover:text-neutral-700"
                  />
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Blogs;
