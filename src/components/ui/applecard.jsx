"use client";
import Image from "next/image";
import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";

export function AppleCardsCarousel() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="w-full h-full py-20 xl:mt-[0px]  md:mt-[10rem] sm:mt-[18rem] xs:mt-[20rem]">
      <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl sm:text-5xl xs:text-4xl font-bold text-neutral-800 dark:text-neutral-200 text-center font-heading">
        Services
      </h2>
      <Carousel items={cards} />
    </div>
  );
}

const DummyContent = ({ text }) => {
  return (
    <>
      {[...new Array(1).fill(1)].map((_, index) => {
        return (
          <div
            key={"dummy-content" + index}
            className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
          >
            <span className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              <span className="font-bold  text-neutral-700 dark:text-neutral-200 inline-flex items-center justify-center text-center ">
                Transforming digital experiences at Dev Kinesis Software House
              </span>{" "}
              <br />
              <div className="mt-4 md:mt-8 text-center md:text-left  text-neutral-700 dark:text-neutral-200">
                <div className="max-w-3xl mx-auto">{text}</div>
              </div>
            </span>
            <Image
              src="/assets/macbook.png"
              alt="Macbook mockup"
              height="500"
              width="500"
              className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
            />
          </div>
        );
      })}
    </>
  );
};

