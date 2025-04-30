import { motion } from "framer-motion";
import { TbArrowBigLeftFilled, TbArrowBigRightFilled } from "react-icons/tb";

type NavButtonProps = {
  onClick: (e: React.MouseEvent) => void;
  direction: "left" | "right";
  size?: "small" | "large";
  onDark?: boolean;
  disabled?: boolean;
};

export default function NavButton({ onClick, direction, size = "large", onDark = false, disabled = false }: NavButtonProps) {

  return (
    <motion.div
      className={
        disabled ?
        `
          cursor-not-allowed select-none
          text-th-neutral-600/50
          rounded-full
          ${size === "small" ? "p-2.5" : "p-4"}
          bg-th-neutral-700/50
          ${size === "small" ? "text-3xl" : "text-5xl"}
        `
        :
        `
          ${size === "small" ? "text-3xl" : "text-5xl"} text-th-neutral-50
          bg-th-pink-500 hover:bg-th-pink-500
          active:bg-th-pink-600
          rounded-full
          ${size === "small" ? "p-2.5" : "p-4"}
          transition-all duration-300
          z-10
          pointer-events-auto cursor-pointer
          ${onDark ? "shadow-th-neutral-950" : "shadow-th-neutral-900"}
          ${direction === "left" ?
            (size === "small"
              ? "hover:shadow-md hover:-translate-y-[1px]"
              : "hover:shadow-th-button-sm hover:-translate-x-[3px] hover:-translate-y-[3px]"
            ) : // direction === "right"
            (size === "small"
              ? "hover:shadow-md hover:-translate-y-[1px]"
              : "hover:shadow-th-button-sm-left hover:translate-x-[3px] hover:-translate-y-[3px]"
            )
          }
          active:shadow-none
          active:translate-x-0
          active:translate-y-0
        `
      }
      onClick={onClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      style={{ opacity: disabled ? 0.5 : 1, pointerEvents: disabled ? 'none' : 'auto' }}
    >
      {
        direction === "left" ?
        <TbArrowBigLeftFilled /> : <TbArrowBigRightFilled />
      }
    </motion.div>
  )
}