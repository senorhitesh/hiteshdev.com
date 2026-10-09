"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { createPortal } from "react-dom";
import { motion, AnimatePresence, useMotionValue, useSpring } from "motion/react";
import { Copy, Check, ArrowUpRight, Share2 } from "lucide-react";

export interface WritingPost {
  title: string;
  link: string;
  date: string;
  coverImage?: string;
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
  const [hoveredPost, setHoveredPost] = useState<WritingPost | null>(null);
  const [mounted, setMounted] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 350, mass: 0.5 };
  const springX = useSpring(mouseX, springConfig);
  const springY = useSpring(mouseY, springConfig);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => setHoveredPost(null);
    const handleBlur = () => setHoveredPost(null);

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("blur", handleBlur);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("blur", handleBlur);
    };
  }, []);

  const updatePosition = (clientX: number, clientY: number, isInitial = false) => {
    const cardWidth = 320;
    const cardHeight = 220;
    const padding = 16;

    let targetX = clientX - cardWidth / 2;
    if (typeof window !== "undefined") {
      targetX = Math.min(
        Math.max(targetX, padding),
        window.innerWidth - cardWidth - padding
      );
    }

    let targetY = clientY - cardHeight - 16;
    if (clientY < cardHeight + 32) {
      targetY = clientY + 24;
    }

    if (isInitial) {
      mouseX.jump?.(targetX) ?? mouseX.set(targetX);
      mouseY.jump?.(targetY) ?? mouseY.set(targetY);
      if (typeof (springX as any).jump === "function") {
        (springX as any).jump(targetX);
        (springY as any).jump(targetY);
      }
    } else {
      mouseX.set(targetX);
      mouseY.set(targetY);
    }
  };

  const handleMouseEnter = (e: React.MouseEvent, post: WritingPost) => {
    if (!post.coverImage) {
      setHoveredPost(null);
      return;
    }
    const isFirst = !hoveredPost;
    updatePosition(e.clientX, e.clientY, isFirst);
    setHoveredPost(post);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (hoveredPost) {
      updatePosition(e.clientX, e.clientY, false);
    }
  };

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
    <div
      className="w-full"
      onMouseLeave={() => setHoveredPost(null)}
    >
      {groups.map((group, groupIdx) => (
        <div
          key={group.year}
          className={`flex items-start ${
            groupIdx > 0
              ? "mt-4 pt-4 border-t border-neutral-200/70 dark:border-neutral-800/80"
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
                  onMouseEnter={(e) => handleMouseEnter(e, post)}
                  onMouseMove={handleMouseMove}
                  className="group/item relative flex items-center justify-between py-2 sm:py-2.5 border-b border-neutral-200/70 dark:border-neutral-800/80 last:border-b-0 transition-opacity duration-200 group-hover/list:opacity-35 hover:!opacity-100"
                >
                  {/* Post Title */}
                  <span className="text-[13.5px] sm:text-[14px] font-medium text-neutral-900 dark:text-neutral-100 pr-3 truncate transition-colors group-hover/item:text-neutral-950 dark:group-hover/item:text-neutral-50">
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
                        className="w-[22px] h-[22px] flex items-center justify-center rounded text-neutral-400 hover:text-neutral-800 dark:hover:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-all active:scale-95"
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
                        className="w-[22px] h-[22px] flex items-center justify-center rounded text-neutral-400 hover:text-neutral-800 dark:hover:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-all active:scale-95"
                        title="Share link"
                        aria-label="Share link"
                      >
                        <Share2 className="w-3.5 h-3.5" />
                      </button>

                      <span
                        className="w-[22px] h-[22px] flex items-center justify-center rounded text-neutral-400 hover:text-neutral-800 dark:hover:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-all"
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

      {/* Floating Hover Cover Image Preview */}
      {mounted &&
        createPortal(
          <motion.div
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              x: springX,
              y: springY,
              pointerEvents: "none",
              zIndex: 9999,
            }}
            className="hidden sm:block"
          >
            <AnimatePresence>
              {hoveredPost && hoveredPost.coverImage && (
                <motion.div
                  key="writing-hover-preview"
                  initial={{ opacity: 0, scale: 0.88, y: 10, filter: "blur(4px)" }}
                  animate={{ opacity: 1, scale: 1, y:18, filter: "blur(0px)" }}
                  exit={{ opacity: 0, scale: 0.88, y: 10, filter: "blur(4px)" }}
                  transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 28,
                    mass: 0.5,
                  }}
                  className="w-[300px] sm:w-[320px] rounded-2xl overflow-hidden p-1 bg-white/95 dark:bg-neutral-900/95 backdrop-blur-xl border border-neutral-200/80 dark:border-neutral-800/80 shadow-2xl shadow-neutral-100/20 dark:shadow-black/70 ring-1 ring-black/5 dark:ring-white/10"
                >
                  <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden bg-neutral-950">
                    <Image
                      key={hoveredPost.coverImage}
                      src={hoveredPost.coverImage}
                      alt={hoveredPost.title}
                      fill
                      sizes="320px"
                      className="object-cover transition-opacity duration-200"
                      priority
                    />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>,
          document.body
        )}
    </div>
  );
}
