import Image from "next/image";
import { DevProject } from "@/lib/devProjects";

// Define dimensions for aspectRatio and next/image
const MOBILE_WIDTH = 379;
const MOBILE_HEIGHT = 669;

type ProjectImageMobileProps = {
  mobileImagePaths: string[] | undefined;
  currentImageIndex: number;
  totalMobileImages: number;
  project: DevProject;
  imageTransitionClasses: string;
};

export default function ProjectImageMobile({ mobileImagePaths, currentImageIndex, totalMobileImages, project, imageTransitionClasses }: ProjectImageMobileProps) {

  return (
    mobileImagePaths && mobileImagePaths.length > 0 && (
      // Root div controls aspect ratio, width from grid, rounded corners, shadow
      <div
        className="w-full relative overflow-hidden rounded-xl shadow-md shadow-black/40 z-50"
        style={{ aspectRatio: `${MOBILE_WIDTH} / ${MOBILE_HEIGHT}` }}
      >
        {/* Map images directly inside */}
        {mobileImagePaths.map((imagePath, index) => (
            <Image
              key={imagePath + "-mobile"} // Keep key on image
              src={imagePath}
              alt={`Image ${index + 1} of ${totalMobileImages} for ${project.title} on mobile`}
              width={MOBILE_WIDTH}   // Still needed for next/image
              height={MOBILE_HEIGHT} // Still needed for next/image
              // Image fills the aspect-ratio container. Use object-cover.
              // Transitions applied here.
              className={`absolute inset-0 w-full h-full object-cover ${imageTransitionClasses} ${index === currentImageIndex ? 'opacity-100 z-40' : 'opacity-0 z-0'}`}
            />
        ))}
      </div>
    )
  );
}