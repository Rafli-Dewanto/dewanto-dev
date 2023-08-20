'use client'
import React, { useRef } from "react";
import SectionHeading from "./section-heading";
import { projectsData } from "@/lib/data";
import Project from "./project";
import { useInView } from "framer-motion";
import { useActiveSection } from "@/hooks/use-active-section";

export default function Projects() {
  const { setActiveSection } = useActiveSection()
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref)

  if (isInView) setActiveSection("Projects")

  return (
    <section ref={ref} id="projects" className="mb-28 scroll-mt-28">
      <SectionHeading>My Projects</SectionHeading>
      <div>
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
