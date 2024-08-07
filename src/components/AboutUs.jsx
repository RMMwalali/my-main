"use client";

import React from 'react';
import Container from "@/components/Container";
import FadeIn, { FadeInStagger } from "./FadeIn";
import { motion } from "framer-motion";

const AboutUsSection = () => {
  return (
      <Container className="mt-16 px-4">
        <FadeIn faster>  
          <h2 className="font-display text-4xl p-4 sm:text-6xl font-medium tracking-tight text-black">
            Who Are We?
              </h2>
            </FadeIn>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-white text-black p-4 self-start sm:p-6 flex flex-col">
                  <FadeIn faster>
          <h3 className="mt-2 sm:mt-4 text-lg sm:text-xl text-justify text-black">
            We are a visionary NGO committed to enacting sustainable solutions and empowering young individuals to achieve financial stability. Our multifaceted projects address diverse challenges, ranging from education to entrepreneurship, aiming to create a positive and lasting impact on the community.
            </h3></FadeIn>
            <p className="mt-4 sm:mt-6 text-lg font-semibold font-display sm:text-s text-justify text-black"> Join Greater Kenya, and become an integral part of these initiatives, contributing to the transformation of lives and communities.</p>
                  </div>
                  
        <div className="bg-black text-gray-200 p-4 sm:p-6 shadow-md flex flex-col">
          <h2 className="text-center sm:text-left font-display text-xl mb-2 sm:mb-4 font-semibold tracking-wider text-gray-200">
            Over
          </h2>
          <FadeIn className="flex items-center gap-x-4 sm:gap-x-8">
            <h2 className="font-display text-left text-4xl sm:text-6xl font-medium tracking-tight text-green-500">
              KSH 1,000,000
            </h2>
          </FadeIn>
          <h2 className="text-center sm:text-left font-display text-xl mt-2 sm:mt-4 mb-2 sm:mb-4 font-semibold tracking-wider text-gray-200">
            pledged to help children in need through the tree planting project.
          </h2>
          <motion.div layout className="mt-4 sm:mt-5 flex items-center justify-center sm:justify-start gap-3">
            <button
              className="w-fit border border-[#ffffff8f] px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-[15px] font-semibold text-white transition duration-300 ease-in-out hover:bg-green-500 hover:text-white"
            >
              LEARN MORE
            </button>
          </motion.div>
        </div>
              </div>
    </Container>
  );
};

export default AboutUsSection;
