import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function ContactButton() {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(true);

  const handleNavigation = () => {
    navigate('/contactpage');
  };

  const handleScroll = () => {
    // Check if the scroll position is more than 50% of the viewport height
    if (window.scrollY > window.innerHeight * 0.6) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    isVisible && (
      <button
        className="z-0 pulse-shadow hover:cursor m-4 fixed rounded-full right-4 bottom-4 w-24 h-24 md:w-32 md:h-32 flex items-center justify-center text-white bg-black border border-white"
        onClick={handleNavigation}
      >
        <h2 className='text-sm'>CONTACT</h2>
      </button>
    )
  );
}

export default ContactButton;
