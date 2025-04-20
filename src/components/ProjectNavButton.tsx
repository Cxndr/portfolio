"use client"

import { FaCircleChevronRight, FaCircleChevronLeft } from "react-icons/fa6";

type ProjectNavButtonProps = {
  direction: "previous" | "next";
  onClick: () => void;
  disabled: boolean;
};

export default function ProjectNavButton({ direction, onClick, disabled }: ProjectNavButtonProps) {
  const iconClassName = "text-th-pink-500 text-5xl transition-all duration-200 hover:text-th-pink-600 hover:scale-105 cursor-pointer select-none";
  const disabledIconClassName = "text-th-neutral-500/50 text-5xl cursor-not-allowed select-none";

  const Icon = direction === "previous" ? FaCircleChevronLeft : FaCircleChevronRight;

  return (
    <Icon
      className={disabled ? disabledIconClassName : iconClassName}
      onClick={!disabled ? onClick : undefined}
    />
  );
}