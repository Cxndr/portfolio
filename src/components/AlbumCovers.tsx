"use client"

import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaSpotify, FaSoundcloud, FaHandPointer, FaBandcamp } from "react-icons/fa";
import Button from "./Button";

interface AlbumInfo {
  id: string;
  title: string;
  image: string;
  description: string;
  releaseDate: string;
  spotifyLink?: string;
  soundcloudLink?: string;
  bandcampLink?: string;
}

interface AlbumCoverProps {
  album: AlbumInfo;
  className?: string;
  shadowColor?: string;
  onSelect: (albumId: string) => void;
}

// Individual Album Cover Component
function AlbumCover({ album, className = "", shadowColor = "shadow-th-blue-500", onSelect }: AlbumCoverProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  
  useEffect(() => {
    setIsMounted(true);
  }, []);
  
  return (
    <div 
      className={`flex flex-col items-center justify-center transition-all duration-300 cursor-pointer relative ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => onSelect(album.id)}
    >
      <div className="relative">
        <Image 
          src={album.image} 
          alt={`${album.title} album cover`} 
          width={132} 
          height={132} 
          className={`rounded-lg border-2 border-th-neutral-950 shadow-th-sm ${shadowColor} transition-all duration-300 ${isHovered ? "shadow-th-sm-hover translate-x-[-4px] translate-y-[-4px]" : ""}`}
        />
        
        {/* label */}
        <div className={`absolute -rotate-8 -top-3 -left-3 px-3 py-1.5 bg-th-yellow-500 rounded-lg shadow-sm shadow-th-neutral-950/50 transition-all duration-200 ease-[cubic-bezier(0.25,0.1,0.25,1)] ${isHovered ? "opacity-100" : "opacity-0"}`}>
          <span className="text-th-neutral-50 text-xs font-bold flex items-center gap-1">
            {isMounted && <FaHandPointer className="text-sm" aria-hidden="true" />} for info!
          </span>
        </div>
      </div>
      <span className="label text-center mt-3 !font-medium text-th-neutral-950">{album.title}</span>
    </div>
  );
}

export default function AlbumCovers() {
  const [selectedAlbum, setSelectedAlbum] = useState<string | null>(null);
  const [previousAlbum, setPreviousAlbum] = useState<string | null>(null);
  const [navigationDirection, setNavigationDirection] = useState<'left' | 'right' | null>(null);
  const [isClosing, setIsClosing] = useState(false);

  const albums: Record<string, AlbumInfo> = {
    feelgoodbad: {
      id: "feelgoodbad",
      title: "feelgoodbad",
      image: "/img/albumcover-fgb.png",
      description: "A blend of electronic beats and ambient textures, exploring the duality of emotions through sound. Released in 2023, this album features 8 tracks that take listeners on a journey through contrasting moods.",
      releaseDate: "2023",
      spotifyLink: "https://open.spotify.com",
      soundcloudLink: "https://soundcloud.com",
      bandcampLink: "https://bandcamp.com"
    },
    trxsh: {
      id: "trxsh",
      title: "trxsh",
      image: "/img/albumcover-trash.png",
      description: "An experimental collection that transforms discarded sounds into beautiful compositions. This 2022 release challenges perceptions of what music can be, creating harmony from chaos.",
      releaseDate: "2022",
      spotifyLink: "https://open.spotify.com",
      soundcloudLink: "https://soundcloud.com",
      bandcampLink: "https://bandcamp.com"
    }
  };

  const handleClose = () => {
    setIsClosing(true);
  };

  useEffect(() => {
    if (isClosing) {
      const timer = setTimeout(() => {
        setSelectedAlbum(null);
        setIsClosing(false);
        setPreviousAlbum(null);
        setNavigationDirection(null);
      }, 400);
      return () => clearTimeout(timer);
    }
  }, [isClosing]);

  const handleNavigation = (direction: 'left' | 'right') => {
    const albumIds = Object.keys(albums);
    const currentIndex = albumIds.indexOf(selectedAlbum!);
    
    if (direction === 'left' && currentIndex < albumIds.length - 1) {
      setPreviousAlbum(selectedAlbum);
      setNavigationDirection('left');
      setSelectedAlbum(albumIds[currentIndex + 1]);
    } else if (direction === 'right' && currentIndex > 0) {
      setPreviousAlbum(selectedAlbum);
      setNavigationDirection('right');
      setSelectedAlbum(albumIds[currentIndex - 1]);
    }
  };

  const handleAlbumClick = (albumId: string) => {
    setIsClosing(false);
    setPreviousAlbum(null);
    setNavigationDirection(null);
    setSelectedAlbum(albumId);
  };

  const isNavigating = previousAlbum !== null;

  return (
    <div className="flex flex-row">
      <AlbumCover 
        album={albums.feelgoodbad} 
        className="-rotate-11 z-10 hover:scale-110 hover:rotate-0 hover:z-50 hover:-translate-x-8" 
        shadowColor="shadow-th-pink-500"
        onSelect={handleAlbumClick} 
      />

      <AlbumCover 
        album={albums.trxsh} 
        className="rotate-9 z-20 -translate-x-1 translate-y-4 hover:scale-110 hover:rotate-0 hover:z-50 hover:-translate-x-8" 
        shadowColor="shadow-th-blue-500"
        onSelect={handleAlbumClick} 
      />

      {/* Modal */}
      {(selectedAlbum || isClosing) && (
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

          <AnimatePresence mode="wait">
            <motion.div
              key={`modal-${selectedAlbum}-${isClosing ? 'closing' : 'open'}`}
              className="fixed inset-0 z-50"
            >
              <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center gap-8">
                {/* Left navigation button */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleNavigation('right');
                  }}
                  className={`text-7xl transition-all duration-200 hover:text-th-pink-600 hover:scale-105 cursor-pointer ${selectedAlbum === Object.keys(albums)[0] ? "text-th-neutral-500/50" : "text-th-pink-500"}`}
                >
                  ‹
                </button>

                {/* Modal content */}
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
                  <div className="flex flex-col items-center">
                    {/* Album image */}
                    <motion.div
                      layoutId={`album-cover-${selectedAlbum && albums[selectedAlbum].id}`}
                      className="relative w-1/2 aspect-square"
                      transition={{ duration: 0.4 }}
                    >
                      <Image 
                        src={selectedAlbum ? albums[selectedAlbum].image : ''}
                        alt={selectedAlbum ? `${albums[selectedAlbum].title} album cover` : ''}
                        width={1000}
                        height={1000}
                        className="rounded-lg border-0 border-th-neutral-950 shadow-sm shadow-th-neutral-950/20"
                      />
                    </motion.div>
                    
                    {/* Album title */}
                    <motion.h2 
                      layoutId={`album-title-${selectedAlbum && albums[selectedAlbum].id}`}
                      className="text-3xl font-bold mb-6 text-th-neutral-800 mt-3"
                      transition={{ duration: 0.4 }}
                    >
                      {selectedAlbum && albums[selectedAlbum].title}
                    </motion.h2>
                    
                    {/* Album info */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: isNavigating ? 0 : 0.3, duration: 0.25 }}
                      className="text-th-neutral-950 text-center mb-8"
                    >
                      {selectedAlbum && (
                        <>
                          <p className="mb-4">{albums[selectedAlbum].description}</p>
                          <p className="text-sm">Released: {albums[selectedAlbum].releaseDate}</p>
                        </>
                      )}
                    </motion.div>
                    
                    {/* Action buttons */}
                    <motion.div 
                      className="flex gap-4 justify-center"
                      initial={{ opacity: 0, y: 40 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: isNavigating ? 0 : 0.4, duration: 0.3 }}
                    >
                      {selectedAlbum && albums[selectedAlbum].spotifyLink && (
                        <Button 
                          href={albums[selectedAlbum].spotifyLink}
                          className="!bg-green-500 hover:shadow-th-neutral-800"
                        >
                          <FaSpotify className="w-6 h-6 mr-1 -ml-1" /> Spotify
                        </Button>
                      )}
                      
                      {selectedAlbum && albums[selectedAlbum].soundcloudLink && (
                        <Button 
                          href={albums[selectedAlbum].soundcloudLink}
                          className="!bg-orange-500 hover:shadow-th-neutral-800"
                        >
                          <FaSoundcloud className="w-6 h-6 mr-1 -ml-1" /> SoundCloud
                        </Button>
                      )}

                      {selectedAlbum && albums[selectedAlbum].bandcampLink && (
                        <Button 
                          href={albums[selectedAlbum].bandcampLink}
                          className="!bg-[#629aa9] hover:shadow-th-neutral-800"
                        >
                          <FaBandcamp className="w-6 h-6 mr-1 -ml-1" /> Bandcamp
                        </Button>
                      )}
                    </motion.div>
                  </div>

                  {/* Close button */}
                  <button 
                    className="absolute top-4 right-4 text-th-neutral-950 text-xl"
                    onClick={handleClose}
                  >
                    ✕
                  </button>
                </motion.div>

                {/* Right navigation button */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleNavigation('left');
                  }}
                  className={`text-7xl transition-all duration-200 hover:text-th-pink-600 hover:scale-105 cursor-pointer ${selectedAlbum === Object.keys(albums)[Object.keys(albums).length - 1] ? "text-th-neutral-500/50" : "text-th-pink-500"}`}
                >
                  ›
                </button>
              </div>
            </motion.div>
          </AnimatePresence>
        </>
      )}
    </div>
  );
}