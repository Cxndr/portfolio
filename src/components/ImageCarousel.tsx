"use client";

import Image from "next/image";
import { useState } from "react";
import ProjectNavButton from "@/components/ProjectNavButton";
import { DevProject } from "@/lib/devProjects";

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
    <div className={`w-full flex flex-row justify-center items-center gap-4 lg:gap-8 translate-z-0 ${className}`}>
      <ProjectNavButton
        direction="previous"
        onClick={handlePrevImage}
        disabled={isPrevDisabled}
      />

      <div className="w-full flex flex-col justify-center items-center gap-3 bg-th-neutral-900 px-4 py-3 rounded-3xl shadow-th shadow-th-pink-500 relative">
        <h3 className="max-md:!text-xl">{project.title}</h3>

        {/* Container - Reverted: No aspect-square */}
        <div className="relative w-full overflow-hidden rounded-xl bg-th-neutral-800">
          {desktopImagePaths.length > 0 ? (
            <>
              {/* 1. Hidden Sizer Image (keeps container height correct for transitions) */}
              {currentDesktopImagePath && (
                <Image
                  key={currentDesktopImagePath + "-sizer"}
                  src={currentDesktopImagePath}
                  alt=""
                  aria-hidden="true"
                  width={1000}
                  height={1000}
                  className="block w-full h-auto opacity-0 pointer-events-none"
                  priority={currentImageIndex === 0}
                  unoptimized
                />
              )}
              {/* 2. Visible Stacked Images */}
              {desktopImagePaths.map((imagePath, index) => (
                <Image
                  key={imagePath}
                  src={imagePath}
                  alt={`Image ${index + 1} of ${totalDesktopImages} for ${project.title} on desktop`}
                  width={1000}
                  height={1000}
                  className={`absolute inset-0 w-full h-full object-cover rounded-xl ${imageTransitionClasses} ${index === currentImageIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
                  priority={index === 0 && currentImageIndex === 0}
                  unoptimized
                />
              ))}
            </>
          ) : (
            // Fallback: Use the placeholder image
            <Image
              src="/img/dev/placeholder.png" // Path to placeholder
              alt="Placeholder image"
              width={1000} // Use same aspect ratio hint as project images
              height={1000}
              // Size like a regular image within the container width
              className="w-full h-auto object-contain rounded-xl" // Use contain to show whole placeholder
              unoptimized
            />
          )}
        </div>

        {/* Mobile Image Section */}
        {mobileImagePaths && mobileImagePaths.length > 0 && (
          <>
            {/* 1. Background Element (Sibling) */}
            <div className="absolute -left-10 -bottom-10 h-2/3 w-auto bg-th-neutral-800 rounded-lg z-10"> {/* Positioned identically, lower z-index */}
              {/* Needs a sizer inside *if* w-auto calculation depends on content */}
              {currentMobileImagePath && (
                 <div aria-hidden="true" className="relative w-full h-full"> {/* Need relative parent for sizer */}
                    <Image
                      key={currentMobileImagePath + "-bg-sizer"} // Unique key
                      src={currentMobileImagePath}
                      alt="" aria-hidden="true" width={375} height={668}
                      className="block h-full w-auto opacity-0 pointer-events-none" // sizer styles
                      unoptimized
                    />
                </div>
              )}
            </div>

            {/* 2. Image Container Element (Sibling) */}
            <div className="absolute -left-10 -bottom-10 h-2/3 w-auto pointer-events-none overflow-hidden z-50"> {/* Changed z-20 to z-50 */}
              {/* Inner container for relative positioning */}
              <div className="relative w-full h-full">
                {/* Sizer Image (still needed if w-auto calc needs it) */}
                {currentMobileImagePath && (
                  <Image
                    key={currentMobileImagePath + "-sizer-mobile"}
                    src={currentMobileImagePath}
                    alt="" aria-hidden="true" width={375} height={668}
                    className="block h-full w-auto opacity-0 pointer-events-none"
                    unoptimized
                  />
                )}
                {/* Stacked Images */}
                {mobileImagePaths.map((imagePath, index) => (
                  <Image
                    key={imagePath + "-mobile"}
                    src={imagePath}
                    alt={`Image ${index + 1} of ${totalMobileImages} for ${project.title} on mobile`}
                    width={375}
                    height={668}
                    className={`absolute inset-0 w-full h-full object-contain rounded-lg shadow-md shadow-black/40 ${imageTransitionClasses} ${index === currentImageIndex ? 'opacity-100 z-40' : 'opacity-0 z-0'}`} // Highest z-index for active
                    unoptimized
                  />
                ))}
              </div>
            </div>
          </>
        )}

      </div>

      <ProjectNavButton
        direction="next"
        onClick={handleNextImage}
        disabled={isNextDisabled}
      />
    </div>
  );
} 