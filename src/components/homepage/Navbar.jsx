"use client";

import { useTheme } from "next-themes";
import Link from "next/link";
import { FiSun, FiMoon, FiMenu, FiX } from "react-icons/fi";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => setMounted(true), []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  if (!mounted) return null; // Prevents SSR hydration mismatch

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 shadow-md font-nav ${
        theme === "dark" ? "bg-[#001119] text-white" : "bg-white text-[#001119]"
      } transition-colors duration-300`}
    >
      <div className="max-w-7xl mx-auto px-4 xs:px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        {/* Logo Section */}
        <motion.div
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="flex-none"
        >
          <Link href="/" passHref>
            <img
              src={
                theme === "dark" ? "/assets/LOGO_DARK.png" : "/assets/LOGO.png"
              }
              alt="DevKinesis Logo"
              className="h-8 w-auto cursor-pointer"
            />
          </Link>
        </motion.div>

        {/* Links Section */}
        <div className="hidden md:flex flex-grow justify-center space-x-8">
          {[
            { name: "Home", href: "/" },
            { name: "About", href: "/about" },
            { name: "Services", href: "/services" },
            { name: "Contact", href: "/contact" },
          ].map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -3 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="relative group"
            >
              <Link href={item.href}>
                <span
                  className={`relative ${
                    theme === "dark" ? "text-white" : "text-[#001119]"
                  } font-medium cursor-pointer transition group-hover:font-bold group-hover:text-[#65BC46]`}
                >
                  {item.name}
                  {/* Green Dot */}
                  <span
                    className="absolute left-1/2 transform -translate-x-1/2 top-full mt-1 w-[6px] h-[6px] bg-[#65BC46] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    aria-hidden="true"
                  ></span>
                </span>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Actions Section: Dark Mode and Mobile Menu */}
        <div className="flex items-center space-x-4">
          {/* Dark Mode Toggle */}
          <motion.div
            whileHover={{ rotate: 45 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="text-[#65BC46] hover:text-[#65BC46] focus:outline-none transition"
            >
              {theme === "dark" ? <FiSun size={24} /> : <FiMoon size={24} />}
            </button>
          </motion.div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-[#65BC46]">
              {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div
          className={`md:hidden absolute top-16 left-0 w-full ${
            theme === "dark" ? "bg-[#001119]" : "bg-white"
          } shadow-md`}
        >
          {[
            { name: "Home", href: "/" },
            { name: "About Us", href: "/aboutus" },
            { name: "Services", href: "/services" },
            { name: "Contact", href: "/contact" },
          ].map((item, index) => (
            <Link href={item.href} key={index} passHref>
              <div
                className={`py-2 px-4 ${
                  theme === "dark" ? "text-white" : "text-[#001119]"
                } hover:bg-[#65BC46] hover:text-white transition cursor-pointer`}
              >
                {item.name}
              </div>
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
