import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, PanelTop } from "lucide-react";
import DynamicBackground from "@/components/DynamicBackground";
import CustomScrollbars from "@/components/CustomScrollbars";

export default function DevPage() {

  return (
    <div className="h-full w-svw flex flex-col items-center justify-center">
      <DynamicBackground>
        <div className="h-full w-full max-w-7xl flex flex-col items-center justify-between gap-3 m-4">

          <div className="flex flex-row items-center justify-between w-full max-w-2xl">
            <BsArrowLeftCircle className="text-4xl" />
            <h2 className="text-3xl font-bold"> OPTCG Sim Themer </h2>
            <BsArrowRightCircle className="text-4xl" />
          </div>
            

          <div className="h-0 flex-grow flex flex-row items-start justify-center rounded-3xl">

            <div className="h-full w-full max-w-full flex flex-col items-center justify-between bg-zinc-50/85 text-zinc-900 rounded-2xl p-6 shadow-shadowtheme shadow-2xl overflow-auto">
              
                <Image src="/img/optcgsimthemer.png" alt="Screenshot of my OPTCG Sim Themer web app" height={958} width={1920} className="w-2/3 rounded-xl object-cover" />

                <p className="font-semibold">
                  A web app that allows users to generate custom themes for the One Piece Trading Card Game Simulator.
                </p>

                <p className="">
                  The One Piece TCG Sim is a fan-made solution for playing the card game online in the absense of an official client. It is a great software but the visuals are very basic, and the single developer is focused on the functionality and keeping up with new card releases. It uses a selection of individual JPG and PNG files for displaying cards, backgrounds, playmats and other elements.
                </p>

                <p className="">
                  By utilizing the JIMP (JavaScript Image Manipulation Program) library and a web based ui interface images for theming can be generated in browser in a similar manner to Photoshop/Gimp.
                </p>

                <p className="">
                  The project was a great learning experience: I had to create my own shadow and border-radius algorithms, implement complex web workers to provide a responsive ui whilst performing intensive image manipulation tasks, and re-iterate various back-end and front-end solutions to provide a performant app. Because of the real-world user base and need to provide a performant app at a free price point with no monetization, I utilized a client-side focused development approach - using the users machine to perform the majority of the image manipulation tasks, allowing for a performant desktop app, without the need for high server resources or large file transfers from a server.
                </p>

                <p>
                  Developing for a real-world user base created a meaningful design & development experience with unique user needs to fulfill. For example the general standard in modern web apps is to develop mobile first, but because the desktop version of the simulator is so much more popular and such a better user experience than the mobile version the user base for the One Piece TCG Sim is primarily desktop users. I made the decision to develop the desktop version first and then adapt the mobile version afterwards, priotizing the majority of the users who will use the app on desktop.
                </p>
              
            </div>

            <div className="h-1/4 w-64 flex flex-col items-center gap-8 mx-4 my-0">

              <div className="px-4 pt-2 flex flex-col gap-4">
                <Button className="rounded-3xl">
                  <Link href="https://optcgsimthemer.com">
                    <span className="flex flex-row items-center gap-2"><PanelTop /> Live Website</span>
                  </Link>
                </Button>

                <Button className="rounded-3xl">
                  <Link href="https://github.com/cs-4/optcgsimthemer">
                    <span className="flex flex-row items-center gap-2"><Github/> Github Repo</span>
                  </Link>
                </Button>
              </div>

              <div className="flex flex-col gap-1 px-2 bg-zinc-800/20 rounded-xl p-4">
                <h3 className="text-lg font-bold text-center">Core Technologies</h3>
                <div className="flex-grow flex flex-row flex-wrap items-start justify-start gap-2">
                  <Badge className="bg-orange-400">JIMP</Badge>
                  <Badge className="bg-blue-400">Next.js</Badge>
                  <Badge className="bg-pink-400">DaisyUI</Badge>
                  <Badge className="bg-lime-500">Tailwind</Badge>
                  <Badge className="bg-indigo-700">TypeScript</Badge>
                </div>
              </div>

              <div className="flex flex-col gap-1 px-2 bg-zinc-800/20 rounded-xl p-4">
                <h3 className="text-lg font-bold text-center">Skills Gained</h3>
                <ul className="list-disc gap-2 flex-grow flex flex-row flex-wrap items-start justify-start pl-6">
                  <li>Image Manipulation Algorithms.</li>
                  <li>Real-world User Base.</li>
                  <li>Client-Side Focused Development.</li>
                  <li>Desktop-First Development.</li>
                </ul>
              </div>

            </div>
            
          </div>

        </div>
      </DynamicBackground>
    </div>
  )
}