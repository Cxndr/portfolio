"use client";

import { useState } from "react";
import Image from "next/image";
import { DevProject } from "@/lib/devProjects";
import ProjectImage from "./ProjectImage";
import { AnimatePresence } from "framer-motion";
import Modal from "./Modal";
import DynamicBackground from "./DynamicBackground";
import DisplayModeToggle from './DisplayModeToggle';
import ImageIndexIndicator from './ImageIndexIndicator';
import NavButton from "./NavButton";

type ImageCarouselProps = {
  project: DevProject;
  desktopImagePaths: string[];
  mobileImagePaths?: string[];
  className?: string;
};


export default function ImageCarousel({ project, desktopImagePaths, mobileImagePaths, className = "" }: ImageCarouselProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImageSrc, setSelectedImageSrc] = useState<string | null>(null);
  const [selectedImageType, setSelectedImageType] = useState<'desktop' | 'mobile' | null>(null);
  const [displayMode, setDisplayMode] = useState<'desktop' | 'mobile'>('desktop'); // Added state for display mode

  const closeModal = () => {
    setModalOpen(false);
    setSelectedImageSrc(null);
    setSelectedImageType(null);
  };
  const openModal = () => setModalOpen(true);

  const totalMobileImages = mobileImagePaths?.length ?? 0;
  const hasMobileImages = totalMobileImages > 0;

  const currentImagePaths = displayMode === 'desktop' ? desktopImagePaths : (mobileImagePaths || []);
  const currentTotalImages = currentImagePaths.length;



  const handleNextImage = () => {
    const nextIndex = currentImageIndex + 1;
    if (nextIndex < currentTotalImages) {
      setCurrentImageIndex(nextIndex);
    }
  };

  const handlePrevImage = () => {
    const prevIndex = currentImageIndex - 1;
    if (prevIndex >= 0) {
      setCurrentImageIndex(prevIndex);
    }
  };

  // Disable logic: Based on currentTotalImages for the active mode
  const isPrevDisabled = currentImageIndex === 0 || currentTotalImages <= 1;
  const isNextDisabled = currentImageIndex >= currentTotalImages - 1 || currentTotalImages <= 1;

  // Handler to change display mode
  const handleToggleMode = (newMode: 'desktop' | 'mobile') => {
    if (newMode !== displayMode) {
      // Only allow switching to mobile if mobile images exist
      if (newMode === 'mobile' && !hasMobileImages) return;

      setDisplayMode(newMode);
      setCurrentImageIndex(0); // Reset index on toggle
    }
  };

  // Updated image click handler
  const handleImageClick = () => {
    const currentSrc = currentImagePaths[currentImageIndex];
    if (currentSrc) {
        setSelectedImageSrc(currentSrc);
        setSelectedImageType(displayMode); // Use current displayMode
        openModal();
    }
  };


  return (
    <>
      <div className={`w-full h-full mt-4 flex flex-row justify-center items-center gap-4 lg:gap-8 translate-z-0 ${className}`}>

        {/* Outer card */}
        <div className="w-full h-full flex flex-col justify-center items-center gap-3 bg-th-neutral-900 px-3 py-3 rounded-xl shadow-th-sm md:shadow-th shadow-th-pink-500 relative">

          <h3
            className="
              max-md:!text-xl mt-2 bg-th-pink-500 px-4 py-3
              rounded-lg shadow-md shadow-th-neutral-950/50
              absolute -top-10 left-1/2 -translate-x-1/2 whitespace-nowrap // Centered title
            "
          >
            {project.title}  
          </h3>

          {hasMobileImages && (
            <div className="absolute max-md:bottom-2.5 right-2.5 md:top-4 md:right-4 z-20">
              <DisplayModeToggle
                currentMode={displayMode}
                onToggle={handleToggleMode}
                hasMobile={hasMobileImages}
              />
            </div>
          )}

          {/* Single Image Display Area */}
          <div className="w-full min-h-56 grow flex flex-col items-center justify-center pt-6 md:pt-12"> {/* Added padding top for toggle space */}

            {/* Image Container - Central flex row */}
            <div className="w-full max-w-6xl flex items-center justify-center h-full"> {/* Added h-full */}

                {/* Prev Button Container (Fixed Size) */}
                <div className="flex-shrink-0 w-10 md:w-12 flex justify-center m-1">
                  <NavButton
                    direction="left"
                    onClick={handlePrevImage}
                    disabled={isPrevDisabled}
                    size="small"
                    onDark={true}
                  />
                </div>

                {/* Conditionally Rendered Image */}
                <div
                    className="cursor-pointer w-full h-full flex flex-col items-center justify-center m-2.5"
                    onClick={handleImageClick}
                >
                  {/* Render the consolidated ProjectImage component */}
                  <ProjectImage
                    imagePaths={currentImagePaths} // Pass the currently selected paths
                    currentImageIndex={currentImageIndex}
                    totalImages={currentTotalImages} // Pass the total for the current mode
                    project={project}
                    viewType={displayMode} // Pass current mode for alt text etc.
                    
                  />
                </div>

                {/* Next Button Container (Fixed Size) */}
                <div className="flex-shrink-0 w-10 md:w-12 flex justify-center m-1">
                  <NavButton
                    direction="right"
                    onClick={handleNextImage}
                    disabled={isNextDisabled}
                    size="small"
                    onDark={true}
                  />
                </div>
            </div>

            {/* Image Index Indicator (Optional) */}
            <ImageIndexIndicator
              totalImages={currentTotalImages}
              currentIndex={currentImageIndex}
              className="mb-1 mt-3.5 md:mb-2 md:mt-4.5"
            />
          </div>

        </div> {/* End Outer Card */}

      </div> {/* End Container */}

      {/* Modal remains largely the same, but props need adjustment */}
      <AnimatePresence>
        {modalOpen && selectedImageSrc && selectedImageType && (
          <Modal
            modalOpen={modalOpen}
            handleClose={closeModal}
            // Pass the correct array based on the type selected *when the modal was opened*
            contentArray={
              (selectedImageType === 'desktop' ? desktopImagePaths : mobileImagePaths || [])
              .map((src) => (
                <DynamicBackground subtle={true} key={src}>
                  <div className="w-full h-full flex flex-col items-center justify-center p-4 pt-0 md:p-8 ">
                    {/* Use selectedImageType to determine aspect ratio/styling if needed */}
                    <div className={`relative w-11/12 h-5/6 md:w-10/12 md:h-10/12 mb-4 ${selectedImageType === 'mobile' ? 'max-w-sm' : ''}`}> {/* Example: constrain mobile width */}
                      <Image
                        src={src}
                        alt={`${project.title} ${selectedImageType} view`}
                        className="object-contain drop-shadow-lg"
                        fill
                        priority
                        sizes={selectedImageType === 'desktop' ? "(max-width: 768px) 90vw, 80vw" : "(max-width: 768px) 90vw, 40vw"} // Adjust sizes
                      />
                    </div>
                  </div>
                </DynamicBackground>
              ))
            }
            // Find index within the correct array
            contentIndex={
              (selectedImageType === 'desktop' ? desktopImagePaths : mobileImagePaths || [])
                .findIndex(src => src === selectedImageSrc) ?? 0 // Use selectedImageType
            }
          />
        )}
      </AnimatePresence>
    </>
  );
} 