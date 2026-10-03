"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence, type Variants } from "motion/react";
import { Ticket } from "lucide-react";

// Jagged torn paper edge displayed on the tear line
const JaggedTornEdge = () => (
  <svg
    viewBox="0 0 6 56"
    className="absolute -right-[3px] top-0 h-full w-[6px] text-purple-500 z-20 pointer-events-none"
    preserveAspectRatio="none"
    fill="currentColor"
  >
    <path d="M0,0 L4,3.5 L1,7 L5,10.5 L0.5,14 L4.5,17.5 L1,21 L5,24.5 L0,28 L4.5,31.5 L1,35 L5,38.5 L1,42 L4.5,45.5 L0.5,49 L4,52.5 L0,56 Z" />
  </svg>
);

const containerVariants: Variants = {
  rest: {},
  hover: {},
};

const buttonVariants: Variants = {
  rest: {
    scale: 1,
    rotate: 0,
    x: 0,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 500,
      damping: 24,
    },
  },
  hover: {
    scale: 1.07,
    rotate: -2,
    x: 0,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 500,
      damping: 20,
      mass: 1,
    },
  },
};

const stubVariants: Variants = {
  rest: {
    scale: 1,
    rotate: 0,
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 500,
      damping: 24,
    },
  },
  hover: {
    scale: 1.07,
    rotate: 5,
    x: 8,
    y: 2,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 450,
      damping: 14,
      mass: 0.6,
    },
  },
};

const MovieTickeBtn = ({
  autoResetInterval = 2500,
}: {
  autoResetInterval?: number;
}) => {
  const [isTorn, setIsTorn] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [dragAngle, setDragAngle] = useState(0);
  const [dragXOffset, setDragXOffset] = useState(0);
  const [tearDirection, setTearDirection] = useState<"up" | "down">("down");

  // Automatically return back to normal state after the specified interval
  useEffect(() => {
    if (!isTorn) return;

    const timer = setTimeout(() => {
      handleReset();
    }, autoResetInterval);

    return () => clearTimeout(timer);
  }, [isTorn, autoResetInterval]);

  const handleDragStart = () => {
    setIsDragging(true);
  };

  const handleDrag = (
    _event: MouseEvent | TouchEvent | PointerEvent,
    info: {
      offset: { y: number; x: number };
      velocity: { y: number; x: number };
    },
  ) => {
    const y = info.offset.y;
    // When dragging down (y > 0): tilts clockwise
    // When dragging up (y < 0): tilts counter-clockwise
    const angle = (y / 60) * 22;
    const extraX = Math.min(Math.abs(y / 60) * 14, 18);
    setDragAngle(angle);
    setDragXOffset(extraX);
  };

  const handleDragEnd = (
    _event: MouseEvent | TouchEvent | PointerEvent,
    info: {
      offset: { y: number; x: number };
      velocity: { y: number; x: number };
    },
  ) => {
    const offsetY = info.offset.y;
    const velocityY = info.velocity.y;

    // Tearing threshold: dragged far enough (>= 45px) or quick flick (velocity >= 320px/s)
    if (Math.abs(offsetY) >= 45 || Math.abs(velocityY) >= 320) {
      const dir = offsetY >= 0 || velocityY > 0 ? "down" : "up";
      setTearDirection(dir);
      setIsTorn(true);
    }

    setIsDragging(false);
    setDragAngle(0);
    setDragXOffset(0);
  };

  const handleReset = () => {
    setIsTorn(false);
    setIsDragging(false);
    setDragAngle(0);
    setDragXOffset(0);
  };

  return (
    <div className="flex flex-col items-center gap-4 select-none">
      <motion.div
        className="flex items-center group cursor-pointer relative"
        variants={containerVariants}
        initial="rest"
        whileHover={isTorn ? undefined : "hover"}
      >
        {/* Main "Book Now" Ticket Body */}
        <motion.button
          variants={buttonVariants}
          animate={
            isTorn ? { scale: 1.05, rotate: 0, x: [0, -4, 2, 0] } : undefined
          }
          className={`
            cursor-pointer
            relative z-10
            bg-white
            px-6 py-4
            font-medium
            origin-right overflow-hidden
            border border-neutral-200/80
            shadow-sm
            ${isTorn ? "rounded-md" : "rounded-l-md"}
          `}
        >
          {/* Purple Fill Background */}
          <div
            className={`
              absolute
              w-full
              h-full
              -translate-x-1/2 left-1/2
              ${isTorn ? "top-0" : "group-hover:top-0 top-20"}
              ${isDragging ? "!top-0" : ""}
              transition-all duration-150 ease-out
              bg-purple-500
              z-0
            `}
          />

          {/* Ticket Label */}
          <span
            className={`
              relative z-10 font-semibold tracking-wide transition-colors duration-150
              ${isTorn ? "text-white" : "group-hover:text-white text-neutral-900"}
              ${isDragging ? "!text-white" : ""}
            `}
          >
            {isTorn ? "Booked!" : "Book Now"}
          </span>

          {/* Perforated dashed divider line (hidden when torn) */}
          {isTorn && (
            <div
              className="
                absolute right-0 top-0 h-full w-px z-10
                bg-[repeating-linear-gradient(to_bottom,#171717_0_6px,transparent_6px_10px)]
                opacity-0 group-hover:opacity-0 transition-opacity duration-150
              "
            />
          )}
        </motion.button>

        {/* Right Ticket Stub (Draggable to Tear Off) */}
        <AnimatePresence mode="wait">
          {!isTorn ? (
            <motion.div
              variants={stubVariants}
              drag="y"
              dragConstraints={{ top: -75, bottom: 75 }}
              dragElastic={0.25}
              whileDrag={{
                scale: 1.1,
                cursor: "grabbing",
              }}
              animate={
                isDragging
                  ? {
                      scale: 1.1,
                      rotate: 5 + dragAngle,
                      x: 8 + dragXOffset,
                    }
                  : undefined
              }
              onDragStart={handleDragStart}
              onDrag={handleDrag}
              onDragEnd={handleDragEnd}
              exit={{
                y: tearDirection === "down" ? 220 : -220,
                x: 45,
                rotate: tearDirection === "down" ? 70 : -70,
                opacity: 0,
                transition: {
                  duration: 0.45,
                  ease: [0.32, 0.72, 0, 1],
                },
              }}
              className="
                relative z-10
                bg-white
                px-4 py-4.5
                rounded-r-md
                text-neutral-900
                origin-left
                overflow-hidden
                cursor-grab active:cursor-grabbing
                border border-neutral-200/80
                shadow-sm
              "
              title="Drag up or down to tear ticket"
            >
              {/* Purple Fill Background */}
              <div
                className={`
                  absolute
                  w-full
                  h-full
                  -translate-x-1/2 left-1/2
                  group-hover:top-0 top-20
                  ${isDragging ? "!top-0" : ""}
                  transition-all duration-150 ease-out
                  bg-purple-500
                  z-0
                `}
              />

              {/* Perforation line on left of stub */}
              <div
                className="
                  absolute left-0 top-0 h-full w-px z-10
                  bg-[repeating-linear-gradient(to_bottom,#171717_0_6px,transparent_6px_10px)]
                  opacity-100 group-hover:opacity-20 transition-opacity duration-150
                "
              />

              {/* Icon */}
              <IconTicket4OutlineDuo18
                className={`
                  relative z-10 rotate-90 transition-all duration-150
                  group-hover:scale-110 group-hover:text-white text-neutral-800
                  ${isDragging ? "!text-white !scale-110" : ""}
                `}
              />
            </motion.div>
          ) : null}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default MovieTickeBtn;
