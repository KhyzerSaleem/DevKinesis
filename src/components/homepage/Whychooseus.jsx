"use client";
import React from "react";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import Particles from "@/components/ui/particles";
import { HoverEffect } from "@/components/ui/card-hover-effect";

export default function Whychooseus() {
  const { resolvedTheme } = useTheme();
  const [color, setColor] = useState("#ffffff");
  useEffect(() => {
    setColor(resolvedTheme === "dark" ? "#ffffff" : "#000000");
  }, [resolvedTheme]);
  return (
    <div className="relative flex xl:h-[700px] lg:h-[700px] md:h-[900px] sm:h-[88rem] xs:h-[95rem] w-full flex-col items-center  overflow-hidden bg-background md:shadow-xl">
      <div className="mt-10">
      <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-black bg-clip-text text-center xl:text-5xl lg:text-5xl md:text-4xl sm:text-3xl xs:text-2xl font-semibold leading-none text-transparent dark:from-white dark:to-white">

          Why Choose Dev Kinesis?
        </span>
      </div>

      <div className="max-w-5xl mx-auto px-8">
        <HoverEffect items={projects} />
      </div>

      <Particles
        className="absolute inset-0"
        quantity={100}
        ease={80}
        color={color}
        refresh
      />
    </div>
  );
}

export const projects = [
  {
    title: "Expertise",
    description:
      "At Dev Kinesis, we bring a wealth of knowledge and technical expertise to every project.",
    link: "https://devkinesis.com/contact",
  },
  {
    title: "Client-Centric Approach",
    description:
      "Your vision is our priority. We deeply understand your goals, ensuring that every solution we build aligns with your objectives and exceeds expectations.",
    link: "https://devkinesis.com/contact",
  },
  {
    title: "Results-Driven Solutions",
    description:
      "We focus on delivering measurable outcomes. Whether it's improving efficiency, increasing revenue, or enhancing user experience, our solutions are designed to make an impact.",
    link: "https://devkinesis.com/contact",
  },
  {
    title: "Collaborative Partnership",
    description:
      "We believe in working together. Our team collaborates closely with you, fostering a transparent and inclusive process to bring your ideas to life.",
    link: "https://devkinesis.com/contact",
  },
  {
    title: "Unwavering Support",
    description:
      "Our commitment doesn’t end with project delivery. We provide ongoing support and maintenance, ensuring that your systems remain efficient and up-to-date.",
    link: "https://devkinesis.com/contact",
  },
  {
    title: "Innovation at Heart",
    description:
      "Dev Kinesis thrives on innovation. We integrate the latest trends and technologies to ensure your projects stand out and stay ahead of the curve.",
    link: "https://devkinesis.com/contact",
  },
];
