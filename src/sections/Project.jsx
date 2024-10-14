import React from 'react'
import LineWrapper from '../components/LineWrapper'

function Project() {
  return (

    <>
    <LineWrapper/>
      <section id='project' className="h-full py-14 bg-black md:flex-col text-white flex items-center">
        <div className="container mx-auto flex md:justify-center">
          <div className='m-2'>
            <h2 className="text-3xl font-bold">This is Project container</h2>
            <p>Here will be the my Projects details.</p>
          </div>
          <div className='m-2'>
            <img className='h-auto max-w-full w-[40rem]' src="https://preview.redd.it/it9813ha66471.png?auto=webp&s=14653568fab6e7b6f6cf951fa253ed03a2575313" alt="" />
          </div>
        </div>
      </section>
    </>
  )
}

export default Project