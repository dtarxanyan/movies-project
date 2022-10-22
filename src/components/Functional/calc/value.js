import React, {useState} from "react";


function Value ({area}){
    const [height,setVeight] = useState(0)



    return(
        <div>
            <label>Height</label>
            <input type="number" value={height} onChange={(e)=>setVeight(e.target.value)}/>
            <div> Value: {height * area} </div>
        </div>
    )
}


export default Value