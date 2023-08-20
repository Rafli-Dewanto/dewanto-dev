"use client";

import { motion, useInView } from "framer-motion";
import { links } from "@/lib/data";
import Link from "next/link";
import clsx from 'clsx'
import { useRef } from "react";
import { useActiveSection } from "@/hooks/use-active-section";

const Header = () => {
  const { activeSection, setActiveSection } = useActiveSection()
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref)

  if (isInView) setActiveSection("Home")

  return (
    <header ref={ref} className="z-[999] relative">
      <motion.div
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
        className="fixed left-1/2 transform h-[4.5rem] w-full border border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem] sm:w-[36rem] rounded-full"
      ></motion.div>
      <nav
        className="flex fixed top-[0.15rem] left-1/2 h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0"
      >
        <ul
          className="flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-gray-500 sm:w-[initial] sm:flex-nowrap sm:gap-5"
        >
          {links.map((link) => (
            <motion.li
              transition={{ bounce: true, duration: 0.5 }}
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="flex relative items-center justify-center h-3/4"
              key={link.hash}
            >
              <Link
                onClick={() => setActiveSection(link.name)}
                className={clsx(`flex items-center justify-center 
                w-full px-3 py-3 transition hover:text-gray-950`, {
                  "text-gray-950": activeSection === link.name
                })}
                href={link.hash}
              >
                {link.name}
                {
                  link.name === activeSection ? (
                    <motion.span
                      layoutId="activeSection"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      className="bg-light-primary/[0.3] rounded-full absolute inset-0 -z-10" />
                  ) : null
                }
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
