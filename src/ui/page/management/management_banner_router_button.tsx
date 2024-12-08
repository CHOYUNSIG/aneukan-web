"use client";

import { useAuth } from "@/client/hook/use_auth";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

export function ManagementBannerLogoutButton() {
  const { logout } = useAuth();
  const router = useRouter();
  return (
    <motion.button
      className="flex flex-col justify-center items-start h-12 bg-white text-black shadow-lg rounded-full px-8"
      initial={{ y: "-5%", opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "linear", ease: "easeOut", duration: 0.3 }}
      whileHover={{ scale: 1.02, backgroundColor: "black", color: "white" }}
      whileTap={{ scale: 0.98 }}
      onClick={() => {
        logout();
        router.push("/");
      }}
    >
      <div className="w-full text-start flex flex-row justify-between items-center gap-2">
        <div className="align-start">
          <p className="font-bold">로그아웃</p>
        </div>
        <FontAwesomeIcon icon={faArrowRight} className="w-4 h-4" />
      </div>
    </motion.button>
  );
}
