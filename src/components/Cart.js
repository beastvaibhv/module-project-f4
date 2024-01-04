import React from 'react';
import { useSelector } from 'react-redux';

import CartCard from './ItemCard';


const Cart = () => {

  const cartItems = useSelector(store=> store.cart.cartItems)
  return (
   

      <div>
      {cartItems.map((item)=>(<CartCard data= {item} key ={item.id} buttonType="RemoveFromCart"/>))}
      </div>
    

  )
}

export default Cart;
