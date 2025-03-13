import AlbumCovers from "@/components/AlbumCovers";
import DynamicBackground from "@/components/DynamicBackground";
import ProfileImage from "@/components/ProfileImage";
import { FaArrowDown } from "react-icons/fa";
import MusicHearMore from "@/components/MusicHearMore";


export default function MusicPage() {
  return (
    <DynamicBackground>
      <div className="h-full w-full flex flex-col items-center justify-center overflow-hidden">
        <div className="h-full w-desktop">

          <div className="h-full w-full flex flex-col">

            <ProfileImage size="medium" />

            <div className="h-10/12 flex flex-col gap-16">
              
              <div className="h-[32.5%] flex flex-row gap-24 mt-16">
                
                <div className="w-1/4 ml-4"> 
                  <AlbumCovers />
                </div>

                <iframe 
                  width="80%"
                  src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1803408114&color=%23FFB300&auto_play=false&hide_related=true&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
                  className="min-h-2 rounded-md mt-4 border-2 border-th-neutral-950 shadow-th-md shadow-th-pink-500 hover:scale-105 transition-all duration-300"
                />

              </div>

              <div className="w-full grow min-h-0 flex flex-col justify-between gap-16">
                
                <iframe 
                  width="50%" 
                  className="ml-32 h-full min-h-2 rounded-md border-2 border-th-neutral-950 shadow-th-md shadow-th-yellow-500 hover:scale-105 transition-all duration-300"
                  src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1677732198&color=%231089b1&auto_play=false&hide_related=true&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
                />
              
                <iframe 
                  width="50%" 
                  className="ml-56 h-full min-h-2 rounded-md border-2 border-th-neutral-950 shadow-th-md shadow-th-blue-500 hover:scale-105 transition-all duration-300"
                  src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1326529426&color=%23ef486f&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
                />
              
                <iframe 
                  width="50%"
                  className="ml-4 h-full min-h-2 rounded-md border-2 border-th-neutral-950 shadow-th-md shadow-th-yellow-500 hover:scale-105 transition-all duration-300"
                  src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1634045799&color=%231089b1&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
                />
                
              </div>

            </div>

            


            <div className="grow min-h-0 flex flex-row gap-4 items-center justify-center">

              <div className="w-1/2 flex items-center justify-center">
                <FaArrowDown className="text-th-pink-500 text-4xl" />
              </div>

              <div className="w-1/2 flex items-start">
                <MusicHearMore />
              </div>

            </div>

          </div>


        </div>
      </div>
    </DynamicBackground>
  )
}