"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import displayPicture from "@/public/profile.png";
import { FileTextIcon, CopyIcon, MailIcon, CalendarClock } from "lucide-react";
import ShinyText from "../ShineText";
import Link from "next/link";
import { getCalApi } from "@calcom/embed-react";
const phrases = [
  "Python Full-Stack Developer",
  "Building @Fypped",
  "Cooking something",
];

const Profile = () => {
  const [currentTime, setCurrentTime] = useState("");
  const [phraseIdx, setPhraseIdx] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const tick = () =>
      setCurrentTime(new Date().toLocaleTimeString("en-GB", { hour12: true }));
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
      className="bg-white z-12   rounded-xl  border -mt-4 dark:bg-[#09090B]
border-neutral-100 dark:border-neutral-800 p-3.5 w-3xl"
    >
      {/* Top row */}
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-3">
          {/* Avatar */}
          <div className="relative shrink-0">
            <div className="w-26 h-26 rounded-[14px] bg-zinc-100 relative border border-zinc-200 dark:border-neutral-700 overflow-hidden">
              <div className="bg-white absolute h-full blur-lg w-2 profile-sweep left-4" />
              <Image src={displayPicture} alt="Hitesh Suthar" />
            </div>
            <div className="absolute -bottom-0.5 -right-0.5 w-2.75 h-2.75 rounded-full bg-green-500 border-2 border-white" />
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
            <p className="text-3xl  font-[Neue] font-semibold dark:text-neutral-300 text-zinc-900 tracking-tight mb-0.5">
              Hitesh Suthar
            </p>
            <p
              className={`text-[14px] text-zinc-500 transition-opacity duration-300 ${visible ? "opacity-100" : "opacity-0"}`}
            >
              {phrases[phraseIdx]}
            </p>
          </div>
        </div>
        {/* Clock */}
        <span className="font-mono text-[12px] text-zinc-400 pt-0.5 shrink-0">
          {currentTime}
        </span>
      </div>

      {/* Buttons */}
      <div className="flex gap-2 mt-3.5">
        <Link href={"/get-in-touch"}>
          <button className="px-4 flex items-center cursor-pointer justify-center gap-1.5 bg-zinc-900 dark:text-neutral-300 text-white text-[12px] font-medium py-2 rounded-[10px]">
            <MailIcon className="w-3.5 h-3.5" />
            Get in touch
          </button>
        </Link>
        <button
          data-cal-namespace="quickchat"
          data-cal-link="senorhitesh/quickchat"
          data-cal-config='{"layout":"month_view","useSlotsViewOnSmallScreen":"true"}'
          className="px-4 flex items-center cursor-pointer  justify-center gap-1.5  dark:border-neutral-700 dark:bg-neutral-100 dark:text-neutral-900 text-neutral-800 border border-neutral-200 text-[12px] font-medium py-2 rounded-[10px]"
        >
          <CalendarClock className="w-3.5 h-3.5" />
          Book a Meet
        </button>
        <Link
          target="_black"
          href={"https://www.linkedin.com/in/hiteshsutharr"}
        >
          <button className="dark:bg-neutral-800 dark:border-neutral-900 cursor-pointer flex px-3 items-center justify-center gap-1.5 bg-white border border-zinc-200 text-zinc-600 text-[12px] font-medium py-2 rounded-[10px]">
            <svg
              width="14"
              height="15"
              viewBox="0 0 27 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="grayscale-100 fill-[#0A66C2] dark:fill-neutral-200 hover:grayscale-0 transition"
            >
              <path d="M22.6942 21.9716H18.7476V15.988C18.7476 14.5611 18.7213 12.7243 16.695 12.7243C14.6395 12.7243 14.3251 14.279 14.3251 15.8841V21.9712H10.3785V9.66648H14.1672V11.3481H14.2202C14.5994 10.7204 15.1473 10.2041 15.8055 9.85408C16.4638 9.50406 17.2078 9.33345 17.9583 9.36042C21.9583 9.36042 22.6958 11.9076 22.6958 15.2214L22.6942 21.9716ZM5.92549 7.98452C5.47252 7.9846 5.02969 7.85464 4.65302 7.61106C4.27635 7.36749 3.98276 7.02125 3.80935 6.61612C3.63593 6.211 3.59048 5.76519 3.67877 5.33506C3.76706 4.90494 3.98512 4.50982 4.30536 4.19967C4.62559 3.88952 5.03363 3.67828 5.47788 3.59264C5.92212 3.50701 6.38261 3.55084 6.80113 3.71859C7.21964 3.88634 7.57738 4.17047 7.8291 4.53505C8.08082 4.89964 8.21523 5.32831 8.21531 5.76684C8.21536 6.05802 8.15617 6.34636 8.04112 6.61539C7.92608 6.88442 7.75744 7.12888 7.54481 7.33481C7.33218 7.54074 7.07972 7.70411 6.80188 7.81559C6.52404 7.92706 6.22624 7.98447 5.92549 7.98452ZM7.89875 21.9716H3.9481V9.66648H7.89875V21.9716ZM24.6617 0.00175685H1.96498C1.44982 -0.00387146 0.953414 0.188737 0.58487 0.537258C0.216327 0.885779 0.00579886 1.3617 -0.000488281 1.86043V23.9254C0.00558368 24.4244 0.215988 24.9006 0.584519 25.2495C0.95305 25.5984 1.44957 25.7914 1.96498 25.786H24.6617C25.1781 25.7923 25.676 25.5999 26.046 25.251C26.416 24.9021 26.6278 24.4253 26.635 23.9254V1.85884C26.6276 1.35912 26.4156 0.882656 26.0456 0.534144C25.6756 0.185632 25.1779 -0.0064266 24.6617 0.000164195" />
            </svg>
          </button>
        </Link>
        <Link target="_black" href={"https://github.com/senorhitesh"}>
          <button className="dark:bg-neutral-800 dark:border-neutral-900 cursor-pointer flex px-3 items-center justify-center gap-1.5 bg-white border border-zinc-200 text-zinc-600 text-[12px]  font-medium py-2 rounded-[10px]">
            <svg
              width="16"
              height="16"
              viewBox="0 0 27 27"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="dark:fill-neutral-200 fill-[#24292F]"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M13.5112 0C6.03984 0 0 6.18747 0 13.8422C0 19.9611 3.86993 25.1406 9.23856 26.9737C9.90978 27.1115 10.1556 26.6759 10.1556 26.3094C10.1556 25.9885 10.1335 24.8886 10.1335 23.7425C6.37504 24.5676 5.59236 22.0924 5.59236 22.0924C4.98835 20.4881 4.0934 20.0758 4.0934 20.0758C2.86325 19.2279 4.183 19.2279 4.183 19.2279C5.54756 19.3195 6.26358 20.6487 6.26358 20.6487C7.47133 22.757 9.4175 22.1613 10.2004 21.7945C10.3122 20.9007 10.6703 20.282 11.0506 19.9383C8.05294 19.6174 4.89902 18.4257 4.89902 13.1087C4.89902 11.5962 5.43555 10.3587 6.28571 9.39624C6.15157 9.05256 5.68169 7.63141 6.42012 5.72932C6.42012 5.72932 7.56093 5.36257 10.1332 7.15019C11.2345 6.84719 12.3703 6.69305 13.5112 6.69175C14.652 6.69175 15.8149 6.85235 16.8888 7.15019C19.4614 5.36257 20.6022 5.72932 20.6022 5.72932C21.3406 7.63141 20.8705 9.05256 20.7364 9.39624C21.6089 10.3587 22.1233 11.5962 22.1233 13.1087C22.1233 18.4257 18.9694 19.5943 15.9493 19.9383C16.4416 20.3737 16.8664 21.1986 16.8664 22.505C16.8664 24.3612 16.8443 25.851 16.8443 26.3091C16.8443 26.6759 17.0904 27.1115 17.7614 26.974C23.13 25.1403 26.9999 19.9611 26.9999 13.8422C27.0221 6.18747 20.9601 0 13.5112 0Z"
                fill=""
              />
            </svg>
          </button>
        </Link>
        <Link target="_black" href={"https://x.com/senorHitesh"}>
          <button className="dark:bg-neutral-800 dark:border-neutral-900 cursor-pointer flex px-3 items-center justify-center gap-1.5 bg-white border border-zinc-200 text-zinc-600 text-[12px] font-medium py-2 rounded-[10px]">
            <svg
              width="16"
              height="13 "
              viewBox="0 0 27 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="dark:fill-neutral-300 fill-black"
            >
              <g clipPath="url(#clip0_339_10)">
                <path d="M21.253 0H25.3735L16.3735 10.1867L27 24H18.6506L12.1446 15.6267L4.66265 24H0.542169L10.1928 13.12L0 0H8.56627L14.4759 7.68L21.253 0ZM19.7892 21.5467H22.0663L7.31928 2.29333H4.8253L19.7892 21.5467Z" />
              </g>
              <defs>
                <clipPath id="clip0_339_10">
                  <rect width="27" height="24" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </button>
        </Link>
      </div>

      {/* Status bar */}
      <div className="mt-2.5 bg-zinc-100 dark:bg-neutral-900 rounded-[10px] px-3 py-2 flex items-center justify-between">
        <div className="flex items-center gap-1.5">
          <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
          <span className="text-[11px] dark:text-neutral-300 text-zinc-600">
            Building @Fypped
          </span>
        </div>
        <span className="text-[11px] text-zinc-400">Open to collab</span>
      </div>
    </div>
  );
};

export default Profile;
