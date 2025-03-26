"use client"

import { unstable_ViewTransition as ViewTransition } from "react";
import { useNavigationState } from '@/lib/navigationState';

export default function ViewTransitionWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const direction = useNavigationState((state: { direction: 'up' | 'down' | null }) => state.direction);
  
  // Determine the transition name based on the navigation direction
  const getTransitionName = () => {
    if (direction === 'down') {
      return 'slide-down';
    } else if (direction === 'up') {
      return 'slide-up';
    }
    
    // Default transition for initial load
    return 'slide-down';
  };

  return (
    <ViewTransition name={getTransitionName()}>
      {children}
    </ViewTransition>
  );
} 