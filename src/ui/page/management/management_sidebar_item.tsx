"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import useWindowSize from "@/hook/use_window_size";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons/faChevronDown";

export function ManagementSidebarItem({
  title,
  width,
  isSelected,
  onClick,
}: {
  title: string;
  width: string;
  isSelected: boolean;
  onClick: () => void;
}) {
  const windowWidth = useWindowSize().width;

  return (
    <motion.button
      className="flex flex-row items-center justify-between px-8 py-4 rounded-full hover:bg-gray-100 shadow-lg"
      style={{
        width: width,
        backgroundColor: isSelected ? "black" : "white",
        color: isSelected ? "white" : "black",
      }}
      initial={{ y: "-5%", opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "linear", ease: "easeOut", duration: 0.3 }}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
    >
      <p className="font-bold">{title}</p>
      <FontAwesomeIcon
        icon={windowWidth < 1024 ? faChevronDown : faChevronRight}
        className="w-4 h-4"
      />
    </motion.button>
  );
}
