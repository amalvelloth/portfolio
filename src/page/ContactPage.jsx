import React from 'react'
import Header from '../components/Header'
import { GoArrowRight } from "react-icons/go";

function ContactPage() {
  return (
    <>
      <Header />
      <section className='flex justify-center items-center h-screen w-full text-center bg-black text-white relative'>
        <div className='absolute gap-10 flex items-center top-[7rem] left-[3rem]'>
          <h1 className='text-9xl '>Connect</h1>
          <GoArrowRight className='text-9xl' />
          <h1 className='text-9xl '>Connect</h1>
          <GoArrowRight className='text-9xl' />
          <h1 className='text-9xl '>Connect</h1>
          <GoArrowRight className='text-9xl' />
        </div>
      </section>
    </>
  )
}

export default ContactPage