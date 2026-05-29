"use client";
import { useState, useEffect } from "react";

export default function Preloader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // 2.8s total duration for handwriting drawing + fill + fade out
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2800);
    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <div className="fixed inset-0 z-[9999999] flex flex-col items-center justify-center bg-white dark:bg-[#09090B] transition-opacity duration-500">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Caveat:wght@400;700&display=swap');
        
        .signature-svg text {
          stroke-dasharray: 600;
          stroke-dashoffset: 600;
          animation: drawText 2.2s cubic-bezier(0.22, 1, 0.36, 1) forwards,
                     fillText 0.6s cubic-bezier(0.22, 1, 0.36, 1) 1.6s forwards;
        }

        @keyframes drawText {
          to {
            stroke-dashoffset: 0;
          }
        }

        @keyframes fillText {
          to {
            fill-opacity: 1;
            stroke-opacity: 0.15;
          }
        }
      `}</style>
      <svg viewBox="0 0 600 150" className="w-full max-w-md signature-svg px-6">
        <text
          x="50%"
          y="50%"
          dominantBaseline="middle"
          textAnchor="middle"
          className="text-5xl sm:text-6xl font-normal stroke-zinc-900 dark:stroke-zinc-100 fill-zinc-900 dark:fill-zinc-100"
          style={{
            fontFamily: "'Caveat', cursive",
            strokeWidth: "1.5px",
            fillOpacity: 0,
          }}
        >
          Mithun Suthar
        </text>
      </svg>
    </div>
  );
}
