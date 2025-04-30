import React from 'react';

type DisplayModeToggleProps = {
  currentMode: 'desktop' | 'mobile';
  onToggle: (newMode: 'desktop' | 'mobile') => void;
  hasMobile: boolean;
  className?: string;
};

const DisplayModeToggle: React.FC<DisplayModeToggleProps> = ({
  currentMode,
  onToggle,
  hasMobile,
  className = '',
}) => {

  const isMobileDisabled = !hasMobile;

  // Function to handle the click on the toggle itself
  const handleToggleClick = () => {
    if (isMobileDisabled && currentMode === 'desktop') return; // Can't toggle if mobile is disabled

    const newMode = currentMode === 'desktop' ? 'mobile' : 'desktop';
    onToggle(newMode);
  };

  return (
    <button // Use a button element for accessibility
      role="switch"
      aria-checked={currentMode === 'mobile'}
      aria-label={`Switch to ${currentMode === 'desktop' ? 'mobile' : 'desktop'} view`}
      onClick={handleToggleClick}
      disabled={isMobileDisabled && currentMode === 'desktop'} // Only disable if mobile isn't available and we are on desktop
      className={`relative inline-flex items-center h-6 w-24 rounded-full cursor-pointer transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-th-pink-500 focus-visible:ring-offset-th-neutral-900 ${className} ${
        isMobileDisabled ? 'cursor-not-allowed opacity-70' : ''
      }`}
    >
      {/* Track */}
      <span className="absolute inset-0 h-full w-full rounded-full bg-th-neutral-700 shadow-inner" aria-hidden="true"></span>

      {/* Thumb */}
      <span
        className={`absolute left-0.5 top-0.5 h-5 w-11 rounded-full bg-th-pink-500 shadow transform transition-transform duration-200 ease-in-out ${
          currentMode === 'mobile' ? 'translate-x-[calc(100%-0.25rem)]' : 'translate-x-0' // Adjusted translation for padding
        }`}
        aria-hidden="true"
      ></span>

      {/* Labels inside the track (optional but helpful) */}
       <span className="absolute left-1.5 top-1/2 -translate-y-1/2 text-[10px] font-medium text-th-neutral-950 z-10" aria-hidden="true">
         Desk
       </span>
      <span className="absolute right-1 top-1/2 -translate-y-1/2 text-[10px] font-medium text-th-neutral-100 z-10" aria-hidden="true">
         Mobile
       </span>

    </button>
  );
};

export default DisplayModeToggle; 