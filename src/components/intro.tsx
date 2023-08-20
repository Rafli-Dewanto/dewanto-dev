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

export default function Intro() {
  return (
    <section id="home" className="flex flex-col items-center justify-center text-center scroll-mt-[100rem]">
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
        className="flex flex-col items-center justify-center gap-5 px-4 text-lg font-medium sm:flex-row"
      >
        {/* Contact me button */}
        <Link
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
          className="hover:text-[#fd7c6d] hover:scale-110 group focus:scale-110 active:scale-105 text-center group ease-in-out transition-all duration-150 shadow-md delay-75 gap-2 py-3 hover:border-[0.1rem] border-[#fd7c6d] bg-slate-100 px-7 flex items-center justify-center rounded-full text-white"
          href="/cv.pdf"
        >
          <span className="font-medium text-center group-hover:text-slate-900 text-slate-900">
            Download CV
          </span>
          <AiOutlineCloudDownload
            className={`opacity-80 group-hover:text-[#fd7c6d] text-[#0F172A] group-hover:translate-y-[0.10rem] transition`}
          />
        </Link>
      </motion.div>

      <div className="flex justify-center items-center mt-12 gap-x-2">
        <motion.h3
          transition={{ duration: 0.6 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="font-medium text-center"
        >
          Connect with me
        </motion.h3>
        <PiShareNetworkDuotone />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center justify-center gap-2 px-4 mt-4 text-lg font-medium sm:flex-row"
      >
        {/* LinkedIn Icon */}
        <Link
          className="group hover:text-[#fd7c6d] text-center hover:scale-110 focus:scale-110 active:scale-105 focus:border-light-primary active:border-light-primary outline-none group ease-in-out transition-all duration-150 shadow-md delay-75 gap-2 p-4 hover:border-[0.1rem] border-[#fd7c6d] bg-white flex items-center justify-center rounded-full text-white"
          href="https://www.linkedin.com/in/rd09"
          target="_blank"
        >
          <TfiLinkedin className="text-gray-700 group-hover:text-gray-950" />
        </Link>

        {/* GitHub Icon */}
        <Link
          target="_blank"
          href="https://github.com/Rafli-Dewanto"
          className="group hover:text-[#fd7c6d] text-center hover:scale-110 focus:scale-110 active:scale-105 focus:border-light-primary active:border-light-primary outline-none group ease-in-out transition-all duration-150 shadow-md delay-75 gap-2 p-4 hover:border-[0.1rem] border-[#fd7c6d] bg-white flex items-center justify-center rounded-full text-white"
        >
          <FaGithubAlt className="text-gray-700 group-hover:text-gray-950" />
        </Link>
      </motion.div>
    </section>
  );
}
