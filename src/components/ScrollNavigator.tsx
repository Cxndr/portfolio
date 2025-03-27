"use client"

import { useEffect, useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { useNavigationState } from '@/lib/navigationState';

const PAGES = [
  { path: '/', name: 'intro' },
  { path: '/dev', name: 'dev' },
  { path: '/marketing', name: 'marketing' },
  { path: '/music', name: 'music' },
  { path: '/contact', name: 'contact' },
];

export default function ScrollNavigator() {
  const router = useRouter();
  const pathname = usePathname();
  const [isScrolling, setIsScrolling] = useState(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const setDirection = useNavigationState((state: { setDirection: (direction: 'up' | 'down' | null) => void }) => state.setDirection);

  // Find current page index
  const currentPageIndex = PAGES.findIndex(page => page.path === pathname);

  const navigateToPage = (index: number, direction: 'up' | 'down') => {
    if (index >= 0 && index < PAGES.length) {
      setIsScrolling(true);
      setDirection(direction);
      
      // Use the startViewTransition API
      if (document.startViewTransition) {
        document.startViewTransition(() => {
          router.push(PAGES[index].path);
        });
      } else {
        router.push(PAGES[index].path);
      }
      
      // Reset scrolling state after navigation
      setTimeout(() => {
        setIsScrolling(false);
        setDirection(null);
      }, 1200);
    }
  };

  const handleWheel = (e: WheelEvent) => {
    if (isScrolling) return;

    if (e.deltaY > 0 && currentPageIndex < PAGES.length - 1) {
      // Scrolling down
      navigateToPage(currentPageIndex + 1, 'down');
    } else if (e.deltaY < 0 && currentPageIndex > 0) {
      // Scrolling up
      navigateToPage(currentPageIndex - 1, 'up');
    }
  };

  const handleTouchStart = (e: TouchEvent) => {
    setTouchStart(e.touches[0].clientY);
  };

  const handleTouchEnd = (e: TouchEvent) => {
    if (!touchStart) return;

    const touchEnd = e.changedTouches[0].clientY;
    const diff = touchStart - touchEnd;

    if (Math.abs(diff) > 50) { // Minimum swipe distance
      if (diff > 0 && currentPageIndex < PAGES.length - 1) {
        // Swipe up
        navigateToPage(currentPageIndex + 1, 'down');
      } else if (diff < 0 && currentPageIndex > 0) {
        // Swipe down
        navigateToPage(currentPageIndex - 1, 'up');
      }
    }
  };

  useEffect(() => {
    window.addEventListener('wheel', handleWheel, { passive: true });
    window.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('touchend', handleTouchEnd, { passive: true });

    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, [currentPageIndex, isScrolling, touchStart]);

  return null; // This component doesn't render anything
} 