import React, { RefObject } from "react";

export default function SectionContainer({
  children,
}: {
  children: React.ReactNode,
}) {
  return (
    <section className="max-w-[45rem] mt-28  mb-28 sm:mb-14 w-full text-center leading-8">
      {children}
    </section>
  );
}
