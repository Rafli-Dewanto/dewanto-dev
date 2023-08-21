import React from "react";

export default function SectionHeading({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <h2 className="mb-8 text-3xl font-medium text-center capitalize dark:text-gray-200">
      {children}
    </h2>
  );
}
