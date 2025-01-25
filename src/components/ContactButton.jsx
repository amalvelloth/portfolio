import React, { useEffect, useState } from 'react';
import { useNavigate,useLocation } from 'react-router-dom';

function ContactButton() {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(true);
  const location = useLocation();

  const handleNavigation = () => {
    // navigate('/contactpage');
    if (location.pathname === '/contactpage') {
      navigate('/');
    } else {
      navigate("/contactpage");
    }
  };

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const windowHeight = window.innerHeight;
    const isMobile = window.innerWidth <= 768;
    const scrollThreshold = isMobile ? 0.80 : 0.60;
    if (scrollPosition > windowHeight * scrollThreshold) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }
  }


  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <button
      style={{ opacity: isVisible ? 1 : 0, transition: 'opacity 0.2s ease-out' }}
      className="z-50  pulse-shadow hover:cursor m-4 fixed rounded-full right-4 bottom-4 w-24 h-24 md:w-32 md:h-32 flex items-center justify-center text-white bg-black border-[0.5px] border-[#9D9C9A]"
      onClick={handleNavigation} 
    >
      <h2 className="text-sm">{location.pathname === '/contactpage' ? 'HOME' : 'CONTACT'}</h2>
    </button>
  );
}

export default ContactButton;
