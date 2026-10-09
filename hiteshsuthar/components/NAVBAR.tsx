"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import ThemeToggle from "./ThemeToggle";

const NAVBAR = () => {
  const pathname = usePathname();

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/blogs", label: "Blogs" },
    { href: "/component", label: "Components" },
  ];

  return (
    <div className="w-full text-[14px] font-sans mx-auto flex items-center mt-9 justify-between max-w-2xl">
      <div className="w-1"></div>
      <div className="flex items-center gap-4">
        {navItems.map(({ href, label }) => {
          const isActive =
            href === "/" ? pathname === "/" : pathname.startsWith(href);

          return (
            <Link
              key={href}
              href={href}
              aria-current={isActive ? "page" : undefined}
              className="group inline-flex flex-col items-center"
            >
              <span
                className={
                  isActive
                    ? "text-neutral-900 dark:text-neutral-100 relative transition-colors font-medium"
                    : "text-neutral-500 dark:text-neutral-400 relative transition-colors hover:text-neutral-900 dark:hover:text-neutral-100"
                }
              >
                {label}
                <span
                  className={`${isActive && "border border-neutral-400 dark:border-neutral-500 w-full border-dashed left-1/2 bottom-0.5 -translate-x-1/2 "} absolute `}
                />
              </span>
            </Link>
          );
        })}
        <ThemeToggle />
      </div>
    </div>
  );
};

export default NAVBAR;
