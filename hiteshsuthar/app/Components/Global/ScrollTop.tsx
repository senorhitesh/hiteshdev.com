"use client";
import { ArrowDown } from "lucide-react";
import { useState, useEffect } from "react";
const ScrollTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibilty = () => {
      setVisible(window.scrollY > 200);
    };
    if (typeof window === "undefined") return;
    window.addEventListener("scroll", toggleVisibilty);

    return () => {
      window.removeEventListener("scroll", toggleVisibilty);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div onClick={scrollToTop} className="fixed bottom-4 z-9999999 right-4">
      {" "}
      <div
        className={`p-1 ring-neutral-200   group transition cursor-pointer duration-200 ${visible ? "opacity-100 translate-y-0 scale-100" : "scale-0 opacity-0  translate-y-4"}  bg-neutral-50 text-neutral-800 dark:bg-neutral-900 ring-2 dark:ring-neutral-800 ring-neutral-50  dark:text-white rounded-md`}
      >
        <ArrowDown className="rotate-180   transition duration-200 text-xs" />
      </div>
    </div>
  );
};

export default ScrollTop;
