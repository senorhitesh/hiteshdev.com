import type { BlogDataProps } from "@/components/Blogs";
import { BlogCard } from "@/components/Blogs";
import type { Metadata } from "next";
const BlogMetaData: BlogDataProps[] = [
  {
    title: "How did I got my first client",
    description: "If you were an beginner here is honest guide for you.",
    link: "/blogs/how-to-get-first-client",
    date: "11-10-2026",
  },
];

export const metadata: Metadata = {
  title: "Blog - Hitesh Suthar",
  description:
    "Notes on software, engineering, freelancing, and things I learn while building.",
  alternates: {
    canonical: "/blogs",
  },
};

const Blogs = () => {
  return (
    <div className="w-full  font-mono tracking-tight ">
      <div className="mx-auto  flex items-center justify-center flex-col relative   w-full max-w-2xl">
        <div className="w-full flex items-center justify-center ">
          {" "}
          <div className="w-full flex flex-col">
            <h2 className="text-md  uppercase font-mono text-neutral-500 dark:text-neutral-100 ">
              Blogs
            </h2>
            <div className="w-full flex flex-col mt-1 items-center gap-4">
              {BlogMetaData.map((blog, i) => (
                <BlogCard
                  key={i}
                  title={blog.title}
                  link={blog.link}
                  description={blog.description}
                  date={blog.date}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
