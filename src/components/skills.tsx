"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { skillsData } from "@/lib/data";
import useSectionInView from "@/hooks/use-section-in-view";
import { motion, useScroll } from "framer-motion";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (idx: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * idx,
    },
  }),
};

export default function Skills() {
  const { ref } = useSectionInView("Skills");

  return (
    <section
      id="skills"
      className="scroll-mt-28 mb-28 max-w-[36rem] sm:mb-40 text-center"
      ref={ref}
    >
      <SectionHeading>My Skills</SectionHeading>
      <ul className="flex flex-wrap gap-4 justify-center items-center">
        {skillsData.map((skill, idx) => (
          <motion.li
            initial={"initial"}
            whileInView={"animate"}
            viewport={{
              once: true,
            }}
            variants={fadeInAnimationVariants}
            custom={idx}
            className="border text-lg text-gray-500 border-black/[0.1] bg-white rounded-full px-5 py-3"
            key={idx}
          >
            {skill}
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
