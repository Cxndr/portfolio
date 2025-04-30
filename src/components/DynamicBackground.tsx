"use client";

import { useEffect, useState, useMemo } from "react";
import { iconsListDev, iconsListMarketing, iconsListMusic, iconsListContact, generateBg, iconsListAll } from "@/lib/generateBg";

type DynamicBackgroundProps = {
  children: React.ReactNode;
  subtle?: boolean;
  type?: "dev" | "marketing" | "music" | "contact" | "all";
};

export default function DynamicBackground({ children, subtle = false, type = "all" }: DynamicBackgroundProps) {

  const [bgSvgDataUri, setBgSvgDataUri] = useState("");

  const fadedBgStyle = "linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)),"

  const iconsList = useMemo(() => {
    if (type === "dev") return iconsListDev;
    if (type === "marketing") return iconsListMarketing;
    if (type === "music") return iconsListMusic;
    if (type === "contact") return iconsListContact;
    return iconsListAll;
  }, [type]);

  useEffect(() => {
    const bgSvg = generateBg(iconsList);
    const encodedSvg = encodeURIComponent(bgSvg.svgContent);
    const dataUri = `data:image/svg+xml,${encodedSvg}`;
    setBgSvgDataUri(dataUri);
  }, [iconsList]);

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
