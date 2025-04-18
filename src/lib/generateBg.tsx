import { RiBracesFill } from "react-icons/ri";
import { IoIosLaptop } from "react-icons/io";
import { FaDatabase } from "react-icons/fa6";
import { FaWifi } from "react-icons/fa6";
import { FaLink } from "react-icons/fa6";
import { FaCode } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaCss3Alt } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa6";
import { FaPython } from "react-icons/fa6";
import { SiCplusplus } from "react-icons/si";
import { IoIosCloudDone } from "react-icons/io";
import { FaAppStoreIos } from "react-icons/fa";
import { IoLogoAndroid } from "react-icons/io";
import { FaApple } from "react-icons/fa";
import { MdOutlineQrCode2 } from "react-icons/md";
import { TfiWorld } from "react-icons/tfi";
import { FaReact } from "react-icons/fa6";
import { FaLinux } from "react-icons/fa6";


import { RiNextjsFill } from "react-icons/ri";
import { FaNodeJs } from "react-icons/fa";
import { FaPhp } from "react-icons/fa";
import { FaJava } from "react-icons/fa";

import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { IconBaseProps } from 'react-icons';

// Define a more specific type for react-icons elements
type TypedIconElement = React.ReactElement<IconBaseProps>;

// Export icons as JSX elements with the specific type
export const iconsListDev: TypedIconElement[] = [
  <RiBracesFill size={24} key="braces"  />,
  <IoIosLaptop size={24} key="laptop" />,
  <FaDatabase size={24} key="database" />,
  <FaWifi size={24} key="wifi" />,
  <FaLink size={24} key="link" />,
  <FaCode size={24} key="square-code" />,
  <IoLogoJavascript size={24} key="js" />,
  <FaGithub size={24} key="github" />,
  <FaCss3Alt size={24} key="css" />,
  <FaHtml5 size={24} key="html" />,
  <FaPython size={24} key="python" />,
  <SiCplusplus size={24} key="cplusplus" />,
  <IoIosCloudDone size={24} key="cloud-done" />,
  <FaAppStoreIos size={24} key="app-store-ios" />,
  <IoLogoAndroid size={24} key="android" />,
  <FaApple size={24} key="apple" />,
  <FaLinux size={24} key="linux" />,
  <MdOutlineQrCode2 size={24} key="qr-code" />,
  <TfiWorld size={24} key="world" />,
  <FaReact size={24} key="react" />,
  <RiNextjsFill size={24} key="nextjs" />,
  <FaNodeJs size={24} key="nodejs" />,
  <FaPhp size={24} key="php" />,
  <FaJava size={24} key="java" />,
];

// Function to get random words (icons)
export function getXRandomWords(words: TypedIconElement[], amount: number): TypedIconElement[] {
  // Fisher-Yates shuffle
  for (let i = words.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [words[i], words[j]] = [words[j], words[i]];
  }
  // Slice and return
  return words.slice(0, amount);
}

// Function to generate the background SVG
export function generateBg(icons: TypedIconElement[]) { // Use the specific type here too
  const svgWidth = 2000;
  const svgHeight = 2000;
  const gridSize = 70;
  const iconSize = 24;
  const fillColor = "rgb(180,180,180)";

  let svgContent = `
    <svg width="${svgWidth}" height="${svgHeight}" xmlns="http://www.w3.org/2000/svg">
  `;

  const iconsPerRow = Math.floor(svgWidth / gridSize);
  for (let row = 0; row < Math.floor(svgHeight / gridSize); row++) {
    // Ensure the input to getXRandomWords is also correctly typed if spreading
    const rowIcons = getXRandomWords([...icons], 20);
    const offset = row % rowIcons.length;

    for (let col = 0; col < iconsPerRow; col++) {
      const iconIndex = (col + offset) % rowIcons.length;
      const icon = rowIcons[iconIndex]; // icon is now TypedIconElement
      const x = col * gridSize + gridSize / 2;
      const y = row * gridSize + gridSize / 2;
      const rotation = Math.floor(Math.random() * 101) - 50;

      svgContent += `<g transform="translate(${x - iconSize/2}, ${y - iconSize/2}) rotate(${rotation}, ${iconSize/2}, ${iconSize/2})">`;
      svgContent += ReactDOMServer.renderToString(
        // Now cloneElement should accept 'color' because 'icon' is TypedIconElement
        React.cloneElement(icon, { 
          color: fillColor, 
          style: { display: 'inline-block' }
        })
      );
      svgContent += '</g>';
    }
  }

  svgContent += `</svg>`;

  // Ensure proper encoding of special characters
  svgContent = svgContent.replace(/#/g, '%23');

  return { svgContent, svgHeight, svgWidth };
}
