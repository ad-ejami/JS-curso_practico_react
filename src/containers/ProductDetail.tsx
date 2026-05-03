import React from 'react';
import ProductInfo from '@components/ProductInfo';
import '@styles/ProductDetail.scss';
import iconClose from '@icons/icon_close.png';

const ProductDetail = (): React.JSX.Element => {
  return (
    <aside className="ProductDetail">
      <div className="ProductDetail-close">
        <img src={iconClose} alt="close" />
      </div>
      <ProductInfo />
    </aside>
  );
};

export default ProductDetail;
