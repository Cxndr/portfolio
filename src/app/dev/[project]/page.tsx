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
      <div className="h-full w-full flex flex-col items-center overflow-y-auto lg:overflow-hidden px-4 lg:px-0">
        <div className="w-full lg:w-desktop flex flex-col h-full">

          <div
            className="
              button
              px-3 py-2 my-4 rounded-3xl
              self-start lg:-translate-x-8
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

          <div className="flex-grow flex flex-col lg:flex-row gap-6 lg:gap-12 mb-8 lg:mb-0">

            <WhatWhyHowCards currentProject={currentProject} />

            <div className="w-full lg:w-7/12 flex flex-col items-center order-1 lg:order-2">

              <div className="w-full lg:perspective-normal">
                <ImageCarousel
                  project={currentProject}
                  desktopImagePaths={desktopImagePaths}
                  mobileImagePaths={mobileImagePaths}
                  className="lg:-rotate-y-10 lg:-rotate-x-1"
                />
              </div>

              <div className="w-full flex flex-col justify-center items-center gap-4 lg:gap-6 py-8 lg:py-0 lg:flex-grow">
                {currentProject.liveSiteLink && (
                  <Button
                    href={currentProject.liveSiteLink}
                    className="hover:shadow-th-neutral-800"
                    disabled={!currentProject.liveSiteLink}
                  >
                    <GrLanguage />
                    View Live Site
                  </Button>
                )}

                <Button
                  href={currentProject.githubLink}
                  className="hover:shadow-th-neutral-800"
                  disabled={!currentProject.githubLink}
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