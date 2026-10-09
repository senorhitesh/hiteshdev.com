import NAVBAR from "@/components/NAVBAR";
import Link from "next/link";
import componentData from "@/data/components/data";
const Blogs = () => {
  return (
    <div className="flex flex-col  ">
      <NAVBAR />
      <div className="flex items-center  mt-10 gap-2 ">
        <h2 className="relative  text-2xl inline-block font-bold tracking-tighter font-sans text-neutral-900 dark:text-neutral-100 ">
          Components
        </h2>
      </div>
      <p className="font-sans text-sm mt-1 mb-4 text-neutral-500 dark:text-neutral-400">
        A curated collection of modern, reusable React components.
        <br /> Copy, paste, and customize.
      </p>
      {componentData.map((c) => {
        return (
          <Link
            href={`component/${c.fileName}`}
            key={c.label}
            className="flex mb-3 relative flex-col items-center gap-4"
          >
            <ComponentBlockShowCase label={c.label} Component={c.component} />
          </Link>
        );
      })}
    </div>
  );
};

export default Blogs;

const ComponentBlockShowCase = ({
  label,
  Component,
}: {
  label: string;
  Component: React.ComponentType;
}) => {
  return (
    <div className="w-full border relative bg-neutral-50 dark:bg-neutral-900/60 transition hover:ring-4 hover:ring-blue-500/10 dark:hover:ring-neutral-500/10 rounded-lg flex items-center justify-center border-neutral-200 dark:border-neutral-800 min-h-45">
      <div className="absolute bg-white dark:bg-neutral-800 text-sm px-3 py-1 rounded-lg border border-neutral-200 dark:border-neutral-700 text-neutral-700 dark:text-neutral-200 top-2 left-2 font-sans shadow-xs">
        {label}
      </div>
      <Component />
    </div>
  );
};
