"use client"; // Mark as Client Component

type ButtonProps = {
  children: React.ReactNode;
  href?: string;
  className?: string;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  disabled?: boolean;
  target?: string;
}

export default function Button({ children, href, className, onMouseEnter, onMouseLeave, disabled, target = "_self" }: ButtonProps) {

  const baseClasses = "button shadow-th-pink-50 transition-all duration-300";
  const enabledClasses = "hover:shadow-th-button hover:-translate-x-[4px] hover:-translate-y-[4px] cursor-pointer";
  const disabledClasses = "opacity-50 cursor-not-allowed shadow-none";

  const buttonClasses = `
    ${baseClasses}
    ${disabled ? disabledClasses : enabledClasses}
    ${className ?? ''}
  `;

  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement | HTMLDivElement>) => {
    if (disabled) {
      e.preventDefault();
    }
  };

  const WrapperElement = (!disabled && href) ? 'a' : 'div';

  return (
    <button
      className={buttonClasses}
      onMouseEnter={!disabled ? onMouseEnter : undefined}
      onMouseLeave={!disabled ? onMouseLeave : undefined}
      disabled={disabled}
    >
      <WrapperElement
        href={!disabled ? href : undefined}
        target={target}
        onClick={handleAnchorClick}
        className="flex flex-row gap-2 items-center"
      >
        {children}
      </WrapperElement>

    </button>
  )
}