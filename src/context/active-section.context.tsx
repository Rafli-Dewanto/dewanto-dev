'use client'
import { links } from '@/lib/data';
import React, { useState, createContext, useContext } from 'react'

type SectionName = typeof links[number]['name']

type ActiveSectionContextType = {
    activeSection: SectionName,
    setActiveSection: React.Dispatch<React.SetStateAction<SectionName>>
}

export const ActiveSectionContext = createContext<ActiveSectionContextType | null>(null);

export default function ActiveSectionContextProvider({
    children
}: {
    children: React.ReactNode
}) {
    const [activeSection, setActiveSection] = useState<SectionName>("Home");
    return (
        <ActiveSectionContext.Provider
            value={{
                activeSection,
                setActiveSection
            }}
        >
            {children}
        </ActiveSectionContext.Provider>
    )
}
