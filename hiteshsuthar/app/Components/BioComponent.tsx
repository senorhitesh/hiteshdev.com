"use client";
import {
  Building2,
  Check,
  Code,
  Copy,
  LucideIcon,
  Mail,
  Map,
} from "lucide-react";
import { useEffect, useState } from "react";

const BioCard = ({
  Icon,
  title,
  underLineText,
  copy,
}: {
  Icon: LucideIcon;
  title: string;
  underLineText?: string;
  copy?: boolean;
}) => {
  const textToCopy = title;
  const [isClicked, setisClicked] = useState<boolean>(false);
  useEffect(() => {
    const timeOut = setTimeout(() => {
      setisClicked(false);
    }, 1000);
    return () => clearTimeout(timeOut);
  }, [isClicked]);
  return (
    <div className="flex group justify-between items-center gap-2 w-fit">
      <div className="w-6 pr-1 text-neutral-600 h-6 rounded-md ring-2 ring-neutral-200 dark:ring-neutral-800 dark:border-neutral-900 dark:text-neutral-400 dark:bg-neutral-900 border border-neutral-50 pl-1 flex items-center justify-center bg-gray-100">
        <Icon size={16} />
      </div>
      <p className="text-sm dark:text-neutral-300 text-neutral-900 flex-1 text-right">
        {title}
        {underLineText && (
          <span className="hover:underline underline-offset-2">
            {underLineText}
          </span>
        )}
      </p>
      {copy && (
        <div
          onClick={async () => {
            try {
              await navigator.clipboard.writeText(textToCopy);
              setisClicked(true);
            } catch (err) {
              console.error("Copy failed", err);
            }
          }}
          className="w-6 opacity-0 border-neutral-200 group-hover:opacity-100 transition dark:border-neutral-900 text-neutral-400 h-6 rounded-md dark:text-neutral-400 dark:bg-neutral-900 border hover:text-neutral-500 bg-white flex items-center justify-center"
        >
          {isClicked ? <Check /> : <Copy size={16} />}
        </div>
      )}
    </div>
  );
};
const BioComponent = () => {
  return (
    <div className="w-full border-b font-mono tracking-tight dark:border-neutral-900 border-neutral-200">
      <div className="mx-auto border-x gap-3 flex flex-col dark:border-neutral-900 border-neutral-200 p-6 max-w-2xl">
        <BioCard
          Icon={Code}
          title={"Frotend Intern @"}
          underLineText={"softtechsolutions"}
        />
        <BioCard Icon={Map} title={"Sirohi, Rajasthan [IN] "} />
        <BioCard Icon={Mail} title={"senorhitesh@gmail.com"} copy={true} />
        <BioCard Icon={Building2} title={"BCA, IGNOU"} />
      </div>
    </div>
  );
};
export default BioComponent;
