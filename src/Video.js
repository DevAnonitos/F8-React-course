import videos01 from './videos/videos01.mp4'
import React from 'react'

const Video = () => {
  return (
    <video 
        src={ videos01 } 
        autoPlay
        width={350}
        controls
    />
  )
}

export default Video