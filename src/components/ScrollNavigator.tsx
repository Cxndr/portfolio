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
  const [isScrolling, setIsScrolling] = useState(false); // Only isScrolling
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const setDirection = useNavigationState((state: { setDirection: (direction: 'up' | 'down' | null) => void }) => state.setDirection);

  const currentPageIndex = PAGES.findIndex(page => page.path === pathname);

  const navigateToPage = (index: number, direction: 'up' | 'down') => {
    if (index >= 0 && index < PAGES.length) {
      if (isScrolling) return;
      setIsScrolling(true);
      setDirection(direction);
      
      const navigate = () => {
        router.push(PAGES[index].path);
      };

      if (document.startViewTransition) {
        document.startViewTransition(navigate);
      } else {
        navigate();
      }
      
      setTimeout(() => {
        setIsScrolling(false);
        setDirection(null);
      }, 900);
    }
  };

  const handleWheel = (e: WheelEvent) => {
    if (isScrolling) return;

    if (e.deltaY > 0 && currentPageIndex < PAGES.length - 1) {
      navigateToPage(currentPageIndex + 1, 'down');
    } else if (e.deltaY < 0 && currentPageIndex > 0) {
      navigateToPage(currentPageIndex - 1, 'up');
    }
  };

  const handleTouchStart = (e: TouchEvent) => {
    setTouchStart(e.touches[0].clientY);
  };

  const handleTouchEnd = (e: TouchEvent) => {
    if (!touchStart || isScrolling) return;

    const touchEnd = e.changedTouches[0].clientY;
    const diff = touchStart - touchEnd;

    if (Math.abs(diff) > 50) { 
      if (diff > 0 && currentPageIndex < PAGES.length - 1) {
        navigateToPage(currentPageIndex + 1, 'down');
      } else if (diff < 0 && currentPageIndex > 0) {
        navigateToPage(currentPageIndex - 1, 'up');
      }
    }
    setTouchStart(null); 
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (isScrolling) return;

    if (e.key === 'ArrowDown' && currentPageIndex < PAGES.length - 1) {
      navigateToPage(currentPageIndex + 1, 'down');
    } else if (e.key === 'ArrowUp' && currentPageIndex > 0) {
      navigateToPage(currentPageIndex - 1, 'up');
    }
  };

  useEffect(() => {
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
  }, [currentPageIndex, isScrolling, touchStart]);

  return null;
} 