import React, { useState } from 'react'

export default function Calc({area}) {
    const [value,setValue] = useState(0);

  return (
    <div>
        <label htmlFor='input'>Height</label>
        <input 
        id='input'
        type='number'
        onChange={(e) => setValue(e.target.value)}
        />
        <div>{value * area}</div>
    </div>
  )
}
