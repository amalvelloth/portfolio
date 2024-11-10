import React, { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import LineWrapper from "../components/LineWrapper";
import nikeAdidas from "../assets/images/nikeAdidas.png";
import midnightMagic from "../assets/images/midnightMagic.png";
import zenitsu from "../assets/images/zenitsu.png";
import urcristiano from "../assets/images/RonaldoSite.png"

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
        // Apply the pin effect for screens `md` and above
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
      <div className="gallery flex max-md:flex-col min-h-screen bg-black">
        {/* Left image block */}
        <div className="leftblock w-[30%] h-[100vh] max-md:h-full max-md:w-full max-md:items-start flex flex-col items-center justify-center text-white bg-black">
          <div className="title p-2">
            <h1 className="text-3xl font-bold">Projects</h1>
            <h1 className="text-2xl font-thin">These are my Projects</h1>
          </div>
        </div>

        {/* Right text block */}
        <div className="rightblock w-2/3 max-md:w-full flex flex-col justify-center ml-auto">
          <div className="hand flex justify-center border border-gray-400 p-2">
            <h2 className="text-sm flex items-center text-black">
              Live site &#8599;
            </h2>
          </div>
          <a href="https://nike-adidas.netlify.app/" target="_blank" rel="noopener noreferrer">
            <div className="details h-screen max-md:h-full max-md:py-10 text-white text-3xl font-bold mb-3">
              <div className="box w-3/4 max-md:w-full max-md:px-2">
                <img className="w-full" draggable="false" src={nikeAdidas} alt="Nike Adidas Project" />
                <p className="text-sm font-thin">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia tenetur praesentium eveniet distinctio dolores tempora odio animi est dolor voluptate ex</p>
              </div>
            </div>
          </a>
          <a href="https://midnightmagic.netlify.app/" target="_blank" rel="noopener noreferrer">
            <div className="details h-screen max-md:h-full max-md:py-10 text-white text-3xl font-bold mb-3">
              <div className="box w-3/4 max-md:w-full max-md:px-2">
                <img className="w-full" draggable="false" src={midnightMagic} alt="Midnight Magic Project" />
                <p className="text-sm font-thin">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia tenetur praesentium eveniet distinctio dolores tempora odio animi est dolor voluptate ex</p>
              </div>
            </div>
          </a>
          <a href="https://zenitsu-parallax.netlify.app/" target="_blank" rel="noopener noreferrer">
            <div className="details h-screen max-md:h-full max-md:py-10 text-white text-3xl font-bold">
              <div className="box w-3/4 max-md:w-full max-md:px-2">
                <img className="w-full" draggable="false" src={zenitsu} alt="Zenitsu Parallax Project" />
                <p className="text-sm font-thin">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia tenetur praesentium eveniet distinctio dolores tempora odio animi est dolor voluptate ex</p>
              </div>
            </div>
          </a>
          <a href="https://ronaldo7site.netlify.app/" target="_blank" rel="noopener noreferrer">
            <div className="details h-screen max-md:h-full max-md:py-10 text-white text-3xl font-bold">
              <div className="box w-3/4 max-md:w-full max-md:px-2">
                <img className="w-full" draggable="false" src={urcristiano} alt="Zenitsu Parallax Project" />
                <p className="text-sm font-thin">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia tenetur praesentium eveniet distinctio dolores tempora odio animi est dolor voluptate ex</p>
              </div>
            </div>
          </a>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Project;
