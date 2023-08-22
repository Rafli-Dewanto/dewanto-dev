import Header from "@/components/header";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "react-hot-toast";
import Footer from "@/components/footer";
import ThemeSwitch from "@/components/theme-switch";
import AppContextProviders from "@/context/app.context";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "dewanto.dev",
  description: "Rafli Dewanto Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${inter.className} bg-gray-50 text-gray-950 relative pt-28 sm:pt-36 dark:bg-[#362424]`}
      >
        <div className="bg-[#fd7c6d] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem]" />
        <div className="bg-[#fee4be] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]" />
        <AppContextProviders>
          <Header />
          {children}
          <Toaster position="bottom-right" />
          <Footer />
          <ThemeSwitch />
        </AppContextProviders>
      </body>
    </html>
  );
}
