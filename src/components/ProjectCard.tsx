"use client";

import { devProjects, techColors } from "@/lib/devProjects";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function ProjectCard({ project, index }: { project: typeof devProjects[number], index: number }) {

  const router = useRouter();

  const handleClick = () => {
    router.push(`/dev/${index}`);
  }

  return (
    <div 
      onClick={handleClick}
      className={`
        w-full flex flex-col items-center justify-center
        aspect-[16/8]
        shadow-th-neutral-950/50 shadow-lg
        rounded-2xl overflow-hidden
        relative
        group
        cursor-pointer
      `}
    >
      <Image
        src={project.imageSrcDesktop}
        alt={project.title}
        fill
        className="
          object-cover 
          group-hover:blur-sm group-hover:scale-105 
          group-hover:shadow-th-neutral-950/50 group-hover:shadow-md
          transition-all duration-300
        "
        priority
      />

      <div 
        className="
          absolute top-0 left-0 w-full h-full
          bg-th-neutral-950/50
          opacity-0
          group-hover:opacity-100
          transition-all duration-300
        "
      />

      <h3 className="
        !text-2xl font-bold text-th-neutral-50 
        absolute bottom-0 left-0 px-3 py-2
        bg-th-neutral-950/50 backdrop-blur-sm
        rounded-tr-2xl
        transition-all duration-300
        z-10
        whitespace-nowrap
        leading-none
        h-fit
        group-hover:translate-y-[-290%] group-hover:left-1/2 group-hover:-translate-x-1/2 
        group-hover:rounded-2xl 
        group-hover:bg-neutral-950/0 group-hover:backdrop-blur-none 
        group-hover:m-auto
        group-hover:!text-3xl
      ">
        {project.title}
      </h3>

      <p 
        className="
        text-th-neutral-50/0 text-md
        absolute top-3/4 w-full p-2 text-center
        group-hover:text-th-neutral-50/100
        group-hover:top-1/2 group-hover:-translate-y-[30%]
        z-10
        transition-all duration-600
        "
      >
        <span dangerouslySetInnerHTML={{ __html: project.shortDescription }} />
      </p>

      <div 
        className="
          flex flex-row gap-2 items-center justify-center
          absolute -bottom-10 px-3 py-2
          opacity-0
          group-hover:opacity-100 group-hover:bottom-1
          transition-all duration-800
          z-10
        "
      >
        {project.technologies.map((technology) => (
          <div key={technology} className={`badge flex flex-col items-center justify-center ${techColors[technology as keyof typeof techColors]}`}>
            {technology}
          </div>
        ))}
      </div>

    </div>
  );
}