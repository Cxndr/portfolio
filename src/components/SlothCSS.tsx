"use client"

import { useState, useEffect, useRef } from 'react';

export default function SlothCSS({ className, isButtonHovered = false, musicPlaying = false }: { className?: string, isButtonHovered?: boolean, musicPlaying?: boolean }) {
  const [pupilPositions, setPupilPositions] = useState({ left: { x: 0, y: 0 }, right: { x: 0, y: 0 } });
  const [mouseActive, setMouseActive] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const [rotation, setRotation] = useState(0);
  const animationRef = useRef<number | null>(null);

  // Override isButtonHovered when music is playing
  const effectiveButtonHovered = musicPlaying ? false : isButtonHovered;

  useEffect(() => {
    if (musicPlaying) {
      let startTime: number | null = null;
      const duration = 1090; // 110bpm = 545ms between beats

      const animate = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = timestamp - startTime;
        const normalizedProgress = (progress % duration) / duration;

        // Use sine wave for smooth back-and-forth motion
        const newRotation = Math.sin(normalizedProgress * Math.PI * 2) * 7;
        setRotation(newRotation);

        animationRef.current = requestAnimationFrame(animate);
      };

      animationRef.current = requestAnimationFrame(animate);
      return () => {
        if (animationRef.current) {
          cancelAnimationFrame(animationRef.current);
        }
      };
    } else {
      // Smoothly return to 0
      setRotation(0);
    }
  }, [musicPlaying]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current || musicPlaying) return;

      const container = containerRef.current;
      const rect = container.getBoundingClientRect();
      
      setMouseActive(true);

      // Calculate mouse position relative to container
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;

      // Calculate center points of eyes
      const leftEyeCenter = { x: rect.width * 0.35, y: rect.height * 0.35 };
      const rightEyeCenter = { x: rect.width * 0.65, y: rect.height * 0.35 };

      // Calculate pupil positions with larger range
      const maxOffset = 3.5; // Increased to allow more movement

      const calculatePupilOffset = (mouseX: number, mouseY: number, eyeCenter: { x: number, y: number }) => {
        const dx = mouseX - eyeCenter.x;
        const dy = mouseY - eyeCenter.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        // Normalize the movement
        const normalizedX = (dx / distance) * maxOffset;
        const normalizedY = (dy / distance) * maxOffset;
        
        return {
          x: Math.max(-maxOffset, Math.min(maxOffset, normalizedX)),
          y: Math.max(-maxOffset, Math.min(maxOffset, normalizedY))
        };
      };

      const leftPupil = calculatePupilOffset(mouseX, mouseY, leftEyeCenter);
      const rightPupil = calculatePupilOffset(mouseX, mouseY, rightEyeCenter);

      setPupilPositions({ left: leftPupil, right: rightPupil });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [musicPlaying]);

  return (
    <div 
      ref={containerRef} 
      className={className}
      style={{ 
        transform: `rotate(${rotation}deg)`,
        transition: 'transform 0.5s ease-out'
      }}
    >
      
      {/* head shape */}
      <div className="w-48 h-48 bg-[#D79E78] rounded-full z-10" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-[#FFEFE9] rounded-full z-20" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 translate-y-0 w-40 h-20 bg-[#D79E78] z-20 rounded-t-full" />
      <div className="absolute top-0 left-1/2 -translate-x-20 translate-y-10 w-24 h-24 bg-[#FFEFE9] z-20 rounded-full" />
      <div className="absolute top-0 right-1/2 translate-x-20 translate-y-10 w-24 h-24 bg-[#FFEFE9] z-20 rounded-full" />

      {/* hair tufts */}
      <div className="absolute -rotate-42 top-0 left-1/2 -translate-x-7 -translate-y-1 w-8 h-3 bg-[#D79E78] z-20 rounded-r-[100%]" />
      <div className="absolute -rotate-34 top-0 left-1/2 -translate-x-3 -translate-y-1.5 w-8 h-3 bg-[#D79E78] z-20 rounded-r-[100%]" />

      {/* eye patches */}
      <div className="absolute top-0 left-1/2 -translate-x-23 translate-y-14 w-20 h-14 bg-[#AC6C44] -rotate-16 z-20 rounded-r-full rounded-tl-full" />
      <div className="absolute top-0 right-1/2 translate-x-23 translate-y-14 w-20 h-14 bg-[#AC6C44] rotate-16 z-20 rounded-l-full rounded-tr-full" />

      {/* eyes */}
      {!musicPlaying ? (
        <>
          <div className="absolute top-0 left-1/2 -translate-x-14 translate-y-17 w-8 h-8 bg-[black] z-20 rounded-full" />
          <div className="absolute top-0 right-1/2 translate-x-14 translate-y-17 w-8 h-8 bg-[black] z-20 rounded-full" />

          {/* pupils */}
          <div 
            className="absolute top-0 left-1/2 -translate-x-10.5 translate-y-20 w-3.5 h-3.5 bg-[white] z-20 rounded-full transition-transform duration-[10ms]"
            style={mouseActive ? { transform: `translate(${pupilPositions.left.x-5}px, ${pupilPositions.left.y-3}px)` } : {}}
          />
          <div 
            className="absolute top-0 right-1/2 translate-x-10.5 translate-y-20 w-3.5 h-3.5 bg-[white] z-20 rounded-full transition-transform duration-[10ms]"
            style={mouseActive ? { transform: `translate(${pupilPositions.right.x+5}px, ${pupilPositions.right.y-3}px)` } : {}}
          />
        </>
      )
    :
    <>
      <div className="absolute top-0 left-1/2 -translate-x-14 translate-y-20 w-8 h-1 bg-[black] z-20 rounded-full" />
      <div className="absolute top-0 right-1/2 translate-x-14 translate-y-20 w-8 h-1 bg-[black] z-20 rounded-full" />
    </>
    
    }

      {/* nose */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1 w-7 h-5 bg-[#52271F] rounded-[100%] z-20" />
      <div className="absolute -rotate-12 top-1/2 left-1/2 -translate-x-2 -translate-y-0 w-2 h-1 bg-[white] rounded-[100%] z-20" />

      {/* mouth */}
      <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 translate-y-8 w-10 h-1 bg-[black] rounded-[45%] z-20 transition-all duration-200 ${effectiveButtonHovered && 'h-4 top-5/12 translate-y-11'}`} />

      {/* head mask */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 border-17 border-[#D79E78] rounded-full z-200" />
    </div>
  )
}