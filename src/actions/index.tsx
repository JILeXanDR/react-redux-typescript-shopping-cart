import * as constants from '../constants';
import { ProductItem } from '../types';

export interface AddProduct {
  type: constants.ADD_PRODUCT;
  payload: ProductItem;
}

export interface RemoveProduct {
  type: constants.REMOVE_PRODUCT;
  payload: ProductItem;
}

export type AppAction = AddProduct | RemoveProduct;

export function addProduct(product: ProductItem): AddProduct {
  return {
    type: constants.ADD_PRODUCT,
    payload: product
  };
}

export function removeProduct(product: ProductItem): RemoveProduct {
  return {
    type: constants.REMOVE_PRODUCT,
    payload: product
  };
}
