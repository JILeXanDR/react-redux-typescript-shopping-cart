export type ProductItem = {
  name: string,
  image: string;
  price: number
}

export interface AppState {
  catalog: ProductItem[];
  shoppingCart: ProductItem[];
  total: number;
}
