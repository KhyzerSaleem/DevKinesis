"use client";
import { useTheme } from "next-themes";
import Image from "next/image";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaWhatsapp,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  const { theme, resolvedTheme } = useTheme(); // Access theme state
  const isDarkMode = resolvedTheme ? resolvedTheme === "dark" : true; // Check if the current theme is dark

  return (
    <footer
      className={`${
        isDarkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-black"
      } py-12 mt-auto`}
    >
      <div className="container mx-auto px-4 md:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Left Section - Logo and Social Links */}
        <div className="flex flex-col items-center md:items-start space-y-6">
          <Image
            src={isDarkMode ? "/assets/LOGO_DARK.png" : "/assets/LOGO.png"}
            alt="Company Logo"
            width={180}
            height={60}
            className="mb-4"
          />
          <p className="text-sm text-center md:text-left">
            Our team of experts maintain robust network solutions, ensuring
            seamless connectivity.
          </p>
          <div className="flex space-x-4 mt-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className={`text-xl ${
                isDarkMode ? "hover:text-blue-500" : "hover:text-blue-600"
              }`}
            >
              <FaFacebookF />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className={`text-xl ${
                isDarkMode ? "hover:text-pink-500" : "hover:text-pink-600"
              }`}
            >
              <FaInstagram />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className={`text-xl ${
                isDarkMode ? "hover:text-blue-700" : "hover:text-blue-800"
              }`}
            >
              <FaLinkedinIn />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className={`text-xl ${
                isDarkMode ? "hover:text-green-400" : "hover:text-green-500"
              }`}
            >
              <FaWhatsapp />
            </a>
          </div>
        </div>
        <div className="space-y-4 text-center sm:text-left ">
          <h4 className="font-semibold text-lg font-noto">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/home" className="hover:underline">
                Home
              </Link>
            </li>
            <li>
              <Link href="/services" className="hover:underline">
                Services
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:underline">
                About Us
              </Link>
            </li>
            <li>
            </li>
            <li>
              <Link href="/contact" className="hover:underline">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        <div className="space-y-4 text-center sm:text-left">
          <h4 className="font-semibold text-lg font-noto">Digital Services</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/services" className="hover:underline">
                Web Development
              </Link>
            </li>
            <li>
              <Link
                href="/services"
                className="hover:underline"
              >
                UI/UX Design
              </Link>
            </li>
            <li>
              <Link href="/services" className="hover:underline">
                Graphic Designing
              </Link>
            </li>
            <li>
              <Link href="/services" className="hover:underline">
                Content Writing
              </Link>
            </li>
            <li>
              <Link href="/services" className="hover:underline">
                IOT
              </Link>
            </li>
          </ul>
        </div>

        <div className="flex flex-col space-y-4 text-center md:text-left lg:text-left xl:text-left xxl:text-left">
          <h4 className="font-semibold text-lg font-noto">
            DevKinesis Pvt Ltd
          </h4>
          {/* Address Section */}
          <div className="flex items-center text-center sm:text-center md:text-left lg:text-left xl:text-left xxl:text-left  space-x-3">
            <FaMapMarkerAlt className="text-lg text-green-600 " />
            <p className="text-sm sm:justify-center">4344-G Gulberg Centre Opposite Pace Main Boulevard Lahore</p>
          </div>

          {/* Phone Section */}
          <div className="flex items-center text-center sm:text-center md:text-left lg:text-left xl:text-left xxl:text-left space-x-3 xs:justify-center sm:justify-start md:justify-start lg:justify-start xl:justify-start xxl:justify-start">
            <FaPhoneAlt className="text-lg text-green-600" />
            <p className="text-sm">+92-314-4694201</p>
          </div>

          {/* Email Section */}
          <div className="flex items-centertext-center sm:text-center space-x-3 xs:justify-center sm:justify-start md:justify-start lg:justify-start xl:justify-start xxl:justify-star">
            <FaEnvelope className="text-lg text-green-600" />
            <p className="text-sm">connect@devkinesis.com</p>
          </div>
        </div>
      </div>

      {/* Footer Bottom Section */}

      <hr className="border-black dark:border-gray-700 mt-20 " />
      <p className="text-center text-sm font-footer mt-10">
        Copyright © 2024 Dev Kinesis | All Rights Reserved
      </p>
    </footer>
  );
};

export default Footer;

