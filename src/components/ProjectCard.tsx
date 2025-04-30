"use client";

import { devProjects, techColors } from "@/lib/devProjects";
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";
import { useNavigationState } from "@/lib/navigationState";
import { findSiteMapKey, getNavigationDirection, siteMap } from "@/lib/navigationUtils";
import React from "react";

const backgroundColors = [
  'bg-th-pink-500/50',
  'bg-th-blue-500/50',
  'bg-th-yellow-500/50',
];

export default function ProjectCard({ project, index }: { project: typeof devProjects[number], index: number }) {

  const router = useRouter();
  const pathname = usePathname();
  const setDirection = useNavigationState((state) => state.setDirection);

  const handleClick = () => {
    const targetHref = `/dev/${project.slug}`;
    const currentPathKey = findSiteMapKey(pathname, siteMap);
    const targetPathKey = findSiteMapKey(targetHref, siteMap);

    if (!currentPathKey || !targetPathKey) {
      console.error("ProjectCard Click: Path key not found for navigation.", { currentPathKey, targetPathKey });
      router.push(targetHref);
      return;
    }
    if (currentPathKey === targetPathKey && pathname === targetHref) {
      console.log("ProjectCard Click: Navigation prevented, already on target page.");
      return;
    }

    const direction = getNavigationDirection(currentPathKey, targetPathKey);
    console.log(`ProjectCard Click: ${currentPathKey} -> ${targetPathKey}, Direction: ${direction}`);

    setDirection(direction);

    router.push(targetHref);
  }

  const dynamicBgColor = backgroundColors[index % backgroundColors.length];

  return (
    <div className="w-full px-2 lg:px-0">
      <div 
        onClick={handleClick}
        className={`
          w-full flex max-lg:max-h-full max-lg:min-h-11/12
          ${index % 2 !== 0 ? 'flex-row-reverse md:flex-row' : 'flex-row'}
          lg:flex-col
          lg:aspect-[16/8]
          shadow-th-neutral-950/50 lg:shadow-lg
          rounded-xl lg:rounded-2xl overflow-hidden 
          relative
          group
          cursor-pointer
          bg-th-bkg-1
          max-lg:backdrop-blur-sm ${dynamicBgColor} lg:bg-opacity-0
        `}
      >
        <div className="relative w-1/2 lg:w-full lg:h-full flex-shrink-0 lg:aspect-[16/8]"> 
          <Image
            src={project.thumbnailSrc}
            alt={project.title}
            fill
            className="
              object-cover 
              lg:group-hover:blur-sm lg:group-hover:scale-105
              lg:group-hover:shadow-th-neutral-950/50 lg:group-hover:shadow-md
              transition-all duration-300
            "
            priority
          />

          <div 
            className="
              absolute top-0 left-0 w-full h-full
              bg-th-neutral-950/50
              opacity-0 
              lg:group-hover:opacity-100
              transition-all duration-300
              pointer-events-none
            "
          />

          <h3 className={`
            !text-base lg:!text-2xl font-bold text-th-neutral-50 
            absolute bottom-0 py-1 px-1 lg:px-3 lg:py-2
            ${index % 2 !== 0 ? 'right-0 pl-2.5 rounded-tl-2xl' : 'left-0 pr-2.5 rounded-tr-2xl'}
            lg:left-0 lg:rounded-tr-2xl lg:rounded-tl-none lg:right-auto
            bg-th-neutral-950/70 lg:bg-th-neutral-950/50 backdrop-blur-sm
            transition-all duration-300
            z-10
            whitespace-nowrap
            leading-none
            h-fit
            lg:group-hover:bottom-full lg:group-hover:translate-y-[125%]
            lg:group-hover:left-1/2 lg:group-hover:-translate-x-1/2
            lg:group-hover:rounded-2xl 
            lg:group-hover:bg-neutral-950/0 lg:group-hover:backdrop-blur-none 
            lg:group-hover:m-auto
            lg:group-hover:!text-3xl
          `}>
            {project.title}
          </h3>
        </div>

        <div className="
          w-1/2 lg:w-full flex flex-col items-center justify-center p-2 
          lg:absolute lg:inset-0 lg:p-0
          "
        >

          <div
            className="
            w-full text-center
            min-h-[3rem]
            flex flex-col items-center justify-center
            text-th-neutral-900
            lg:relative lg:top-3/4 lg:px-6 lg:text-th-neutral-50/0
            lg:group-hover:text-th-neutral-50/100
            lg:group-hover:top-0 lg:group-hover:translate-y-0.5
            lg:z-10
            lg:transition-all lg:duration-600
            "
          >
            <p 
              className="max-lg:!text-xs max-lg:!font-normal lg:text-inherit !pl-0"
              dangerouslySetInnerHTML={{ __html: project.shortDescription }} 
            />
          </div>

          <div 
            className="
              flex flex-row gap-2 items-center justify-center mt-2
              opacity-100
              lg:mt-0 lg:absolute lg:-bottom-10 lg:px-3 lg:py-2
              lg:opacity-0
              lg:group-hover:opacity-100 lg:group-hover:bottom-1
              lg:transition-all lg:duration-800
              lg:z-10
              max-lg:hidden
            "
          >
            {project.technologies.map((technology) => (
              <div key={technology} className={`badge flex flex-col items-center justify-center ${techColors[technology as keyof typeof techColors]}`}>
                {technology}
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}