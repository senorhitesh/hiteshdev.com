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

export default function Navbar() {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted ? resolvedTheme === "dark" : false;

  return (
    <motion.nav
      initial={{ y: 60, scale: 0.7 }}
      animate={{ y: 0, scale: 1 }}
      transition={{
        ease: "easeIn",
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
        <div
          className="
            mr-1 flex h-8 w-8 items-center justify-center
            overflow-hidden rounded-full
            bg-zinc-900
            transition-colors duration-300

            dark:bg-zinc-100
          "
        >
          <Image src={displayPicture} alt="profile" className="object-cover" />
        </div>
      </Link>

      {/* Divider */}
      <div className="mx-1 h-5 w-px bg-zinc-200 dark:bg-zinc-600" />

      {navItems.map(({ label, icon, href }) => (
        <NavItem key={label} label={label} icon={icon} href={href} />
      ))}

      {/* Divider */}
      <div className="mx-1 h-5 w-px bg-zinc-200 dark:bg-zinc-600" />

      {/* Theme Toggle */}
      <button
        onClick={() => setTheme(isDark ? "light" : "dark")}
        className="
          flex h-8 w-8 items-center justify-center
          rounded-full
          transition-all duration-200

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
      </button>
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