const data = [
  {
    category: "Web Development",
    title: "Building web applications",
    src: "/assets/web.jpg",
    content: (
      <DummyContent
        text={
          <ul className="list-disc space-y-2 pl-4 md:pl-8">
            <li className="text-neutral-700 dark:text-neutral-200">
              Progressive Web Apps (PWAs): Developing app-like experiences using
              modern web technologies
            </li>
            <li className="text-neutral-700 dark:text-neutral-200">
              Artificial Intelligence Integration: Leveraging AI for enhanced
              user interactions and personalized experiences
            </li>
            <li className="text-neutral-700 dark:text-neutral-200">
              Serverless Architecture: Building scalable applications without
              managing servers
            </li>
            <li className="text-neutral-700 dark:text-neutral-200">
              Microservices: Creating modular, flexible, and maintainable
              systems
            </li>
            <li className="text-neutral-700 dark:text-neutral-200">
              Real-Time Web Applications: Implementing WebSocket-based real-time
              communication
            </li>
            <li className="text-neutral-700 dark:text-neutral-200">
              Single Page Applications (SPAs): Developing fast and interactive
              web interfaces{" "}
            </li>
            <li className="text-neutral-700 dark:text-neutral-200">
              Headless CMS: Utilizing decoupled content management systems for
              flexible content delivery{" "}
            </li>
            <li className="text-neutral-700 dark:text-neutral-200">
              PWA Builder: Leveraging tools like Lighthouse and Workbox for PWA
              development
            </li>
            <li className="text-neutral-700 dark:text-neutral-200">
              WebRTC: Implementing real-time communication features in web
              applications
            </li>
            <li className="text-neutral-700 dark:text-neutral-200">
              Service Workers: Enabling offline functionality and background
              sync capabilities
            </li>
          </ul>
        }
      />
    ),
  },
  {
    category: "Mobile Application Development",
    title: "Bringing ideas to life, one app at a time",
    src: "/assets/mad1.jpg",
    content: (
      <DummyContent
        text={
          <ul className="list-disc space-y-2 pl-4 md:pl-8">
            <li className="text-neutral-700 dark:text-neutral-200">
              Innovative Solutions: Crafting seamless digital experiences
              through cutting-edge mobile app development.
            </li>
            <li className="text-neutral-700 dark:text-neutral-200">
              User-Centric Approach: Designing intuitive interfaces that delight
              users and meet specific business needs.
            </li>
            <li className="text-neutral-700 dark:text-neutral-200">
              Cross-Platform Expertise: Developing high-quality apps for both
              iOS and Android platforms efficiently.
            </li>
            <li className="text-neutral-700 dark:text-neutral-200">
              Cutting-Edge Technology: Leveraging latest mobile development
              tools and frameworks to build robust apps.
            </li>
            <li className="text-neutral-700 dark:text-neutral-200">
              Custom-Tailored Solutions: Creating personalized mobile
              applications tailored to each client's unique vision.
            </li>
            <li className="text-neutral-700 dark:text-neutral-200">
              Performance Optimization: Building fast, efficient apps with
              optimal performance across devices.
            </li>
            <div className="grid grid-cols-2 gap-x-4 gap-y-2 ">
              <li className="text-neutral-700 dark:text-neutral-200">
                REACT NATIVE
              </li>
              <li className="text-neutral-700 dark:text-neutral-200">
                FLUTTER
              </li>
            </div>
          </ul>
        }
      />
    ),
  },
  {
    category: "UI/UX Design",
    title: "Crafting intuitive interfaces that delight users",
    src: "/assets/UIUX.jpg",
    content: (
      <DummyContent
        text={
          <ul className="list-disc space-y-2 pl-4 md:pl-8">
            <li className="text-neutral-700 dark:text-neutral-200">
              User-Centric Approach: Designing interfaces that prioritize user
              needs and preferences{" "}
            </li>
            <li className="text-neutral-700 dark:text-neutral-200">
              Intuitive Navigation: Creating seamless navigation flows for
              effortless user experience
            </li>
            <li className="text-neutral-700 dark:text-neutral-200">
              Visual Appeal: Developing aesthetically pleasing designs that
              enhance brand identity
            </li>
            <li className="text-neutral-700 dark:text-neutral-200">
              Accessibility: Ensuring designs are inclusive and accessible to
              all users
            </li>
            <li className="text-neutral-700 dark:text-neutral-200">
              Cross-Platform Consistency: Maintaining consistent UI across
              multiple devices and platforms
            </li>
            <li className="text-neutral-700 dark:text-neutral-200">
              Performance Optimization: Building fast, efficient apps with
              optimal performance across devices.
            </li>
          </ul>
        }
      />
    ),
  },
  {
    category: "IOT",
    title: "Buiding IOT Platforms.",
    src: "/assets/iot.jpg",
    content: (
      <DummyContent
        text={
          <ul className="list-disc space-y-2 pl-4 md:pl-8">
            <li className="text-neutral-700 dark:text-neutral-200">
              Dev Kinesis Software House specializes in designing and
              implementing robust IoT platforms and solutions
            </li>
            <li className="text-neutral-700 dark:text-neutral-200">
              Our team leverages cutting-edge technologies to create scalable,
              secure, and efficient IoT architectures
            </li>
            <li className="text-neutral-700 dark:text-neutral-200">
              We focus on building intelligent systems that can collect,
              process, and analyze vast amounts of data from connected devices
            </li>
            <li className="text-neutral-700 dark:text-neutral-200">
              Our expertise spans device connectivity, data ingestion,
              analytics, and application development for IoT
            </li>
          </ul>
        }
      />
    ),
  },
  {
    category: "WordPress",
    title:
      "Building powerful WordPress solutions for a seamless digital experience",
    src: "/assets/wp.jpg",
    content: (
      <DummyContent
        text={
          <ul className="list-disc space-y-2 pl-4 md:pl-8">
            <li className="text-neutral-700 dark:text-neutral-200">
              Performance Optimization: Leveraging cutting-edge infrastructure
              for fast-loading WordPress sites.
            </li>
            <li className="text-neutral-700 dark:text-neutral-200">
              Latest Technology Adoption: Quickly implementing new WordPress
              features and plugins.{" "}
            </li>
            <li className="text-neutral-700 dark:text-neutral-200">
              Custom Theme Development: Creating tailored themes that match
              client branding.
            </li>
            <li className="text-neutral-700 dark:text-neutral-200">
              Plugin Development: Crafting bespoke plugins to extend WordPress
              functionality.
            </li>
            <li className="text-neutral-700 dark:text-neutral-200">
              SEO-Friendly Designs: Implementing search engine optimized
              structures and content.
            </li>
            <li className="text-neutral-700 dark:text-neutral-200">
              Security Best Practices: Ensuring robust security measures for
              WordPress sites.
            </li>
            <li className="text-neutral-700 dark:text-neutral-200">
              Content Management System (CMS) Expertise: Efficiently managing
              content for various clients.
            </li>
            <li className="text-neutral-700 dark:text-neutral-200">
              Responsive Design: Developing mobile-friendly WordPress sites for
              all devices.
            </li>
            <li className="text-neutral-700 dark:text-neutral-200">
              E-commerce Solutions: Integrating WooCommerce and other e-commerce
              plugins.
            </li>
            <li className="text-neutral-700 dark:text-neutral-200">
              Backup and Recovery: Regular backups and quick recovery solutions
              for peace of mind.
            </li>
            <li className="text-neutral-700 dark:text-neutral-200">
              Performance Benchmarking: Continuous monitoring and optimization
              of site speed and performance.
            </li>
          </ul>
        }
      />
    ),
  },
  {
    category: "Graphic Designing",
    title: "Visualizing innovation, bringing ideas to life.",
    src: "/assets/graphicdesigning.jpg",
    content: (
      <DummyContent
        text={
          <ul className="list-disc space-y-2 pl-4 md:pl-8">
            <li className="text-neutral-700 dark:text-neutral-200">
              Creative Vision: Transforming concepts into stunning visual
              representations
            </li>
            <li className="text-neutral-700 dark:text-neutral-200">
              Brand Identity: Crafting compelling logos and brand materials
            </li>
            <li className="text-neutral-700 dark:text-neutral-200">
              User Interface Design: Creating intuitive and aesthetically
              pleasing UI elements
            </li>
            <li className="text-neutral-700 dark:text-neutral-200">
              Digital Artistry: Producing high-quality graphics for various
              digital platforms
            </li>
            <li className="text-neutral-700 dark:text-neutral-200">
              Print Design: Developing eye-catching materials for offline
              marketing
            </li>
            <li className="text-neutral-700 dark:text-neutral-200">
              Web Design: Designing responsive and visually appealing websites
            </li>
            <li className="text-neutral-700 dark:text-neutral-200">
              Illustration and Animation: Adding visual interest through custom
              illustrations and animations
            </li>
            <li className="text-neutral-700 dark:text-neutral-200">
              Color Theory Expertise: Selecting color schemes that evoke desired
              emotions and convey brand messages
            </li>
            
          </ul>
        }
      />
    ),
  },
  {
    category: "Digital Marketing",
    title: "Connecting technology with audiences, driving innovation",
    src: "/assets/digitalmarketing1.jpg",
    content: (
      <DummyContent
        text={
          <ul className="list-disc space-y-2 pl-4 md:pl-8">
            <li className="text-neutral-700 dark:text-neutral-200">
              Data-Driven Strategies: Leveraging analytics and KPIs to optimize
              marketing efforts
            </li>
            <li className="text-neutral-700 dark:text-neutral-200">
              Multi-Channel Approach: Implementing comprehensive digital
              marketing strategies across platforms
            </li>
            <li className="text-neutral-700 dark:text-neutral-200">
              SEO Excellence: Enhancing visibility through search engine
              optimization techniques
            </li>
            <li className="text-neutral-700 dark:text-neutral-200">
              Social Media Mastery: Leveraging social platforms for brand
              awareness and engagement
            </li>
            <li className="text-neutral-700 dark:text-neutral-200">
              Email Marketing: Building and nurturing customer relationships
              through targeted campaigns
            </li>
            <li className="text-neutral-700 dark:text-neutral-200">
              Paid Advertising: Strategically using PPC and other paid channels
              for maximum ROI
            </li>
            <li className="text-neutral-700 dark:text-neutral-200">
              Industry Thought Leadership: Positioning Dev Kinesis as experts
              through high-quality content
            </li>
            <li className="text-neutral-700 dark:text-neutral-200">
              Technical SEO: Optimizing website structure and performance for
              search engines
            </li>
          </ul>
        }
      />
    ),
  },
  {
    category: "Content Writing",
    title: "Inspiring engagement through compelling digital content",
    src: "/assets/contentwriting.jpg",
    content: (
      <DummyContent
        text={
          <ul className="list-disc space-y-2 pl-4 md:pl-8">
            <li className="text-neutral-700 dark:text-neutral-200">
              Tailored Content Strategy: Crafting narratives that resonate with
              specific audiences
            </li>
            <li className="text-neutral-700 dark:text-neutral-200">
              SEO Optimization: Creating content that ranks well in search
              engine results
            </li>
            <li className="text-neutral-700 dark:text-neutral-200">
              Technical Writing: Producing clear, concise documentation for
              software users
            </li>
            <li className="text-neutral-700 dark:text-neutral-200">
              Blogging: Regularly publishing informative articles on industry
              trends and best practices
            </li>
            <li className="text-neutral-700 dark:text-neutral-200">
              Copywriting: Developing persuasive marketing materials (ads,
              landing pages)
            </li>
            <li className="text-neutral-700 dark:text-neutral-200">
              Content Localization: Adapting content for global audiences and
              languages
            </li>
            <li className="text-neutral-700 dark:text-neutral-200">
              Visual Content Creation: Designing infographics, videos, and
              interactive media
            </li>
            <li className="text-neutral-700 dark:text-neutral-200">
              Content Calendar Planning: Strategically scheduling content for
              maximum impact
            </li>
            <div className="grid grid-cols-2 gap-x-4 gap-y-2 ">
              <li className="text-neutral-700 dark:text-neutral-200">
                Google Keyword Planner{" "}
              </li>
              <li className="text-neutral-700 dark:text-neutral-200">
                Google Analytics
              </li>
              <li className="text-neutral-700 dark:text-neutral-200">
                Samrush
              </li>
              <li className="text-neutral-700 dark:text-neutral-200">
                Grammarly
              </li>
            </div>
          </ul>
        }
      />
    ),
  },
];
