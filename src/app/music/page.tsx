import DynamicBackground from "@/components/DynamicBackground";
import ProfileImage from "@/components/ProfileImage";


export default function MusicPage() {
  return (
    <DynamicBackground>
      <div className="h-full w-full flex flex-col items-center justify-center overflow-hidden">
        <div className="h-full w-desktop">

          <ProfileImage size="medium" />

          <div className="h-full flex flex-col gap-12 mt-12">
            
            <div className="h-1/5 flex flex-row gap-12">
              
              <div className="w-1/4"> 
                Album Covers
              </div>

              <iframe 
                width="95%" 
                height="95%"
                src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1803408114&color=%23FFB300&auto_play=false&hide_related=true&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
                className="rounded-md border-3 border-th-neutral-950 shadow-th-md shadow-th-pink-500"
              />

            </div>

            <iframe 
              width="55%" 
              height="14%" 
              src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1677732198&color=%231089b1&auto_play=false&hide_related=true&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
              className="ml-24 rounded-md border-3 border-th-neutral-950 shadow-th-md shadow-th-yellow-500"
            />

            <iframe 
              width="55%" 
              height="14%" 
              src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1326529426&color=%23ef486f&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
              className="ml-48 rounded-md border-3 border-th-neutral-950 shadow-th-md shadow-th-blue-500"
            />

            <iframe 
              width="55%" 
              height="14%" 
              src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1634045799&color=%231089b1&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
              className="rounded-md border-3 border-th-neutral-950 shadow-th-md shadow-th-yellow-500"
            />

          </div>

        </div>
      </div>
    </DynamicBackground>
  )
}