import React from 'react'
import { useGlobalContext } from './context'
import useEffect from 'react'

// components
import Navbar from './Navbar'
import CartContainer from './CartContainer'
// items

function App() {
 const {cart , refresh,loading} = useGlobalContext();
 
if(loading){
  return (
    <main className='main'>
      <Navbar/>
      <h1>loading ...</h1>
    </main>
  )
}
 
  if(cart.length=== 0){
 return (<main className='main'>
    <Navbar />
    <h1>there is no list left </h1>
    <button onClick={refresh} >refresh</button>
  </main>)
  }


  return (
    <main>
     
      <Navbar />
      {cart.length && (
       <CartContainer />

      )}
    </main>
  )
}

export default App
