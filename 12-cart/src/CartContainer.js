import React from 'react'
import CartItem from './CartItem'
import { useGlobalContext } from './context'

const CartContainer = () => {

  const {cart,clear,total,amount,increase,totalprice} = useGlobalContext();

  
  return (
    <section className='cart'>
     <h1>your bag</h1>
   <div className='items-container'>
    {cart.map((item)=>{
return <CartItem key={item} {...item}/>
    })}
      <div className='line'></div>
      <div className='total'>
        <h3>total</h3>
        <h3>{totalprice}</h3>
      </div>
     <div className='clear'>
     <button onClick={clear}>clear Cart</button>
     </div>
   
   
   </div>
    </section>
  
  )
}

export default CartContainer
