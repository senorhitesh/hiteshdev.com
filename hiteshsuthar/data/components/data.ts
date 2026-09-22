import React from "react";
import AnimatedTab from "./AnimatedTabs";
import AnimatedNumber from "./SlidingNumber";
import GooeyTooltip from "./GooeyTooltip";
import GooeySearch from "./GooeySearch";
import Dragable_Stickers from "./PaperScrumbled";
import fs from "fs";
import BentoCard from "./BentoCard";
const DragableCode = fs.readFileSync(
  "./data/components/PaperScrumbled.tsx",
  "utf-8",
);

const SlidingNumberCode = fs.readFileSync(
  "./data/components/SlidingNumber.tsx",
  "utf-8",
);

const MagneticCard = fs.readFileSync("./data/components/MagneticCard.tsx");
interface dependencyType {
  npm: string;
  pnpm: string;
  bun: string;
  yarn: string;
}
interface ComponentProps {
  label: string;
  fileName: string;
  code: string;
  dependency?: dependencyType;
  component: React.ComponentType;
}

const componentData: ComponentProps[] = [
  {
    label: "Animated Tabs",
    fileName: "animated-tabs",

    code: `"use client";
import React, { useState } from "react";
const tabs = ["All", "Discounted", "Free"] as const;
import { hover, motion } from "motion/react";
export default function AnimatedTab() {
  const [selected, setSelected] = useState<(typeof tabs)[number]>(tabs[0]);
  const [hoveredTab, setHoveredTab] = useState<(typeof tabs)[number] | null>(
    null,
  );
  return (
    <div className="bg-white flex  p-1 max-w-xs w-full relative rounded-2xl border border-neutral-200">
      {tabs.map((tab) => {
        const isHovered = hoveredTab === tab;
        const isSelected = selected === tab;

        return (
          <div
            key={tab}
            className="relative flex-1"
            onMouseEnter={() => setHoveredTab(tab)}
            onMouseLeave={() => setHoveredTab(null)}
          >
            {(isHovered || isSelected) && (
              <motion.div
                layoutId="tab-background"
                className="absolute inset-0 rounded-2xl bg-neutral-100"
                transition={{
                  type: "spring",
                  stiffness: 500,
                  damping: 70,
                }}
              />
            )}

            <button
              className={\`relative z-10 w-full font-medium \${isSelected ? "text-neutral-950" : "text-neutral-500"} \${isHovered ? "text-neutral-800" : "text-neutral-500"} rounded-2xl py-3\`}
              onClick={() => setSelected(tab)}
            >
              {tab}
            </button>
          </div>
        );
      })}
    </div>
  );
}
`,
    component: AnimatedTab,
    dependency: {
      npm: "motion",
      pnpm: "motion",
      bun: "motion",
      yarn: "motion",
    },
  },
  {
    label: "Gooey Tooltip",
    fileName: "gooey-tooltip",
    code: `"use client";
import { motion } from "motion/react";
import { LucideIcon, Plus, Upload } from "lucide-react";
import { SVG } from "@/copmonents/GooeySearch";
import { useState, useRef } from "react";

interface navItemsProps {
  label?: String;
  icon?: LucideIcon;
  tooltip: String;
}
const NavItems: navItemsProps[] = [
  { icon: Plus, tooltip: "Add to cart" },
  { label: "Share", icon: Upload, tooltip: "Copy link" },
  { label: "Projects", tooltip: "View Latests" },
];
const POP_TRANSITION = {
  duration: 0.7,
  type: "spring" as const,
  bounce: 0.22,
};
const MOVE_TRANSITION = {
  duration: 0.2,
  type: "spring" as const,
  bounce: 0.2,
};
const GooeyTooltip = () => {
  const [hoverIdx, setHoverIdx] = useState<number | null>(null);
  const [isFresh, setIsFresh] = useState(true);
  const insideRef = useRef(false);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState({ x: 0 });
  const updatePosition = (idx: number) => {
    const item = itemRefs.current[idx];
    const container = containerRef.current;
    if (item && container) {
      const itemRect = item.getBoundingClientRect();
      const containerRect = container.getBoundingClientRect();
      setPos({ x: itemRect.left - containerRect.left + itemRect.width / 2 });
    }
  };
  const handleEnter = (idx: number) => {
    updatePosition(idx);
    setIsFresh(!insideRef.current); // fresh only if we weren't already inside
    insideRef.current = true;
    setHoverIdx(idx);
  };
  const handleLeaveGroup = () => {
    insideRef.current = false;
    setHoverIdx(null);
  };
  return (
    <>
      <SVG />
      <div
        ref={containerRef}
        style={{ filter: "url(#gooey-filter)" }}
        className="relative h-10 flex items-center gap-2 rounded-4xl"
        onMouseLeave={handleLeaveGroup}
      >
        <motion.div
          layout
          initial={{ scale: 0, opacity: 0, filter: "blur(1px)" }}
          animate={
            hoverIdx !== null
              ? {
                  scale: 1,
                  opacity: 1,
                  filter: "blur(0px)",
                  top: -45,
                  x: pos.x,
                }
              : { scale: 0, opacity: 0, filter: "blur(1px)", top: 0, x: pos.x }
          }
          transition={isFresh ? POP_TRANSITION : MOVE_TRANSITION}
          className="absolute z-0 -translate-x-1/2 whitespace-nowrap w-max py-1 px-4 bg-neutral-900 text-white rounded-md pointer-events-none"
        >
          {hoverIdx !== null ? NavItems[hoverIdx].tooltip : ""}
        </motion.div>

        {NavItems.map((nav, idx) => {
          const Icon = nav.icon;
          return (
            <div
              key={idx}
              ref={(el) => {
                itemRefs.current[idx] = el;
              }}
              onMouseEnter={() => handleEnter(idx)}
              className="relative flex items-center justify-center"
            >
              <motion.div className="relative gap-1 flex items-center justify-center z-10 p-3 bg-neutral-900 rounded-md text-white">
                {Icon && <Icon />} {nav.label}
              </motion.div>
            </div>
          );
        })}
      </div>
    </>
  );
};
export default GooeyTooltip;
`,
    component: GooeyTooltip,
    dependency: {
      npm: "lucide-react  motion",
      pnpm: "lucide-react  motion",
      bun: "lucide-react  motion",
      yarn: "lucide-react  motion",
    },
  },
  {
    label: "Gooey Search",
    fileName: "gooey-search",
    code: `""use client";
import { Search } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { motion, Variants } from "motion/react";
const GooeySearch = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [searchText, setSearchText] = useState("");
  const buttonVariants: Variants = {
    collapsed: {
      width: 115,
      marginLeft: 0,
    },
    expanded: {
      width: 180,
      marginLeft: 50,
    },
  };
  const iconBubbleVariants = {
    collapsed: {
      scale: 0,
      opacity: 0,
      filter: "blur(4px)",
    },
    expanded: {
      scale: 1,
      opacity: 1,
      filter: "blur(0px)",
    },
  };

  useEffect(() => {
    if (isExpanded) {
      inputRef.current?.focus();
      setIsExpanded(true);
    } else {
      setSearchText("");
    }
  }, [isExpanded]);
  return (
    <>
      <SVG />
      <div
        style={{
          filter: "url(#gooey-filter)",
        }}
        className="relative flex h-10 items-center justify-center"
      >
        <motion.div
          variants={buttonVariants}
          initial="collapsed"
          transition={TRANSITION}
          animate={isExpanded ? "expanded" : "collapsed"}
          className="h-10 flex items-center justify-center "
        >
          <button className="h-10 w-full cursor-pointer items-center justify-center flex gap-2  rounded-full bg-black text-white font-normal px-4 ">
            {!isExpanded && <Search className="size-4" />}
            <motion.input
              layoutId="input"
              onClick={() => setIsExpanded(true)}
              ref={inputRef}
              onBlur={() => !searchText && setIsExpanded(false)}
              onChange={(e) => setSearchText(e.target.value)}
              placeholder="Search..."
              type="text"
              className="h-full w-full bg-transparent placeholder:font-light placeholder:text-white/50 outline-none"
            />
          </button>
        </motion.div>
        <motion.div
          layoutId="svg"
          variants={iconBubbleVariants}
          initial="collapsed"
          transition={TRANSITION}
          animate={isExpanded ? "expanded" : "collapsed"}
          className="absolute text-white rounded-4xl  top-1/2 left-0 size-10 bg-black -translate-y-1/2 items-center justify-center flex"
        >
          <Search className="size-4 " />
        </motion.div>
      </div>
    </>
  );
};
export default GooeySearch;
export const SVG = () => {
  return (
    <svg className="absolute hidden h-0 w-0">
      <defs>
        <filter width="200%" height="200%" id="gooey-filter" x="-50%" y="-50%">
          {" "}
          <feGaussianBlur in="SourceGraphic" stdDeviation="5" result="blur" />
          <feColorMatrix
            in="blur"
            type="matrix"
            values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0  0 20 -10"
            result="goo"
          />
          <feComposite in="SourceGraphic" in2="goo" operator="atop" />
        </filter>
      </defs>
    </svg>
  );
};
export const TRANSITION = {
  duration: 0.7,
  type: "spring" as const,
  bounce: 0.22,
};

`,
    component: GooeySearch,
    dependency: {
      npm: "lucide-react  motion",
      pnpm: "lucide-react  motion",
      bun: "lucide-react  motion",
      yarn: "lucide-react  motion",
    },
  },
  {
    label: "Paper Sticker",
    fileName: "paper-sticker",
    code: `${DragableCode}`,
    component: Dragable_Stickers,
    dependency: {
      npm: "@types/three  three motion",
      pnpm: "@types/three  three motion",
      bun: "@types/three  three motion",
      yarn: "@types/three three  motion",
    },
  },
  {
    label: "Sliding Number",
    fileName: "sliding-number",
    code: `${SlidingNumberCode}`,
    component: AnimatedNumber,
    dependency: {
      npm: "lucide-react motion",
      pnpm: "lucide-react motion",
      bun: "lucide-react motion",
      yarn: "lucide-react motion",
    },
  },
  {
    label: "Magnetic Card",
    fileName: "magnetic-card",
    code: `${MagneticCard}`,
    component: BentoCard,
    dependency: {
      npm: "motion",
      pnpm: "motion",
      bun: "motion",
      yarn: "motion",
    },
  },
];

export default componentData;
