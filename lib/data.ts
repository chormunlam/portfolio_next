import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import cat from "@/public/catAdopt.png";
import onlyfan from "@/public/onlyFans.png";
import wordCount from "@/public/textParser.jpg";


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
    title: "Graduated from Queens College",
    location: "New York, NY",
    description:
      "Graduated with a major in computer science in June 2023. Gained skills in HTML, CSS, JavaScript, React, and continued learning data analysis, AI, Cloud Computing, and other new technologies.",
    icon: React.createElement(LuGraduationCap),
    date: "June 2023",
  },
  {
    title: "Intern",
    location: "New York, NY",
    description:
      "Currently working as an intern, focusing on hands-on experience to understand real-world applications. Committed to learning and preparing for a full-time position, particularly in debugging projects.",
  
    icon: React.createElement(FaReact ),
    date: "Present",
  },
  {
    title: "Part-time Associate at Queens College Tech Incubator",
    location: "New York, NY",
    description:
      "Developed and maintained WordPress websites using Woo-commerce and Elementor. Collaborated on a Chatbot project using JavaScript and managed Google Forms for client information. Represented the Tech Incubator at events, creating networking opportunities.",
      icon: React.createElement(CgWorkAlt),
    date: "10/01/2022 - Present",
  },
] as const;


export const projectsData = [
  {
    title: "Word Analytics",
    description:
      "my first web app for analytics on url. It shows word count with url, and start and end",
    tags: ["html", "css", "mySQL", "php"],
    imageUrl: wordCount,
  },
  {
    title: "Cat Adoption",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["React", "JavaScript", "supabase backend", "Styled component"],
    imageUrl: cat,
  },
  {
    title: "onlyFan Clone",
    description:
      "allow to do the translation using voice input, with user friendly UI.",
    tags: ["React native", "AWS amplify"],
    imageUrl: onlyfan,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Next.js",
  "AWS",
  "Git",
  "Tailwind",
  "Supabase",
  "styled component",
  'Php',
  "MySQL",
  "Python",
  "Framer Motion",
] as const;
