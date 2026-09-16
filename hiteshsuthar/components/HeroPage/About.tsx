import Link from "next/link";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  NewTwitterIcon,
  CalendarsIcon,
  Linkedin02Icon,
  GithubIcon,
  Sent02Icon,
} from "@hugeicons/core-free-icons";
const About = () => {
  return (
    <div className="w-full">
      <div className="relative mx-auto w-full max-w-2xl flex-wrap mt-3 ">
        <h1 className="text-neutral-700 leading-5.5 sm:text-md  md:text-md">
          yo, I’m Hitesh, an engineer based in India, obsessed in building
          scalable web products, developer tools, and good design.
        </h1>

        <div className="mt-2 text-neutral-700 leading-5.5 sm:text-md md:text-md">
          <p>
            Currently, I'm running my own Design & Development studio{" "}
            <Link
              href="https://helxstudio.in"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex align-middle bg-neutral-100 text-neutral-800
                 border border-neutral-200 rounded-md p-1.5
                 hover:bg-neutral-200"
            >
              <svg
                width="12"
                height="11"
                viewBox="0 0 12 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.992 11L5.984 7.744V0H2.904L0 3.256V11H2.992Z"
                  fill="#0A141E"
                />
                <path
                  d="M5.98401 11V7.74399L8.88801 4.39999H11.792V11H5.98401Z"
                  fill="#0A141E"
                />
              </svg>
            </Link>
          </p>
        </div>
        <p className="text-neutral-700 leading-5.5 sm:text-md  md:text-md">
          Completed over 10+ projects across 2 countries
        </p>
        <div className="flex flex-wrap gap-2 mt-3.5">
          <button
            aria-label="quick-chat"
            data-cal-namespace="quickchat"
            data-cal-link="senorhitesh/quickchat"
            data-cal-config='{"layout":"month_view","useSlotsViewOnSmallScreen":"true"}'
            className=" px-4 w-fit flex items-center active:scale-96 transition-all cursor-pointer justify-center gap-1.5 bg-zinc-900 dark:text-neutral-300 text-white text-[12px] font-medium py-2 rounded-md"
          >
            <HugeiconsIcon icon={CalendarsIcon} className="w-3.5 h-3.5" />
            Book a Meet
          </button>
          <Link
            href={"https://t.me/hiteshxdev"}
            className="flex-grow sm:flex-grow-0"
          >
            <span className="grow sm:grow-0 px-4 flex items-center cursor-pointer justify-center gap-1.5  -700 dark:bg dark:-neutral-900 text-neutral-800   border-neutral-100 border group hover:text-blue-600 hover:bg-blue-50/10 active:scale-96 transition-all  text-[12px] font-medium py-2 rounded-md">
              <HugeiconsIcon
                icon={Sent02Icon}
                className="w-3.5 h-3.5 group-hover:text-blue-600 transition-all"
              />
              Send Message
            </span>
          </Link>
          <div className="flex  flex-grow items-center sm:flex-grow-0">
            {" "}
            <Link
              target="_blank"
              href={"https://github.com/senorhitesh"}
              className="flex-1"
            >
              <span className="w-full dark:bg-neutral-800  -900 cursor-pointer flex px-2 items-center justify-center gap-1.5 bg-white    -zinc-200 text-zinc-600 text-[12px] font-medium py-2 hover:bg-neutral-100  rounded-[10px]">
                <HugeiconsIcon size={18} icon={GithubIcon} />
              </span>
            </Link>
            <Link
              target="_blank"
              href={"https://x.com/hiteshxdev"}
              className="flex-1"
            >
              <span
                aria-label="x-btn"
                className="w-full dark:bg-neutral-800  cursor-pointer hover:bg-neutral-100 flex px-2 items-center justify-center gap-1.5 bg-white     text-zinc-600 text-[12px] font-medium py-2 rounded-[10px]"
              >
                <HugeiconsIcon size={18} icon={NewTwitterIcon} />
              </span>
            </Link>
            <Link
              target="_blank"
              href={"https://www.linkedin.com/in/hiteshsutharr"}
              className="flex-1"
            >
              <span className="w-full dark:bg-neutral-800 hover:bg-neutral-100  cursor-pointer flex px-2 items-center justify-center gap-1.5 bg-white    -zinc-200 text-zinc-600 text-[12px] font-medium py-2 rounded-[10px]">
                <HugeiconsIcon size={18} icon={Linkedin02Icon} />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
