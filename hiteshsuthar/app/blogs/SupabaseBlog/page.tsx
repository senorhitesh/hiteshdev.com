"use client";

import { useState, useEffect, useRef } from "react";
import {
  ChevronLeft,
  CalendarRange,
  Play,
  Pause,
  Sun,
  Moon,
} from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import ShareButton from "@/app/Components/BlogPage/ShareBtn";
import Footer from "@/app/Components/Footer/Footer";
import { Spinner } from "@/components/ui/spinner";

const playClickSound = () => {
  if (typeof window === "undefined") return;
  try {
    const ctx = new (
      window.AudioContext || (window as any).webkitAudioContext
    )();

    // Snappy mechanical click pop
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = "sine";
    osc.frequency.setValueAtTime(1400, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(400, ctx.currentTime + 0.04);
    gain.gain.setValueAtTime(0.06, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.04);
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start();
    osc.stop(ctx.currentTime + 0.05);

    // High frequency friction click
    const osc2 = ctx.createOscillator();
    const gain2 = ctx.createGain();
    osc2.type = "triangle";
    osc2.frequency.setValueAtTime(2600, ctx.currentTime);
    osc2.frequency.exponentialRampToValueAtTime(600, ctx.currentTime + 0.02);
    gain2.gain.setValueAtTime(0.03, ctx.currentTime);
    gain2.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.02);
    osc2.connect(gain2);
    gain2.connect(ctx.destination);
    osc2.start();
    osc2.stop(ctx.currentTime + 0.03);
  } catch (e) {
    console.warn("Web Audio API not supported", e);
  }
};

// ─── Types ────────────────────────────────────────────────────────────────────
export type Theme = "dark" | "light";

// ─── Reusable UI Components ───────────────────────────────────────────────────

export function Tag({ children }: { children: React.ReactNode }) {
  return (
    <motion.span
      initial={{ opacity: 0, y: 10 }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.3,
        ease: "easeIn",
      }}
      viewport={{ once: true }}
      className="inline-block font-['JetBrains_Mono',monospace] text-[11px] font-medium text-[#b45309] dark:text-[#f59e0b] bg-[#b45309]/8 dark:bg-[#f59e0b]/1 border border-[#b45309]/2 dark:border-[#f59e0b]/22 rounded px-2.5 py-1 tracking-wider uppercase mb-6"
    >
      {children}
    </motion.span>
  );
}

export function Callout({
  type,
  children,
}: {
  type: "info" | "warn";
  children: React.ReactNode;
}) {
  const isInfo = type === "info";
  return (
    <motion.div
      initial={{ opacity: 0, y: 10, filter: "blur(2px)" }}
      whileInView={{
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
      }}
      transition={{
        duration: 0.3,
        ease: "easeIn",
      }}
      viewport={{ once: true }}
      className={`rounded-lg px-4.5 py-3.5 my-5.5 text-[14.5px] leading-relaxed flex gap-3 items-start border ${
        isInfo
          ? "bg-[#b45309]/8 dark:bg-[#f59e0b]/1 border-[#b45309]/2 dark:border-[#f59e0b]/22 text-[#92400e] dark:text-[#fcd34d]"
          : "bg-red-500/[0.07] dark:bg-red-500/1 border-red-500/18 dark:border-red-500/22 text-red-800 dark:text-red-300"
      }`}
    >
      <span className="text-[17px] shrink-0 mt-px">{isInfo ? "💡" : "⚠️"}</span>
      <div>{children}</div>
    </motion.div>
  );
}

