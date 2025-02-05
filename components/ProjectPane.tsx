"use client";

import { useState } from "react";
import { DevProject } from "@/lib/devProjects";
import NavArrow from "./NavArrow";
import Image from "next/image";
import WhatWhyHow from "./WhatWhyHow";
import { Button } from "@/components/ui/button";
import { FaCaretDown } from "react-icons/fa6";


export default function ProjectPane({project}: {project: DevProject}) {

  const [showMore, setShowMore] = useState(false);

  return (
    <div className="w-3/4 h-full flex flex-col gap-8 items-center justify-between">
      
      <h2 className="text-4xl font-bold text-foreground/80">{project.title}</h2>

      <div className="w-full flex flex-row items-center justify-center">
        <NavArrow direction="left" size="small"/>
        {project.imagesSrc.map((image, index) => (
          <Image key={index} src={image} alt={project.title} width={1920} height={1080} className="w-2/3 object-cover" />
        ))}
        <NavArrow direction="right" size="small"/>
      </div>

      <WhatWhyHow project={project} />

      <Button onClick={() => setShowMore(!showMore)}>
        <span className="flex flex-row items-center justify-center gap-2">
          <FaCaretDown /> Read More
        </span>
      </Button>

      {showMore && (
        <div className="w-full h-full">
          <p>{project.longDescription}</p>
        </div>
      )}

    </div>
  )

}