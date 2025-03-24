"use client"

import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaPlay, FaSpotify, FaSoundcloud, FaHandPointer } from "react-icons/fa";

interface AlbumInfo {
  id: string;
  title: string;
  image: string;
  description: string;
  releaseDate: string;
  spotifyLink?: string;
  soundcloudLink?: string;
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
  
  // Only run on client-side
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
          className={`rounded-lg border-2 border-th-neutral-950 shadow-th-sm ${shadowColor}`}
        />
        
        {/* Album info label - styled like GetInTouchCard */}
        {isHovered && (
          <div className="absolute -rotate-8 -top-5 -left-5 px-3 py-1.5 bg-th-yellow-500 rounded-lg shadow-md shadow-th-neutral-950/50">
            <span className="text-th-neutral-50 text-xs font-bold flex items-center gap-1">
              {isMounted && <FaHandPointer className="text-sm" aria-hidden="true" />} for info!
            </span>
          </div>
        )}
      </div>
      <span className="label text-center mt-3 text-th-neutral-950">{album.title}</span>
    </div>
  );
}

export default function AlbumCovers() {
  const [selectedAlbum, setSelectedAlbum] = useState<string | null>(null);

  const albums: Record<string, AlbumInfo> = {
    feelgoodbad: {
      id: "feelgoodbad",
      title: "feelgoobad",
      image: "/img/albumcover-fgb.png",
      description: "A blend of electronic beats and ambient textures, exploring the duality of emotions through sound. Released in 2023, this album features 8 tracks that take listeners on a journey through contrasting moods.",
      releaseDate: "2023",
      spotifyLink: "https://open.spotify.com",
      soundcloudLink: "https://soundcloud.com"
    },
    trxsh: {
      id: "trxsh",
      title: "trxsh",
      image: "/img/albumcover-trash.png",
      description: "An experimental collection that transforms discarded sounds into beautiful compositions. This 2022 release challenges perceptions of what music can be, creating harmony from chaos.",
      releaseDate: "2022",
      spotifyLink: "https://open.spotify.com",
      soundcloudLink: "https://soundcloud.com"
    }
  };

  const handleAlbumClick = (albumId: string) => {
    setSelectedAlbum(albumId);
  };

  return (
    <div className="flex flex-row">
      {/* First album */}
      <AlbumCover 
        album={albums.feelgoodbad} 
        className="-rotate-11 z-10 hover:scale-110 hover:rotate-0 hover:z-50 hover:-translate-x-8" 
        shadowColor="shadow-th-pink-500"
        onSelect={handleAlbumClick} 
      />

      {/* Second album */}
      <AlbumCover 
        album={albums.trxsh} 
        className="rotate-9 z-20 -translate-x-1 translate-y-4 hover:scale-110 hover:rotate-0 hover:z-50 hover:-translate-x-8" 
        shadowColor="shadow-th-blue-500"
        onSelect={handleAlbumClick} 
      />

      {/* Modal */}
      <AnimatePresence>
        {selectedAlbum && (
          <>
            {/* Backdrop */}
            <motion.div 
              className="fixed inset-0 bg-black/60 backdrop-blur-md z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              onClick={() => setSelectedAlbum(null)}
            />
            
            {/* Modal content */}
            <motion.div 
              className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white/90 rounded-xl p-8 shadow-2xl z-50 max-w-2xl w-full"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.4 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex flex-col items-center">
                {/* Album image */}
                <motion.div
                  layoutId={`album-image-${albums[selectedAlbum].id}`}
                  className="mb-4"
                >
                  <Image 
                    src={albums[selectedAlbum].image}
                    alt={`${albums[selectedAlbum].title} album cover`}
                    width={250}
                    height={250}
                    className="rounded-lg border-2 border-th-neutral-950 shadow-lg"
                  />
                </motion.div>
                
                {/* Album title */}
                <motion.h2 
                  layoutId={`album-title-${albums[selectedAlbum].id}`}
                  className="text-3xl font-bold mb-6 text-th-neutral-950"
                >
                  {albums[selectedAlbum].title}
                </motion.h2>
                
                {/* Album info */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                  className="text-th-neutral-950 text-center mb-8"
                >
                  <p className="mb-4">{albums[selectedAlbum].description}</p>
                  <p className="text-sm">Released: {albums[selectedAlbum].releaseDate}</p>
                </motion.div>
                
                {/* Action buttons */}
                <motion.div 
                  className="flex gap-4 justify-center"
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.8 }}
                >
                  <a 
                    href="#" 
                    className="flex items-center gap-2 bg-th-pink-500 text-white px-6 py-3 rounded-full hover:bg-th-pink-600 transition-colors"
                  >
                    <FaPlay /> Listen Now
                  </a>
                  
                  {albums[selectedAlbum].spotifyLink && (
                    <a 
                      href={albums[selectedAlbum].spotifyLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-green-500 text-white px-6 py-3 rounded-full hover:bg-green-600 transition-colors"
                    >
                      <FaSpotify /> Spotify
                    </a>
                  )}
                  
                  {albums[selectedAlbum].soundcloudLink && (
                    <a 
                      href={albums[selectedAlbum].soundcloudLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-orange-500 text-white px-6 py-3 rounded-full hover:bg-orange-600 transition-colors"
                    >
                      <FaSoundcloud /> SoundCloud
                    </a>
                  )}
                </motion.div>
                
                {/* Close button */}
                <button 
                  className="absolute top-4 right-4 text-th-neutral-950 text-xl"
                  onClick={() => setSelectedAlbum(null)}
                >
                  ✕
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}