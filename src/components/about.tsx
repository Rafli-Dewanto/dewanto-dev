"use client";
import React from "react";
import SectionHeading from "./section-heading";
import Link from "next/link";
import { motion } from "framer-motion";
import SectionContainer from "./section-container";

export default function About() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
    >
      <SectionContainer>
        <SectionHeading>About Me</SectionHeading>
        <p className="mb-4">
          I am an undergraduate Computer Science student in{" "}
          <Link
            target="_blank"
            href="https://gunadarma.ac.id/"
            className="font-bold hover:underline hover:text-[#5B3189] cursor-pointer transition-all"
          >
            Gunadarma University
          </Link>
          , who thrives on the love for learning and the ever-evolving world of
          technology.In a rapidly changing digital landscape, my fascination
          with both web and Android development has led me on a captivating
          voyage of discovery.
        </p>

        <p className="mb-4">
          The allure of crafting elegant and functional websites that seamlessly
          integrate with the user&apos;s experience, as well as the art of
          designing and building intuitive Android applications, has ignited a
          fire within me. With every line of code I write and every challenge I
          encounter, I am reminded of the limitless potential that technology
          holds and the impact it can have on shaping the future.
        </p>

        <p className="mb-4">
          <span className="italic">My favorite part of programming</span> is the
          problem-solving aspect. I <span className="underline">love</span> the
          feeling of finally figuring out a solution to a problem. My core stack
          is{" "}
          <span className="font-medium">
            <Link
              target="_blank"
              href="https://nextjs.org/"
              className="font-bold hover:underline hover:text-[#0C7BA1] cursor-pointer transition-all"
            >
              React/Next.js
            </Link>
            ,{" "}
            <Link
              target="_blank"
              href="https://nodejs.org/en"
              className="font-bold hover:underline hover:text-[#71BD50] cursor-pointer transition-all"
            >
              Node.js
            </Link>
          </span>
          . I am also familiar with{" "}
          <Link
            target="_blank"
            href="https://www.typescriptlang.org/"
            className="font-bold hover:underline hover:text-[#3078C6] cursor-pointer transition-all"
          >
            Typescript&nbsp;
          </Link>
          and&nbsp;
          <Link
            target="_blank"
            href="https://www.prisma.io/"
            className="font-bold hover:underline hover:text-[#5967D8] cursor-pointer transition-all"
          >
            Prisma&nbsp;
          </Link>
        </p>

        <p className="mb-4">
          In addition to my technical expertise, I also possess strong soft
          skills, including{" "}
          <span className="font-medium">
            discipline, hard work, critical thinking, team collaboration, and a
            strong willingness to learn new things
          </span>
          . . I am always looking to learn new technologies. I am currently
          looking for a <span className="font-medium">full-time position</span>{" "}
          as a software developer.
        </p>
      </SectionContainer>
    </motion.div>
  );
}
