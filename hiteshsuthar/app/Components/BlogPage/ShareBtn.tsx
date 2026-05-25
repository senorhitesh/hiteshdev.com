"use client";

import { useState, useRef, useEffect } from "react";
import { Share2, X, Copy, Check } from "lucide-react";

interface ShareModalProps {
  title?: string;
  url?: string;
}

export default function ShareButton({
  title = "How I Automated Everything Using AI!",
  url = "https://yourblog.com/how-i-automated-everything-using-ai",
}: ShareModalProps) {
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  // Close on outside click
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }

    if (open) document.addEventListener("mousedown", handleClick);

    return () => document.removeEventListener("mousedown", handleClick);
  }, [open]);

  // Close on Escape
  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }

    if (open) document.addEventListener("keydown", handleKey);

    return () => document.removeEventListener("keydown", handleKey);
  }, [open]);

  const handleCopy = () => {
    navigator.clipboard.writeText(url).then(() => {
      setCopied(true);

      setTimeout(() => setCopied(false), 2000);
    });
  };

  const shareTwitter = () => {
    window.open(
      `https://twitter.com/intent/tweet?text=${encodeURIComponent(
        `"${title}"`,
      )}&url=${encodeURIComponent(url)}`,
      "_blank",
    );
  };

  const shareLinkedIn = () => {
    window.open(
      `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
        url,
      )}`,
      "_blank",
    );
  };

  const displayUrl = url.length > 42 ? url.slice(0, 42) + "…" : url;

  return (
    <div className="relative inline-block">
      {/* ── Share Button ── */}
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 text-sm font-medium text-gray-700 dark:text-gray-200 shadow-sm hover:bg-gray-50 dark:hover:bg-neutral-800 hover:border-gray-300 dark:hover:border-neutral-600 active:scale-95 transition-all duration-150 cursor-pointer"
      >
        <Share2 size={15} strokeWidth={2} />
        Share
      </button>

      {/* ── Modal ── */}
      {open && (
        <div
          ref={modalRef}
          className="absolute right-0 top-full mt-2 w-[calc(100vw-2rem)] max-w-[320px] sm:w-80 rounded-2xl border border-gray-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 shadow-xl z-50 overflow-hidden"
          style={{ animation: "popIn .15s ease both" }}
        >
          <style>{`
            @keyframes popIn {
              from {
                opacity: 0;
                transform: scale(.96) translateY(-4px);
              }
              to {
                opacity: 1;
                transform: scale(1) translateY(0);
              }
            }
          `}</style>

          {/* Header */}
          <div className="flex items-start justify-between px-5 pt-5 pb-3">
            <div>
              <p className="text-sm font-semibold text-gray-900 dark:text-white">
                Share this Blog.
              </p>

              <p className="text-xs text-gray-400 dark:text-gray-500 mt-0.5 leading-snug">
                "{title}"
              </p>
            </div>

            <button
              onClick={() => setOpen(false)}
              className="ml-3 flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-gray-400 dark:text-gray-500 hover:bg-gray-100 dark:hover:bg-neutral-800 hover:text-gray-600 dark:hover:text-gray-300 transition-colors cursor-pointer"
              aria-label="Close"
            >
              <X size={15} strokeWidth={2.5} />
            </button>
          </div>

          <div className="px-5 pb-5 space-y-4">
            {/* Copy link */}
            <div>
              <p className="text-xs font-medium text-gray-500 dark:text-gray-400 mb-1.5">
                Copy link
              </p>

              <div className="flex items-center gap-2 border border-gray-200 dark:border-neutral-700 rounded-lg px-3 py-2 bg-gray-50 dark:bg-neutral-800">
                <span className="flex-1 text-xs text-gray-500 dark:text-gray-300 truncate font-mono">
                  {displayUrl}
                </span>

                <button
                  onClick={handleCopy}
                  className={`flex-shrink-0 p-1 rounded-md transition-all duration-150 cursor-pointer ${
                    copied
                      ? "text-emerald-500 bg-emerald-50 dark:bg-emerald-500/10"
                      : "text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-200 hover:bg-gray-200 dark:hover:bg-neutral-700"
                  }`}
                  aria-label="Copy link"
                >
                  {copied ? (
                    <Check size={15} strokeWidth={2.5} />
                  ) : (
                    <Copy size={15} strokeWidth={2} />
                  )}
                </button>
              </div>
            </div>

            {/* Share on */}
            <div>
              <p className="text-xs font-medium text-gray-500 dark:text-gray-400 mb-1.5">
                Share on
              </p>

              <div className="flex gap-2">
                {/* Twitter / X */}
                <button
                  onClick={shareTwitter}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-gray-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 text-xs font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-neutral-800 hover:border-gray-300 dark:hover:border-neutral-600 active:scale-95 transition-all duration-150 cursor-pointer"
                >
                  <svg
                    width="13"
                    height="13"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="text-gray-800 dark:text-white"
                  >
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.259 5.63 5.905-5.63Zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                  Twitter / X
                </button>

                {/* LinkedIn */}
                <button
                  onClick={shareLinkedIn}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-gray-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 text-xs font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-neutral-800 hover:border-gray-300 dark:hover:border-neutral-600 active:scale-95 transition-all duration-150 cursor-pointer"
                >
                  <svg
                    width="13"
                    height="13"
                    viewBox="0 0 24 24"
                    fill="#0A66C2"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                  LinkedIn
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
