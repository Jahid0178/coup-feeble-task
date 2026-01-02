import React from "react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FaApple } from "react-icons/fa";
import Bird from "./Bird";

const HeroSection = () => {
  return (
    <section className="bg-radial-[at_0%_0%] from-white to-primary/10 to-20% h-dvh flex flex-col relative overflow-hidden">
      <div className="container h-full flex flex-col gap-4 justify-center items-center z-10 relative">
        <div className="max-w-[736px] flex flex-col items-center gap-12 md:absolute md:top-50">
          <div className="text-center">
            <Badge
              variant={"outline"}
              className="text-base bg-white text-primary px-2 py-1 flex items-center gap-2 mx-auto"
            >
              <Image
                src="/svg/imessage-icon.svg"
                alt="iMessage"
                width={32}
                height={17}
              />
              #1 iMessage Automation Tool
            </Badge>
            <h1 className="text-5xl md:text-[64px] font-bold my-6">
              <span className="text-primary">iMessage</span> Automation for
              Teams and AI Workflows.
            </h1>
            <p className="text-base md:text-lg font-normal max-w-[586px] w-full mx-auto">
              Coup lets you, your team, or AI workflows send iMessages directly
              from your phone number, running securely on your Mac or Mac Mini.{" "}
            </p>
          </div>
          <div className="flex flex-col md:flex-row gap-3">
            <Button className="h-[46px] px-5 py-3 text-lg font-medium rounded-4xl">
              Get Started
            </Button>
            <Button
              variant={"outline"}
              className="h-[46px] px-5 py-3 text-lg font-medium rounded-4xl bg-transparent border-gray-500"
            >
              <span className="border-r border-gray-500/50 pr-2">
                <FaApple
                  size={25}
                  style={{ width: "25px", height: "25px" }}
                />
              </span>
              Download the Mac app
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 text-gray-800">
        <span className="text-lg font-medium">Scroll to learn more</span>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="animate-bounce"
        >
          <path d="M12 5v14M19 12l-7 7-7-7" />
        </svg>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-full pointer-events-none select-none z-0">
        <div className="relative w-full h-full">
          {/* Cloud effects */}
          <div className="absolute bottom-0 left-0 w-full h-auto z-40">
            <Image
              src="/shape/shape-1.png"
              alt="hero-image"
              width={7675}
              height={1128}
              className="w-full h-auto object-cover opacity-15"
              priority
            />
          </div>

          <div className="absolute bottom-0 left-0 w-full h-auto z-30 opacity-80 scale-110 origin-bottom">
            <Image
              src="/shape/shape-2.png"
              alt="hero-image"
              width={7675}
              height={1128}
              className="w-full h-auto object-cover opacity-20"
              priority
            />
          </div>

          <div className="absolute bottom-0 left-0 w-full h-auto z-20">
            <Image
              src="/shape/shape-3.png"
              alt="hero-image"
              width={7675}
              height={1128}
              className="w-full h-auto object-cover opacity-20"
              priority
            />
          </div>

          <div className="absolute bottom-[-10%] left-0 w-full h-auto z-10">
            <Image
              src="/shape/shape-4.png"
              alt="hero-image"
              width={7675}
              height={1128}
              className="w-full h-auto object-cover opacity-20"
              priority
            />
          </div>
        </div>
      </div>

      {/* Birds */}
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
        className="bottom-[5%] left-[20%] md:bottom-[10%] md:left-[20%] z-20"
        withBubble
        variant="1"
        bubbleClassName="top-12 left-16"
      />

      <Bird
        className="hidden lg:block bottom-[10%] left-[70%] lg:bottom-[15%] lg:left-[40%] z-20"
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
        className="hidden md:block bottom-[10%] right-[15%] lg:bottom-[20%] lg:right-[15%] z-20"
        withBubble
        variant="4"
        bubbleClassName="top-6 left-20"
      />
    </section>
  );
};

export default HeroSection;
