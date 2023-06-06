import React from 'react';
import { connect } from 'react-redux';
import { removeFromBasket } from '../actions';

const BasketPage = ({ basketItems, removeFromBasket }) => {
  const handleRemoveFromBasket = (productId) => {
    removeFromBasket(productId);
  };

  return (
    <div>
      <h1>Basket</h1>
      <ul>
        {basketItems.map((item) => (
          <li key={item.id}>
            {item.name} - {item.price} - Quantity: {item.quantity}{' '}
            <button onClick={() => handleRemoveFromBasket(item.id)}>
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    basketItems: state.basket.basketItems,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    removeFromBasket: (productId) => dispatch(removeFromBasket(productId)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BasketPage);
