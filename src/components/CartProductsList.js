import React from 'react';
import CartProduct from './CartProduct';
import '../styles/cart-products-list.scss';

function CartProductsList({ products = [] }) {
  return (
    <ul className='cart-products'>
      {products.map((product) => (
        <CartProduct key={product.id} product={product} />
      ))}
    </ul>
  );
}

export default CartProductsList;
