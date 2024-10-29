import React from 'react';
import { useNavigate } from 'react-router-dom';

function ContactButton() {
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate('/contactpage');
  }


  return (
    <button className="z-0 hover:cursor m-4 fixed rounded-full right-4 bottom-4 w-24 h-24 flex items-center justify-center text-white bg-black border border-white"
    onClick={handleNavigation}>
      <h2 className='text-sm'>CONTACT</h2>
    </button>
  );
}

export default ContactButton;
