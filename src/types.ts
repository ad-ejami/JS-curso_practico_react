export interface Product {
  id: number;
  title: string;
  price: number;
  images: string[];
  description?: string;
}

export interface AppState {
  cart: Product[];
}

export interface AppContextType {
  state: AppState;
  addToCart: (product: Product) => void;
  removeFromCart: (product: Product) => void;
}
