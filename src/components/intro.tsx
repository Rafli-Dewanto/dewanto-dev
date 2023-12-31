"use client";

import React from "react";
import { motion } from "framer-motion";
import LottieAnim from "./lottie-anim";
import Link from "next/link";
import { TfiLinkedin } from "react-icons/tfi";
import { FaGithubAlt } from "react-icons/fa";
import { PiShareNetworkDuotone } from "react-icons/pi";
import { AiOutlineCloudDownload } from "react-icons/ai";
import ProfilePicture from "./profile-picture";
import useSectionInView from "@/hooks/use-section-in-view";
import type { SectionName } from "@/utils/types/section-name";
import { useActiveSection } from "@/hooks/use-active-section";

export default function Intro() {
  const { ref } = useSectionInView("Home");
  const { setActiveSection, setTimeOfLastClick } = useActiveSection();

  function handleClick(sectionName: SectionName) {
    return () => {
      setActiveSection(sectionName);
      setTimeOfLastClick(Date.now());
    };
  }

  return (
    <section
      ref={ref}
      id="home"
      className="flex flex-col items-center justify-center text-center scroll-mt-[100rem]"
    >
      <ProfilePicture />

      {/* Main Title */}
      <motion.h1
        transition={{ delay: 0.3, duration: 1.125, type: "spring" }}
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="mb-10 mt-6 px-4 font-medium leading-[1.5] sm:text-4xl text-2xl text-center max-w-[36rem]"
      >
        <span className="font-bold">Hi, I&apos;m Rafli Dewanto. </span>
        <br />
        a&nbsp;
        <span className="font-bold">computer science student&nbsp;</span>
        <br />
        specialize in <span className="font-bold underline">Back-End</span> web
        development
      </motion.h1>
      <LottieAnim />

      {/* CTA Container */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col items-center justify-center px-4 text-lg font-medium gap-5 sm:flex-row"
      >
        {/* Contact me button */}
        <Link
          onClick={handleClick("Contact")}
          className="hover:border-[0.1rem] hover:scale-110 focus:scale-110 active:scale-105 group ease-in-out transition-all duration-150 shadow-md delay-75 gap-2 py-3 border-[#fd7c6d] bg-gray-900 px-7 flex items-center rounded-full text-white text-center justify-center hover:text-[#fd7c6d]"
          href="#contact"
        >
          <span className="text-center text-white group-hover:text-white">
            Contact me here
          </span>
          <span className="transition group-hover:translate-x-1">💌</span>
        </Link>

        {/* CV Button */}
        <Link
          passHref
          target="_blank"
          className="hover:text-[#fd7c6d] hover:scale-110 group focus:scale-110 active:scale-105 text-center group ease-in-out transition-all duration-150 shadow-md delay-75 gap-2 py-3 hover:border-[0.1rem] border-[#fd7c6d] bg-slate-100 px-7 flex items-center justify-center rounded-full text-white dark:bg-opacity-30 dark:text-dark-text dark:hover:bg-opacity-30"
          href="/cv.pdf"
        >
          <span className="font-medium transition-all bg-none dark:bg-none text-center group-hover:text-slate-900 text-slate-900 dark:text-dark-text dark:group-hover:text-white">
            Download CV
          </span>
          <AiOutlineCloudDownload
            className={`opacity-80 group-hover:text-[#fd7c6d] text-[#0F172A] group-hover:translate-y-[0.10rem] transition dark:text-white`}
          />
        </Link>
      </motion.div>

      <motion.div
        transition={{ duration: 0.6 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="flex items-center justify-center mt-12 gap-x-2"
      >
        <h3 className="font-medium text-center dark:text-gray-200">
          Connect with me
        </h3>
        <PiShareNetworkDuotone className="dark:text-dark-text" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center justify-center px-4 mt-4 text-lg font-medium gap-2 sm:flex-row"
      >
        {/* LinkedIn Icon */}
        <Link
          className="group hover:text-[#fd7c6d] text-center hover:scale-110 focus:scale-110 active:scale-105 focus:border-light-primary active:border-light-primary outline-none group ease-in-out transition-all duration-150 shadow-md delay-75 gap-2 p-4 hover:border-[0.1rem] border-[#fd7c6d] bg-white flex items-center justify-center rounded-full text-white dark:bg-opacity-30 dark:group-hover:border-white"
          href="https://www.linkedin.com/in/rd09"
          target="_blank"
        >
          <TfiLinkedin className="text-gray-700 group-hover:text-gray-950 dark:text-white dark:group-hover:text-white " />
        </Link>

        {/* GitHub Icon */}
        <Link
          className="group hover:text-[#fd7c6d] text-center hover:scale-110 focus:scale-110 active:scale-105 focus:border-light-primary active:border-light-primary outline-none group ease-in-out transition-all duration-150 shadow-md delay-75 gap-2 p-4 hover:border-[0.1rem] border-[#fd7c6d] bg-white flex items-center justify-center rounded-full text-white dark:bg-opacity-30 dark:group-hover:border-white"
          href="https://github.com/Rafli-Dewanto"
          target="_blank"
        >
          <FaGithubAlt className="text-gray-700 group-hover:text-gray-950 dark:text-white dark:group-hover:text-white " />
        </Link>
      </motion.div>
    </section>
  );
}
