"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const TabContent = ({ destinations, id, active }) => {
  const tabContentVariant = {
    active: {
      display: "block",
      transition: {
        staggerChildren: 0.2,
      },
    },
    inactive: {
      display: "none",
    },
  };

  const cardVariant = {
    active: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
    inactive: {
      opacity: 0,
      y: 10,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <motion.div
      role="tabpanel"
      id={id}
      className="tab-content"
      variants={tabContentVariant}
      animate={active ? "active" : "inactive"}
      initial="inactive"
    >
      <div
        className="cards-container"
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "16px",
          maxWidth: "100%",
          margin: "0 auto",
        }}
      >
        {destinations.map((destination, index) => (
          <motion.div
            key={index}
            className="card"
            variants={cardVariant}
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              backgroundColor: "#fff",
              padding: "16px",
              maxWidth: "100%",
              width: "100%",
              marginBottom: "16px",
            }}
          >
            <div className="flex flex-col sm:flex-row sm:items-left sm:gap-8">
              <div className="info flex flex-col justify-center items-start flex-1 mb-4 sm:mb-0">
                <h2 className="font-display text-2xl sm:text-4xl font-semibold mb-2 sm:mb-4">
                  {`${destination.name}`}
                </h2>
                <ul className="list-none p-0 m-0">
                  {destination.items.map((item, i) => (
                    <li key={i} className="mb-2 grayscale text-left sm:grayscale">✅ {item}</li>
                  ))}
                </ul>
                <motion.div layout className="mt-4 sm:mt-5 flex items-center justify-center sm:justify-start gap-3">
                  <button className="w-fit border-2 border-black px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-[15px] font-semibold text-black transition duration-300 ease-in-out">
                    LEARN MORE
                  </button>
                </motion.div>
              </div>
              <Image
                src={destination.image}
                alt={`View of ${destination.name}`}
                width={450}
                height={400}
                className="rounded-md sm:ml-2 mb-4"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default TabContent;
