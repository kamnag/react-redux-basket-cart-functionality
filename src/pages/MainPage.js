import React from 'react';
import { useDispatch } from 'react-redux';
import { addToBasket } from '../actions';
import { products } from '../data';

const MainPage = () => {

  const dispatch = useDispatch();

  const handleAddToBasket = (product) => {
    dispatch(addToBasket(product));
  };

  return (
    <div>
      <h1>Main Page</h1>
      <h2>Products</h2>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            <span>{product.name}</span>
            <button onClick={() => handleAddToBasket(product)}>Add to Basket</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MainPage;
