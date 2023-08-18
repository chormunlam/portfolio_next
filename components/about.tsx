"use client";

import { motion } from "framer-motion";
import React from "react";
import SectionHeading from "./section-heading";
import { useInView } from "react-intersection-observer";
import {useEffect} from 'react'
import {
  ActiveSectionContext,
  useActiveSectionContext,
} from "@/context/active-section-context";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  
   const {ref}= useSectionInView("About", 0.5);

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        I've always been drawn to the endless possibilities of technology. Since
        graduating with a degree in{" "}
        <span className="font-medium">Computer Science</span>, my journey has
        taken me from coding with <span className="font-medium">HTML</span>,
        <span className="font-medium">CSS</span>, and{" "}
        <span className="font-medium">JavaScript </span>
        to exploring <span className="font-medium">React </span>
        and diving into <span className="font-medium">AI </span>
        and <span className="font-medium">Cloud Computing</span>. I'm not just
        working with code; I'm engaging with the future, learning every day, and
        loving every moment of this exciting field.
      </p>
    </motion.section>
  );
}
