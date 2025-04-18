"use client";

import { devProjects, techColors } from "@/lib/devProjects";
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";
import { useNavigationState } from "@/lib/navigationState";
import { findSiteMapKey, getNavigationDirection, siteMap } from "@/lib/navigationUtils";
import React from "react";

export default function ProjectCard({ project, index }: { project: typeof devProjects[number], index: number }) {

  const router = useRouter();
  const pathname = usePathname();
  const setDirection = useNavigationState((state) => state.setDirection);

  const handleClick = () => {
    const targetHref = `/dev/${index}`;
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

  return (
    <div 
      onClick={handleClick}
      className={`
        w-full flex 
        ${index % 2 !== 0 ? 'flex-row-reverse' : 'flex-row'}
        md:flex-col
        md:aspect-[16/8]
        shadow-th-neutral-950/50 md:shadow-lg
        md:rounded-2xl overflow-hidden 
        relative
        group
        cursor-pointer
        bg-th-bkg-1
      `}
    >
      <div className="relative w-1/2 md:w-full md:h-full flex-shrink-0 md:aspect-[16/8]"> 
        <Image
          src={project.thumbnailSrc}
          alt={project.title}
          fill
          className="
            object-cover 
            md:group-hover:blur-sm md:group-hover:scale-105
            md:group-hover:shadow-th-neutral-950/50 md:group-hover:shadow-md
            transition-all duration-300
          "
          priority
        />

        <div 
          className="
            absolute top-0 left-0 w-full h-full
            bg-th-neutral-950/50
            opacity-0 
            md:group-hover:opacity-100
            transition-all duration-300
            pointer-events-none
          "
        />

        <h3 className={`
          !text-base md:!text-2xl font-bold text-th-neutral-50 
          absolute bottom-0 py-1 px-1 md:px-3 md:py-2
          ${index % 2 !== 0 ? 'right-0 pl-2.5 rounded-tl-2xl' : 'left-0 pr-2.5 rounded-tr-2xl'}
          md:left-0 md:rounded-tr-2xl md:rounded-tl-none md:right-auto
          bg-th-neutral-950/70 md:bg-th-neutral-950/50 backdrop-blur-sm
          transition-all duration-300
          z-10
          whitespace-nowrap
          leading-none
          h-fit
          md:group-hover:bottom-full md:group-hover:translate-y-[125%]
          md:group-hover:left-1/2 md:group-hover:-translate-x-1/2
          md:group-hover:rounded-2xl 
          md:group-hover:bg-neutral-950/0 md:group-hover:backdrop-blur-none 
          md:group-hover:m-auto
          md:group-hover:!text-3xl
        `}>
          {project.title}
        </h3>
      </div>

      <div className="
        w-1/2 md:w-full flex flex-col items-center justify-center p-2 
        md:absolute md:inset-0 md:p-0
        "
      >

        <div
          className="
          w-full text-center
          min-h-[3rem]
          flex flex-col items-center justify-center
          text-th-neutral-900
          md:relative md:top-3/4 md:px-6 md:text-th-neutral-50/0
          md:group-hover:text-th-neutral-50/100
          md:group-hover:top-0 md:group-hover:translate-y-0.5
          md:z-10
          md:transition-all md:duration-600
          "
        >
          <p 
            className="max-md:!text-xs max-md:!font-normal md:text-inherit !pl-0"
            dangerouslySetInnerHTML={{ __html: project.shortDescription }} 
          />
        </div>

        <div 
          className="
            flex flex-row gap-2 items-center justify-center mt-2
            opacity-100
            md:mt-0 md:absolute md:-bottom-10 md:px-3 md:py-2
            md:opacity-0
            md:group-hover:opacity-100 md:group-hover:bottom-1
            md:transition-all md:duration-800
            md:z-10
            max-md:hidden
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
  );
}