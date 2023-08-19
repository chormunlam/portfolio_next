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
       Since graduating with a degree in{" "}
        <span className="font-medium">Computer Science</span>,  I'm not just
        working with code; I'm engaging with the future, learning every day, and
        loving every moment of this exciting field.
      </p>
    </motion.section>
  );
}
