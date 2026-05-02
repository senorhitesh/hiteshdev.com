const Divider = () => {
  return (
    <div
      style={{
        backgroundImage:
          "repeating-linear-gradient(135deg, rgba(0,0,0, 0.02) 0px, rgba(0,0,0, 0.06) 0.5px, transparent 2px, transparent 8px)",
      }}
      className="h-7 w-full border-b dark:border-neutral-900 border-gray-100"
    >
      <div className="max-w-2xl border-x h-full mx-auto  dark:border-neutral-900 border-neutral-200"></div>
    </div>
  );
};

export default Divider;
