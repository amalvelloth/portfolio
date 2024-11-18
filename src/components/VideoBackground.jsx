import React, { useRef, useEffect } from 'react';
import space from '../assets/spacetravel.mp4';
import  { ScrollTrigger } from 'gsap/ScrollTrigger';

function VideoBackground() {
    const videoRef = useRef(null);
    
    useEffect (() => {
        const video = videoRef.current;

        if (video) {
            ScrollTrigger.create({
                trigger: video,
                start: 'top top',
                end: 'bottom top',
                scrub: true,
                onUpdate: (self) => {
                    video.playbackRate = self.direction === 1 ? 3 : 1;
                },
            });
        }

        return () => {
            ScrollTrigger.killAll();
        };
    }, []);

    return (
        <div className="fixed top-0 left-0 w-screen h-screen overflow-hidden -z-10">
            <video
                ref={videoRef}
                className="absolute top-0 left-0 w-full h-full object-cover"
                src={space}
                type="video/mp4"
                playsInline
                autoPlay
                muted
                loop
            >
                Your browser does not support the video tag.
            </video>
            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60"></div>
        </div>
    );
}

export default VideoBackground;
