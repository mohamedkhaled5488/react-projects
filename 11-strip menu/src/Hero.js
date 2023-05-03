import React from 'react'
import phoneImg from './images/phone.svg'
import { useGlobalContext } from './context';

const Hero = () => {
  const  { showsubmenu , closesub} = useGlobalContext();
  const removesubmenu = (e)=>{
    if(e.target.classList.contains('main')){
      closesub()
    }
  }
  return(
    <main className='main' onMouseOver={removesubmenu}>
      <h1>Manage Any Content Anywhere</h1>
      <p>
      Strapi is the leading open-source headless CMS. It’s 100% JavaScript and fully customizable.
      </p>


    </main>
  )
}

export default Hero
