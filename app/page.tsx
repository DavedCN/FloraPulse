'use client';

import About from "@/components/About";
import Display from "@/components/Display";
import Hero from "@/components/Hero";
import Installation from "@/components/Installation";
import LearnMore from "@/components/LearnMore";
import Sponsors from "@/components/Sponsors";
import Testimonials from "@/components/Testimonials";

import AOS from "aos";
import "aos/dist/aos.css";


import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <Hero />
      <Display />
      <About />
      <Installation />
      <Sponsors />
      <Testimonials />
      <LearnMore />
    </>
  );
}
