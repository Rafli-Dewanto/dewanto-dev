import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { BsPersonWorkspace } from "react-icons/bs";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Laboratory Assistant, Lembaga Pengembangan Universitas Gunadarma",
    location: "Depok",
    description:
      "I work as laboratory assistant at my university to manage SAP software course and also help students who took Computer Network Technician schema held by BNSP for their exam by teaching them basic networking and ip addressing and as an IT support as well",
    icon: React.createElement(BsPersonWorkspace),
    date: "June 2023 - present",
  },
  {
    title: "Lead Back-End Developer, Neotic.id",
    location: "remote",
    description:
      "As a server-side API developer, I used Node.js and Express to build the company website. I also led a team of developers, coordinating tasks, conducting code reviews, and fostering a culture of collaboration and learning.",
    icon: React.createElement(CgWorkAlt),
    date: "March 2023 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Glow On",
    description:
      "Designing UI/UX Skincare E-Commerce Mobile App",
    tags: ["Figma", "Photoshop"],
    imageUrl: "/project-figma.JPG",
    url: "https://www.figma.com/proto/AnVOmrMNb7hEtFHQuivfaC/glow-on?type=design&node-id=699-1743&t=WI1hct9Cyv7byNRw-0&scaling=scale-down&page-id=0%3A1&starting-point-node-id=699%3A1730&show-proto-sidebar=1"
  },
  {
    title: "VSGA Android App",
    description: "Redesigned & adding new feature to an existing android app as a college group assignment to help us learn android and OOP concept",
    tags: ["Java", "xml", "Mobile App Design", "lottie-android", "OOP"],
    imageUrl: "/vsga-app.JPG",
    url: "https://github.com/Rafli-Dewanto/project-android-pbo"
  },
  {
    title: "FlixTix",
    description:
      "A Movie Booking App.",
    tags: ["React", "Framer motion", "Jotai"],
    imageUrl: "/flixtix.JPG",
    url: "https://github.com/Rafli-Dewanto/FlixTix"
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Go",
  "Java",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Express",
  "MySQL",
  "PostgreSQL",
  "Python",
  "Framer Motion",
] as const;
