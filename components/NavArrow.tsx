import { FaCircleChevronLeft, FaCircleChevronRight } from "react-icons/fa6";
import { FaCaretLeft, FaCaretRight } from "react-icons/fa6";


type NavArrowProps = {
  direction: "left" | "right",
  size: "small" | "large"
}

export default function NavArrow({direction, size}:NavArrowProps) {

  return (
    <div className="w-1/6 h-full flex items-center justify-center p-4">
      {direction === "left" ?
        size === "large" ? 
          <FaCircleChevronLeft className="text-7xl text-cs-1" /> 
        : 
          <FaCaretLeft className="text-3xl text-cs-1" />
      : 
        size === "large" ? 
          <FaCircleChevronRight className="text-7xl text-cs-1" />
        : 
          <FaCaretRight className="text-3xl text-cs-1" />
      }
    </div>
  )

}
