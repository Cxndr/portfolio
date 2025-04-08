"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa"
import Backdrop from "./Backdrop"

type ModalProps = {
  contentArray: React.ReactNode[]
  contentIndex: number
  handleClose: () => void
  modalOpen: boolean
}

export default function Modal({ contentArray, contentIndex, handleClose, modalOpen }: ModalProps) {
  const [currentIndex, setCurrentIndex] = useState(contentIndex)
  const [direction, setDirection] = useState(0) // 0 for initial/close, -1 for left, 1 for right
  const [animationState, setAnimationState] = useState<"opening" | "open" | "closing" | "navigating">("opening")

  // Reset states when modal opens
  useEffect(() => {
    if (modalOpen) {
      setCurrentIndex(contentIndex)
      setDirection(0)
      setAnimationState("opening")

      // Set to "open" after opening animation completes
      const timer = setTimeout(() => {
        setAnimationState("open")
      }, 500)

      return () => clearTimeout(timer)
    }
  }, [modalOpen, contentIndex])

  // Handle closing animation
  const handleExit = (e: React.MouseEvent) => {
    e.stopPropagation()
    setAnimationState("closing")
    setDirection(0)

    // Call handleClose after animation completes
    setTimeout(() => {
      handleClose()
    }, 500) // Match this with your animation duration
  }

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation()
    if (currentIndex > 0) {
      setAnimationState("navigating")
      setDirection(-1)
      setCurrentIndex(currentIndex - 1)

      // Reset to "open" state after navigation animation completes
      setTimeout(() => {
        setAnimationState("open")
      }, 500)
    }
  }

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation()
    if (currentIndex < contentArray.length - 1) {
      setAnimationState("navigating")
      setDirection(1)
      setCurrentIndex(currentIndex + 1)

      // Reset to "open" state after navigation animation completes
      setTimeout(() => {
        setAnimationState("open")
      }, 500)
    }
  }

  // Get animation properties based on current state
  const getAnimationProps = () => {
    switch (animationState) {
      case "opening":
        return {
          initial: { y: 100, opacity: 0 },
          animate: { y: 0, opacity: 1 },
          transition: {
            type: "spring",
            stiffness: 300,
            damping: 30,
            duration: 0.5,
          },
        }
      case "closing":
        return {
          initial: { y: 0, opacity: 1 },
          animate: { y: 1000, opacity: 0 },
          transition: {
            type: "tween",
            ease: "easeInOut",
            duration: 0.5,
          },
        }
      case "navigating":
        return {
          initial: { x: direction * 300, opacity: 0 },
          animate: { x: 0, opacity: 1 },
          transition: {
            type: "spring",
            stiffness: 300,
            damping: 30,
            duration: 0.5,
          },
        }
      default: // "open"
        return {
          initial: { x: 0, y: 0, opacity: 1 },
          animate: { x: 0, y: 0, opacity: 1 },
          transition: {
            duration: 0.1,
          },
        }
    }
  }

  const animationProps = getAnimationProps()
  const showNavButtons = animationState !== "closing"

  return (
    <Backdrop onClick={handleClose}>
      <div className="w-full h-full flex flex-row justify-center items-center gap-8">
        {showNavButtons && currentIndex > 0 && (
          <FaArrowAltCircleLeft
            className="text-7xl text-th-pink-500 hover:cursor-pointer hover:scale-110 transition-all duration-300"
            onClick={handlePrev}
          />
        )}

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
          key={`modal-${currentIndex}-${direction}-${animationState}`}
          initial={animationProps.initial}
          animate={animationProps.animate}
          transition={animationProps.transition}
        >
          <div className="w-full h-full">{contentArray[currentIndex]}</div>

          <div className="absolute top-0 right-0 m-2 p-2">
            <button className="bg-neutral-200 p-2 rounded-full" onClick={handleExit}>
              X
            </button>
          </div>
        </motion.div>

        {showNavButtons && currentIndex < contentArray.length - 1 && (
          <FaArrowAltCircleRight
            className="text-7xl text-th-pink-500 hover:cursor-pointer hover:scale-110 transition-all duration-300"
            onClick={handleNext}
          />
        )}
      </div>
    </Backdrop>
  )
}
