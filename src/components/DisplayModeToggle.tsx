"use client";

import { FaDesktop } from "react-icons/fa";
import { FaMobileScreen } from "react-icons/fa6";

type DisplayModeToggleProps = {
  currentMode: 'desktop' | 'mobile';
  onToggle: (newMode: 'desktop' | 'mobile') => void;
  hasMobile: boolean;
  className?: string;
};


  export default function DisplayModeToggle({currentMode, onToggle, hasMobile, className = ''}:DisplayModeToggleProps) {

    const handleToggleClick = () => {
      if (!hasMobile && currentMode === 'desktop') return; // we shouldn't use if at all if mobile is disabled but just in case
      const newMode = currentMode === 'desktop' ? 'mobile' : 'desktop';
      onToggle(newMode);
    };

  return (
    <button
      role="switch"
      aria-checked={currentMode === 'mobile'}
      aria-label={`Switch to ${currentMode === 'desktop' ? 'mobile' : 'desktop'} view`}
      onClick={handleToggleClick}
      className={`
        !relative !flex !items-center !justify-start !h-8 md:!h-9 !w-16 md:!w-20 !p-1
        !bg-th-pink-500 inset-shadow-sm inset-shadow-th-pink-900 rounded-full cursor-pointer 
        transition-colors duration-200 ease-in-out 
        focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-th-pink-500 focus-visible:ring-offset-th-neutral-900 

        ${className} 
      `}
    >

      <span
        className={`
          h-full w-1/2 rounded-full 
          bg-th-blue-500 shadow-xs shadow-th-blue-900
          transform transition-transform duration-200 ease-in-out 
          ${ currentMode === 'mobile' ? 'translate-x-full' : 'translate-x-0'}
          `}
        aria-hidden="true"
      />

      {/* Labels inside the track */}
      <span 
        className="
          absolute left-2 top-1/2 -translate-y-1/2 z-10 p-0.5 md:p-1
          text-[1rem] md:text-[1.2rem] text-th-neutral-100 
          flex items-center justify-center
        " 
        aria-hidden="true" aria-label="Desktop"
      >
        <FaDesktop />
      </span>

      <span
        className="
          absolute right-2 top-1/2 -translate-y-1/2 z-10 md:p-1
          text-[1rem] md:text-[1.2rem] text-th-neutral-100 
          flex items-center justify-center
        " 
        aria-hidden="true" aria-label="Mobile"
      >
        <FaMobileScreen />
      </span>

    </button>
  );
};

