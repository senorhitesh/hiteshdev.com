import { ArrowUpRight } from "lucide-react";

interface SLProp {
  id: number;
  name: string;
  link: string;
}
const SocialLinks: SLProp[] = [
  {
    id: 1,
    name: "X",
    link: "https://x.com/senorHitesh",
  },
  {
    id: 2,
    name: "Instagram",
    link: "https://www.instagram.com/hiteshhdev/?hl=en",
  },
  {
    id: 3,
    name: "Linked In",
    link: "https://www.linkedin.com/in/hiteshsutharr",
  },
];
const Links = () => {
  return (
    <div className="border w-full  border-b  border-neutral-100 dark:border-neutral-800 dark:bg-[##09090B]">
      <div className="mx-auto border-b gap-3 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 relative w-2xl border-neutral-200 dark:border-neutral-900   border-r  ">
        {SocialLinks.map((link) => {
          return (
            <div
              className="col-span-1 border-r group border-l border-neutral-200 dark:border-neutral-900 flex justify-between  p-3"
              key={link.id}
            >
              <p className="font-medium text-md text-neutral-800">
                {link.name}
              </p>
              <ArrowUpRight className="text-neutral-600 group-hover:text-neutral-700 group-hover:translate-x-1 group-hover:-translate-y-1 transition " />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Links;
