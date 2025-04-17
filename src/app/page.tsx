import Card from "@/components/Card";
import DynamicBackground from "@/components/DynamicBackground";
import ProfileImage from "@/components/ProfileImage";
import SubtitleAnim from "@/components/SubtitleAnim";
import Image from "next/image";

export default function HomePage() {
  return (
    <DynamicBackground>
      <div className="h-full w-full flex flex-col items-center justify-center overflow-hidden">
          <div className="h-full w-desktop">

            <ProfileImage />

            <div className="h-full flex flex-col gap-12 relative z-10">

              <Card className="w-5/12 mt-16 p-4 pt-2 shadow-th-yellow-500">
                <h1>Matt Vandersluys</h1>
                <SubtitleAnim values={["Web Development", "Digital Marketing", "Electronic Music"]} />
              </Card>

              <Card className="w-5/12 ml-18 p-8 flex flex-col gap-6 shadow-th-pink-500">
                <h4>UX focused, User-First Design.</h4>
                <p>I naturally obsess over optimising natural and intuitive user experiences in all my design work.</p>
                <p>I believe a user having a frictionless experience should be the number one priority when developing user facing systems, not only in designing the front-end the user interacts with directly, but also the back-end tools that drive them.</p>
              </Card>

              <span className="!text-th-pink-500 text-xl/6 font-caveat absolute left-[42%] -translate-x-1/2 bottom-20 max-w-[24ch] bg-th-neutral-50 shadow-th-neutral-50/20 shadow-2xl rounded-md -rotate-6">
                Use mouse wheel or arrow keys to navigate the website!
              </span>

              <Image 
                src="/img/icons/arrow.svg" 
                alt="hand drawn arrow pointing down" 
                width={64} 
                height={64} 
                className="
                  absolute bottom-5 left-[32%] -translate-x-1/2 rotate-[45deg]
                  "
              />

            </div>
            
          </div>
      </div>
    </DynamicBackground>

  );
}