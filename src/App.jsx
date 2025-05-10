import React, { useEffect, useRef, useState } from "react";
import "./index.css";
import Canvas from "./Canvas.jsx";
import data from "./data.js";
import LocomotiveScroll from 'locomotive-scroll';
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export const App = () => {

const [showCanvas, setShowCanvas] = useState(null);
const headRef = useRef(null);
const growing = useRef(null);

  useEffect(() => {
    const locomotiveScroll = new LocomotiveScroll();
    headRef.current.addEventListener("click", (e) => {
      setShowCanvas(true);
        gsap.set(growing.current, {
          top : e.clientY,
          left : e.clientX,
        })
        gsap.to(growing.current, {
          scale : 1000,
          duration : 1,
          ease : "power2.inOut",
        });
      });
  }, [showCanvas]);
  


  
  return (
    <>
    <span ref={growing} className="fixed rounded-full bg-[#fd2c2a] w-5 h-5 z-[1] -translate-x-[200%]"></span>
    <div ref={headRef} className="min-h-screen w-full relative bg-black text-white">
      { showCanvas && data[0].map((canvasdets, index) => <Canvas details={canvasdets} />)}
      <div className="w-full relative z-[1] h-screen">
        <nav className="w-full p-8 flex justify-between z-50">
          <div className="brand text-2xl font-md">thirtysixstudios</div>
          <div className="links flex gap-10">
            {[
              "What we do",
              "Who we are",
              "How we give back",
              "Talk to us",
            ].map((link, index) => (
              <a
                key={index}
                href={`#${link.toLowerCase()}`}
                className="text-md hover:text-gray-300"
              >
                {link}
              </a>
            ))}
          </div>
        </nav>
        <div className="text-container w-full px-[25%]">
            <div className="w-[50%] font-[anzo3]">
                  <h3 className="text-3xl  text-white"> At Thirtysixstudio, we build immersive digital assets and immersive experiences for brands with a purpose.</h3>
                  <p className="text-md w-[90%] mt-[5%] font-light">
                    We are a boutique production studio focused on design,
                    motion, and creative technology.
                  </p>
                  <p className="text-md w-[80%] mt-[5%] font-light">Scroll </p>
            </div>
        </div>
        <div className="w-full">
            <h1 className="text-white text-[12rem] pl-[5%] tracking-tight bottom-0 absolute font-[anzo3]">ThirtySixstudios</h1>
        </div>
      </div>
    </div>
    {/* <div className="h-screen relative w-full bg-black">
    { showCanvas && data[1].map((canvasdets, index) => <Canvas details={canvasdets} />)}
    </div> */}
    </>
  );
}

export default App;