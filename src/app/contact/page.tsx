import DynamicBackground from "@/components/DynamicBackground";
import GetInTouchCard from "@/components/GetInTouchCard";
import Image from "next/image";
export default function ContactPage() {
  return (
    <DynamicBackground>
      <div className="h-full w-full flex flex-col items-center justify-center overflow-hidden">
        <div className="h-full w-desktop flex flex-col items-center justify-center">

          <div className="w-full flex flex-col gap-16 justify-start items-center -translate-y-12">
            
            <Image 
                src="/img/icons/arrow.svg" 
                alt="hand drawn arrow pointing down" 
                width={64} 
                height={64} 
                className="
                  rotate-[125deg] scale-x-[-1] translate-y-8 -translate-x-4
                  "
              />

            <GetInTouchCard />
          </div>

        </div>
      </div>
    </DynamicBackground>
  )
}