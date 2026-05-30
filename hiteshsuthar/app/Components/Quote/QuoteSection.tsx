const QuoteSection = () => {
  return (
    <div className="w-full border-b font-mono tracking-tight dark:border-neutral-900 border-neutral-200">
      <div className="mx-auto border-x flex items-center justify-center flex-col dark:border-neutral-900 relative border-neutral-200 w-full max-w-2xl">
        <div className="w-full flex items-center justify-center p-6  dark:border-neutral-900 border-neutral-200">
          <div className="w-full  dark:border-neutral-900  border-neutral-200">
            <div className="relative bg-white  dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 rounded-xl w-full px-9 pt-8 pb-7 overflow-hidden ">
              {/* Faded background quote mark */}
              <span className="absolute leading-1 tracking-[-2rem] z-12  font-extrabold left-0 -top-4 text-[120px]  text-neutral-200 dark:text-neutral-800 select-none pointer-events-none ">
                ,,
              </span>

              {/* Quote text */}
              <p className="relative italic font-bold font-sans text-2xl z-12 text-neutral-800 dark:text-neutral-200  tracking-wide mb-5">
                &ldquo;If we don&apos;t fight, we can&apos;t win.&rdquo;
              </p>

              {/* Author */}
              <p className="text-right text-[13px] text-neutral-500 z-12 dark:text-neutral-400 tracking-wide not-italic">
                — Eren Yeager
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuoteSection;
