import React, {useEffect, useReducer, useState} from "react";


function Volume({area}) {
   const [inputValue, setInputValue] = useState(0)
    const [volume, setvolume] =  useState(0)
    const handleChange = (e) => {
        setInputValue(e.target.value)

    }

    useEffect(()=>{setvolume( inputValue * area)},[inputValue])

    return (
        <div>
              <input type="text" value={inputValue} onChange={(e)=>handleChange(e)}/>
            <span>{volume}</span>
        </div>



    )

}


export default Volume