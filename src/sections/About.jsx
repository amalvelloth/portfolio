import React, { useRef, useEffect } from 'react';
import SplitType from 'split-type';
import gsap from 'gsap';
import LineWrapper from '../components/LineWrapper';
import sparkle from '../assets/sparkle.svg';
import space from '../assets/spacetravel.mp4';
import workingImg from '../assets/working.jpg'

gsap.registerPlugin(ScrollTrigger);

function About() {
  const textRef1 = useRef(null);
  const textRef2 = useRef(null);

  useEffect(() => {
    // Determine if the screen width is small
    const isSmallScreen = window.innerWidth < 768;

    // Set SplitType based on screen size
    const split1 = new SplitType(textRef1.current, {
      types: 'lines',
      tagName: 'span',
      // Increase the number of lines for smaller screens if needed
      lineClass: isSmallScreen ? 'small-line' : 'line',
    });
    const split2 = new SplitType(textRef2.current, {
      types: 'lines',
      tagName: 'span',
      lineClass: isSmallScreen ? 'small-line' : 'line',
    });

    const allLines = [...split1.lines, ...split2.lines];

    // GSAP animation settings
    gsap.from(allLines, {
      y: isSmallScreen ? 30 : 50, // Smaller offset for smaller screens
      opacity: 0,
      stagger: isSmallScreen ? 0.08 : 0.1, // Adjust stagger timing
      duration: 1,
      ease: 'power1.out',
      scrollTrigger: {
        trigger: textRef1.current,
        start: 'top 100%',
        toggleActions: 'restart none play none',
        immediateRender: true,
      },
    });

    // Cleanup function
    return () => {
      split1.revert();
      split2.revert();
    };
  }, []);

  return (
    <>
      <LineWrapper />
      <section id="about" className="relative h-full py-14 md:px-8 text-white flex items-center">
        
        {/* Background Video */}
        {/* <video 
          autoPlay 
          loop 
          muted 
          src={space} 
          className="absolute top-0 left-0 w-full h-full object-cover opacity-50" 
        />         */}
        {/* Overlay Content */}
        <div className="container relative mx-auto flex max-lg:flex-col md:justify-center z-10">
          <div className="m-2 overflow-hidden">
            <p ref={textRef1} className="overflow-hidden font-pptelegraf">
              I'm dedicated to crafting interactive web experiences with the MERN stack, blending
            </p>
            <p ref={textRef2} className="overflow-hidden font-pptelegraf">
              creativity and functionality to bring innovative ideas to life.
            </p>
            <div className="flex justify-end pt-16">
              <h2 className='py-2'><img src={sparkle} alt="sparkle" className="inline w-9 h-9 max-md:w-6 max-md:h-6" /></h2>
              <h2 className='py-2'><img src={sparkle} alt="sparkle" className="inline w-9 h-9 max-md:w-6 max-md:h-6" /></h2>
            </div>
            <div className="flex justify-between font-rmneue">
              <h2 className='text-xl'>I DO</h2>
              <h2 className='text-5xl text-[#CECECE]'>IMME<span className='font-gridular'>R</span>SIVE</h2>
            </div>
            <h2 className='text-5xl text-end font-rmneue'>WEBSITES</h2>
          </div>
          <div className="m-2">
            <img
              className="h-auto max-w-full w-[40rem]"
              src={workingImg}
              alt=""
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
