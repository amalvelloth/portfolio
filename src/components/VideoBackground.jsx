import React from 'react'
import space from '../assets/spacetravel.mp4'; // Import the space video


function VideoBackground() {
    return (
        <div className="fixed top-0 left-0 w-screen h-screen overflow-hidden -z-10 ">
            <video
                className="absolute top-0 left-0 w-full h-full object-cover "
                src={space}
                type="video/mp4"
                playsInline
                autoPlay
                muted
                loop
            >
                Your browser does not support the video tag.
            </video>
        </div>
        
    )
}

export default VideoBackground