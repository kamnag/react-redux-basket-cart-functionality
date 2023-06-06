// Basket.js

import React from 'react';
import { connect } from 'react-redux';

const Basket = ({ items }) => {
  return (
    <div>
      <h2>My Basket</h2>
      <ul>
        {items.map(item => (
          <li key={item.id}>
            {item.name} - Quantity: {item.quantity}
          </li>
        ))}
      </ul>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    items: state.items
  };
};

export default connect(mapStateToProps)(Basket);
