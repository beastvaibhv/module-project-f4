import React from 'react';
import { useDispatch } from 'react-redux';
import { removeFromCart} from '../utils/CartSlice';


const ItemCard = ({data, buttonType}) => {
  const dispatch =useDispatch()

const handleRemoveFromCart=()=>{
     dispatch(removeFromCart(data));
}

 

  return (
    <div className='item-card-container'>
      <div className='item-img'>
        <img src={data.images[0]} alt="" />
      </div>
      <div>
      <div className='item-title'><b>Title:</b> {data.title}</div>
      <div className='item-price'><b>Price:</b> ${data.price}</div>
      <div className='item-btn'><button onCLick={handleRemoveFromCart} >{buttonType}</button></div>
      </div>
      
    </div>
  )
}

export default ItemCard;
