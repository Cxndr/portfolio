"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react";

type SubtitleAnimProps = {
    values: string[];
    interval?: number; // Optional interval in milliseconds
}

const colors = [
    "text-th-pink-500",
    "text-th-yellow-500",
    "text-th-blue-500",
];

const animationVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
};

const transitionSpec = {
    duration: 0.5,
    ease: "easeInOut",
};

export default function SubtitleAnim({ values, interval = 4000 }: SubtitleAnimProps) {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        if (values.length <= 1) return; // No need to cycle if only one or zero items

        const timer = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % values.length);
        }, interval);

        // Clear interval on component unmount
        return () => clearInterval(timer);
    }, [values.length, interval]); // Rerun effect if length or interval changes

    if (!values || values.length === 0) {
        return null; // Return nothing if no values provided
    }

    const currentText = values[currentIndex];
    const currentColorClass = colors[currentIndex % colors.length];

    return (
        <div className="h-10 overflow-hidden relative"> {/* Container to manage layout */}
            <AnimatePresence initial={false} mode="wait"> {/* mode="wait" ensures exit animation completes first */}
                <motion.h3
                    key={currentIndex} // Crucial for AnimatePresence to detect changes
                    variants={animationVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    transition={transitionSpec}
                    className={`${currentColorClass} absolute w-full text-left`} // Position absolutely within the container
                >
                    {currentText}
                </motion.h3>
            </AnimatePresence>
        </div>
    )
}