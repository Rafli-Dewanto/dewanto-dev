'use client'

import type { Theme } from '@/utils/types/theme';
import React, { createContext, useEffect, useState } from 'react'

type ThemeContextType = {
    theme: Theme,
    toggleTheme: () => void,
}

export const ThemeContext = createContext<ThemeContextType | null>(null)

export default function ThemeContextProvider({ children }: { children: React.ReactNode }) {
    const [theme, setTheme] = useState<Theme>("light");

    useEffect(() => {
        const localTheme = window.localStorage.getItem("theme") as Theme | null;
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
        <ThemeContext.Provider value={{
            theme,
            toggleTheme,
        }}>
            {children}
        </ThemeContext.Provider>
    )
}
