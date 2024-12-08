"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import useWindowSize from "@/client/hook/use_window_size";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons/faChevronDown";
import { useRouter, useSearchParams } from "next/navigation";

export function ManagementSidebarItem({
  title,
  width,
  destinationPage,
}: {
  title: string;
  width: string;
  destinationPage: number;
}) {
  const windowWidth = useWindowSize().width;
  const router = useRouter();
  const searchParams = useSearchParams();

  const token = searchParams.get("token");
  const page = searchParams.get("page");
  const isSelected = page === destinationPage.toString();

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
      onClick={() =>
        router.push(`/management?page=${destinationPage}&token=${token}`)
      }
    >
      <p className="font-bold">{title}</p>
      <FontAwesomeIcon
        icon={windowWidth < 1024 ? faChevronDown : faChevronRight}
        className="size-4"
      />
    </motion.button>
  );
}
