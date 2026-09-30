"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import displayPicture from "@/public/profile.jpg";
import { getCalApi } from "@calcom/embed-react";

const phrases = ["Engineer", "Founder @helxstudio", "Cooking something"];
const Profile = () => {
  const [currentTime, setCurrentTime] = useState("");
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
    (async function () {
      const cal = await getCalApi({ namespace: "quickchat" });
      cal("ui", { hideEventTypeDetails: false, layout: "month_view" });
    })();
  }, []);

  return (
    <div
      className="bg-white z-12 mt-7  dark:bg-[#09090B]
                     w-full mx-auto  max-w-2xl"
    >
      <div className="flex flex-wrap sm:flex-nowrap items-start justify-between gap-3">
        <div className="flex items-center gap-3">
          {/* Avatar */}
          <div className="relative shrink-0">
            <div
              style={{
                background:
                  "linear-gradient(45deg,#999 5%,#fff 10%,#ccc 30%,#ddd 50%,#ccc 70%,#fff 80%,#999 95%)",
              }}
              className="w-20 h-20 p-1  rounded-[14px] bg-neutral-200 active:scale-90 transition select-none relative overflow-hidden"
            >
              <div className="bg-white absolute h-full blur-lg w-2 profile-sweep left-4" />
              <Image
                src={displayPicture}
                loading="eager"
                alt="Hitesh Suthar"
                className="object-cover pointer-events-none   rounded-[14px] w-full h-full"
              />
            </div>
          </div>
          <div>
            <p className="text-2xl sm:text-3xl font-Neue font-semibold dark:text-neutral-300 text-zinc-900 tracking-tight mb-0.5">
              Hitesh Suthar
            </p>
            <p
              className={`text-[13px] sm:text-[14px] text-zinc-500 transition-opacity duration-300`}
            >
              19 • Curios • Full-Stack Engineer
            </p>
          </div>
        </div>
        {/* Clock */}
        <span className="font-mono text-[11px] bg/ dark:bg-neutral-900    /60  -800 text-neutral-600 dark:text-neutral-400 px-2.5 py-1 rounded-full shrink-0">
          {currentTime}
        </span>
      </div>
    </div>
  );
};

export default Profile;
