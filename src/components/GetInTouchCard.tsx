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
import Button from "./Button";
import CardLabel from "./CardLabel";


export default function GetInTouchCard() {

  const [isButtonHovered, setIsButtonHovered] = useState(false);

  const handleMouseEnter = () => setIsButtonHovered(true);
  const handleMouseLeave = () => setIsButtonHovered(false);

  return (
    <Card className="w-10/12 md:h-auto md:w-2xl p-8 shadow-th-md md:shadow-th shadow-th-pink-500 relative">
      <SlothCSS className="absolute -top-32 -right-4 md:-top-36 md:right-14 -z-1 scale-50 md:scale-100" isButtonHovered={isButtonHovered}/>

      <CardLabel label="Get in touch!" color="yellow" />

      <div className="w-full h-full md:h-64 mt-6 md:mt-0 flex flex-col gap-8 md:gap-0 md:flex-row justify-evenly items-center">

        <div className="w-full md:w-1/3 flex flex-col gap-6 md:gap-8 justify-center items-center">
          <Button 
            href="#"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <SiReaddotcv />
            View CV
          </Button>
          <Button
            href="mailto:livewellandmakethings@gmail.com"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <FaEnvelope />
            Email Me
          </Button>
        </div>

        <div className="grow md:w-2/3 flex flex-row gap-8 gap-y-4 mb-5 md:mb-0 md:gap-10 flex-wrap justify-center items-start">

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