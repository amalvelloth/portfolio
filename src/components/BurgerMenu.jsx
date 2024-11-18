import React, { useState, useEffect, useRef } from 'react';
import ContactButton from './ContactButton';
import { gsap } from 'gsap';

function BurgerMenu() {
    const [isActive, setIsActive] = useState(false);
    const overlayRef = useRef(null);
    const menuRef = useRef(null);

    const handleToggle = () => {
        setIsActive(!isActive);
    };

    //to hide scroll bar
    useEffect(() => {
        document.body.style.overflow = isActive ? 'hidden' : 'auto';
    }, [isActive]);


    useEffect(() => {
        if (isActive) {
            // Animate overlay quickly first
            gsap.to(overlayRef.current, {
                duration: 0.3, // Faster duration for overlay
                scaleY: 1,
                transformOrigin: "top",
                ease: "power2.out",
                onComplete: () => {
                    // Start menu items animation after overlay fully opens
                    gsap.fromTo(
                        menuRef.current.querySelectorAll('.menu-item'),
                        { opacity: 0, y: 50 },
                        { opacity: 1, y: 0, stagger: 0.1, delay: 0.1, ease: "power2.out" }
                    );
                }
            });
        } else {
            // Hide overlay and menu items
            gsap.to(overlayRef.current, {
                duration: 0.3, // Faster duration for overlay closing
                scaleY: 0,
                transformOrigin: "bottom",
                ease: "power2.in"
            });
            gsap.to(menuRef.current.querySelectorAll('.menu-item'), {
                opacity: 0,
                y: 50,
                duration: 0.2
            });
        }
    }, [isActive]);

    return (
        <>
            <ContactButton />
            <div className="fancy-menu block lg:hidden mt-4">
                <div className="burger-menu-container flex items-center">
                    <button
                        className={`burger ${isActive ? 'active' : ''} z-50`}
                        onClick={handleToggle}
                        aria-label="Toggle menu">
                        <span className="burger-line"></span>
                        <span className="burger-line"></span>
                        <span className="burger-line"></span>
                    </button>
                </div>
                <span className="menu-text">MENU</span>
                <span className="line-1"></span>
                <span className="line-2"></span>
            </div>

            {/* Black Overlay */}
            <div
                ref={overlayRef}
                className="overlay  inset-0 z-40 scale-y-0 transition-transform duration-300"
                style={{ transformOrigin: 'top' }}
            >
            </div>

            {/* Mobile navbar menu */}
            <div ref={menuRef} className={`menu fixed w-screen h-screen flex items-center justify-center overflow-hidden z-50 pointer-events-none ${isActive ? 'open' : ''} z-50`}>
                <div className="primary-menu absolute left-0 m-4">
                    <div className="menu-container">
                        <div className="wrapper text-5xl">
                            <div className="menu-item space-y-4 font-rmneue">
                                <a href="#"><span className='font-Dimentions'>I</span> <span className='font-gridular'>H</span>O<span className='font-gridular'>M</span>E</a>
                                <div className="menu-item-revealer"></div>
                                <img src="https://cdn.prod.website-files.com/64354a08ff4dd15c2539372b/66c89bf137b40ad0731f77f3_Line%20191%20(Stroke)-1.png" alt="" />
                            </div>
                            <div className="menu-item mt-4 space-y-4 text-[#9D9C9A] hover:text-white font-rmneue">
                                <a href="#"><span className='font-Dimentions'>I I</span> <span className='font-gridular'>A</span>BOU<span className='font-gridular'>T</span></a>
                                <div className="menu-item-revealer"></div>
                                <img src="https://cdn.prod.website-files.com/64354a08ff4dd15c2539372b/66c89bf1a3eb973454347614_Line%20192%20(Stroke).png" alt="" />
                            </div>
                            <div className="menu-item mt-4 space-y-4 text-[#9D9C9A] hover:text-white font-rmneue">
                                <a href="#"><span className='font-Dimentions'>I I I</span> C<span className='font-gridular'>ON</span>TACT</a>
                                <div className="menu-item-revealer"></div>
                                <div className="h-[1px] w-full bg-[#474747]"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default BurgerMenu;
