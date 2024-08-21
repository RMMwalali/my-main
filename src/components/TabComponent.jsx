"use client"
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import cn from "classnames";
import TabContent from "./TabContent"; // Ensure proper import of TabContent

const TabComponent = ({ tabs, defaultIndex = 0 }) => {
  const [activeTabIndex, setActiveTabIndex] = useState(defaultIndex);

  const onTabClick = (index) => {
    setActiveTabIndex(index);
  };

  useEffect(() => {
    document.documentElement.style.setProperty(
      "--active-color",
      tabs[activeTabIndex].color
    );
  }, [activeTabIndex, tabs]);

  useEffect(() => {
    const tabFromHash = tabs.findIndex(
      (tab) => `#${tab.id}` === window.location.hash
    );
    setActiveTabIndex(tabFromHash !== -1 ? tabFromHash : defaultIndex);
  }, [tabs, defaultIndex]);

  const tabVariant = {
    active: {
      width: "55%",
      transition: {
        type: "tween",
        duration: 0.4,
      },
    },
    inactive: {
      width: "15%",
      transition: {
        type: "tween",
        duration: 0.4,
      },
    },
  };

  const tabTextVariant = {
    active: {
      opacity: 1,
      x: 0,
      display: "block",
      transition: {
        type: "tween",
        duration: 0.3,
        delay: 0.3,
      },
    },
    inactive: {
      opacity: 0,
      x: -30,
      transition: {
        type: "tween",
        duration: 0.3,
        delay: 0.1,
      },
      transitionEnd: { display: "none" },
    },
  };

  return (
    <div className="tabs-component">
      <ul className="tab-links font-display" role="tablist">
        {tabs.map((tab, index) => (
          <motion.li
            key={tab.id}
            className={cn("tab", { active: activeTabIndex === index })}
            role="presentation"
            variants={tabVariant}
            animate={activeTabIndex === index ? "active" : "inactive"}
          >
            <a onClick={() => onTabClick(index)}>
              {tab.icon}
              <motion.span className="text-sm sm:text-lg" variants={tabTextVariant}>{tab.title}</motion.span>
            </a>
          </motion.li>
        ))}
      </ul>
      {tabs.map((tab, index) => (
        <TabContent
          key={tab.id}
          id={`${tab.id}-content`}
          active={activeTabIndex === index}
          destinations={tab.destinations}
        />
      ))}
    </div>
  );
};

export default TabComponent;
