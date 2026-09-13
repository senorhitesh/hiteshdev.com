"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import displayPicture from "@/public/profile.jpeg";
import ShinyText from "../Global/ShineText";
import Link from "next/link";
import { getCalApi } from "@calcom/embed-react";

const phrases = ["Engineer", "Founder @helxstudio", "Cooking something"];

const Profile = () => {
  const [currentTime, setCurrentTime] = useState("");
  const [phraseIdx, setPhraseIdx] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const tick = () => {
      const timeString = new Date().toLocaleTimeString("en-GB", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      });
      setCurrentTime(`IST ${timeString}`);
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    const id = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setPhraseIdx((i) => (i + 1) % phrases.length);
        setVisible(true);
      }, 350);
    }, 2200);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "quickchat" });
      cal("ui", { hideEventTypeDetails: false, layout: "month_view" });
    })();
  }, []);

  return (
    <div
      className="bg-white z-12 mt-12 dark:bg-[#09090B]
                    p-3.5 w-full max-w-2xl"
    >
      {/* Top row */}
      <div className="flex flex-wrap sm:flex-nowrap items-start justify-between gap-3">
        <div className="flex items-center gap-3">
          {/* Avatar */}
          <div className="relative shrink-0">
            <div className="w-20 h-20 sm:w-26 sm:h-26 rounded-[14px] bg-zinc-100 relative    -zinc-200  -700 overflow-hidden">
              <div className="bg-white absolute h-full blur-lg w-2 profile-sweep left-4" />
              <Image
                src={displayPicture}
                loading="eager"
                alt="Hitesh Suthar"
                className="object-cover pointer-events-none w-full h-full"
              />
            </div>
            <div className="absolute -bottom-0.5 -right-0.5 w-2.75 h-2.75 rounded-full bg-green-500  -2  -white" />
          </div>
          {/* Text */}
          <div>
            <ShinyText
              text="✨ Hola, I'm"
              speed={2}
              delay={0}
              color="#666666"
              shineColor="#d6ddff"
              spread={120}
              direction="left"
              yoyo={false}
              pauseOnHover={false}
              disabled={false}
              className="text-[10px] text-zinc-400 uppercase tracking-[0.06em] font-medium mb-0.5"
            />
            <p className="text-2xl sm:text-3xl font-Neue font-semibold dark:text-neutral-300 text-zinc-900 tracking-tight mb-0.5">
              Hitesh Suthar
            </p>
            <p
              className={`text-[13px] sm:text-[14px] text-zinc-500 transition-opacity duration-300 ${
                visible ? "opacity-100" : "opacity-0"
              }`}
            >
              {phrases[phraseIdx]}
            </p>
          </div>
        </div>
        {/* Clock */}
        <span className="font-mono text-[11px] bg/ dark:bg-neutral-900    /60  -800 text-neutral-600 dark:text-neutral-400 px-2.5 py-1 rounded-full shrink-0">
          {currentTime}
        </span>
      </div>

      {/* Buttons - Added flex-wrap here for mobile responsiveness */}
    </div>
  );
};

export default Profile;
