import React from "react";
import { motion } from "framer-motion";

type BackdropProps = {
  children: React.ReactNode;
  onClick: () => void;
}

export default function Backdrop({ children, onClick }: BackdropProps) {


  return (
    <motion.div 
      className="
        absolute top-0 left-0 w-full h-full 
        bg-neutral-400/50 backdrop-blur-md z-[500]
        flex items-center justify-center
      "
      onClick={onClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {children}
    </motion.div>
  );
}

