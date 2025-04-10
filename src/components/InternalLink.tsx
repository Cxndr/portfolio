"use client"

import { useNavigationState } from "@/lib/navigationState";
import { getNavigationDirection, siteMap } from "@/lib/navigationUtils";
import { usePathname } from "next/navigation";
import { findSiteMapKey } from "@/lib/navigationUtils";
import { useRouter } from "next/navigation";

export default function InternalLink({ href, children }: { href: string, children: React.ReactNode }) {

  const router = useRouter();
  const pathname = usePathname();
  const setDirection = useNavigationState((state) => state.setDirection);

  const handleClick = (/* e: React.MouseEvent<HTMLDivElement> */) => {
    const targetHref = href;
    const currentPathKey = findSiteMapKey(pathname, siteMap);
    const targetPathKey = findSiteMapKey(targetHref, siteMap);

    if (!currentPathKey || !targetPathKey) {
      router.push(targetHref);
      return;
    }
    if (currentPathKey === targetPathKey && pathname === targetHref) {
      return;
    }
    
    const direction = getNavigationDirection(currentPathKey, targetPathKey);

    setDirection(direction);

    router.push(targetHref);
  }

  return (
    <a onClick={handleClick}>
      {children}
    </a>
  )
}