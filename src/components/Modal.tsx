"use client"

import { motion, AnimatePresence } from "framer-motion";
import { ReactNode, useEffect, useState } from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  isNavigating?: boolean;
  navigationDirection?: 'left' | 'right' | null;
  onNavigate?: (direction: 'left' | 'right') => void;
  showLeftNav?: boolean;
  showRightNav?: boolean;
  itemId?: string;
}

export default function Modal({ 
  isOpen, 
  onClose, 
  children,
  isNavigating = false,
  navigationDirection = null,
  onNavigate,
  showLeftNav = false,
  showRightNav = false,
  itemId = 'default'
}: ModalProps) {
  const [isClosing, setIsClosing] = useState(false);

  const handleClose = () => {
    setIsClosing(true);
  };

  useEffect(() => {
    if (isClosing) {
      const timer = setTimeout(() => {
        onClose();
        setIsClosing(false);
      }, 400);
      return () => clearTimeout(timer);
    }
  }, [isClosing, onClose]);

  return (
    <>
      {(isOpen || isClosing) && (
        <>
          {/* Backdrop */}
          <motion.div 
            className="fixed inset-0 bg-black/60 backdrop-blur-md z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            onClick={handleClose}
          />

          <AnimatePresence>
            <motion.div
              key={`modal-${itemId}-${isClosing ? 'closing' : 'open'}`}
              className="fixed inset-0 z-50"
            >
              <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                {/* Left navigation button */}
                {showLeftNav && onNavigate && (
                  <motion.button
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    onClick={(e) => {
                      e.stopPropagation();
                      onNavigate('right');
                    }}
                    className={`absolute left-0 top-1/2 -translate-x-[calc(100%+2rem)] -translate-y-1/2 text-7xl transition-all duration-200 hover:text-th-pink-600 hover:scale-105 cursor-pointer ${!showLeftNav ? "text-th-neutral-500/50" : "text-th-pink-500"}`}
                  >
                    ‹
                  </motion.button>
                )}

                <motion.div 
                  className="bg-white/90 rounded-xl p-8 shadow-2xl max-w-2xl w-full relative"
                  initial={{ 
                    y: isNavigating ? 0 : "100vh",
                    x: isNavigating ? (navigationDirection === 'left' ? "100vw" : "-100vw") : 0
                  }}
                  animate={{ 
                    y: 0,
                    x: 0
                  }}
                  exit={isClosing ? { y: "150vh" } : { x: navigationDirection === 'left' ? "100vw" : "-100vw" }}
                  transition={{ duration: 0.4 }}
                  onClick={(e) => e.stopPropagation()}
                >
                  {children}

                  {/* Close button */}
                  <button 
                    className="absolute top-4 right-4 text-th-neutral-950 text-xl"
                    onClick={handleClose}
                  >
                    ✕
                  </button>
                </motion.div>

                {/* Right navigation button */}
                {showRightNav && onNavigate && (
                  <motion.button
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    onClick={(e) => {
                      e.stopPropagation();
                      onNavigate('left');
                    }}
                    className={`absolute right-0 top-1/2 translate-x-[calc(100%+2rem)] -translate-y-1/2 text-7xl transition-all duration-200 hover:text-th-pink-600 hover:scale-105 cursor-pointer ${!showRightNav ? "text-th-neutral-500/50" : "text-th-pink-500"}`}
                  >
                    ›
                  </motion.button>
                )}
              </div>
            </motion.div>
          </AnimatePresence>
        </>
      )}
    </>
  );
} 