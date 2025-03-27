import Card from "@/components/Card";
import DynamicBackground from "@/components/DynamicBackground";
import { devProjects, techColors } from "@/lib/devProjects";
import { BsGithub } from "react-icons/bs";
import { GrLanguage } from "react-icons/gr";
import Image from "next/image";
import ProjectNavButton from "@/components/ProjectNavButton";
import Button from "@/components/Button";
import CardLabel from "@/components/CardLabel";

export default async function DevPage({ params }: { params: Promise<{ project: string }> }) {
  const { project } = await params;
  const projectId = Number(project);
  const currentProject = devProjects[projectId];
  
    return (
    <DynamicBackground>
      <div className="h-full w-full flex flex-col items-center justify-center overflow-hidden">
        <div className="h-full w-desktop">
          <div className="h-full flex flex-row gap-12">

            <div className="h-full w-5/12 flex flex-col gap-20 justify-center">

              <Card className="p-6.5 pt-4.5 shadow-th-pink-500 flex flex-col gap-3 relative">
                <CardLabel label="What" color="pink" className="-top-10" />
                <ul className="mt-2 flex flex-col gap-1">
                  {currentProject.whatList.map((item, index) => (
                    <li key={index} dangerouslySetInnerHTML={{ __html: item }} />
                  ))}
                </ul>
              </Card>

              <Card className="p-6.5 pt-4.5 shadow-th-blue-500 flex flex-col gap-3 relative">
                <CardLabel label="Why" color="blue" className="-top-10" />
                <ul className="mt-2 flex flex-col gap-1">
                  {currentProject.whyList.map((item, index) => (
                    <li key={index} dangerouslySetInnerHTML={{ __html: item }} />
                  ))}
                </ul>
              </Card>

              <Card className="p-6.5 pt-4.5 shadow-th-yellow-500 flex flex-col gap-3 relative">
                <CardLabel label="How" color="yellow" className="-top-10" />
                <ul className="mt-2 flex flex-col gap-1">
                  {currentProject.howList.map((item, index) => (
                    <li key={index} dangerouslySetInnerHTML={{ __html: item }} />
                  ))}
                </ul>
              </Card>

            </div>

            <div className="w-7/12 flex flex-col justify-between items-center perspective-normal">
              
              <div 
                className="mt-24 w-full flex flex-row justify-center items-center gap-8 translate-z-0 -rotate-y-10 -rotate-x-1">

                <ProjectNavButton direction="previous" projectId={projectId} totalProjects={devProjects.length}/>

                <div className="w-full flex flex-col justify-center items-center gap-3 bg-th-neutral-900 px-4 py-3 rounded-3xl shadow-th shadow-th-pink-500 relative">

                  <h3>{currentProject.title}</h3>

                  <Image 
                    src={currentProject.imageSrcDesktop} 
                    alt={`image of live site for ${currentProject.title} on desktop`} 
                    width={1000} 
                    height={1000} 
                    className="rounded-xl"
                  />

                  <Image
                    src={currentProject.imageSrcMobile}
                    alt={`image of live site for ${currentProject.title} on mobile`} 
                    width={375}
                    height={668}
                    className="rounded-lg absolute -right-10 -bottom-10 h-2/3 w-auto shadow-md shadow-black/40"
                  />

                  <div className="flex flex-row gap-2">
                    {currentProject.technologies.map((technology) => (
                      <div key={technology} className={`badge ${techColors[technology as keyof typeof techColors]}`}>
                        {technology}
                      </div>
                    ))}
                  </div>

                </div>

                <ProjectNavButton direction="next" projectId={projectId} totalProjects={devProjects.length}/>

              </div>

              <div className="w-full flex-grow flex flex-col justify-center items-center gap-8">
                {/* could we have these popout a iframe of the link you're visiting */}

                <Button 
                  href={currentProject.liveSiteLink}
                  className="hover:shadow-th-neutral-800"
                > 
                  <GrLanguage />
                  View Live Site
                </Button>

                <Button 
                  href={currentProject.githubLink}
                  className="hover:shadow-th-neutral-800"
                >
                  <BsGithub />
                  Github Repo
                </Button>

              </div>

            </div>

          </div>
        </div>
      </div>
    </DynamicBackground>
  )
}