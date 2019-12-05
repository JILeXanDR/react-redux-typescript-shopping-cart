import * as React from 'react';
import * as actions from '../actions';
import { AppState, ProductItem, ShoppingCartLine } from '../types';
import { connect, Dispatch } from 'react-redux';
import { AddProduct, RemoveProduct } from "../actions";
import './Cart.css';
import { formatPrice } from "../utils";

export interface Props {
  list: ShoppingCartLine[];
  totalPrice: number;
  increment: (product: ProductItem) => AddProduct,
  decrement: (product: ProductItem) => RemoveProduct,
}

class Cart extends React.Component<Props, {}> {
  render() {
    return (
      <div>
        <h1>Корзина</h1>
        <div>Всего товаров в корзине {this.props.list.length} на сумму {formatPrice(this.props.totalPrice)}</div>
        <ul>
          {this.props.list.map((line, index) => {
            return (
              <div className="Cart-item" key={index}>
                <div>{line.product.name}</div>
                <div>(x${line.count})</div>
                <div>
                  <button onClick={() => this.props.decrement(line.product)}>-</button>
                  <button onClick={() => this.props.increment(line.product)}>+</button>
                </div>
              </div>
            );
          })}
        </ul>
      </div>
    );
  }
}

export function mapStateToProps(state: AppState) {
  return {
    list: state.shoppingCart,
    totalPrice: state.totalPrice,
  };
}

export function mapDispatchToProps(dispatch: Dispatch<actions.AppAction>) {
  return {
    increment: (product: ProductItem): AddProduct => dispatch(actions.addProduct(product)),
    decrement: (product: ProductItem): RemoveProduct => dispatch(actions.removeProduct(product)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
