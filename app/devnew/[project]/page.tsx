import DynamicBackground from "@/components/DynamicBackground";
import { devProjects } from "@/lib/devProjects";
import Image from "next/image";


export default function DevPage({ params }: { params: { project: string } }) {
  const projectId = Number(params.project);
  const currentProject = devProjects[projectId];

  return (
    <div className="h-full w-svw">
      <DynamicBackground>
        <div className="h-full w-full flex flex-col gap-4 p-8 items-center justify-center">

          <h1 className="text-4xl font-bold">
            {currentProject.title}
          </h1>

          <div className="flex-grow w-full flex flex-row">

            <div className="h-full w-1/3">

            </div>

            <div className="h-full w-2/3 perspective-dramatic">
              <Image 
                src={currentProject.imagesSrc[0]} 
                alt={currentProject.title} 
                width={1920} 
                height={1080} 
                className="w-full translate-z-10 rotate-x-90"
              />
            </div>

          </div>

        </div>
      </DynamicBackground>
    </div>
  )
}