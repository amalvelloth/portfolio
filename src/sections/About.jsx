import React from 'react'
import LineWrapper from '../components/LineWrapper'

function About() {
  return (


    <>
    <LineWrapper/>
      <section id='about' className="h-full py-14 bg-black text-white flex items-center">
        <div className="container mx-auto flex md:justify-center">
          <div className='m-2'>
            <h2 className="text-3xl font-bold">This is About container</h2>
            <p>Here will be the my about details.</p>
          </div>
          <div className='m-2'>
            <img className='h-auto max-w-full w-[40rem]' src="https://static1.moviewebimages.com/wordpress/wp-content/uploads/2022/04/ana-de-armas-blade-runner-2049.jpeg" alt="" />
          </div>
        </div>
      </section>
    </>
  )
}

export default About