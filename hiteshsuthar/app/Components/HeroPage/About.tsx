const About = () => {
  return (
    <div className="border w-full  border-b  border-neutral-100 dark:border-neutral-800 dark:bg-[#09090B]">
      <div className="mx-auto border-b py-0.5 px-4 relative w-full max-w-2xl border-neutral-200 dark:border-neutral-900   border-r border-l ">
        {" "}
        <p className="text-3xl text-neutral-900 dark:text-neutral-100 font-[Neue] ">
          Hello World
        </p>
      </div>
      <div className="relative mx-auto w-full max-w-2xl flex-wrap border-x border-neutral-200 p-4 sm:p-6 dark:border-neutral-900">
<h1 className="text-base sm:text-md md:text-md">
  Hey there my name is Hitesh Suthar😋{" "}
  <span className="group cursor-pointer">
    (
    <img
      src="https://images.unsplash.com/photo-1780182309635-990aea44c255?q=80&w=714&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      alt="profile"
      className="inline-block max-w-0 overflow-hidden whitespace-nowrap opacity-0 group-hover:max-w-4 object-cover transition-all duration-500  group-hover:opacity-100"
    />
    )
  </span>
</h1>
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
