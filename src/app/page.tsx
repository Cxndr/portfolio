import Card from "@/components/Card";
import DynamicBackground from "@/components/DynamicBackground";
import ProfileImage from "@/components/ProfileImage";
import SubtitleAnim from "@/components/SubtitleAnim";
import Image from "next/image";

export default function HomePage() {
  return (
    <DynamicBackground type="all">
      <div className="h-full w-full flex flex-col items-center justify-center overflow-hidden">
          <div className="h-full w-full xl:w-desktop">

            {/* <ProfileImage /> */}

            <div className="h-full flex flex-col gap-6 md:gap-12 relative z-10">

              <Card className="w-fit mx-auto md:mx-6 mt-4 md:mt-16 p-4 py-2 pr-5 shadow-th-md md:shadow-th shadow-th-yellow-500">
                <h1>Matt Vandersluys</h1>
                <SubtitleAnim values={["Web Development", "Digital Marketing", "Electronic Music"]} />
              </Card>

              <Card className="md:w-lg mx-6 md:mx-0 md:ml-18 p-4 md:p-8 flex flex-col gap-4 md:gap-6 shadow-th-md md:shadow-th shadow-th-pink-500">
                <h4>UX focused, User-First Design.</h4>
                <p>I naturally obsess over optimising natural and intuitive user experiences in all my design work.</p>
                <p>I believe a user having a frictionless experience should be the number one priority when developing user facing systems, not only in designing the front-end the user interacts with directly, but also the back-end tools that drive them.</p>
              </Card>

              <span 
                className="
                  !text-th-pink-500 text-xl/6 font-caveat 
                  absolute left-[60%] md:left-[42%] -translate-x-1/2 bottom-14 md:bottom-20 
                  w-fit md:w-[24ch] px-1.5 py-1 pr-3
                  bg-th-neutral-50 shadow-th-neutral-50/20 shadow-2xl 
                  rounded-md -rotate-6
                  self-center
                  "
                >
                  <span className="hidden md:inline">Use mouse wheel or arrow keys to navigate the website!</span>
                  <span className="inline md:hidden">Swipe to navigate!</span>
                </span>

              <Image 
                src="/img/icons/arrow.svg" 
                alt="hand drawn arrow pointing down" 
                width={64} 
                height={64} 
                className="
                  absolute -bottom-0.5 md:bottom-5 left-[40%] md:left-[32%] -translate-x-1/2 rotate-[45deg]
                  "
              />

            </div>
            
          </div>
      </div>
    </DynamicBackground>

  );
}