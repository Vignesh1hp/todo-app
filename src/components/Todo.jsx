import React, { useState } from 'react'
import './Todo.css'
const Todo = () => {
  const[input,setInput] = useState('');
  const[todoList,setTodoList] = useState([]);

  const handleTodo = () =>{
    if(input.trim() === "") return;
    const newItem = {
      id:Date.now(),
      text:input.trim(),
      completed:false
    }
    
    setTodoList(prev => [...prev,newItem])
    setInput('')
    
  }

  const handleDelete = (id) =>{
    const updatedTodo = todoList.filter(x =>x.id !== id)
    setTodoList(updatedTodo)

  }


  const handleCheckbox = (id) =>{
    const checkboxChange = todoList.map(t=>{
      if(t.id === id){
        return{
          ...t,
          completed:!t.completed
        }
      }else{
        return t;
      }
  })
    setTodoList(checkboxChange)
  }
  return (
    <div className='todo-box'>
      <input type="text" placeholder='Enter todo' value={input} onChange={(e)=>{setInput(e.target.value)}}/>
      <button onClick={()=>{handleTodo()}}>Add</button>
      <ul>
        {
          todoList.map(t =>(
            <li key={t.id}>
              <input type="checkbox" onChange={()=>handleCheckbox(t.id)}/>
              <span className={t.completed?"strikethrough":""}>{t.text}</span>
              <button onClick={() =>handleDelete(t.id)}>Delete</button>
            </li>
          )
          )
        }
      </ul>
    </div>
  )
}

export default Todo