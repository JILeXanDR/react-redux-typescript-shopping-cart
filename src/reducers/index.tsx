import { AppAction } from '../actions';
import { AppState, ShoppingCartLine } from '../types';
import { ADD_PRODUCT, REMOVE_PRODUCT } from '../constants';

const calculatePrice = (cart: ShoppingCartLine[]) => cart.reduce((total, item) => total + item.product.price * item.count, 0);

export default function rootReducer(state: AppState, action: AppAction): AppState {
  const { shoppingCart } = state;
  const { payload, type } = action;

  switch (type) {
    case ADD_PRODUCT: {
      const newShoppingCart = [...shoppingCart];

      let line = newShoppingCart.find(line => line.product === payload);
      if (!line) {
        line = {
          product: payload,
          count: 0,
        };
        newShoppingCart.push(line);
      }

      line.count++;

      return {
        ...state,
        shoppingCart: newShoppingCart,
        totalPrice: calculatePrice(newShoppingCart),
      };
    }
    case REMOVE_PRODUCT: {
      let newShoppingCart = [...shoppingCart];

      let line = newShoppingCart.find(line => line.product === payload);
      if (line) {
        line.count--;

        if (line.count === 0) {
          newShoppingCart = newShoppingCart.filter((line) => line.product !== payload);
        }
      }

      return {
        ...state,
        shoppingCart: newShoppingCart,
        totalPrice: calculatePrice(newShoppingCart),
      };
    }


    default:
      return state;
  }
}
