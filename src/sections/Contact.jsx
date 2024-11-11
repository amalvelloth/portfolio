import React from 'react'
import LineWrapper from '../components/LineWrapper'
// import LetsTalk from '../components/LetsTalk'

function Contact() {
  return (

    <>
      <LineWrapper />
      <section id='contact' className="h-full py-14 bg-black text-white flex flex-col items-center">
        <div className="container max-lg:flex-col mx-auto flex md:justify-center">
          <div className='m-2'>
            <h2 className="text-3xl font-bold">Got a prject?</h2>
            <h2 className='text-3xl font-thin'>Let's talk</h2>
          </div>
          <div className='m-2'>
            <img className='h-36 bg-cover max-w-full w-[40rem]' src="https://images.hdqwalls.com/download/blade-runner-2049-arts-s2-2560x1440.jpg" alt="" />
          </div>
        </div>
        <div className="line h-[1px] my-10 w-4/5 mb-0 bg-[#474747]"></div>
        
        <div className="container py-12 max-md:py-16">
          <div className="name w-3/4 m-auto flex justify-between items-center max-md:flex-col font-pptelegraf">
            <div className="flex text-5xl items-center justify-center max-md:mb-8 max-md:w-full mb-0">
              AMAL V
            </div>

            <div className="flex justify-between items-center max-lg:flex-col max-md:gap-10 md:gap-4 max-md:h-[80px] max-w-[400px] max-md:w-[full] max-md:justify-between">
              <div className='flex justify-between items-center w-[150px]'>
                <a href="" className="text-white hover:underline">Linkedin</a>
                <a href="" className="text-white hover:underline">GitHub</a>
              </div>
              <a href="" className="bg-[#D6E0FF] lg:ml-10 py-3 px-4 text-black hover:underline">Let's collaborate</a>
            </div>
          </div>
        </div>

      </section>
    </>
  )
}

export default Contact