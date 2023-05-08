import React from "react";
import CartItem from "./CartItem";
import {  connect } from "react-redux";
const CartContainer = ({ cart = [] ,totalprice,dispatch}) => {
 React.useEffect(()=>{
  dispatch({type:'totalamount'})
 })
  if (cart.length === 0) {
    return (
      <section className="cart">
        {/* cart header */}
        <header>
          <h2>your bag</h2>
          <h4 className="empty-cart">is currently empty</h4>
        </header>
      </section>
    );
  }
  return (
    <section className="cart">
      {/* cart header */}
      <header>
        <h2>your bag</h2>
      </header>
      {/* cart items */}
      <article>
        {cart.map(item => {
          return <CartItem key={item.id} {...item} />;
        })}
      </article>
      {/* cart footer */}
      <footer>
        <hr />
        <div className="cart-total">
          <h4>
            total <span>${totalprice}</span>
          </h4>
        </div>
        <button className="btn clear-btn" onClick={()=> dispatch({type:'clear'})}>clear cart</button>
      </footer>
    </section>
  );
};
const mapState=(stor)=>{
 const {cart,totalprice}=stor ;
 return {cart,totalprice}
}

export default connect(mapState) (CartContainer);
