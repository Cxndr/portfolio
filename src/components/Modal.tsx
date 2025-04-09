"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { FaX } from "react-icons/fa6";


import Backdrop from "./Backdrop"
import ModalNavButton from "./ModalNavButton";

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

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation()
    if (currentIndex > 0) {
      setDirection(-1)
      setCurrentIndex(currentIndex - 1)
    }
  }

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation()
    if (currentIndex < contentArray.length - 1) {
      setDirection(1)
      setCurrentIndex(currentIndex + 1)
    }
  }

  const handleExitClick = (e: React.MouseEvent) => {
    e.stopPropagation()
    handleClose()
  }

  return (

    <Backdrop onClick={handleClose}>

      <motion.div
        onClick={(e) => e.stopPropagation()}
        className="
          w-full h-full 
          grid grid-cols-[minmax(8rem,auto)_minmax(0,theme(maxWidth.5xl))_minmax(8rem,auto)] /* Stable side cols */
          gap-x-8 /* Add horizontal gap between columns */
          px-8 /* Add padding to prevent buttons sticking to edges */
          py-8 /* Add vertical padding */
          pointer-events-none
        "
        variants={modalVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        {/* Left Button Area (always present grid cell) */}
        <div className="col-start-1 self-center justify-self-end pointer-events-auto"> 
          {currentIndex > 0 && ( 
            <ModalNavButton onClick={handlePrev} direction="left" />
          )}
        </div>

        <div
          className="
            col-start-2 /* Place in second (center) column */
            justify-self-center /* Center itself within the column */
            relative
            max-h-full /* Allow taking full height up to parent padding */
            w-full /* Let grid column control max-width */
            overflow-hidden
            pointer-events-auto
            bg-neutral-50
            rounded-lg
            shadow-md shadow-th-neutral-950/50
          "
        >
          <div className="absolute top-0 right-0 m-2 p-2 z-20 pointer-events-auto">
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
                absolute top-0 left-0
                w-full h-full
                p-8
                flex flex-column
                items-center
                justify-center
              "
            >
              <div className="w-full h-full overflow-y-auto">
                {contentArray[currentIndex]}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Right Button Area (always present grid cell) */}
        <div className="col-start-3 self-center justify-self-start pointer-events-auto">
          {currentIndex < contentArray.length - 1 && (
            <ModalNavButton onClick={handleNext} direction="right" />
          )}
        </div>
      </motion.div>
    </Backdrop>
  )
}
