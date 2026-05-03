import React, { useContext } from 'react';
import '@styles/ProductItem.scss';
import iconAddToCar from '@icons/bt_add_to_cart.svg';
import AppContext from '@context/AppContext';
import { Product } from '../types';

interface ProductItemProps {
  product: Product;
}

const ProductItem = ({ product }: ProductItemProps): React.JSX.Element => {
  const { addToCart } = useContext(AppContext);

  const handleClick = (item: Product): void => {
    addToCart(item);
  };

  return (
    <div className="ProductItem">
      <img src={product.images[0]} alt={product.title} />
      <div className="product-info">
        <div>
          <p>$ {product.price}</p>
          <p>{product.title}</p>
        </div>
        <figure onClick={() => handleClick(product)}>
          <img src={iconAddToCar} alt="" />
        </figure>
      </div>
    </div>
  );
};

export default ProductItem;
