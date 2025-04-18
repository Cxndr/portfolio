"use client"

import { useEffect, useState, useCallback } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { useNavigationState } from '@/lib/navigationState';
import { findSiteMapKey, Page, siteMap } from '@/lib/navigationUtils';

// *** Removed Page, PageGraph, siteMap, findSiteMapKey, getNavigationDirection definitions (moved to utils) ***

export default function ScrollNavigator() {
  const router = useRouter();
  const pathname = usePathname();
  const [isNavigating, setIsNavigating] = useState(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const setDirection = useNavigationState((state: { setDirection: (direction: 'up' | 'down' | 'left' | 'right' | null) => void }) => state.setDirection);

  // Helper wrapped in useCallback
  const findVerticalPage = useCallback((currentPathKey: string, direction: 'up' | 'down'): Page | null => {
    const currentPage = siteMap[currentPathKey];
    if (!currentPage) return null;

    const targetY = currentPage.position.y + (direction === 'down' ? 1 : -1);

    // Find pages at the target Y level, preferring the same X coordinate
    const potentialPages = Object.values(siteMap).filter(page =>
      page.position.y === targetY && page.position.x === currentPage.position.x
    );

    if (potentialPages.length > 0) {
      return potentialPages[0]; // Assume only one page directly above/below at same X
    }

    // If no page at the same X, find any page at that Y level (optional fallback)
    // const anyPageAtLevel = Object.values(siteMap).find(page => page.position.y === targetY);
    // return anyPageAtLevel || null;

    return null; // No page found directly above/below
  }, []);

  // Navigation function wrapped in useCallback
  const navigateToPage = useCallback((targetPath: string, direction: 'up' | 'down' | 'left' | 'right' | null) => {
    const targetKey = findSiteMapKey(targetPath, siteMap);
    // Added check: Don't navigate if already on the target path
    if (!targetKey || isNavigating || findSiteMapKey(pathname, siteMap) === targetKey) return;

    const navigate = () => {
      router.push(targetPath);
    };

    setIsNavigating(true);
    setDirection(direction);

    // *** Removed document.startViewTransition call ***
    navigate();

    // Reset state after a delay, allowing ViewTransitionWrapper to handle the transition
    // ViewTransitionWrapper now handles the reset based on direction changes
    setTimeout(() => {
      setIsNavigating(false);
      // Direction is reset by ViewTransitionWrapper's effect
    }, 900); // Match the animation duration for isNavigating flag
  }, [isNavigating, pathname, router, setDirection]);

  // Effect to handle direction changes based on pathname updates (link clicks, etc.)
  /*
  useEffect(() => {
    const currentPathKey = findSiteMapKey(pathname, siteMap);
    const previousPathKey = previousPathnameRef.current ? findSiteMapKey(previousPathnameRef.current, siteMap) : null;

    // Only trigger direction change if navigation wasn't initiated by this component's scroll/touch/key handlers
    if (!isNavigating && previousPathKey && currentPathKey && previousPathKey !== currentPathKey) {
        const direction = getNavigationDirection(previousPathKey, currentPathKey);
        console.log(`Link Navigation Detected: ${previousPathKey} -> ${currentPathKey}, Direction: ${direction}`);
        if (direction) {
            // Set direction *before* navigation allows ViewTransitionWrapper to pick it up
            setDirection(direction);
            // We don't manually start transition here, ViewTransitionWrapper handles it.
            // Set isNavigating briefly to prevent scroll/touch during link-triggered animation
            setIsNavigating(true);
             setTimeout(() => {
                 setIsNavigating(false);
                 // Clear direction after animation completes - Handled by ViewTransitionWrapper
                 // setDirection(null);
             }, 900); // Match animation duration
        }
    }

    // Update previous pathname ref *after* comparison
    previousPathnameRef.current = pathname;
    // Clean up isNavigating if component unmounts or path changes unexpectedly mid-nav
    return () => {
      // Maybe not needed, depends on exact behavior desired if navigating away quickly
      // setIsNavigating(false);
    };

  }, [pathname, setDirection, isNavigating]); // Ensure isNavigating is a dependency
  */

  // Event handlers wrapped in useCallback
  const handleWheel = useCallback((e: WheelEvent) => {
    if (isNavigating) return;
    const currentPathKey = findSiteMapKey(pathname, siteMap);
    if (!currentPathKey) return;

    if (e.deltaY > 0) { // Scrolling Down
      const nextPage = findVerticalPage(currentPathKey, 'down');
      if (nextPage) {
        navigateToPage(nextPage.path, 'down');
      }
    } else if (e.deltaY < 0) { // Scrolling Up
      const prevPage = findVerticalPage(currentPathKey, 'up');
      if (prevPage) {
        navigateToPage(prevPage.path, 'up');
      }
    }
  }, [isNavigating, pathname, findVerticalPage, navigateToPage]);

  const handleTouchStart = useCallback((e: TouchEvent) => {
    // Prevent scroll trigger if multiple touches (e.g., pinch zoom)
    if (e.touches.length === 1) {
        setTouchStart(e.touches[0].clientY);
    } else {
        setTouchStart(null); // Invalidate touch start if more than one finger
    }
  }, []);

  const handleTouchEnd = useCallback((e: TouchEvent) => {
    if (!touchStart || isNavigating || e.touches.length > 0) {
        // If fingers are still on screen, or navigating, or no valid start, do nothing
        setTouchStart(null); // Reset touch start regardless
        return;
    }

    const touchEnd = e.changedTouches[0].clientY;
    const diff = touchStart - touchEnd;
    const currentPathKey = findSiteMapKey(pathname, siteMap);
    if (!currentPathKey) return;

    if (Math.abs(diff) > 50) { // Threshold for swipe
      if (diff > 0) { // Swiped Up (Navigate Down)
        const nextPage = findVerticalPage(currentPathKey, 'down');
        if (nextPage) {
          navigateToPage(nextPage.path, 'down');
        }
      } else { // Swiped Down (Navigate Up)
        const prevPage = findVerticalPage(currentPathKey, 'up');
        if (prevPage) {
          navigateToPage(prevPage.path, 'up');
        }
      }
    }
    setTouchStart(null); // Reset touch start after handling
  }, [touchStart, isNavigating, pathname, findVerticalPage, navigateToPage]);

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (isNavigating) return;
    const currentPathKey = findSiteMapKey(pathname, siteMap);
    if (!currentPathKey) return;

    if (e.key === 'ArrowDown') {
      const nextPage = findVerticalPage(currentPathKey, 'down');
      if (nextPage) {
        navigateToPage(nextPage.path, 'down');
      }
    } else if (e.key === 'ArrowUp') {
      const prevPage = findVerticalPage(currentPathKey, 'up');
      if (prevPage) {
        navigateToPage(prevPage.path, 'up');
      }
    }
    // Could add ArrowLeft/Right here if needed, finding horizontal neighbors
  }, [isNavigating, pathname, findVerticalPage, navigateToPage]);

  useEffect(() => {
    // Add passive: false if preventDefault() might be needed, otherwise true is fine
    window.addEventListener('wheel', handleWheel, { passive: true });
    window.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('touchend', handleTouchEnd, { passive: true });
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchend', handleTouchEnd);
      window.removeEventListener('keydown', handleKeyDown);
    };
    // Dependencies: Re-add listeners if handlers change, which depends on these states/values
  }, [handleKeyDown, handleTouchEnd, handleTouchStart, handleWheel]); // Dependencies are now the stable useCallback handlers

  return null; // This component doesn't render anything itself
} 