"use client";

import { cn } from "@/lib/utils";
import Technologies from "@/components/homepage/technologies";
import Heroslider from "@/components/homepage/heroSlider";
import Heroparallax from "@/components/homepage/Heroparallax";
import WhyChooseUs from "@/components/homepage/Whychooseus";
import { Servicescard } from "@/components/homepage/applecard";

export default function Hero() {
  return (
    <>
      <Heroslider />
      <Heroparallax />
      <Technologies />
      <Servicescard />
      <WhyChooseUs />
    </>
  );
}
