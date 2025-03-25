"use client";

import Image from "next/image";
import { useState } from "react";

export default function MusicHearMore() {

  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);


  return (
    <div 
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
                  
      <button
        className="button relative z-30 transition-all duration-300 pointer-events-none"
        style={{
          transform: isHovered 
            ? 'rotate(0deg) translateY(-7rem)' 
            : 'rotate(8deg) translateY(0.25rem)'
        }}
      >
        Hear More
      </button>
      
      <Image 
        src="/img/logo-soundcloud-tilt.png" alt="soundcloud logo" 
        width={256} height={256} 
        className="absolute left-0 top-0 z-10 transition-all duration-300"
        style={{
          transform: isHovered
            ? 'translate(-1rem, -3rem) rotate(19.74deg)'
            : 'translate(-1.25rem, -2.25rem)',
          height: isHovered ? '60px' : '56px',
          width: isHovered ? '60px' : '56px'
        }}
      />
      <div 
        className="label h-[52px] px-4 py-0 pl-[64px] flex justify-start items-center text-th-neutral-50 absolute left-[4px] top-[4px] z-0 transition-all duration-500 bg-th-neutral-900 rounded-full "
        style={{
          transform: isHovered
            ? 'translate(-1rem, -3rem)'
            : 'translate(-1.25rem, -2.25rem)',
          opacity: isHovered ? 1 : 0,
          width: isHovered ? '13rem' : '0rem',
        }}
      >
        soundcloud.com/<br />
        livewellandmakethings
      </div>

      <Image 
        src="/img/logo-bandcamp-tilt.png" alt="bandcamp logo" 
        width={256} height={256} 
        className="absolute left-0 top-0 z-5 transition-all duration-300"
        style={{
          transform: isHovered
            ? 'translate(-1rem, 1rem) rotate(-13.12deg)'
            : 'translate(1.5rem, -2.75rem)',
          height: isHovered ? '60px' : '56px',
          width: isHovered ? '60px' : '56px'
        }}
      />
      <div 
        className="label h-[52px] px-4 py-0 pl-[64px] flex justify-start items-center text-th-neutral-50 absolute left-[4px] top-[4px] z-0 transition-all duration-500 bg-th-neutral-900 rounded-full "
        style={{
          transform: isHovered
            ? 'translate(-1rem, 1rem)'
            : 'translate(1.5rem, -2.75rem)',
          opacity: isHovered ? 1 : 0,
          width: isHovered ? '10.5rem' : '0rem',
        }}
      >
        d-x-u-b.
        <br />
        bandcamp.com
      </div>

    </div>
  );
}