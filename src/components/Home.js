import React, {useState, useEffect} from 'react';
import ItemCard from './ItemCard';
import { ITEM_API } from '../utils/constant';





const Home = () => {
const [items, setItems] = useState([]);




useEffect(()=>{
  fetchItem();
},[]);

  const fetchItem =()=>{
    fetch(ITEM_API)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        if (data && data.products && Array.isArray(data.products)) {
        
          setItems(data.products);
          console.log(data.products);
        } else {
          console.error('Invalid data format received from the API');
        }
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }

  return (
    <>
      <h1>All Items</h1>
   
    <div className='home-container'>
      {items.map((item)=>(<ItemCard data={item} key={item.id} buttonType="Add to Cart" />))}
    </div>
    </>
  )
}

export default Home;
