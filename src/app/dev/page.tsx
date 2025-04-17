import DynamicBackground from "@/components/DynamicBackground";
import { devProjects } from "@/lib/devProjects";
import ProjectCard from "@/components/ProjectCard";

export default function DevPage() {
  return (
    <DynamicBackground>
      <div className="h-full w-full flex flex-col items-center justify-center overflow-hidden">
        <div className="h-full w-desktop max-w-11/12">
          <div className="h-full w-full flex flex-col items-center justify-center">
            
            <div className="h-full w-full grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8 m-12">
              {devProjects.map((project, index) => (
                <ProjectCard key={index} project={project} index={index} />
              ))}
            </div>

          </div>
        </div>
      </div>
    </DynamicBackground>
  );
}