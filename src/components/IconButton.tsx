import Link from "next/link";

type IconButtonProps = {
  children: React.ReactNode;
  href: string;
  className?: string;
}

export default function IconButton({ children, href, className }: IconButtonProps) {
  return (
    <Link href={href} className={`rounded-lg p-2 bg-th-neutral-50 shadow-th-sm hover:shadow-th-sm-hover hover:-translate-x-[4px] hover:-translate-y-[4px] transition-all duration-300 ${className}`}>
      {children}
    </Link>
  )
}