import React from "react";
// components
import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";
// items
import { useState,useEffect} from "react";
import cartItems from "./cart-items";
import { createStore } from "redux";
import { Provider } from "react-redux";
import {reducer} from './Reducer'

const url ='https://course-api.com/react-useReducer-cart-project'

const initialState = {
  cart:cartItems ,
  totalamout:0,
  totalprice:0,
  }
 

const store = createStore(reducer,initialState)

function App() {
  
  return (
    
      <Provider store={store}>
      <Navbar />
      <CartContainer   />
      </Provider>
      

      

  );
}

export default App;
