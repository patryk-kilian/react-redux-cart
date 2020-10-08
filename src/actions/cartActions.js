import {
  OPEN_CART,
  CLOSE_CART,
  ADD_TO_CART,
  REMOVE_FROM_CART,
} from '../constants/actionTypes';

export const openCart = () => (dispatch) => {
  dispatch({
    type: OPEN_CART,
    payload: true,
  });
};

export const closeCart = () => (dispatch) => {
  dispatch({
    type: CLOSE_CART,
    payload: false,
  });
};

export const addToCart = (item) => (dispatch) => {
  dispatch({
    type: ADD_TO_CART,
    payload: item,
  });
};

export const removeFromCart = (id) => (dispatch) => {
  dispatch({
    type: REMOVE_FROM_CART,
    payload: id,
  });
};
