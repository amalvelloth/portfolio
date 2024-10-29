import React, { useRef, useEffect } from 'react';
import SplitType from 'split-type';
import gsap from 'gsap';
import LineWrapper from '../components/LineWrapper';

gsap.registerPlugin(ScrollTrigger); // Ensure this is registered once at the top

function About() {
  const textRef1 = useRef(null);
  const textRef2 = useRef(null);

  useEffect(() => {
    const split1 = new SplitType(textRef1.current, {
      types: 'lines',
      tagName: 'span',
    });
    const split2 = new SplitType(textRef2.current, {
      types: 'lines',
      tagName: 'span',
    });

    const allLines = [...split1.lines, ...split2.lines];

    gsap.from(allLines, {
      y: 50,
      opacity: 0,
      stagger: 0.1,
      duration: 1.3, 
      ease: 'power1.out', 
      scrollTrigger: {
        trigger: textRef1.current,
        start: 'top 100%',    
        toggleActions: 'restart none reverse none',
        immediateRender: true,
      },
    });

    return () => {
      split1.revert();
      split2.revert();
    };
  }, []);

  return (
    <>
      <LineWrapper />
      <section id="about" className="h-full py-14 bg-black text-white flex items-center">
        <div className="container mx-auto flex max-md:flex-col md:justify-center">
          <div className="m-2">
            <p ref={textRef1} className="overflow-hidden">
              I'm dedicated to crafting interactive web experiences with the MERN stack, blending 
            </p>
            <p ref={textRef2} className="overflow-hidden">
              creativity and functionality to bring innovative ideas to life.
            </p>
          </div>   
          <div className="m-2">
            <img
              className="h-auto max-w-full w-[40rem]"
              src="https://static1.moviewebimages.com/wordpress/wp-content/uploads/2022/04/ana-de-armas-blade-runner-2049.jpeg"
              alt=""
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
