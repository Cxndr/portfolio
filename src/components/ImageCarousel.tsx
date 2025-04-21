"use client";

import { useState } from "react";
import ProjectNavButton from "@/components/ProjectNavButton";
import { DevProject } from "@/lib/devProjects";
import ProjectImageDesktop from "./ProjectImageDesktop";
import ProjectImageMobile from "./ProjectImageMobile";

type ImageCarouselProps = {
  project: DevProject;
  desktopImagePaths: string[];
  mobileImagePaths?: string[];
  className?: string;
};

// Re-add fixed dimensions
const DESKTOP_WIDTH = 1600;
const DESKTOP_HEIGHT = 927;
const MOBILE_WIDTH = 379;
const MOBILE_HEIGHT = 669;

export default function ImageCarousel({ project, desktopImagePaths, mobileImagePaths, className = "" }: ImageCarouselProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const totalDesktopImages = desktopImagePaths.length;
  const totalMobileImages = mobileImagePaths?.length ?? 0;

  // Use the minimum length to ensure indices match if mobile exists and paths were found
  const totalImages = mobileImagePaths && totalMobileImages > 0
    ? Math.min(totalDesktopImages, totalMobileImages)
    : totalDesktopImages;
    
  // Re-calculate aspect ratios for grid fr units
  const desktopAspectRatio = DESKTOP_WIDTH / DESKTOP_HEIGHT;
  const mobileAspectRatio = mobileImagePaths && totalMobileImages > 0 ? MOBILE_WIDTH / MOBILE_HEIGHT : 0;

  const handleNextImage = () => {
    const nextIndex = currentImageIndex + 1;
    if (nextIndex < totalImages) {
       setCurrentImageIndex(nextIndex); // Just update the index
    }
  };

  const handlePrevImage = () => {
    const prevIndex = currentImageIndex - 1;
    if (prevIndex >= 0) {
      setCurrentImageIndex(prevIndex); // Just update the index
    }
  };

  // Disable logic: Check if index is at the bounds or if there are no images
  const isPrevDisabled = currentImageIndex === 0 || totalImages <= 1;
  const isNextDisabled = currentImageIndex >= totalImages - 1 || totalImages <= 1;

  // Define base transition classes
  const imageTransitionClasses = "transition-opacity duration-300 ease-in-out";

  return (
    <div className={`w-full h-full flex flex-row justify-center items-center gap-4 lg:gap-8 translate-z-0 ${className}`}>

      {/* Outer card has px-3 */}
      <div className="w-full h-full flex flex-col justify-center items-center gap-3 bg-th-neutral-900 px-3 py-3 rounded-xl shadow-th shadow-th-pink-500 relative">
        
        <h3 className="max-md:!text-xl">{project.title}</h3>

        {/* Use Grid, items-center, gap-3 - Apply proportional columns via inline style */}
        <div 
          className={`w-full grow grid items-center gap-3`}
          style={{
            gridTemplateColumns: mobileImagePaths && totalMobileImages > 0 
              ? `auto minmax(0, ${desktopAspectRatio}fr) minmax(0, ${mobileAspectRatio}fr) auto` 
              : 'auto minmax(0, 1fr) auto'
          }}
        >

          {/* Grid Item 1: Prev Button */}
          <div className="flex justify-center items-center"> {/* No margin */}
            <ProjectNavButton
              direction="previous"
              onClick={handlePrevImage}
              disabled={isPrevDisabled}
            />
          </div>

          {/* Grid Item 2: Desktop Image Wrapper - Removed h-full */}
          <div>
            <ProjectImageDesktop
              desktopImagePaths={desktopImagePaths}
              currentImageIndex={currentImageIndex}
              totalDesktopImages={totalDesktopImages}
              project={project}
              imageTransitionClasses={imageTransitionClasses}
            />
          </div>

          {/* Grid Item 3: Mobile Image Wrapper (Conditional) - Removed h-full */}
          {mobileImagePaths && totalMobileImages > 0 && (
             <div>
              <ProjectImageMobile
                mobileImagePaths={mobileImagePaths}
                currentImageIndex={currentImageIndex}
                totalMobileImages={totalMobileImages}
                project={project}
                imageTransitionClasses={imageTransitionClasses}
              />
             </div>
          )}

          {/* Grid Item 4: Next Button */}
          <div className="flex justify-center items-center"> {/* No margin */}
            <ProjectNavButton
              direction="next"
              onClick={handleNextImage}
              disabled={isNextDisabled}
            />
          </div>

        </div>

      </div>

    </div>
  );
} 