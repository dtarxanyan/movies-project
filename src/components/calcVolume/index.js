import React,{useState} from 'react'


export default function CalcVolume({area}){
const [volume,setVolume]=useState('')
    return(<>
    <h3>height</h3>
<input type='text' onChange={e=>setVolume(e.target.value*area)}/>
<div>Volume:{volume}</div>

</>)



}