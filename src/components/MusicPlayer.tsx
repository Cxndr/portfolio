"use client"

import { useEffect, useState } from "react";
import SlothCSS from "./SlothCSS";

declare global {
  interface Window {
    SC: {
      Widget: (iframe: HTMLIFrameElement) => {
        bind: (event: string, callback: () => void) => void;
        isPaused: (callback: (isPaused: boolean) => void) => void;
      };
    };
  }
}

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    // Load SoundCloud Widget API
    const script = document.createElement('script');
    script.src = 'https://w.soundcloud.com/player/api.js';
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      // Get all SoundCloud iframes
      const iframes = document.querySelectorAll('iframe[src*="soundcloud.com"]');
      
      iframes.forEach(iframe => {
        const widget = window.SC.Widget(iframe as HTMLIFrameElement);
        
        // Bind to play event
        widget.bind('play', () => setIsPlaying(true));

        // Bind to pause event
        widget.bind('pause', () => setIsPlaying(false));

        // Bind to finish event
        widget.bind('finish', () => setIsPlaying(false));

        // Check initial state
        widget.isPaused((isPaused) => setIsPlaying(!isPaused));
      });
    };

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    // Mobile: absolute, centered top, scaled up slightly, visible
    // Desktop: relative, original position/size/scale/z-index
    <div className="absolute top-4 left-1/2 -translate-x-1/2 scale-75 z-10 \
                    md:relative md:left-auto md:top-0 md:right-9 md:-translate-x-0 \
                    md:flex md:items-center md:justify-center md:h-full md:w-0 md:-z-10 md:scale-50">
      <SlothCSS className="absolute rotate-42" musicPlaying={isPlaying}/>
    </div>
  );
} 