"use client";
import React from "react";
import { HeroParallax } from "@/components/ui/hero-parallax";

// Products for HeroParallax
const products = [
  {
    title: "Web Development",
    link: "https://devkinesis.com",
    thumbnail: "/assets/web.jpg",
  },
  {
    title: "App Development",
    link: "https://devkinesis.com",
    thumbnail: "/assets/MAD.jpg",
  },
  {
    title: "UI/UX Design",
    link: "https://devkinesis.com",
    thumbnail: "/assets/UIUX.jpg",
  },
  {
    title: "IOT Services",
    link: "https://devkinesis.com",
    thumbnail: "/assets/iot.jpg",
  },
  {
    title: "WordPress Websites",
    link: "https://devkinesis.com",
    thumbnail: "/assets/wordpress.jpg",
  },
  {
    title: "Content Writing",
    link: "https://devkinesis.com",
    thumbnail: "/assets/content.jpg",
  },
  {
    title: "Digital Marketing",
    link: "https://devkinesis.com",
    thumbnail: "/assets/cloudcomputing.jpg",
  },
  {
    title: "Graphic Designing",
    link: "https://devkinesis.com",
    thumbnail: "/assets/graphicdesigning.jpg",
  },
  {
    title: "API Development",
    link: "https://devkinesis.com",
    thumbnail: "/assets/webdev1.jpg",
  },
];

export default function Heroparallax() {
  return <HeroParallax products={products} />;
}
