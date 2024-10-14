import React from 'react'

function LineWrapper() {
    return (
        <div className="line-wrapper flex ">
            <div className="h-[1px] w-[50%] bg-[#474747]"></div>
            <div className="h-[1px] w-[2%] bg-white rotate-45"></div>
            <div className="h-[1px] w-[50%] bg-[#474747]"></div>
        </div>

    )
}

export default LineWrapper