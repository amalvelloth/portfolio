import React from 'react';
import Header from '../components/Header';
import { GoArrowRight } from "react-icons/go";
import BurgerMenu from '../components/BurgerMenu';

function ContactPage() {
  return (
    <>
      <Header />
      <section className='flex flex-col justify-center items-center min-h-screen w-full text-center bg-black text-white relative overflow-hidden'>
        <div className='gap-10 flex items-center top-[7rem] left-[3rem]'>
          <h1 className='text-9xl leading-loose'>Connect</h1>
          <GoArrowRight className='text-9xl' />
          <h1 className='text-9xl leading-loose'>Connect</h1>
          <GoArrowRight className='text-9xl' />
          <h1 className='text-9xl leading-loose'>Connect</h1>
          <GoArrowRight className='text-9xl' />
        </div>

        <div className="flex flex-col items-center bg-[#f7f7f7] rounded w-full max-w-screen-md my-1 mx-[auto]">
          <div className="content p-10 text-left w-full border-b border-dashed border-gray-500">
            <p className="text-black w-64 font-medium">
              Engage the neural link and let your signal reach us across the void.
            </p>
          </div>

          {/* Input fields with dashed underline */}
          <div className="flex flex-col w-full p-10 py-[3rem] space-y-8">
            <div className="relative flex flex-col">
              <input
                type="text"
                className="w-full bg-transparent border-b border-dashed border-gray-500 pt-3 pb-1 te text-blackxt-lg focus:outline-none"
                placeholder="First Name"
              />
            </div>
            <div className="relative flex flex-col">
              <input
                type="text"
                className="w-full bg-transparent border-b border-dashed border-gray-500 pt-3 pb-1 te text-blackxt-lg focus:outline-none"
                placeholder="Last Name"
              />
            </div>
            <div className="relative flex flex-col">
              <input
                type="text"
                className="w-full bg-transparent border-b border-dashed border-gray-500 pt-3 pb-1 te text-blackxt-lg focus:outline-none"
                placeholder="Phone"
              />
            </div>
            <div className="relative flex flex-col">
              <input
                type="text"
                className="w-full bg-transparent border-b border-dashed border-gray-500 pt-3 pb-1 te text-blackxt-lg focus:outline-none"
                placeholder="Email"
              />
            </div>
            <div className="relative flex flex-col">
              <input
                type="text"
                className="w-full bg-transparent border-b border-dashed border-gray-500 pt-3 pb-1 te text-blackxt-lg focus:outline-none"
                placeholder="Message"
              />
            </div>
          </div>

          {/* Submit Button */}
          <div className="mt-8">
            <button className="border-2 border-black py px-6 text-lg uppercase tracking-wide text-black hover:bg-black hover:text-white transition">
              Transmit
            </button>
          </div>
        </div>


        <div className="fancy-menu block lg:hidden mt-4">
          <BurgerMenu />
          <span className="menu-text">MENU</span>
          <span className="line-1"></span>
          <span className="line-2"></span>
        </div>
        <div className="fade-effect absolute bottom-0 left-0 right-0"></div>
      </section>
    </>
  );
}

export default ContactPage;
