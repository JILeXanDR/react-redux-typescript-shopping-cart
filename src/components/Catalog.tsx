import * as React from 'react';
import { ProductItem } from '../types';
import { AddProduct, RemoveProduct } from '../actions';
import './Catalog.css';

export interface Props {
  catalog: ProductItem[];
  shoppingCart: ProductItem[];
  total: number;
  addProduct: (product: ProductItem) => AddProduct;
  removeProduct: (product: ProductItem) => RemoveProduct;
}

const formatPrice = (price: number) => `${price.toFixed(2)}₴`;

export default class Catalog extends React.Component<Props> {
  render() {
    return (
      <div>
        <header>Всего товаров в корзине {this.props.shoppingCart.length} на сумму {formatPrice(this.props.total)}</header>
        <h2>Каталог</h2>
        <div>
          {this.props.catalog.map((item, index) => {
            const inCart = this.props.shoppingCart.find((productItem: ProductItem) => productItem === item);
            return (
              <div key={index}>
                <img src={item.image} alt=""/>
                <span>{item.name}</span>
                <span>{inCart ? <button onClick={() => this.props.removeProduct(item)}>Удалить с корзины</button> : <button onClick={() => this.props.addProduct(item)}>Добавить в корзину</button>}</span>
                <span>{formatPrice(item.price)}</span>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
