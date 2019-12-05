import * as actions from '../actions';
import { AppState, ProductItem, ShoppingCartLine } from '../types';
import { connect, Dispatch } from 'react-redux';
import { AddProduct, RemoveProduct } from '../actions';
import * as React from "react";
import Product from "../components/Product";
import './Catalog.css';

export function mapStateToProps(state: AppState) {
  return {
    catalog: state.catalog,
    shoppingCart: state.shoppingCart,
  };
}

interface Props {
  catalog: ProductItem[];
  shoppingCart: ShoppingCartLine[];
  addProduct: (product: ProductItem) => AddProduct;
  removeProduct: (product: ProductItem) => RemoveProduct;
}

class Catalog extends React.Component<Props> {
  private isInCart(item: ProductItem): boolean {
    return !!this.props.shoppingCart.find((line) => line.product === item);
  }

  render() {
    return (
      <div>
        <h2>Каталог</h2>
        <div className="Catalog">
          {this.props.catalog.map((item, index) => {
            return (
              <div className="Catalog-item" key={index}>
                <Product item={item}/>
                <span>{!this.isInCart(item) ? <button onClick={() => this.props.addProduct(item)}>Добавить в корзину</button> : <button onClick={() => this.props.removeProduct(item)}>Удалить с корзины</button>}</span>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}


export function mapDispatchToProps(dispatch: Dispatch<actions.AppAction>) {
  return {
    addProduct: (product: ProductItem): AddProduct => dispatch(actions.addProduct(product)),
    removeProduct: (product: ProductItem): RemoveProduct => dispatch(actions.removeProduct(product)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Catalog);
