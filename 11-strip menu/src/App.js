import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import Sidebar from './Sidebar'
import Submenu from './Submenu'
import { useEffect } from 'react'
import { useContext } from 'react'
import { useGlobalContext } from './context'
function App() {

  return (
    <>
    
     <Navbar/>
     <Hero/>
     <Submenu/>

    </>
  )
}

export default App
