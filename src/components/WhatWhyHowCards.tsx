import { DevProject } from "@/lib/devProjects";
import Card from "./Card";
import CardLabel from "./CardLabel";

type WhatWhyHowCardsProps = {
  currentProject: DevProject;
};

export default function WhatWhyHowCards({ currentProject }: WhatWhyHowCardsProps) {
  return (
    <div className="h-full w-full lg:w-5/12 flex flex-col gap-8 lg:gap-20 justify-center order-3 lg:order-1">

      <Card className="p-4 pt-5 shadow-th-pink-500 flex flex-col gap-2 relative">
        <CardLabel label="What" color="pink" className="-top-10" />
        <ul className="mt-2 flex flex-col gap-0">
          {currentProject.whatList.map((item, index) => (
            <li key={index} dangerouslySetInnerHTML={{ __html: item }} />
          ))}
        </ul>
      </Card>

      <Card className="p-4 pt-5 shadow-th-blue-500 flex flex-col gap-2 relative">
        <CardLabel label="Why" color="blue" className="-top-10" />
        <ul className="mt-2 flex flex-col gap-0">
          {currentProject.whyList.map((item, index) => (
            <li key={index} dangerouslySetInnerHTML={{ __html: item }} />
          ))}
        </ul>
      </Card>

      <Card className="p-4 pt-5 shadow-th-yellow-500 flex flex-col gap-2 relative">
        <CardLabel label="How" color="yellow" className="-top-10" />
        <ul className="mt-2 flex flex-col gap-0">
          {currentProject.howList.map((item, index) => (
            <li key={index} dangerouslySetInnerHTML={{ __html: item }} />
          ))}
        </ul>
      </Card>

    </div>
  );
}