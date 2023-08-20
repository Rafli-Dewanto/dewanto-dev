import React from "react";

export default function SectionHeading({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <h2 className="text-3xl mb-8 font-medium capitalize text-center">
      {children}
    </h2>
  );
}
