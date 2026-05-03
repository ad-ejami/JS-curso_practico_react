import axios from 'axios';
import { useEffect, useState } from 'react';
import { Product } from '../types';

const useGetProducts = (API: string): Product[] => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async (): Promise<void> => {
      const response = await axios.get<Product[]>(API);
      setProducts(response.data);
    };
    fetchProducts();
  }, []);

  return products;
};

export default useGetProducts;
