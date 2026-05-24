const About = () => {
  return (
    <div className="border w-full  border-b  border-neutral-100 dark:border-neutral-800 dark:bg-[##09090B]">
      <div className="mx-auto border-b py-0.5 px-4 relative w-2xl border-neutral-200 dark:border-neutral-900   border-r border-l ">
        {" "}
        <p className="text-3xl text-neutral-900 dark:text-neutral-100 font-[Neue] ">
          About
        </p>
      </div>
      <div className="mx-auto p-6 relative w-2xl border-neutral-200 dark:border-neutral-900   border-r border-l ">
        {" "}
        <h1>
          I build fast, clean, and interactive UI and I'm currently expanding
          into <span className="font-medium">AI agent systems</span> and backend
          engineering. My goal is to ship complete AI-powered products: polished
          frontends backed by agents that think and automate real workflows.
        </h1>
      </div>
    </div>
  );
};

export default About;
