"use client"
import React, {useEffect} from 'react'
import "./video.module.css"

const HeroVideo = () => {
    const isMuted = true;

    useEffect(() => {
        const videoElement = document.getElementById('myVideo');
        videoElement.muted = isMuted;
        videoElement.play();
    }, [isMuted]);

  return (
    <video
        id="myVideo"
        src="/banner.mov"
        autoPlay
        loop
        playsInline
        muted
        className="rounded-lg hover:scale-110 transition duration-500 cursor-pointer object-cover"
    />
  )
}

export default HeroVideo