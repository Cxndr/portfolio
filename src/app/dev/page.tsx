import DynamicBackground from "@/components/DynamicBackground";
import { devProjects } from "@/lib/devProjects";
import ProjectCard from "@/components/ProjectCard";

export default function DevPage() {
  return (
    <DynamicBackground type="dev">
      <div className="h-full w-full flex flex-col items-center justify-center overflow-hidden">
        <div className="h-full w-full md:w-desktop md:max-w-11/12">
          <div className="h-full w-full flex flex-col items-center justify-center">
            
            <div 
              className="
                h-full w-full lg:max-w-full
                grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 
                gap-0 md:gap-8 
                md:m-12
                "
              >
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