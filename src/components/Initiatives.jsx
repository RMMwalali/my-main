"use client"

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Container from "./Container";
import FadeIn, { FadeInStagger } from "./FadeIn";

const initiatives = [
  {
    title: "A Seamless Education Payment System",
    subtitle: "A payment system that can be used in learning institutions for payment of essential services like school fees, pocket money, ...",
    description: "A payment system that can be used in learning institutions for payment of essential services like school fees, pocket money, school trips, extracurricular activities, and other related activities. The aim of the project is to solve the stress of conventional methods that are time-consuming, such as making trips to the bank, and to address transparency challenges. The system also allows direct communication between parents and institutions, as well as the direct transmission of results, thus providing real-time access to a learner's progress",
    color: "#f5cf1d", 
  },
  {
    title: "A Digital Waste Management System",
    subtitle: "A recycling plant that partners with existing waste collectors and customers to offer a digital reward system. The system uses ...",
    description: "A recycling plant that partners with existing waste collectors and customers to offer a digital reward system. The system uses scannable trash bags provided in pairs, for organic and inorganic waste. Customers earn points for their waste, which they can redeem for shopping. Waste is separated and recycled or reused, ensuring efficiency and promoting a more sustainable future.",
    color: "#f10983",
  },
  {
    title: "Sustainable Orphanages",
    subtitle: "Building greenhouses that provide produce for restaurants, which in turn sustain orphanages through their profits. This initiative...",
    description: "Building greenhouses that provide produce for restaurants, which in turn sustain orphanages through their profits. This initiative aims to ensure food security by supplying orphanages with healthy produce from the greenhouses and restaurants. Additionally, it creates job opportunities for people transitioning into adulthood from orphanages by employing them in the restaurants and greenhouses, and training them in lucrative skills to help them become independent.",
    color: "#3aefb6",
  },
  {
    title: "After School Program",
    subtitle: "A fun way to help learners gain lucrative skills and opportunities. Learners get to choose from a variety of fields and are then...",
    description: "A fun way to help learners gain lucrative skills and opportunities. Learners get to choose from a variety of fields and are then matched with professionals who teach them practical skills. Through apprenticeship, learners benefit by becoming more passionate and skillful in their chosen field, thus enhancing their chances of employment or job creation.",
    color: "#d042f8",
  },
  {
    title: "Developing Tree Conservation Zones",
    subtitle: "Partnering with donors and institutions like schools, orphanages, and religious places to create safe tree conservation zones. This...",
    description: "Partnering with donors and institutions like schools, orphanages, and religious places to create safe tree conservation zones. This is achieved by planting trees in these places and having them maintained by individuals or groups from the institutions to ensure successful growth. The initiative creates a revenue source to fund education and the well-being of people in these institutions, in exchange for their care of the assigned trees, thus fostering a healthy, symbiotic relationship for a greener future.",
    color: "#2edbef",
  },
];

const Initiatives = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpansion = (index) => {
    setActiveIndex(isExpanded ? null : index);
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="mt-5 rounded-4xl bg-white py-20 sm:mt-15 sm:py-32 lg:mt-10">
      <Container>
        <FadeIn className="flex items-center gap-x-8">
          <h2 className="text-center font-display text-xl font-semibold tracking-wider text-black sm:text-left">
            Several of our Amazing Projects
          </h2>
          <div className="h-px flex-auto bg-neutral-800" />
        </FadeIn>
        <ul
          role="list"
          className="mt-10 grid grid-cols-1 gap-y-10 lg:grid-cols-2 xl:grid-cols-3"
        >
          {initiatives.map((initiative, index) => (
            <li key={initiative.title} className="cursor-pointer">
              <motion.div
                layout
                initial={{ scale: 0.95 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.3 }}
                className="p-4 rounded-lg shadow-md bg-white border-2 border-black m-2 hover:shadow-lg transition-shadow duration-300 ease-in-out"
              >
                <h3 className="font-display text-2xl font-semibold underline underline-offset-8" style={{ color: initiative.color }}>
                  {initiative.title}
                </h3>
                <motion.p
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
                  className="text-xl pt-4 leading-loose text-black cursor-pointer"
                  onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                >
                  {activeIndex === index ? initiative.description : initiative.subtitle}
                </motion.p>
              </motion.div>
            </li>
          ))}
        </ul>
      </Container>
    </div>
  );
};

export default Initiatives;
