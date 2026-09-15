import Link from "next/link";
const NAVBAR = () => {
  return (
    <div className="w-full text-md font-sans mx-auto  flex items-center mt-3 justify-between max-w-2xl">
      <div className="w-1"></div>
      <div className="flex items-center gap-4">
        <Link href="/">
          <p className="text-neutral-600 hover:text-neutral-800">Home</p>
        </Link>
        <Link href="/blogs">
          <p className="text-neutral-600 hover:text-neutral-800">Blogs</p>
        </Link>
        <Link href="/component">
          <p className="text-neutral-600 hover:text-neutral-800">Components</p>
        </Link>
      </div>
    </div>
  );
};

export default NAVBAR;
