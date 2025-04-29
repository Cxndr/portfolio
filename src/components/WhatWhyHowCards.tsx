import { DevProject } from "@/lib/devProjects";
import Card from "./Card";
import CardLabel from "./CardLabel";

type WhatWhyHowCardsProps = {
  currentProject: DevProject;
};

export default function WhatWhyHowCards({ currentProject }: WhatWhyHowCardsProps) {
  return (
    <div className="mt-12 pb-8 md:pb-0 px-4 md:px-0 w-full flex flex-col lg:flex-row gap-18 md:gap-14">

      <Card className="flex-1 p-4 pt-5 shadow-th-sm md:shadow-th shadow-th-pink-500 flex flex-col gap-2 relative">
        <CardLabel label="What" color="pink" className="-top-10" />
        <ul className="mt-4 flex flex-col gap-1">
          {currentProject.whatList.map((item, index) => (
            <li key={index} dangerouslySetInnerHTML={{ __html: item }} />
          ))}
        </ul>
      </Card>

      <Card className="flex-1 p-4 pt-5 shadow-th-sm md:shadow-th shadow-th-blue-500 flex flex-col gap-2 relative">
        <CardLabel label="Why" color="blue" className="-top-10" />
        <ul className="mt-4 flex flex-col gap-1">
          {currentProject.whyList.map((item, index) => (
            <li key={index} dangerouslySetInnerHTML={{ __html: item }} />
          ))}
        </ul>
      </Card>

      <Card className="flex-1 p-4 pt-5 shadow-th-sm md:shadow-th shadow-th-yellow-500 flex flex-col gap-2 relative">
        <CardLabel label="How" color="yellow" className="-top-10" />
        <ul className="mt-4 flex flex-col gap-1">
          {currentProject.howList.map((item, index) => (
            <li key={index} dangerouslySetInnerHTML={{ __html: item }} />
          ))}
        </ul>
      </Card>

    </div>
  );
}