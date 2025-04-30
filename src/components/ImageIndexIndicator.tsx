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
  // render gap if 0 or 1 images to keep consistent layout
  if (totalImages <= 1) {
    return (
      <span className="w-2 h-6" aria-hidden="true" />
    )
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