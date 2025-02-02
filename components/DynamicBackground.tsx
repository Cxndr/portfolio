"use client";

import { useEffect, useState } from "react";
import { iconsListDev, generateBg } from "@/lib/generateBg";

export default function DynamicBackground({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const [bgSvgDataUri, setBgSvgDataUri] = useState("");



  useEffect(() => {
    const bgSvg = generateBg(iconsListDev);
    // Properly encode the SVG content
    const encodedSvg = encodeURIComponent(bgSvg.svgContent);
    const dataUri = `data:image/svg+xml,${encodedSvg}`;
    setBgSvgDataUri(dataUri);
  }, []);

  return (
    <div
      className="h-full w-full flex-grow flex flex-col items-center"
      style={{
        backgroundImage: bgSvgDataUri ? `url("${bgSvgDataUri}")` : 'none',
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