export function CodeBlock({
  filename,
  children,
}: {
  filename: string;
  children: React.ReactNode;
}) {
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    const text =
      typeof children === "string"
        ? children
        : (document.getElementById(`cb-${filename}`)?.innerText ?? "");
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div className="my-6.5 rounded-[10px] overflow-hidden border border-[#ddd8ce] dark:border-[#252529]">
      <div className="bg-[#f0ece4] dark:bg-[#16161a] px-3.5 py-2 font-['JetBrains_Mono',monospace] text-xs text-[#78716c] dark:text-[#6b6b75] flex items-center justify-between border-b border-[#ddd8ce] dark:border-[#252529]">
        <span className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#ddd8ce] dark:bg-[#252529] inline-block" />
          {filename}
        </span>
        <button
          onClick={handleCopy}
          className={`bg-transparent border-none cursor-pointer font-['JetBrains_Mono',monospace] text-[11px] px-1.5 py-0.5 rounded transition-colors ${
            copied
              ? "text-[#b45309] dark:text-[#f59e0b]"
              : "text-[#78716c] dark:text-[#6b6b75] hover:text-[#1c1917] dark:hover:text-[#e8e6e1]"
          }`}
        >
          {copied ? "copied!" : "copy"}
        </button>
      </div>
      <pre
        id={`cb-${filename}`}
        className="bg-[#1c1917] dark:bg-[#0a0a0c] px-5 py-4.5 overflow-x-auto font-['JetBrains_Mono',monospace] text-[13px] leading-[1.85] text-[#e7e5e0] dark:text-[#d4cfc7] m-0"
      >
        {children}
      </pre>
    </div>
  );
}

// ─── Reusable Typography Components ───────────────────────────────────────────

export const H2 = ({ children }: { children: React.ReactNode }) => (
  <motion.h2
    initial={{ opacity: 0, y: 10, filter: "blur(2px)" }}
    whileInView={{
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
    }}
    transition={{
      duration: 0.3,
      ease: "easeIn",
    }}
    viewport={{ once: true }}
    className="font-['Instrument_Serif',Georgia,_serif] text-[clamp(1.45rem,3vw,1.75rem)] font-normal text-[#1c1917] dark:text-[#e8e6e1] mt-13 mb-3.5 pt-1.5"
  >
    {children}
  </motion.h2>
);

export const H3 = ({ children }: { children: React.ReactNode }) => (
  <motion.h3
    initial={{ opacity: 0, y: 10, filter: "blur(2px)" }}
    whileInView={{
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
    }}
    transition={{
      duration: 0.3,
      ease: "easeIn",
    }}
    viewport={{ once: true }}
    className="font-['JetBrains_Mono',monospace] text-[11.5px] font-medium text-[#b45309] dark:text-[#f59e0b] uppercase tracking-[0.08em] mt-1.5"
  >
    {children}
  </motion.h3>
);

export const P = ({ children }: { children: React.ReactNode }) => (
  <motion.p
    initial={{ opacity: 0, y: 10, filter: "blur(2px)" }}
    whileInView={{
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
    }}
    transition={{
      duration: 0.3,
      ease: "easeIn",
    }}
    viewport={{ once: true }}
    className="text-[#78716c] dark:text-[#6b6b75] mb-4 text-[16px] leading-[1.78]"
  >
    {children}
  </motion.p>
);

export const Divider = () => (
  <hr className="border-0 border-t border-[#ddd8ce] dark:border-[#252529] my-11" />
);

export const Strong = ({ children }: { children: React.ReactNode }) => (
  <strong className="text-[#1c1917] dark:text-[#e8e6e1] font-medium">
    {children}
  </strong>
);

export const InlineCode = ({ children }: { children: React.ReactNode }) => (
  <motion.code
    initial={{ opacity: 0, y: 10, filter: "blur(2px)" }}
    whileInView={{
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
    }}
    transition={{
      duration: 0.3,
      ease: "easeIn",
    }}
    viewport={{ once: true }}
    className="font-['JetBrains_Mono',monospace] text-[0.85em] bg-[#f0ece4] dark:bg-[#16161a] border border-[#ddd8ce] dark:border-[#252529] rounded px-1.5 py-px text-[#b45309] dark:text-[#f59e0b]"
  >
    {children}
  </motion.code>
);

export const StyledLink = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => (
  <motion.a
    initial={{ opacity: 0, y: 10, filter: "blur(2px)" }}
    whileInView={{
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
    }}
    transition={{
      duration: 0.3,
      ease: "easeIn",
    }}
    viewport={{ once: true }}
    href={href}
    target="_blank"
    rel="noreferrer"
    className="text-[#b45309] dark:text-[#f59e0b] underline decoration-[#b45309]/30 dark:decoration-[#f59e0b]/30 underline-offset-2 hover:decoration-[#b45309]/80 dark:hover:decoration-[#f59e0b]/80 transition-colors"
  >
    {children}
  </motion.a>
);

