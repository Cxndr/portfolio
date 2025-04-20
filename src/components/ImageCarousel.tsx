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

export default function ImageCarousel({ project, desktopImagePaths, mobileImagePaths, className = "" }: ImageCarouselProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const totalDesktopImages = desktopImagePaths.length;
  const totalMobileImages = mobileImagePaths?.length ?? 0;

  // Use the minimum length to ensure indices match if mobile exists and paths were found
  const totalImages = mobileImagePaths && totalMobileImages > 0
    ? Math.min(totalDesktopImages, totalMobileImages)
    : totalDesktopImages;

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

  // Re-calculate current paths for sizers
  const currentDesktopImagePath = totalDesktopImages > 0 ? desktopImagePaths[currentImageIndex] : undefined;
  const currentMobileImagePath = (mobileImagePaths && currentImageIndex < mobileImagePaths.length)
      ? mobileImagePaths[currentImageIndex]
      : undefined;

  return (
    <div className={`w-full h-full flex flex-row justify-center items-center gap-4 lg:gap-8 translate-z-0 ${className}`}>

      <div className="w-full h-full flex flex-col justify-center items-center gap-3 bg-th-neutral-900 px-3 py-3 rounded-xl shadow-th shadow-th-pink-500 relative">
        
        <h3 className="max-md:!text-xl">{project.title}</h3>

        <div className="w-full grow flex flex-row justify-between items-center gap-3">

          <div className="">
            <ProjectNavButton
              direction="previous"
              onClick={handlePrevImage}
              disabled={isPrevDisabled}
            />
          </div>

          <div className="">
            <ProjectImageDesktop
              desktopImagePaths={desktopImagePaths}
              currentImageIndex={currentImageIndex}
              currentDesktopImagePath={currentDesktopImagePath}
              totalDesktopImages={totalDesktopImages}
              project={project}
            imageTransitionClasses={imageTransitionClasses}
            />
          </div>

          <div className="">
            <ProjectImageMobile
              mobileImagePaths={mobileImagePaths}
              currentImageIndex={currentImageIndex}
              currentMobileImagePath={currentMobileImagePath}
              totalMobileImages={totalMobileImages}
              project={project}
              imageTransitionClasses={imageTransitionClasses}
            />
          </div>

          <div className="">
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