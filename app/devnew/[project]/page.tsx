import DynamicBackground from "@/components/DynamicBackground";
import { devProjects, techColors } from "@/lib/devProjects";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import WhatWhyHowBoxes from "@/components/WhatWhyHowBoxes";

export default function DevPage({ params }: { params: { project: string } }) {
  const projectId = Number(params.project);
  const currentProject = devProjects[projectId];

  return (
    <div className="h-full w-svw">
      <DynamicBackground>
        <div className="h-full w-full flex flex-col gap-4 p-16 items-center justify-center">

          <div className="grow w-full flex flex-row">
            
            <div className="flex-grow w-1/2 p-12 bg-zinc-900/80 rounded-xl shadow-zinc-900 shadow-2xl">
              <div className="flex flex-col gap-4 items-center justify-center">

              <div className="w-full h-full flex flex-col items-center justify-center text-zinc-100">
                <ul className="flex flex-col gap-3 text-md">
                    {currentProject.skillsGained.map((skill) => (
                      <li key={skill}>{skill}</li>
                    ))}
                  </ul>
                </div>

                <WhatWhyHowBoxes project={currentProject} seperation="box" />
                
              </div>
            </div>

            <div className="h-full w-1/2 p-4 flex flex-col items-center justify-center perspective-near">
              <div className="flex flex-col gap-4 -rotate-y-[4deg] -rotate-x-[0.4deg] bg-zinc-900/80 rounded-xl shadow-zinc-900 shadow-2xl py-4 px-6">
                
                <h1 className="text-4xl font-bold text-center text-zinc-100"> 
                  {currentProject.title} 
                </h1>

                <Image 
                  src={currentProject.imagesSrc[0]} 
                  alt={currentProject.title} 
                  width={1920} 
                  height={1080} 
                  className="w-full rounded-xl shadow-lg shadow-zinc-900/80" 
                />

                <div className="px-6 flex flex-row items-center justify-center gap-2">
                  {currentProject.technologies.map((technology) => (
                    <Badge key={technology} className={techColors[technology as keyof typeof techColors] + " text-sm shadow-xs shadow-zinc-900"}>{technology}</Badge>
                  ))}
                </div>
                
              </div>
            </div>

          </div>

        </div>
      </DynamicBackground>
    </div>
  )
}