"use client";

import { useState } from "react";
import ProjectNavButton from "@/components/ProjectNavButton";
import { DevProject } from "@/lib/devProjects";
import ProjectImageDesktop from "./ProjectImageDesktop";
import ProjectImageMobile from "./ProjectImageMobile";
import { AnimatePresence } from "framer-motion";
import Modal from "./Modal";
import DynamicBackground from "./DynamicBackground";
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
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImageId, setSelectedImageId] = useState<string | null>(null);

  const closeModal = () => setModalOpen(false);
  const openModal = () => setModalOpen(true);

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

  // Grid columns strings for different layouts
  const lgGridCols = mobileImagePaths && totalMobileImages > 0
    ? `auto minmax(0, ${desktopAspectRatio}fr) minmax(0, ${mobileAspectRatio}fr) auto`
    : 'auto minmax(0, 1fr) auto';
  const mobileImageCols = mobileImagePaths && totalMobileImages > 0
    ? `minmax(0, ${desktopAspectRatio}fr) minmax(0, ${mobileAspectRatio}fr)`
    : 'minmax(0, 1fr)';
  const modalImageCols = mobileImagePaths && totalMobileImages > 0
    ? `minmax(0, ${desktopAspectRatio}fr) minmax(0, ${mobileAspectRatio}fr)`
    : 'minmax(0, 1fr)';


  const modalItems = desktopImagePaths.map(path => ({
    id: path,
    content: (
      <DynamicBackground subtle={true}>
        <div className="w-full h-full flex flex-col items-center justify-center p-4 pt-0 md:p-8 ">

          <div 
            className="w-full grid items-center gap-3"
            style={{ 
              gridTemplateColumns: modalImageCols
            }}
          >

            <ProjectImageDesktop
              desktopImagePaths={desktopImagePaths}
              currentImageIndex={currentImageIndex}
              totalDesktopImages={totalDesktopImages}
              project={project}
              imageTransitionClasses={imageTransitionClasses}
            />

            <ProjectImageMobile
              mobileImagePaths={mobileImagePaths}
              currentImageIndex={currentImageIndex}
              totalMobileImages={totalMobileImages}
              project={project}
              imageTransitionClasses={imageTransitionClasses}
            />

          </div>

        </div>
      </DynamicBackground>
    )
  }))

  const handleImageClick = (id: string) => {
    setSelectedImageId(id);
    openModal();
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
              absolute -top-10
            "
          >
            {project.title}
          </h3>

          {/* --- Desktop Layout (Grid - Hidden on Mobile) --- */}
          <div
            className={`w-full grow hidden lg:grid items-center gap-3`}
            style={{ gridTemplateColumns: lgGridCols }}
          >
            {/* Prev Button (LG) */}
            <div className="flex justify-center items-center">
              <ProjectNavButton direction="previous" onClick={handlePrevImage} disabled={isPrevDisabled} />
            </div>
            {/* Desktop Image (LG) */}
            <div onClick={() => handleImageClick(desktopImagePaths[currentImageIndex])} className="cursor-pointer">
              <ProjectImageDesktop
                desktopImagePaths={desktopImagePaths}
                currentImageIndex={currentImageIndex}
                totalDesktopImages={totalDesktopImages}
                project={project}
                imageTransitionClasses={imageTransitionClasses}
              />
            </div>
            {/* Mobile Image (Conditional - LG) */}
            {mobileImagePaths && totalMobileImages > 0 && (
              <div className="cursor-pointer" onClick={() => handleImageClick(desktopImagePaths[currentImageIndex])}>
                <ProjectImageMobile
                    mobileImagePaths={mobileImagePaths}
                    currentImageIndex={currentImageIndex}
                    totalMobileImages={totalMobileImages}
                    project={project}
                    imageTransitionClasses={imageTransitionClasses}
                />
              </div>
            )}
            {/* Next Button (LG) */}
            <div className="flex justify-center items-center">
              <ProjectNavButton direction="next" onClick={handleNextImage} disabled={isNextDisabled} />
            </div>
          </div>

          {/* --- Mobile Layout (Flex Column - Hidden on LG) --- */}
          <div className="w-full grow flex flex-col lg:hidden items-center justify-end gap-1">
            {/* Mobile Image Area (Grid for side-by-side images) */}
            <div
              className="w-full grid items-center gap-3"
              style={{ gridTemplateColumns: mobileImageCols }}
            >
              {/* Desktop Image (Mobile) */}
              <div onClick={() => handleImageClick(desktopImagePaths[currentImageIndex])}>
                <ProjectImageDesktop
                  desktopImagePaths={desktopImagePaths}
                  currentImageIndex={currentImageIndex}
                  totalDesktopImages={totalDesktopImages}
                  project={project}
                  imageTransitionClasses={imageTransitionClasses}
                />
              </div>
              {/* Mobile Image (Conditional - Mobile) */}
              {mobileImagePaths && totalMobileImages > 0 && (
                <div onClick={() => handleImageClick(desktopImagePaths[currentImageIndex])}>
                  <ProjectImageMobile
                    mobileImagePaths={mobileImagePaths}
                    currentImageIndex={currentImageIndex}
                    totalMobileImages={totalMobileImages}
                    project={project}
                    imageTransitionClasses={imageTransitionClasses}
                  />
                </div>
              )}
            </div>
            {/* Mobile Button Area */}
            <div className="w-full flex justify-center items-center gap-16 mt-2">
              <ProjectNavButton direction="previous" onClick={handlePrevImage} disabled={isPrevDisabled} />
              <ProjectNavButton direction="next" onClick={handleNextImage} disabled={isNextDisabled} />
            </div>
          </div>

        </div>

      </div>

      <AnimatePresence>
        {modalOpen && (
          <Modal
            modalOpen={modalOpen}
            handleClose={closeModal}
            contentArray={modalItems.map(item => item.content)}
            contentIndex={modalItems.findIndex(item => item.id === selectedImageId)}
          />
        )}
      </AnimatePresence>
    </>
  );
} 