"use client"

import { FaCircleChevronRight } from "react-icons/fa6";
import { FaCircleChevronLeft } from "react-icons/fa6"
import { redirect } from "next/navigation";

type ProjectNavButtonProps = {
  direction: "previous" | "next", 
  projectId: number, 
  totalProjects: number
}

export default function ProjectNavButton({ direction, projectId, totalProjects }: ProjectNavButtonProps) {

  function handleNextProject() {
    if (projectId < totalProjects - 1) {
      redirect(`/dev/${projectId + 1}`);
    }
  }
  function handlePrevProject() {
    if (projectId > 0) {
      redirect(`/dev/${projectId - 1}`);
    }
  }

  const prevDisabled = projectId === 0
  const nextDisabled = projectId === totalProjects - 1

  const iconClassName = "text-th-pink-500 text-7xl transition-all duration-200 hover:text-th-pink-600 hover:scale-105 cursor-pointer"
  const disabledIconClassName = "text-th-neutral-500/50 text-7xl"

  return (
    <>
    {
      direction === "previous" ? 
        <FaCircleChevronLeft
          className={prevDisabled ? disabledIconClassName : iconClassName}
          onClick={handlePrevProject}
        /> 
      : 
        <FaCircleChevronRight
          className={nextDisabled ? disabledIconClassName : iconClassName}
          onClick={handleNextProject}
        />
    }
    </>
  )
}