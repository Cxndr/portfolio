"use client"

import { unstable_ViewTransition as ViewTransition } from "react";
import { useNavigationState } from '@/lib/navigationState';
import { useEffect } from "react";

export default function ViewTransitionWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const direction = useNavigationState((state: { direction: 'up' | 'down' | 'left' | 'right' | null }) => state.direction);
  const setDirection = useNavigationState((state) => state.setDirection);
  
  // Effect to reset direction after animation duration
  useEffect(() => {
    let timeoutId: NodeJS.Timeout | null = null;
    // Only set timeout if direction is not null
    if (direction) {
      console.log(`ViewTransitionWrapper: Direction changed to ${direction}, setting reset timer.`);
      timeoutId = setTimeout(() => {
        console.log("ViewTransitionWrapper: Resetting direction to null.");
        setDirection(null);
      }, 900); // Match your animation duration
    }

    // Cleanup function to clear timeout if component unmounts or direction changes again
    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [direction, setDirection]); // Rerun effect if direction or setDirection changes

  // Determine the transition name based on the navigation direction
  const getTransitionName = () => {
    if (direction === 'down') {
      console.log('ViewTransitionWrapper: Applying slide-down');
      return 'slide-down';
    } else if (direction === 'up') {
      console.log('ViewTransitionWrapper: Applying slide-up');
      return 'slide-up';
    } else if (direction === 'left') {
      console.log('ViewTransitionWrapper: Applying slide-left');
      return 'slide-left';
    } else if (direction === 'right') {
      console.log('ViewTransitionWrapper: Applying slide-right');
      return 'slide-right';
    }

    // Default transition if direction is null (e.g., initial load or after reset)
    // console.log('ViewTransitionWrapper: Direction is null, applying default (slide-down)');
    return 'slide-down'; // Keep a default, maybe change if initial load needs something else
  };

  return (
    <ViewTransition name={getTransitionName()}>
      <div className="relative z-0 h-full"> 
        {children}
      </div>
    </ViewTransition>
  );
} 