import React from 'react'
import { GoArrowRight } from "react-icons/go";

function LetsTalk() {
    return (
        <div className="fixed hidden md:block rounded border border-dashed bg-transparent text-white cursor-pointer hover:border-solid hover:bg-white hover:text-black transition duration-300 ease-in-out m-10 right-0 top-0 px-20 py-1 z-50">
            <h2 className='flex items-center'>LETS TALK <GoArrowRight className='ms-3'/></h2>
        </div>

    )
}

export default LetsTalk