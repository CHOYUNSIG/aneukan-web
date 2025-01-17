"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

export default function HomeBannerRouterButton({
  width,
  height,
  href,
  children,
}: {
  width: string;
  height: string;
  href: string;
  children: React.ReactNode;
}) {
  const router = useRouter();

  return (
    <motion.button
      className="flex flex-col justify-center items-start h-full bg-white text-black shadow-lg rounded-full px-8"
      style={{ width: width || "auto", height: height || "auto" }}
      initial={{ y: "-5%", opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "linear", ease: "easeOut", duration: 0.3 }}
      whileHover={{ scale: 1.02, backgroundColor: "black", color: "white" }}
      whileTap={{ scale: 0.98 }}
      onClick={() => router.push(href)}
    >
      {children}
    </motion.button>
  );
}
