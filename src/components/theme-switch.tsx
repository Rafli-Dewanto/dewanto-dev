"use client";

import type { theme } from "@/utils/types/theme";
import React, { useEffect, useState } from "react";
import { BsMoon, BsSun } from "react-icons/bs";

export default function ThemeSwitch() {
  const [theme, setTheme] = useState<theme>("light");

  useEffect(() => {
    const localTheme = window.localStorage.getItem("theme") as theme | null;
    if (localTheme) {
      setTheme(localTheme);
      if (localTheme === "dark") {
        document.documentElement.classList.add("dark");
      }
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
      document.documentElement.classList.add("dark");
    }
  }, []);

  function toggleTheme() {
    if (theme === "light") {
      setTheme("dark");
      window.localStorage.setItem("theme", "dark");
      document.documentElement.classList.add("dark");
    } else {
      setTheme("light");
      window.localStorage.setItem("theme", "light");
      document.documentElement.classList.remove("dark");
    }
  }

  return (
    <button
      onClick={toggleTheme}
      className="fixed bottom-5 right-5 dark:bg-[#2c1c1a] bg-light-primary rounded-full h-[3rem] shadow-xl w-[3rem] backdrop-blur-[0.5rem] grid place-items-center text-slate-800 border border-white dark:border-none border-opacity-40 hover:scale-[1.15] transition-all"
    >
      {theme === "light" ? (
        <BsSun className="text-white bg-light-primary" />
      ) : (
        <BsMoon className="dark:bg-[#2c1c1a] text-white" />
      )}
    </button>
  );
}
