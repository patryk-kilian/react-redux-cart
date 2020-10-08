import React from 'react';
import { MdDelete } from 'react-icons/md';
import { removeFromCart } from '../actions/cartActions';
import { useDispatch } from 'react-redux';
import '../styles/cart-product.scss';

function CartProduct({ product }) {
  const { id, title, cover, price, currency, amount } = product;

  const dispatch = useDispatch();

  const handleRemoveFromCart = () => {
    dispatch(removeFromCart(id));
  };

  return (
    <li className='cart-product'>
      <div>
        <img className='cart-product__img' src={cover} alt={title} />
      </div>
      <div className='cart-product__info'>
        <p className='cart-product__name'>{title}</p>
        <p className='cart-product__amount'>amount:&nbsp;{amount}</p>
        <p className='cart-product__price'>
          {(amount * price).toFixed(2)}&nbsp;{currency}
        </p>
      </div>
      <div className='cart-product__remove-box'>
        <button
          className='cart-product__remove-btn'
          aria-label='remove item from cart'
          onClick={handleRemoveFromCart}
        >
          <MdDelete className='icon' />
        </button>
      </div>
    </li>
  );
}

export default CartProduct;
