const About = () => {
  return (
    <div className="border w-full  border-b  border-neutral-100 dark:border-neutral-800 dark:bg-[#09090B]">
      <div className="mx-auto border-b py-0.5 px-4 relative w-full max-w-2xl border-neutral-200 dark:border-neutral-900   border-r border-l ">
        {" "}
        <p className="text-3xl text-neutral-900 dark:text-neutral-100 font-[Neue] ">
          About
        </p>
      </div>
      <div className="relative mx-auto w-full max-w-2xl flex-wrap border-x border-neutral-200 p-4 sm:p-6 dark:border-neutral-900">
        <h1 className="text-base  sm:text-md  md:text-md">
          I build autonomous systems that solve problems. 
          I use Python to build the 'brain' (Agentic logic & RAG) and React/TypeScript to build the 'body' (the interface). 
          .I build end-to-end AI products.
          <br />
           My goal is to ship complete AI-powered products: polished
          frontends backed by agents that think and automate real workflows.
        </h1>
      </div>
    </div>
  );
};

export default About;
