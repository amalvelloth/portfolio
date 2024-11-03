import React, { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Box from "@mui/material/Box";
import LineWrapper from "../components/LineWrapper";
import nikeAdidas from "../assets/images/nikeAdidas.png";
import midnightMagic from "../assets/images/midnightMagic.png";
import zenitsu from "../assets/images/zenitsu.png";


gsap.registerPlugin(ScrollTrigger);

function Project() {
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Set initial state for photos (excluding the first one)
      gsap.set(".photo:not(:first-child)", { opacity: 0, scale: 0.5 });

      const animation = gsap.to(".photo:not(:first-child)", {
        opacity: 1,
        scale: 1,
        duration: 1,
        stagger: 0.5, // Adjusting stagger for smoother animation
      });

      ScrollTrigger.create({
        trigger: ".gallery",
        start: "top top",
        end: "bottom bottom",
        pin: ".leftblock",
        animation: animation,
        scrub: true,
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
      <Box className="gallery" sx={{ display: "flex", minHeight: "100vh", bgcolor: "black" }}>
        {/* Left image block */}
        <Box
          className="leftblock"
          sx={{
            width: "30%",
            height: "100vh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            color: "white",
            bgcolor: "black",
          }}
        >
          <div className="title p-3">
            <h1 className="text-3xl" style={{ fontWeight: "bold" }}>Projects</h1>
            <h1 className="text-2xl font-thin">These are my Projects</h1>
          </div>
        </Box>

        {/* Right text block */}
        <Box
          className="rightblock"
          sx={{
            width: "70%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            ml: "auto",
            color: "#000",
          }}
        >
          <div className="hand flex justify-center border-[0.5px]">
            <h2 className="text-sm flex items-center text-black justify-between">Live site &#8599;
            </h2>
          </div>
          <a href="https://nike-adidas.netlify.app/" target="_blank" rel="noopener noreferrer">
            <Box className="details" sx={{ fontSize: "3rem", fontWeight: 900, mb: 3, color: "white" }}>
              <img className="w-3/4" draggable="false" src={nikeAdidas} alt="" />
            </Box>
          </a>
          <a href="https://midnightmagic.netlify.app/" target="_blank" rel="noopener noreferrer">
            <Box className="details" sx={{ fontSize: "3rem", fontWeight: 900, mb: 3, color: "white" }}>
              <img className="w-3/4" draggable="false" src={midnightMagic} alt="" />
            </Box>
          </a>
          <a href="https://zenitsu-parallax.netlify.app/" target="_blank" rel="noopener noreferrer">
            <Box className="details" sx={{ fontSize: "3rem", fontWeight: 900, color: "white" }}>
              <img className="w-3/4" draggable="false" src={zenitsu} alt="" />
            </Box>
          </a>
        </Box>
      </Box>
    </React.Fragment>
  );
}

export default Project;
