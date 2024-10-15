import React from 'react'

function LineWrapper() {
    return (
        <div className="line-wrapper relative flex bg-black h-7">
            <div className="h-[2px] w-[49.5%] bg-[#474747]"></div>
            <div className="h-full w-[2px] absolute left-0 top-0 bottom-0 right-0 m-auto bg-[#474747] rotate-[-45deg]"></div>
            <div className="h-[2px] w-[49.5%] bottom-0 right-0 absolute bg-[#474747]"></div>
        </div>
    )
}

export default LineWrapper