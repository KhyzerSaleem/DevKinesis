"use client";
import { motion } from "framer-motion";

const WhatsAppButton = () => {
  const phoneNumber = "+923144694201"; // Replace with your WhatsApp number
  const message = "Hello! I need services from Dev Kinesis."; // Replace with your default message
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  // Animation Variants
  const buttonVariants = {
    hidden: { opacity: 0, y: 50 }, // Initial state: hidden and moved down
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }, // Animates into view
    hover: {
      scale: 1.1,
      rotate: 5,
      transition: { type: "spring", stiffness: 300 },
    }, // On hover
  };

  return (
    <motion.a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 bg-green-500 hover:bg-green-600 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg z-50"
      aria-label="WhatsApp"
      initial="hidden"
      animate="visible"
      whileHover="hover"
      variants={buttonVariants}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-8 h-8"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M12 2C6.477 2 2 6.477 2 12c0 1.957.57 3.775 1.547 5.302L2 22l4.778-1.548C8.227 21.43 10.043 22 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm.028 18c-1.777 0-3.537-.47-5.066-1.357l-.362-.21-2.836.918.92-2.827-.23-.374C4.463 15.491 4 13.751 4 11.974 4 7.579 7.589 4 11.974 4 16.364 4 20 7.589 20 11.974 20 16.364 16.36 20 12.028 20zM17 14.883c-.234-.117-1.386-.683-1.603-.76-.216-.077-.374-.116-.532.117-.158.232-.611.76-.75.916-.138.157-.277.177-.511.059-.234-.117-.987-.363-1.879-1.154-.695-.604-1.16-1.354-1.296-1.588-.138-.235-.015-.361.103-.478.106-.106.234-.276.352-.416.118-.139.158-.236.237-.393.079-.157.04-.295-.02-.413-.059-.117-.53-1.275-.725-1.744-.192-.462-.387-.4-.531-.4-.138 0-.296-.02-.452-.02-.157 0-.413.059-.63.276-.216.217-.827.827-.827 2.019 0 1.191.848 2.345.966 2.502.118.157 1.666 2.548 4.043 3.573.566.245 1.009.392 1.352.5.568.18 1.084.155 1.49.093.454-.067 1.386-.564 1.58-1.107.196-.544.196-1.01.137-1.107-.059-.098-.216-.157-.45-.275z" />
      </svg>
    </motion.a>
  );
};

export default WhatsAppButton;
