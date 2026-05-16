const Footer = () => {
  return (
    <div className="border-b w-full  dark:border-neutral-900 border-neutral-200">
      <div className="max-w-2xl p-3 relative gap-3 flex flex-col w-full mx-auto border-x dark:border-neutral-900 border-neutral-200">
        <div className="w-2 h-2 bg-white dark:bg-black border-neutral-200 dark:border-neutral-800 -bottom-1 -left-1 absolute border"></div>
        <div className="w-2 h-2 bg-white dark:bg-black border-neutral-200 dark:border-neutral-800 -bottom-1 -right-1 absolute border"></div>

        <div>
          <p className="text-xs font-mono text-neutral-900 dark:text-neutral-100 ">
            &copy; Hitesh Suthar
          </p>
          <p className="text-xs font-mono text-neutral-900 dark:text-neutral-100 ">
            Built with Chai & ❤
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
