import AlbumCovers from "@/components/AlbumCovers";
import DynamicBackground from "@/components/DynamicBackground";
import { FaArrowDown } from "react-icons/fa";
import MusicHearMore from "@/components/MusicHearMore";
import SlothCSS from "@/components/SlothCSS";

export default function MusicPage() {
  return (
    <DynamicBackground>
      <div className="h-full w-full flex flex-col items-center justify-center overflow-hidden">
        <div className="h-full w-desktop">
          <div className="h-full w-full flex flex-col items-end">

            <div className="h-[77%] w-full mt-16 flex flex-row gap-16">
              
              <div className="h-full w-1/4 flex flex-col items-center justify-start gap-16">

                <div className="h-1/3 w-full">
                  <AlbumCovers/>
                </div>

                <div className="h-1/3 w-full flex flex-col items-center justify-center">
                  <div className="text-th-neutral-950 text-lg -rotate-6 text-center !font-bold bg-th-yellow-500 p-6 rounded-full">
                    PUT SOMETHING
                    <br />
                    COOL HERE!
                  </div>
                </div>
                
                <div className="h-1/3 w-full">
                  <MusicHearMore />
                </div>

              </div>

              <div className="h-full w-3/4 flex flex-col gap-8 items-center justify-between">
                
                <iframe 
                  src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1803408114&color=%23FFB300&auto_play=false&hide_related=true&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
                  className="w-full h-full max-h-44 min-h-2 rounded-md border-2 border-th-neutral-950 shadow-th-md shadow-th-pink-500 transition-all duration-300"
                />

                <iframe 
                  className="w-full h-full max-h-44 min-h-2 rounded-md border-2 border-th-neutral-950 shadow-th-md shadow-th-yellow-500 transition-all duration-300"
                  src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1677732198&color=%231089b1&auto_play=false&hide_related=true&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
                />

                <iframe 
                  className="w-full h-full max-h-44 min-h-2 rounded-md border-2 border-th-neutral-950 shadow-th-md shadow-th-blue-500 transition-all duration-300"
                  src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1326529426&color=%23ef486f&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
                />

              </div>

              <div className="relative right-9 flex items-center justify-center h-full w-0 -z-10 rotate-42 -top-0 scale-50">
                  <SlothCSS className="absolute"/>
                </div>

            </div>

            <div className="grow min-h-0 w-3/4 flex flex-row items-center justify-center">
              <FaArrowDown className="text-th-pink-500 text-4xl" />
            </div>

          </div>
        </div>
      </div>
    </DynamicBackground>
  )
}