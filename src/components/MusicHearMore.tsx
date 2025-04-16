"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function MusicHearMore() {

  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);


  return (
    <div 
      className="relative top-6 left-6"
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
        <Link 
          href="https://soundcloud.com/livewellandmakethings" 
          target="_blank"
          className="hover:text-th-blue-300 transition-all duration-300"
        >
          soundcloud.com/<br />
          livewellandmakethings
        </Link>
      </div>

      <Image 
        src="/img/logo-bandcamp-tilt.png" alt="bandcamp logo" 
        width={256} height={256} 
        className="absolute left-0 top-0 z-5 transition-all duration-300"
        style={{
          transform: isHovered
            ? 'translate(-1rem, 1.25rem) rotate(-13.12deg)'
            : 'translate(1.5rem, -2.75rem)',
          height: isHovered ? '60px' : '56px',
          width: isHovered ? '60px' : '56px'
        }}
      />
      <div 
        className="label h-[52px] px-4 py-0 pl-[64px] flex justify-start items-center text-th-neutral-50 absolute left-[4px] top-[4px] z-0 transition-all duration-500 bg-th-neutral-900 rounded-full "
        style={{
          transform: isHovered
            ? 'translate(-1rem, 1.25rem)'
            : 'translate(1.5rem, -2.75rem)',
          opacity: isHovered ? 1 : 0,
          width: isHovered ? '10.5rem' : '0rem',
        }}
      >
        <Link 
          href="https://d-x-u-b.bandcamp.com" 
          target="_blank"
          className="hover:text-th-blue-300 transition-all duration-300"
        >
          d-x-u-b.
          <br />
          bandcamp.com
        </Link>
      </div>

      <Image 
        src="/img/logo-spotify-tilt.png" alt="spotify logo" 
        width={256} height={256} 
        className="absolute left-0 top-0 z-0 transition-all duration-300"
        style={{
          transform: isHovered
            ? 'translate(-1rem, 5.5rem) rotate(-22.6deg)'
            : 'translate(4.25rem, -2.25rem)',
          height: isHovered ? '60px' : '56px',
          width: isHovered ? '60px' : '56px'
        }}
      />
      <div 
        className="label h-[52px] px-4 py-0 pl-[64px] flex justify-start items-center text-th-neutral-50 absolute left-[4px] top-[4px] -z-5 transition-all duration-500 bg-th-neutral-900 rounded-full "
        style={{
          transform: isHovered
            ? 'translate(-1rem, 5.5rem)'
            : 'translate(1.5rem, -2.75rem)',
          opacity: isHovered ? 1 : 0,
          width: isHovered ? '9.75rem' : '0rem',
        }}
      >
        <Link 
          href="https://open.spotify.com/artist/6y3H0nniFgJGfHRD17zZhI" 
          target="_blank"
          className="hover:text-th-blue-300 transition-all duration-300"
        >
          spotify.com/<br />
          cxndr
        </Link>
      </div>

    </div>
  );
}