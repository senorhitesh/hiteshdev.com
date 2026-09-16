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
      <p className="font-sans text-sm mt-1 mb-4  text-neutral-400">
        A curated collection of modern, reusable React components.
        <br /> Copy, paste, and customize.
      </p>
      {componentData.map((c) => {
        return (
          <Link
            href={`component/${c.fileName}`}
            key={c.label}
            className="flex  flex-col items-center gap-4"
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
    <div className="w-full relative bg-neutral-50 rounded-lg flex items-center justify-center  border-neutral-200 min-h-45">
      <div className="absolute bg-white text-sm px-3 py-1 rounded-lg border border-neutral-100 text-neutral-700 top-1 left-1 font-sans">
        {label}
      </div>
      <Component />
    </div>
  );
};
