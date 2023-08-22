'use client'

import useTheme from "@/hooks/use-theme";
import React from "react";
import { BsMoon, BsSun } from "react-icons/bs";

export default function ThemeSwitch() {
  const { toggleTheme, theme } = useTheme()

  return (
    <button
      onClick={toggleTheme}
      className="fixed bottom-5 dark:border dark:border-white right-5 dark:bg-[#2c1c1a] bg-light-primary rounded-full h-[3rem] shadow-xl w-[3rem] backdrop-blur-[0.5rem] grid place-items-center text-slate-800 border border-white border-opacity-40 hover:scale-[1.15] transition-all"
    >
      {theme === "light" ? (
        <BsSun className="text-white bg-light-primary" />
      ) : (
        <BsMoon className="dark:bg-[#2c1c1a] text-white" />
      )}
    </button>
  );
}
