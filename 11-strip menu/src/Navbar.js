import React from 'react'
import logo from './images/logo.svg'
import { FaBars } from 'react-icons/fa'
import sublinks from './data';
import { useGlobalContext } from './context';
import { FaTimes } from 'react-icons/fa'
import useRef from 'react'



const Navbar = () => {
  const  { showsubmenu , closesub} = useGlobalContext();

  const [hidden , sethidden] = React.useState(false)
  const openside = ()=>{
  sethidden(true)
  }
  const closeside = ()=>{
    sethidden(false)
    }
  const theliheight = (e)=>{
    const page = e.target.textContent;
    const tempBtn = e.target.getBoundingClientRect();
    const center = (tempBtn.left + tempBtn.right) / 2 - 60;
    const bottom = tempBtn.bottom - 1;
    showsubmenu( page,{top: center,left: bottom })
    console.log(tempBtn)
  }
  const removesubmenu = (e)=>{
    if(!e.target.classList.contains('liitem')){
      closesub()
    }
  }
 

  return (
    <>
    <nav className='navlist'>
      <div className='image' >
      <img src={logo} alt='image'/>
      </div>
      <ul >
        {sublinks.map((title)=>{
      const {page} = title ;
      return(
        <li onMouseOver={theliheight}className='liitem'  >
          {page}
        </li>
      )
        })}
       
      </ul>
    

    </nav>
    <nav className='mobilnav'>
    <img src={logo} alt='image'/>
    <button className='tagle'onClick={()=>closeside()} >
      <FaBars/>
    </button>
   
    <div className={hidden ? 'hidden' : 'sidebar-links'} onClick={()=>openside()} >
    <button className='close-btn'>
          <FaTimes />
        </button>
          {sublinks.map((item, index) => {
            const { links, page } = item
            return (
              <article key={index}>
                <h4>{page}</h4>
                <div className='sidebar-sublinks'>
                  {links.map((link, index) => {
                    const { url, icon, label } = link
                    return (
                      <a key={index} href={url}>
                        {icon}
                        {label}
                      </a>
                    )
                  })}
                </div>
              </article>
            )
          })}
        </div>
          
         
    </nav>

    </>
  )
}

export default Navbar
