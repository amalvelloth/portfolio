import React from 'react'

function Hero() {
    return (
        <section className='hero-section'>
            <div className="frame-left hidden lg:block"></div>
            <div className="frame-right hidden lg:block"></div>

            <div className="frame-top">
                <span className='top-line-1 hidden lg:block'></span>
                <span className='top-line-2 hidden lg:block'></span>
            </div>
            <div className='container'>
            <h1 className='text-center left-0 right-0 font-deutschlander text-4xl'>AMAL V</h1>
            </div>
            <div className="fancy-menu">
                <span className="menu-icon">≡</span>
                <span className="menu-text">MENU</span>
                <span className="line-1"></span>
                <span className="line-2"></span>
            </div>

            <div class="fade-effect absolute bottom-0 left-0 right-0"></div>
        </section>
    )
}

export default Hero