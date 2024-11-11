import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function ContactButton() {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(true);

  const handleNavigation = () => {
    navigate('/contactpage');
  };

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const windowHeight = window.innerHeight;

    // Toggle visibility based on a scroll threshold (e.g., 60% of viewport height)
    if (scrollPosition > windowHeight * 0.55) {
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
    <button
      style={{ opacity: isVisible ? 1 : 0, transition: 'opacity 0.2s ease-out' }}
      className="z-0 pulse-shadow hover:cursor m-4 fixed rounded-full right-4 bottom-4 w-24 h-24 md:w-32 md:h-32 flex items-center justify-center text-white bg-black border border-white"
      onClick={handleNavigation}
    >
      <h2 className="text-sm">CONTACT</h2>
    </button>
  );
}

export default ContactButton;
