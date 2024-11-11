import React, { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import LineWrapper from "../components/LineWrapper";
import nikeAdidas from "../assets/images/nikeAdidas.png";
import midnightMagic from "../assets/images/midnightMagic.png";
import zenitsu from "../assets/images/zenitsu.png";
import urcristiano from "../assets/images/RonaldoSite.png";
import space from '../assets/spacetravel.mp4';

gsap.registerPlugin(ScrollTrigger);

function Project() {
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(".photo:not(:first-child)", { opacity: 0, scale: 0.5 });

      const animation = gsap.to(".photo:not(:first-child)", {
        opacity: 1,
        scale: 1,
        duration: 1,
        stagger: 0.5,
      });

      ScrollTrigger.matchMedia({
        "(min-width: 768px)": function () {
          ScrollTrigger.create({
            trigger: ".gallery",
            start: "top top",
            end: "bottom bottom",
            pin: ".leftblock",
            animation: animation,
            scrub: true,
          });
        },
      });
    });

    const hand = document.querySelector(".hand");
    const detailsElements = document.querySelectorAll(".details");

    detailsElements.forEach((details) => {
      details.addEventListener("mouseenter", () => {
        gsap.to(hand, 1, {
          scale: 1,
          opacity: 1,
          top: "15px",
          left: "20px",
          rotate: 0,
          ease: Elastic.easeOut.config(1, 0.3),
        });
      });

      details.addEventListener("mousemove", (e) => {
        gsap.to(hand, 1, {
          x: e.clientX,
          y: e.clientY,
        });
      });

      details.addEventListener("mouseleave", () => {
        gsap.to(hand, 0.2, {
          scale: 0,
          opacity: 0,
          top: "10px",
          left: "40px",
          rotate: 0,
        });
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <React.Fragment>
      <LineWrapper />
      <div className="relative overflow-hidden min-h-screen">
        {/* Background video */}
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          src={space}
          autoPlay
          loop
          muted
          playsInline
        />
        
        {/* Overlay content */}
        <div className="gallery flex max-md:flex-col min-h-screen relative z-10 bg-black bg-opacity-50">
          {/* Left image block */}
          <div className="leftblock w-[30%] h-[100vh] max-md:h-full max-md:w-full max-md:items-start flex flex-col items-center justify-center text-white bg-black bg-opacity-70">
            <div className="title p-2">
              <h1 className="text-3xl font-bold">Projects</h1>
              <h1 className="text-2xl font-thin">These are my Projects</h1>
            </div>
          </div>

          {/* Right text block */}
          <div className="rightblock w-2/3 max-md:w-full flex flex-col justify-center ml-auto">
            <div className="hand flex justify-center p-1">
              <h2 className="text-sm flex font-thin font-gridular items-center text-black">
                Live site &#8599;
              </h2>
            </div>
            <a href="https://nike-adidas.netlify.app/" target="_blank" rel="noopener noreferrer">
              <div className="details h-screen max-md:h-full max-md:py-10 text-white text-3xl font-bold max-md:mb-3">
                <div className="box w-3/4 max-md:w-full max-md:px-2">
                  <img className="w-full" draggable="false" src={nikeAdidas} alt="Nike Adidas Project" />
                  <h2 className="text-2xl font-rmneue mt-3 font-thin">Nike x Adidas</h2>
                  <p className="text-sm font-thin font-pptelegraf text-[#FFFFFF75]">An elegant Nike x Adidas eCommerce concept site showcasing modern sportswear collections with a sleek, user-friendly design</p>
                </div>
              </div>
            </a>
            <a href="https://midnightmagic.netlify.app/" target="_blank" rel="noopener noreferrer">
              <div className="details h-screen max-md:h-full max-md:py-10 text-white text-3xl font-bold max-md:mb-3">
                <div className="box w-3/4 max-md:w-full max-md:px-2">
                  <img className="w-full" draggable="false" src={midnightMagic} alt="Midnight Magic Project" />
                  <h2 className="text-2xl font-rmneue mt-3 font-thin">Event Management</h2>
                  <p className="text-sm font-thin font-pptelegraf text-[#FFFFFF75]">Freelance landing page project designed to captivate users with a sleek, mysterious aesthetic and engaging experience</p>
                </div>
              </div>
            </a>
            <a href="https://zenitsu-parallax.netlify.app/" target="_blank" rel="noopener noreferrer">
              <div className="details h-screen max-md:h-full max-md:py-10 text-white text-3xl font-bold max-md:mb-3">
                <div className="box w-3/4 max-md:w-full max-md:px-2">
                  <img className="w-full" draggable="false" src={zenitsu} alt="Zenitsu Parallax Project" />
                  <h2 className="text-2xl font-rmneue mt-3 font-thin">Parallax</h2>
                  <p className="text-sm font-thin font-pptelegraf text-[#FFFFFF75]">This project leverages JavaScript-driven animations and parallax scrolling to create an interactive, anime-inspired experience around Zenitsu Agatsuma.</p>
                </div>
              </div>
            </a>
            <a href="https://ronaldo7site.netlify.app/" target="_blank" rel="noopener noreferrer">
              <div className="details h-screen max-md:h-full max-md:py-10 text-white text-3xl font-bold">
                <div className="box w-3/4 max-md:w-full max-md:px-2">
                  <img className="w-full" draggable="false" src={urcristiano} alt="Ronaldo Project" />
                  <h2 className="text-2xl font-rmneue mt-3 font-thin">GSAP</h2>
                  <p className="text-sm font-thin font-pptelegraf text-[#FFFFFF75]">Used GSAP JavaScript library to create smooth animations and interactive effects, enhancing the visual appeal and user engagement with dynamic motion elements</p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Project;
