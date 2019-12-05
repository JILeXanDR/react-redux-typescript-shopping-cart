export type ProductItem = {
  name: string,
  image: string;
  price: number
}

export interface ShoppingCartLine {
  product: ProductItem;
  count: number;
}

export interface AppState {
  catalog: ProductItem[];
  shoppingCart: ShoppingCartLine[];
  totalPrice: number;
  language: Language;
}

export enum Language {
  Russian,
  English,
}
