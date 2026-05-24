import { ArrowUpRight, ChevronLeft, CalendarRange } from "lucide-react";
import Link from "next/link";
import type { BlogDataProps } from "@/app/Components/Blogs";
import { BlogCard } from "@/app/Components/Blogs";
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
    <div className="w-full border-b font-mono tracking-tight dark:border-neutral-900 border-neutral-200">
      <div className="mx-auto border-x flex items-center justify-center flex-col dark:border-neutral-900 relative border-neutral-200 max-w-2xl">
        <div className="w-full flex items-center justify-center p-2">
          <div className="w-full  flex flex-col">
            <h2 className="relative font-[Neue] text-2xl inline-block font-semibold text-neutral-900 dark:text-neutral-100 ">
              Blogs
            </h2>

            <div className=" flex flex-col mt-2 items-center">
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
        </div>
      </div>
    </div>
  );
};
export default Blogs;
