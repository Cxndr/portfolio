import { devProjects } from "@/lib/devProjects";
import Image from "next/image";
import { DevProject } from "@/lib/devProjects";


export default function ThumbnailNavDev({currentProject}: {currentProject: DevProject}) {

  return (
    <div className="h-24 w-full my-4 flex flex-row rounded-2xl overflow-hidden">
      {devProjects.map((project, index) => (
        <div key={project.title}>
          <Image 
            className="h-full object-cover object-center" 
            src={project.imagesSrc[0]} 
            alt={project.title} 
            height={96} 
            width={192} 
          />
          {devProjects[index] === currentProject && (
            <div className="h-full w-full bg-cs-1-muted/20"></div>
          )}
        </div>
      ))}
    </div>
  )

}