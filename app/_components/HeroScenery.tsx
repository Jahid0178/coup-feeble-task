"use client";

import React from "react";
import Image from "next/image";
import { motion } from "motion/react";
import Bird from "./Bird";

const HeroScenery = () => {
  return (
    <motion.div
      initial={{ y: "100%", opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1.5, ease: "circOut" }}
      className="absolute bottom-0 left-0 w-full h-full pointer-events-none select-none z-0"
    >
      <div className="relative w-full h-full">
        <div className="absolute bottom-0 left-0 w-full h-auto z-40">
          <Image
            src="/shape/shape-1.png"
            alt="shape"
            width={7675}
            height={1128}
            className="w-full h-auto object-cover opacity-10"
            priority
          />
        </div>
        <div className="absolute bottom-0 left-0 w-full h-auto z-30 opacity-80 scale-110 origin-bottom">
          <Image
            src="/shape/shape-2.png"
            alt="shape"
            width={7675}
            height={1128}
            className="w-full h-auto object-cover opacity-10"
            priority
          />
        </div>
        <div className="absolute bottom-0 left-0 w-full h-auto z-20">
          <Image
            src="/shape/shape-3.png"
            alt="shape"
            width={7675}
            height={1128}
            className="w-full h-auto object-cover opacity-15"
            priority
          />
        </div>
        <div className="absolute bottom-[-10%] left-0 w-full h-auto z-10">
          <Image
            src="/shape/shape-4.png"
            alt="shape"
            width={7675}
            height={1128}
            className="w-full h-auto object-cover opacity-10"
            priority
          />
        </div>

        <div
          className="absolute inset-0 pointer-events-none"
          style={{ animationDelay: "0.4s" }}
        >
          <Bird
            className="top-[25%] left-[15%] w-8"
            variant="5"
          />

          <Bird
            className="hidden lg:block top-[35%] left-[25%] w-8"
            variant="5"
          />

          <Bird
            className="hidden lg:block top-[38%] right-[25%] w-6"
            variant="5"
          />

          <Bird
            className="top-[50%] right-[20%] w-6"
            variant="5"
          />

          <Bird
            className="bottom-[5%] left-[20%] z-20"
            withBubble
            variant="1"
            bubbleClassName="top-12 left-15"
          />

          <Bird
            className="hidden lg:block bottom-[10%] left-[34%] z-20"
            withBubble
            variant="2"
            bubbleClassName="top-5 left-12"
          />

          <Bird
            className="hidden lg:block bottom-[10%] right-[30%] z-20"
            withBubble
            variant="3"
          />

          <Bird
            className="hidden md:block bottom-[10%] right-[15%] z-20"
            withBubble
            variant="4"
            bubbleClassName="top-5 left-20"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default HeroScenery;
