import React from 'react'
import BurgerMenu from '../components/BurgerMenu'


function Hero() {
    return (
        <section id='home' className="flex flex-col items-center justify-center h-screen w-full bg-black text-white relative">
            <div className="fixed lg:block hidden left-4 top-[1.4rem] h-screen w-[1px] bg-[#474747]"></div>
            <div className="fixed lg:block hidden right-4 top-[1.4rem] bottom-[2rem] h-[100%] w-[1px] bg-[#474747]"></div>
            <h1 className='text-center font-deutschlander text-9xl'>AMAL V</h1>
            <h3>Full stack Developer - Web Designer - React Developer</h3>
            <div className="fancy-menu block lg:hidden">
                <BurgerMenu />
                <span className="menu-text">MENU</span>
                <span className="line-1"></span>
                <span className="line-2"></span>
            </div>
            <div className="lg:block hidden fixed bottom-[1.4rem] w-full h-[1px] z-50 bg-[#474747]"></div>


            <div class="fade-effect absolute bottom-0 left-0 right-0"></div>
        </section>
    )
}

export default Hero