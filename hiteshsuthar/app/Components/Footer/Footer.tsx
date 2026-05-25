"use client";
import coding from "@/public/Footer/deskbreak-coder-idle.gif";
import waving from "@/public/Footer/deskbreak-coder-waving.gif";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const playPullSound = () => {
  if (typeof window === "undefined") return;
  try {
    const ctx = new (
      window.AudioContext || (window as any).webkitAudioContext
    )();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = "sine";
    // Rising pitch for the stretching tension
    osc.frequency.setValueAtTime(750, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(450, ctx.currentTime + 0.15);

    gain.gain.setValueAtTime(0.1, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.15);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start();
    osc.stop(ctx.currentTime + 0.16);
  } catch (e) {
    console.warn("Audio Context failed", e);
  }
};

const playSnapSound = () => {
  if (typeof window === "undefined") return;
  try {
    const ctx = new (
      window.AudioContext || (window as any).webkitAudioContext
    )();

    // Snap contact pop
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = "triangle";
    osc.frequency.setValueAtTime(350, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(80, ctx.currentTime + 0.08);
    gain.gain.setValueAtTime(0.08, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.08);
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start();
    osc.stop(ctx.currentTime + 0.09);

    // Boing/vibration decay
    const osc2 = ctx.createOscillator();
    const gain2 = ctx.createGain();
    osc2.type = "sine";
    osc2.frequency.setValueAtTime(120, ctx.currentTime);
    // Create a vibrating pitch wobble
    osc2.frequency.linearRampToValueAtTime(150, ctx.currentTime + 0.05);
    osc2.frequency.linearRampToValueAtTime(100, ctx.currentTime + 0.1);
    osc2.frequency.linearRampToValueAtTime(120, ctx.currentTime + 0.15);

    gain2.gain.setValueAtTime(0.06, ctx.currentTime);
    gain2.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.2);
    osc2.connect(gain2);
    gain2.connect(ctx.destination);
    osc2.start();
    osc2.stop(ctx.currentTime + 0.21);
  } catch (e) {
    console.warn("Audio Context failed", e);
  }
};

const Footer = ({ cn = "border-x" }) => {
  const [isHovering, setisHovering] = useState(false);
  const div = useRef<HTMLDivElement>(null);

  return (
    <div className="border-b w-full  dark:border-neutral-900 border-neutral-200">
      <div
        className={`max-w-2xl p-3 relative gap-3 flex justify-between items-center  w-full mx-auto  dark:border-neutral-900  border-neutral-200 ${cn}`}
      >
        <div className="w-2 h-2 bg-white dark:bg-black border-neutral-200 dark:border-neutral-800 -bottom-1 -left-1 absolute border"></div>
        <div className="w-2 h-2 bg-white  dark:bg-black border-neutral-200 dark:border-neutral-800 -bottom-1 -right-1 absolute border"></div>
        <div>
          <p className="text-xs font-mono text-neutral-900 dark:text-neutral-300 ">
            &copy; Hitesh Suthar
          </p>
          <p className="text-xs font-mono text-neutral-900 dark:text-neutral-300 ">
            Built with Chai & ❤
          </p>
        </div>
        <motion.div
          drag
          onDragStart={playPullSound}
          onDragEnd={playSnapSound}
          onMouseEnter={() => {
            setisHovering(true);
          }}
          onMouseLeave={() => {
            setisHovering(false);
          }}
          ref={div}
          className="h-15 w-15 cursor-grab"
          dragConstraints={{
            top: -10,
            left: -10,
            right: 10,
            bottom: 10,
          }}
        >
          <img
            loading="eager"
            src={isHovering ? waving.src : coding.src}
            alt={"Coding"}
            className="-scale-x-100 pointer-events-none"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Footer;
