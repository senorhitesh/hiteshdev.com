"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FolderKanban, BookOpen, Mail, Sun, Moon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";

import displayPicture from "@/public/profile.png";

const navItems = [
  { label: "Projects", icon: FolderKanban, href: "/projects" },
  { label: "Blogs", icon: BookOpen, href: "/blogs" },
  { label: "Contact", icon: Mail, href: "/get-in-touch" },
];

const playClickSound = () => {
  if (typeof window === "undefined") return;
  try {
    const ctx = new (window.AudioContext || (window as any).webkitAudioContext)();
    
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

export default function Navbar() {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted ? resolvedTheme === "dark" : false;

  const handleToggle = (event: React.MouseEvent<HTMLButtonElement>) => {
    // 1. Play snappy custom synthesized click sound
    playClickSound();

    // 2. Wipe-out circular View Transition (if supported)
    const doc = document as any;
    if (!doc.startViewTransition) {
      setTheme(isDark ? "light" : "dark");
      return;
    }

    const x = event.clientX;
    const y = event.clientY;

    const endRadius = Math.hypot(
      Math.max(x, window.innerWidth - x),
      Math.max(y, window.innerHeight - y)
    );

    const transition = doc.startViewTransition(() => {
      setTheme(isDark ? "light" : "dark");
    });

    transition.ready.then(() => {
      const clipPath = [
        `circle(0px at ${x}px ${y}px)`,
        `circle(${endRadius}px at ${x}px ${y}px)`,
      ];

      document.documentElement.animate(
        {
          clipPath: clipPath,
        },
        {
          duration: 500,
          easing: "ease-in-out",
          pseudoElement: "::view-transition-new(root)",
        }
      );
    });
  };

  return (
    <motion.nav
      initial={{ y: 50, scale: 0.9, opacity: 0 }}
      animate={{ y: 0, scale: 1, opacity: 1 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 24,
      }}
      className="
        fixed bottom-4 z-500000
        flex items-center gap-1
        rounded-full border
        px-3 py-2
        shadow-md
        transition-colors duration-300

        border-neutral-200
        bg-white

        dark:border-zinc-700
        dark:bg-zinc-800
      "
    >
      {/* Avatar / Logo */}
      <Link href="/">
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
          className="
            mr-1 flex h-8 w-8 items-center justify-center
            overflow-hidden rounded-full
            bg-zinc-900
            transition-colors duration-300

            dark:bg-zinc-100
          "
        >
          <Image src={displayPicture} alt="profile" className="object-cover" />
        </motion.div>
      </Link>

      {/* Divider */}
      <div className="mx-1 h-5 w-px bg-zinc-200 dark:bg-zinc-600" />

      {navItems.map(({ label, icon, href }) => (
        <NavItem key={label} label={label} icon={icon} href={href} />
      ))}

      {/* Divider */}
      <div className="mx-1 h-5 w-px bg-zinc-200 dark:bg-zinc-600" />

      {/* Theme Toggle */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
        onClick={handleToggle}
        className="
          flex h-8 w-8 items-center justify-center
          rounded-full
          transition-colors duration-200

          text-zinc-500
          hover:bg-zinc-100
          hover:text-zinc-900

          dark:text-zinc-400
          dark:hover:bg-zinc-700
          dark:hover:text-zinc-100
        "
        aria-label="Toggle theme"
      >
        {isDark ? (
          <Sun size={15} strokeWidth={1.8} />
        ) : (
          <Moon size={15} strokeWidth={1.8} />
        )}
      </motion.button>
    </motion.nav>
  );
}

function NavItem({
  label,
  icon: Icon,
  href,
}: {
  label: string;
  icon: React.ElementType;
  href: string;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <Link href={href}>
      <motion.div
        onHoverStart={() => setHovered(true)}
        onHoverEnd={() => setHovered(false)}
        layout
        className="
          group relative flex cursor-pointer select-none
          items-center gap-1.5
          rounded-full
          px-2.5 py-1.5
          text-sm font-medium
          transition-colors

          text-zinc-500
          hover:bg-zinc-100
          hover:text-zinc-900

          dark:text-zinc-400
          dark:hover:bg-zinc-700
          dark:hover:text-zinc-100
        "
        transition={{
          layout: {
            duration: 0.2,
            ease: [0.4, 0, 0.2, 1],
          },
        }}
      >
        {/* Tooltip */}
        <div
          className="
            absolute -top-8 left-1/2
            -translate-x-1/2 translate-y-2
            scale-[0.6]
            rounded-full
            bg-neutral-900
            px-3 py-1
            opacity-0
            transition-all duration-200

            group-hover:translate-y-0
            group-hover:scale-100
            group-hover:opacity-100
          "
        >
          <p className="text-[12px] font-medium text-white">{label}</p>
        </div>

        <motion.div
          animate={{ scale: hovered ? 1.15 : 1 }}
          transition={{
            duration: 0.15,
            ease: "easeOut",
          }}
          className="relative shrink-0"
        >
          <Icon size={15} strokeWidth={1.8} />
        </motion.div>
      </motion.div>
    </Link>
  );
}
