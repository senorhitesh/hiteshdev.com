import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getBlogBySlug, getAllBlogSlugs } from "@/lib/blog/blog";
import BlogLayout from "@/app/Components/BlogPage/BlogLayout";
import { useMDXComponents } from "@/mdx-components";
import type { Metadata } from "next";
interface Props {
  params: Promise<{
    blog: string;
  }>;
}
export async function generateStaticParams() {
  const slugs = getAllBlogSlugs();
  return slugs.map((slug) => ({ blog: slug }));
}
const p = getAllBlogSlugs();
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { blog } = await params;
  const post = getBlogBySlug(blog);
  if (!post) return {};
  return {
    title: `${post.frontmatter.title} | Hitesh Suthar`,
    description: post.frontmatter.description,
    openGraph: {
      title: post.frontmatter.title,
      description: post.frontmatter.description,
      images: {
        url: "./og-image.png",
        width: 1200,
        height: 630,
        alt: "Hitesh Suthar - Full-Stack Developer",
      },
    },
    twitter: {
      card: "summary_large_image",
      title: "Hitesh Suthar | Full-Stack Developer, Creator & Builder",
      description:
        "yo, I’m Hitesh, an engineer based in India, obsessed in building scalable web products, developer tools, and good design.",
      images: ["./og-image.png"],
      creator: "@hiteshxdev",
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { blog } = await params;
  const post = getBlogBySlug(blog);

  if (!post) {
    notFound();
  }
  const components = useMDXComponents();
  return (
    <BlogLayout
      title={post.frontmatter.title}
      description={post.frontmatter.description}
      date={post.frontmatter.date}
      slug={post.slug}
      coverImage={post.frontmatter.coverImage}
    >
      <MDXRemote source={post.content} components={components} />
    </BlogLayout>
  );
}
