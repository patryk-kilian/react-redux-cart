import {
  OPEN_CART,
  CLOSE_CART,
  ADD_TO_CART,
  REMOVE_FROM_CART,
} from '../constants/actionTypes';

export const cartReducer = (
  state = { cartItems: [], isCartOpen: false },
  action
) => {
  switch (action.type) {
    case OPEN_CART:
      return {
        ...state,
        isCartOpen: action.payload,
      };
    case CLOSE_CART:
      return {
        ...state,
        isCartOpen: action.payload,
      };
    case ADD_TO_CART:
      const item = action.payload;

      const existingItem = state.cartItems.find((el) => el.id === item.id);

      if (existingItem) {
        return {
          ...state,
          cartItems: state.cartItems.map((el) =>
            el.id === existingItem.id ? { ...el, amount: el.amount + 1 } : el
          ),
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, { ...item, amount: 1 }],
        };
      }
    case REMOVE_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter((el) => el.id !== action.payload),
      };

    default:
      return state;
  }
};
