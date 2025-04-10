"use client"

import { useEffect, useState } from "react";
import Image from "next/image";
import Modal from "./Modal";
import { AnimatePresence } from "framer-motion";

interface Photo {
  src: string;
  client: string;
  description: string;
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
  if (numPhotos === 0) return [];

  // --- Calculate grid based on 0-100% space ---
  const fullWidth = 100;
  const fullHeight = 100;
  const gridCols = Math.ceil(Math.sqrt(numPhotos));
  const gridRows = Math.ceil(numPhotos / gridCols);
  const fullCellWidth = fullWidth / gridCols;
  const fullCellHeight = fullHeight / gridRows;

  const photosInLastRow = numPhotos % gridCols || gridCols;
  const isLastRowIncomplete = photosInLastRow !== gridCols;
  const lastRowIndex = gridRows - 1;

  // --- Define target boundaries and range ---
  const boundaryMin = 13;
  const boundaryMax = 87;
  const availableRange = boundaryMax - boundaryMin;

  const positions = [];
  for (let i = 0; i < numPhotos; i++) {
    const row = Math.floor(i / gridCols);
    const col = i % gridCols;

    // Calculate ideal center in 0-100% grid
    let idealX_0_100: number;
    const idealY_0_100 = (row * fullCellHeight) + (fullCellHeight / 2);

    if (row === lastRowIndex && isLastRowIncomplete) {
      // Distribute evenly in the last row (0-100% space)
      const effectiveFullCellWidth = fullWidth / photosInLastRow;
      idealX_0_100 = (col * effectiveFullCellWidth) + (effectiveFullCellWidth / 2);
    } else {
      // Standard grid center (0-100% space)
      idealX_0_100 = (col * fullCellWidth) + (fullCellWidth / 2);
    }

    // Map the 0-100% ideal center to the 20-80% range
    const baseX = boundaryMin + (idealX_0_100 / 100) * availableRange;
    const baseY = boundaryMin + (idealY_0_100 / 100) * availableRange;

    // Calculate randomization based on the *scaled* cell size in the 20-80 range
    const scaledCellWidth = (fullCellWidth / 100) * availableRange;
    const scaledCellHeight = (fullCellHeight / 100) * availableRange;
    const randomizationFactor = 0.15;
    const randomOffsetX = (Math.random() - 0.5) * (scaledCellWidth * randomizationFactor);
    const randomOffsetY = (Math.random() - 0.5) * (scaledCellHeight * randomizationFactor);

    const finalX = baseX + randomOffsetX;
    const finalY = baseY + randomOffsetY;

    // Clamp final position to the 13-87 boundaries
    positions.push({
      x: Math.max(boundaryMin, Math.min(boundaryMax, finalX)),
      y: Math.max(boundaryMin, Math.min(boundaryMax, finalY)),
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
        
        // Generate positions using the refined grid logic
        const positions = calculateGridPositions(data.length);

        // Create and shuffle indices for random assignment
        const indices = Array.from({ length: data.length }, (_, k) => k);
        for (let i = indices.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [indices[i], indices[j]] = [indices[j], indices[i]]; // Swap
        }
        
        // Assign shuffled positions, z-indices, and parse filename
        const photosWithLayout = data.map((photo, index) => {
          const shuffledIndex = indices[index];

          const filenameWithExtension = photo.src.split('/').pop() || '';
          const filename = filenameWithExtension.replace(/\.[^/.]+$/, ''); // Remove extension
          const cleanedFilename = decodeURIComponent(filename).replace(/_/g, ' '); // Decode URL encoding and replace underscores
          
          const parts = cleanedFilename.split(' - ');
          const client = parts.length > 1 ? parts[0].trim() : 'Unknown Client'; // Fallback
          const description = parts.length > 1 ? parts.slice(1).join(' - ').trim()+'.' : cleanedFilename; // Fallback

          return {
            src: photo.src,
            client,
            description,
            position: positions[shuffledIndex],
            rotation: Math.random() * 70 - 35, // -35 to 35 degrees
            zIndex: shuffledIndex // Use shuffled index for z-order too
          };
        });

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

        <div className="flex justify-center items-center h-10/12 w-10/12 relative">
          <div className="w-full h-full">
            <Image
              src={photo.src}
              alt="Marketing photo"
              className="
                drop-shadow-lg drop-shadow-th-neutral-950
                object-contain
                relative
              "
              fill
              priority
            />
          </div>
        </div>

        <p className="text-center text-neutral-950 mt-4 !text-lg max-w-prose">
          {photo.description}
        </p>
        {photo.client && 
          <div className="gap-2 text-neutral-950 font-semibold mt-2">
            <span className="text-xl italic">
              {photo.client}
            </span>
          </div>
        }

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
                {truncateDescription(photo.description || "", 25)}
              </p>
            </div>
          </div>
        ))}
      </div>

      <AnimatePresence>
        {modalOpen && (
          <Modal 
            modalOpen={modalOpen}
            handleClose={closeModal} 
            contentArray={modalItems.map(item => item.content)} 
            contentIndex={modalItems.findIndex(item => item.id === selectedPhotoId)} 
          />
        )}
      </AnimatePresence>

    </>
  );
} 