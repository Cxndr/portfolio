import DynamicBackground from "@/components/DynamicBackground";
import { devProjects } from "@/lib/devProjects";

export default function DevPage({ params }: { params: { project: string } }) {
  const projectId = Number(params.project);
  const currentProject = devProjects[projectId];

  return (
    <div className="h-full w-svw">
      <DynamicBackground>
        <div className="h-full w-full pt-4 flex flex-row items-center justify-center">
          {currentProject.title}
        </div>
      </DynamicBackground>
    </div>
  )
}