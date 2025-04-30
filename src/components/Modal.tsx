"use client"

import type React from "react"

import { useState, useEffect, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { FaX } from "react-icons/fa6";


import Backdrop from "./Backdrop"
import NavButton from "./NavButton";

type ModalProps = {
  contentArray: React.ReactNode[]
  contentIndex: number
  handleClose: () => void
  modalOpen: boolean
}

const modalVariants = {
  hidden: {
    y: "100svh",
    opacity: 0,
  },
  visible: {
    y: "0",
    opacity: 1,
    transition: { duration: 0.3, ease: "easeInOut" },
  },
  exit: {
    y: "100svh",
    opacity: 0,
    transition: { duration: 0.3, ease: "easeInOut" },
  },
}

const navigationVariants = {
  enter: (direction: number) => {
    return {
      x: direction > 0 ? "100%" : "-100%",
      opacity: 0,
    }
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => {
    return {
      zIndex: 0,
      x: direction < 0 ? "100%" : "-100%",
      opacity: 0,
    }
  },
}

export default function Modal({ contentArray, contentIndex, handleClose, modalOpen }: ModalProps) {
  const [currentIndex, setCurrentIndex] = useState(contentIndex)
  const [direction, setDirection] = useState(0) // 0: initial, 1: next, -1: prev

  useEffect(() => {
    if (modalOpen) {
      setCurrentIndex(contentIndex)
      setDirection(0)
    }
  }, [modalOpen, contentIndex])

  const handlePrev = useCallback((e: React.MouseEvent | KeyboardEvent) => {
    e.stopPropagation()
    if (currentIndex > 0) {
      setDirection(-1)
      setCurrentIndex(currentIndex - 1)
    }
  }, [currentIndex])

  const handleNext = useCallback((e: React.MouseEvent | KeyboardEvent) => {
    e.stopPropagation()
    if (currentIndex < contentArray.length - 1) {
      setDirection(1)
      setCurrentIndex(currentIndex + 1)
    }
  }, [currentIndex, contentArray.length])

  const handleExitClick = (e: React.MouseEvent) => {
    e.stopPropagation()
    handleClose()
  }

  // Keyboard navigation effect
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!modalOpen) return; // Only handle keys if modal is open

      if (e.key === "ArrowLeft") {
        // Simulate a click event object to satisfy handlePrev/handleNext type
        const simulatedEvent = { stopPropagation: () => {} } as React.MouseEvent; 
        handlePrev(simulatedEvent);
      } else if (e.key === "ArrowRight") {
        const simulatedEvent = { stopPropagation: () => {} } as React.MouseEvent;
        handleNext(simulatedEvent);
      } else if (e.key === "Escape") {
        handleClose(); // Close the modal on Escape key press
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    // Cleanup function
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [modalOpen, handlePrev, handleNext, handleClose]); // Add handleClose to dependencies

  return (

    <Backdrop onClick={handleClose}>

      <motion.div
        onClick={(e) => e.stopPropagation()}
        className="
          w-full h-full 
          flex flex-col items-center justify-center
          md:py-8 
          md:px-8 
          md:grid md:grid-cols-[minmax(8rem,auto)_minmax(0,theme(maxWidth.5xl))_minmax(8rem,auto)] 
          md:gap-x-8 
          pointer-events-none
          relative
        "
        variants={modalVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        {/* Left Button Area: Absolute on mobile (below modal), Grid item on desktop */}
        <div className="
          absolute bottom-4 left-4 z-10
          md:relative md:bottom-auto md:left-auto md:z-auto
          md:col-start-1 md:self-center md:justify-self-end
          pointer-events-auto 
        ">
          {currentIndex > 0 && ( 
            <NavButton onClick={handlePrev} direction="left" />
          )}
        </div>

        {/* Modal Content Area */}
        <div
          className="
            flex flex-col
            w-11/12 
            h-9/12
            
            mb-20 md:mb-0 lg:mb-0
            max-w-xl
            overflow-hidden 
            bg-neutral-50 
            shadow-md shadow-th-neutral-950/50
            rounded-lg
            pointer-events-auto

            md:block
            md:relative 
            md:w-full 
            md:h-full 
            md:max-w-none
            md:col-start-2 
            md:justify-self-center 
            md:max-h-full
          "
        >
          {/* Close Button: Flex item on mobile, Absolute on desktop */}
          <div className="
            w-full flex justify-end p-1 
            md:absolute md:top-1 md:right-1 md:m-2 md:p-2 md:z-20
            pointer-events-auto
          ">
            <div 
              className="
                text-2xl font-bold text-th-pink-500 hover:text-th-pink-400
                bg-none p-3 rounded-full hover:bg-th-neutral-100 
                hover:scale-110 transition-all duration-300 
                cursor-pointer
              " 
              onClick={handleExitClick}
            >
              <FaX />
            </div>
          </div>

          {/* Animated Content Area: Flex-grow on mobile, Absolute positioning on desktop */}
          <div className="
            flex-grow overflow-hidden relative
            md:static md:flex-grow-0 
          ">
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={currentIndex} // Key is crucial for AnimatePresence to detect changes
                custom={direction}
                variants={navigationVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "tween", ease: "easeInOut", duration: 0.5 },
                  opacity: { duration: 0.2 },
                }}
                className="
                  absolute top-0 left-0 w-full h-full 
                  flex flex-col
                  items-center
                  justify-center
                "
              >
                {/* Scrollable inner content */}
                <div className="w-full h-full">
                  {contentArray[currentIndex]}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Right Button Area: Absolute on mobile (below modal), Grid item on desktop */}
        <div className="
          absolute bottom-4 right-4 z-10
          md:relative md:bottom-auto md:right-auto md:z-auto
          md:col-start-3 md:self-center md:justify-self-start
          pointer-events-auto
        ">
          {currentIndex < contentArray.length - 1 && (
            <NavButton onClick={handleNext} direction="right" />
          )}
        </div>
      </motion.div>
    </Backdrop>
  )
}
