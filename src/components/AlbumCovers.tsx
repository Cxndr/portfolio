"use client"

import Image from "next/image";
import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaSpotify, FaSoundcloud, FaHandPointer, FaBandcamp } from "react-icons/fa";
import Button from "./Button";
import Modal from "./Modal";

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
      <span className="label text-center mt-3 !font-semibold text-th-neutral-950 shadow-th-fade shadow-th-neutral-50 bg-th-neutral-50 rounded-full">{album.title}</span>
    </div>
  );
}

export default function AlbumCovers() {
  const [selectedAlbum, setSelectedAlbum] = useState<string | null>(null);
  const [previousAlbum, setPreviousAlbum] = useState<string | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const closeModal = () => setModalOpen(false);
  const openModal = () => setModalOpen(true);

  const albums: Record<string, AlbumInfo> = {
    feelgoodbad: {
      id: "feelgoodbad",
      title: "feelgoodbad",
      image: "/img/albumcover-fgb.png",
      description: "A hazy blend of electronic hip-hop beats, ambient textures and sample-based production exploring the complexity of emotions through sound. Feelgoodbad takes listeners on an intricate journey highlighting music's unique strength in conveying and describing emotion.",
      releaseDate: "2016",
      spotifyLink: "https://open.spotify.com",
      soundcloudLink: "https://soundcloud.com/d-u_u-b/sets/feelgoodbad-1",
      bandcampLink: "https://d-x-u-b.bandcamp.com/album/feelgoodbad"
    },
    trxsh: {
      id: "trxsh",
      title: "trxsh",
      image: "/img/albumcover-trash.png",
      description: "An experimental collection of distorted, sample-based, hip-hop instrumentals. Trxsh uses heavy handed audio processing, unconventional song structure, and unique manipulations of tension and release to challenge perceptions of sonic quality and purity in music production.",
      releaseDate: "2017",
      spotifyLink: "#",
      soundcloudLink: "#",
      bandcampLink: "https://bandcamp.com"
    }
  };

  const handleAlbumClick = (albumId: string) => {
    setPreviousAlbum(null);
    setSelectedAlbum(albumId);
    openModal();
  };

  const isNavigating = previousAlbum !== null;

  const modalItems = Object.values(albums).map(album => ({
    id: album.id,
    content: (
      <div className="h-full flex flex-col items-center justify-between overflow-y-hidden p-4 pt-0 md:p-8">
        <motion.div
          layoutId={`album-cover-${album.id}`}
          className="grow h-0 max-w-10/12 max-h-7/12 relative aspect-square flex items-center justify-center"
          transition={{ duration: 0.4 }}
        >
          <Image 
            src={album.image}
            alt={`${album.title} album cover`}
            width={1000}
            height={1000}
            className="rounded-lg border-0 border-th-neutral-950 shadow-sm shadow-th-neutral-950/20"
          />
        </motion.div>
        
        {/* Album title */}
        <motion.h2 
          layoutId={`album-title-${album.id}`}
          className="text-3xl font-bold mb-2 md:mb-6 text-th-neutral-800 mt-3"
          transition={{ duration: 0.4 }}
        >
          {album.title}
        </motion.h2>
        
        {/* Album info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: isNavigating ? 0 : 0.3, duration: 0.25 }}
          className="text-th-neutral-950 text-center mb-0 md:mb-8"
        >
          <p className="mb-4 max-w-prose !text-xs md:!text-base">{album.description}</p>
        </motion.div>
        
        {/* Action buttons */}
        <motion.div 
          className="flex flex-row flex-wrap lg:flex-nowrap gap-2 md:gap-4 justify-center items-center"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: isNavigating ? 0 : 0.4, duration: 0.3 }}
        >
          {album.spotifyLink && (
            <Button 
              href={album.spotifyLink}
              className="!bg-green-500 hover:shadow-th-neutral-800 max-md:!text-sm max-md:!py-1.5 max-md:!px-2.5"
            >
              <FaSpotify className="w-5 h-5 md:w-6 md:h-6 -mr-0.5 md:mr-1 -ml-1" /> Spotify
            </Button>
          )}
          
          {album.soundcloudLink && (
            <Button 
              href={album.soundcloudLink}
              className="!bg-orange-500 hover:shadow-th-neutral-800 max-md:!text-sm max-md:!py-1.5 max-md:!px-2.5"
            >
              <FaSoundcloud className="w-5 h-5 md:w-6 md:h-6 -mr-0.5 md:mr-1 -ml-1" /> SoundCloud
            </Button>
          )}

          {album.bandcampLink && (
            <Button 
              href={album.bandcampLink}
              className="!bg-[#629aa9] hover:shadow-th-neutral-800 max-md:!text-sm max-md:!py-1.5 max-md:!px-2.5"
            >
              <FaBandcamp className="w-5 h-5 md:w-6 md:h-6 -mr-0.5 md:mr-1 -ml-1" /> Bandcamp
            </Button>
          )}
        </motion.div>
      </div>
    )
  }));

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
      <AnimatePresence>
        {modalOpen && (
          <Modal 
            modalOpen={modalOpen} 
            handleClose={closeModal}
            contentArray={modalItems.map(item => item.content)}
            contentIndex={modalItems.findIndex(item => item.id === selectedAlbum)}
          />
        )}
      </AnimatePresence>
    </div>
  );
}