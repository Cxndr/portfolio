"use client"

import { FaCircleChevronRight, FaCircleChevronLeft } from "react-icons/fa6";

type ProjectNavButtonProps = {
  direction: "previous" | "next";
  onClick: () => void;
  disabled: boolean;
};

export default function ProjectNavButton({ direction, onClick, disabled }: ProjectNavButtonProps) {
  const iconClassName = "text-th-pink-500 text-7xl transition-all duration-200 hover:text-th-pink-600 hover:scale-105 cursor-pointer";
  const disabledIconClassName = "text-th-neutral-500/50 text-7xl cursor-not-allowed";

  const Icon = direction === "previous" ? FaCircleChevronLeft : FaCircleChevronRight;

  return (
    <Icon
      className={disabled ? disabledIconClassName : iconClassName}
      onClick={!disabled ? onClick : undefined}
    />
  );
}