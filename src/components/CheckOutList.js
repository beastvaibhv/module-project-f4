import React, { useEffect, useState } from 'react'

const CheckOutList = ({list}) => {
  const [totalPrice, setTotalPrice] = useState(0);
  useEffect(()=>{
    setTotalPrice(calculateTotal);
  },[]);

  const calculateTotal = () => {
    if (list.length === 0) {
      return 0;
    }

    // Use reduce to sum the prices of all items in the list
    const total = list.reduce((acc, item) => acc + item.price, 0);
    return total;
  };

  return (
    <div className='chk-out-list'>
      <ul>
        {list.map((item)=>(<li className='list-chk-out'>
          <div>{item.title}</div>
          <div>{item.price}</div>
        </li>))}
        <li>{totalPrice}</li>
      </ul>
    </div>
  )
}

export default CheckOutList;
