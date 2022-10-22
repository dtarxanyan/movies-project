import React from 'react'
import CalcVolume from '../Functional/CalcVolume/CalcVolume'
import { useState } from 'react';

export default function CalcAreaAndVolume() {

    const [width,setWidth] = useState(0);
    const [length,setLength] = useState(0);

  return (
    <div>
        <label htmlFor='width'>Width</label>
        <input 
        type='number'
        id='width'
        onChange={(e) => setWidth(+e.target.value)}
        />
        <label htmlFor='length'>Length</label>
        <input 
        type='number'
        id='length'
        onChange={(e) => setLength(+e.target.value)}
        />
        <h5>Area</h5>
        <span>{width && length ? width*length:0}</span>
        <br/>
        <CalcVolume area={width * length}/>
    </div>
  )
}
