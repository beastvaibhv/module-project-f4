import React from 'react'

const CheckOutList = ({list}) => {
  return (
    <div>
      <ul>
        {list.map((item)=>(<li>
          <div>{item.title}</div>
          <div>{item.price}</div>
        </li>))}
      </ul>
    </div>
  )
}

export default CheckOutList;
