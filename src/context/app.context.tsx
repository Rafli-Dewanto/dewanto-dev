import React from 'react'
import ThemeContextProvider from './theme.context'
import ActiveSectionContextProvider from './active-section.context'

export default function AppContextProviders({ children }: { children: React.ReactNode }) {
    return (
        <ThemeContextProvider>
            <ActiveSectionContextProvider>
                {children}
            </ActiveSectionContextProvider>
        </ThemeContextProvider>
    )
}
