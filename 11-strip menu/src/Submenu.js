import React, { useState, useRef, useEffect } from 'react'
import { useGlobalContext } from './context'

const Submenu = () => {
  const {issubmenuopen ,location , page: { page, links }} = useGlobalContext();
  const heightref = useRef(null)
  const {top,left} = location ;
 
  // console.log(center)


  useEffect(()=>{
    const submenu = heightref.current
    submenu.style.left =`${top}px`
    submenu.style.top =`${left}px` 
  },[location])
 
  return  ( 
    <aside ref={heightref} className={issubmenuopen?'show':'hidden'}>
      <h3>  {page}</h3>
      <div className='submmenucontainer'>
      {links.map((item ,index)=>{
        const {label , icon ,url} = item ;
return(
  <li>
    <a href={url}>{label} {icon}</a>
  </li>
)
      })}
    
      </div>
    
    </aside>
  )
   
  
  }

export default Submenu
