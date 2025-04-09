import { motion } from "framer-motion";
import { TbArrowBigLeftFilled, TbArrowBigRightFilled } from "react-icons/tb";

export default function ModalNavButton({ onClick, direction }: { onClick: (e: React.MouseEvent) => void, direction: "left" | "right" }) {

  return (
    <motion.div
      className={`
        text-5xl text-th-neutral-50 
        bg-th-pink-500 hover:bg-th-pink-500 
        active:bg-th-pink-600
        rounded-full p-4 
        transition-all duration-300
        z-10 
        pointer-events-auto cursor-pointer
        shadow-th-neutral-900
        ${direction === "left"
          ? "hover:shadow-th-button-sm hover:-translate-x-[3px] hover:-translate-y-[3px]"
          : "hover:shadow-th-button-sm-left hover:translate-x-[3px] hover:-translate-y-[3px]"
        }
        active:shadow-none
        active:translate-x-0
        active:translate-y-0
      `}
      onClick={onClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
    >
      {
        direction === "left" ? 
        <TbArrowBigLeftFilled /> : <TbArrowBigRightFilled />
      }
    </motion.div>
  )
}