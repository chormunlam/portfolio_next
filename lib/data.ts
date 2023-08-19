import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact, FaWordpress } from "react-icons/fa";

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
      icon: React.createElement(FaWordpress),
    date: "10/01/2022 - Present",
  },
  {
    title: "Graduated from Queens College",
    location: "New York, NY",
    description:
      "Graduated with a major in computer science in June 2023. Gained skills in Problem solving, and continued learning HTML, CSS, JavaScript, React, data analysis, AI, Cloud Computing, and other new technologies.",
    icon: React.createElement(LuGraduationCap),
    date: "June 2023",
  },
] as const;


export const projectsData = [
  {
    title: "Word Parser",
    description:
      "my first web app for analytics on url. It shows word count with url, and start and end",
    tags: ["html", "css", "mySQL", "php"],
    imageUrl: wordCount,
  },
  {
    title: "Cat Adoption Website",
    description:
      "this is the website for member to log in and add cat, it will reender on the home page, has features like filtering, sorting and pagination.",
    tags: ["React", "JavaScript", "supabase backend", "Styled component"],
    imageUrl: cat,
  },
  {
    title: "onlyFan Clone",
    description:
      "mobile subsciption member app allow to render user card, post image and messge. Authenation using the AWS amplify",
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
