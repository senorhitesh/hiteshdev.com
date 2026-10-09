import { getAllBlogs } from "@/lib/blog/blog";
import WritingList, {
  WritingPost,
  WritingYearGroup,
} from "./WritingList";

function parsePostDate(dateStr?: string) {
  if (!dateStr) {
    return { year: "2026", displayDate: "" };
  }
  const dateObj = new Date(dateStr);
  if (isNaN(dateObj.getTime())) {
    return { year: "2026", displayDate: dateStr };
  }
  const year = dateObj.getFullYear().toString();
  const day = String(dateObj.getDate()).padStart(2, "0");
  const month = String(dateObj.getMonth() + 1).padStart(2, "0");
  return {
    year,
    displayDate: `${day}/${month}`,
  };
}

const Blogs = () => {
  const blogs = getAllBlogs();

  const groupsMap = new Map<string, WritingPost[]>();

  blogs.forEach((post) => {
    const { year, displayDate } = parsePostDate(post.frontmatter.date);
    const current = groupsMap.get(year) || [];
    current.push({
      title: post.frontmatter.title || post.slug,
      link: `/blogs/${post.slug}`,
      date: displayDate,
      coverImage: post.frontmatter.coverImage || "/blogs/blog-1.png",
    });
    groupsMap.set(year, current);
  });

  let groups: WritingYearGroup[] = Array.from(groupsMap.entries()).map(
    ([year, posts]) => ({
      year,
      posts,
    })
  );

  // Fallback if no blogs exist
  if (groups.length === 0) {
    groups = [
      {
        year: "2026",
        posts: [
          {
            title: "How did I got my first client",
            link: "/blogs/how-to-get-first-client",
            date: "11/10",
            coverImage: "/blogs/blog-1.png",
          },
        ],
      },
    ];
  }

  return (
    <section className="w-full max-w-2xl mx-auto py-6 font-sans">
      {/* Section Header */}
      <div className="flex items-center justify-between pb-2 border-b border-neutral-200/80 dark:border-neutral-800">
        <h2 className="text-[13px] font-medium text-neutral-500 dark:text-neutral-400">
          # Writing
        </h2>
      </div>

      <WritingList groups={groups} />
    </section>
  );
};

export default Blogs;
