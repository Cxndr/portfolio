
import { DevProject } from "@/lib/devProjects";
import { Separator } from "@/components/ui/separator"


export default function WhatWhyHow({project}: {project: DevProject}) {

  return (
    <div className="w-full h-full px-12 text-sm flex flex-row items-start justify-start gap-10">

      <div className="w-1/3 h-full flex flex-col items-center justify-start">
        <h4 className="text-2xl font-bold mb-2 text-cs-1-muted">what</h4>
        <ul className="list-disc ml-4">
          {project.whatList.map((item, index) => (
            <li key={index} className="mt-2">{item}</li>
          ))}
        </ul>
      </div>

      <Separator orientation="vertical" className="h-5/6 self-center bg-zinc-300" />

      <div className="w-1/3 h-full flex flex-col items-center justify-start">
        <h4 className="text-2xl font-bold mb-2 text-cs-1-muted">why</h4>
        <ul className="list-disc ml-4">
          {project.whyList.map((item, index) => (
            <li key={index} className="mt-2">{item}</li>
          ))}
        </ul>
      </div>

      <Separator orientation="vertical" className="h-5/6 self-center bg-zinc-300" />

      <div className="w-1/3 h-full flex flex-col items-center justify-start">
        <h4 className="text-2xl font-bold mb-2 text-cs-1-muted">how</h4>
        <ul className="list-disc ml-4">
          {project.howList.map((item, index) => (
            <li key={index} className="mt-2">{item}</li>
          ))}
        </ul>
      </div>

  </div>
  )

}