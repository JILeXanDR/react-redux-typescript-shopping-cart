import * as React from "react";
import { ProductItem } from '../types';
import { formatPrice } from '../utils';
import './Product.css';

interface Props {
  item: ProductItem;
}

export default class Product extends React.Component<Props, {}> {
  render() {
    const { item } = this.props;
    return (
      <div className="Product">
        <img src={item.image} alt=""/>
        <span>{item.name}</span>
        <span>{formatPrice(item.price)}</span>
      </div>
    );
  }
}
