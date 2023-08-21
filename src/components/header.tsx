"use client";

import { AnimatePresence, motion } from "framer-motion";
import { links } from "@/lib/data";
import { useOnClickOutside } from "usehooks-ts";
import Link from "next/link";
import clsx from "clsx";
import { useActiveSection } from "@/hooks/use-active-section";
import useSectionInView from "@/hooks/use-section-in-view";
import { SectionName } from "@/utils/types/section-name";
import { useRef, useState } from "react";
import { FaBars } from "react-icons/fa";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { ref } = useSectionInView("Home");
  const burgerRef = useRef(null);
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSection();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useOnClickOutside(burgerRef, toggleMenu);

  function handleClick(sectionName: SectionName) {
    return () => {
      setActiveSection(sectionName);
      setTimeOfLastClick(Date.now());
    };
  }

  return (
    <header ref={ref} className="z-[999] relative dark:text-dark-text">
      <motion.div
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
        className="hidden fixed top-0 left-1/2 h-[4.5rem] w-full rounded-none border border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem] sm:w-[36rem] sm:rounded-full dark:bg-gray-950 dark:border-black/40 dark:bg-opacity-75 sm:block"
      />
      <nav className="hidden sm:flex fixed top-[0.15rem] left-1/2 h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0">
        <ul className="flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-gray-500 sm:w-[initial] sm:flex-nowrap sm:gap-5">
          {links.map((link) => (
            <motion.li
              transition={{ bounce: true, duration: 0.5 }}
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="relative flex items-center justify-center h-3/4"
              key={link.hash}
            >
              <Link
                onClick={handleClick(link.name)}
                className={clsx(
                  `flex w-full items-center justify-center px-3 py-3 hover:text-gray-950 transition dark:text-gray-100 dark:hover:text-gray-300`,
                  {
                    "text-gray-950 dark:text-gray-200":
                      activeSection === link.name,
                  },
                )}
                href={link.hash}
              >
                {link.name}
                {link.name === activeSection ? (
                  <motion.span
                    layoutId="activeSection"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    className="bg-light-primary/[0.3] rounded-full absolute inset-0 -z-10"
                  />
                ) : null}
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>

      {/* responsive */}
      <motion.nav
        ref={burgerRef}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="fixed top-6 left-6 sm:hidden bg-dark-bg bg-opacity-5 p-4 rounded-3xl backdrop-blur-[0.8rem]"
      >
        <div onClick={toggleMenu} className="p-2 cursor-pointer">
          <FaBars size={24} />
        </div>
        <AnimatePresence>
          {isMenuOpen && (
            <motion.ul
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="flex flex-col mt-2 gap-y-4"
            >
              {links.map((link) => (
                <motion.li
                  key={link.hash}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Link
                    href={link.hash}
                    onClick={() => {
                      handleClick(link.name);
                      toggleMenu();
                    }}
                  >
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>
      </motion.nav>
    </header>
  );
};

export default Header;
