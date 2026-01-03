"use client";

import React from "react";
import { motion } from "motion/react";
import Bird from "./Bird";

const AnimationBirds = () => {
  return (
    <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden">
      {/* Bottom-Left to Top-Right */}
      <motion.div
        initial={{ x: "-10vw", y: "70vh", opacity: 0 }}
        animate={{ x: "100vw", y: "20vh", opacity: [1, 1, 1, 1] }}
        transition={{ duration: 5, ease: "easeInOut", delay: 1 }}
        className="absolute top-0 left-0"
      >
        <Bird
          className="w-max"
          variant="4"
          withBubble
          bubbleClassName="top-5 left-[71px]"
        />
      </motion.div>

      {/* Bottom-Right to Top-Left */}
      <motion.div
        initial={{ x: "100vw", y: "90vh", opacity: 0 }}
        animate={{ x: "-10vw", y: "20vh", opacity: [1, 1, 1, 1] }}
        transition={{ duration: 5, ease: "easeInOut", delay: 1 }}
        className="absolute top-0 left-0"
      >
        <Bird
          className="w-max -scale-x-100"
          variant="4"
          withBubble
          bubbleClassName="top-5 left-[71px]"
        />
      </motion.div>
    </div>
  );
};

export default AnimationBirds;
