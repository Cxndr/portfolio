import Card from "@/components/Card";
import DynamicBackground from "@/components/DynamicBackground";
import { devProjects } from "@/lib/devProjects";
import { BsGithub } from "react-icons/bs";
import { GrLanguage } from "react-icons/gr";
import Button from "@/components/Button";
import CardLabel from "@/components/CardLabel";
import InternalLink from "@/components/InternalLink";
import { LuArrowLeft } from "react-icons/lu";
import ImageCarousel from "@/components/ImageCarousel";
import fs from 'fs';
import path from 'path';

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
      <div className="h-full w-full flex flex-col items-center justify-center overflow-hidden">
        <div className="h-full w-desktop">

          <div 
            className="
              button
              px-3 py-2 my-3 rounded-3xl
              -translate-x-8
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

          <div className="grow flex flex-row gap-12">

            <div className="h-full w-5/12 flex flex-col gap-20 justify-center">

              <Card className="mt-12 p-6.5 pt-4.5 shadow-th-pink-500 flex flex-col gap-3 relative">
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
              
              <ImageCarousel
                project={currentProject}
                desktopImagePaths={desktopImagePaths}
                mobileImagePaths={mobileImagePaths}
              />

              <div className="w-full flex-grow flex flex-col justify-center items-center gap-8">
                <Button
                  href={currentProject.liveSiteLink}
                  className="hover:shadow-th-neutral-800"
                  disabled={!currentProject.liveSiteLink}
                >
                  <GrLanguage />
                  View Live Site
                </Button>

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