import React from 'react'
import { useState } from 'react'

export default function Volume(props) {
    const [volume, setVolume] = useState(null)
    const [height, setHeight] = useState(null)
    

    const changeHeight = (e) => {
        setHeight(+e)
        changeVolume()
    }

    const changeVolume = () => {
        setVolume(width * height * length)
    }

    const {width, length} = props
  return (
    <div className='wrapper'>
        <input type="text" placeholder = "Enter a height" onChange={(e) => changeHeight(e.target.value)}></input>
        <div className='result'>
            <span id='volumeResult'>{volume}</span>
        </div>
    </div>
  )
}
