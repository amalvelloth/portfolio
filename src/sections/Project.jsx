import React, { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Box from "@mui/material/Box";
import LineWrapper from "../components/LineWrapper";
import nikeAdidas from "../assets/images/nikeAdidas.png"
import midnightMagic from "../assets/images/midnightMagic.png"
import zenitsu from "../assets/images/zenitsu.png"

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


    const cursor = document.querySelector(".cursor");
    const hand = document.querySelector(".hand");
    const details = document.querySelector(".details");

    gsap.set(cursor, { xPercent: -50, yPercent: -50 });

    let mouseX;
    let mouseY;

    window.addEventListener('mousemove', e => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      gsap.to(cursor, 0.5, { x: mouseX, y: mouseY })
    })

    details.addEventListener('mouseenter', () => {
      gsap.to(hand, 1, {
        scale: 1,
        opacity: 1,
        top: '15px',
        left: '40px',
        rotate: 0,
        ease: Elastic.easeOut.config(1, 0.3)
      })
    })

    details.addEventListener('mousemove', () => {
      gsap.to(hand, 1, {
        x: mouseX,
        y: mouseY
      })
    })


    details.addEventListener('mouseleave', () => {
      gsap.to(hand, 0.2, {
        scale: 0,
        opacity: 0,
        top: '10px',
        left: '40px',
        rotate: 0,
      })
    })



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



          <div className="cursor"></div>
          <div className="hand">
            <h2 className="text-2xl text-white">Live Demo</h2>
          </div>




          <Box className="details" sx={{ fontSize: "3rem", fontWeight: 900, mb: 3, color: "white" }}>
            <img className="w-3/4" src={nikeAdidas} alt="" />
          </Box>

          <Box className="details" sx={{ fontSize: "3rem", fontWeight: 900, mb: 3, color: "white" }}>
            <img className="w-3/4" src={midnightMagic} alt="" />
          </Box>
          <Box className="details" sx={{ fontSize: "3rem", fontWeight: 900, color: "white" }}>
            <img className="w-3/4" src={zenitsu} alt="" />
          </Box>
        </Box>

      </Box>
    </React.Fragment>
  );
}

export default Project;
