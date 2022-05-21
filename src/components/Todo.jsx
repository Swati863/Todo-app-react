import React from 'react'
import {useState} from 'react';
import {v4 as uuid} from "uuid";
import TodoList from "./TodoList";
import style  from "./style.module.css"

const Todo = () => {

    const [value,setValue] = useState("");
    const[todos,setTodo] = useState([]);

    const handleInput = () => {

        const info = {
            id:uuid(),
            title :value
            
        }
        setTodo([...todos,info])
     // setTodo will set the new info in todos,,...todos will destructure the array and store info in form of array,,
        setValue("") ; 
    }

    const handleDelete =(id) =>{
        let updateComp = (todos.filter((todo) => todo.id !== id))
        setTodo(updateComp)
     }
    

  return (
    <div className={style.main_div}>
        <h2 style={{color:"Red"}} >Add Todo</h2>
        <button onClick={handleInput}>+</button>
        <input value={value} type="text" placeholder='Add an Item' onChange={(e)=>setValue(e.target.value)} />
        

        {todos.map((info)=>(
            <TodoList key={info.id}  id={info.id} title={info.title} todos={todos} handleDelete={handleDelete}/>
        ))}
        
         
        
        </div>
  )
}

export default Todo