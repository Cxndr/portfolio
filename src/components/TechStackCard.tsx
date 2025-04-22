import { DevProject, techLinks } from "@/lib/devProjects";
import { techIcons } from "@/lib/devProjects";
import Link from "next/link";
import CardLabel from "./CardLabel";
import Card from "./Card";
import Image from "next/image";

type TechStackCardProps = {
  currentProject: DevProject;
};

export default function TechStackCard({ currentProject }: TechStackCardProps) {
  return (
    <>
      {currentProject.technologies.length > 0 && (
        <Card 
          className="
            flex flex-col items-between gap-2 relative 
            mt-12 mb-2 max-w-full 
            p-3 pt-5 md:p-6 md:pt-7 shadow-th-sm md:shadow-th shadow-th-yellow-500 
          "
        >
          <CardLabel label="Tech Stack" color="yellow" className="-top-10 !text-sm" size="small" />
          <div 
            className="
              flex flex-row flex-wrap justify-evenly items-start relative z-30 
              gap-0 md:gap-6 mx-0 md:mx-3 mt-0 md:mt-2
            "
            >
            {currentProject.technologies.map((technology) => (
              <Link 
                href={techLinks[technology as keyof typeof techLinks]} 
                target="_blank" 
                key={technology}
                >
                <div className="flex flex-col items-center gap-2 mx-2 md:mx-4">
                  <Image
                    key={technology}
                    src={techIcons[technology as keyof typeof techIcons]}
                    alt={technology}
                    width={64}
                    height={64}
                    className="h-12 w-12 md:h-16 md:w-16 hover:scale-110 transition-all duration-300"
                  />
                  <span className="label">{technology}</span>
                </div>
              </Link>
            ))}
          </div>
        </Card>
        )}
      </>
  );
}