import React from "react";
import AnimatedTab from "./AnimatedTabs";
import AnimatedNumber from "./SlidingNumber";
import GooeyTooltip from "./GooeyTooltip";
import GooeySearch from "./GooeySearch";
import Dragable_Stickers from "./PaperScrumbled";
import fs from "fs";
import MacosNavbar from "./SectionNav";
import BentoCard from "./BentoCard";
const DragableCode = fs.readFileSync(
  "./data/components/PaperScrumbled.tsx",
  "utf-8",
);

const SlidingNumberCode = fs.readFileSync(
  "./data/components/SlidingNumber.tsx",
  "utf-8",
);
const AnimatedTabCode = fs.readFileSync(
  "./data/components/AnimatedTabs.tsx",
  "utf-8",
);
const GooeyToolTipCode = fs.readFileSync(
  "./data/components/GooeyTooltip.tsx",
  "utf-8",
);
const GooeySearchCode = fs.readFileSync(
  "./data/components/GooeySearch.tsx",
  "utf-8",
);
const MagneticCard = fs.readFileSync("./data/components/MagneticCard.tsx");
const MacosCode = fs.readFileSync("./data/components/SectionNav.tsx");
interface dependencyType {
  npm: string;
  pnpm: string;
  bun: string;
  yarn: string;
}
interface ComponentProps {
  label: string;
  fileName: string;
  code: string;
  dependency?: dependencyType;
  component: React.ComponentType;
}

const componentData: ComponentProps[] = [
  {
    label: "Animated Tabs",
    fileName: "animated-tabs",

    code: `${AnimatedTabCode}`,
    component: AnimatedTab,
    dependency: {
      npm: "motion",
      pnpm: "motion",
      bun: "motion",
      yarn: "motion",
    },
  },
  {
    label: "Gooey Tooltip",
    fileName: "gooey-tooltip",
    code: `${GooeyToolTipCode}`,
    component: GooeyTooltip,
    dependency: {
      npm: "lucide-react  motion",
      pnpm: "lucide-react  motion",
      bun: "lucide-react  motion",
      yarn: "lucide-react  motion",
    },
  },
  {
    label: "Gooey Search",
    fileName: "gooey-search",
    code: `${GooeySearchCode}`,
    component: GooeySearch,
    dependency: {
      npm: "lucide-react  motion",
      pnpm: "lucide-react  motion",
      bun: "lucide-react  motion",
      yarn: "lucide-react  motion",
    },
  },
  {
    label: "Paper Sticker",
    fileName: "paper-sticker",
    code: `${DragableCode}`,
    component: Dragable_Stickers,
    dependency: {
      npm: "@types/three  three motion",
      pnpm: "@types/three  three motion",
      bun: "@types/three  three motion",
      yarn: "@types/three three  motion",
    },
  },
  {
    label: "Sliding Number",
    fileName: "sliding-number",
    code: `${SlidingNumberCode}`,
    component: AnimatedNumber,
    dependency: {
      npm: "lucide-react motion",
      pnpm: "lucide-react motion",
      bun: "lucide-react motion",
      yarn: "lucide-react motion",
    },
  },
  {
    label: "Magnetic Card",
    fileName: "magnetic-card",
    code: `${MagneticCard}`,
    component: BentoCard,
    dependency: {
      npm: "motion",
      pnpm: "motion",
      bun: "motion",
      yarn: "motion",
    },
  },
  {
    label: "Smooth Scrool Nav",
    fileName: "smooth-scrool-nav",
    code: `${MacosCode}`,
    component: MacosNavbar,
    dependency: {
      npm: "motion",
      pnpm: "motion",
      bun: "motion",
      yarn: "motion",
    },
  },
];

export default componentData;
