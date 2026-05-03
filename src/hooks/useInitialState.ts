import { useState } from 'react';
import { AppState, AppContextType, Product } from '../types';

const initialState: AppState = {
  cart: [],
};

const useInitialState = (): AppContextType => {
  const [state, setState] = useState<AppState>(initialState);

  const addToCart = (payload: Product): void => {
    setState({
      ...state,
      cart: [...state.cart, payload],
    });
  };

  const removeFromCart = (payload: Product): void => {
    setState({
      ...state,
      cart: state.cart.filter(item => item.id !== payload.id),
    });
  };

  return {
    state,
    addToCart,
    removeFromCart,
  };
};

export default useInitialState;
