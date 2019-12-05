import Catalog from '../components/Catalog';
import * as actions from '../actions';
import { AppState, ProductItem } from '../types';
import { connect, Dispatch } from 'react-redux';
import { AddProduct, RemoveProduct } from '../actions';

export function mapStateToProps(state: AppState) {
  return {
    catalog: state.catalog,
    shoppingCart: state.shoppingCart,
    total: state.total,
  };
}

export function mapDispatchToProps(dispatch: Dispatch<actions.AppAction>) {
  return {
    addProduct: (product: ProductItem): AddProduct => dispatch(actions.addProduct(product)),
    removeProduct: (product: ProductItem): RemoveProduct => dispatch(actions.removeProduct(product)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Catalog);
