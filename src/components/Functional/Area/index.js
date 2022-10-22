import React, {useState,useEffect} from 'react';

function Index({width,length}) {

const [volume,setVolume] = useState(0)
    const [height,setHeight] =useState(0)
    const [area,setArea]= useState(0)

useEffect(()=>{
    setArea(width  * length)
},[height])

    useEffect(()=>{
        setVolume(width  * length)
    },[height])

    useEffect((e)=>{
        setHeight(e.target.value)
    },[])

    const handleInput =(e)=>{
    setHeight(e.target.value)
    }


    return (
        <div>
            <label id ={'Width'}></label>
            <input
                id ={'Width'}
                type={"number"}
                defaultValue={'width'}
            />


            <label id ={'Height'}></label>
            <input
                onChange={handleInput}
                id ={'Height'}
                type={"number"}
                defaultValue={'Height'}
            />
        <span> Area: {width * height}</span>


            <label id ={'Length'}></label>
            <input
                defaultValue={'Length'}
                id ={'Length'}
                type={"number"}
            />
        <span>Volume: {volume}</span>
        </div >
    );
}

export default Index;