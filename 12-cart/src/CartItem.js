import React from 'react'
import { useGlobalContext } from './context'
const CartItem = ({ id, img, title, price, amount }) => {
  const {cart,clear,total,increase,decrease} = useGlobalContext();

  return (

     <div className='item-container' >
              <div className='item-info-container'>
               

                <div className='item-info-title'>
                  <div className='img-pic'>
                  <img src={img}  />

                  </div>
                  <div>

                  <h3>{title}</h3>
                  <h4>{price}</h4>
                  <button className='remove'>remove</button>
                  </div>

                </div>
                </div>

        <div className='counter-container'>
        <button className='amount-btn' onClick={()=>increase(id)}>
          <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'>
            <path d='M10.707 7.05L10 6.343 4.343 12l1.414 1.414L10 9.172l4.243 4.242L15.657 12z' />
          </svg>
        </button>
        {/* amount */}
   
        <p className='amount'>{amount}</p>

     
        {/* decrease amount */}
        <button className='amount-btn' onClick={()=>decrease(id)} >
          <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'>
            <path d='M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z' />
          </svg>
        </button>
        </div>
      
    
    </div>
   
  )
}

export default CartItem
