import React from 'react';
import { MdClose } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { closeCart } from '../actions/cartActions';
import CartProductsList from './CartProductsList';
import '../styles/cart.scss';

function Cart() {
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);
  const { isCartOpen, cartItems } = cart;

  const cartAmount = cart.cartItems.reduce((acc, item) => acc + item.amount, 0);

  const cartTotalPrice = cart.cartItems.reduce(
    (acc, item) => acc + item.amount * item.price,
    0
  );

  const handleCloseCart = () => {
    dispatch(closeCart());
  };

  return (
    <aside className={`cart ${isCartOpen ? 'cart--open' : ''}`}>
      <header className='cart__header'>
        <h3>
          cart&nbsp;<span>({cartAmount})</span>
        </h3>
        <button
          className='cart__close-button'
          aria-label='close cart'
          onClick={handleCloseCart}
        >
          <MdClose className='icon' />
        </button>
      </header>
      {cartItems.length === 0 ? (
        <div>
          <p className='cart__empty-cart'>Cart is empty</p>
        </div>
      ) : (
        <CartProductsList products={cartItems} />
      )}
      <div className='cart__total'>
        <span>total:&nbsp;{cartTotalPrice.toFixed(2)}&nbsp;PLN</span>
      </div>
    </aside>
  );
}

export default Cart;
