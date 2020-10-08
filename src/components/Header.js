import React from 'react';
import { MdShoppingCart } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { openCart } from '../actions/cartActions';
import '../styles/header.scss';

function Header() {
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);

  const cartAmount = cart.cartItems.reduce((acc, item) => acc + item.amount, 0);

  const handleOpenCart = () => {
    dispatch(openCart());
  };

  return (
    <header className='header'>
      <div className='header__wrap'>
        <h1>Game Shop</h1>
        <div className='header__icon-wrap'>
          <span className='header__cart-title'>cart</span>
          <button aria-label='open cart' onClick={handleOpenCart}>
            <MdShoppingCart className='header__cart-icon' />
            <span className='header__cart-items-count'>{cartAmount}</span>
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
