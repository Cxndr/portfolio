import DynamicBackground from "@/components/DynamicBackground";
import GetInTouchCard from "@/components/GetInTouchCard";
import Image from "next/image";
export default function ContactPage() {
  return (
    <DynamicBackground type="contact">
      <div className="h-full w-full flex flex-col items-center justify-center overflow-hidden">
        <div className="h-full w-full md:w-desktop flex flex-col items-center justify-center">

          <div className="h-full md:h-auto w-full flex flex-col gap-16 justify-center md:justify-start items-center -translate-y-4 md:-translate-y-12">
            
            <Image 
                src="/img/icons/arrow.svg" 
                alt="hand drawn arrow pointing down" 
                width={64} 
                height={64} 
                className="
                  rotate-[118deg] md:rotate-[125deg] scale-x-[-1] translate-y-5 md:translate-y-8 -translate-x-4
                  "
              />

            <div className="h-fit w-full flex justify-center mb-12">
              <GetInTouchCard />
            </div>
          </div>

        </div>
      </div>
    </DynamicBackground>
  )
}