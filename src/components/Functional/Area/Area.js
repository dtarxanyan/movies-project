import React from 'react'
import { useState } from 'react'
import Volume from '../Volume/Volume'

export default function Area() {
    const [width, setWidth] = useState(null)
    const [length, setLength] = useState(null)

    const changeWidth = (e) => {
        setWidth(e.target.value)
    }

    const changeLength = (e) => {
        setLength(e.target.value)
    }
  return (
    <div className='area'>
        <input type={"text"} placeholder = "Enter a width" onChange={changeWidth}></input>
        <input type={"text"} placeholder = "Enter a length" onChange={changeLength}></input>
        <div className='areaResult'>
            <span className='calculatedArea'>{width && length ? width * length : null}</span>
        </div>
        <Volume width = {width} length = {length}></Volume>
    </div>
  )
}
