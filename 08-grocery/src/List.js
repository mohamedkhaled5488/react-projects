import React from 'react'
import { FaEdit, FaTrash } from 'react-icons/fa'
const List = ({item,removeitem,edititem}) => {
  return(
    <div className='list_container'>
    {item.map((list)=>{
const {id,title} = list
return(
  <div className='item'>
  <p className='list' key={id}>
    {title}
    <div>
    <button className='btn' onClick={()=>edititem(id)}>
<FaEdit/>
  </button>
  <button className='btn' onClick={()=>removeitem(id)}>
<FaTrash/>
  </button>
    </div>
   
  </p>
  
  </div>
)
    })}
    </div>
  )
}

export default List
