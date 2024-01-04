import React from 'react';
import { useSelector } from 'react-redux';

import CartCard from './ItemCard';
import CheckOutList from './CheckOutList';


const Cart = () => {

  const cartItems = useSelector(store=> store.cart.cartItems)
  return (
   
    <div className='cart-container'>
      <div className='cart-item'>
      {cartItems.map((item)=>(<CartCard data= {item} key ={item.id} buttonType="RemoveFromCart"/>))}
      </div>
      <div className='cart-list'>
        <CheckOutList list={cartItems}/>
      </div>
    </div>

  )
}

export default Cart;
