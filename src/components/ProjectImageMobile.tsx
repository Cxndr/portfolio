import Image from "next/image";
import { DevProject } from "@/lib/devProjects";

type ProjectImageMobileProps = {
  mobileImagePaths: string[] | undefined;
  currentImageIndex: number;
  currentMobileImagePath: string | undefined;
  totalMobileImages: number;
  project: DevProject;
  imageTransitionClasses: string;
};

export default function ProjectImageMobile({ mobileImagePaths, currentImageIndex, currentMobileImagePath, totalMobileImages, project, imageTransitionClasses }: ProjectImageMobileProps) {
  return (
    mobileImagePaths && mobileImagePaths.length > 0 && (
      <>

        <div className="w-auto pointer-events-none overflow-hidden z-50"> {/* Changed z-20 to z-50 */}
          {/* Inner container for relative positioning */}
          <div className="relative w-full h-full">
            {/* Sizer Image (still needed if w-auto calc needs it) */}
            {currentMobileImagePath && (
              <Image
                key={currentMobileImagePath + "-sizer-mobile"}
                src={currentMobileImagePath}
                alt="" aria-hidden="true" width={375} height={668}
                className="block h-full w-auto opacity-0 pointer-events-none"
                unoptimized
              />
            )}
            {/* Stacked Images */}
            {mobileImagePaths.map((imagePath, index) => (
              <Image
                key={imagePath + "-mobile"}
                src={imagePath}
                alt={`Image ${index + 1} of ${totalMobileImages} for ${project.title} on mobile`}
                width={375}
                height={668}
                className={`absolute inset-0 w-full h-full object-contain rounded-lg shadow-md shadow-black/40 ${imageTransitionClasses} ${index === currentImageIndex ? 'opacity-100 z-40' : 'opacity-0 z-0'}`} // Highest z-index for active
                unoptimized
              />
            ))}
          </div>
        </div>
      </>
    )
  );
}