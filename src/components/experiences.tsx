"use client";

import useSectionInView from "@/hooks/use-section-in-view";
import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SectionHeading from "./section-heading";
import { experiencesData } from "@/lib/data";
import useTheme from "@/hooks/use-theme";

export default function Experiences() {
  const { ref } = useSectionInView("Experience");
  const { theme }  = useTheme()
  return (
    <section className="scroll-mt-28 mb-28 sm:mb-40" id="experience" ref={ref}>
      <SectionHeading>My Experiences</SectionHeading>
      <VerticalTimeline lineColor="rgba(253, 124, 109, 0.4)">
        {experiencesData.map((exp, idx) => (
          <React.Fragment key={idx}>
            <VerticalTimelineElement
              contentStyle={{
                backgroundColor: theme === 'light' ? "rgb(250, 242, 242)" : "rgba(253, 124, 109, 0.4)",
                boxShadow: "none",
                border: "1px solid rgba(0, 0, 0, 0.01)",
                textAlign: "left",
                padding: "1.3rem 2rem",
                color: theme === 'light' ? '#000' : "#fff"
              }}
              contentArrowStyle={{
                borderRight: "0.4rem solid #f2dcdc",
              }}
              date={exp.date}
              icon={exp.icon}
              iconStyle={{
                background: "white",
                fontSize: "1.5rem",
              }}
            >
              <h3 className="font-semibold capitalize">{exp.title}</h3>
              <p className="font-normal !mt-0">{exp.location}</p>
              <p className="!mt-4 !font-normal text-gray-700 dark:text-dark-text/80">
                {exp.description}
              </p>
            </VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline>
    </section>
  );
}
