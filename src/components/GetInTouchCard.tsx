"use client"

import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiReaddotcv } from "react-icons/si";
import Card from "./Card";
import SlothCSS from "./SlothCSS";
import { FaEnvelope } from "react-icons/fa";
import IconButton from "./IconButton";
import { useState } from "react";


export default function GetInTouchCard() {

  const [isButtonHovered, setIsButtonHovered] = useState(false);

  const handleMouseEnter = () => setIsButtonHovered(true);
  const handleMouseLeave = () => setIsButtonHovered(false);

  return (
    <Card className="w-2xl p-8 shadow-th-pink-500 relative">
      <SlothCSS className="absolute -top-36 right-14 -z-1" isButtonHovered={isButtonHovered}/>

      <div className="absolute -rotate-8 -top-5 -left-5 px-4 py-3 bg-th-yellow-500 rounded-lg shadow-md shadow-th-neutral-950/50">
        <h3 className="text-th-neutral-50">Get in touch!</h3>
      </div>

      <div className="w-full h-64 flex flex-row justify-evenlyitems-center">

        <div className="w-1/3 flex flex-col gap-8 justify-center items-center">
          <button className="button" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <SiReaddotcv />
            View CV
          </button>
          <button className="button" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <FaEnvelope />
            Email Me
          </button>
        </div>

        <div className="w-2/3 flex flex-row gap-10 flex-wrap justify-center items-center">

          <IconButton href="https://github.com/Cxndr" className="shadow-th-pink-500" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <FaGithub size={64} color="#282829"/>
          </IconButton>

          <IconButton href="https://twitter.com/Cxndr_" className="shadow-th-yellow-500" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <FaTwitter size={64} color="#26a7de" />
          </IconButton>

          <IconButton href="https://www.linkedin.com/in/mattvandersluys/" className="shadow-th-blue-500" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <FaLinkedinIn size={64} color="#0072b1"/>
          </IconButton>

        </div>
        
      </div>

    </Card>
  )
}