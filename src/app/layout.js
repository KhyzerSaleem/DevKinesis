import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/homepage/Navbar";
import { Providers } from "./Providers";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Dev Kinesis | Software Development",
  description: "Created with love by Khizar ❤️",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-white dark:bg-gray-900 antialiased`}
      >
        <Providers>
        {children}
        <Navbar />
        <WhatsAppButton/>
        <Footer/>
        </Providers>
      </body>
    </html>
  );
}

