"use client"

import Link from 'next/link';
import { usePathname } from 'next/navigation';

type NavDesktopLinkProps = {
  href: string;
  label: string;
  children: React.ReactNode;
}

export default function NavDesktopLink({ href, label, children }:NavDesktopLinkProps) {

  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link 
      href={href} 
      className={`
        w-[4.75rem] pt-3 pb-1 rounded-3xl
        flex flex-col items-center gap-2
        hover:bg-foreground/5 hover:text-th-blue-500
        transition-all duration-300
        ${isActive ? "text-th-pink-500" : "text-foreground/65"}
      `}
    >
      
      {children}
      
      <span 
        className={`
          text-xs font-medium pb-1.5 px-0
          ${isActive ? "border-b-2 border-th-pink-500/50" : "border-b-2 border-background/0"}
        `}>
        {label}
      </span>

    </Link>
  )
}