import React from 'react'
import style  from "./style.module.css"

const Complete = ({title,isChecked,id}) => {

 



  return (
      <div>
   
    <div>
  

    <h2 style={{color:"blue"}}>Completed Todos</h2>
    <div className={isChecked ? style.striked : "none"} > {title}  <span class="icon">★</span></div>
    
    </div>

    </div>
  )
}

export default Complete