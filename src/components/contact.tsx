"use client";

import useSectionInView from "@/hooks/use-section-in-view";
import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import sendEmail from "@/actions/send-email";
import ButtonSubmit from "./button-submit";
import toast from "react-hot-toast";

export default function Contact() {
  const { ref } = useSectionInView("Contact");

  return (
    <motion.section
      transition={{
        delay: 0.3,
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      id="contact"
      ref={ref}
      className="mb-20 sm:mb-28 w-[min(100%,38rem)] px-12 sm:px-0 scroll-mt-28"
    >
      <SectionHeading>Contact me</SectionHeading>
      <p className="text-gray-700 text-center -mt-6">
        Please contact me directly at&nbsp;
        <a href="mailto:dewantorafli@gmail.com" className="underline">
          dewantorafli@gmail.com&nbsp;
        </a>
        or through this form
      </p>

      <form
        action={async (formData) => {
          const { error } = await sendEmail(formData);

          if (error) {
            toast.error(error as string);
            return;
          }
          toast.success("Email sent");
        }}
        className="flex flex-col mt-10"
      >
        <input
          id="email"
          name="email"
          required
          maxLength={500}
          placeholder="Your email"
          className="p-4 border rounded-lg border-black/10 h-14"
          type="email"
        />
        <textarea
          maxLength={5000}
          required
          style={{
            resize: "none",
          }}
          placeholder="Message"
          className="p-4 my-3 border rounded-lg h-52 border-black/10"
          name="message"
          id="message"
        ></textarea>
        <ButtonSubmit />
      </form>
    </motion.section>
  );
}
