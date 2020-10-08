import React from 'react';
import { MdShoppingCart } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { addToCart } from '../actions/cartActions';
import '../styles/product.scss';

function Product({ product = {} }) {
  const { title, cover, availability, price, currency } = product;

  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  return (
    <li className='product'>
      <img src={cover} alt={title} />
      {!availability ? (
        <div className='product__sold-out-box'>
          <p className='product__sold-out-text'>Out of stock</p>
        </div>
      ) : (
        <div className='product__info'>
          <p className='product__name'>{title}</p>
          <p className='product__price'>
            {price.toFixed(2)}&nbsp;{currency}
          </p>
          <button className='product__button' onClick={handleAddToCart}>
            Add to cart&nbsp;
            <MdShoppingCart className='icon' />
          </button>
        </div>
      )}
    </li>
  );
}

export default Product;
