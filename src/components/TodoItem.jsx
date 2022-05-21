import React from 'react';
import {useState} from 'react';
import {v4 as uuid} from "uuid";
import Complete from "./Complete";
import style  from "./style.module.css"


const TodoItem = ({title,id,todos,handleDelete}) => {


     const [comp,setComp] =useState([])
      //const[del,setDel] = useState(id)
  

    const handleComp = (e)=>{
       
        const data = {
            id : uuid(),
            title : title,
            isChecked : e.target.checked,
        };
        
        setComp ([...comp,data])

        //  setDel(comp.filter((todo) => todo.id !== id))
    };

   console.log(id)

    const handleDeletefn = ()=> {
      handleDelete(id)
   }
  

  return (
    <div >

    <input type="checkbox" todos={todos} onChange={handleComp}/>
    {title}

    {/* <span><i class="material-icons">star</i></span> */}
    <span class="icon">★</span>

  <button onClick={handleDeletefn}>Delete</button> 
   <div>

   {comp.map((item)=>(
  <Complete {...item} key={item.id}  title={title} />
   ))}
  </div>
    </div>
  )
}

export default TodoItem