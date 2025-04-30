import React from 'react';

type ImageIndexIndicatorProps = {
  totalImages: number;
  currentIndex: number;
  className?: string;
};

const ImageIndexIndicator: React.FC<ImageIndexIndicatorProps> = ({
  totalImages,
  currentIndex,
  className = '',
}) => {
  // Don't render if there's only one image (or none)
  if (totalImages <= 1) {
    return null;
  }

  return (
    <div className={`flex justify-center items-center space-x-2 ${className}`}>
      {Array.from({ length: totalImages }).map((_, index) => (
        <div
          key={index}
          className={`
            w-2 h-2 rounded-full transition-colors duration-300 ease-in-out
            ${index === currentIndex ? 'bg-th-pink-500' : 'bg-th-neutral-600 hover:bg-th-neutral-500'}
          `}
        />
      ))}
    </div>
  );
};

export default ImageIndexIndicator; 