

type ButtonProps = {
  children: React.ReactNode;
  href: string;
  className?: string;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

export default function Button({children, href, className, onMouseEnter, onMouseLeave}: ButtonProps) {


  return (
    <button
      className={`button shadow-th-pink-50 hover:shadow-th-button hover:-translate-x-[4px] hover:-translate-y-[4px] transition-all duration-300 ${className}`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <a href={href} className="flex flex-row gap-2">
        {children}
      </a>
    
    </button>
  )
}