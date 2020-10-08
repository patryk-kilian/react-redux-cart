import React from 'react';
import Product from './Product';
import items from '../items.json';
import '../styles/products-list.scss';

function ProductsList() {
  return (
    <ul className='products-list'>
      {items.map((item) => (
        <Product key={item.id} product={item} />
      ))}
    </ul>
  );
}

export default ProductsList;
