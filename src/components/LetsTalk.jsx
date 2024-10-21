import React from 'react'
import { GoArrowRight } from "react-icons/go";
import { gsap } from "gsap";
import { useEffect } from 'react';

function LetsTalk() {
    useEffect(() => {
        // Animation for the title
        gsap.fromTo(
            ".LetsTalk",
            { opacity: 0 },
            { opacity: 1, ease: "power2.inout", duration: 1, delay: 0.2 }
        );
    }, []);

    return (
        <div className="LetsTalk fixed hidden md:block rounded border border-dashed bg-transparent text-white cursor-pointer hover:border-solid hover:bg-white hover:text-black transition duration-300 ease-in-out m-10 right-0 top-0 px-20 py-1 z-50">
            <h2 className='flex items-center'>LETS TALK <GoArrowRight className='ms-3'/></h2>
        </div>
    )
}

export default LetsTalk