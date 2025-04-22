import DynamicBackground from "@/components/DynamicBackground";
import { devProjects } from "@/lib/devProjects";
import { BsGithub } from "react-icons/bs";
import { GrLanguage } from "react-icons/gr";
import Button from "@/components/Button";
import InternalLink from "@/components/InternalLink";
import { LuArrowLeft } from "react-icons/lu";
import ImageCarousel from "@/components/ImageCarousel";
import fs from 'fs';
import path from 'path';
import WhatWhyHowCards from "@/components/WhatWhyHowCards";
import TechStackCard from "@/components/TechStackCard";
async function getImagePaths(dirPath: string | undefined): Promise<string[] | undefined> {
  if (!dirPath) return undefined;

  const normalizedDirPath = dirPath.startsWith('/') ? dirPath : `/${dirPath}`;
  const fullPath = path.join(process.cwd(), 'public', normalizedDirPath);

  try {
    await fs.promises.access(fullPath);
    const filenames = await fs.promises.readdir(fullPath);

    const imageFiles = filenames
      .filter(name => /\.(jpg|jpeg|png|gif|webp)$/i.test(name))
      .map(name => path.join(normalizedDirPath, name).replace(/\\/g, '/'));

    const numericalSort = (a: string, b: string) => {
        const baseA = path.basename(a).split('.')[0];
        const baseB = path.basename(b).split('.')[0];
        const numA = parseInt(baseA, 10);
        const numB = parseInt(baseB, 10);
        return (!isNaN(numA) && !isNaN(numB)) ? numA - numB : baseA.localeCompare(baseB);
    };

    return imageFiles.sort(numericalSort);

  } catch (error: unknown) {
    const isNodeError = (err: unknown): err is NodeJS.ErrnoException => err instanceof Error;

    if (isNodeError(error) && error.code !== 'ENOENT') {
        console.error(`Error reading directory ${fullPath}:`, error);
    } else if (!isNodeError(error) || (isNodeError(error) && error.code === 'ENOENT')) {
        console.log(`Directory not found or non-Node error, skipping: ${fullPath}`);
    }
    return undefined;
  }
}

export default async function DevPage({ params }: { params: Promise<{ project: string }> }) {
  const { project } = await params;
  const projectId = Number(project);
  if (isNaN(projectId) || projectId < 0 || projectId >= devProjects.length) {
    console.error("Invalid project ID:", project);
    return <div>Project not found</div>;
  }
  const currentProject = devProjects[projectId];

  const desktopImagePaths = await getImagePaths(currentProject.imageDir) ?? [];
  const mobileImagePaths = await getImagePaths(currentProject.imageDirMobile);

  console.log(`Project: ${currentProject.title}`);
  console.log(`Desktop Dir: ${currentProject.imageDir}, Paths:`, desktopImagePaths);
  console.log(`Mobile Dir: ${currentProject.imageDirMobile}, Paths:`, mobileImagePaths);

  return (
    <DynamicBackground>
      <div className="h-full w-full flex flex-col items-center overflow-y-auto lg:overflow-hidden">
        <div className="max-w-screen-xl md:mb-4 flex flex-col h-full mx-4 md:mx-12">

          <div
            className="
              button
              px-3 py-2 my-4 rounded-3xl
              self-start lg:-translate-x-4
              inline-block
              bg-th-neutral-50
              text-foreground/65
              hover:bg-th-neutral-100
              hover:text-th-blue-500
              transition-all duration-300
              cursor-pointer
            "
          >
            <InternalLink href="/dev">
              <span className="flex flex-row items-center gap-2 text-md">
                <LuArrowLeft size={24}/> All Dev Projects
              </span>
            </InternalLink>
          </div>

          <div className="flex-grow flex flex-col gap-0 md:gap-10 lg:flex-col mb-10">

            <div className="block lg:hidden w-full">
              <ImageCarousel
                project={currentProject}
                desktopImagePaths={desktopImagePaths}
                mobileImagePaths={mobileImagePaths}
                className=""
              />
            </div>

            <div className="w-full grow h-auto lg:h-0 flex flex-col lg:flex-row items-center lg:items-start gap-10 lg:gap-16">

              <div className="hidden lg:block w-0 grow h-full">
                <ImageCarousel
                  project={currentProject}
                  desktopImagePaths={desktopImagePaths}
                  mobileImagePaths={mobileImagePaths}
                  className=""
                />
              </div>

              <div className="h-auto lg:h-full w-full lg:w-auto flex flex-col justify-start items-center gap-4 lg:gap-6 pt-4 lg:py-0">

                <TechStackCard currentProject={currentProject} />

                <div className="w-full grow flex flex-row lg:flex-col gap-4 lg:gap-2.5 my-5 justify-evenly items-center">

                  {currentProject.liveSiteLink && (
                    <Button
                      href={currentProject.liveSiteLink}
                      className="hover:shadow-th-neutral-800 !bg-th-blue-500 max-md:!text-base"
                      disabled={!currentProject.liveSiteLink}
                      target="_blank"
                    >
                      <GrLanguage />
                      <span className="hidden md:inline">View </span>Live Site
                    </Button>
                  )}

                  {currentProject.githubLink && (
                    <Button
                      href={currentProject.githubLink}
                      target="_blank"
                      className="hover:shadow-th-neutral-800 !bg-th-blue-500 max-md:!text-base"
                      disabled={!currentProject.githubLink}
                    >
                      <BsGithub />
                      Github<span className="hidden md:inline"> Repo</span>
                    </Button>
                  )}
                
                </div>

              </div>

            </div>

            <WhatWhyHowCards currentProject={currentProject} />

          </div>
        </div>
      </div>
    </DynamicBackground>
  )
}