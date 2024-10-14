import React from 'react';

function Header() {
  return (
    <nav className='navbar'>
      <div
        className="fixed z-0 top-0 w-full h-[14vh] bg-gradient-to-b from-black/80 via-black/30 to-transparent"
        style={{
          background:
            'linear-gradient(to bottom, rgba(0, 0, 0, 0.84), rgba(0, 0, 0, 0.295), rgba(0, 0, 0, 0), rgba(0, 0, 0, 0))',
        }}
      ></div>
      <div className="nav-container hidden lg:block">
        <div className="nav-line-1"></div>
        <span className="nav-line-2"></span>
        <ul>
          <li className='z-10'>
            <a href="#home">Home</a>
          </li>
          <li className='z-10'>
            <a href="#about">About</a>
          </li>
          <li className='z-10'>
            <a href="#project">Projects</a>
          </li>
          <li className='z-10'>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
