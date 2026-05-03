import React, { useContext } from 'react';
import AppContext from '@context/AppContext';
import '@styles/OrderItem.scss';
import iconClose from '@icons/icon_close.png';
import { Product } from '../types';

interface OrderItemProps {
  product: Product;
}

const OrderItem = ({ product }: OrderItemProps): React.JSX.Element => {
  const { removeFromCart } = useContext(AppContext);

  const handleRemove = (item: Product): void => {
    removeFromCart(item);
  };

  return (
    <div className="OrderItem">
      <figure>
        <img src={product.images[0]} alt={product.title} />
      </figure>
      <p>{product.title}</p>
      <p>${product.price}</p>
      <img
        src={iconClose}
        alt="close"
        onClick={() => handleRemove(product)}
      />
    </div>
  );
};

export default OrderItem;
