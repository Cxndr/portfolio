"use client"

import { useEffect, useState } from "react";
import Image from "next/image";
import Modal from "./Modal";
import { AnimatePresence } from "framer-motion";

interface Photo {
  src: string;
  position: {
    x: number;
    y: number;
  };
  rotation: number;
  zIndex: number;
}

interface PhotoData {
  src: string;
  description: string;
}

const truncateDescription = (description: string, maxLength: number = 20) => {
  if (description.length <= maxLength) return description;
  return description.substring(0, maxLength) + '...';
};

const calculateGridPositions = (numPhotos: number) => {
  // Calculate grid dimensions based on number of photos
  const gridCols = Math.ceil(Math.sqrt(numPhotos));
  const gridRows = Math.ceil(numPhotos / gridCols);
  
  // Calculate cell size
  const cellWidth = 100 / gridCols;
  const cellHeight = 100 / gridRows;
  
  // Generate positions
  const positions = [];
  for (let i = 0; i < numPhotos; i++) {
    const row = Math.floor(i / gridCols);
    const col = i % gridCols;
    
    // Base position in the center of the cell
    const baseX = (col * cellWidth) + (cellWidth / 2);
    const baseY = (row * cellHeight) + (cellHeight / 2);
    
    // Add some randomization within the cell
    const randomX = baseX + (Math.random() - 0.5) * (cellWidth * 0.4);
    const randomY = baseY + (Math.random() - 0.5) * (cellHeight * 0.4);
    
    positions.push({
      x: Math.max(15, Math.min(85, randomX)), // Ensure within bounds
      y: Math.max(15, Math.min(85, randomY)), // Ensure within bounds
    });
  }
  
  return positions;
};

export default function ScatteredPhotos() {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedPhotoId, setSelectedPhotoId] = useState<string | null>(null);
  const [hoveredPhotoId, setHoveredPhotoId] = useState<string | null>(null);

  const closeModal = () => setModalOpen(false);
  const openModal = () => setModalOpen(true);

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        const response = await fetch('/api/photos');
        const data: PhotoData[] = await response.json();
        
        // Generate grid positions
        const positions = calculateGridPositions(data.length);
        
        // Generate random positions and rotations for each photo
        const photosWithLayout = data.map((photo, index) => ({
          src: photo.src,
          position: positions[index],
          rotation: Math.random() * 70 - 35, // -35 to 35 degrees
          zIndex: index
        }));

        setPhotos(photosWithLayout);
      } catch (error) {
        console.error('Error fetching photos:', error);
      }
    };

    fetchPhotos();
  }, []);

  const handlePhotoClick = (photoId: string) => {
    setSelectedPhotoId(photoId);
    openModal();
  };

  const modalItems = photos.map(photo => ({
    id: photo.src,
    content: (
      <div className="w-full h-full flex flex-col items-center justify-center">

        <div className="w-full grow flex justify-center items-center">
          <Image
            src={photo.src}
            alt="Marketing photo"
            className="
              object-contain position-[unset] relative 
              shadow-md shadow-th-neutral-950/50 
              rounded-lg
              max-h-10/12
              max-w-10/12
              "
            height={1000}
            width={1000}
            priority
          />
        </div>

        <p className="text-center text-neutral-950 font-caveat !text-3xl mt-4">
          Test Description
        </p>

      </div>
    )
  }));

  return (
    <>
      <div className="relative w-full h-full">
        {photos.map((photo) => (
          <div
            key={photo.src}
            className="absolute cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            style={{
              left: `${photo.position.x}%`,
              top: `${photo.position.y}%`,
              transform: `translate(-50%, -50%) rotate(${photo.rotation}deg)`,
              zIndex: hoveredPhotoId === photo.src ? 450 : photo.zIndex
            }}
            onMouseEnter={() => setHoveredPhotoId(photo.src)}
            onMouseLeave={() => setHoveredPhotoId(null)}
            onClick={() => handlePhotoClick(photo.src)}
          >
            <div className="bg-white p-4 shadow-lg transform hover:scale-105 transition-transform duration-300">
              <div className="relative w-[200px] h-[200px]">
                <Image
                  src={photo.src}
                  alt="Marketing photo"
                  fill
                  className="object-cover"
                  sizes="200px"
                />
              </div>
              <p className="mt-2 text-center font-caveat text-sm whitespace-nowrap overflow-hidden text-ellipsis max-w-[192px]">
                {truncateDescription(photo.src.split('/').pop()?.replace(/\.[^/.]+$/, "") || "")}
              </p>
            </div>
          </div>
        ))}
      </div>

      <AnimatePresence>
        {modalOpen && (
          <Modal modalOpen={modalOpen} handleClose={closeModal}>
            {modalItems.find(item => item.id === selectedPhotoId)?.content}
          </Modal>
        )}
      </AnimatePresence>

    </>
  );
} 