import React from 'react'
import { useState, useEffect } from 'react'

export default function Volume(props) {
    const {area} = props

    const [volume, setVolume] = useState(null)
    const [height, setHeight] = useState(null)
    
    useEffect(() => {
        setVolume(area * height)
    },[area, height])

    const changeHeight = (e) => {
        setHeight(+e)
    }

  return (
    <div className='wrapper'>
        <input type="text" placeholder = "Enter a height" onChange={(e) => changeHeight(e.target.value)}></input>
        <div className='result'>
            <span id='volumeResult'>{volume || null}</span>
        </div>
    </div>
  )
}
