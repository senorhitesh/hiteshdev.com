"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { FolderKanban, BookOpen, Mail, Sun, Moon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import displayPicture from "@/public/profile.png";
const navItems = [
  { label: "Projects", icon: FolderKanban, href: "/projects" },
  { label: "Blogs", icon: BookOpen, href: "/blogs" },
  { label: "Contact", icon: Mail, href: "/get-in-touch" },
];

export default function Navbar() {
  const [dark, setDark] = useState(false);

  return (
    <motion.nav
      initial={{ y: 60, scale: 0.7 }}
      animate={{ y: 0, scale: 1 }}
      transition={{
        ease: "easeIn",
      }}
      className={`flex items-center gap-1 px-3 py-2 fixed bottom-4 z-99999 rounded-full shadow-md border transition-colors duration-300  "dark:bg-zinc-800 dark:border-zinc-700  border-neutral-200 bg-white border-zinc-200"
      `}
    >
      {/* Avatar / Logo */}
      <div
        className={`w-8 h-8  overflow-hidden rounded-full flex items-center justify-center mr-1 transition-colors duration-300 
          "dark:bg-zinc-100"  "bg-zinc-900"
        `}
      >
        <Image src={displayPicture} alt={"prfile"} className="object-cover" />
      </div>

      {/* Divider */}
      <div className={`w-px h-5 mx-1 "dark:bg-zinc-600"  "bg-zinc-200"`} />

      {navItems.map(({ label, icon, href }) => (
        <NavItem key={label} label={label} icon={icon} href={href} />
      ))}

      {/* Divider */}
      <div
        className={`w-px h-5 mx-1 ${dark ? "bg-zinc-600" : "bg-zinc-200"}`}
      />

      {/* Theme Toggle */}
      <button
        onClick={() => setDark(!dark)}
        className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200 
            ? "dark:text-zinc-400 dark:hover:text-zinc-100 dark:hover:bg-zinc-700"
            "text-zinc-500 hover:text-zinc-900 hover:bg-zinc-100"
        `}
        aria-label="Toggle theme"
      >
        {dark ? (
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
      {" "}
      <motion.div
        onHoverStart={() => setHovered(true)}
        onHoverEnd={() => setHovered(false)}
        layout
        className={`flex text-zinc-500 hover:text-zinc-900 hover:bg-zinc-100 dark:text-zinc-400 dark:hover:text-zinc-100 dark:hover:bg-zinc-700 items-center gap-1.5 px-2.5 py-1.5 rounded-full text-sm group relative font-medium cursor-pointer select-none  `}
        transition={{ layout: { duration: 0.2, ease: [0.4, 0, 0.2, 1] } }}
      >
        <div className="absolute  -top-8 rounded-full px-3 py-1 left-1/2 translate-y-2 group-hover:translate-y-0 scale-[0.6] group-hover:scale-100 opacity-0 group-hover:opacity-100 -translate-x-1/2 text-white bg-neutral-900 transition-all duration-200">
          <p className="text-[12px] font-sans font-medium">{label}</p>
        </div>
        <motion.div
          animate={{ scale: hovered ? 1.15 : 1 }}
          transition={{ duration: 0.15, ease: "easeOut" }}
          className="shrink-0 relative group"
        >
          <Icon size={15} strokeWidth={1.8} />
        </motion.div>
      </motion.div>
    </Link>
  );
}
