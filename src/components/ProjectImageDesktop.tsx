import Image from "next/image";
import { DevProject } from "@/lib/devProjects";

// Define dimensions for aspectRatio and next/image
const DESKTOP_WIDTH = 1600;
const DESKTOP_HEIGHT = 927;

type ProjectImageDesktopProps = {
  desktopImagePaths: string[];
  currentImageIndex: number;
  totalDesktopImages: number;
  project: DevProject;
  imageTransitionClasses: string;
};

export default function ProjectImageDesktop({ desktopImagePaths, currentImageIndex, totalDesktopImages, project, imageTransitionClasses }: ProjectImageDesktopProps) {

  return (
    desktopImagePaths.length > 0 ? (
      // Root div controls aspect ratio, width from grid, rounded corners
      <div
        className="w-full relative overflow-hidden shadow-md shadow-black/40 rounded-xl"
        style={{ aspectRatio: `${DESKTOP_WIDTH} / ${DESKTOP_HEIGHT}` }}
      >
        {/* Map images directly inside */}
        {desktopImagePaths.map((imagePath, index) => (
            <Image
              key={imagePath} // Keep key on image
              src={imagePath}
              alt={`Image ${index + 1} of ${totalDesktopImages} for ${project.title} on desktop`}
              width={DESKTOP_WIDTH}   // Still needed for next/image
              height={DESKTOP_HEIGHT} // Still needed for next/image
              // Image fills the aspect-ratio container. Use object-cover.
              // Transitions applied here.
              className={`absolute inset-0 w-full h-full object-cover ${imageTransitionClasses} ${index === currentImageIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
              priority={index === 0 && currentImageIndex === 0}
            />
        ))}
      </div>
    ) : (
      // Fallback: Apply same structure
      <div
        className="w-full relative overflow-hidden rounded-xl"
        style={{ aspectRatio: `${DESKTOP_WIDTH} / ${DESKTOP_HEIGHT}` }}
      >
          <Image
            src="/img/dev/placeholder.png" // Path to placeholder
            alt="Placeholder image"
            width={DESKTOP_WIDTH} // Placeholder dimensions
            height={DESKTOP_HEIGHT}
            // Use object-contain for placeholder
            className="absolute inset-0 w-full h-full object-contain"
          />
      </div>
    )
  );
}