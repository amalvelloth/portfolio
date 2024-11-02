import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import SplitType from 'split-type';
import BurgerMenu from '../components/BurgerMenu';
import blackSpace from '../assets/black_space.mp4';

function Hero() {
    const titleRef = useRef(null);

    useEffect(() => {
        // Split the text into characters
        const splitText = new SplitType(titleRef.current, { types: 'chars' });

        // Animate each character
        gsap.from(splitText.chars, {
            opacity: 0,
            y: 50,
            stagger: 0.05,
            duration: 0.6,
            ease: "power3.out",
        });

        // Cleanup function to revert split after animation (optional)
        return () => {
            splitText.revert();
        };
    }, []);

    return (
        <section id='home' className="flex z-10 flex-col items-center md:py-10 min-h-screen w-full bg-black text-white relative overflow-hidden">
            <div className="fixed lg:block hidden left-[1.4rem] top-[1.4rem] h-screen w-[1px] bg-[#474747]"></div>
            <div className="fixed lg:block hidden right-[1.4rem] top-[1.4rem] bottom-[2rem] h-[100%] w-[1px] bg-[#474747]"></div>
            <div className='flex flex-col justify-center items-center h-full w-full p-4 max-md:px-1'>

                {/* Animated Split Title */}
                <h1 ref={titleRef} className='overflow-hidden font-D text-center max-md:mt-2 leading-none text-[calc(9rem+2vw)]'>
                    AMAL V
                </h1>

                <div className='font-mono flex justify-between text-center text-lg max-md:text-[13px] md:text-xl gap-6 text-[#CECECE]'>
                    <p>F<span>U</span>LL <span>S</span>TACK</p>
                    <p>C<span>R</span>EATIVE</p>
                    <p><span>R</span>EAC<span>T</span> <span>D</span>EVEL<span>O</span>PER</p>
                </div>


                {/* Video block */}
                <div className='px-7 flex justify-center'>
                    <video
                        className='md:w-1/2 w-4/7 max-md:mt-16 md:mt-10 rounded-lg md:rounded-xl border-4 border-[#474747] shrink-0'
                        playsInline
                        loop
                        autoPlay
                        muted
                    >
                        <source src={blackSpace} type='video/mp4' />
                        Your browser does not support the video tag.
                    </video>
                </div>

                <div className="absolute text-3xl font-mono hidden md:block left-0 bottom-0 p-10">
                    <h2 className='font-mono'>CREATIVE</h2>
                    <h2 className='font-mono'>FULL STACK</h2>
                    <h2 className='font-mono'>REACT DEVELOPER</h2>
                </div>
                <div className="absolute text-xl text-[#474747] hidden md:block left-0 bottom-0 p-10">
                    <h2>since 2024</h2>
                </div>
            </div>

            <BurgerMenu />

            {/* Bottom horizontal line */}
            <div className="lg:block hidden fixed bottom-[1.4rem] w-full h-[1px] z-50 bg-[#474747]"></div>

            {/* Fade effect at the bottom */}
            <div className="fade-effect absolute bottom-0 left-0 right-0"></div>
        </section>
    );
}

export default Hero;
