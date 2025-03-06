import DynamicBackground from "@/components/DynamicBackground";
import { FaArrowUp } from "react-icons/fa";
import GetInTouchCard from "@/components/GetInTouchCard";

export default function ContactPage() {
  return (
    <DynamicBackground>
      <div className="h-full w-full flex flex-col items-center justify-center overflow-hidden">
        <div className="h-full w-desktop">

          <div className="h-full w-full flex flex-col gap-16 justify-start items-center">
            <FaArrowUp className="text-th-pink-500 text-4xl mt-20" />
            <GetInTouchCard />
          </div>

        </div>
      </div>
    </DynamicBackground>
  )
}