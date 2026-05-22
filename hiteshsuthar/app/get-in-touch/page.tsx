"use client";
import { useFormik } from "formik";
import * as Yup from "yup";
import { supabase } from "@/lib/supabase";
import { ArrowLeft, ChevronLeft, Send } from "lucide-react";
import Link from "next/link";
import { ToastContainer, toast } from "react-toastify";

const ValidationSchema = Yup.object({
  name: Yup.string()
    .required("Required")
    .min(2, "Name must be at least 2 characters"),
  email: Yup.string()
    .required("Email required")
    .matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Please enter a valid email"),
  phone: Yup.string()
    .min(5, "Invalid phone number")
    .max(15, "Invalid phone number"),
  interested: Yup.string().required("Please select a subject"),
  message: Yup.string().required("Message is required").min(5, "Too short"),
});
const Page = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      interested: "web",
      message: "",
    },
    validationSchema: ValidationSchema,
    onSubmit: async (values, { resetForm, setSubmitting }) => {
      const { error } = await supabase.from("customers").insert([values]);

      if (error) {
        toast.error("Something went wrong");
      } else {
        toast.success("Message sent successfully ✔");
        resetForm();
      }
      setSubmitting(false);
    },
  });

  return (
    <div className="w-full min-h-screen bg-white dark:bg-black transition-colors duration-300">
      <ToastContainer
        position="bottom-center"
        autoClose={3000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <div className="flex items-center justify-center max-w-2xl mx-auto border-x border-zinc-200 dark:border-zinc-800">
        <section className="h-full flex items-center justify-center mx-auto relative py-20">
          <p className="absolute font-extrabold text-7xl left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-zinc-200 dark:text-zinc-900">
            FAAHHHHHHH
          </p>
          <div className="dark:bg-neutral-400 rounded-full w-80 bg-yellow-200 left-1/2 -translate-x-1/2 h-4 absolute top-22" />
          <div
            className="mx-auto relative overflow-hidden py-8 lg:px-16 md:px-14 px-4 max-w-195
            bg-white/10 dark:bg-black/20
            border-y border-zinc-200 dark:border-zinc-800
            backdrop-blur-3xl"
          >
            {/* Corners */}
            <div className="w-2 h-2 bg-zinc-300 dark:bg-neutral-500 border border-zinc-400 dark:border-neutral-400 top-0 left-0 absolute" />
            <div className="w-2 h-2 bg-zinc-300 dark:bg-neutral-500 border border-zinc-400 dark:border-neutral-400 top-0 right-0 absolute" />
            <div className="w-2 h-2 bg-zinc-300 dark:bg-neutral-500 border border-zinc-400 dark:border-neutral-400 bottom-0 left-0 absolute" />
            <div className="w-2 h-2 bg-zinc-300 dark:bg-neutral-500 border border-zinc-400 dark:border-neutral-400 bottom-0 right-0 absolute" />
            {/* Glow */}
            <div className="w-30 h-30 bg-black/5 dark:bg-white/20 -left-10 -top-20 blur-3xl absolute" />
            <div className="w-30 h-30 bg-black/5 dark:bg-white/20 -right-10 -bottom-20 blur-3xl absolute" />
            {/* Heading */}
            <div className="flex items-center justify-between">
              <Link href={"/"}>
                <div className="text-neutral-700">
                  <ChevronLeft />
                </div>
              </Link>
              <h2 className="mb-1 font-[Neue] text-center text-4xl font-semibold leading-[0.92] text-black dark:text-white">
                Get In Touch.
              </h2>
              <div className="opacity-0">
                <ArrowLeft />
              </div>
            </div>
            <p className="mb-8 mt-4 text-base font-sans text-center text-zinc-600 dark:text-zinc-500">
              Available for freelance projects, collaborations, and full-time
              opportunities
            </p>
            <form
              onSubmit={() => formik.handleSubmit()}
              className="flex flex-col"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 font-sans">
                <InputField
                  label="Name"
                  placeholder="Your name"
                  name="name"
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.name ? formik.errors.name : undefined}
                  classNameLabel="after:content-['*']"
                />

                <InputField
                  label="Email"
                  placeholder="email@example.com"
                  name="email"
                  type="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.email ? formik.errors.email : undefined}
                  classNameLabel="after:content-['*']"
                />

                <InputField
                  label="Phone"
                  placeholder="Phone No"
                  name="phone"
                  value={formik.values.phone}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.phone ? formik.errors.phone : undefined}
                />

                {/* Select */}
                <div>
                  <label className="text-[11px] after:content-['*'] font-bold uppercase tracking-[2px] text-zinc-500">
                    Interested In
                  </label>

                  <select
                    name="interested"
                    value={formik.values.interested}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className="mt-2.5 mb-5 w-full rounded-xl border
                        border-zinc-300 dark:border-zinc-800
                        bg-zinc-100 dark:bg-[#0f0f0f]
                        px-4 py-3.5 text-[15px]
                       text-black dark:text-neutral-300
                       outline-none focus:border-neutral-400"
                  >
                    <option value="">Select a subject</option>
                    <option value="web">Web Development</option>
                    <option value="uiux">UI/UX Design</option>
                    <option value="branding">Branding</option>
                    <option value="freelance">Freelance Project</option>
                  </select>
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="text-[11px] after:content-['*'] font-bold uppercase tracking-[2px] text-zinc-500">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formik.values.message}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  placeholder="Type your message here."
                  rows={6}
                  className="mt-2.5 w-full  rounded-xl border
                  border-zinc-300 dark:border-zinc-800
                  bg-zinc-100 dark:bg-[#0f0f0f]
                  px-4 py-3.5 text-[15px]
                  text-black dark:text-white
                  outline-none transition
                  placeholder:text-zinc-500 dark:placeholder:text-zinc-600
                  focus:border-neutral-400 resize-none font-mono"
                />
                {formik.touched.message && formik.errors.message && (
                  <p className="text-red-500 font-sans text-xs mt-1">
                    {formik.errors.message}
                  </p>
                )}
              </div>

              {/* Button */}
              <button
                type="submit"
                disabled={
                  !formik.isValid || !formik.dirty || formik.isSubmitting
                }
                className={`group 
                      mt-5 px-6 relative rounded-xl py-2 overflow-hidden
                      transition duration-200
                      hover:bg-zinc-100 dark:hover:bg-zinc-900  
                ${
                  !formik.isValid || !formik.dirty
                    ? "bg-neutral-100 dark:bg-neutral-800 text-neutral-500 cursor-not-allowed"
                    : "text-neutral-800 dark:text-white border border-zinc-300 dark:border-neutral-700 cursor-pointer hover:bg-zinc-100 dark:hover:bg-zinc-900"
                }`}
              >
                <div className="absolute w-10  h-30 -top-5 -translate-x-26 group-hover:translate-x-26 bg-white blur-xl -rotate-12 transition duration-500" />
                {formik.isSubmitting ? "Sending..." : <>Send</>}
              </button>
            </form>
          </div>
        </section>
      </div>
    </div>
  );
};
export default Page;
const InputField = ({
  label,
  placeholder,
  onChange,
  onBlur,
  value,
  name,
  type = "text",
  classNameLabel = "",
  error,
}: {
  label: string;
  placeholder: string;
  name: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
  value: string;
  type?: string;
  classNameLabel?: string;
  error?: string;
}) => {
  return (
    <div>
      <label
        className={`text-[11px] after:text-sm font-bold uppercase tracking-[2px] text-zinc-500 ${classNameLabel}`}
      >
        {label}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        placeholder={placeholder}
        className="mt-2.5 mb-5 w-full rounded-xl border
        border-zinc-300 dark:border-zinc-800
        bg-zinc-100 dark:bg-[#0f0f0f]
        px-4 py-3.5 text-[15px]
        text-black dark:text-white
        outline-none transition
        placeholder:text-zinc-500 dark:placeholder:text-zinc-600
        focus:border-neutral-400 font-mono"
      />
      {error && <p className="text-red-500 text-xs mb-4">{error}</p>}
    </div>
  );
};
