import Link from "next/link";

type IconButtonProps = {
  children: React.ReactNode;
  href: string;
  className?: string;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

export default function IconButton({ children, href, className, onMouseEnter, onMouseLeave }: IconButtonProps) {
  return (
    <Link 
      href={href} 
      className={`rounded-lg p-2 bg-th-neutral-50 shadow-th-sm hover:shadow-th-sm-hover hover:-translate-x-[4px] hover:-translate-y-[4px] transition-all duration-300 ${className}`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {children}
    </Link>
  )
}