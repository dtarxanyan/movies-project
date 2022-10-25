import React, {useState} from 'react'
import Todo from './../todo2/index'

export default function App() {
    const [input, setInput]= useState('');
    const [todo, setTodo] = useState([]);

    const handleInputChange = (e) => {
        setInput(e.target.value)
    }
    const addTodo = () => {
        setTodo(prev => ([...prev, 
            {
                name: input,
                id: Date.now(),
                done: false,
            },
        ]))
        setInput('')
        console.log(todo);
    }
    const removeTodo = (id) => {
        setTodo(prev => prev.filter(todo => todo.id !== id))
    }
    const completed = (id ) => {
        setTodo(prev => prev.map(todo => {
            if (todo.id === id) {
                todo.done = true
            }
            return todo
        }))
    }

  return (
    <div>
        <div className='mainTodos'>
            <p>Add a new task</p>
            <input value={input} type='text' onChange={handleInputChange} />
            <button onClick={addTodo}>Add todo</button>
        </div>
        <div className='myTodos'>
                {todo.map(item => <Todo 
                key={item.id} 
                removeTodo={removeTodo}
                completed={completed}
                {...item}/>)}
            </div>
       
    </div>
  )
}
