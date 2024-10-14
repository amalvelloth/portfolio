import React, { useState } from 'react'


function BurgerMenu() {
    const [isActive, setIsActive] = useState(false)

    const handleToggle = () => {
        setIsActive(!isActive)
    }

    return (
        <button
            className={`burger ${isActive ? 'active' : ''}`}
            onClick={handleToggle}
            aria-label="Toggle menu">
        </button>
    )
}

export default BurgerMenu