import React, { useEffect } from 'react';
import { GoArrowRight } from "react-icons/go";
import { gsap } from "gsap";
import { useNavigate } from 'react-router-dom';

function LetsTalk() {
   const navigate = useNavigate(); 

    useEffect(() => {
        // Animation for the title
        gsap.fromTo(
            ".LetsTalk",
            { opacity: 0 },
            { opacity: 1, ease: "power2.inOut", duration: 0.8, delay: 0.4 }
        );
    }, []);

    const handleNavigation = () => {
        navigate('/contactpage');
    }

    return (
        <div 
            className="LetsTalk fixed hidden md:block rounded border-2 border-[#474747] border-dashed bg-transparent text-white cursor-pointer hover:border-solid hover:bg-white hover:text-black transition duration-300 ease-in-out m-10 right-0 top-0 px-20 py-1 z-50" 
           onClick={handleNavigation}
            // Add the onClick handler
        >
            {" "}
            <h2 className='flex items-center'>LETS TALK <GoArrowRight className='ms-3' /></h2>
        </div>
    );
}

export default LetsTalk;
