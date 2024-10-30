import React from 'react'
import LineWrapper from '../components/LineWrapper'
// import LetsTalk from '../components/LetsTalk'

function Contact() {
  return (

    <>
      <LineWrapper />
      <section id='contact' className="h-full py-14 bg-black text-white flex items-center">
        <div className="container max-lg:flex-col mx-auto flex md:justify-center">
          <div className='m-2'>
            <h2 className="text-3xl font-bold">Got a prject?</h2>
            <p>Here will be the my Contact details.</p>
          </div>
          <div className='m-2'>
            <img className='h-auto max-w-full w-[40rem]' src="https://images.hdqwalls.com/download/blade-runner-2049-arts-s2-2560x1440.jpg" alt="" />
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact