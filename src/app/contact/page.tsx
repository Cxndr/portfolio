import DynamicBackground from "@/components/DynamicBackground";
import { FaArrowUp, FaEnvelope, FaGithub, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import Card from "@/components/Card";
import { SiReaddotcv } from "react-icons/si";
import IconButton from "@/components/IconButton";
import SlothCSS from "@/components/SlothCSS";

export default function ContactPage() {
  return (
    <DynamicBackground>
      <div className="h-full w-full flex flex-col items-center justify-center overflow-hidden">
        <div className="h-full w-desktop">

          <div className="h-full w-full flex flex-col gap-16 justify-start items-center">
            <FaArrowUp className="text-th-pink-500 text-4xl mt-20" />
            <Card className="w-2xl p-8 shadow-th-pink-500 relative">
              <SlothCSS className="absolute -top-36 right-14 -z-1"/>

              <div className="absolute -rotate-8 -top-5 -left-5 px-4 py-3 bg-th-yellow-500 rounded-lg shadow-md shadow-th-neutral-950/50">
                <h3 className="text-th-neutral-50">Get in touch!</h3>
              </div>

              <div className="w-full h-64 flex flex-row justify-evenlyitems-center">

                <div className="w-1/3 flex flex-col gap-8 justify-center items-center">
                  <button className="button">
                    <SiReaddotcv />
                    View CV
                  </button>
                  <button className="button">
                    <FaEnvelope />
                    Email Me
                  </button>
                </div>

                <div className="w-2/3 flex flex-row gap-10 flex-wrap justify-center items-center">

                  <IconButton href="https://github.com/Cxndr" className="shadow-th-pink-500">
                    <FaGithub size={64} color="#282829"/>
                  </IconButton>

                  <IconButton href="https://twitter.com/Cxndr_" className="shadow-th-yellow-500">
                    <FaTwitter size={64} color="#26a7de" />
                  </IconButton>

                  <IconButton href="https://www.linkedin.com/in/mattvandersluys/" className="shadow-th-blue-500">
                    <FaLinkedinIn size={64} color="#0072b1"/>
                  </IconButton>

                </div>
                
              </div>

            </Card>
          </div>

        </div>
      </div>
    </DynamicBackground>
  )
}