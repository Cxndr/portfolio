"use client";

import { useEffect, useState } from "react";
import { iconsListDev, generateBg } from "@/lib/generateBg";

export default function DynamicBackground({
  children,
  subtle = false,
}: Readonly<{ children: React.ReactNode, subtle?:boolean }>) {
  const [bgSvgDataUri, setBgSvgDataUri] = useState("");

  const fadedBgStyle = "linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)),"

  useEffect(() => {
    const bgSvg = generateBg(iconsListDev);
    // Properly encode the SVG content
    const encodedSvg = encodeURIComponent(bgSvg.svgContent);
    const dataUri = `data:image/svg+xml,${encodedSvg}`;
    setBgSvgDataUri(dataUri);
  }, []);

  return (
    <div
      className="h-full w-full relative z-0"
      style={{
        backgroundImage: bgSvgDataUri ? `${subtle ? fadedBgStyle : ''} url("${bgSvgDataUri}")` : 'none',
        backgroundRepeat: "repeat",
        backgroundSize: bgSvgDataUri
          ? `${generateBg(iconsListDev).svgWidth}px ${generateBg(iconsListDev).svgHeight}px`
          : "initial",
      }}
    >
      {children}
    </div>
  );
}
