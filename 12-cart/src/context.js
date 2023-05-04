import React, { useState, useContext, useReducer, useEffect } from 'react'
import cartItems from './data'
import reducer from './reducer'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-useReducer-cart-project'

const AppContext = React.createContext()
const initialState = {
loading:false,
cart:cartItems,
totalamout:0,
totalprice:0,

}
const AppProvider = ({children})=>{
  const [state ,dispatch] = useReducer(reducer,initialState)
  const clear = ()=>{
    dispatch({type:'clear'})
  }
  const refresh = ( )=>{
    dispatch({type:'refresh'})
  }
  const increase = (id)=>{
    dispatch({type:'increase',payload:id})
  }
  const decrease = (id)=>{
    dispatch({type:'decrease', payload:id})
  }
 
  useEffect(()=>{
      dispatch({type:'totalamount'})
  },[state.cart])

  const fitchdata = async ()=>{
    dispatch({type:'loading'})
    const respose = await fetch(url);
    const data = await respose.json();
    dispatch({type:'display', payload:data})
  }
  useEffect(()=>{
    fitchdata()
  },[])
  return( <AppContext.Provider value={{...state,clear,refresh,increase,decrease}}>
    {children}
  </AppContext.Provider>)
}
export const useGlobalContext = ()=>{
 return useContext(AppContext);
}
export  {AppContext,AppProvider}