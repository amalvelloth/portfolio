import React from 'react'

function LineWrapper() {
    return (
        // <div className="flex relative justify-start items-center h-10 bg-gray-100">
        //     <div className='block relative top-0 w-48 h-1 bg-red-600'></div>
        //     <div className="block relative w-[52px] h-1 bg-green-500 rotate-[45deg] flex-shrink-0"></div>
        //     <div className='block w-full h-1 bg-blue-700'></div>
        // </div>
        
        <div className="flex relative justify-start items-center h-6 bg-black overflow-hidden">
    <div className='border-t border-[#474747] w-20 h-6 mr-[-19px]'></div>
    <div className="block w-[70px] h-[1px] bg-[#474747] rotate-[35deg] flex-shrink-0"></div>
    <div className="border-b border-l-0 border-r-0 border-[#474747] w-full h-6 m-[-18px]"></div>
</div>

    )
}

export default LineWrapper