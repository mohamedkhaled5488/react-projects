import cartItems from "./data";
export const reducer = (state,action)=>{
    if(action.type === 'clear'){
return {...state,cart:[]};
    }
    if(action.type === 'refresh'){
        return {...state,cart:cartItems}
    }
    if(action.type === 'increase'){
      let increaseitem = state.cart.map((item)=>{
      if(item.id === action.payload){
        console.log('hello from reducer')
        return {...item,amount:item.amount+1 }
      }
      return item;
      })
      return {...state, cart: increaseitem }
    }
    if(action.type === 'decrease'){
        let increaseitem = state.cart.map((item)=>{
        if(item.id === action.payload){
          console.log('hello from reducer')
          return {...item,amount:item.amount-1 }
        }
        return item;
        }).filter((number)=>number.amount !== 0)
        return {...state, cart: increaseitem }
      }
      if(action.type === 'totalamount'){
        let {totalamout,totalprice} = state.cart.reduce((result,varible)=>{
           const { price, amount } = varible;
           let totalpr = amount * price
           result.totalprice += totalpr
           result.totalamout+= amount
            return result
        },{

totalamout: 0,
totalprice:0,
        })
        totalprice = parseFloat(totalprice.toFixed(2))
    return {...state,totalamout,totalprice}
      }
      if(action.type === 'loading'){
        return {...state,laonding:true}
      }
      if(action.type === 'display'){
        return {...state,cart:action.payload,laonding:false}
      }
    return state
}
export default reducer