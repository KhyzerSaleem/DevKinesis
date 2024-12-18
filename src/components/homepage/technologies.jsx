"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { HeroHighlight } from "@/components/ui/hero-highlight";

const tabs = [
  {
    id: "development",
    label: "Development",
    icons: [
      "react",
      "angular",
      "vuejs",
      "nextjs",
      "node",
      "mongodb",
      "html5",
      "css3",
      "tailwindcss",
      "sass",
      "javascript",
      "typescript",
      "php",
      "laravel",
      "python",
      "django",
      "sql",
      "postgresql",
      "graphql",
      "cplusplus",
      "flutter",
    ],
  },
  {
    id: "design",
    label: "Design",
    icons: [
      "figma",
      "adobeaero",
      "adobeanimate",
      "adobedreamweaver",
      "adobeillustrator",
      "adobeindesign",
      "adobelightroom",
      "adobephotoshop",
      "adobepremiere",
      "adobexd",
    ],
  },
  {
    id: "deployment",
    label: "Deployment",
    icons: [
      "docker",
      "aws",
      "vercel",
      "kubernetes",
      "azure",
      "git",
      "gitlab",
      "netlify",
      "jira",
    ],
  },
  {
    id: "sqa",
    label: "SQA",
    icons: [
      "selenium",
      "cypress",
      "postman",
      "graphene",
      "playwright",
      "robotframework",
    ],
  },
];

export default function Technologies() {
  const [activeTab, setActiveTab] = useState("development");
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // Set state only on the client side
  }, []);

  const iconsPerRow = 4;
  const maxRows = Math.max(
    ...tabs.map((tab) => Math.ceil(tab.icons.length / iconsPerRow))
  );

  // Avoid rendering until hydration is complete
  if (!isClient) return null;

  return (
    <div className="overflow-x-hidden">
      <HeroHighlight>
        <div className="mt-6 xs:mt-20 xxl:mt-32 sm:mt-20 md:mt-6 lg:mt-6 py-4 md:py-2 px-4 md:px-6 lg:px-8 xl:px-10 2xl:px-12 w-full max-w-full">
          {/* Section Header */}
          <div className="text-center">
            <h1 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl xxl:text-5xl xxl:mb-[3rem] font-extrabold text-gray-900 dark:text-white tracking-wide mb-4 xs:mt-[7rem] sm:mt-[2rem] xl:mt-[2rem]">
              Technologies
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl xl:text-3xl sm:text-smaller text-gray-600 dark:text-gray-300">
              We elevate brands using cutting-edge technologies, driving
              innovation and success.
            </p>
          </div>

          {/* Tabs */}
          <div className="flex flex-wrap justify-center mt-8 mb-8 space-x-4 sm:space-x-6 xs:space-x-4">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`text-lg font-semibold pb-2 border-b-4 transition-all duration-300 ${
                  activeTab === tab.id
                    ? "text-gray-900 dark:text-white border-green-500"
                    : "text-gray-500 dark:text-gray-400 border-transparent hover:text-gray-900 dark:hover:text-white"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Icons Grid */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-3 xs:grid-cols-3 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 xxl:grid-cols-5 gap-4 xs:gap-6 sm:gap-8 mb-20 px-4 sm:px-6 md:px-8 lg:px-10"
            style={{
              gridAutoRows: "120px",
              height: `${maxRows * 120}px`,
            }}
          >
            {tabs
              .find((tab) => tab.id === activeTab)
              .icons.map((icon) => (
                <div
                  key={icon}
                  className="flex items-center justify-center p-4"
                >
                  <img
                    src={`/assets/${icon.toLowerCase()}.svg`}
                    alt={icon}
                    className="h-20 w-20 transition-transform duration-300 ease-in-out transform hover:scale-125 xs:h-10 xs:w-10 sm:h-12 sm:w-12 md:h-16 md:w-16 lg:h-20 lg:w-20"
                  />
                </div>
              ))}
          </motion.div>
        </div>
      </HeroHighlight>
    </div>
  );
}
