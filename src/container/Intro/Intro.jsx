import React, { useState } from 'react'
import { BsFillPlayFill, BsPauseFill } from 'react-icons/bs'
import { meal } from '../../constants'
import './Intro.css'

const Intro = () => {
  const [play, setplay] = useState(false)
  const vidRef = React.useRef()

  const handleVideo = () => {
    setplay((prevPlay) => !prevPlay)

    if (play) {
      vidRef.current.pause()
    } else {
      vidRef.current.play()
    }
  }

  return (
    <div className="app__video">
      <video
        src={meal}
        ref={vidRef}
        type="video/mp4"
        loop
        controls={false}
        muted
      ></video>
      <div className="video__overlay flex__center">
        <div
          className="video__overlay-circle flex__center"
          onClick={handleVideo}
        >
          {play ? (
            <BsPauseFill color="#fff" fontSize={30} />
          ) : (
            <BsFillPlayFill color="#fff" fontSize={30} />
          )}
        </div>
      </div>
    </div>
  )
}

export default Intro
