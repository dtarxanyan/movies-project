import React, { useState } from 'react';

export default function Todo({name, id, done,removeTodo,completed}) {
    const [edited, setEdited] = useState(false)
    const [changed, setChanged] = useState(name)

    const edit = () =>{
        setEdited(true)
    }
    const reset = () => {
        setChanged(name)
        setEdited(false)
    }

  return (
    <div className='added' >
        {edited ?
        <div>
        <input value={changed} onChange={e => setChanged(e.target.value)} type="text" />
        <button onClick={reset}>X</button>
   </div>:
        <div>
            <div onClick={() => completed(id)} className={` ${done ? 'done' : ''}`} >{name}</div>
            <button onClick={() => removeTodo(id)} className='icon'>X</button>
            <input type='checkbox' className='iconCheck' />
            <button onClick={edit} className='iconEdit'>✏</button>
        </div>
}
    </div>
  )
}