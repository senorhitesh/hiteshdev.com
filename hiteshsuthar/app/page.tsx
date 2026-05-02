"use client";
import About from "./Components/About";
import BioComponent from "./Components/BioComponent";
import Divider from "./Components/Divider";
import Navbar from "./Components/HeroPage/Navbar";
import Link from "./Components/Link";
import Profile from "./Components/Profile/Profile";
import { ThemeProvider } from "@/app/Components/theme-provider";
import TextPressure from "@/components/TextPressure";
export default function Home() {
  return (
    <>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <div className="flex flex-col flex-1 items-center justify-center font-sans dark:bg-[#09090B] mt-2">
          <Navbar />
          {/* Block */}
          <div
            className="
            border-gray-200 dark:border-neutral-800 border-r border-l
              w-2xl h-50
            bg-white dark:bg-[#09090B]
              [radial-gradient(#dcdcdc_1px,transparent_1px)]
              dark:bg-[radial-gradient(#333_1px, transparent_1px)]
              bg-size-[18px_18px] flex items-center justify-center"
          >
            <TextPressure
              text="Welcome!"
              flex={false}
              alpha={false}
              stroke={false}
              width
              weight
              italic
              textColor="#2C3947"
              strokeColor="#2C3947"
              minFontSize={16}
              className="scale-50"
            />
          </div>
          {/* Profile */}
          <Profile />
          <Divider />
          <BioComponent />
          <Divider />
          <About />
          <Link />
        </div>
      </ThemeProvider>
    </>
  );
}
