import DynamicBackground from "@/components/DynamicBackground";

export default function TestPage() {
  return (
    <DynamicBackground>
      <div className="h-full w-full flex flex-col items-center justify-center overflow-hidden">
        <div className="h-full w-desktop relative">

          <div className="w-full h-full flex flex-col justify-between gap-16">

            <iframe 
              src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1803408114&color=%23FFB300&auto_play=false&hide_related=true&show_comments=true&show_user=true&show_reposts=false&show_teaser=true" 
              className="h-full min-h-2 rounded-md mt-4 border-2 border-th-neutral-950 shadow-th-md shadow-th-pink-500"
            />

            <iframe   
              src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1803408114&color=%23FFB300&auto_play=false&hide_related=true&show_comments=true&show_user=true&show_reposts=false&show_teaser=true" 
              className="h-full min-h-2 rounded-md mt-4 border-2 border-th-neutral-950 shadow-th-md shadow-th-pink-500"
            />

            <iframe 
              src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1803408114&color=%23FFB300&auto_play=false&hide_related=true&show_comments=true&show_user=true&show_reposts=false&show_teaser=true" 
              className="h-full min-h-2 rounded-md mt-4 border-2 border-th-neutral-950 shadow-th-md shadow-th-pink-500"
            />

            <iframe 
              src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1803408114&color=%23FFB300&auto_play=false&hide_related=true&show_comments=true&show_user=true&show_reposts=false&show_teaser=true" 
              className="h-full min-h-2 rounded-md mt-4 border-2 border-th-neutral-950 shadow-th-md shadow-th-pink-500"
            />

          </div>

        </div>
      </div>
    </DynamicBackground>
  
  );
}