import Image from "next/image";
import { DevProject } from "@/lib/devProjects";
import { motion, AnimatePresence } from "framer-motion";
import { useRef, useEffect, useState } from "react";

// No fixed dimensions needed - size comes from parent container

// Horizontal navigation variants
const navigationVariants = {
  enter: (direction: number) => {
    if (direction > 0) {
      return { x: "100%", opacity: 0 };
    } else {
      return { x: "-100%", opacity: 0 };
    }
  },
  center: {
    zIndex: 1,
    x: 0,
    y: 0,
    opacity: 1,
  },
  exit: (direction: number) => {
    return {
      zIndex: 0,
      x: direction < 0 ? "100%" : "-100%",
      opacity: 0,
    }
  },
};

// Vertical toggle variants (like modal open/close)
const verticalToggleVariants = {
  // Initial state depends on what viewType is coming INTO view
  hidden: (viewType: 'desktop' | 'mobile') => ({
    y: viewType === 'desktop' ? "-100%" : "100%", // Desktop enters from Top, Mobile enters from Bottom
    opacity: 0,
  }),
  visible: { // Normal state
    y: "0%",
    opacity: 1,
    transition: { duration: 0.4, ease: "easeInOut" },
  },
  // Exit state depends on what viewType is LEAVING view
  exit: (viewType: 'desktop' | 'mobile') => ({
    y: viewType === 'desktop' ? "100%" : "-100%", // Desktop exits to BOTTOM, Mobile exits to TOP
    opacity: 0,
    transition: { duration: 0.4, ease: "easeInOut" },
  }),
};

type ProjectImageProps = {
  imagePaths: string[];
  currentImageIndex: number;
  totalImages: number;
  project: DevProject;
  viewType: 'desktop' | 'mobile';
  className?: string;
};

export default function ProjectImage({
  imagePaths,
  currentImageIndex,
  totalImages,
  project,
  viewType,
  className = "",
}: ProjectImageProps) {

  const [isInitialLoad, setIsInitialLoad] = useState(true);
  const currentImagePath = imagePaths[currentImageIndex];
  const prevIndexRef = useRef(currentImageIndex);
  const direction = currentImageIndex > prevIndexRef.current ? 1 : -1;

  useEffect(() => {
    prevIndexRef.current = currentImageIndex;
  }, [currentImageIndex]);

  useEffect(() => {
    setIsInitialLoad(false);
  }, []);

  // Root container provides relative context for absolutely positioned motion.div
  return (
    <div className={`relative w-full h-full overflow-hidden ${className}`}>
      <AnimatePresence custom={viewType}>
        <motion.div
          key={viewType}
          className="absolute inset-0 w-full h-full"
          custom={viewType}
          variants={verticalToggleVariants}
          initial={isInitialLoad ? "visible" : "hidden"}
          animate="visible"
          exit="exit"
        >
          <AnimatePresence initial={false} custom={direction}>
            {currentImagePath ? (
              <motion.div
                key={currentImagePath}
                className="absolute inset-0 w-full h-full"
                custom={direction}
                variants={navigationVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ x: { type: "tween", ease: "easeInOut", duration: 0.5 }, opacity: { duration: 0.2 } }}
              >
                <Image
                  src={currentImagePath}
                  alt={`Image ${currentImageIndex + 1} of ${totalImages} for ${project.title} (${viewType} view)`}
                  fill
                  className={`object-contain drop-shadow-lg drop-shadow-black/40`}
                  priority={currentImageIndex === 0}
                />
              </motion.div>
            ) : (
              <div className="absolute inset-0">
                <Image
                  src="/img/dev/placeholder.png"
                  alt="Placeholder image"
                  fill
                  className="object-contain opacity-50 drop-shadow-lg drop-shadow-black/40"
                />
              </div>
            )}
          </AnimatePresence>
        </motion.div>
      </AnimatePresence>
    </div>
  );
} 