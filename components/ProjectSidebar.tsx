import Link from "next/link";
import { DevProject, techColors } from "@/lib/devProjects";
import { Button } from "@/components/ui/button";
import { Badge } from "./ui/badge";
import { GrLanguage } from "react-icons/gr";
import { BsGithub } from "react-icons/bs";

export default function ProjectSidebar({project}: {project: DevProject}) {

  return (
    <div className="w-1/4 h-full pl-8 flex flex-col items-center justify-center">
      <div className="w-full flex flex-col items-center justify-center gap-16">

        <div className="flex flex-col gap-6">
          <Button>
            <Link href={project.liveSiteLink} target="_blank">
              <span className="flex flex-row items-center gap-2">
                <GrLanguage />
                Live Website
              </span>
            </Link>
          </Button>

          <Button>
            <Link href={project.githubLink} target="_blank">
              <span className="flex flex-row items-center gap-2">
                <BsGithub />
                Github Repo
              </span>
            </Link>
          </Button>
        </div>


        <div className="w-full h-full flex flex-col items-center justify-center">
          <h4 className="text-xl font-bold mb-3">Core Technologies</h4>
          <div className="flex flex-row flex-wrap items-start justify-start gap-2">
            {project.technologies.map((technology) => (
              <Badge key={technology} className={techColors[technology as keyof typeof techColors]}>{technology}</Badge>
            ))}
          </div>
        </div>

        <div className="w-full h-full flex flex-col items-center justify-center">
          <h4 className="text-xl font-bold mb-2">Skills Gained</h4>
          <ul className="flex flex-col gap-3 text-sm">
            {project.skillsGained.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
        </div>

      </div>
    </div>
  )

}