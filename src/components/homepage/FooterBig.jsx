// src/components/homepage/FooterBig.jsx
"use cient";
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

// Dynamically import the FooterContent component (client-side only)
const FooterContent = dynamic(() => import("./FooterContent"), { ssr: false });

const FooterBig = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // Set state to true once the component is mounted on the client
    setIsClient(true);
  }, []);

  // Only render FooterContent if on the client
  if (!isClient) {
    return null; // Or a loading spinner, or anything you'd like to show during server-side rendering
  }

  return (
    <div>
      <FooterContent />
    </div>
  );
};

export default FooterBig;
