"use client";

import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";

export function ManagementLogItemButton() {
  return (
    <motion.button
      className="flex justify-center items-center bg-black rounded-full size-8 drop-shadow-md"
      animate={{ scale: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      transition={{ duration: 0.2, ease: "easeInOut" }}
    >
      <FontAwesomeIcon icon={faBars} className="size-4 text-white" />
    </motion.button>
  );
}
