"use client";
import Image from "next/image";
import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";

export function Servicescard() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="w-full h-full py-20 md:mt-[9rem] xl:mt-[0rem] sm:mt-[17rem] xs:mt-[20rem]">
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
    src: "/assets/web1.jpeg",
    content: (
      <DummyContent
        text={
          <ul className="list-disc space-y-2 pl-4 md:pl-8">
            Transform your online presence with our dynamic web development
            services. We offer custom website development, content management
            system (CMS) development, and tailored e- commerce solutions. With a
            team of experienced designers, full stack developers, and content
            developers, we are committed to create an exceptional user
            experience in line with the personal, and business goals of our
            clients.
            <div className="md:mt-8 mt-4 lg:pl-8 md:pl-6 sm:pl-4 pl-4 space-y-4">
              <li className="text-neutral-700 dark:text-neutral-200">
                Custom Web Application Development.
              </li>
              <li className="text-neutral-700 dark:text-neutral-200">
                Content Management System (CMS).
              </li>
              <li className="text-neutral-700 dark:text-neutral-200">
                Learning management systems (LMS).
              </li>
              <li className="text-neutral-700 dark:text-neutral-200">
                Point of sales (POS).
              </li>
              <li className="text-neutral-700 dark:text-neutral-200">
                E-commerce Solutions.
              </li>
              <li className="text-neutral-700 dark:text-neutral-200">
                Website Maintenance and Support.
              </li>
            </div>
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
            Create an unforgettable user experience with our expert UI/UX design
            services. From wireframing to prototyping, we'll help you design
            interfaces that are intuitive, engaging, and conversion driven.
            <div className="md:mt-8 mt-4 lg:pl-8 md:pl-6 sm:pl-4 pl-4 space-y-4">
              <li className="text-neutral-700 dark:text-neutral-200">
                User Research and Analysis
              </li>
              <li className="text-neutral-700 dark:text-neutral-200">
                Wireframing and Prototyping
              </li>
              <li className="text-neutral-700 dark:text-neutral-200">
                Visual Design and Branding
              </li>
              <li className="text-neutral-700 dark:text-neutral-200">
                Usability Testing and Feedback
              </li>
            </div>
          </ul>
        }
      />
    ),
  },
  {
    category: "IOT",
    title: "Buiding IOT Platforms.",
    src: "/assets/iot1.jpeg",
    content: (
      <DummyContent
        text={
          <ul className="list-disc space-y-2 pl-4 md:pl-8">
            Unlock the power of the Internet of Things (IoT) with our innovative
            solutions. Scalable embedded system development to data analytics,
            we'll assist you to harness the potential of IoT to drive business
            success.
            <div className="md:mt-8 mt-4 lg:pl-8 md:pl-6 sm:pl-4 pl-4 space-y-4">
              <li className="text-neutral-700 dark:text-neutral-200">
                IoT Device Development
              </li>
              <li className="text-neutral-700 dark:text-neutral-200">
                IoT Data Analytics
              </li>
              <li className="text-neutral-700 dark:text-neutral-200">
                IoT Security Solutions
              </li>
              <li className="text-neutral-700 dark:text-neutral-200">
                IoT Consulting Services
              </li>
            </div>
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
            We are here to model your ideas into dynamic designs. Visualize your
            brand's success with our creative graphic designing services. From
            logos, and brochures to 3D modelling of your business ideas we can
            assist you to develop a visual identity that reflects your values
            and resonates with your audience.
            <div className="md:mt-8 mt-4 lg:pl-8 md:pl-6 sm:pl-4 pl-4 space-y-4">
              <li className="text-neutral-700 dark:text-neutral-200">
                3D Modeling.
              </li>
              <li className="text-neutral-700 dark:text-neutral-200">
                Billboard designs, and modeling.
              </li>
              <li className="text-neutral-700 dark:text-neutral-200">
                Logo Design/Redesign.
              </li>
              <li className="text-neutral-700 dark:text-neutral-200">
                Brochure Design/Redesign.
              </li>
              <li className="text-neutral-700 dark:text-neutral-200">
                Flex designs/Redesign.
              </li>
              <li className="text-neutral-700 dark:text-neutral-200">
                Business Card Design/Redesign
              </li>
              <li className="text-neutral-700 dark:text-neutral-200">
                Infographic Design/Redesign
              </li>
            </div>
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
            Experience an enhanced audience engagement and reciprocated digital
            presence with our optimized digital marketing strategies. Our expert
            digital media transformation team is at your service to assist you
            in reaching your business goals. We are at your service to create an
            online presence that drives traffic, generates leads, and boosts
            sales.
            <div className="md:mt-8 mt-4 lg:pl-8 md:pl-6 sm:pl-4 pl-4 space-y-4">
              <li className="text-neutral-700 dark:text-neutral-200">
                Search Engine Optimization (SEO).
              </li>
              <li className="text-neutral-700 dark:text-neutral-200">
                Pay-Per-Click (PPC) Advertising.
              </li>
              <li className="text-neutral-700 dark:text-neutral-200">
                Social Media Marketing.
              </li>
              <li className="text-neutral-700 dark:text-neutral-200">
                Social Media Management.
              </li>
              <li className="text-neutral-700 dark:text-neutral-200">
                Content Marketing.
              </li>
              <li className="text-neutral-700 dark:text-neutral-200">
                Content Development.
              </li>
              <li className="text-neutral-700 dark:text-neutral-200">
                Content Management.
              </li>
            </div>
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
          </ul>
        }
      />
    ),
  },
];
