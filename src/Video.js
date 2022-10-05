import videos01 from './videos/videos01.mp4'
import React from 'react'
import { forwardRef, useImperativeHandle, useRef } from 'react'


const Video = (props, ref) => {

  const videoRef = useRef();

  useImperativeHandle(ref, () => ({
    play(){
      videoRef.current.play();
    },
    pause(){
      videoRef.current.pause();
    }
  }))

  return (
    <video 
        ref={videoRef}
        src={ videos01 } 
        width={350}
    />
  )
}

export default forwardRef(Video)