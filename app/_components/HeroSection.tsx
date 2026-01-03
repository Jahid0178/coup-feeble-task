import React from "react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FaApple } from "react-icons/fa";
import AnimationBirds from "./AnimationBirds";
import HeroScenery from "./HeroScenery";

const HeroSection = () => {
  return (
    <section className="bg-radial-[at_0%_0%] from-white to-primary/10 to-20% h-dvh flex flex-col relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none z-30">
        <AnimationBirds />
      </div>

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
              from your phone number, running securely on your Mac or Mac Mini.
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
                <FaApple size={25} />
              </span>
              Download the Mac app
            </Button>
          </div>
        </div>
      </div>

      <HeroScenery />

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
          className="animate-bounce"
        >
          <path d="M12 5v14M19 12l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
