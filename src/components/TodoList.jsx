import React from 'react'
import TodoItem from './TodoItem'

const TodoList = ({title,todos,id,handleDelete}) => {


 


  return (
    <div>

        <TodoItem key={todos.id} title = {title} id={id} handleDelete={handleDelete} ></TodoItem>
    </div>
  )
}

export default TodoList