"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Copy, Check, ArrowUpRight, Share2 } from "lucide-react";

export interface WritingPost {
  title: string;
  link: string;
  date: string;
}

export interface WritingYearGroup {
  year: string;
  posts: WritingPost[];
}

interface WritingListProps {
  groups: WritingYearGroup[];
}

export default function WritingList({ groups }: WritingListProps) {
  const [copiedLink, setCopiedLink] = useState<string | null>(null);

  const handleCopy = (e: React.MouseEvent, link: string) => {
    e.preventDefault();
    e.stopPropagation();

    const fullUrl =
      typeof window !== "undefined"
        ? `${window.location.origin}${link}`
        : link;

    navigator.clipboard.writeText(fullUrl).then(() => {
      setCopiedLink(link);
      setTimeout(() => {
        setCopiedLink((current) => (current === link ? null : current));
      }, 2000);
    });
  };

  const handleShare = async (
    e: React.MouseEvent,
    title: string,
    link: string
  ) => {
    e.preventDefault();
    e.stopPropagation();

    const fullUrl =
      typeof window !== "undefined"
        ? `${window.location.origin}${link}`
        : link;

    if (typeof navigator !== "undefined" && navigator.share) {
      try {
        await navigator.share({
          title,
          url: fullUrl,
        });
        return;
      } catch {
        // User dismissed share dialog
      }
    }

    handleCopy(e, link);
  };

  return (
    <div className="w-full">
      {groups.map((group, groupIdx) => (
        <div
          key={group.year}
          className={`flex items-start ${
            groupIdx > 0
              ? "mt-4 pt-4 border-t border-black/[0.05] dark:border-white/[0.06]"
              : "mt-1"
          }`}
        >
          {/* Year Label */}
          <div className="w-20 sm:w-28 text-[13px] text-neutral-400 dark:text-neutral-500 pt-2 shrink-0 select-none">
            {group.year}
          </div>

          {/* List Items */}
          <div className="flex-1 flex flex-col min-w-0 group/list">
            {group.posts.map((post) => {
              const isCopied = copiedLink === post.link;

              return (
                <Link
                  key={post.link}
                  href={post.link}
                  className="group/item relative flex items-center justify-between py-2 sm:py-2.5 border-b border-black/[0.05] dark:border-white/[0.06] last:border-b-0 transition-opacity duration-200 group-hover/list:opacity-35 hover:!opacity-100"
                >
                  {/* Post Title */}
                  <span className="text-[13.5px] sm:text-[14px] font-medium text-neutral-900 dark:text-neutral-100 pr-3 truncate transition-colors group-hover/item:text-black dark:group-hover/item:text-white">
                    {post.title}
                  </span>

                  {/* Date & Hover Action Buttons */}
                  <div className="relative flex items-center ml-auto shrink-0 h-5">
                    {/* Date */}
                    <span className="text-[13px] text-neutral-400 dark:text-neutral-500 tabular-nums transition-all duration-200 ease-out group-hover/item:opacity-0 group-hover/item:-translate-y-1">
                      {post.date}
                    </span>

                    {/* Action Buttons */}
                    <div className="absolute right-0 flex items-center gap-1 opacity-0 translate-y-1 pointer-events-none group-hover/item:opacity-100 group-hover/item:translate-y-0 group-hover/item:pointer-events-auto transition-all duration-200 ease-out">
                      {/* Copy Link */}
                      <button
                        type="button"
                        onClick={(e) => handleCopy(e, post.link)}
                        className="w-[22px] h-[22px] flex items-center justify-center rounded text-neutral-400 hover:text-neutral-800 dark:hover:text-neutral-200 hover:bg-black/[0.05] dark:hover:bg-white/[0.08] transition-all active:scale-95"
                        title={isCopied ? "Copied!" : "Copy link"}
                        aria-label="Copy link"
                      >
                        {isCopied ? (
                          <Check className="w-3.5 h-3.5 text-emerald-500" />
                        ) : (
                          <Copy className="w-3.5 h-3.5" />
                        )}
                      </button>

                      {/* Share Link */}
                      <button
                        type="button"
                        onClick={(e) => handleShare(e, post.title, post.link)}
                        className="w-[22px] h-[22px] flex items-center justify-center rounded text-neutral-400 hover:text-neutral-800 dark:hover:text-neutral-200 hover:bg-black/[0.05] dark:hover:bg-white/[0.08] transition-all active:scale-95"
                        title="Share link"
                        aria-label="Share link"
                      >
                        <Share2 className="w-3.5 h-3.5" />
                      </button>

                      <span
                        className="w-[22px] h-[22px] flex items-center justify-center rounded text-neutral-400 hover:text-neutral-800 dark:hover:text-neutral-200 hover:bg-black/[0.05] dark:hover:bg-white/[0.08] transition-all"
                        title="Open post"
                      >
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}
