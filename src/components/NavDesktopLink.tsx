"use client"

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useNavigationState } from '@/lib/navigationState';
import { findSiteMapKey, getNavigationDirection, siteMap } from '@/lib/navigationUtils';
import React from 'react';

type NavDesktopLinkProps = {
  href: string;
  label: string;
  children: React.ReactNode;
}

export default function NavDesktopLink({ href, label, children }: NavDesktopLinkProps) {

  const pathname = usePathname();
  const router = useRouter();
  const setDirection = useNavigationState((state) => state.setDirection);
  const isActive = pathname === href;

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    const currentPathKey = findSiteMapKey(pathname, siteMap);
    const targetPathKey = findSiteMapKey(href, siteMap);

    if (currentPathKey === targetPathKey || !currentPathKey || !targetPathKey) {
      console.log("Navigation prevented: already on page or path key not found.");
      return;
    }

    const direction = getNavigationDirection(currentPathKey, targetPathKey);
    console.log(`NavDesktopLink Click: ${currentPathKey} -> ${targetPathKey}, Direction: ${direction}`);

    setDirection(direction);

    router.push(href);
  };

  return (
    <Link
      href={href}
      onClick={handleClick}
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