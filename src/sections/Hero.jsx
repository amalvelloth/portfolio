import React from 'react';
import BurgerMenu from '../components/BurgerMenu';
import blackSpace from '../assets/black_space.mp4';
import LetsTalk from '../components/LetsTalk';

function Hero() {
    return (
        <section id='home' className="flex z-10 flex-col items-center md:py-10 min-h-screen w-full bg-black text-white relative overflow-hidden">
            
            {/* Left vertical line */}
            <div className="fixed lg:block hidden left-[1.4rem] top-[1.4rem] h-screen w-[1px] bg-[#474747]"></div>

            {/* Right vertical line */}
            <div className="fixed lg:block hidden right-[1.4rem] top-[1.4rem] bottom-[2rem] h-[100%] w-[1px] bg-[#474747]"></div>

            {/* Inner div filling the height of the section */}
            <div className='flex flex-col justify-center items-center h-full w-full p-4 max-md:px-1'>
                <h1 className='text-center leading-none font-deutschlander text-[9rem]'>
                    AMAL V
                </h1>
                <h3 className='font-smallest-pixel text-center text-lg md:text-xl'>
                    Full stack Developer - Creative - React Developer
                </h3>

                {/* Video block */}
                <div className='px-7 flex justify-center'>
                    <video
                        className='md:w-1/2 w-4/7 max-md:mt-16 md:mt-10 rounded-lg border-4 border-[#474747] shrink-0'
                        playsInline
                        loop
                        autoPlay
                        muted
                    >
                        <source src={blackSpace} type='video/mp4' />
                        Your browser does not support the video tag.
                    </video>
                </div>
                <div className="absolute text-3xl font-thin font-smallest-pixel hidden md:block left-0 bottom-0 p-10">
                    <h2>CREATIVE</h2>
                    <h2>FULL STACK</h2>
                    <h2>REACT DEVELOPER</h2>
                </div>
                <div className="absolute text-xl text-[#474747] hidden md:block right-0 bottom-0 p-10">
                    <h2>since 2024</h2>
                </div>
            </div>

            {/* Hamburger menu for mobile */}
            <div className="fancy-menu block lg:hidden mt-4">
                <BurgerMenu />
                <span className="menu-text">MENU</span>
                <span className="line-1"></span>
                <span className="line-2"></span>
            </div>

            {/* Bottom horizontal line */}
            <div className="lg:block hidden fixed bottom-[1.4rem] w-full h-[1px] z-50 bg-[#474747]"></div>

            {/* Fade effect at the bottom */}
            <div className="fade-effect absolute bottom-0 left-0 right-0"></div>


        </section >
    );
}

export default Hero;
