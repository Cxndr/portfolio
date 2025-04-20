import Image from "next/image";
import { DevProject } from "@/lib/devProjects";

type ProjectImageDesktopProps = {
  desktopImagePaths: string[];
  currentImageIndex: number;
  currentDesktopImagePath: string | undefined;
  totalDesktopImages: number;
  project: DevProject;
  imageTransitionClasses: string;
};

export default function ProjectImageDesktop({ desktopImagePaths, currentImageIndex, currentDesktopImagePath, totalDesktopImages, project, imageTransitionClasses }: ProjectImageDesktopProps) {
  return (
    desktopImagePaths.length > 0 ? (
      <div className="w-full h-full relative">
        {/* 1. Hidden Sizer Image (keeps container height correct for transitions) */}
        {currentDesktopImagePath && (
          <Image
            key={currentDesktopImagePath + "-sizer"}
            src={currentDesktopImagePath}
            alt=""
            aria-hidden="true"
            width={1000}
            height={1000}
            className="block h-full w-auto opacity-0 pointer-events-none"
            priority={currentImageIndex === 0}
          />
        )}
        {/* 2. Visible Stacked Images */}
        {desktopImagePaths.map((imagePath, index) => (
          <Image
            key={imagePath}
            src={imagePath}
            alt={`Image ${index + 1} of ${totalDesktopImages} for ${project.title} on desktop`}
            width={1000}
            height={1000}
            className={`absolute inset-0 h-full w-auto object-cover rounded-xl ${imageTransitionClasses} ${index === currentImageIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
            priority={index === 0 && currentImageIndex === 0}
          />
        ))}
      </div>
    ) : (
      // Fallback: Use the placeholder image
      <Image
        src="/img/dev/placeholder.png" // Path to placeholder
        alt="Placeholder image"
        width={1000} // Use same aspect ratio hint as project images
        height={1000}
        // Size like a regular image within the container width
        className="h-auto object-contain rounded-xl" // Use contain to show whole placeholder
      />
    )
  );
}