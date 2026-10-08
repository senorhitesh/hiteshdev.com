"use client";

import React, { useState } from "react";
import { motion } from "motion/react";

interface SmoothBtnProps {
  text?: string;
  className?: string;
  color?: string;
  textColor?: string;
  onClick?: () => void;
  children?: React.ReactNode;
}

// Exact stroke-fill path from the reference Webflow snippet
const STROKE_FILL_PATH =
  "M0 21.5571C0 21.5571 6.56744 2.8501 15.4762 4.44988C25.7691 6.2982 5.66141 21.3471 12.5002 29.1915C22.9246 41.1486 29.3907 -7.93025 42.4603 1.12139C53.3211 8.6432 27.1823 26.7575 37.6982 34.7461C50.754 44.6641 58.0718 -7.92618 67.2619 5.59531C72.4564 13.2381 57.9637 30.3713 67.2619 30.3713C70.8333 30.3713 75 19.753 75 19.753";

export default function SmoothBtn({
  text = "About us",
  className = "",
  color = "#0a7cffff", // Vibrant orange matching the reference
  textColor = "#000000",
  onClick,
  children,
}: SmoothBtnProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <button
      type="button"
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`relative inline-flex items-center justify-center px-7 py-3 rounded-full bg-white text-black font-semibold text-base tracking-tight overflow-hidden shadow-xs hover:shadow-md border border-neutral-200/70 transition-all duration-200 cursor-pointer active:scale-95 select-none ${className}`}
      style={{
        WebkitTapHighlightColor: "transparent",
      }}
    >
      {/* SVG Stroke-Fill Layer */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-full">
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 75 36"
          fill="none"
          preserveAspectRatio="none"
          className="w-full h-full overflow-visible pointer-events-none"
        >
          <motion.path
            d={STROKE_FILL_PATH}
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{
              pathLength: 0,
              strokeWidth: 3,
              opacity: 0,
            }}
            animate={
              isHovered
                ? {
                    pathLength: 1,
                    strokeWidth: 26,
                        opacity: 1,
                  }
                : {
                    pathLength: 0,
                    strokeWidth: 3,
                    opacity: 0,
                  }
            }
            transition={{
              pathLength: {
                duration: isHovered ? 0.62 : 0.44,
                ease: [0.65, 0, 0.35, 1], // Smooth cubic-bezier
              },
              strokeWidth: {
                duration: isHovered ? 0.62 : 0.44,
                ease: [0.65, 0, 0.35, 1], // Matches pathLength so stroke starts thin and swells
              },
              opacity: {
                duration: isHovered ? 0.05 : 0.18,
                delay: isHovered ? 0 : 0.32,
              },
            }}
          />
        </svg>
      </div>

      {/* Button Text Layer (Above the filling stroke) */}
      <span className="relative z-10" style={{ color: textColor }}>
        {children || text}
      </span>
    </button>
  );
}