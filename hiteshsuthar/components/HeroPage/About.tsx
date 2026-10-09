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
      <div className="relative text-neutral-600 dark:text-neutral-400 mx-auto w-full max-w-2xl flex-wrap mt-5">
        <h1 className="leading-5.5 sm:text-md md:text-md">
          yo, I’m Hitesh, an engineer based in India,
          <span className="text-neutral-900 dark:text-neutral-100 font-medium"> obsessed</span> in
          building{" "}
          <span className="text-neutral-900 dark:text-neutral-100 font-medium">scalable web</span>{" "}
          products, developer tools, and{" "}
          <span className="text-neutral-900 dark:text-neutral-100 font-medium">good design</span>.
        </h1>
        <div className="mt-2 leading-5.5 sm:text-md md:text-md">
        </div>
        <p className="mt-2 leading-5.5 sm:text-md md:text-md">
          Outside of work, I love to watch anime and sleep.
        </p>
        <p className="mt-2 leading-5.5 sm:text-md md:text-md">
          If you're someone who enjoys good conversations, random ideas, <br />
          building cool stuff feel free to{" "}
          <Link
            className="text-neutral-900 dark:text-neutral-100 font-medium underline underline-offset-1 hover:text-neutral-700 dark:hover:text-neutral-300 transition-colors"
            href={"mailto:senorhitesh@gmail.com"}
            target="_blank"
          >
            drop me an email
          </Link>
          .
        </p>
        <div className="flex flex-wrap gap-2 mt-3.5">
          <button
            aria-label="quick-chat"
            data-cal-namespace="quickchat"
            data-cal-link="senorhitesh/quickchat"
            data-cal-config='{"layout":"month_view","useSlotsViewOnSmallScreen":"true"}'
            className="px-4 w-fit flex items-center active:scale-96 transition-all cursor-pointer justify-center gap-1.5 bg-neutral-900 dark:bg-neutral-100 text-white dark:text-neutral-900 hover:bg-neutral-800 dark:hover:bg-neutral-200 text-[12px] font-medium py-2 rounded-md shadow-xs"
          >
            <HugeiconsIcon icon={CalendarsIcon} className="w-3.5 h-3.5" />
            Book a Meet
          </button>
          <Link
            href={"https://t.me/hiteshxdev"}
            className="flex-grow sm:flex-grow-0"
          >
            <span className="grow sm:grow-0 px-4 flex items-center cursor-pointer justify-center gap-1.5 border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 text-neutral-800 dark:text-neutral-200 group hover:text-blue-600 dark:hover:text-blue-400 hover:border-blue-500/30 dark:hover:border-blue-500/30 hover:bg-blue-50/10 active:scale-96 transition-all text-[12px] font-medium py-2 rounded-md">
              <HugeiconsIcon
                icon={Sent02Icon}
                className="w-3.5 h-3.5 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-all"
              />
              Send Message
            </span>
          </Link>
          <div className="flex flex-grow items-center sm:flex-grow-0 gap-1.5">
            <Link
              target="_blank"
              href={"https://github.com/senorhitesh"}
              className="flex-1"
              aria-label="GitHub"
            >
              <span className="w-full bg-white dark:bg-neutral-900 hover:bg-neutral-100 dark:hover:bg-neutral-800 cursor-pointer flex px-2.5 items-center justify-center border border-neutral-200 dark:border-neutral-800 text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 text-[12px] font-medium py-2 rounded-[10px] transition-colors">
                <HugeiconsIcon size={18} icon={GithubIcon} />
              </span>
            </Link>
            <Link
              target="_blank"
              href={"https://x.com/hiteshxdev"}
              className="flex-1"
              aria-label="X (Twitter)"
            >
              <span
                className="w-full bg-white dark:bg-neutral-900 hover:bg-neutral-100 dark:hover:bg-neutral-800 cursor-pointer flex px-2.5 items-center justify-center border border-neutral-200 dark:border-neutral-800 text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 text-[12px] font-medium py-2 rounded-[10px] transition-colors"
              >
                <HugeiconsIcon size={18} icon={NewTwitterIcon} />
              </span>
            </Link>
            <Link
              target="_blank"
              href={"https://www.linkedin.com/in/hiteshsutharr"}
              className="flex-1"
              aria-label="LinkedIn"
            >
              <span className="w-full bg-white dark:bg-neutral-900 hover:bg-neutral-100 dark:hover:bg-neutral-800 cursor-pointer flex px-2.5 items-center justify-center border border-neutral-200 dark:border-neutral-800 text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 text-[12px] font-medium py-2 rounded-[10px] transition-colors">
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
