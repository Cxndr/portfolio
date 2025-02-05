import DynamicBackground from "@/components/DynamicBackground";
import NavArrow from "@/components/NavArrow";
import { devProjects } from "@/lib/devProjects";
import ThumbnailNavDev from "@/components/ThumbnailNavDev";
import ProjectPane from "@/components/ProjectPane";
import ProjectSidebar from "@/components/ProjectSidebar";
import { Separator } from "@/components/ui/separator";


export default function DevPage({ params }: { params: { project: string } }) {
  const projectId = Number(params.project);
  const currentProject = devProjects[projectId];

  return (
    <div className="h-full w-svw">
      <DynamicBackground>
        <div className="h-full w-full pt-4 flex flex-row items-center justify-center">

          <NavArrow direction="left" size="large" />
          
          <div className="w-2/3 max-w-[1600px] h-full flex flex-col items-center p-4">

            <div className="w-full h-full flex flex-row items-center justify-center bg-zinc-50 rounded-2xl p-8 shadow-xl shadow-zinc-700/40">
              <ProjectPane project={currentProject} />
              <Separator orientation="vertical" className="h-full bg-zinc-300" />
              <ProjectSidebar project={currentProject} />
            </div>

            <div className="h-32 w-full flex flex-row rounded-2xl overflow-hidden shadow-xl shadow-zinc-700/40">
              <ThumbnailNavDev currentProject={currentProject}/>
            </div>

          </div>

          <NavArrow direction="right" size="large" />

        </div>
      </DynamicBackground>
    </div>
  )
}