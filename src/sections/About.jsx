import React, { useRef, useEffect } from 'react';
import SplitType from 'split-type';
import gsap from 'gsap';
import LineWrapper from '../components/LineWrapper';
import sparkle from '../assets/sparkle.svg'

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
      duration: 1,
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
      <section id="about" className="h-full py-14 md:px-8 bg-black text-white flex items-center">
        <div className="container mx-auto flex max-lg:flex-col md:justify-center">
          <div className="m-2">
            <p ref={textRef1} className="overflow-hidden font-pptelegraf">
              I'm dedicated to crafting interactive web experiences with the MERN stack, blending
            </p>
            <p ref={textRef2} className="overflow-hidden font-pptelegraf">
              creativity and functionality to bring innovative ideas to life.
            </p>
            <div className="flex justify-end pt-32">
              <h2 className='text-5xl'><img src={sparkle} alt="sparkle" className="inline w-9 h-9 max-md:w-6 max-md:h-6" /></h2>
              <h2 className='text-5xl'><img src={sparkle} alt="sparkle" className="inline w-9 h-9 max-md:w-6 max-md:h-6" /></h2>
            </div>
            <div className="flex justify-between">
              <h2 className='text-xl'>I DO</h2>
              <h2 className='text-5xl text-[#CECECE] font-rmneue'>IMME<span className='font-gridular'>R</span>SIVE</h2>
            </div>
            <h2 className='text-5xl text-end font-rmneue'>WEBSITES</h2>

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
