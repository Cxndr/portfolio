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
        <div className="w-full max-w-[1600px] h-full flex flex-col items-center p-4">

          <div className="w-full px-5 flex flex-row justify-center items-center gap-4 ">
            <BsArrowLeftCircle className="text-4xl text-zinc-700" />
            <div className="h-24 w-full my-4 flex flex-row rounded-2xl overflow-hidden">
              <Image className="w-1/6 h-full object-cover object-center" src="/img/optcgsimthemer.png" alt="One Piece TCG Sim Themer" height={96} width={192} />
              <Image className="w-1/6 h-full object-cover object-center" src="/img/optcgsimthemer.png" alt="One Piece TCG Sim Themer" height={96} width={192} />
              <Image className="w-1/6 h-full object-cover object-center" src="/img/optcgsimthemer.png" alt="One Piece TCG Sim Themer" height={96} width={192} />
              <Image className="w-1/6 h-full object-cover object-center" src="/img/optcgsimthemer.png" alt="One Piece TCG Sim Themer" height={96} width={192} />
              <Image className="w-1/6 h-full object-cover object-center" src="/img/optcgsimthemer.png" alt="One Piece TCG Sim Themer" height={96} width={192} />
              <Image className="w-1/6 h-full object-cover object-center" src="/img/optcgsimthemer.png" alt="One Piece TCG Sim Themer" height={96} width={192} />
            </div>
            <BsArrowRightCircle className="text-4xl text-zinc-700" />
          </div>

          <div className="h-0 flex-grow w-full flex gap-4">
            <div className="h-full w-1/2 flex flex-col gap-4">

              <Image src="/img/optcgsimthemer.png" alt="Screenshot of my OPTCG Sim Themer web app" height={958} width={1920} className="rounded-xl object-cover" />

              <div className="flex-grow flex flex-row items-start justify-center gap-4">

                <div className="flex flex-row gap-4">
                  <div className="w-1/3 flex flex-col gap-2 p-4 pt-3 bg-zinc-50/85 rounded-xl shadow-shadowtheme shadow-2xl">
                    <h3 className="text-lg font-bold text-center">Core Technologies</h3>
                    <div className="flex flex-wrap gap-2">
                      <Badge className="bg-orange-400">JIMP</Badge>
                      <Badge className="bg-blue-400">Next.js</Badge>
                      <Badge className="bg-pink-400">DaisyUI</Badge>
                      <Badge className="bg-lime-500">Tailwind</Badge>
                      <Badge className="bg-indigo-700">TypeScript</Badge>
                    </div>
                  </div>

                  <div className="w-2/3 flex flex-col gap-1 px-2 bg-zinc-50/85 rounded-xl p-4 shadow-shadowtheme shadow-2xl">
                    <h3 className="text-lg font-bold text-center">Skills Gained</h3>
                    <ul className="list-none gap-2 flex-grow flex flex-col items-start justify-start pl-6">
                      <li>🖼️ Image Manipulation Algorithms.</li>
                      <li>👤 Real-world User Base.</li>
                      <li>🖱️ Client-Side Focused Development.</li>
                      <li>🖥️ Desktop-First Development.</li>
                    </ul>
                  </div>
                </div>

                <div className="h-full px-4 pt-2 flex flex-col gap-4">
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

              </div>
              
            </div>

            <div className="w-1/2 flex flex-col bg-zinc-50/85 rounded-xl p-4 shadow-shadowtheme shadow-2xl">
              <CustomScrollbars>

                <h2 className="mt-2 mb-4 text-3xl font-bold text-center">One Piece TCG Sim Themer</h2>

                <h4 className="font-semibold text-cs-1-muted">
                  A web app that allows users to generate custom themes for the One Piece Trading Card Game Simulator.
                </h4>

                <p className="">
                  The <b>One Piece TCG Sim</b> is a fan-made solution for playing the One Piece card game online in the absense of an official client. It is a great software but the visuals are very basic, and the single developer is focused on the functionality and keeping up with new card releases. It uses a selection of individual user accessible JPG and PNG files for displaying cards, backgrounds, playmats and other elements.
                </p>

                <p className="">
                  By utilizing the <b>JIMP (JavaScript Image Manipulation Program)</b> javascript library and a web based ui interface, image files that can be used to theme <b>One Piece TCG Sim</b> can be generated in browser in a similar manner to Photoshop/Gimp. This is the goal of my web app, to allow users to generate these image files in a simple and easy to use web interface.
                </p>

                <p className="">
                  The project was a great learning experience: I had to create my own shadow and border-radius algorithms, implement performant web workers to provide a responsive ui whilst performing intensive image manipulation tasks, and iterate various back-end and front-end solutions to provide a performant and smooth user experience. Because of the real-world user base and a need to provide a performant app at a free price point with no monetization, I utilized a client-side focused development approach - performing the majority of the image manipulation tasks on the users machine; allowing for a performant desktop app, without the need for high server resource usage or large file transfers from a server.
                </p>

                <p>
                  Developing for a real-world user base facilitated a meaningful design & development experience with unique user needs to fulfill. For example the general standard in modern web apps is to develop mobile first, but because the desktop version of the simulator is so much more popular and such a better user experience than the mobile version the user base for the One Piece TCG Sim is primarily desktop users. I made the decision to develop the desktop version first and then adapt the mobile version afterwards, priotizing the majority of the users who will use the app on desktop.
                </p>

              </CustomScrollbars>
            </div>

          </div>

        </div>
      </DynamicBackground>
    </div>
  )
}