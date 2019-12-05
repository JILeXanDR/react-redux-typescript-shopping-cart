import { AppAction } from '../actions';
import { ProductItem, AppState } from '../types';
import { ADD_PRODUCT, REMOVE_PRODUCT } from '../constants';

const calculatePrice = (products: ProductItem[]) => products.reduce((total, item) => total + item.price, 0);

export default function rootReducer(state: AppState, action: AppAction): AppState {
  const { shoppingCart } = state;
  const { payload, type } = action;

  switch (type) {
    case ADD_PRODUCT:
      const newItems = shoppingCart.concat([payload]);

      return {
        ...state,
        shoppingCart: newItems,
        total: calculatePrice(newItems),
      };
    case REMOVE_PRODUCT:
      const firstItem = shoppingCart.find(item => item === payload);
      const filteredItems = shoppingCart.filter(item => item !== firstItem);

      return {
        ...state,
        shoppingCart: filteredItems,
        total: calculatePrice(filteredItems),
      };
    default:
      return state;
  }
}
