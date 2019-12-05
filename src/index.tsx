import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { applyMiddleware, createStore } from 'redux';
import rootReducer from './reducers';
import { AppState, Language } from './types';
import { Provider } from 'react-redux';
import { createLogger } from 'redux-logger'
import './index.css';
import App from "./App";

const products = [
  { name: 'Apple iPhone 11 64GB (PRODUCT) RED', image: 'https://i.allo.ua/media/catalog/product/cache/1/image/425x295/799896e5c6c37e11608b9f8e1d047d15/i/p/iphone_11_r_2_2.jpg', price: 22999 },
  { name: 'Apple iPhone 11 Pro Max 64GB Gold', image: 'https://i.allo.ua/media/catalog/product/cache/1/image/425x295/799896e5c6c37e11608b9f8e1d047d15/i/p/iphone_11_pro_max_g_2_2.jpg', price: 35999 },
  { name: 'Apple iPhone 11 Pro Max 64GB Midnight Green', image: 'https://i.allo.ua/media/catalog/product/cache/1/image/425x295/799896e5c6c37e11608b9f8e1d047d15/i/p/iphone_11_pro_max_mg_2.jpg', price: 35999 },
  { name: 'Apple iPhone 11 128GB (PRODUCT) RED', image: 'https://i.allo.ua/media/catalog/product/cache/1/image/425x295/799896e5c6c37e11608b9f8e1d047d15/i/p/iphone_11_r_2.jpg', price: 24999 },
  { name: 'Apple iPhone XS 64GB Gold', image: 'https://i.allo.ua/media/catalog/product/cache/1/image/425x295/799896e5c6c37e11608b9f8e1d047d15/a/p/apple_iphone_xs_gold_2_1_1.jpg', price: 22499 },
  { name: 'Apple iPhone XR 128GB Black', image: 'https://i.allo.ua/media/catalog/product/cache/1/image/425x295/799896e5c6c37e11608b9f8e1d047d15/a/p/apple_iphone_xr_black_3_1.jpg', price: 20499 },
  { name: 'Apple iPhone 7 128GB Gold', image: 'https://i.allo.ua/media/catalog/product/cache/1/image/425x295/799896e5c6c37e11608b9f8e1d047d15/a/p/apple_iphone_7_gold_1_1.jpg', price: 13999 },
  { name: 'Apple iPhone 8 64GB Gold', image: 'https://i.allo.ua/media/catalog/product/cache/1/image/425x295/799896e5c6c37e11608b9f8e1d047d15/3/_/3_306_19.jpg', price: 15999 },
  { name: 'Apple iPhone 8 Plus 64GB Gold', image: 'https://i.allo.ua/media/catalog/product/cache/1/image/425x295/799896e5c6c37e11608b9f8e1d047d15/a/p/apple_iphone_8_plus_64gb_mq8n2_gold_5_2.jpeg', price: 18999 },
];

const logger = createLogger({});

const store = createStore<AppState>(
  rootReducer,
  {
    catalog: products,
    shoppingCart: [],
    totalPrice: 0,
    language: Language.Russian,
  },
  applyMiddleware(logger),
);

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root'),
);
