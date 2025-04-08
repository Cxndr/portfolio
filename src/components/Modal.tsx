"use client";

import { motion, AnimatePresence } from "framer-motion";
import Backdrop from "./Backdrop";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
import { useState } from "react";

type ModalProps = {
  contentArray: React.ReactNode[];
  contentIndex: number;
  handleClose: () => void;
  modalOpen: boolean;
}

const modalVariants = {
  hidden: { 
    y: "100svh",
    opacity: 0,
  },
  visible: { 
    y: "0",
    opacity: 1,
  },
  exitDown: { 
    y: "100svh",
    opacity: 0,
  },
  exitRight: {
    x: "100svw",
    opacity: 0,
  },
  exitLeft: {
    x: "-100svw",
    opacity: 0,
  },
}

const contentVariants = {
  enter: (direction: "right" | "left") => ({
    x: direction === "right" ? 1000 : -1000,
    opacity: 0
  }),
  center: {
    x: 0,
    opacity: 1
  },
  exit: (direction: "right" | "left") => ({
    x: direction === "right" ? -1000 : 1000,
    opacity: 0
  })
};

export default function Modal({ contentArray, contentIndex, handleClose, modalOpen }: ModalProps) {

  const [currentIndex, setCurrentIndex] = useState(contentIndex);
  const [exitDirection, setExitDirection] = useState< "right" | "left" | "down" >("down");

  const handleExit = () => {
    setExitDirection("down");
    handleClose();
  }

  const handleNavigation = (direction: "right" | "left") => {
    setExitDirection(direction);
  }

  return (
    <Backdrop onClick={handleClose}>
      
      <div className="w-full h-full flex flex-row justify-center items-center gap-8">

        {currentIndex > -1 &&
          <FaArrowAltCircleLeft 
            className="text-7xl text-th-pink-500 hover:cursor-pointer hover:scale-110 transition-all duration-300" 
            onClick={(e) => {
              e.stopPropagation();
              setCurrentIndex(currentIndex - 1);
              handleNavigation("left");
            }}
          />
        }

        <motion.div
          onClick={(e) => e.stopPropagation()}
          className="
            h-[64rem]
            max-h-10/12
            w-5xl
            max-w-10/12
            p-8
            bg-neutral-50
            rounded-lg
            flex flex-column 
            items-center
            justify-center
            relative
            shadow-md shadow-th-neutral-950/50
            "
          variants={modalVariants}
          initial="hidden"
          animate="visible"
          exit={
            exitDirection === "right" ? "exitRight" 
            : exitDirection === "left" ? "exitLeft" 
            : "exitDown"
          }
          transition={{ duration: 0.3 }}
        >
          <AnimatePresence mode="wait" custom={exitDirection}>
            {modalOpen && (
              <motion.div
                key={currentIndex}
                custom={exitDirection}
                variants={contentVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{duration: 0.2}}
                className="w-full h-full"
              >
                {contentArray[currentIndex]}
              </motion.div>
            )}
          </AnimatePresence>

          <div className="absolute top-0 right-0 m-2 p-2">
            <button 
              className="bg-neutral-200 p-2 rounded-full"
              onClick={(e) => {
                e.stopPropagation();
                handleExit();
              }}
            >
              X
            </button>
          </div>

        </motion.div>

        {currentIndex < contentArray.length - 1 &&
          <FaArrowAltCircleRight 
            className="text-7xl text-th-pink-500 hover:cursor-pointer hover:scale-110 transition-all duration-300" 
            onClick={(e) => {
              e.stopPropagation();
              setCurrentIndex(currentIndex + 1);
              handleNavigation("right");
            }}
          />
        }

      </div>
      
    </Backdrop>
  );
}