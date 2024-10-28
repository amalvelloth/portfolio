import React, { useRef, useEffect } from 'react';
import SplitType from 'split-type';
import gsap from 'gsap';

function About() {
  const textRef = useRef(null);

  useEffect(() => {
    // Initialize SplitType and split by lines
    const split = new SplitType(textRef.current, {
      types: 'lines', // Split the text into lines
      tagName: 'span', // Wrap each line in a <span>
    });

    // Animate the lines using GSAP
    gsap.from(split.lines, {
      y: 50, // Move from below
      opacity: 0, // Start invisible
      stagger: 0.1, // Stagger the animation
      duration: 1, // Animation duration
      ease: 'power1.out', // Easing function
    });

    // Clean up function to revert the split
    return () => {
      split.revert(); // Restore original text
    };
  }, []);

  return (
    <section id="about" className="h-full py-14 bg-black text-white flex items-center">
      <div className="container mx-auto flex max-md:flex-col md:justify-center">
        <div className="m-2">
          <p ref={textRef} className='overflow-hidden'>
          I'm dedicated to crafting interactive web experiences with the MERN stack, blending creativity and functionality to bring innovative ideas to life.
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
  );
}

export default About;