export const StepBadge = ({ number }: { number: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 10, filter: "blur(2px)" }}
    whileInView={{
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
    }}
    transition={{
      duration: 0.3,
      ease: "easeIn",
    }}
    viewport={{ once: true }}
    className="shrink-0 w-8 h-8 rounded-full bg-[#b45309]/8 dark:bg-[#f59e0b]/1 border border-[#b45309]/2 dark:border-[#f59e0b]/22 flex items-center justify-center font-['JetBrains_Mono',monospace] text-[13px] text-[#b45309] dark:text-[#f59e0b] mt-1"
  >
    {number}
  </motion.div>
);

// ─── Syntax Highlight Helpers ─────────────────────────────────────────────────

export const K = ({ c }: { c: string }) => (
  <motion.span
    initial={{ opacity: 0, y: 10, filter: "blur(2px)" }}
    whileInView={{
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
    }}
    transition={{
      duration: 0.3,
      ease: "easeIn",
    }}
    viewport={{ once: true }}
    className="text-[#cced3a] dark:text-[#cced3a]"
  >
    {c}
  </motion.span>
);
export const F = ({ c }: { c: string }) => (
  <motion.span
    initial={{ opacity: 0, y: 10, filter: "blur(2px)" }}
    whileInView={{
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
    }}
    transition={{
      duration: 0.3,
      ease: "easeIn",
    }}
    viewport={{ once: true }}
    className="text-[#d89a1d] dark:text-[#d89a1d]"
  >
    {c}
  </motion.span>
);
export const S = ({ c }: { c: string }) => (
  <motion.span
    initial={{ opacity: 0, y: 10, filter: "blur(2px)" }}
    whileInView={{
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
    }}
    transition={{
      duration: 0.3,
      ease: "easeIn",
    }}
    viewport={{ once: true }}
    className="text-[#e83aff] dark:text-[#e83aff]"
  >
    {c}
  </motion.span>
);
export const Prop = ({ c }: { c: string }) => (
  <motion.span
    initial={{ opacity: 0, y: 10, filter: "blur(2px)" }}
    whileInView={{
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
    }}
    transition={{
      duration: 0.3,
      ease: "easeIn",
    }}
    viewport={{ once: true }}
    className="text-[#0e7490] dark:text-[#67e8f9]"
  >
    {c}
  </motion.span>
);
export const C = ({ c }: { c: string }) => (
  <motion.span
    initial={{ opacity: 0, y: 10, filter: "blur(2px)" }}
    whileInView={{
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
    }}
    transition={{
      duration: 0.3,
      ease: "easeIn",
    }}
    viewport={{ once: true }}
    className="text-[#9ca3af] dark:text-[#4b5563] italic"
  >
    {c}
  </motion.span>
);
export const HL = ({ children }: { children: React.ReactNode }) => (
  <motion.span
    initial={{ opacity: 0 }}
    whileInView={{
      opacity: 1,
    }}
    transition={{
      duration: 0.3,
      ease: "easeIn",
    }}
    viewport={{ once: true }}
    className="block bg-[#8aff67]/10 dark:bg-[#8aff67]/10 -mx-5 px-5"
  >
    {children}
  </motion.span>
);

// ─── Main Component ───────────────────────────────────────────────────────────

