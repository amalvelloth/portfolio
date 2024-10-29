import React, { useState } from 'react';
import ContactButton from './ContactButton';

function BurgerMenu() {
    const [isActive, setIsActive] = useState(false);

    const handleToggle = () => {
        setIsActive(!isActive);
    };

    return (


        <>
        <ContactButton/>
            <div className="fancy-menu block lg:hidden mt-4">
                <div className="burger-menu-container flex items-center">
                    <button
                        className={`burger ${isActive ? 'active' : ''} z-50`}
                        onClick={handleToggle}
                        aria-label="Toggle menu">
                    </button>
                    {/* Uncomment if ContactButton should be visible */}
                    {/* <ContactButton /> */}
                </div>
                <span className="menu-text">MENU</span>
                <span className="line-1"></span>
                <span className="line-2"></span>
            </div>
        </>
    );
}

export default BurgerMenu;
