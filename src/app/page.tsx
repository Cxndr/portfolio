import Card from "@/components/Card";
import DynamicBackground from "@/components/DynamicBackground";
import ProfileImage from "@/components/ProfileImage";
import SubtitleAnim from "@/components/SubtitleAnim";
import { FaArrowDown } from "react-icons/fa";

export default function HomePage() {
  return (
    <DynamicBackground>
      <div className="h-full w-full flex flex-col items-center justify-center overflow-hidden">
          <div className="h-full w-desktop">

            <ProfileImage />

            <div className="flex flex-col gap-12 relative z-10">

              <Card className="w-5/12 mt-16 p-4 pt-2 shadow-th-yellow-500">
                <h1>Matt Vandersluys</h1>
                <SubtitleAnim values={["Web Development", "Digital Marketing", "Electronic Music"]} />
              </Card>

              <Card className="w-5/12 ml-18 p-8 flex flex-col gap-6 shadow-th-pink-500">
                <h4>UX focused, User-First Design.</h4>
                <p>I naturally obsess over optimising natural and intuitive user experiences in all my design work.</p>
                <p>I believe a user having a frictionless experience should be the number one priority when developing user facing systems, not only in designing the front-end systems the user will interact with, but also the backend systems that drive them.</p>
              </Card>

              <FaArrowDown className="text-th-pink-500 text-4xl mt-3 relative left-[28%] -translate-x-1/2" />

            </div>
            
          </div>
      </div>
    </DynamicBackground>

  );
}