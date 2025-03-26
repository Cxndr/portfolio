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
    <div className="relative right-9 flex items-center justify-center h-full w-0 -z-10 -top-0 scale-50">
      <SlothCSS className="absolute rotate-42" musicPlaying={isPlaying}/>
    </div>
  );
} 