"use client";

import { AnimatePresence, motion } from "framer-motion";

export default function FormLayout({
  title,
  subtitle,
  totalStep,
  currentStep,
  form,
}: {
  title: string;
  subtitle: string;
  totalStep: number;
  currentStep: number;
  form: React.ReactNode;
}) {
  return (
    <div className="flex flex-row items-center justify-center bg-brand min-h-screen w-full py-32">
      <div className="flex flex-col gap-16 max-sm:w-full drop-shadow-lg">
        <div className="flex flex-col justify-center items-center gap-4">
          <h1 className="text-4xl font-bold text-white">{title}</h1>
          <p className="text-lg text-white">{subtitle}</p>
        </div>
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            className="flex flex-col gap-4"
            initial={{ y: "5%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: "5%", opacity: 0 }}
            transition={{ type: "linear", ease: "easeOut", duration: 0.3 }}
          >
            <div className="flex flex-row space-between items-center px-4">
              {totalStep > 1 &&
                Array.from({ length: totalStep * 2 - 1 }).map((_, index) => {
                  return index % 2 === 0 ? (
                    <div
                      key={index}
                      className="m-2 w-8 h-8 rounded-full flex items-center justify-center font-bold shadow-lg"
                      style={{
                        backgroundColor:
                          index / 2 === currentStep ? "white" : "black",
                        color: index / 2 === currentStep ? "black" : "white",
                      }}
                    >
                      {index / 2 + 1}
                    </div>
                  ) : (
                    <div key={index} className="flex flex-row gap-1">
                      <div className="w-1 h-1 rounded-full bg-black shadow-lg" />
                      <div className="w-1 h-1 rounded-full bg-black shadow-lg" />
                      <div className="w-1 h-1 rounded-full bg-black shadow-lg" />
                    </div>
                  );
                })}
            </div>
            <div className="flex flex-row justify-center rounded-lg bg-white p-8 shadow-lg w-[480px] max-sm:rounded-none max-sm:w-full">
              {form}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
