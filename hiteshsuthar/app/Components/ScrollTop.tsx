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
    <div onClick={scrollToTop} className="fixed bottom-4 z-999 right-4">
      {" "}
      <div
        className={`p-1 ring-1 group transition cursor-pointer duration-200 ${visible ? "opacity-100 translate-y-0 scale-100" : "scale-0 opacity-0  translate-y-4"} ring-offset-2 hover:ring-offset-3 hover:ring-neutral-400 ring-neutral-300 bg-neutral-800 rounded-md text-white dark:text-black dark:bg-white`}
      >
        <ArrowDown className="rotate-180   transition duration-200 text-xs" />
      </div>
    </div>
  );
};

export default ScrollTop;
