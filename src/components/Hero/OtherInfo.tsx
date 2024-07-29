import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

type Props = {
  data: any;
};

const item = {
  hidden: {
    y: "100%",
    transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.85 },
  },
  visible: {
    y: 0,
    transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.75 },
  },
};

function OtherInfo({ data }: Props) {
  // State to control the visibility of animated elements
  const [isReady, setIsReady] = useState(false);

  // Effect hook to simulate a delay or wait for some condition before showing animations
  useEffect(() => {
    // Simulate a delay or replace this with actual asynchronous operation completion check
    const timer = setTimeout(() => {
      setIsReady(true);
    }, 500); // Adjust delay as needed

    return () => clearTimeout(timer); // Cleanup on unmount
  }, []); // Empty dependency array means this effect runs once on mount

  // Conditionally render the animated content based on isReady state
  return (
    <motion.div initial="hidden" animate={isReady ? "visible" : "hidden"} className="flex flex-col">
      <AnimatedText
        className="spacing overflow-hidden text-lg font-display text-[#D5D5D6]"
        data={data?.location}
      />
      <AnimatedText
        className="my-1 text-3xl font-semibold md:my-3 md:text-7xl font-display md:leading-[100px]"
        data={data?.title}
      />
      <AnimatedText
        className="text-s text-[#D5D5D6] font-display"
        data={data?.description}
      />
    </motion.div>
  );
}

export default OtherInfo;

const AnimatedText = ({
  data,
  className,
}: {
  data?: string;
  className?: string;
}) => {
  return (
    <span
      style={{
        overflow: "hidden",
        display: "inline-block",
      }}
    >
      <motion.p className={` ${className}`} variants={item}>
        {data}
      </motion.p>
    </span>
  );
};
