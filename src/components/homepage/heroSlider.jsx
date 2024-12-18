"use Client";
import React from "react";
import { motion } from "framer-motion";
import ShimmerButton from "@/components/ui/shimmer-button";
import { CoolMode } from "@/components/ui/cool-mode";
import { ImagesSlider } from "@/components/ui/images-slider";

const images = ["/assets/web.jpg", "/assets/UIUX.jpg", "/assets/wordpress.jpg"];

export default function Heroslider() {

  const wordVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 1, transition: { duration: 0.1 } },
  };

  const headingWords = [
    "Excellent",
    "IT",
    "Solutions",
    "For",
    "Your",
    "Success",
  ];

  return (
    <ImagesSlider className="h-[40rem] max-w-full overflow-hidden " images={images}>
      <motion.div
        initial={{
          opacity: 0,
          y: -80,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.6,
        }}
        className="z-50 flex flex-col justify-center items-center max-w-full overflow-hidden"
      >
        <div className="w-full flex flex-wrap gap-3 lg:gap-4 justify-center sm:justify-start xs:gap-1 xs:justify-center md:justify-start sm:flex-nowrap">
          {headingWords.map((word, index) => (
            <motion.h1
              key={index}
              variants={wordVariants}
              className={`text-3xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl font-bold leading-tight ${
                word === "Solutions"
                  ? "text-green-500 dark:text-green-400"
                  : "text-white dark:text-white"
              }`}
            >
              {word}
            </motion.h1>
          ))}
        </div>
        <p className="text-center text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl leading-relaxed mt-4 px-6 text-white dark:text-white">
          Discover innovative solutions tailored for your success. <br />
        </p>
        <p className="text-center text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl mt-2 px-6 text-green-500 dark:text-green-400">
          Join a community driven by excellence and innovation.
        </p>
        <CoolMode>
          <ShimmerButton className="rounded-lg px-4 py-2 bg-green-600 dark:bg-green-600 mt-6">
            <span className="text-white">Join Us Now</span>
          </ShimmerButton>
        </CoolMode>
      </motion.div>
    </ImagesSlider>
  );
}

