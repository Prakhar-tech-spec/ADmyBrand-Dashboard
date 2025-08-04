
"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Plus, X } from "lucide-react";
import { cn } from "@/lib/utils";

type FloatingActionMenuProps = {
options: {
  label: string;
  onClick: () => void;
  Icon?: React.ReactNode;
}[];
className?: string;
};

const FloatingActionMenu = ({
options,
className,
}: FloatingActionMenuProps) => {
const [isOpen, setIsOpen] = useState(false);

const toggleMenu = () => {
  setIsOpen(!isOpen);
};

return (
  <div className={cn("fixed bottom-8 right-8 z-50", className)}>
    <Button
      onClick={toggleMenu}
      className="w-14 h-14 rounded-full bg-[#111111e8] hover:bg-[#111111] shadow-[0_0_20px_rgba(0,0,0,0.2)] flex items-center justify-center font-semibold text-sm"
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={isOpen ? "close" : "menu"}
          initial={{ opacity: 0, rotate: -45, scale: 0.5 }}
          animate={{ opacity: 1, rotate: 0, scale: 1 }}
          exit={{ opacity: 0, rotate: 45, scale: 0.5 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
        >
          {isOpen ? <X className="w-5 h-5" /> : "Menu"}
        </motion.div>
      </AnimatePresence>
    </Button>

    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, x: 10, y: 10, filter: "blur(10px)" }}
          animate={{ opacity: 1, x: 0, y: 0, filter: "blur(0px)" }}
          exit={{ opacity: 0, x: 10, y: 10, filter: "blur(10px)" }}
          transition={{
            duration: 0.6,
            type: "spring",
            stiffness: 300,
            damping: 20,
            delay: 0.1,
          }}
          className="absolute bottom-16 right-0 mb-2"
        >
          <div className="flex flex-col items-end gap-2">
            {options.map((option, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{
                  duration: 0.3,
                  delay: index * 0.05,
                }}
              >
                <Button
                  onClick={() => {
                    option.onClick();
                    setIsOpen(false);
                  }}
                  size="sm"
                  className="flex items-center gap-2 bg-[#111111e8] hover:bg-[#111111] shadow-[0_0_20px_rgba(0,0,0,0.2)] border-none rounded-xl backdrop-blur-sm h-10 pr-4"
                >
                  {option.Icon}
                  <span>{option.label}</span>
                </Button>
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  </div>
);
};

export default FloatingActionMenu;
