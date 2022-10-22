import React from 'react'
import { useState, useEffect } from 'react'

export default function Volume(props) {
    const [volume, setVolume] = useState(null)
    const [height, setHeight] = useState(null)
    
    useEffect(() => {
        setVolume(width * height * length)
    },[height])

    const changeHeight = (e) => {
        setHeight(+e)
    }


    const {width, length} = props
  return (
    <div className='wrapper'>
        <input type="text" placeholder = "Enter a height" onChange={(e) => changeHeight(e.target.value)}></input>
        <div className='result'>
            <span id='volumeResult'>{volume || 0}</span>
        </div>
    </div>
  )
}