export default function SupabaseBlog() {
  const [theme, setTheme] = useState<Theme>("dark");

  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [visible, setvisible] = useState(false);
  const [isVideoLoading, setIsVideoLoading] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-color-scheme: light)");
    if (mq.matches) setTheme("light");
  }, []);

  const toggle = () => {
    playClickSound();
    setTheme((t) => (t === "dark" ? "light" : "dark"));
  };

  return (
    <div className={theme === "dark" ? "dark" : ""}>
      <div className="min-h-screen bg-[#faf8f5] overflow-hidden dark:bg-[#0c0c0e] text-[#1c1917] dark:text-[#e8e6e1] font-['DM_Sans','Segoe_UI',sans-serif] transition-colors duration-300 selection:bg-[#b45309]/15 dark:selection:bg-[#f59e0b]/2 selection:text-[#b45309] dark:selection:text-[#f59e0b]">
        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=JetBrains+Mono:wght@400;500&family=DM+Sans:wght@400;500&display=swap');
        `}</style>

        <div className="max-w-170 mx-auto px-6">
          {/* ── Header ── */}
          <header className="pt-19 pb-8 border-b border-[#ddd8ce] dark:border-[#252529]">
            <div className="flex items-center justify-between">
              <Link
                href="/blogs"
                className="inline-block mb-2 text-[#78716c] dark:text-[#6b6b75] hover:text-[#1c1917] dark:hover:text-[#e8e6e1] transition-colors"
              >
                <button className="flex gap-2 items-center text-sm font-medium">
                  <ChevronLeft size={18} /> Back to Blogs
                </button>
              </Link>

              <motion.button
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                onClick={toggle}
                className="
                  flex h-8 w-8 items-center justify-center
                  rounded-full border border-[#ddd8ce] dark:border-[#252529]
                  transition-colors duration-200
                  cursor-pointer

                  text-[#78716c]
                  hover:bg-[#f0ece4]
                  hover:text-[#1c1917]

                  dark:text-[#6b6b75]
                  dark:hover:bg-[#16161a]
                  dark:hover:text-[#e8e6e1]
                "
                aria-label="Toggle theme"
              >
                {theme === "dark" ? (
                  <Sun size={15} strokeWidth={1.8} />
                ) : (
                  <Moon size={15} strokeWidth={1.8} />
                )}
              </motion.button>
            </div>

            <h1 className="font-['Instrument_Serif',Georgia,serif] text-[clamp(1.9rem,5vw,2.75rem)] leading-[1.15] font-normal text-[#1c1917] dark:text-[#e8e6e1] mb-5 mt-3">
              Skip the Backend: Connect a Contact Form Directly to{" "}
              <em className="italic text-[#b45309] dark:text-[#f59e0b]">
                Supabase
              </em>
            </h1>

            <div className="font-['JetBrains_Mono',monospace] text-xs text-[#78716c] dark:text-[#6b6b75] flex gap-4 flex-wrap">
              <span>Next.js + TypeScript</span>
              <span>·</span>
              <span>Supabase JS SDK</span>
              <span>·</span>
              <span>No server required</span>
            </div>
            <div className="flex items-center justify-between">
              <button className="flex mt-4 items-center text-neutral-400 text-[14px] gap-2">
                <CalendarRange size={16} className="text-neutral-400" />{" "}
                23-05-2026
              </button>
              <ShareButton
                title="Skip the Backend: Connect a Contact Form Directly to Supabase"
                url="https://hiteshdevcom.vercel.app/blogs/SupabaseBlog"
              />
            </div>
          </header>

          {/* ── TOC ── */}
          <nav className="bg-[#f0ece4] dark:bg-[#16161a] border border-[#ddd8ce] dark:border-[#252529] rounded-[10px] py-6.5 px-6.5 my-11">
            <div className="font-['JetBrains_Mono',monospace] text-[11px] font-medium text-[#78716c] dark:text-[#6b6b75] uppercase tracking-[0.08em] mb-3">
              In this post
            </div>
            <ol className="pl-4.5 list-decimal marker:text-[#78716c] dark:marker:text-[#6b6b75]">
              {[
                "The Problem",
                "Why Supabase?",
                "Setup Guide",
                "Connect the Form",
                "A Note on Security",
              ].map((item) => (
                <li
                  key={item}
                  className="text-[14px] text-[#78716c] dark:text-[#6b6b75] mb-1.5 pl-1"
                >
                  {item}
                </li>
              ))}
            </ol>
          </nav>

          {/* ── Article ── */}
          <article className="pb-24">
            {/* Problem */}
            <H2>The Problem</H2>
            <P>
              I was building a contact form for my portfolio and needed to ship
              it fast - without setting up a backend. At that point I hadn't
              built a server before, but I already knew PostgreSQL. I needed a
              way to save form submissions{" "}
              <Strong>directly from the frontend</Strong>.
            </P>
            <P>
              The solution: connect my form straight to Supabase. No Express, no
              API routes, no backend at all - just a client-side insert into a
              real Postgres database.
            </P>

            <Divider />

            {/* Why Supabase */}
            <H2>Why Supabase?</H2>
            <P>
              Think of Supabase as Firebase - but built on real SQL and fully
              open-source. A few reasons it's a great fit here:
            </P>
            <ul className="text-[#78716c] dark:text-[#6b6b75] pl-5 mb-4.5 text-[15.5px] leading-[1.8] list-disc">
              {[
                [
                  "Instant auto-generated APIs",
                  "create a table, get a REST API immediately",
                ],
                ["Developer-friendly", "excellent JS/TS SDK, clean dashboard"],
                [
                  "Generous free tier",
                  "perfect for portfolios and side projects",
                ],
                ["Real PostgreSQL", "you already know SQL, it all applies"],
              ].map(([b, rest]) => (
                <li
                  key={b}
                  className="mb-2 pl-1 marker:text-[#ddd8ce] dark:marker:text-[#252529]"
                >
                  <Strong>{b}</Strong> - {rest}
                </li>
              ))}
            </ul>

            <Callout type="info">
              The <Strong>anon key</Strong> is intentionally safe to use in the
              browser - it's designed for public client-side usage. What
              protects your data is Row Level Security (RLS), not hiding the
              key.
            </Callout>

            <Divider />

            {/* Setup */}
            <H2>Setup Guide</H2>
            {/* Step 1 */}
            <div className="flex gap-5 mb-9">
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <StepBadge number={1} />
                  <H3>Create a free Supabase account & project</H3>
                </div>{" "}
                <P>
                  Go to{" "}
                  <StyledLink href="https://supabase.com">
                    supabase.com
                  </StyledLink>
                  , sign up, and create a new project. Once it's ready, go to{" "}
                  <Strong>Table Editor</Strong> and create a{" "}
                  <InlineCode>customers</InlineCode> table with two columns:{" "}
                  <InlineCode>name</InlineCode> (text) and{" "}
                  <InlineCode>email</InlineCode> (text).
                </P>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col gap-5 mb-9">
              <div className="flex-1">
                <div className="flex items-center  gap-2">
                  {" "}
                  <StepBadge number={2} />
                  <H3>Grab your API keys</H3>
                </div>
                <P>
                  In your project dashboard go to{" "}
                  <Strong>Settings → API</Strong>. You'll find your{" "}
                  <Strong>Project URL</Strong> and{" "}
                  <Strong>anon public key</Strong> there.
                </P>
              </div>

              <div className="border  lg:h-70 relative group md:h-50 h-40  rounded-lg overflow-hidden dark:border-neutral-800 border-neutral-200">
                <div className="absolute -translate-x-1/2  left-1/2 bottom-5 w-10 h-10 rounded-full group-hover:scale-100 scale-0  ">
                  <div
                    className="flex items-center justify-center"
                    onClick={() => {
                      const nextPlaying = !isPlaying;

                      setIsPlaying(nextPlaying);

                      if (nextPlaying) {
                        videoRef.current?.play();
                      } else {
                        videoRef.current?.pause();
                      }
                    }}
                  >
                    {isPlaying ? <Pause /> : <Play />}
                  </div>
                </div>
                <div className="bg-[#f0ece4] dark:bg-[#16161a] px-3.5 py-2 font-['JetBrains_Mono',monospace] text-xs text-[#78716c] dark:text-[#6b6b75] flex items-center justify-between border-b border-[#ddd8ce] dark:border-[#0d0d0e]">
                  <span className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#e0957e] dark:bg-[#252529] inline-block" />
                    <span className="w-2 h-2 rounded-full bg-[#e4b964] dark:bg-[#252529] inline-block" />
                    <span className="w-2 h-2 rounded-full bg-[#8ae272] dark:bg-[#252529] inline-block" />
                  </span>
                </div>
                <div className="relative w-full h-full flex items-center justify-center bg-neutral-100 dark:bg-neutral-900">
                  {isVideoLoading && (
                    <div className="absolute inset-0 flex items-center justify-center z-10 bg-neutral-50/50 dark:bg-neutral-950/50 backdrop-blur-xs">
                      <Spinner className="size-6 text-neutral-500 animate-spin" />
                    </div>
                  )}
                  <video
                    ref={videoRef}
                    preload="metadata"
                    playsInline
                    src="/blogs/tutorial.mp4"
                    onCanPlay={() => setIsVideoLoading(false)}
                    onWaiting={() => setIsVideoLoading(true)}
                    onPlaying={() => setIsVideoLoading(false)}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex gap-5 mb-9">
              <div className="flex-1">
                <div className="flex items-center  gap-2">
                  <StepBadge number={3} />

                  <H3>
                    Create a <InlineCode>.env</InlineCode> file in your project
                    root
                  </H3>
                </div>
                <CodeBlock filename=".env">
                  <Prop c="NEXT_PUBLIC_SUPABASE_URL" />
                  =https://your-project-ref.supabase.co{"\n"}
                  <Prop c="NEXT_PUBLIC_SUPABASE_ANON_KEY" />
                  =your-anon-key-here
                </CodeBlock>
                <Callout type="warn">
                  Never commit your <InlineCode>.env</InlineCode> file to Git.
                  Add it to <InlineCode>.gitignore</InlineCode>. The anon key is
                  safe in the browser, but keeping it in env vars is still best
                  practice.
                </Callout>
              </div>
            </div>

            {/* Step 4 */}
            <div className="flex gap-5 mb-9">
              <div className="flex-1">
                <div className="flex items-center  gap-2">
                  <StepBadge number={4} />
                  <H3>
                    Create <InlineCode>lib/supabase.ts</InlineCode>
                  </H3>
                </div>
                <P>
                  In your project root, inside a <InlineCode>lib/</InlineCode>{" "}
                  folder, create the Supabase client:
                </P>
                <CodeBlock filename="lib/supabase.ts">
                  <K c="import" /> {"{ createClient } "}
                  <K c="from" /> <S c={'"@supabase/supabase-js"'} />;{"\n\n"}
                  <K c="export const" /> <Prop c="supabase" /> ={" "}
                  <F c="createClient" />({"\n"}
                  {"  "}process.
                  <Prop c="env" />.<Prop c="NEXT_PUBLIC_SUPABASE_URL" />
                  !,{"\n"}
                  {"  "}process.
                  <Prop c="env" />.<Prop c="NEXT_PUBLIC_SUPABASE_ANON_KEY" />!
                  {"\n"}
                  );
                </CodeBlock>
                <P>
                  You import this one client everywhere in your app - no need to
                  re-initialize it.
                </P>
              </div>
            </div>

            <Divider />

            {/* Connect the form */}
            <H2>Connect the Form</H2>
            <P>
              Wire up your form's submit handler to insert directly into your
              Supabase table. Here's a clean, correct implementation:
            </P>
            <CodeBlock filename="app/contact/form.tsx">
              <S c={'"use client"'} />;{"\n\n"}
              <K c="import" /> {"{ useState } "}
              <K c="from" /> <S c={'"react"'} />;{"\n"}
              <K c="import" /> {"{ supabase } "}
              <K c="from" /> <S c={'"@/lib/supabase"'} />;{"\n\n"}
              <K c="export default function" /> <F c="ContactForm" />
              {"() {"}
              {"\n"}
              {"  "}
              <K c="const" /> [name, setName] = <F c="useState" />(<S c='""' />
              );{"\n"}
              {"  "}
              <K c="const" /> [email, setEmail] = <F c="useState" />(
              <S c='""' />
              );{"\n"}
              {"  "}
              <K c="const" /> [status, setStatus] = <F c="useState" />(
              <S c='""' />
              );{"\n\n"}
              {"  "}
              <K c="const" /> <F c="handleSubmit" /> = <K c="async" /> (e:
              React.
              <Prop c="FormEvent" />) ={">"} {"{"}
              {"\n"}
              {"    "}e.
              <F c="preventDefault" />
              ();{"\n"}
              {"    "}
              <F c="setStatus" />(<S c='"sending"' />
              );{"\n\n"}
              <HL>
                {"    "}
                <K c="const" /> {"{ error }"} = <K c="await" /> supabase{"\n"}
                {"      "}.<F c="from" />(<S c='"customers"' />){"\n"}
                {"      "}.<F c="insert" />
                {"({ name, email });"}
              </HL>
              {"\n\n"}
              {"    "}
              <K c="if" /> (error) {"{"}
              {"\n"}
              {"      "}console.
              <F c="error" />
              (error);{"\n"}
              {"      "}
              <F c="setStatus" />(<S c='"error"' />
              );{"\n"}
              {"    "} {"}"} <K c="else" /> {"{"}
              {"\n"}
              {"      "}
              <F c="setStatus" />(<S c='"success"' />
              );{"\n"}
              {"      "}
              <F c="setName" />(<S c='""' />
              ); <F c="setEmail" />(<S c='""' />
              );{"\n"}
              {"    "}
              {"}"}
              {"\n"}
              {"  };"}
              {"\n\n"}
              {"  "}
              <K c="return" /> ({"\n"}
              {"    "}&lt;form onSubmit={"{handleSubmit}"}&gt;{"\n"}
              {"      "}&lt;input value={"{name}"} onChange={"{"}e =&gt;
              setName(e.target.value){"}"} placeholder={<S c='"Your name"' />}{" "}
              required /&gt;{"\n"}
              {"      "}&lt;input type={<S c='"email"' />} value={"{email}"}{" "}
              onChange={"{"}e =&gt; setEmail(e.target.value){"}"} placeholder=
              {<S c='"Your email"' />} required /&gt;{"\n"}
              {"      "}&lt;button type={<S c='"submit"' />} disabled=
              {"{status === "}
              <S c='"sending"' />
              {"}"}&gt;{"\n"}
              {"        "}
              {"{"}status === <S c='"sending"' /> ? <S c='"Sending..."' /> :{" "}
              <S c='"Send"' />
              {"}"}
              {"\n"}
              {"      "}&lt;/button&gt;{"\n"}
              {"      "}
              {"{"}status === <S c='"success"' /> &amp;&amp; &lt;p&gt;Message
              sent! ✓&lt;/p&gt;{"}"}
              {"\n"}
              {"      "}
              {"{"}status === <S c='"error"' /> &amp;&amp; &lt;p&gt;Something
              went wrong.&lt;/p&gt;{"}"}
              {"\n"}
              {"    "}&lt;/form&gt;{"\n"}
              {"  );"}
              {"\n"}
              {"}"}
            </CodeBlock>
            <P>
              The three highlighted lines are the only Supabase-specific code.
              The rest is standard React state and a form - no backend needed.
            </P>

            <Divider />

            {/* Security */}
            <H2>A Note on Security</H2>
            <P>
              Since this is a public contact form (no login required), make sure
              only the right operations are allowed. In your Supabase dashboard:
            </P>
            <ul className="text-[#78716c] dark:text-[#6b6b75] pl-5 mb-4.5 text-[15.5px] leading-[1.8] list-disc">
              <li className="mb-2 pl-1 marker:text-[#ddd8ce] dark:marker:text-[#252529]">
                Enable <Strong>RLS</Strong> on the{" "}
                <InlineCode>customers</InlineCode> table
              </li>
              <li className="mb-2 pl-1 marker:text-[#ddd8ce] dark:marker:text-[#252529]">
                Add an <Strong>INSERT policy</Strong> for the{" "}
                <InlineCode>anon</InlineCode> role - so anyone can submit the
                form
              </li>
              <li className="pl-1 marker:text-[#ddd8ce] dark:marker:text-[#252529]">
                Do <Strong>not</Strong> add a SELECT policy for anon - so nobody
                can read all submissions
              </li>
            </ul>
            <CodeBlock filename="SQL - RLS policy for public form submissions">
              <C c="-- Allow anonymous inserts (the contact form)" />
              {"\n"}
              <K c="CREATE POLICY" /> <S c='"allow public insert"' />
              {"\n"}
              <K c="ON" /> customers{"\n"}
              <K c="FOR INSERT TO" /> anon{"\n"}
              <K c="WITH CHECK" /> (<K c="true" />
              );{"\n\n"}
              <C c="-- Block all reads from anonymous users" />
              {"\n"}
              <C c="-- (no SELECT policy = no access)" />
            </CodeBlock>
            <Callout type="info">
              With this setup: anyone can submit your form, but{" "}
              <Strong>nobody can read your customer list</Strong> - not even
              someone who has your anon key.
            </Callout>
          </article>

          <Footer cn="" />
        </div>
      </div>
    </div>
  );
}
