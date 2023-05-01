import React, { useState, useRef, useEffect } from 'react'
import { FaBars, FaTwitter } from 'react-icons/fa'
import { links, social } from './data'
import logo from './logo.svg'

const Navbar = () => {
  const [navbar,setnavbar] = useState(false);
  const containerref = useRef(null);
  const ullistref = useRef(null);
  useEffect(()=>{
const theheight = ullistref.current.getBoundingClientRect().height;
if(navbar){
  containerref.current.style.height =`${theheight}px`
}else{
  containerref.current.style.height = `0px`
}
console.log(theheight)
  },[navbar])
  return(
    <nav>
      <img src={logo} />
      <button className='main-btn' onClick={()=>setnavbar(!navbar)}>
        <FaBars/>
      </button>

<div className='menu' ref={containerref}>
<ul ref={ullistref} >
        {links.map((header)=>{
          const {text,id} = header ;
          return(
            <li key={id} >
              {text}
            </li>
          )
        })}
      </ul>
</div>
     
    
    <div className='icons'>
      {social.map((icons)=>{
const {id , url ,icon} = icons ;
return (
  <button key={id} >
   <a href={url} >{icon}</a>
  </button>
)
      })}
    </div>

    </nav>
  )
}

export default Navbar
