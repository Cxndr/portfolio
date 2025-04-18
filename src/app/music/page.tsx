import AlbumCovers from "@/components/AlbumCovers";
import DynamicBackground from "@/components/DynamicBackground";
import MusicHearMore from "@/components/MusicHearMore";
import MusicPlayer from "@/components/MusicPlayer";
import TapeCollection from "@/components/TapeCollection";

export default function MusicPage() {
  return (
    <DynamicBackground>
      <div className="h-full w-full flex flex-col items-center justify-center overflow-hidden">
        <div className="h-full w-desktop max-w-11/12">
          <div className="h-full w-full flex flex-col items-end">

            <div className="w-full mt-8 mb-12 md:mt-16 md:mb-28 flex flex-col md:flex-row gap-8 md:gap-16 flex-grow md:h-full">
              
              <div className="flex flex-col items-center justify-start gap-8 md:gap-16 w-full md:w-1/4 md:h-full">

                <div className="w-full flex justify-center md:h-1/3 md:mt-6">
                  <AlbumCovers/>
                </div>
                
                <div className="w-full flex items-center justify-center md:h-1/3 md:-translate-x-4">
                  <MusicHearMore />
                </div>

                <div className="hidden md:flex items-center justify-center w-full md:h-1/3 md:-translate-y-12 md:translate-x-2 md:-rotate-3">
                  <TapeCollection />
                </div>

              </div>

              <div className="relative flex flex-col gap-8 items-center justify-start md:justify-between w-full md:w-3/4 md:h-full flex-grow pb-4">
                
                <iframe 
                  src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1803408114&color=%23FFB300&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false&enable_api=true"
                  className="w-full flex-grow min-h-0 md:h-auto md:max-h-44 rounded-md border-2 border-th-neutral-950 shadow-th-md shadow-th-pink-500 transition-all duration-300"
                />

                <iframe 
                  className="w-full flex-grow min-h-0 md:h-auto md:max-h-44 rounded-md border-2 border-th-neutral-950 shadow-th-md shadow-th-yellow-500 transition-all duration-300"
                  src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1677732198&color=%231089b1&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false&enable_api=true"
                />

                <iframe 
                  className="w-full flex-grow min-h-0 md:h-auto md:max-h-44 rounded-md border-2 border-th-neutral-950 shadow-th-md shadow-th-blue-500 transition-all duration-300"
                  src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1326529426&color=%23ef486f&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false&enable_api=true"
                />

              </div>

              <MusicPlayer />

            </div>

          </div>
        </div>
      </div>
    </DynamicBackground>
  )
}